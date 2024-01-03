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
export const Item = {
  props: [
    'tag',
    'component',
    'extraProps',
    'index',
    'source',
    'scopedSlots',
    'uniqueKey',
    'slotComponent'
  ],
  render() {
    const {
      tag = 'div',
      component,
      extraProps = {},
      index,
      source,
      scopedSlots = {},
      uniqueKey,
      slotComponent
    } = this
    const newProps = {
      ...extraProps,
      source,
      index
    }

    return h(
      tag,
      {
        key: uniqueKey,
        role: 'listitem'
      },
      [
        slotComponent
          ? slotComponent({ item: source, index: index, scope: newProps })
          : h(component, {
              ...newProps,
              scopedSlots: scopedSlots
            })
      ]
    )
  }
}

// wrapping for slot
export const Slot = {
  mixins: [Wrapper],
  name: 'virtual-list-slot',
  props: SlotProps,
  render() {
    const { tag = 'div', uniqueKey, $slots } = this
    return h(
      tag,
      {
        key: uniqueKey,
        role: uniqueKey
      },
      $slots.default
    )
  }
}
