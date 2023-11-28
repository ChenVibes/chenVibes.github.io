import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as e,e as a}from"./app-badd7849.js";const o={},t=a(`<p>Generator 函数是 ES6 提供的一种异步编程解决方案，语法行为与传统函数完全不同。</p><p>Generator 函数有多种理解角度。语法上，首先可以把它理解成，Generator 函数是一个状态机，封装了多个内部状态。</p><p>执行 Generator 函数会返回一个遍历器对象，也就是说，Generator 函数除了状态机，还是一个遍历器对象生成函数。返回的遍历器对象，可以依次遍历 Generator 函数内部的每一个状态。</p><p>形式上，Generator 函数是一个普通函数，但是有两个特征。一是，<code>function</code>关键字与函数名之间有一个星号；二是，函数体内部使用<code>yield</code>表达式，定义不同的内部状态（<code>yield</code>在英语里的意思就是“产出”）。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">helloWorldGenerator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">yield</span> <span class="token string">&#39;hello&#39;</span>
  <span class="token keyword">yield</span> <span class="token string">&#39;world&#39;</span>
  <span class="token keyword">return</span> <span class="token string">&#39;ending&#39;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> hw <span class="token operator">=</span> <span class="token function">helloWorldGenerator</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">⚠️</p><p>待学习......</p></div>`,6),r=[t];function c(i,p){return s(),e("div",null,r)}const u=n(o,[["render",c],["__file","Generator.html.vue"]]);export{u as default};
