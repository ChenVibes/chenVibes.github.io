import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as p}from"./app-92903be0.js";const t={},e=p(`<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span>
  <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://res.wx.qq.com/open/js/jweixin-1.1.0.js<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> wxurl <span class="token operator">=</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href
<span class="token comment">//console.log(wxurl)</span>
$<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;https://lwmwx.qdingnet.com/mis-qrcode/ajax/JSSDK/get&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;GET&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">dateType</span><span class="token operator">:</span> <span class="token string">&#39;JSON&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">url</span><span class="token operator">:</span> wxurl <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">async</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
    <span class="token keyword">var</span> appId <span class="token operator">=</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>appid
    <span class="token keyword">var</span> timestamp <span class="token operator">=</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>timestamp
    <span class="token keyword">var</span> nonceStr <span class="token operator">=</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>noncestr
    <span class="token keyword">var</span> signature <span class="token operator">=</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>signature
    wx<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">debug</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">appId</span><span class="token operator">:</span> appId<span class="token punctuation">,</span>
      <span class="token literal-property property">timestamp</span><span class="token operator">:</span> timestamp<span class="token punctuation">,</span>
      <span class="token literal-property property">nonceStr</span><span class="token operator">:</span> nonceStr<span class="token punctuation">,</span>
      <span class="token literal-property property">signature</span><span class="token operator">:</span> signature<span class="token punctuation">,</span>
      <span class="token literal-property property">jsApiList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;onMenuShareTimeline&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;onMenuShareAppMessage&#39;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">//微信JSSDK开发</span>
    wx<span class="token punctuation">.</span><span class="token function">ready</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 分享给朋友</span>
      wx<span class="token punctuation">.</span><span class="token function">onMenuShareAppMessage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;让我们一起千丁吧&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 分享标题</span>
        <span class="token literal-property property">desc</span><span class="token operator">:</span> <span class="token string">&#39;“您的老朋友”邀请您一起参与智慧社区转型升级，一起开启智慧转型之路！预约专业解析，评估物业公司现状，了解更多成功转型的物业公司案例。&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// 分享描述</span>
        <span class="token literal-property property">link</span><span class="token operator">:</span> wxurl<span class="token punctuation">,</span> <span class="token comment">// 分享链接</span>
        <span class="token literal-property property">imgUrl</span><span class="token operator">:</span> <span class="token string">&#39;https://lwmwx.qdingnet.com/mis-qdym/images/fx.png&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 分享的图标</span>
        <span class="token function-variable function">fail</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 分享到朋友圈</span>
      wx<span class="token punctuation">.</span><span class="token function">onMenuShareTimeline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;让我们一起千丁吧&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 分享标题</span>
        <span class="token literal-property property">desc</span><span class="token operator">:</span> <span class="token string">&#39;“您的老朋友”邀请您一起参与智慧社区转型升级，一起开启智慧转型之路！预约专业解析，评估物业公司现状，了解更多成功转型的物业公司案例。&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 分享描述</span>
        <span class="token literal-property property">link</span><span class="token operator">:</span> wxurl<span class="token punctuation">,</span> <span class="token comment">// 分享链接</span>
        <span class="token literal-property property">imgUrl</span><span class="token operator">:</span> <span class="token string">&#39;https://lwmwx.qdingnet.com/mis-qdym/images/fx.png&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 分享的图标</span>
        <span class="token function-variable function">fail</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","H5微信分享.html.vue"]]);export{k as default};
