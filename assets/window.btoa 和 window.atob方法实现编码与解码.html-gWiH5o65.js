import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o as c,c as i,b as n,d as s,a as t,e as o}from"./app-l76D7KiL.js";const l={},u=o('<p>文章目录</p><ul><li>window.atob() 与 window.btoa()</li><li>Unicode 字符串</li><li>decodeURIComponent() 与 encodeURIComponent()</li><li>escape() 与 unescape() 方法</li></ul><h3 id="window-atob-与-window-btoa" tabindex="-1"><a class="header-anchor" href="#window-atob-与-window-btoa" aria-hidden="true">#</a> window.atob() 与 window.btoa()</h3><p><strong><code>WindowBase64.atob()</code></strong><code>函数用来解码一个已经被base-64编码过的数据。你可以使用 ``window.btoa()</code>  方法来编码一个可能在传输过程中出现问题的数据，并且在接受数据之后，使用  window.atob() 方法来将数据解码。例如：你可以把 ASCII 里面数值 0 到 31 的控制字符进行编码，传输和解码。</p><p>window.btoa()：将 ascii 字符串或二进制数据转换成一个 base64 编码过的字符串,该方法不能直接作用于 Unicode 字符串.</p><p><strong>语法：</strong></p><p>var decodedData = window.atob(encodedData);</p><p><strong>例子：</strong></p><p>var encodedData = window.btoa(&quot;Hello, world&quot;); // 编码 var decodedData = window.atob(encodedData); // 解码</p><p>其兼容性是主流浏览器，IE10 及以上。</p><h3 id="unicode-字符串" tabindex="-1"><a class="header-anchor" href="#unicode-字符串" aria-hidden="true">#</a> <strong>Unicode 字符串</strong></h3><p>在各浏览器中,使用  <code>window.btoa</code>  对 Unicode 字符串进行编码都会触发一个字符越界的异常.</p>',12),d={href:"http://ecmanaut.blogspot.com/2006/07/encoding-decoding-utf8-in-javascript.html",target:"_blank",rel:"noopener noreferrer"},r=o(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">utf8_to_b64</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> window<span class="token punctuation">.</span><span class="token function">btoa</span><span class="token punctuation">(</span><span class="token function">unescape</span><span class="token punctuation">(</span><span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">b64_to_utf8</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">decodeURIComponent</span><span class="token punctuation">(</span><span class="token function">escape</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span><span class="token function">atob</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token comment">// Usage:</span>
<span class="token function">utf8_to_b64</span><span class="token punctuation">(</span><span class="token string">&#39;? à la mode&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;4pyTIMOgIGxhIG1vZGU=&quot;</span>
<span class="token function">b64_to_utf8</span><span class="token punctuation">(</span><span class="token string">&#39;4pyTIMOgIGxhIG1vZGU=&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;? à la mode&quot; //译者注:在 js 引擎内部,encodeURIComponent(str)相当于 escape(unicodeToUTF8(str)) //所以可以推导出 unicodeToUTF8(str)等同于 unescape(encodeURIComponent(str))</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="decodeuricomponent-与-encodeuricomponent" tabindex="-1"><a class="header-anchor" href="#decodeuricomponent-与-encodeuricomponent" aria-hidden="true">#</a> decodeURIComponent() 与 encodeURIComponent()</h3><p>这里用到了<code>encodeURIComponent()与</code>decodeURIComponent()方法，下面简单介绍下：</p><p>decodeURIComponent() 函数可对 encodeURIComponent() 函数编码的 URI 进行解码。</p><p>下面给个例子：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">var</span> test1<span class="token operator">=</span><span class="token string">&quot;http://www.w3school.com.cn/My first/&quot;</span> document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>test1<span class="token punctuation">)</span>\\<span class="token operator">+</span> <span class="token string">&quot;&lt;br /&gt;&quot;</span><span class="token punctuation">)</span>
  document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token function">decodeURIComponent</span><span class="token punctuation">(</span>test1<span class="token punctuation">)</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出的结果：</p><p>http%3A%2F%2Fwww.w3school.com.cn%2FMy%20first%2F http://www.w3school.com.cn/My first/</p><p>下个例子， encodeURIComponent() 对 URI 进行编码：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token function">encodeURIComponent</span><span class="token punctuation">(</span><span class="token string">&#39;http://www.w3school.com.cn&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;br /&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token function">encodeURIComponent</span><span class="token punctuation">(</span><span class="token string">&#39;http://www.w3school.com.cn/p 1/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;br /&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token function">encodeURIComponent</span><span class="token punctuation">(</span><span class="token string">&#39;,/?:@&amp;=+$#&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果：</p><p>http%3A%2F%2Fwww.w3school.com.cn http%3A%2F%2Fwww.w3school.com.cn%2Fp%201%2F %2C%2F%3F%3A%40%26%3D%2B%24%23</p><p>关于<code>encodeURIComponent()与</code>decodeURIComponent()的参考地址：</p>`,13),k={href:"http://www.w3school.com.cn/jsref/jsref_decodeURIComponent.asp",target:"_blank",rel:"noopener noreferrer"},m={href:"http://www.w3school.com.cn/jsref/jsref_encodeURIComponent.asp",target:"_blank",rel:"noopener noreferrer"},w=n("h3",{id:"escape-与-unescape-方法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#escape-与-unescape-方法","aria-hidden":"true"},"#"),s(" ** escape() 与 unescape() 方法**")],-1),h=n("p",null,"escape() 函数可对字符串进行编码，这样就可以在所有的计算机上读取该字符串。",-1),b=n("p",null,"语法：escape(string)",-1),v=n("p",null,[s("返回值：已编码的  "),n("em",null,"string"),s("  的副本。其中某些字符被替换成了十六进制的转义序列。")],-1),_=n("p",null,[n("strong",null,"说明：该方法不会对 ASCII 字母和数字进行编码，也不会对下面这些 ASCII 标点符号进行编码： * @ - _ + . / 。其他所有的字符都会被转义序列替换。")],-1),g={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/WindowBase64/btoa",target:"_blank",rel:"noopener noreferrer"},f={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/WindowBase64/atob",target:"_blank",rel:"noopener noreferrer"},I={href:"http://www.w3school.com.cn/jsref/jsref_escape.asp",target:"_blank",rel:"noopener noreferrer"};function U(C,R){const a=p("ExternalLinkIcon");return c(),i("div",null,[u,n("p",null,[s("先把 Unicode 字符串转换为 UTF-8 编码,可以解决这个问题, 代码来自"),n("a",d,[s("Johan Sundstr?m"),t(a)]),s(":")]),r,n("p",null,[n("a",k,[s("JavaScript decodeURIComponent() 函数"),t(a)]),s("与"),n("a",m,[s("JavaScript encodeURIComponent() 函数"),t(a)])]),w,h,b,v,_,n("p",null,[s("参考地址："),n("a",g,[s("https://developer.mozilla.org/zh-CN/docs/Web/API/WindowBase64/btoa"),t(a)])]),n("p",null,[n("a",f,[s("https://developer.mozilla.org/zh-CN/docs/Web/API/WindowBase64/atob"),t(a)])]),n("p",null,[n("a",I,[s("http://www.w3school.com.cn/jsref/jsref_escape.asp"),t(a)])])])}const q=e(l,[["render",U],["__file","window.btoa 和 window.atob方法实现编码与解码.html.vue"]]);export{q as default};
