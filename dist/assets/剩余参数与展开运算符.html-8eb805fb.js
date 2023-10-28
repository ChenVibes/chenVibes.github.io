const n=JSON.parse(`{"key":"v-94ff530a","path":"/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/ES6/%E5%89%A9%E4%BD%99%E5%8F%82%E6%95%B0%E4%B8%8E%E5%B1%95%E5%BC%80%E8%BF%90%E7%AE%97%E7%AC%A6.html","title":"剩余参数与展开运算符","lang":"zh-CN","frontmatter":{"title":"剩余参数与展开运算符","tag":["剩余参数","展开运算符"],"category":["前端进阶","ES6"],"description":"剩余参数 剩余参数是什么 剩余参数永远是个数组，即使没有值，也是空数组 const add = (x, y, z, ...args) =&gt; { console.log(x, y, z, args) // 1 2 3 [4,5] } add(1, 2, 3, 4, 5)","head":[["meta",{"property":"og:url","content":"http://magicbegin.gitee.io/vuepress-blog/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/ES6/%E5%89%A9%E4%BD%99%E5%8F%82%E6%95%B0%E4%B8%8E%E5%B1%95%E5%BC%80%E8%BF%90%E7%AE%97%E7%AC%A6.html"}],["meta",{"property":"og:site_name","content":"Mr Chen's Blog"}],["meta",{"property":"og:title","content":"剩余参数与展开运算符"}],["meta",{"property":"og:description","content":"剩余参数 剩余参数是什么 剩余参数永远是个数组，即使没有值，也是空数组 const add = (x, y, z, ...args) =&gt; { console.log(x, y, z, args) // 1 2 3 [4,5] } add(1, 2, 3, 4, 5)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-27T11:35:00.000Z"}],["meta",{"property":"article:author","content":"Mr Chen"}],["meta",{"property":"article:tag","content":"剩余参数"}],["meta",{"property":"article:tag","content":"展开运算符"}],["meta",{"property":"article:modified_time","content":"2023-10-27T11:35:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"剩余参数与展开运算符\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-10-27T11:35:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr Chen\\",\\"url\\":\\"https://gitee.com/magicBegin/vuepress-blog\\",\\"email\\":\\"599422271@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"剩余参数","slug":"剩余参数","link":"#剩余参数","children":[{"level":3,"title":"剩余参数是什么","slug":"剩余参数是什么","link":"#剩余参数是什么","children":[]},{"level":3,"title":"剩余参数的注意事项","slug":"剩余参数的注意事项","link":"#剩余参数的注意事项","children":[]},{"level":3,"title":"与解构赋值结合使用","slug":"与解构赋值结合使用","link":"#与解构赋值结合使用","children":[]}]},{"level":2,"title":"数组的展开运算符","slug":"数组的展开运算符","link":"#数组的展开运算符","children":[{"level":3,"title":"数组的展开运算符的基本用法","slug":"数组的展开运算符的基本用法","link":"#数组的展开运算符的基本用法","children":[]},{"level":3,"title":"区分剩余参数和展开运算符","slug":"区分剩余参数和展开运算符","link":"#区分剩余参数和展开运算符","children":[]},{"level":3,"title":"数组展开运算符的应用","slug":"数组展开运算符的应用","link":"#数组展开运算符的应用","children":[]}]},{"level":2,"title":"对象的展开运算符","slug":"对象的展开运算符","link":"#对象的展开运算符","children":[{"level":3,"title":"对象展开运算符的基本用法","slug":"对象展开运算符的基本用法","link":"#对象展开运算符的基本用法","children":[]},{"level":3,"title":"对象的展开运算符的注意事项","slug":"对象的展开运算符的注意事项","link":"#对象的展开运算符的注意事项","children":[]},{"level":3,"title":"对象展开运算符的应用","slug":"对象展开运算符的应用","link":"#对象展开运算符的应用","children":[]}]}],"git":{"createdTime":1698406500000,"updatedTime":1698406500000,"contributors":[{"name":"chenzhen","email":"599422271@qq.com","commits":1}]},"readingTime":{"minutes":3.47,"words":1042},"filePathRelative":"前端开发/前端进阶/ES6/剩余参数与展开运算符.md","localizedDate":"2023年10月27日","excerpt":"<h2> 剩余参数</h2>\\n<h3> 剩余参数是什么</h3>\\n<p>剩余参数永远是个数组，即使没有值，也是空数组</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">const</span> <span class=\\"token function-variable function\\">add</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">x<span class=\\"token punctuation\\">,</span> y<span class=\\"token punctuation\\">,</span> z<span class=\\"token punctuation\\">,</span> <span class=\\"token operator\\">...</span>args</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n  console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span>x<span class=\\"token punctuation\\">,</span> y<span class=\\"token punctuation\\">,</span> z<span class=\\"token punctuation\\">,</span> args<span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\">// 1 2 3 [4,5]</span>\\n<span class=\\"token punctuation\\">}</span>\\n<span class=\\"token function\\">add</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">4</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">5</span><span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
