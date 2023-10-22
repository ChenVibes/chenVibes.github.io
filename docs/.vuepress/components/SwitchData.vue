<template>
  <avue-data-tabs :option="option"></avue-data-tabs>
</template>
<style lang="scss" scoped></style>
<script>
// import Atropos component
import Atropos from 'atropos/vue'

export default {
  // register Atropos component
  components: {
    Atropos,
  },
  data() {
    return {
      option: {
        data: [
          {
            title: '总花费',
            subtitle: '2022-12-12',
            count: 1153,
            color: 'rgb(27, 201, 142)',
            text: '付费游戏总花费',
            key: '总',
          },
          {
            title: '游戏数量',
            subtitle: '2022-12-12',
            count: 13,
            text: '所有游戏数量（不包含免费游戏）',
            color: 'rgb(230, 71, 88)',
            key: '游',
          },
          {
            title: '卡带数量',
            subtitle: '2022-12-12',
            count: 4,
            text: '实体卡带数量',
            color: 'rgb(178, 159, 255)',
            key: '卡',
          },
        ],
      },
    }
  },
}
</script>
