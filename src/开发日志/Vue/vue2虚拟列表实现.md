---
title: vue2虚拟列表实现
isOriginal: true
tag:
  - vue2
category:
  - 开发笔记
  - Vue2
---

::: vue-demo table 中渲染 select 等组件卡顿问题

```vue
<template>
  <div class="scroll-list" :style="virtualScrollStyle">
    <virtual-scroll-list
      data-key="value"
      :data-sources="region"
      :data-component="DemoVirtualScrollListItem"
      :style="virtualScrollStyle"
      :estimate-size="32"
      v-bind="virtualProps"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, defineComponent, h } from 'vue'
const DemoVirtualScrollListItem = props => {
  return h(
    'p',
    {
      key: props.uniqueKey
    },
    `${props.source.value} ${props.source.label}`
  )
}
let formInline = ref({ region: '' })
let region = ref([])
let virtualProps = {}
let virtualScrollStyle = {
  minWidth: `120px`,
  height: `360px`,
  maxHeight: `360px`,
  overflowY: 'auto'
}
onMounted(() => {
  initData()
})
const initData = () => {
  for (let i = 0; i < 100000; i++) {
    const item = {
      label: randomName(4),
      value: i
    }
    region.value.push(item)
  }
}
// 获取指定范围内的随机数
const randomNum = (min, max) => {
  return Math.floor(Math.random() * (min - max) + max)
}
// 解码Unicode
const solveUnicode = str => {
  //Unicode显示方式是\u4e00
  str = '\\u' + str
  str = str.replace(/\\/g, '%')
  //转换中文
  str = unescape(str)
  //将其他受影响的转换回原来
  str = str.replace(/%/g, '\\')
  return str
}
//生成随机汉字包括生僻字
const randomName = length => {
  let name = ''
  for (let i = 0; i < length; i++) {
    let unicodeNum = ''
    unicodeNum = randomNum(0x4e00, 0x9fa5).toString(16)
    name += solveUnicode(unicodeNum)
  }
  return name
}
//随机自定义长度包含中文字的字符串
const randomString = length => {
  let str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  str += randomName(24)
  let result = ''
  for (let i = length; i > 0; --i)
    result += str[Math.floor(Math.random() * str.length)]
  return result
}
</script>
```

```json
{
  "jsLib": [],
  "codepenLayout": "top",
  "codepen": false,
  "jsfiddle": false
}
```

:::
