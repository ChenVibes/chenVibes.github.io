import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as e,c as o,b as n,d as s,a as c,e as l}from"./app-0080a928.js";const i={},u=n("h1",{id:"数组对象对比找出差异项",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#数组对象对比找出差异项","aria-hidden":"true"},"#"),s(" 数组对象对比找出差异项")],-1),r=n("p",null,"写公司业务遇到了这个问题，需要对比两个对象数组找出差异项，这种场景普遍是两个数据对象是一个包含另一个的关系，也就是一个是另一个的子数组",-1),k=n("code",null,"forEach ",-1),d={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#%E5%A6%82%E6%9E%9C%E6%95%B0%E7%BB%84%E5%9C%A8%E8%BF%AD%E4%BB%A3%E6%97%B6%E8%A2%AB%E4%BF%AE%E6%94%B9%E4%BA%86%EF%BC%8C%E5%88%99%E5%85%B6%E4%BB%96%E5%85%83%E7%B4%A0%E4%BC%9A%E8%A2%AB%E8%B7%B3%E8%BF%87%E3%80%82",target:"_blank",rel:"noopener noreferrer"},m=l(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> words <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;one&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;two&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;three&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;four&#39;</span><span class="token punctuation">]</span>
words<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">word</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>word<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>word <span class="token operator">===</span> <span class="token string">&#39;two&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    words<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// one</span>
<span class="token comment">// two</span>
<span class="token comment">// four</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以外层数组必须是内层数组的子数组</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">Num</span><span class="token operator">:</span> <span class="token string">&#39;A&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">Num</span><span class="token operator">:</span> <span class="token string">&#39;B&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">Num</span><span class="token operator">:</span> <span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">Name</span><span class="token operator">:</span> <span class="token string">&#39;t1&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">Num</span><span class="token operator">:</span> <span class="token string">&#39;B&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">Name</span><span class="token operator">:</span> <span class="token string">&#39;t2&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">Num</span><span class="token operator">:</span> <span class="token string">&#39;C&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">Name</span><span class="token operator">:</span> <span class="token string">&#39;t3 &#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
arr1<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  arr2<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item2<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>Num <span class="token operator">===</span> item2<span class="token punctuation">.</span>Num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      arr2<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr2<span class="token punctuation">)</span> <span class="token comment">//  [ { Num: &#39;C&#39;, Name: &#39;t3 &#39; } ]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外一种比较讨巧，也很好理解。就是把对象数组中的每一项的唯一标识单独搞成一个数组，这样处理起来就简单很多了。你也不需要像上面那两种方式考虑那么多</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">Num</span><span class="token operator">:</span> <span class="token string">&#39;A&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">Num</span><span class="token operator">:</span> <span class="token string">&#39;B&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">Num</span><span class="token operator">:</span> <span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">Name</span><span class="token operator">:</span> <span class="token string">&#39;t1&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">Num</span><span class="token operator">:</span> <span class="token string">&#39;B&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">Name</span><span class="token operator">:</span> <span class="token string">&#39;t2&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">Num</span><span class="token operator">:</span> <span class="token string">&#39;C&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">Name</span><span class="token operator">:</span> <span class="token string">&#39;t3 &#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
<span class="token keyword">let</span> arr1Num <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
arr1<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  arr1Num<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>Num<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> result <span class="token operator">=</span> arr2<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">v</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> arr1Num<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>v<span class="token punctuation">.</span>Num<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span> <span class="token comment">// [ { Num: &#39;C&#39;, Name: &#39;t3 &#39; } ]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function v(b,y){const a=t("ExternalLinkIcon");return e(),o("div",null,[u,r,n("p",null,[s("自然想到了用"),k,s("，请注意"),n("a",d,[s("如果数组在迭代时被修改了，则其他元素会被跳过"),c(a)])]),m])}const _=p(i,[["render",v],["__file","数组对象对比找出差异项.html.vue"]]);export{_ as default};
