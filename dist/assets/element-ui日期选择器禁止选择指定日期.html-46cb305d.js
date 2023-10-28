const n=JSON.parse(`{"key":"v-6448b763","path":"/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/Vue/element-ui%E6%97%A5%E6%9C%9F%E9%80%89%E6%8B%A9%E5%99%A8%E7%A6%81%E6%AD%A2%E9%80%89%E6%8B%A9%E6%8C%87%E5%AE%9A%E6%97%A5%E6%9C%9F.html","title":"element-ui日期选择器禁止选择指定日期","lang":"zh-CN","frontmatter":{"title":"element-ui日期选择器禁止选择指定日期","isOriginal":true,"category":["开发笔记","Vue"],"description":"&lt;template&gt; &lt;div style=\\"margin:20px\\"&gt; &lt;el-row&gt; 禁止选择过去日期（不能选择今天） &lt;el-date-picker v-model=\\"date1\\" align=\\"right\\" type=\\"date\\" placeholder=\\"选择日期\\" :picker-options=\\"pickerOptions1\\" &gt; &lt;/el-date-picker&gt; &lt;/el-row&gt; &lt;el-row&gt; 禁止选择过去日期（可以选择今天） &lt;el-date-picker v-model=\\"date2\\" align=\\"right\\" type=\\"date\\" placeholder=\\"选择日期\\" :picker-options=\\"pickerOptions2\\" &gt; &lt;/el-date-picker&gt; &lt;/el-row&gt; &lt;el-row&gt; 禁止选择未来日期（不能选择今天） &lt;el-date-picker v-model=\\"date3\\" align=\\"right\\" type=\\"date\\" placeholder=\\"选择日期\\" :picker-options=\\"pickerOptions3\\" &gt; &lt;/el-date-picker&gt; &lt;/el-row&gt; &lt;el-row&gt; 禁止选择未来日期（可以选择今天） &lt;el-date-picker v-model=\\"date4\\" align=\\"right\\" type=\\"date\\" placeholder=\\"选择日期\\" :picker-options=\\"pickerOptions4\\" &gt; &lt;/el-date-picker&gt; &lt;/el-row&gt; &lt;/div&gt; &lt;/template&gt; &lt;script&gt; export default { data() { return { date1: \\"\\", date2: \\"\\", date3: \\"\\", date4: \\"\\", pickerOptions1: { disabledDate(time) { // 禁止选择过去日期（不能选择今天） return time.getTime() &lt; Date.now(); }, }, pickerOptions2: { disabledDate(time) { // 禁止选择过去日期（可以选择今天） return time.getTime() &lt; Date.now() - 24 * 60 * 60 * 1000; }, }, pickerOptions3: { disabledDate(time) { // 禁止选择未来日期（不能选择今天） return time.getTime() &gt; Date.now() - 24 * 60 * 60 * 1000; }, }, pickerOptions4: { disabledDate(time) { // 禁止选择未来日期（可以选择今天） return time.getTime() &gt; Date.now(); }, }, }; }, }; &lt;/script&gt;","head":[["meta",{"property":"og:url","content":"http://magicbegin.gitee.io/vuepress-blog/%E5%BC%80%E5%8F%91%E6%97%A5%E5%BF%97/Vue/element-ui%E6%97%A5%E6%9C%9F%E9%80%89%E6%8B%A9%E5%99%A8%E7%A6%81%E6%AD%A2%E9%80%89%E6%8B%A9%E6%8C%87%E5%AE%9A%E6%97%A5%E6%9C%9F.html"}],["meta",{"property":"og:site_name","content":"Mr Chen's Blog"}],["meta",{"property":"og:title","content":"element-ui日期选择器禁止选择指定日期"}],["meta",{"property":"og:description","content":"&lt;template&gt; &lt;div style=\\"margin:20px\\"&gt; &lt;el-row&gt; 禁止选择过去日期（不能选择今天） &lt;el-date-picker v-model=\\"date1\\" align=\\"right\\" type=\\"date\\" placeholder=\\"选择日期\\" :picker-options=\\"pickerOptions1\\" &gt; &lt;/el-date-picker&gt; &lt;/el-row&gt; &lt;el-row&gt; 禁止选择过去日期（可以选择今天） &lt;el-date-picker v-model=\\"date2\\" align=\\"right\\" type=\\"date\\" placeholder=\\"选择日期\\" :picker-options=\\"pickerOptions2\\" &gt; &lt;/el-date-picker&gt; &lt;/el-row&gt; &lt;el-row&gt; 禁止选择未来日期（不能选择今天） &lt;el-date-picker v-model=\\"date3\\" align=\\"right\\" type=\\"date\\" placeholder=\\"选择日期\\" :picker-options=\\"pickerOptions3\\" &gt; &lt;/el-date-picker&gt; &lt;/el-row&gt; &lt;el-row&gt; 禁止选择未来日期（可以选择今天） &lt;el-date-picker v-model=\\"date4\\" align=\\"right\\" type=\\"date\\" placeholder=\\"选择日期\\" :picker-options=\\"pickerOptions4\\" &gt; &lt;/el-date-picker&gt; &lt;/el-row&gt; &lt;/div&gt; &lt;/template&gt; &lt;script&gt; export default { data() { return { date1: \\"\\", date2: \\"\\", date3: \\"\\", date4: \\"\\", pickerOptions1: { disabledDate(time) { // 禁止选择过去日期（不能选择今天） return time.getTime() &lt; Date.now(); }, }, pickerOptions2: { disabledDate(time) { // 禁止选择过去日期（可以选择今天） return time.getTime() &lt; Date.now() - 24 * 60 * 60 * 1000; }, }, pickerOptions3: { disabledDate(time) { // 禁止选择未来日期（不能选择今天） return time.getTime() &gt; Date.now() - 24 * 60 * 60 * 1000; }, }, pickerOptions4: { disabledDate(time) { // 禁止选择未来日期（可以选择今天） return time.getTime() &gt; Date.now(); }, }, }; }, }; &lt;/script&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-27T11:35:00.000Z"}],["meta",{"property":"article:author","content":"Mr Chen"}],["meta",{"property":"article:modified_time","content":"2023-10-27T11:35:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"element-ui日期选择器禁止选择指定日期\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-10-27T11:35:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr Chen\\",\\"url\\":\\"https://gitee.com/magicBegin/vuepress-blog\\",\\"email\\":\\"599422271@qq.com\\"}]}"]]},"headers":[],"git":{"createdTime":1698406500000,"updatedTime":1698406500000,"contributors":[{"name":"chenzhen","email":"599422271@qq.com","commits":1}]},"readingTime":{"minutes":0.97,"words":290},"filePathRelative":"开发日志/Vue/element-ui日期选择器禁止选择指定日期.md","localizedDate":"2023年10月27日","excerpt":"<div class=\\"language-vue line-numbers-mode\\" data-ext=\\"vue\\"><pre class=\\"language-vue\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>template</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span> <span class=\\"token special-attr\\"><span class=\\"token attr-name\\">style</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span><span class=\\"token value css language-css\\"><span class=\\"token property\\">margin</span><span class=\\"token punctuation\\">:</span>20px</span><span class=\\"token punctuation\\">\\"</span></span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>el-row</span><span class=\\"token punctuation\\">&gt;</span></span>\\n      禁止选择过去日期（不能选择今天）\\n      <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>el-date-picker</span>\\n        <span class=\\"token attr-name\\">v-model</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>date1<span class=\\"token punctuation\\">\\"</span></span>\\n        <span class=\\"token attr-name\\">align</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>right<span class=\\"token punctuation\\">\\"</span></span>\\n        <span class=\\"token attr-name\\">type</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>date<span class=\\"token punctuation\\">\\"</span></span>\\n        <span class=\\"token attr-name\\">placeholder</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>选择日期<span class=\\"token punctuation\\">\\"</span></span>\\n        <span class=\\"token attr-name\\">:picker-options</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>pickerOptions1<span class=\\"token punctuation\\">\\"</span></span>\\n      <span class=\\"token punctuation\\">&gt;</span></span>\\n      <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>el-date-picker</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>el-row</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>el-row</span><span class=\\"token punctuation\\">&gt;</span></span>\\n      禁止选择过去日期（可以选择今天）\\n      <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>el-date-picker</span>\\n        <span class=\\"token attr-name\\">v-model</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>date2<span class=\\"token punctuation\\">\\"</span></span>\\n        <span class=\\"token attr-name\\">align</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>right<span class=\\"token punctuation\\">\\"</span></span>\\n        <span class=\\"token attr-name\\">type</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>date<span class=\\"token punctuation\\">\\"</span></span>\\n        <span class=\\"token attr-name\\">placeholder</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>选择日期<span class=\\"token punctuation\\">\\"</span></span>\\n        <span class=\\"token attr-name\\">:picker-options</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>pickerOptions2<span class=\\"token punctuation\\">\\"</span></span>\\n      <span class=\\"token punctuation\\">&gt;</span></span>\\n      <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>el-date-picker</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>el-row</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>el-row</span><span class=\\"token punctuation\\">&gt;</span></span>\\n      禁止选择未来日期（不能选择今天）\\n      <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>el-date-picker</span>\\n        <span class=\\"token attr-name\\">v-model</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>date3<span class=\\"token punctuation\\">\\"</span></span>\\n        <span class=\\"token attr-name\\">align</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>right<span class=\\"token punctuation\\">\\"</span></span>\\n        <span class=\\"token attr-name\\">type</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>date<span class=\\"token punctuation\\">\\"</span></span>\\n        <span class=\\"token attr-name\\">placeholder</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>选择日期<span class=\\"token punctuation\\">\\"</span></span>\\n        <span class=\\"token attr-name\\">:picker-options</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>pickerOptions3<span class=\\"token punctuation\\">\\"</span></span>\\n      <span class=\\"token punctuation\\">&gt;</span></span>\\n      <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>el-date-picker</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>el-row</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>el-row</span><span class=\\"token punctuation\\">&gt;</span></span>\\n      禁止选择未来日期（可以选择今天）\\n      <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>el-date-picker</span>\\n        <span class=\\"token attr-name\\">v-model</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>date4<span class=\\"token punctuation\\">\\"</span></span>\\n        <span class=\\"token attr-name\\">align</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>right<span class=\\"token punctuation\\">\\"</span></span>\\n        <span class=\\"token attr-name\\">type</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>date<span class=\\"token punctuation\\">\\"</span></span>\\n        <span class=\\"token attr-name\\">placeholder</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>选择日期<span class=\\"token punctuation\\">\\"</span></span>\\n        <span class=\\"token attr-name\\">:picker-options</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>pickerOptions4<span class=\\"token punctuation\\">\\"</span></span>\\n      <span class=\\"token punctuation\\">&gt;</span></span>\\n      <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>el-date-picker</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>el-row</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>template</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>script</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token script\\"><span class=\\"token language-javascript\\">\\n  <span class=\\"token keyword\\">export</span> <span class=\\"token keyword\\">default</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token function\\">data</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">return</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token literal-property property\\">date1</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"\\"</span><span class=\\"token punctuation\\">,</span>\\n      <span class=\\"token literal-property property\\">date2</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"\\"</span><span class=\\"token punctuation\\">,</span>\\n      <span class=\\"token literal-property property\\">date3</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"\\"</span><span class=\\"token punctuation\\">,</span>\\n      <span class=\\"token literal-property property\\">date4</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"\\"</span><span class=\\"token punctuation\\">,</span>\\n      <span class=\\"token literal-property property\\">pickerOptions1</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token function\\">disabledDate</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">time</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n          <span class=\\"token comment\\">// 禁止选择过去日期（不能选择今天）</span>\\n          <span class=\\"token keyword\\">return</span> time<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getTime</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">&lt;</span> Date<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">now</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n      <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n      <span class=\\"token literal-property property\\">pickerOptions2</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token function\\">disabledDate</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">time</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n          <span class=\\"token comment\\">// 禁止选择过去日期（可以选择今天）</span>\\n          <span class=\\"token keyword\\">return</span> time<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getTime</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">&lt;</span> Date<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">now</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">-</span> <span class=\\"token number\\">24</span> <span class=\\"token operator\\">*</span> <span class=\\"token number\\">60</span> <span class=\\"token operator\\">*</span> <span class=\\"token number\\">60</span> <span class=\\"token operator\\">*</span> <span class=\\"token number\\">1000</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n      <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n      <span class=\\"token literal-property property\\">pickerOptions3</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token function\\">disabledDate</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">time</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n          <span class=\\"token comment\\">// 禁止选择未来日期（不能选择今天）</span>\\n          <span class=\\"token keyword\\">return</span> time<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getTime</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">&gt;</span> Date<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">now</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">-</span> <span class=\\"token number\\">24</span> <span class=\\"token operator\\">*</span> <span class=\\"token number\\">60</span> <span class=\\"token operator\\">*</span> <span class=\\"token number\\">60</span> <span class=\\"token operator\\">*</span> <span class=\\"token number\\">1000</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n      <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n      <span class=\\"token literal-property property\\">pickerOptions4</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token function\\">disabledDate</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">time</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n          <span class=\\"token comment\\">// 禁止选择未来日期（可以选择今天）</span>\\n          <span class=\\"token keyword\\">return</span> time<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getTime</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">&gt;</span> Date<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">now</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n      <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>script</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
