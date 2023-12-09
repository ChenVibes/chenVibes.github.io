const e=JSON.parse(`{"key":"v-4c2784f0","path":"/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/%E5%89%8D%E5%90%8E%E7%AB%AF%E6%95%B0%E6%8D%AE%E4%BA%A4%E4%BA%92.html","title":"前后端数据交互","lang":"zh-CN","frontmatter":{"title":"前后端数据交互","tag":["HTTP","Ajax","axios"],"category":"基础知识","description":"// TODO：重整 前后端数据交互 初始前后端通信 前后端通信方式什么？ 前端和后端数据交互的过程浏览器和服务器交互的过程 前端向后端发送数据： 1.登录功能 2.搜索功能 后端向前端发送数据： 页面上的图、文字等内容 前后端通信的过程与概念解释 1. 前后端通信的过程 前后端通信是在 请求-响应 中完成的 2. 概念解释 前端：浏览器端; 客户端：...","head":[["meta",{"property":"og:url","content":"https://magicbegin.gitee.io/blog/blog/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/%E5%89%8D%E5%90%8E%E7%AB%AF%E6%95%B0%E6%8D%AE%E4%BA%A4%E4%BA%92.html"}],["meta",{"property":"og:site_name","content":"Mr Chen's Blog"}],["meta",{"property":"og:title","content":"前后端数据交互"}],["meta",{"property":"og:description","content":"// TODO：重整 前后端数据交互 初始前后端通信 前后端通信方式什么？ 前端和后端数据交互的过程浏览器和服务器交互的过程 前端向后端发送数据： 1.登录功能 2.搜索功能 后端向前端发送数据： 页面上的图、文字等内容 前后端通信的过程与概念解释 1. 前后端通信的过程 前后端通信是在 请求-响应 中完成的 2. 概念解释 前端：浏览器端; 客户端：..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-09T06:32:03.000Z"}],["meta",{"property":"article:author","content":"Mr.Chen"}],["meta",{"property":"article:tag","content":"HTTP"}],["meta",{"property":"article:tag","content":"Ajax"}],["meta",{"property":"article:tag","content":"axios"}],["meta",{"property":"article:modified_time","content":"2023-12-09T06:32:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"前后端数据交互\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-09T06:32:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Chen\\",\\"url\\":\\"/logo.png\\"}]}"]]},"headers":[{"level":2,"title":"前后端数据交互","slug":"前后端数据交互","link":"#前后端数据交互","children":[{"level":3,"title":"初始前后端通信","slug":"初始前后端通信","link":"#初始前后端通信","children":[]},{"level":3,"title":"前后端通信的过程与概念解释","slug":"前后端通信的过程与概念解释","link":"#前后端通信的过程与概念解释","children":[]},{"level":3,"title":"前后端的通信方式","slug":"前后端的通信方式","link":"#前后端的通信方式","children":[]}]},{"level":2,"title":"服务端职责","slug":"服务端职责","link":"#服务端职责","children":[]},{"level":2,"title":"服务端处理数据:路由","slug":"服务端处理数据-路由","link":"#服务端处理数据-路由","children":[]},{"level":2,"title":"HTTP 协议","slug":"http-协议","link":"#http-协议","children":[{"level":3,"title":"初识 HTTP","slug":"初识-http","link":"#初识-http","children":[]},{"level":3,"title":"http 报文","slug":"http-报文","link":"#http-报文","children":[]},{"level":3,"title":"HTTP 方法","slug":"http-方法","link":"#http-方法","children":[]},{"level":3,"title":"GET 和 POST 方法的对比","slug":"get-和-post-方法的对比","link":"#get-和-post-方法的对比","children":[]},{"level":3,"title":"HTTP 状态码","slug":"http-状态码","link":"#http-状态码","children":[]}]},{"level":2,"title":"ajax","slug":"ajax","link":"#ajax","children":[{"level":3,"title":"Ajax 简介","slug":"ajax-简介","link":"#ajax-简介","children":[]},{"level":3,"title":"Ajax 的基本用法","slug":"ajax-的基本用法","link":"#ajax-的基本用法","children":[]},{"level":3,"title":"GET 请求","slug":"get-请求","link":"#get-请求","children":[]},{"level":3,"title":"POST 请求","slug":"post-请求","link":"#post-请求","children":[]}]},{"level":2,"title":"JSON","slug":"json","link":"#json","children":[{"level":3,"title":"初识 JSON","slug":"初识-json","link":"#初识-json","children":[]},{"level":3,"title":"JSON 的三种形式","slug":"json-的三种形式","link":"#json-的三种形式","children":[]},{"level":3,"title":"JSON 的常用方法","slug":"json-的常用方法","link":"#json-的常用方法","children":[]}]},{"level":2,"title":"跨域","slug":"跨域","link":"#跨域","children":[{"level":3,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":3,"title":"什么是不同域，什么是同域","slug":"什么是不同域-什么是同域","link":"#什么是不同域-什么是同域","children":[]},{"level":3,"title":"跨域请求为什么会被阻止","slug":"跨域请求为什么会被阻止","link":"#跨域请求为什么会被阻止","children":[]},{"level":3,"title":"跨域解决方案","slug":"跨域解决方案","link":"#跨域解决方案","children":[]},{"level":3,"title":"JSONP","slug":"jsonp","link":"#jsonp","children":[]}]},{"level":2,"title":"XHR 对象","slug":"xhr-对象","link":"#xhr-对象","children":[{"level":3,"title":"XHR 的属性","slug":"xhr-的属性","link":"#xhr-的属性","children":[]},{"level":3,"title":"XHR 方法","slug":"xhr-方法","link":"#xhr-方法","children":[]},{"level":3,"title":"XHR 的事件","slug":"xhr-的事件","link":"#xhr-的事件","children":[]}]},{"level":2,"title":"FormData","slug":"formdata","link":"#formdata","children":[]},{"level":2,"title":"封装 Ajax","slug":"封装-ajax","link":"#封装-ajax","children":[]},{"level":2,"title":"axios","slug":"axios","link":"#axios","children":[]},{"level":2,"title":"Fetch","slug":"fetch","link":"#fetch","children":[]}],"git":{"createdTime":1702103523000,"updatedTime":1702103523000,"contributors":[{"name":"chenzhen","email":"599422271@qq.com","commits":1}]},"readingTime":{"minutes":13.86,"words":4159},"filePathRelative":"基础知识/前后端数据交互.md","localizedDate":"2023年12月9日","autoDesc":true}`);export{e as data};
