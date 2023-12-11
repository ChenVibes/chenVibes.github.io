import{_ as n,o as s,c as a,e}from"./app-LwdL4hqy.js";const t={},p=e(`<p>JavaScript 中除了正常运行模式（非严格模式），还有一种严格模式（strict mode），顾名思义，这种模式使得 JavaScript 在更严格的模式下运行</p><p>严格模式消除了 JavaScript 语法的一些不合理、不严谨之处，减少一些怪异行为。 消除代码运行一些不安全之处，保证代码运行的安全。 提高代码编译效率，增加运行速度。 为未来新版本的 JavaScript 做好铺垫。</p><p>开启严格模式：</p><p>1、为整个脚本开启严格模式，需要在所有语句之前放一个特定语句&quot;use strict&quot;</p><p>2、为函数开启严格模式，把&quot;use strict&quot;声明放在函数体的所有语句之前</p><p>严格模式与非严格模式（正常运行模式）的常见区别:</p><p>(1) 在非严格模式中，如果一个变量没有声明就赋值，默认是全局变量，不会出现报错。严格模式禁止这种用法，添加&quot;use strict&quot;开启严格模式后，会出现报错</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&#39;use strict&#39;</span>
num <span class="token operator">=</span> <span class="token number">1</span> <span class="token comment">//Uncaught ReferenceError: num is not defined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>(2) 在非严格模式中，全局作用域中的函数内部 this 默认指向 window,在严格模式中，全局作用域中的函数内部 this 默认指向 undefined</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token comment">// window</span>
<span class="token punctuation">}</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token string">&#39;use strict&#39;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token comment">// undefined</span>
<span class="token punctuation">}</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(3) 非严格模式下，允许重复变量命名;在严格模式下，不允许重复变量命名</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> a<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> a <span class="token operator">+</span> c
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&#39;use strict&#39;</span>
<span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> a<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// !!! 语法错误</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> a <span class="token operator">+</span> c <span class="token comment">// 代码运行到这里会出错</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),c=[p];function i(o,l){return s(),a("div",null,c)}const r=n(t,[["render",i],["__file","js的严格模式.html.vue"]]);export{r as default};
