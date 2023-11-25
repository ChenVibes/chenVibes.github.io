import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-d605ab7d.js";const p={},t=e(`<h2 id="对象字面量的增强" tabindex="-1"><a class="header-anchor" href="#对象字面量的增强" aria-hidden="true">#</a> 对象字面量的增强</h2><h3 id="属性和方法的简介表示法" tabindex="-1"><a class="header-anchor" href="#属性和方法的简介表示法" aria-hidden="true">#</a> 属性和方法的简介表示法</h3><ol><li>对象字面量是什么？</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 对象字面量</span>
<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
  <span class="token function-variable function">speak</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还可以通过实例化构造函数生成对象：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 实例化构造函数生成对象</span>
<span class="token keyword">const</span> person<span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
person<span class="token punctuation">.</span>age<span class="token operator">=</span><span class="token number">18</span>
person<span class="token punctuation">.</span><span class="token function-variable function">speak</span><span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>属性的简洁表示法<br> 键名和变量或常量一样的时候，可以只写一个</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> age <span class="token operator">=</span> <span class="token number">18</span>
<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// age:age</span>
  age<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.方法的简介表示法<br> 方法可以省略冒号和 function 关键字,但不能使用箭头函数</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// speak:function(){}</span>
  <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方括号语法" tabindex="-1"><a class="header-anchor" href="#方括号语法" aria-hidden="true">#</a> 方括号语法</h3><ol><li>方括号语法的用法</li></ol><p>增强：<strong>方括号语法可以写在对象字面量中</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> prop <span class="token operator">=</span> <span class="token string">&#39;age&#39;</span>
<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment">// person.prop=18 x</span>
<span class="token comment">// person[prop]=18</span>
<span class="token comment">// 增强</span>
<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>prop<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>方括号中可以放什么<br> 值或通过计算可以得到值的（表达式）</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> prop<span class="token operator">=</span><span class="token string">&#39;age&#39;</span>
<span class="token keyword">const</span> <span class="token function-variable function">func</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token string">&quot;age&quot;</span>
<span class="token keyword">const</span> person<span class="token operator">=</span><span class="token punctuation">{</span>
    <span class="token punctuation">[</span>prop<span class="token punctuation">]</span><span class="token operator">:</span><span class="token number">18</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token operator">:</span><span class="token number">18</span>
    <span class="token punctuation">[</span><span class="token string">&#39;sex&#39;</span><span class="token punctuation">]</span><span class="token operator">:</span><span class="token string">&#39;male&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>方括号语法和点语法的区别</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
person<span class="token punctuation">.</span>age等价于person<span class="token punctuation">[</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>属性名是<strong>合法</strong>标识符时，使用点语法和方括号语法都是可以的，属性名不是合法标识符时，<strong>只能使用方括号语法</strong></li><li>使用变量或者常量保存属性名时，只能使用方括号语法，不能使用点语法。</li></ul><blockquote><p>同一个属性不可以同时使用简洁表达式(键名和变量或常量一样的时候，可以只写一个)和方括号语法</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> age<span class="token operator">=</span><span class="token string">&#39;18&#39;</span>
<span class="token keyword">const</span> name<span class="token operator">=</span><span class="token string">&#39;frank&#39;</span>
<span class="token keyword">const</span> person<span class="token operator">=</span><span class="token punctuation">{</span>
    <span class="token punctuation">[</span>age<span class="token punctuation">]</span>  ❌
    <span class="token punctuation">[</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">]</span>❌
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="函数参数的默认值" tabindex="-1"><a class="header-anchor" href="#函数参数的默认值" aria-hidden="true">#</a> 函数参数的默认值</h2><h3 id="函数参数的默认值是什么" tabindex="-1"><a class="header-anchor" href="#函数参数的默认值是什么" aria-hidden="true">#</a> 函数参数的默认值是什么？</h3><p>1.认识<br> 调用函数的时候传参了，就用传递的参数；如果没传参，就用默认值</p><ol start="2"><li>函数参数默认值的基本用法</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">multiply</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token number">1</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x <span class="token operator">*</span> y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="函数参数默认值的注意事项" tabindex="-1"><a class="header-anchor" href="#函数参数默认值的注意事项" aria-hidden="true">#</a> 函数参数默认值的注意事项</h3><ol><li>默认值的生效条件<br> 不传参数，或者明确的传递 undefined 作为参数，只有这两种情况下，默认值才会生效</li><li>默认值表达式<br> 如果默认是表达式，默认表达式是惰性求值的</li><li>设置默认值的小技巧<br> 函数参数的默认值，最好从参数列表的右边开始设置</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">multiply</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x <span class="token operator">*</span> y、
<span class="token comment">// 不可以省略undefined(从右边设置可以省略)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">multiply</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数参数默认值的应用" tabindex="-1"><a class="header-anchor" href="#函数参数默认值的应用" aria-hidden="true">#</a> 函数参数默认值的应用</h3><p>接收很多参数的时候,可以接收一个对象作为参数</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 无需记忆参数的顺序</span>
<span class="token comment">// 解构赋值，解构赋值的默认值，函数参数的默认值混用</span>
<span class="token keyword">const</span> logUser <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> username <span class="token operator">=</span> <span class="token string">&#39;wuming&#39;</span><span class="token punctuation">,</span> age <span class="token operator">=</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">,</span> sex <span class="token operator">=</span> <span class="token string">&#39;0&#39;</span> <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>username<span class="token punctuation">,</span> age<span class="token punctuation">,</span> sex<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// logUser(</span>
<span class="token comment">//     {username:&#39;a&#39;,</span>
<span class="token comment">//     age:16,</span>
<span class="token comment">//     sex:&#39;male&#39;}</span>
<span class="token comment">// )</span>
<span class="token comment">// logUser({})</span>
<span class="token function">logUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,32),o=[t];function c(i,l){return s(),a("div",null,o)}const d=n(p,[["render",c],["__file","对象字面量的增强与函数参数的默认值.html.vue"]]);export{d as default};
