import{_ as n,o as s,c as a,e}from"./app-9gJpSWLU.js";const t={},o=e(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;I&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;go&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;home&#39;</span><span class="token punctuation">]</span>

<span class="token keyword">delete</span> arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token comment">// remove &quot;go&quot;</span>

<span class="token function">alert</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// undefined</span>

<span class="token comment">// now arr = [&quot;I&quot;,  , &quot;home&quot;];</span>
<span class="token function">alert</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token comment">// 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 delete 删除指定索引号的数组元素后会发生什么？</p><ul><li>数组元素值消失</li><li>通过索引号访问，得到 undefined</li><li>数组长度不变</li></ul>`,3),c=[o];function p(l,i){return s(),a("div",null,c)}const r=n(t,[["render",p],["__file","数组delete元素.html.vue"]]);export{r as default};
