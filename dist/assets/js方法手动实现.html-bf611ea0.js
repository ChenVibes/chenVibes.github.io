import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as p}from"./app-b3be9da7.js";const t={},e=p(`<h2 id="js-方法手动实现" tabindex="-1"><a class="header-anchor" href="#js-方法手动实现" aria-hidden="true">#</a> js 方法手动实现</h2><h3 id="_1-实现-object-assign-target-obj-obj1" tabindex="-1"><a class="header-anchor" href="#_1-实现-object-assign-target-obj-obj1" aria-hidden="true">#</a> 1.实现 Object.assign(target,obj,obj1)</h3><ul><li>Object.assign 是浅拷贝,对于值是引用类型的属性,拷贝仍旧的是它的引用</li><li>可以拷贝 Symbol 属性</li><li>不能拷贝不可枚举的属性</li><li>Object.assign 保证 target 始终是一个对象,如果传入一个基本类型,会转为基本包装类型,null/undefined 没有基本包装类型,所以传入会报错</li><li>source 参数如果是不可枚举的数据类型会忽略合并(字符串类型被认为是可枚举的,因为内部有 iterator 接口)</li><li>因为是用等号进行赋值,如果被赋值的对象的属性有 setter 函数会触发 setter 函数,同理如果有 getter 函数,也会调用赋值对象的属性的 getter 函数(这就是为什么 Object.assign 无法合并对象属性的访问器,因为它会直接执行对应的 getter/setter 函数而不是合并它们,如果需要合并对象属性的 getter/setter 函数,可以使用 ES7 提供的 Object.getOwnPropertyDescriptors 和 Object.defineProperties 这 2 个 API 实现)</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 这里是ES6新增的getter/setter简写形式</span>
  <span class="token keyword">get</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;get&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token number">1</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token keyword">set</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;set&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperties</span><span class="token punctuation">(</span>obj2<span class="token punctuation">,</span> Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptors</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;obj&#39;</span><span class="token punctuation">,</span> obj<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;obj2&#39;</span><span class="token punctuation">,</span> obj2<span class="token punctuation">)</span>
<span class="token comment">// {}</span>
<span class="token comment">// a: 1</span>
<span class="token comment">// get a: ƒ a()</span>
<span class="token comment">// set a: ƒ a(val)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>模拟 Object.assign 的实现</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&#39;use strict&#39;</span> <span class="token comment">//启用严格模式在尝试给基本包装类型已定义的下标赋值的时候报错</span>

<span class="token keyword">const</span> <span class="token function-variable function">isComplexDataType</span> <span class="token operator">=</span> <span class="token parameter">obj</span> <span class="token operator">=&gt;</span>
  <span class="token punctuation">(</span><span class="token keyword">typeof</span> obj <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">||</span> <span class="token keyword">typeof</span> obj <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> obj <span class="token operator">!==</span> <span class="token keyword">null</span>

<span class="token comment">//简单实现ES6的Object.assign</span>
<span class="token keyword">const</span> <span class="token function-variable function">selfAssign</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> <span class="token operator">...</span>source</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">&#39;Cannot convert undefined or null to object&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> source<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">acc<span class="token punctuation">,</span> cur</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">isComplexDataType</span><span class="token punctuation">(</span>acc<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">(</span>acc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span>acc<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//变成一个基本包装类型</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>cur <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> acc <span class="token comment">//source为null,undefined时忽略</span>
      <span class="token comment">// 遍历出Symbol属性和可枚举属性</span>
    <span class="token punctuation">;</span><span class="token punctuation">[</span><span class="token operator">...</span>Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">...</span>Object<span class="token punctuation">.</span><span class="token function">getOwnPropertySymbols</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>
      <span class="token parameter">key</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        acc<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> cur<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">return</span> acc
  <span class="token punctuation">}</span><span class="token punctuation">,</span> target<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

Object<span class="token punctuation">.</span>selfAssign <span class="token operator">||</span>
  Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>Object<span class="token punctuation">,</span> <span class="token string">&#39;selfAssign&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> selfAssign<span class="token punctuation">,</span>
    <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">let</span> target <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token keyword">undefined</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token literal-property property">d</span><span class="token operator">:</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">selfAssign</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> obj1<span class="token punctuation">,</span> obj2<span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">selfAssign</span><span class="token punctuation">(</span><span class="token string">&#39;abd&#39;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-实现函数-bind-方法" tabindex="-1"><a class="header-anchor" href="#_2-实现函数-bind-方法" aria-hidden="true">#</a> 2.实现函数 bind 方法</h3><p>函数的 bind 方法核心是利用 call，同时考虑了一些其他情况，例如</p><ul><li>bind 返回的函数被 new 调用作为构造函数时，绑定的值会失效并且改为 new 指定的对象</li><li>定义了绑定后函数的 length 属性和 name 属性（不可枚举属性）</li><li>绑定后函数的原型需指向原来的函数</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">isComplexDataType</span> <span class="token operator">=</span> <span class="token parameter">obj</span> <span class="token operator">=&gt;</span>
  <span class="token punctuation">(</span><span class="token keyword">typeof</span> obj <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">||</span> <span class="token keyword">typeof</span> obj <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> obj <span class="token operator">!==</span> <span class="token keyword">null</span>

<span class="token comment">// 实现一个简易的bind</span>
<span class="token keyword">const</span> <span class="token function-variable function">selfBind</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">bindTarget<span class="token punctuation">,</span> <span class="token operator">...</span>args1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token keyword">this</span> <span class="token operator">!==</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">&#39;Bind must be called on a function&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">let</span> func <span class="token operator">=</span> <span class="token keyword">this</span>
  <span class="token keyword">let</span> <span class="token function-variable function">boundFunc</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> args <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>args1<span class="token punctuation">,</span> <span class="token operator">...</span>args2<span class="token punctuation">]</span>

    <span class="token comment">// 使用new关键字调用返回新对象</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">new</span><span class="token punctuation">.</span>target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span>
      <span class="token comment">//如果构造函数返回一个对象则返回这个对象</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isComplexDataType</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> res
      <span class="token comment">//否则返回新建的对象</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>bindTarget<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 绑定后的函数继承绑定前的函数(非箭头函数)</span>
  <span class="token doc-comment comment">/**真正的bind创建的函数是没有prototype的,但是使用new会将创建的对象连接到bind前函数的prototype(非箭头函数)**/</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>prototype <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>boundFunc<span class="token punctuation">.</span>prototype <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">)</span>

  <span class="token comment">// 定义绑定后函数的长度和名字</span>
  <span class="token keyword">let</span> desc <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptors</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span>
  Object<span class="token punctuation">.</span><span class="token function">defineProperties</span><span class="token punctuation">(</span>boundFunc<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">length</span><span class="token operator">:</span> desc<span class="token punctuation">.</span>length<span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>desc<span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">bound </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>desc<span class="token punctuation">.</span>name<span class="token punctuation">.</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> boundFunc
<span class="token punctuation">}</span>

<span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>selfBind <span class="token operator">||</span>
  Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span><span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> <span class="token string">&#39;selfBind&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> selfBind<span class="token punctuation">,</span>
    <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;yeyan1996&#39;</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> example <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">22</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> boundFunc <span class="token operator">=</span> func<span class="token punctuation">.</span><span class="token function">selfBind</span><span class="token punctuation">(</span>example<span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">dir</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">dir</span><span class="token punctuation">(</span>boundFunc<span class="token punctuation">)</span>

<span class="token function">boundFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>example<span class="token punctuation">)</span>

<span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">boundFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-实现函数-call-方法" tabindex="-1"><a class="header-anchor" href="#_3-实现函数-call-方法" aria-hidden="true">#</a> 3.实现函数 call 方法</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//selfCall(ES6版本)</span>
<span class="token keyword">const</span> <span class="token function-variable function">selfCall</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> func <span class="token operator">=</span> <span class="token keyword">this</span>
  context <span class="token operator">||</span> <span class="token punctuation">(</span>context <span class="token operator">=</span> window<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> func <span class="token operator">!==</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">&#39;this is not function&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">let</span> caller <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;caller&#39;</span><span class="token punctuation">)</span>
  context<span class="token punctuation">[</span>caller<span class="token punctuation">]</span> <span class="token operator">=</span> func
  <span class="token keyword">let</span> res <span class="token operator">=</span> context<span class="token punctuation">[</span>caller<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span>
  <span class="token keyword">delete</span> context<span class="token punctuation">[</span>caller<span class="token punctuation">]</span>
  <span class="token keyword">return</span> res
<span class="token punctuation">}</span>

<span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>selfCall <span class="token operator">||</span>
  Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span><span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> <span class="token string">&#39;selfCall&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> selfCall<span class="token punctuation">,</span>
    <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">let</span> example2 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span>
func<span class="token punctuation">.</span><span class="token function">selfCall</span><span class="token punctuation">(</span>example2<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>example2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>原理就是将函数作为传入的上下文参数（context）的属性执行，这里为了防止属性冲突使用了 ES6 的 Symbol 类型</p><h3 id="_9-实现-es6-的-class-语法" tabindex="-1"><a class="header-anchor" href="#_9-实现-es6-的-class-语法" aria-hidden="true">#</a> 9. 实现 es6 的 class 语法</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//简单模拟ES6的class实现</span>
<span class="token comment">// class Animal {</span>
<span class="token comment">//     constructor(name) {</span>
<span class="token comment">//     this.name = name</span>
<span class="token comment">//     }</span>
<span class="token comment">//</span>
<span class="token comment">//     sleep() {</span>
<span class="token comment">//     console.log(&#39;animal is sleeping&#39;)</span>
<span class="token comment">//     }</span>
<span class="token comment">//</span>
<span class="token comment">//     static staticFunc() {</span>
<span class="token comment">//     console.log(&#39;staticFunc&#39;)</span>
<span class="token comment">//     }</span>
<span class="token comment">// }</span>
<span class="token comment">//</span>
<span class="token comment">// class Dog extends Animal {</span>
<span class="token comment">//     constructor(name, color) {</span>
<span class="token comment">//     super(name)</span>
<span class="token comment">//     this.color = color</span>
<span class="token comment">//     }</span>
<span class="token comment">//</span>
<span class="token comment">//     barking() {</span>
<span class="token comment">//     console.log(&#39;wang!&#39;)</span>
<span class="token comment">//     }</span>
<span class="token comment">// }</span>
<span class="token comment">//</span>
<span class="token comment">// let brownTeddy = new Dog(&#39;teddy&#39;, &#39;brown&#39;)</span>
<span class="token comment">// Dog.staticFunc()</span>
<span class="token comment">// console.log(brownTeddy)</span>
<span class="token comment">// brownTeddy.sleep()</span>
<span class="token comment">// brownTeddy.barking()</span>

<span class="token keyword">function</span> <span class="token function">Animal</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
<span class="token punctuation">}</span>

Animal<span class="token punctuation">.</span><span class="token function-variable function">staticFunc</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;staticFunc&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token class-name">Animal</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">sleep</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;animal is sleeping&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Dog</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> color</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">Animal</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>color <span class="token operator">=</span> color
<span class="token punctuation">}</span>

<span class="token comment">//寄生组合式继承 + 构造函数之间的继承</span>
<span class="token keyword">function</span> <span class="token function">inherit</span><span class="token punctuation">(</span><span class="token parameter">subType<span class="token punctuation">,</span> superType</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//由于JavaScript引用类型和函数按值传递的特性，不能改变subType的引用地址</span>
  subType<span class="token punctuation">.</span>prototype <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>superType<span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">constructor</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token comment">// 指向子类，和默认的继承行为保持一致</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> subType
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token comment">//子构造函数继承父构造函数(子类继承父类的静态方法和静态属性)</span>
  Object<span class="token punctuation">.</span><span class="token function">setPrototypeOf</span><span class="token punctuation">(</span>subType<span class="token punctuation">,</span> superType<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">inherit</span><span class="token punctuation">(</span>Dog<span class="token punctuation">,</span> Animal<span class="token punctuation">)</span>

<span class="token comment">//需要在继承之后再往Dog中添加原型方法，否则会被覆盖掉</span>
<span class="token class-name">Dog</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">barking</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;wang!&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> brownTeddy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token string">&#39;teddy&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;brown&#39;</span><span class="token punctuation">)</span>
Dog<span class="token punctuation">.</span><span class="token function">staticFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>brownTeddy<span class="token punctuation">)</span>
brownTeddy<span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
brownTeddy<span class="token punctuation">.</span><span class="token function">barking</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-函数柯里化" tabindex="-1"><a class="header-anchor" href="#_10-函数柯里化" aria-hidden="true">#</a> 10.函数柯里化</h3><p>柯里化是函数式编程的一个重要技巧，将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span> 函数柯里化（根据柯里化前的函数的参数数量决定柯里化后的函数需要执行多少次）
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">function</span><span class="token punctuation">}</span></span> <span class="token parameter">fn</span> -柯里化的函数
 */</span>

<span class="token keyword">function</span> <span class="token function">curry</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>fn<span class="token punctuation">.</span>length <span class="token operator">&lt;=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> fn
  <span class="token keyword">const</span> <span class="token function-variable function">generator</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>fn<span class="token punctuation">.</span>length <span class="token operator">===</span> args<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">//执行fn并且返回执行结果</span>
      <span class="token keyword">return</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args2</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">//返回generator函数</span>
        <span class="token keyword">return</span> <span class="token function">generator</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">,</span> <span class="token operator">...</span>args2<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> generator
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">display</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">,</span> d<span class="token punctuation">,</span> e<span class="token punctuation">,</span> f<span class="token punctuation">,</span> g<span class="token punctuation">,</span> h</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">,</span> d<span class="token punctuation">,</span> e<span class="token punctuation">,</span> f<span class="token punctuation">,</span> g<span class="token punctuation">,</span> h<span class="token punctuation">]</span>
<span class="token keyword">const</span> curriedDisplay <span class="token operator">=</span> <span class="token function">curry</span><span class="token punctuation">(</span>display<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;curriedDisplay&#39;</span><span class="token punctuation">,</span> <span class="token function">curriedDisplay</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">//ES6简写</span>
<span class="token keyword">const</span> <span class="token function-variable function">curry2</span> <span class="token operator">=</span> <span class="token parameter">fn</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>fn<span class="token punctuation">.</span>length <span class="token operator">&lt;=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> fn
  <span class="token keyword">const</span> <span class="token function-variable function">generator</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
    args<span class="token punctuation">.</span>length <span class="token operator">===</span> fn<span class="token punctuation">.</span>length
      <span class="token operator">?</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span>
      <span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args2</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">generator</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">,</span> <span class="token operator">...</span>args2<span class="token punctuation">)</span>
  <span class="token keyword">return</span> generator
<span class="token punctuation">}</span>
<span class="token keyword">const</span> curriedDisplay2 <span class="token operator">=</span> <span class="token function">curry2</span><span class="token punctuation">(</span>display<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;curriedDisplay2&#39;</span><span class="token punctuation">,</span> <span class="token function">curriedDisplay2</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span> 函数柯里化（支持占位符版本）
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">function</span><span class="token punctuation">}</span></span> <span class="token parameter">fn</span> -柯里化的函数
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>String<span class="token punctuation">}</span></span> [placeholder = &quot;_&quot;] -占位符
 */</span>
<span class="token keyword">const</span> curry3 <span class="token operator">=</span> <span class="token punctuation">(</span>fn<span class="token punctuation">,</span> placeholder <span class="token operator">=</span> <span class="token string">&#39;_&#39;</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  curry3<span class="token punctuation">.</span>placeholder <span class="token operator">=</span> placeholder
  <span class="token keyword">if</span> <span class="token punctuation">(</span>fn<span class="token punctuation">.</span>length <span class="token operator">&lt;=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> fn
  <span class="token keyword">let</span> argsList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">const</span> <span class="token function-variable function">generator</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> currentPlaceholderIndex <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token comment">// 记录了非当前轮最近的一个占位符下标，防止当前轮元素覆盖了当前轮的占位符</span>
    args<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">arg</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> placeholderIndex <span class="token operator">=</span> argsList<span class="token punctuation">.</span><span class="token function">findIndex</span><span class="token punctuation">(</span>
        <span class="token parameter">item</span> <span class="token operator">=&gt;</span> item <span class="token operator">===</span> curry3<span class="token punctuation">.</span>placeholder
      <span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>placeholderIndex <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 如果数组中没有占位符直接往数组末尾放入一个元素</span>
        currentPlaceholderIndex <span class="token operator">=</span> argsList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span>
        <span class="token comment">// 防止将元素填充到当前轮参数的占位符</span>
        <span class="token comment">// (1,&#39;_&#39;)(&#39;_&#39;,2) 数字2应该填充1后面的占位符，不能是2前面的占位符</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>placeholderIndex <span class="token operator">!==</span> currentPlaceholderIndex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        argsList<span class="token punctuation">[</span>placeholderIndex<span class="token punctuation">]</span> <span class="token operator">=</span> arg
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// 当前元素是占位符的情况</span>
        argsList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> realArgsList <span class="token operator">=</span> argsList<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">arg</span> <span class="token operator">=&gt;</span> arg <span class="token operator">!==</span> curry3<span class="token punctuation">.</span>placeholder<span class="token punctuation">)</span> <span class="token comment">//过滤出不含占位符的数组</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>realArgsList<span class="token punctuation">.</span>length <span class="token operator">===</span> fn<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>argsList<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>realArgsList<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> fn<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;超出初始函数参数最大值&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> generator
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> generator
<span class="token punctuation">}</span>
<span class="token keyword">const</span> curriedDisplay3 <span class="token operator">=</span> <span class="token function">curry3</span><span class="token punctuation">(</span>display<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>
  <span class="token string">&#39;curriedDisplay3&#39;</span><span class="token punctuation">,</span>
  <span class="token function">curriedDisplay3</span><span class="token punctuation">(</span><span class="token string">&#39;_&#39;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;_&#39;</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&#39;_&#39;</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token string">&#39;_&#39;</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>

<span class="token comment">//函数组合+函数柯里化</span>
<span class="token keyword">const</span> <span class="token function-variable function">compose</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>fns</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">initValue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> fns<span class="token punctuation">.</span><span class="token function">reduceRight</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">acc<span class="token punctuation">,</span> cur</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">cur</span><span class="token punctuation">(</span>acc<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> initValue<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> curriedJoin <span class="token operator">=</span> <span class="token function">curry3</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">separator<span class="token punctuation">,</span> arr</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> arr<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>separator<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> curriedMap <span class="token operator">=</span> <span class="token function">curry3</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> arr</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> curriedSplit <span class="token operator">=</span> <span class="token function">curry3</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">separator<span class="token punctuation">,</span> str</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span>separator<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> composeFunc <span class="token operator">=</span> <span class="token function">compose</span><span class="token punctuation">(</span>
  <span class="token function">curriedJoin</span><span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">curriedMap</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>item<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">1</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">curriedSplit</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;compose + curry&#39;</span><span class="token punctuation">,</span> <span class="token function">composeFunc</span><span class="token punctuation">(</span><span class="token string">&#39;helloworld&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span> 偏函数（创建已经设置好一个或多个参数的函数,并且添加了占位符功能）
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> <span class="token parameter">func</span> -部分求值的函数
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">...</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token optional-parameter"><span class="token punctuation">[</span><span class="token parameter">args</span><span class="token punctuation">]</span></span> -部分求值的参数
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> -部分求值后的函数
 **/</span>

<span class="token keyword">const</span> <span class="token function-variable function">partialFunc</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">func<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> placeholderNum <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args2</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    args2<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">arg</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> index <span class="token operator">=</span> args<span class="token punctuation">.</span><span class="token function">findIndex</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> item <span class="token operator">===</span> <span class="token string">&#39;_&#39;</span><span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span>
      args<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> arg
      placeholderNum<span class="token operator">++</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>placeholderNum <span class="token operator">&lt;</span> args2<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      args2 <span class="token operator">=</span> args2<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>placeholderNum<span class="token punctuation">,</span> args2<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token operator">...</span>args<span class="token punctuation">,</span> <span class="token operator">...</span>args2<span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> partialDisplay <span class="token operator">=</span> <span class="token function">partialFunc</span><span class="token punctuation">(</span>display<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;partialFunc&#39;</span><span class="token punctuation">,</span> <span class="token function">partialDisplay</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">let</span> partialDisplay2 <span class="token operator">=</span> <span class="token function">partialFunc</span><span class="token punctuation">(</span>display<span class="token punctuation">,</span> <span class="token string">&#39;_&#39;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;_&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;partialFunc2&#39;</span><span class="token punctuation">,</span> <span class="token function">partialDisplay2</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11-函数防抖" tabindex="-1"><a class="header-anchor" href="#_11-函数防抖" aria-hidden="true">#</a> 11.函数防抖</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span> 函数防抖
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> <span class="token parameter">func</span> -需要函数防抖的函数
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Number<span class="token punctuation">}</span></span> <span class="token parameter">time</span> -延迟时间
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Options<span class="token punctuation">}</span></span> <span class="token parameter">options</span> -配置项
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> -经过防抖处理的函数
 **/</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@typedef</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> <span class="token class-name">Options</span> -配置项
 * <span class="token keyword">@property</span> <span class="token class-name"><span class="token punctuation">{</span>Boolean<span class="token punctuation">}</span></span> <span class="token parameter">leading</span> -开始是否需要额外触发一次
 * <span class="token keyword">@property</span> <span class="token class-name"><span class="token punctuation">{</span>Boolean<span class="token punctuation">}</span></span> <span class="token parameter">trailing</span> -结束后是否需要额外触发一次
 * <span class="token keyword">@property</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">}</span></span> <span class="token parameter">context</span> -上下文
 **/</span>

<span class="token keyword">const</span> debounce <span class="token operator">=</span> <span class="token punctuation">(</span>
  func<span class="token punctuation">,</span>
  time <span class="token operator">=</span> <span class="token number">17</span><span class="token punctuation">,</span>
  options <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// leading 和 trailing 无法同时为 false</span>
    <span class="token literal-property property">leading</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">trailing</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">context</span><span class="token operator">:</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> timer
  <span class="token keyword">const</span> <span class="token function-variable function">_debounce</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>timer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>leading <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>timer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> time<span class="token punctuation">)</span>
      <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>context<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>trailing<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>context<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
        timer <span class="token operator">=</span> <span class="token keyword">null</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> time<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token doc-comment comment">/**
   * <span class="token keyword">@description</span> 取消函数
   * <span class="token keyword">@see</span> https://juejin.im/post/5931561fa22b9d0058c5b87d
   **/</span>
  _debounce<span class="token punctuation">.</span><span class="token function-variable function">cancel</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span>
    timer <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> _debounce
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_12-优雅的处理-async-await" tabindex="-1"><a class="header-anchor" href="#_12-优雅的处理-async-await" aria-hidden="true">#</a> 12.优雅的处理 async/await</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// async/await 优雅处理方式</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">errorCaptured</span><span class="token punctuation">(</span><span class="token parameter">asyncFunc</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">asyncFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token keyword">null</span><span class="token punctuation">,</span> res<span class="token punctuation">]</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>e<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> <span class="token function-variable function">asyncFunc</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0.5</span> <span class="token operator">?</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;success&#39;</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> <span class="token punctuation">[</span>err<span class="token punctuation">,</span> res<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">errorCaptured</span><span class="token punctuation">(</span>asyncFunc<span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;res&#39;</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;err&#39;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_13-手写-前端状态管理器" tabindex="-1"><a class="header-anchor" href="#_13-手写-前端状态管理器" aria-hidden="true">#</a> 13.手写 前端状态管理器</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">PubSub</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//收集事件</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>events <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">//发布</span>
  <span class="token function">publish</span><span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> self <span class="token operator">=</span> <span class="token keyword">this</span>
    <span class="token comment">/*
     * 校验是否存在事件
     * 默认返回一个空数组
     */</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>self<span class="token punctuation">.</span>events<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 遍历执行事件队列里的回调函数</span>
    <span class="token keyword">return</span> self<span class="token punctuation">.</span>events<span class="token punctuation">[</span>event<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">callback</span> <span class="token operator">=&gt;</span> <span class="token function">callback</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 订阅</span>
  <span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> self <span class="token operator">=</span> <span class="token keyword">this</span>

    <span class="token comment">/*
     * 校验是否存在事件
     * 默认给一个空数组
     */</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>self<span class="token punctuation">.</span>events<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      self<span class="token punctuation">.</span>events<span class="token punctuation">[</span>event<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 将事件推入回调队列</span>
    <span class="token keyword">return</span> self<span class="token punctuation">.</span>events<span class="token punctuation">[</span>event<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>callback<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Store</span> <span class="token punctuation">{</span>
  <span class="token comment">// 传入params对象</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> self <span class="token operator">=</span> <span class="token keyword">this</span>
    <span class="token comment">// 实例化发布订阅</span>
    self<span class="token punctuation">.</span>events <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PubSub</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    self<span class="token punctuation">.</span>actions <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// 异步任务对象</span>
    self<span class="token punctuation">.</span>mutations <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// 同步任务对象</span>
    self<span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// 全局状态对象</span>
    self<span class="token punctuation">.</span>plugins <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// 插件</span>
    self<span class="token punctuation">.</span>status <span class="token operator">=</span> <span class="token string">&#39;resting&#39;</span> <span class="token comment">// 初始状态</span>

    <span class="token comment">/*
     * 初始化设置actions对象
     * 该对象主要处理异步事件
     */</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>params<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span><span class="token string">&#39;actions&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      self<span class="token punctuation">.</span>actions <span class="token operator">=</span> params<span class="token punctuation">.</span>actions
    <span class="token punctuation">}</span>

    <span class="token comment">/*
     * 初始化设置mutations对象
     * 该对象主要处理同步事件
     */</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>params<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span><span class="token string">&#39;mutations&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      self<span class="token punctuation">.</span>mutations <span class="token operator">=</span> params<span class="token punctuation">.</span>mutations
    <span class="token punctuation">}</span>

    <span class="token comment">// 插件</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>params<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span><span class="token string">&#39;plugins&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      self<span class="token punctuation">.</span>plugins <span class="token operator">=</span> params<span class="token punctuation">.</span>plugins
    <span class="token punctuation">}</span>

    <span class="token comment">/*
     * 代理监听state
     */</span>
    self<span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>params<span class="token punctuation">.</span>state <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token function">set</span><span class="token punctuation">(</span>state<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 代理设置state对象并赋值</span>
        state<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> value

        <span class="token comment">// 添加发布事件</span>
        self<span class="token punctuation">.</span>events<span class="token punctuation">.</span><span class="token function">publish</span><span class="token punctuation">(</span><span class="token string">&#39;stateChange&#39;</span><span class="token punctuation">,</span> self<span class="token punctuation">.</span>state<span class="token punctuation">)</span>
        <span class="token comment">// 更改状态</span>
        self<span class="token punctuation">.</span>status <span class="token operator">=</span> <span class="token string">&#39;resting&#39;</span>

        <span class="token keyword">return</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function-variable function">commit</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">mutationKey<span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> self <span class="token operator">=</span> <span class="token keyword">this</span>
    <span class="token comment">// 校验是否存在函数</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> self<span class="token punctuation">.</span>mutations<span class="token punctuation">[</span>mutationKey<span class="token punctuation">]</span> <span class="token operator">!==</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Mutation </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>mutationKey<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> dose not exist</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 变更状态</span>
    self<span class="token punctuation">.</span>status <span class="token operator">=</span> <span class="token string">&#39;mutation&#39;</span>
    <span class="token keyword">let</span> newState <span class="token operator">=</span> self<span class="token punctuation">.</span>mutations<span class="token punctuation">[</span>mutationKey<span class="token punctuation">]</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>state<span class="token punctuation">,</span> payload<span class="token punctuation">)</span>
    self<span class="token punctuation">.</span>state <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>state<span class="token punctuation">,</span> newState<span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
  <span class="token function-variable function">dispatch</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">actionKey<span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> self <span class="token operator">=</span> <span class="token keyword">this</span>

    <span class="token comment">// 校验是否存在函数</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> self<span class="token punctuation">.</span>actions<span class="token punctuation">[</span>actionKey<span class="token punctuation">]</span> <span class="token operator">!==</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Action </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>actionKey<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> dose not exist</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 变更状态</span>
    self<span class="token punctuation">.</span>status <span class="token operator">=</span> <span class="token string">&#39;action&#39;</span>

    <span class="token comment">// 执行对应函数，并传入commit</span>
    self<span class="token punctuation">.</span>actions<span class="token punctuation">[</span>actionKey<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">commit</span><span class="token operator">:</span> self<span class="token punctuation">.</span>commit <span class="token punctuation">}</span><span class="token punctuation">,</span> payload<span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 实例场景</span>
<span class="token keyword">const</span> MyStore <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">init</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>text <span class="token operator">=</span> payload
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">init</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> commit <span class="token punctuation">}</span><span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;init&#39;</span><span class="token punctuation">,</span> payload<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;plugins&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 执行同步事件</span>
MyStore<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;init&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;hello init&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 执行异步事件</span>
MyStore<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&#39;init&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;hello async init&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","js方法手动实现.html.vue"]]);export{k as default};
