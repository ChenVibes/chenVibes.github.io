/**
 * virtual list default component
 */
import Virtual from './virtual'
import { Item, Slot } from './item'
import { VirtualProps } from './props'
import {
  h,
  ref,
  watch,
  onMounted,
  onUnmounted,
  onActivated,
  onDeactivated,
  defineComponent
} from 'vue'
const EVENT_TYPE = {
  ITEM: 'item_resize',
  SLOT: 'slot_resize'
}
const SLOT_TYPE = {
  HEADER: 'thead', // string value also use for aria role attribute
  FOOTER: 'tfoot'
}

export default defineComponent({
  name: 'virtual-scroll-list',
  props: VirtualProps,
  functional: true,
  emits: [
    EVENT_TYPE.ITEM,
    EVENT_TYPE.SLOT,
    'resized',
    'scroll',
    'totop',
    'tobottom'
  ],
  setup(props, ctx) {
    // init props
    let virtual = null
    let isHorizontal = props.direction === 'horizontal'
    let directionKey = isHorizontal ? 'scrollLeft' : 'scrollTop'
    let range = ref({})
    onActivated(() => {
      // set back offset when awake from keep-alive
      scrollToOffset(virtual.offset)

      if (props.pageMode) {
        document.addEventListener('scroll', onScroll, {
          passive: false
        })
      }
    })
    onDeactivated(() => {
      if (props.pageMode) {
        document.removeEventListener('scroll', onScroll)
      }
    })
    onMounted(() => {
      const { header, footer } = ctx.$slots || {}
      // listen slot size change
      if (header || footer) {
        ctx.emit(EVENT_TYPE.SLOT, onSlotResized)
      }
      // set position
      if (props.start) {
        scrollToIndex(props.start)
      } else if (props.offset) {
        scrollToOffset(props.offset)
      }

      // in page mode we bind scroll event to document
      if (props.pageMode) {
        updatePageModeFront()

        document.addEventListener('scroll', onScroll, {
          passive: false
        })
      }
    })
    onUnmounted(() => {
      virtual.destroy()
      if (props.pageMode) {
        document.removeEventListener('scroll', onScroll)
      }
    })
    // methods
    // get item size by id
    const getSize = id => {
      return virtual.sizes.get(id)
    }

    // get the total number of stored (rendered) items
    const getSizes = () => {
      return virtual.sizes.size
    }

    // return current scroll offset
    const getOffset = () => {
      if (props.pageMode) {
        return (
          document.documentElement[directionKey] || document.body[directionKey]
        )
      } else {
        const { root } = ctx.$refs
        return root ? Math.ceil(root[directionKey]) : 0
      }
    }

    // return client viewport size
    const getClientSize = () => {
      const key = isHorizontal ? 'clientWidth' : 'clientHeight'
      if (props.pageMode) {
        return document.documentElement[key] || document.body[key]
      } else {
        const { root } = ctx.$refs
        return root ? Math.ceil(root[key]) : 0
      }
    }

    // return all scroll size
    const getScrollSize = () => {
      const key = isHorizontal ? 'scrollWidth' : 'scrollHeight'
      if (props.pageMode) {
        return document.documentElement[key] || document.body[key]
      } else {
        const { root } = ctx.$refs
        return root ? Math.ceil(root[key]) : 0
      }
    }

    // set current scroll position to a expectant offset
    const scrollToOffset = offset => {
      if (props.pageMode) {
        document.body[directionKey] = offset
        document.documentElement[directionKey] = offset
      } else {
        const { root } = ctx.$refs
        if (root) {
          root[directionKey] = offset
        }
      }
    }

    // set current scroll position to a expectant index
    const scrollToIndex = index => {
      // scroll to bottom
      if (index >= props.dataSources.length - 1) {
        scrollToBottom()
      } else {
        const offset = virtual.getOffset(index)
        scrollToOffset(offset)
      }
    }

    // set current scroll position to bottom
    const scrollToBottom = () => {
      const { shepherd } = ctx.$refs
      if (shepherd) {
        const offset = shepherd[isHorizontal ? 'offsetLeft' : 'offsetTop']
        scrollToOffset(offset)

        // check if it's really scrolled to the bottom
        // maybe list doesn't render and calculate to last range
        // so we need retry in next event loop until it really at bottom
        setTimeout(() => {
          if (getOffset() + getClientSize() + 1 < getScrollSize()) {
            scrollToBottom()
          }
        }, 3)
      }
    }

    // when using page mode we need update slot header size manually
    // taking root offset relative to the browser as slot header size
    const updatePageModeFront = () => {
      const { root } = ctx.$refs
      if (root) {
        const rect = root.getBoundingClientRect()
        const { defaultView } = root.ownerDocument
        const offsetFront = isHorizontal
          ? rect.left + defaultView.pageXOffset
          : rect.top + defaultView.pageYOffset
        virtual.updateParam('slotHeaderSize', offsetFront)
      }
    }

    // reset all state back to initial
    const reset = () => {
      virtual.destroy()
      scrollToOffset(0)
      installVirtual()
    }

    // ----------- public method end -----------

    const installVirtual = () => {
      virtual = new Virtual(
        {
          slotHeaderSize: 0,
          slotFooterSize: 0,
          keeps: props.keeps,
          estimateSize: props.estimateSize,
          buffer: Math.round(props.keeps / 3), // recommend for a third of keeps
          uniqueIds: getUniqueIdFromDataSources()
        },
        onRangeChanged
      )

      // sync initial range
      range.value = virtual.getRange()
    }

    const getUniqueIdFromDataSources = () => {
      return (props.dataSources || []).map(dataSource =>
        typeof props.dataKey === 'function'
          ? dataKey(dataSource)
          : dataSource[props.dataKey]
      )
    }

    // event called when each item mounted or size changed
    const onItemResized = (id, size) => {
      virtual.saveSize(id, size)
      ctx.emit('resized', id, size)
    }

    // event called when slot mounted or size changed
    const onSlotResized = (type, size, hasInit) => {
      if (type === SLOT_TYPE.HEADER) {
        virtual.updateParam('slotHeaderSize', size)
      } else if (type === SLOT_TYPE.FOOTER) {
        virtual.updateParam('slotFooterSize', size)
      }

      if (hasInit) {
        virtual.handleSlotSizeChange()
      }
    }

    // here is the rerendering entry
    const onRangeChanged = r => {
      range.value = r
    }

    const onScroll = evt => {
      const offset = getOffset()
      const clientSize = getClientSize()
      const scrollSize = getScrollSize()

      // iOS scroll-spring-back behavior will make direction mistake
      if (offset < 0 || offset + clientSize > scrollSize + 1 || !scrollSize) {
        return
      }

      virtual.handleScroll(offset)
      emitEvent(offset, clientSize, scrollSize, evt)
    }

    // emit event in special position
    const emitEvent = (offset, clientSize, scrollSize, evt) => {
      ctx.emit('scroll', evt, virtual.getRange())

      if (
        virtual.isFront() &&
        !!props.dataSources.length &&
        offset - props.topThreshold <= 0
      ) {
        ctx.emit('totop')
      } else if (
        virtual.isBehind() &&
        offset + clientSize + props.bottomThreshold >= scrollSize
      ) {
        ctx.emit('tobottom')
      }
    }

    // get the real render slots based on range data
    // in-place patch strategy will try to reuse components as possible
    // so those components that are reused will not trigger lifecycle mounted
    const getRenderSlots = h => {
      const slots = []
      const { start, end } = range.value
      const {
        dataSources,
        dataKey,
        itemClass,
        itemTag,
        itemStyle,
        isHorizontal,
        extraProps,
        dataComponent,
        itemScopedSlots
      } = props
      const { $scopedSlots } = ctx
      const slotComponent = $scopedSlots && $scopedSlots.item
      if (start === undefined || end === undefined) return slots
      for (let index = start; index <= end; index++) {
        const dataSource = dataSources[index]
        if (dataSource) {
          const uniqueKey =
            typeof dataKey === 'function'
              ? dataKey(dataSource)
              : dataSource[dataKey]
          if (typeof uniqueKey === 'string' || typeof uniqueKey === 'number') {
            slots.push(
              h(Item, {
                props: {
                  index,
                  tag: itemTag,
                  event: EVENT_TYPE.ITEM,
                  horizontal: isHorizontal,
                  uniqueKey: uniqueKey,
                  source: dataSource,
                  extraProps: extraProps,
                  component: dataComponent,
                  slotComponent: slotComponent,
                  scopedSlots: itemScopedSlots
                },
                style: itemStyle,
                class: `${itemClass}${
                  props.itemClassAdd ? ' ' + props.itemClassAdd(index) : ''
                }`
              })
            )
          } else {
            console.warn(
              `Cannot get the data-key '${dataKey}' from data-sources.`
            )
          }
        } else {
          console.warn(`Cannot get the index '${index}' from data-sources.`)
        }
      }
      return slots
    }

    // watch
    watch(
      () => props.dataSources && props.dataSources.length,
      val => {
        virtual.updateParam('uniqueIds', getUniqueIdFromDataSources())
        virtual.handleDataSourcesChange()
      }
    )
    watch(
      () => props.keep,
      newValue => {
        virtual.updateParam('keeps', newValue)
        virtual.handleSlotSizeChange()
      }
    )
    watch(
      () => props.start,
      newValue => {
        scrollToIndex(newValue)
      }
    )
    watch(
      () => props.offset,
      newValue => {
        scrollToOffset(newValue)
      }
    )

    installVirtual()
    // listen item size change
    ctx.emit(EVENT_TYPE.ITEM, onItemResized)
    return () => {
      // render function, a closer-to-the-compiler alternative to templates
      // https://vuejs.org/v2/guide/render-function.html#The-Data-Object-In-Depth
      const { header, footer } = ctx.$slots || {}

      const { padFront, padBehind } = range ? range.value || {} : {}
      const {
        pageMode,
        rootTag,
        wrapTag,
        wrapClass,
        wrapStyle,
        headerTag,
        headerClass,
        headerStyle,
        footerTag,
        footerClass,
        footerStyle
      } = props
      console.log(['props', rootTag])
      const paddingStyle = {
        padding: isHorizontal
          ? `0px ${padBehind}px 0px ${padFront}px`
          : `${padFront}px 0px ${padBehind}px`
      }
      const wrapperStyle = wrapStyle
        ? Object.assign({}, wrapStyle, paddingStyle)
        : paddingStyle

      return h(
        rootTag,
        {
          ref: 'root',
          on: {
            scroll: !pageMode && onScroll
          }
        },
        [
          // header slot
          header
            ? h(
                Slot,
                {
                  class: headerClass,
                  style: headerStyle,
                  props: {
                    tag: headerTag,
                    event: EVENT_TYPE.SLOT,
                    uniqueKey: SLOT_TYPE.HEADER
                  }
                },
                header
              )
            : null,

          // main list
          h(
            wrapTag,
            {
              class: wrapClass,
              attrs: {
                role: 'group'
              },
              style: wrapperStyle
            },
            getRenderSlots(h)
          ),

          // footer slot
          footer
            ? h(
                Slot,
                {
                  class: footerClass,
                  style: footerStyle,
                  props: {
                    tag: footerTag,
                    event: EVENT_TYPE.SLOT,
                    uniqueKey: SLOT_TYPE.FOOTER
                  }
                },
                footer
              )
            : null,

          // an empty element use to scroll to bottom
          h('div', {
            ref: 'shepherd',
            style: {
              width: isHorizontal ? '0px' : '100%',
              height: isHorizontal ? '100%' : '0px'
            }
          })
        ]
      )
    }
  }
})
