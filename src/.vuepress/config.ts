import { defineUserConfig } from 'vuepress';
import theme from './theme.js';
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';
import { getDirname, path } from '@vuepress/utils';
const __dirname = getDirname(import.meta.url);
export default defineUserConfig({
  dest: 'dist',
  host: '0.0.0.0',
  port: 3000,
  base: '/',
  temp: '.vscode/.vp-temp',
  cache: '.vscode/.vp-cache',

  locales: {
    '/': {
      lang: 'zh-CN',
      title: "Mr Chen's Blog",
      description: '一个专注于编程开发技术的个人知识库博客',
    },
    '/en/': {
      lang: 'en-US',
      title: "Mr Chen's Blog",
      description: 'A personal knowledge base blog focused on programming and development techniques',
    },
  },

  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
  ],

  theme,

  // Enable it with pwa
  shouldPrefetch: false,
});
