import { defineClientConfig } from '@vuepress/client'
import '@smallwei/avue/lib/index.css'
import { defineVuePlaygroundConfig } from 'vuepress-plugin-md-enhance/client'
import 'element-plus/dist/index.css'
defineVuePlaygroundConfig({
  // 在此设置 @vue/repl 选项
})
export default defineClientConfig({
  async enhance({ app }) {
    if (!__VUEPRESS_SSR__) {
      const AvueModule = await import('@smallwei/avue')
      const ElementPlus = await import('element-plus')
      app.use(AvueModule)
      app.use(ElementPlus)
    }
  }
})
