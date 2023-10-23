import { defineUserConfig } from 'vuepress'
import theme from './theme.js'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { getDirname, path } from '@vuepress/utils'
const __dirname = getDirname(import.meta.url)
export default defineUserConfig({
  base: '/',
  dest: './dist',
  lang: 'zh-CN',
  port: 3000,
  title: "Mr Chen's Blog",
  description: '一个专注于编程开发技术的个人知识库博客',
  temp: './.temp',
  cache: './.cache',
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components')
    }),
    docsearchPlugin({
      appId: 'HDTORBOLNJ',
      apiKey: '5cc292fcb4b413686f662fc008a02ffa',
      indexName: 'zfhtop'
    })
  ],
  theme,
  shouldPrefetch: false
  // head: [['link', { rel: 'icon', href: '/logo.jpg' }]]
})
