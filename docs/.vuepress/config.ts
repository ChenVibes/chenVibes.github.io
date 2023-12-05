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
  base: '/blog/',
  lang: 'zh-CN',
  open: true,
  // temp: '../../.temp',
  // cache: '../../.cache',
  head: [
    ['meta', { name: 'referrer', content: 'no-referrer' }], //一种引用策略，可以用来防止图片或视频被盗 no-referrer：所有请求不发送 referrer。 gitee仓库外链图片加载失败
    [
      'script',
      {
        name: 'src',
        content: '//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js',
        async: true
      }
    ]
  ],
  title: "Mr Chen's Blog",
  description: '一个专注于编程开发技术的个人知识库博客',
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components')
    }),
    docsearchPlugin({
      appId: 'G7DXVTAIZX',
      apiKey: 'fa2ee3852fbb7eec7de181082452cad5',
      indexName: 'vuepress',
      placeholder: '搜索文档',
      locales: {
        '/': {
          placeholder: '搜索文档',
          translations: {
            button: {
              buttonText: '搜索文档',
              buttonAriaLabel: '搜索文档'
            },
            modal: {
              searchBox: {
                resetButtonTitle: '清除查询条件',
                resetButtonAriaLabel: '清除查询条件',
                cancelButtonText: '取消',
                cancelButtonAriaLabel: '取消'
              },
              startScreen: {
                recentSearchesTitle: '搜索历史',
                noRecentSearchesText: '没有搜索历史',
                saveRecentSearchButtonTitle: '保存至搜索历史',
                removeRecentSearchButtonTitle: '从搜索历史中移除',
                favoriteSearchesTitle: '收藏',
                removeFavoriteSearchButtonTitle: '从收藏中移除'
              },
              errorScreen: {
                titleText: '无法获取结果',
                helpText: '你可能需要检查你的网络连接'
              },
              footer: {
                selectText: '选择',
                navigateText: '切换',
                closeText: '关闭',
                searchByText: '搜索提供者'
              },
              noResultsScreen: {
                noResultsText: '无法找到相关结果',
                suggestedQueryText: '你可以尝试查询',
                reportMissingResultsText: '你认为该查询应该有结果？',
                reportMissingResultsLinkText: '点击反馈'
              }
            }
          }
        }
      }
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
