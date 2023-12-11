const e=JSON.parse(`{"key":"v-56e88049","path":"/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E9%9D%A2%E7%BB%8F%E6%8C%87%E5%8D%97/%E9%9D%A2%E7%BB%8F%E7%B3%BB%E5%88%97-vue.html","title":"面经系列-vue","lang":"zh-CN","frontmatter":{"title":"面经系列-vue","date":"2021-01-08T00:00:00.000Z","category":"面经指南","description":"来，先介绍一下 Vue 的响应式系统 Vue 为 MVVM 框架，当数据模型 data 变化时，页面视图会得到响应更新，其原理对 data 的 getter/setter 方法进行拦截（Object.defineProperty 或者 Proxy），利用发布订阅的设计模式，在 getter 方法中进行订阅，在 setter 方法中发布通知，让所有订阅者...","head":[["meta",{"property":"og:url","content":"https://magicbegin.gitee.io/blog/blog/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E9%9D%A2%E7%BB%8F%E6%8C%87%E5%8D%97/%E9%9D%A2%E7%BB%8F%E7%B3%BB%E5%88%97-vue.html"}],["meta",{"property":"og:site_name","content":"Mr Chen's Blog"}],["meta",{"property":"og:title","content":"面经系列-vue"}],["meta",{"property":"og:description","content":"来，先介绍一下 Vue 的响应式系统 Vue 为 MVVM 框架，当数据模型 data 变化时，页面视图会得到响应更新，其原理对 data 的 getter/setter 方法进行拦截（Object.defineProperty 或者 Proxy），利用发布订阅的设计模式，在 getter 方法中进行订阅，在 setter 方法中发布通知，让所有订阅者..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-11T05:44:44.000Z"}],["meta",{"property":"article:author","content":"Mr.Chen"}],["meta",{"property":"article:published_time","content":"2021-01-08T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-11T05:44:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"面经系列-vue\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-01-08T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-11T05:44:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Chen\\",\\"url\\":\\"/logo.png\\"}]}"]]},"headers":[{"level":2,"title":"来，先介绍一下 Vue 的响应式系统","slug":"来-先介绍一下-vue-的响应式系统","link":"#来-先介绍一下-vue-的响应式系统","children":[]},{"level":2,"title":"computed 与 watch 的区别","slug":"computed-与-watch-的区别","link":"#computed-与-watch-的区别","children":[]},{"level":2,"title":"介绍一下 Vue 的生命周期","slug":"介绍一下-vue-的生命周期","link":"#介绍一下-vue-的生命周期","children":[]},{"level":2,"title":"为什么组件的 data 必须是一个函数","slug":"为什么组件的-data-必须是一个函数","link":"#为什么组件的-data-必须是一个函数","children":[]},{"level":2,"title":"组件之间是怎么通信的","slug":"组件之间是怎么通信的","link":"#组件之间是怎么通信的","children":[]},{"level":2,"title":"Vue 事件绑定原理说一下","slug":"vue-事件绑定原理说一下","link":"#vue-事件绑定原理说一下","children":[]},{"level":2,"title":"slot 是什么？有什么作用？原理是什么？","slug":"slot-是什么-有什么作用-原理是什么","link":"#slot-是什么-有什么作用-原理是什么","children":[]},{"level":2,"title":"Vue 模板渲染的原理是什么？","slug":"vue-模板渲染的原理是什么","link":"#vue-模板渲染的原理是什么","children":[]},{"level":2,"title":"template 预编译是什么？","slug":"template-预编译是什么","link":"#template-预编译是什么","children":[]},{"level":2,"title":"那 template 和 jsx 的有什么分别？","slug":"那-template-和-jsx-的有什么分别","link":"#那-template-和-jsx-的有什么分别","children":[]},{"level":2,"title":"说一下什么是 Virtual DOM","slug":"说一下什么是-virtual-dom","link":"#说一下什么是-virtual-dom","children":[]},{"level":2,"title":"介绍一下 Vue 中的 Diff 算法","slug":"介绍一下-vue-中的-diff-算法","link":"#介绍一下-vue-中的-diff-算法","children":[]},{"level":2,"title":"key 属性的作用是什么","slug":"key-属性的作用是什么","link":"#key-属性的作用是什么","children":[]},{"level":2,"title":"说说 Vue2.0 和 Vue3.0 有什么区别","slug":"说说-vue2-0-和-vue3-0-有什么区别","link":"#说说-vue2-0-和-vue3-0-有什么区别","children":[]},{"level":2,"title":"为什么要新增 Composition API，它能解决什么问题","slug":"为什么要新增-composition-api-它能解决什么问题","link":"#为什么要新增-composition-api-它能解决什么问题","children":[]},{"level":2,"title":"都说 Composition API 与 React Hook 很像，说说区别","slug":"都说-composition-api-与-react-hook-很像-说说区别","link":"#都说-composition-api-与-react-hook-很像-说说区别","children":[]},{"level":2,"title":"SSR 有了解吗？原理是什么？","slug":"ssr-有了解吗-原理是什么","link":"#ssr-有了解吗-原理是什么","children":[]}],"git":{"createdTime":1702273484000,"updatedTime":1702273484000,"contributors":[{"name":"chenzhen","email":"599422271@qq.com","commits":1}]},"readingTime":{"minutes":14.25,"words":4276},"filePathRelative":"前端开发/面经指南/面经系列-vue.md","localizedDate":"2021年1月8日","autoDesc":true}`);export{e as data};
