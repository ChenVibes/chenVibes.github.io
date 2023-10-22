<template>
  <div class="container">
    <atropos
      class="poster"
      :shadow="false"
      v-for="(item, index) in games"
      :key="index"
    >
      <div>
        <a :href="`/杂记/switch/游戏评价.html#${item.link}`">
          <img
            class="poster-img"
            :src="`https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/${item.name}.jpeg`"
            alt="poster"
          />
        </a>
      </div>
    </atropos>
  </div>
</template>
<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  flex-wrap: wrap;
  .poster {
    width: 160px;
    height: 260px;
    margin-bottom: 30px;

    &-img {
      width: 160px;
      height: 260px;
      border-radius: 10px;
    }
  }
}
</style>
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
      games: [
        {
          name: 'switch-hades',
          link: 'hades',
        },
        {
          name: 'switch-fifa23',
          link: 'fifa23',
        },
        {
          name: 'switch-Hollow-Knight',
          link: 'hollowknight',
        },
        {
          name: 'switch-Door-Kickers',
          link: 'doorkickers',
        },
      ],
    }
  },
}
</script>
