import { defineUserConfig } from 'vuepress'
import theme from './theme.js'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'

import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { getDirname, path } from '@vuepress/utils'
const __dirname = getDirname(import.meta.url)
const customComfig = defineUserConfig({
  dest: 'dist',
  host: '0.0.0.0',
  port: 3000,
  base: '/vuepress-blog/',
  lang: 'zh-CN',
  open: true,
  // temp: '../../.temp',
  // cache: '../../.cache',
  head: [['meta', { name: 'referrer', content: 'no-referrer' }]], //gitee仓库外链图片加载失败
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

export default {
  ...customComfig,
  markdown: {
    // ......
    extendMarkdown: md => {
      md.use(require('markdown-it-disable-url-encode'))
    }
  },
  // 禁止文件打包带hash
  viteOptions: {
    build: {
      assetsInlineLimit: 10000000, // 设置一个较大的值，禁止内联文件
      rollupOptions: {
        output: {
          filename: '[name].js',
          entryFileNames: '[name].js', // 设置输出文件名不带hash
          chunkFileNames: '[name].js', // 设置代码分割文件名不带hash
          assetFileNames: '[name].[ext]' // 设置静态资源文件名不带hash
        }
      },
      chunkSizeWarningLimit: 2000, // 设置一个较大的值，禁止警告
      cssCodeSplit: false, // 禁用 CSS 切割
      sourcemap: false, // 禁用 sourcemap
      minify: 'terser', // 使用 Terser 进行压缩
      brotliSize: false, // 禁用 Brotli
      filename: true // 禁用文件名的哈希
    }
  }
}
