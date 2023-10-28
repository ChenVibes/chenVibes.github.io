const t=JSON.parse(`{"key":"v-011b7805","path":"/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/ES6/%E9%81%8D%E5%8E%86%E5%99%A8%E4%B8%8Efor...of%E5%BE%AA%E7%8E%AF.html","title":"遍历器与for...of循环","lang":"zh-CN","frontmatter":{"title":"遍历器与for...of循环","tag":["遍历器","forof"],"category":["前端进阶","ES6"],"description":"Iterator 是什么 Iterator(遍历器)的作用:它是用来遍历的 使用 Iterator const it = [1, 2][Symbol.iterator]() console.log(it.next()) console.log(it.next()) console.log(it.next())","head":[["meta",{"property":"og:url","content":"http://magicbegin.gitee.io/vuepress-blog/vuepress-blog/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E8%BF%9B%E9%98%B6/ES6/%E9%81%8D%E5%8E%86%E5%99%A8%E4%B8%8Efor...of%E5%BE%AA%E7%8E%AF.html"}],["meta",{"property":"og:site_name","content":"Mr Chen's Blog"}],["meta",{"property":"og:title","content":"遍历器与for...of循环"}],["meta",{"property":"og:description","content":"Iterator 是什么 Iterator(遍历器)的作用:它是用来遍历的 使用 Iterator const it = [1, 2][Symbol.iterator]() console.log(it.next()) console.log(it.next()) console.log(it.next())"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-27T11:35:00.000Z"}],["meta",{"property":"article:author","content":"Mr Chen"}],["meta",{"property":"article:tag","content":"遍历器"}],["meta",{"property":"article:tag","content":"forof"}],["meta",{"property":"article:modified_time","content":"2023-10-27T11:35:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"遍历器与for...of循环\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-10-27T11:35:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr Chen\\",\\"url\\":\\"https://gitee.com/magicBegin/vuepress-blog\\",\\"email\\":\\"599422271@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"Iterator 是什么","slug":"iterator-是什么","link":"#iterator-是什么","children":[]},{"level":2,"title":"Symbol 详解","slug":"symbol-详解","link":"#symbol-详解","children":[{"level":3,"title":"基础语法","slug":"基础语法","link":"#基础语法","children":[]},{"level":3,"title":"Symbol 属性的遍历","slug":"symbol-属性的遍历","link":"#symbol-属性的遍历","children":[]},{"level":3,"title":"Symbol.for()，Symbol.keyFor()","slug":"symbol-for-symbol-keyfor","link":"#symbol-for-symbol-keyfor","children":[]},{"level":3,"title":"Symbol 的作用","slug":"symbol-的作用","link":"#symbol-的作用","children":[]},{"level":3,"title":"常用内置的 Symbol 值：Symbol.iterator","slug":"常用内置的-symbol-值-symbol-iterator","link":"#常用内置的-symbol-值-symbol-iterator","children":[]},{"level":3,"title":"Symbol 与基本数据类型转换","slug":"symbol-与基本数据类型转换","link":"#symbol-与基本数据类型转换","children":[]}]},{"level":2,"title":"Iterator 解惑","slug":"iterator-解惑","link":"#iterator-解惑","children":[]},{"level":2,"title":"for...of 的用法","slug":"for-of-的用法","link":"#for-of-的用法","children":[]},{"level":2,"title":"原生可遍历与非原生可遍历","slug":"原生可遍历与非原生可遍历","link":"#原生可遍历与非原生可遍历","children":[]},{"level":2,"title":"使用了 Iterator 的场合","slug":"使用了-iterator-的场合","link":"#使用了-iterator-的场合","children":[]},{"level":2,"title":"遍历总结","slug":"遍历总结","link":"#遍历总结","children":[{"level":3,"title":"for","slug":"for","link":"#for","children":[]},{"level":3,"title":"forEach","slug":"foreach","link":"#foreach","children":[]},{"level":3,"title":"for in","slug":"for-in","link":"#for-in","children":[]},{"level":3,"title":"for of","slug":"for-of","link":"#for-of","children":[]}]}],"git":{"createdTime":1698406500000,"updatedTime":1698406500000,"contributors":[{"name":"chenzhen","email":"599422271@qq.com","commits":1}]},"readingTime":{"minutes":5.29,"words":1586},"filePathRelative":"前端开发/前端进阶/ES6/遍历器与for...of循环.md","localizedDate":"2023年10月27日","excerpt":"<h2> Iterator 是什么</h2>\\n<ol>\\n<li>Iterator(遍历器)的作用:它是用来<code>遍历</code>的</li>\\n<li>使用 Iterator</li>\\n</ol>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">const</span> it <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">[</span>Symbol<span class=\\"token punctuation\\">.</span>iterator<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\nconsole<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span>it<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">next</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\nconsole<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span>it<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">next</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\nconsole<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span>it<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">next</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{t as data};
