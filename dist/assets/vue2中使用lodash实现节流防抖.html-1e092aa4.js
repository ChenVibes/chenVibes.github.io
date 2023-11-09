import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,e}from"./app-4bddcd1f.js";const t={},p=e(`<h2 id="说说节流和防抖" tabindex="-1"><a class="header-anchor" href="#说说节流和防抖" aria-hidden="true">#</a> 说说节流和防抖</h2><p>这两个概念在前端开发中是老生常谈，对于我来说这两个概念记了又忘，忘了又看。过的时间又忘记。写业务需要优化一些功能，这两个概念又被提了出来，这次就好好梳理一下</p><h3 id="解释" tabindex="-1"><a class="header-anchor" href="#解释" aria-hidden="true">#</a> 解释</h3><div class="hint-container tip"><p class="hint-container-title">打个比方</p><p>防抖就类似回城，打断就得重新回。</p><p>节流就类似技能需要冷却时间到了才能用。</p></div><ul><li><p>防抖:在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。</p></li><li><p>节流:规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效。</p></li><li><p>函数防抖和函数节流都是防止某一时间频繁触发，但是这两兄弟之间的原理却不一样。节流防抖就好比乘电梯，比如delay是10秒，防抖就是电梯每进来一个人就要等10秒再运行，而节流就是电梯保证每10秒可以运行一次</p></li></ul><h3 id="结合应用场景" tabindex="-1"><a class="header-anchor" href="#结合应用场景" aria-hidden="true">#</a> 结合应用场景</h3><ul><li>防抖 <ul><li>search搜索联想，用户在不断输入值时，用防抖来节约请求资源</li><li>window触发resize的时候，不断的调整浏览器窗口大小会不断的触发这个事件，用防抖来让其只触发一次</li></ul></li><li>节流 <ul><li>鼠标不断点击触发，mousedown(单位时间内只触发一次)</li><li>监听滚动事件，比如是否滑到底部自动加载更多，用throttle来判断</li></ul></li></ul><h2 id="造个轮子" tabindex="-1"><a class="header-anchor" href="#造个轮子" aria-hidden="true">#</a> 造个轮子</h2><p>// TODO 手写防抖 节流</p><h2 id="使用lodash" tabindex="-1"><a class="header-anchor" href="#使用lodash" aria-hidden="true">#</a> 使用lodash</h2><p>造什么轮子？lodash写的不好？</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 防抖 a,b是调用xxxxx方法的参数</span>
   <span class="token literal-property property">xxxxx</span><span class="token operator">:</span>_<span class="token punctuation">.</span><span class="token function">debounce</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// ... 你的逻辑</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
     <span class="token comment">// 节流 </span>
    <span class="token literal-property property">xxxxxxx</span><span class="token operator">:</span>_<span class="token punctuation">.</span><span class="token function">throttle</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">//... 你的逻辑</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如下图，我们不断输入，在停止输入2秒后，向页面上显示的数组推入一则消息。</p><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/防抖演示.gif" alt="防抖演示" tabindex="0"><figcaption>防抖演示</figcaption></figure><p>而节流是在开始输入时触发1次，然后每隔2s触发一次事件，这中间的输入不会触发事件。</p><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/节流演示.gif" alt="节流演示" tabindex="0"><figcaption>节流演示</figcaption></figure>`,16),i=[p];function o(c,l){return a(),s("div",null,i)}const d=n(t,[["render",o],["__file","vue2中使用lodash实现节流防抖.html.vue"]]);export{d as default};
