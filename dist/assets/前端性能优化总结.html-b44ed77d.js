const e=JSON.parse(`{"key":"v-35eea18b","path":"/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/%E5%89%8D%E7%AB%AF%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96%E6%80%BB%E7%BB%93.html","title":"前端性能优化总结","lang":"zh-CN","frontmatter":{"title":"前端性能优化总结","tag":["项目总结"],"date":"2021-03-26T00:00:00.000Z","category":["开发日志"],"description":"HTTP 请求头 Range 为什么要做性能优化？性能优化到底有多重要？ 网站的性能优化对于用户的留存率、转化率有很大的影响，所以对于前端开发来说性能优化能力也是重要的考察点。 性能优化的点非常的多，有的小伙伴觉得记起来非常的麻烦，所以这里主要梳理出一条线来帮助记忆。 可以将性能优化分为两个大的分类： 加载时优化 运行时优化 加载时性能 顾名思义加载时优化 主要解决的就是让一个网站加载过程更快，比如压缩文件大小、使用 CDN 加速等方式可以优化加载性能。检查加载性能的指标一般看：白屏时间和首屏时间：","head":[["meta",{"property":"og:url","content":"http://magicbegin.gitee.io/vuepress-blog/vuepress-blog/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/%E5%89%8D%E7%AB%AF%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96%E6%80%BB%E7%BB%93.html"}],["meta",{"property":"og:site_name","content":"Mr Chen's Blog"}],["meta",{"property":"og:title","content":"前端性能优化总结"}],["meta",{"property":"og:description","content":"HTTP 请求头 Range 为什么要做性能优化？性能优化到底有多重要？ 网站的性能优化对于用户的留存率、转化率有很大的影响，所以对于前端开发来说性能优化能力也是重要的考察点。 性能优化的点非常的多，有的小伙伴觉得记起来非常的麻烦，所以这里主要梳理出一条线来帮助记忆。 可以将性能优化分为两个大的分类： 加载时优化 运行时优化 加载时性能 顾名思义加载时优化 主要解决的就是让一个网站加载过程更快，比如压缩文件大小、使用 CDN 加速等方式可以优化加载性能。检查加载性能的指标一般看：白屏时间和首屏时间："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-27T11:35:00.000Z"}],["meta",{"property":"article:author","content":"Mr Chen"}],["meta",{"property":"article:tag","content":"项目总结"}],["meta",{"property":"article:published_time","content":"2021-03-26T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-27T11:35:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"前端性能优化总结\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-03-26T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-27T11:35:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr Chen\\",\\"url\\":\\"https://gitee.com/magicBegin/vuepress-blog\\",\\"email\\":\\"599422271@qq.com\\"}]}"]]},"headers":[{"level":3,"title":"加载时性能","slug":"加载时性能","link":"#加载时性能","children":[]},{"level":3,"title":"运行时性能","slug":"运行时性能","link":"#运行时性能","children":[]},{"level":2,"title":"加载时性能优化","slug":"加载时性能优化","link":"#加载时性能优化","children":[{"level":3,"title":"1.DNS 预解析","slug":"_1-dns-预解析","link":"#_1-dns-预解析","children":[]},{"level":3,"title":"2.使用 HTTP2","slug":"_2-使用-http2","link":"#_2-使用-http2","children":[]},{"level":3,"title":"3.减少 HTTP 请求数量","slug":"_3-减少-http-请求数量","link":"#_3-减少-http-请求数量","children":[]},{"level":3,"title":"4.压缩、合并文件","slug":"_4-压缩、合并文件","link":"#_4-压缩、合并文件","children":[]},{"level":3,"title":"5.采用 svg 图片或者字体图标","slug":"_5-采用-svg-图片或者字体图标","link":"#_5-采用-svg-图片或者字体图标","children":[]},{"level":3,"title":"6.按需加载代码，减少冗余代码","slug":"_6-按需加载代码-减少冗余代码","link":"#_6-按需加载代码-减少冗余代码","children":[]},{"level":3,"title":"7.服务器端渲染","slug":"_7-服务器端渲染","link":"#_7-服务器端渲染","children":[]},{"level":3,"title":"8. 使用 Defer 加载 JS","slug":"_8-使用-defer-加载-js","link":"#_8-使用-defer-加载-js","children":[]},{"level":3,"title":"9. 静态资源使用 CDN","slug":"_9-静态资源使用-cdn","link":"#_9-静态资源使用-cdn","children":[]},{"level":3,"title":"10. 图片优化","slug":"_10-图片优化","link":"#_10-图片优化","children":[]}]},{"level":2,"title":"运行时性能优化","slug":"运行时性能优化","link":"#运行时性能优化","children":[{"level":3,"title":"1. 减少重绘与重排","slug":"_1-减少重绘与重排","link":"#_1-减少重绘与重排","children":[]},{"level":3,"title":"2. 避免页面卡顿","slug":"_2-避免页面卡顿","link":"#_2-避免页面卡顿","children":[]},{"level":3,"title":"3. 长列表优化","slug":"_3-长列表优化","link":"#_3-长列表优化","children":[]},{"level":3,"title":"4. 滚动事件性能优化","slug":"_4-滚动事件性能优化","link":"#_4-滚动事件性能优化","children":[]},{"level":3,"title":"5. 使用 Web Workers","slug":"_5-使用-web-workers","link":"#_5-使用-web-workers","children":[]},{"level":3,"title":"6. 写代码时的优化点","slug":"_6-写代码时的优化点","link":"#_6-写代码时的优化点","children":[]},{"level":3,"title":"6.1 使用事件委托","slug":"_6-1-使用事件委托","link":"#_6-1-使用事件委托","children":[]},{"level":3,"title":"6.2 if-else 对比 switch","slug":"_6-2-if-else-对比-switch","link":"#_6-2-if-else-对比-switch","children":[]},{"level":3,"title":"6.3 布局上使用 flexbox","slug":"_6-3-布局上使用-flexbox","link":"#_6-3-布局上使用-flexbox","children":[]}]}],"git":{"createdTime":1698406500000,"updatedTime":1698406500000,"contributors":[{"name":"chenzhen","email":"599422271@qq.com","commits":1}]},"readingTime":{"minutes":21.56,"words":6468},"filePathRelative":"开发日志/前端性能优化总结.md","localizedDate":"2021年3月26日","excerpt":"<p>HTTP 请求头 <code>Range</code></p>\\n<hr>\\n<p><strong>为什么要做性能优化？性能优化到底有多重要？</strong> 网站的性能优化对于用户的留存率、转化率有很大的影响，所以对于前端开发来说<strong>性能优化能力</strong>也是重要的考察点。</p>\\n<p>性能优化的点非常的多，有的小伙伴觉得记起来非常的麻烦，所以这里主要梳理出一条线来帮助记忆。</p>\\n<p>可以将性能优化分为两个大的分类：</p>\\n<ul>\\n<li>加载时优化</li>\\n<li>运行时优化</li>\\n</ul>\\n<h3> 加载时性能</h3>\\n<p>顾名思义<strong>加载时优化</strong> 主要解决的就是让一个网站加载过程更快，比如压缩文件大小、使用 CDN 加速等方式可以优化加载性能。检查加载性能的指标一般看：白屏时间和首屏时间：</p>","autoDesc":true}`);export{e as data};
