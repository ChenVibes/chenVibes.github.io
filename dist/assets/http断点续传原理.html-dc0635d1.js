const e=JSON.parse(`{"key":"v-cf7f7130","path":"/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/http%E6%96%AD%E7%82%B9%E7%BB%AD%E4%BC%A0%E5%8E%9F%E7%90%86.html","title":"http断点续传原理","lang":"zh-CN","frontmatter":{"title":"http断点续传原理","tag":["项目总结"],"date":"2021-02-27T00:00:00.000Z","category":["开发日志"],"description":"HTTP 请求头 Range 所谓断点续传，也就是要从文件已经下载的地方开始继续下载。在以前版本的 HTTP 协议是不支持断点的，HTTP/1.1 开始就支持了。一般断点下载时才用到 Range 和 Content-Range 实体头。 Range 用于请求头中，指定第一个字节的位置和最后一个字节的位置，一般格式： Content-Range 用于响应...","head":[["meta",{"property":"og:url","content":"https://zfhblog.top/vuepress-blog/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/http%E6%96%AD%E7%82%B9%E7%BB%AD%E4%BC%A0%E5%8E%9F%E7%90%86.html"}],["meta",{"property":"og:site_name","content":"Mr Chen's Blog"}],["meta",{"property":"og:title","content":"http断点续传原理"}],["meta",{"property":"og:description","content":"HTTP 请求头 Range 所谓断点续传，也就是要从文件已经下载的地方开始继续下载。在以前版本的 HTTP 协议是不支持断点的，HTTP/1.1 开始就支持了。一般断点下载时才用到 Range 和 Content-Range 实体头。 Range 用于请求头中，指定第一个字节的位置和最后一个字节的位置，一般格式： Content-Range 用于响应..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-09T09:11:29.000Z"}],["meta",{"property":"article:author","content":"Mr.Chen"}],["meta",{"property":"article:tag","content":"项目总结"}],["meta",{"property":"article:published_time","content":"2021-02-27T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-09T09:11:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"http断点续传原理\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-02-27T00:00:00.000Z\\",\\"dateModified\\":\\"2023-11-09T09:11:29.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Chen\\",\\"url\\":\\"/logo.png\\"}]}"]]},"headers":[{"level":2,"title":"HTTP 请求头 Range","slug":"http-请求头-range","link":"#http-请求头-range","children":[]},{"level":2,"title":"node 静态服务器断点续传实现","slug":"node-静态服务器断点续传实现","link":"#node-静态服务器断点续传实现","children":[{"level":3,"title":"Range","slug":"range","link":"#range","children":[]},{"level":3,"title":"nodejs 简单实现","slug":"nodejs-简单实现","link":"#nodejs-简单实现","children":[]},{"level":3,"title":"待续","slug":"待续","link":"#待续","children":[]},{"level":3,"title":"自我小结","slug":"自我小结","link":"#自我小结","children":[]}]}],"git":{"createdTime":1699521089000,"updatedTime":1699521089000,"contributors":[{"name":"chenzhen","email":"599422271@qq.com","commits":1}]},"readingTime":{"minutes":3.5,"words":1051},"filePathRelative":"开发日志/http断点续传原理.md","localizedDate":"2021年2月27日","autoDesc":true}`);export{e as data};
