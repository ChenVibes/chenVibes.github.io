/**
 * props declaration for default, item and slot component
 */

export const VirtualProps = {
  dataKey: {
    type: [String, Function],
    required: true
  },
  //列表数据，每一行都必须有一个唯一的id(data-key)。
  dataSources: {
    type: Array,
    required: true
  },
  //每一行的子组件。
  dataComponent: {
    type: [Object, Function],
    required: true
  },
  //默认30个，默认渲染的个数。
  keeps: {
    type: Number,
    default: 30
  },
  //extra-props：默认{} data-component组件的额外props通过改属性传入,内部已有source和index两个
  extraProps: {
    type: Object
  },
  //默认50，每一行的高度，如果接近平均大小
  estimateSize: {
    type: Number,
    default: 50
  },

  direction: {
    type: String,
    default: 'vertical' // the other value is horizontal
  },
  start: {
    type: Number,
    default: 0
  },
  offset: {
    type: Number,
    default: 0
  },
  topThreshold: {
    type: Number,
    default: 0
  },
  bottomThreshold: {
    type: Number,
    default: 0
  },
  pageMode: {
    type: Boolean,
    default: false
  },
  rootTag: {
    type: String,
    default: 'div'
  },
  wrapTag: {
    type: String,
    default: 'div'
  },
  wrapClass: {
    type: String,
    default: ''
  },
  wrapStyle: {
    type: Object
  },
  itemTag: {
    type: String,
    default: 'div'
  },
  itemClass: {
    type: String,
    default: ''
  },
  itemClassAdd: {
    type: Function
  },
  itemStyle: {
    type: Object
  },
  headerTag: {
    type: String,
    default: 'div'
  },
  headerClass: {
    type: String,
    default: ''
  },
  headerStyle: {
    type: Object
  },
  footerTag: {
    type: String,
    default: 'div'
  },
  footerClass: {
    type: String,
    default: ''
  },
  footerStyle: {
    type: Object
  },
  itemScopedSlots: {
    type: Object
  }
}

export const ItemProps = {
  index: {
    type: Number
  },
  event: {
    type: String
  },
  tag: {
    type: String
  },
  horizontal: {
    type: Boolean
  },
  source: {
    type: Object
  },
  component: {
    type: [Object, Function]
  },
  slotComponent: {
    type: Function
  },
  uniqueKey: {
    type: [String, Number]
  },
  extraProps: {
    type: Object
  },
  scopedSlots: {
    type: Object
  }
}

export const SlotProps = {
  event: {
    type: String
  },
  uniqueKey: {
    type: String
  },
  tag: {
    type: String
  },
  horizontal: {
    type: Boolean
  }
}
