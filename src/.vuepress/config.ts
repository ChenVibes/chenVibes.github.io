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
      title: 'Mr.Chen Blog',
      description: 'A blog for Mr.Chen'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'Mr.Chen Blog',
      description: 'Mr.Chen的博客'
    }
  },

  theme

  // Enable it with pwa
  // shouldPrefetch: false,
})
