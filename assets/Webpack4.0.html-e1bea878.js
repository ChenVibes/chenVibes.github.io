const e=JSON.parse(`{"key":"v-3109a60f","path":"/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/Webpack4.0.html","title":"Webpack4.0","lang":"zh-CN","frontmatter":{"title":"Webpack4.0","tag":"前端工程化","date":"2018-08-08T00:00:00.000Z","category":"前端开发","description":"Update 1.环境支持： 官方宣布不再支持 Node 4, Node 6，使用的是 v8 5.0 版本，支持 93%的 ES6 语法。因为 webpack4 使用了很多 JS 新的语法，它们在新版本的 v8 里经过了优化。 2.0 配置: 受 Parcel 打包工具启发，尽可能的让开发者运行项目的成本变低。webpack4 不再强制需要 webpa...","head":[["meta",{"property":"og:url","content":"https://magicbegin.gitee.io/vuepress-blog/vuepress-blog/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/Webpack4.0.html"}],["meta",{"property":"og:site_name","content":"Mr Chen's Blog"}],["meta",{"property":"og:title","content":"Webpack4.0"}],["meta",{"property":"og:description","content":"Update 1.环境支持： 官方宣布不再支持 Node 4, Node 6，使用的是 v8 5.0 版本，支持 93%的 ES6 语法。因为 webpack4 使用了很多 JS 新的语法，它们在新版本的 v8 里经过了优化。 2.0 配置: 受 Parcel 打包工具启发，尽可能的让开发者运行项目的成本变低。webpack4 不再强制需要 webpa..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-22T15:38:45.000Z"}],["meta",{"property":"article:author","content":"Mr.Chen"}],["meta",{"property":"article:tag","content":"前端工程化"}],["meta",{"property":"article:published_time","content":"2018-08-08T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-22T15:38:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Webpack4.0\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2018-08-08T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-22T15:38:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Chen\\",\\"url\\":\\"/logo.png\\"}]}"]]},"headers":[{"level":2,"title":"Update","slug":"update","link":"#update","children":[{"level":3,"title":"1.环境支持：","slug":"_1-环境支持","link":"#_1-环境支持","children":[]},{"level":3,"title":"2.0 配置:","slug":"_2-0-配置","link":"#_2-0-配置","children":[]},{"level":3,"title":"3.Mode:","slug":"_3-mode","link":"#_3-mode","children":[]},{"level":3,"title":"4.插件变化:","slug":"_4-插件变化","link":"#_4-插件变化","children":[]},{"level":3,"title":"5.开箱即用:WebAssembly(笔者暂时未使用)","slug":"_5-开箱即用-webassembly-笔者暂时未使用","link":"#_5-开箱即用-webassembly-笔者暂时未使用","children":[]}]},{"level":2,"title":"Use","slug":"use","link":"#use","children":[{"level":3,"title":"1.配置项:","slug":"_1-配置项","link":"#_1-配置项","children":[]},{"level":3,"title":"2.启动命令:","slug":"_2-启动命令","link":"#_2-启动命令","children":[]},{"level":3,"title":"3. 实例","slug":"_3-实例","link":"#_3-实例","children":[]},{"level":3,"title":"4.css 文件处理","slug":"_4-css-文件处理","link":"#_4-css-文件处理","children":[]},{"level":3,"title":"5.产出 html","slug":"_5-产出-html","link":"#_5-产出-html","children":[]},{"level":3,"title":"6.提取 css 文件为单独文件","slug":"_6-提取-css-文件为单独文件","link":"#_6-提取-css-文件为单独文件","children":[]},{"level":3,"title":"7.sass less 文件处理","slug":"_7-sass-less-文件处理","link":"#_7-sass-less-文件处理","children":[]},{"level":3,"title":"8.babel 转换 js","slug":"_8-babel-转换-js","link":"#_8-babel-转换-js","children":[]},{"level":3,"title":"9.常用的三种加载图片的方式","slug":"_9-常用的三种加载图片的方式","link":"#_9-常用的三种加载图片的方式","children":[]},{"level":3,"title":"10.多入口问题: 数组的模式并不是多入口，一下入口最终只生成一个 js","slug":"_10-多入口问题-数组的模式并不是多入口-一下入口最终只生成一个-js","link":"#_10-多入口问题-数组的模式并不是多入口-一下入口最终只生成一个-js","children":[]},{"level":3,"title":"11.watch 监听文件打包变化，当文件变化时自动打包","slug":"_11-watch-监听文件打包变化-当文件变化时自动打包","link":"#_11-watch-监听文件打包变化-当文件变化时自动打包","children":[]},{"level":3,"title":"12.resolve 解析","slug":"_12-resolve-解析","link":"#_12-resolve-解析","children":[]},{"level":3,"title":"13.压缩 js","slug":"_13-压缩-js","link":"#_13-压缩-js","children":[]}]}],"git":{"createdTime":1697989125000,"updatedTime":1697989125000,"contributors":[{"name":"chenzhen","email":"32085549+frontchen@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":7.39,"words":2216},"filePathRelative":"前端开发/前端工程化/Webpack4.0.md","localizedDate":"2018年8月8日","autoDesc":true}`);export{e as data};