/**
 * item and slot component both use similar wrapper
 * we need to know their size change at any time
 */
import { defineComponent, onMounted, onUpdated, onUnmounted, h } from 'vue'
import { ItemProps, SlotProps } from './props'

const Wrapper = defineComponent({
  setup(props, ctx) {
    let shapeKey = props.horizontal ? 'offsetWidth' : 'offsetHeight'
    let resizeObserver = null
    onMounted(() => {
      if (typeof ResizeObserver !== 'undefined') {
        resizeObserver = new ResizeObserver(() => {
          dispatchSizeChange()
        })
        resizeObserver.observe(ctx.$el)
      }
    })
    onUpdated(() => {
      resizeObserver.observe(ctx.$el)
    })
    onUnmounted(() => {
      if (resizeObserver) {
        resizeObserver.disconnect()
        resizeObserver = null
      }
    })

    // methods
    const getCurrentSize = () => {
      return ctx.$el ? ctx.$el[shapeKey] : 0
    }

    // tell parent current size identify by unqiue key
    const dispatchSizeChange = () => {
      const { $parent } = ctx
      const { uniqueKey, event } = props
      $parent.$emit(event, uniqueKey, getCurrentSize())
    }
  }
})

// wrapping for item
export const Item = defineComponent({
  name: 'virtual-list-item',
  mixins: [Wrapper],

  props: ItemProps,
  setup(props, ctx) {
    return () => {
      const {
        tag,
        component,
        extraProps = {},
        index,
        source,
        scopedSlots = {},
        uniqueKey,
        slotComponent
      } = props
      const newProps = {
        ...extraProps,
        source,
        index
      }

      return h(
        tag,
        {
          key: uniqueKey,
          attrs: {
            role: 'listitem'
          }
        },
        [
          slotComponent
            ? slotComponent({ item: source, index: index, scope: newProps })
            : h(component, {
                newProps,
                scopedSlots: scopedSlots
              })
        ]
      )
    }
  }
})

// wrapping for slot
export const Slot = defineComponent({
  mixins: [Wrapper],
  name: 'virtual-list-slot',
  props: SlotProps,
  setup(props, ctx) {
    return () => {
      const { tag, uniqueKey } = props
      const { $slots } = ctx
      return h(
        tag,
        {
          key: uniqueKey,
          attrs: {
            role: uniqueKey
          }
        },
        $slots.default
      )
    }
  }
})
