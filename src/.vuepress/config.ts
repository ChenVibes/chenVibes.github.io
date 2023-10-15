import { defineUserConfig } from 'vuepress'
import theme from './theme.js'
import path from 'path'
export default defineUserConfig({
  base: '/',
  alias: {
    '@': path.resolve(__dirname, '../../src')
  },

  locales: {
    '/': {
      lang: 'en-US',
      title: 'Blog Demo',
      description: 'A blog demo for vuepress-theme-hope'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: '博客演示',
      description: 'vuepress-theme-hope 的博客演示'
    }
  },

  theme

  // Enable it with pwa
  // shouldPrefetch: false,
})
