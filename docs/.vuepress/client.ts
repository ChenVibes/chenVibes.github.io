import { defineClientConfig } from '@vuepress/client'
import '@smallwei/avue/lib/index.css'
export default defineClientConfig({
  async enhance({ app }) {
    if (!__VUEPRESS_SSR__) {
      const AvueModule = await import('@smallwei/avue')
      app.use(AvueModule)
    }
  },
})
