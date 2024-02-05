import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as s,e as t}from"./app-oBRTFPdZ.js";const e={},p=t(`<h3 id="_1-背景" tabindex="-1"><a class="header-anchor" href="#_1-背景" aria-hidden="true">#</a> 1.背景</h3><p>页面停留时间（Time on Page）简称 Tp，是网站分析中很常见的一个指标，用于反映用户在某些页面上停留时间的长短，传统的 Tp 统计方法会存在一定的统计盲区，比如无法监控单页应用，没有考虑用户切换 Tab、最小化窗口等操作场景。 基于上述背景，重新调研和实现了精确统计页面停留时长的方案，需要 兼容单页应用和多页应用，并且不耦合或入侵业务代码。</p><h3 id="_2-分析" tabindex="-1"><a class="header-anchor" href="#_2-分析" aria-hidden="true">#</a> 2.分析</h3><p>我们可以把一个页面生命周期抽象为三个动作： 「进入」、「活跃状态切换」、「离开」 <img src="https://mmbiz.qpic.cn/mmbiz_jpg/meG6Vo0MeviaOxMvmfIOy2EDrpfja4lb9yGgJzB3U8pKlweeKsthAXZl6vOg3YKgePbmw8oXSiaaVdJhS6icUibFRA/640?wx_fmt=jpeg&amp;tp=webp&amp;wxfrom=5&amp;wx_lazy=1" alt="image" loading="lazy"></p><p>如下图，计算页面停留时长既如何监控这三个动作，然后在对应触发的事件中记录时间戳，比如要统计活跃停留时长就把 active 区间相加即可，要统计总时长既 tn -t0 。</p><figure><img src="https://mmbiz.qpic.cn/mmbiz_jpg/meG6Vo0MeviaOxMvmfIOy2EDrpfja4lb90WyPgo2I7dX6pfggic4rSQdqn1WLNjmicPYq5ib65fdFS6lsoCDtrQhRQ/640?wx_fmt=jpeg&amp;tp=webp&amp;wxfrom=5&amp;wx_lazy=1" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h4 id="_2-1-如何监听页面的进入和离开" tabindex="-1"><a class="header-anchor" href="#_2-1-如何监听页面的进入和离开" aria-hidden="true">#</a> 2.1 如何监听页面的进入和离开？</h4><ul><li>对于常规页面的 首次加载、页面关闭、刷新 等操作都可以通过 window.onload 和 window.onbeforeunload 事件来监听页面进入和离开，浏览器前进后退可以通过 pageshow 和 pagehide 处理。 <ul><li>load / beforeunload</li><li>pageshow / pagehide</li></ul></li><li>对于单页应用内部的跳转可以转化为两个问题： <ul><li>监听路由变化</li><li>判断变化的 URL 是否为不同页面 。</li></ul></li></ul><h5 id="_2-1-1-监听路由变化" tabindex="-1"><a class="header-anchor" href="#_2-1-1-监听路由变化" aria-hidden="true">#</a> 2.1.1 监听路由变化</h5><p>目前主流的单页应用大部分都是基于 browserHistory (history api) 或者 hashHistory 来做路由处理，我们可以通过监听路由变化来判断页面是否有可能切换。注意是有可能切换，因为 URL 发生变化不代表页面一定切换，具体的路由配置是由业务决定的（既 URL 和页面的匹配规则）。</p><ul><li>browserHistory</li></ul><p>路由的变化本质都会调用 History.pushState() 或 History.replaceState() ，能监听到这两个事件就能知道。通过 popstate 事件能解决一半问题，因为 popstate 只会在浏览器前进后退的时候触发，当调用 history.pushState() or history.replaceState() 的时候并不会触发。</p><p>这里需要通过猴子补丁(Monkeypatch)解决，运行时重写 history.pushState 和 history.replaceState 方法：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token function-variable function">_wr</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> orig <span class="token operator">=</span> window<span class="token punctuation">.</span>history<span class="token punctuation">[</span>type<span class="token punctuation">]</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> rv <span class="token operator">=</span> <span class="token function">orig</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span>
    <span class="token keyword">let</span> e <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Event</span><span class="token punctuation">(</span>type<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    e<span class="token punctuation">.</span>arguments <span class="token operator">=</span> arguments
    window<span class="token punctuation">.</span><span class="token function">dispatchEvent</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
    <span class="token keyword">return</span> rv
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
window<span class="token punctuation">.</span>history<span class="token punctuation">.</span>pushState <span class="token operator">=</span> <span class="token function">_wr</span><span class="token punctuation">(</span><span class="token string">&#39;pushState&#39;</span><span class="token punctuation">)</span>
window<span class="token punctuation">.</span>history<span class="token punctuation">.</span>replaceState <span class="token operator">=</span> <span class="token function">_wr</span><span class="token punctuation">(</span><span class="token string">&#39;replaceState&#39;</span><span class="token punctuation">)</span>
window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;pushstate&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;replacestate&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
hashHistory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>hashHistory 的实现是基于 hash 的变化，hash 的变化可以通过 hashchange 来监听</p><h5 id="_2-1-2-判断-url-是否为不同页面" tabindex="-1"><a class="header-anchor" href="#_2-1-2-判断-url-是否为不同页面" aria-hidden="true">#</a> 2.1.2 判断 URL 是否为不同页面</h5><h6 id="方案-1-客户端定义" tabindex="-1"><a class="header-anchor" href="#方案-1-客户端定义" aria-hidden="true">#</a> 方案 1: 客户端定义</h6><p>通过业务方在初始化的时候配置页面规则，然后 JS 通过 URL 匹配不同的规则来区分不同的页面，这种方案在客户端数据上报的时候就已经明确了不同的页面，伪代码：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Tracer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/index&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/detail/:id&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/user&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">query</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">tab</span><span class="token operator">:</span> <span class="token string">&#39;profile&#39;</span><span class="token punctuation">}</span> <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="方案-2-数据分析平台定义" tabindex="-1"><a class="header-anchor" href="#方案-2-数据分析平台定义" aria-hidden="true">#</a> 方案 2: 数据分析平台定义</h6><p>假设我们最终上报后有一个数据分析平台来展现，我们可以在类似数据平台来配置页面规则，这样在客户端实现的代码逻辑就不需要区分页面，而是每次 URL 发生变化就将数据上报，最终通过数据平台配置的页面 URL 规则来求和、过滤数据等。</p><p>当数据展现平台不支持配置 URL 规则来区分页面的时候，可以采用方案 1；当有数据平台支持的时候采用方案 2 更合理；</p><h5 id="_2-1-3-对于页面进入和离开相关事件整理" tabindex="-1"><a class="header-anchor" href="#_2-1-3-对于页面进入和离开相关事件整理" aria-hidden="true">#</a> 2.1.3 对于页面进入和离开相关事件整理</h5><figure><img src="https://mmbiz.qpic.cn/mmbiz_jpg/meG6Vo0MeviaOxMvmfIOy2EDrpfja4lb9YXhvvRx97lBblrZbiaML6ykJV1cs3wdLRwGYRWcibTuIXkAibyzNR3RWA/640?wx_fmt=jpeg&amp;tp=webp&amp;wxfrom=5&amp;wx_lazy=1" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h4 id="_2-2-如何监听页面活跃状态切换" tabindex="-1"><a class="header-anchor" href="#_2-2-如何监听页面活跃状态切换" aria-hidden="true">#</a> 2.2 如何监听页面活跃状态切换？</h4><p>可以通过 Page Visibility API 以及在 window 上声明 onblur/onfocus 事件来处理。</p><h5 id="_2-2-1-page-visibility-api" tabindex="-1"><a class="header-anchor" href="#_2-2-1-page-visibility-api" aria-hidden="true">#</a> 2.2.1 Page Visibility API</h5><p>一个网页的可见状态可以通过 Page Visibility API 获取，比如当用户 切换浏览器 Tab、最小化窗口、电脑睡眠 的时候，系统 API 会派发一个当前页面可见状态变化的 visibilitychange 事件，然后在事件绑定函数中通过 document.hidden 或者 document.visibilityState 读取当前状态。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;visibilitychange&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>hidden<span class="token punctuation">,</span> document<span class="token punctuation">.</span>visibilityState<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-2-2-onblur-onfocus" tabindex="-1"><a class="header-anchor" href="#_2-2-2-onblur-onfocus" aria-hidden="true">#</a> 2.2.2 onblur/onfocus</h5><p>可以通过 Page Visibility API 以及在 window 上声明 onblur/onfocus 事件来处理。 对于 PC 端来说，除了监听上述相关事件外，还可以考虑监听鼠标行为，比如当一定时间内鼠标没有操作则认为用户处于非活跃状态。</p><h4 id="_2-3-什么时机上报数据" tabindex="-1"><a class="header-anchor" href="#_2-3-什么时机上报数据" aria-hidden="true">#</a> 2.3 什么时机上报数据？</h4><h5 id="_2-3-1-页面离开时上报" tabindex="-1"><a class="header-anchor" href="#_2-3-1-页面离开时上报" aria-hidden="true">#</a> 2.3.1 页面离开时上报</h5><p>对于页面刷新或者关闭窗口触发的操作可能会造成数据丢失</p><h5 id="_2-3-2-下次打开页面时上报" tabindex="-1"><a class="header-anchor" href="#_2-3-2-下次打开页面时上报" aria-hidden="true">#</a> 2.3.2 下次打开页面时上报</h5><p>会丢失历史访问记录中的最后一个页面数据</p><p>目前采用的方案 2，对于单页内部跳转是即时上报，对于单页/多页应用触发 window.onbeforeunload 事件的时候会把当前页面数据暂存在 localStorage 中，当用户下次进入页面的时候会把暂存数据上报。有个细节问题，如果用户下次打开页面是在第二天，对于统计当天的活跃时长会有一定的误差，所以在数据上报的同时会把该条数据的页面进入时间/离开时间带上。</p><h3 id="_3-兼容性" tabindex="-1"><a class="header-anchor" href="#_3-兼容性" aria-hidden="true">#</a> 3.兼容性</h3><p>Desktop <img src="https://mmbiz.qpic.cn/mmbiz_png/meG6Vo0MeviaOxMvmfIOy2EDrpfja4lb9ia8ibXuJpr5TQ3x7XgXzE4jl4HEibvN3J4AhIbicj6ibJIexvvhBe1HiaW0w/640?wx_fmt=png&amp;tp=webp&amp;wxfrom=5&amp;wx_lazy=1" alt="image" loading="lazy"></p><p>Mobile <img src="https://mmbiz.qpic.cn/mmbiz_png/meG6Vo0MeviaOxMvmfIOy2EDrpfja4lb982j3vdFhS7oicHuNiaheJwnIFgnAOtCtYYA0NMz1tRicGRjlRMGbiaANEA/640?wx_fmt=png&amp;tp=webp&amp;wxfrom=5&amp;wx_lazy=1" alt="image" loading="lazy"></p><h3 id="_4-思考" tabindex="-1"><a class="header-anchor" href="#_4-思考" aria-hidden="true">#</a> 4.思考</h3><p>对于页面停留时长的定义可能在不同场景会有差异，比如内部业务系统或者 OA 系统，产品可能更关心用户在页面的活跃时长；而对于资讯类型的产品，页面可见时长会更有价值。单一的数据对业务分析是有限的，所以在具体的代码实过程中我们会把停留时长分三个指标，这样能更好的帮助产品/运营分析。</p><p>active 页面活跃时长 visible 页面可见时长 //仅支持 Desktop duration 页面总停留时长</p>`,43),i=[p];function o(c,l){return n(),s("div",null,i)}const d=a(e,[["render",o],["__file","如何精确统计页面停留时长.html.vue"]]);export{d as default};
