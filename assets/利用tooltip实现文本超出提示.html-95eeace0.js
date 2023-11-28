import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as p,c as o,b as n,d as c,a as l,e as s}from"./app-badd7849.js";const i={},u={class:"hint-container tip"},r=s('<p class="hint-container-title">开始之前...</p><p>以下概念均不包括<code>margin</code>,因为它不是元素的一部分</p><p><code>offsetWidth/offsetHeight</code>:它们提供了元素的“外部” width/height。或者，换句话说，它的完整大小（包括边框）</p><p><code>scrollWidth/scrollHeight</code>这些属性就像 <code>clientWidth/clientHeight</code>，但它们还包括滚动出（隐藏）的部分</p><p><code>clientWidth/clientHeight</code>:这些属性提供了元素边框内区域的大小。它们包括了 “content width” 和 “padding”，但不包括滚动条宽度（scrollbar:不同的设备和浏览器，滚动条的宽度可能有所不同，chorme浏览器的滚动条宽带为<code>15px</code>）</p>',5),d={href:"https://zh.javascript.info/size-and-scroll#offsetwidthheight",target:"_blank",rel:"noopener noreferrer"},k=s(`<p>写业务碰到需要固定容器判断文字是否超出，超出部分使用省略号隐藏，鼠标悬浮显示 tip。</p><p>html 结构：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-tooltip</span> <span class="token attr-name">effect</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dark<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>title<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>top<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>!show<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>context<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ title }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-tooltip</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>省略号使用 css 完成：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.context</span> <span class="token punctuation">{</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
  <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>判断是否超出逻辑：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> el <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>text
<span class="token comment">// 大于即超出可视区</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>show <span class="token operator">=</span> el <span class="token operator">&amp;&amp;</span> el<span class="token punctuation">.</span>scrollWidth <span class="token operator">&gt;</span> el<span class="token punctuation">.</span>offsetWidth
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function v(m,h){const a=e("ExternalLinkIcon");return p(),o("div",null,[n("div",u,[r,n("p",null,[n("a",d,[c("元素大小和滚动（目前看到解释最好的一篇）"),l(a)])])]),k])}const f=t(i,[["render",v],["__file","利用tooltip实现文本超出提示.html.vue"]]);export{f as default};
