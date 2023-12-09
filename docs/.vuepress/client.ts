import { defineClientConfig } from '@vuepress/client'
import { defineVuePlaygroundConfig } from 'vuepress-plugin-md-enhance/client'
import 'element-plus/dist/index.css'

defineVuePlaygroundConfig({
  // 在此设置 @vue/repl 选项
})

export default defineClientConfig({
  async enhance({ app }) {
    if (!__VUEPRESS_SSR__) {
      const ElementPlus = await import('element-plus')
      app.use(ElementPlus)
    }
  }
})
