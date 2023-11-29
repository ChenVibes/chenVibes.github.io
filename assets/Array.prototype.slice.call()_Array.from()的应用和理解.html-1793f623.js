import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as e,c as o,b as n,d as c,a as l,e as a}from"./app-6987be88.js";const r={},i=a(`<p>Array.prototype.slice.call() 可将类数组(arguments,NodeList)，字符串(String)转换成数组。</p><p>Array.from() 可将类数组(arguments,NodeList)，可迭代对象(Set,Map)，字符串(String)转换成数组。</p><h2 id="array-prototype-slice-call-的常用示例" tabindex="-1"><a class="header-anchor" href="#array-prototype-slice-call-的常用示例" aria-hidden="true">#</a> Array.prototype.slice.call() 的常用示例</h2><p>Array.prototype.slice.call(arrayLike, start, end) 将类数组 arrayLike 转换为数组，并且从下标 start 开始到下标为 end 截取数组。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">makeArray</span> <span class="token punctuation">(</span><span class="token parameter">arrayLike</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arrayLike<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> args <span class="token operator">=</span> <span class="token function">makeArray</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 使用args</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述示例中，将 slice()方法执行时的 this 值设置为类数组对象(arguments)，而 slice()对象只需是数值型索引和 length 属性就能够正常运行，即任何类数组对象(arguments)都能被转换为数组, 例如下面对象就可转换为数组：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">0</span><span class="token operator">:</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token operator">:</span> <span class="token string">&#39;world&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">length</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// [&quot;hello&quot;, &quot;world&quot;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>而没有 length 属性的对象则不能</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">0</span><span class="token operator">:</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token operator">:</span> <span class="token string">&#39;world&#39;</span> <span class="token punctuation">}</span> <span class="token comment">// 没有length属性</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// []</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="array-from-的常用示例" tabindex="-1"><a class="header-anchor" href="#array-from-的常用示例" aria-hidden="true">#</a> Array.from() 的常用示例</h2>`,10),u={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from",target:"_blank",rel:"noopener noreferrer"},k=a(`<p>Array.from(arrayLike, mapFn, thisArg) --&gt; Array.from(arrayLike).map(fn(), thisArg)</p><h3 id="示例-1——将类数组转化为数组" tabindex="-1"><a class="header-anchor" href="#示例-1——将类数组转化为数组" aria-hidden="true">#</a> 示例 1——将类数组转化为数组</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">doSomething</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> args <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 使用args</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此方法为 ECMAScript6 新方法，更简洁清晰的将类数组对象转化为数组。</p><p>Array.from()方法调用会基于 arguments 对象中的元素创建一个新的数组，args 是 Array 的一个实例，包含 arguments 对象中同位置的相同值。</p><h3 id="示例-2——将-set-集合转化为数组" tabindex="-1"><a class="header-anchor" href="#示例-2——将-set-集合转化为数组" aria-hidden="true">#</a> 示例 2——将 Set 集合转化为数组</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>set<span class="token punctuation">)</span> <span class="token comment">// [1,2,3,4,5,6,7,8,9]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="示例-3——将-map-集合转化为数组" tabindex="-1"><a class="header-anchor" href="#示例-3——将-map-集合转化为数组" aria-hidden="true">#</a> 示例 3——将 map 集合转化为数组</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> myMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myMap<span class="token punctuation">)</span> <span class="token comment">// Map(1) {true =&gt; 7}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>myMap<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// [[true,7]]</span>
<span class="token comment">// 如需变为一维数组可</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>myMap<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">flat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// [true ,7]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">版权声明</p><p>作者：黑桃 z18889 链接：https://juejin.cn/post/6844904106159505421 来源：稀土掘金 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。</p></div>`,10);function d(m,v){const s=p("ExternalLinkIcon");return e(),o("div",null,[i,n("p",null,[n("a",u,[c("Array.from()"),l(s)])]),k])}const g=t(r,[["render",d],["__file","Array.prototype.slice.call()_Array.from()的应用和理解.html.vue"]]);export{g as default};
