import { defineUserConfig } from 'vuepress'
import theme from './theme.js'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'

import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { getDirname, path } from '@vuepress/utils'
const __dirname = getDirname(import.meta.url)
export default defineUserConfig({
  dest: 'dist',
  host: '0.0.0.0',
  port: 3000,
  base: '/vuepress-blog/',
  lang: 'zh-CN',
  open: true,
  // temp: '../../.temp',
  // cache: '../../.cache',
  title: "Mr Chen's Blog",
  description: '一个专注于编程开发技术的个人知识库博客',
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components')
    }),
    docsearchPlugin({
      appId: 'MJ59MTRGT0',
      apiKey: 'a0099b5ab199c43d90322e60f773367e',
      indexName: 'vuepress'
    })
  ],
  theme,
  shouldPrefetch: false
  // head: [['link', { rel: 'icon', href: '/logo.jpg' }]]
})
