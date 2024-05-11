---
title: Vite基本配置
tag: 前端工程化
date: 2023-12-16
category: 前端开发
star: true
---

基本常用配置

```js
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import vue from '@vitejs/plugin-vue'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'

export default defineConfig({
  plugins: [
    vue(),
    //引入vue 插件
    AutoImport({
      imports: ['vue'],
      dts: 'src/auto-import.d.ts'
    }),
    //plus按需引入
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    //plus按需引入
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  build: {
    minify: 'terser', // 必须开启：使用terserOptions才有效果
    terserOptions: {
      compress: {
        //生产环境时移除console
        drop_console: true,
        drop_debugger: true
      }
    }
  },

  resolve: {
    //配置根路径别名： import('@/pages/login/login.vue')
    alias: {
      '@': path.resolve(__dirname, 'src'),
      // 注意一定不要随意命名，a b c这样的，项目的目录也不能为关键字保留字！！
      comp: resolve(__dirname, 'src/components'),
      // 配置图片要这样引用
      '/img': './src/assets'
    }
  },
  // 跨域
  server: {
    //使用IP能访问
    host: '0.0.0.0',
    // 热更新
    hmr: true,
    //设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口
    strictPort: false,
    //自定义代理规则
    proxy: {
      // 选项写法
      '/api': {
        target: 'https://admin.itrustnow.com',
        // target: "http://192.168.0.50:8083",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
})
```
