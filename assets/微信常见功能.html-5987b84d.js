import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-6267275e.js";const p={},e=t(`<h1 id="_1-重定向落地页获取-code" tabindex="-1"><a class="header-anchor" href="#_1-重定向落地页获取-code" aria-hidden="true">#</a> 1.重定向落地页获取 code</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> querystring <span class="token keyword">from</span> <span class="token string">&#39;querystring&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">methods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 查询协议+域名</span>
		<span class="token function">getRedirectUri</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">let</span> href <span class="token operator">=</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href
			<span class="token keyword">let</span> search <span class="token operator">=</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>search
			<span class="token keyword">return</span> href<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>search<span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
    <span class="token function">redirectWx</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      	<span class="token keyword">const</span> redirect_uri <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getRedirectUri</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">appid</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token comment">//微信公众号id</span>
          <span class="token comment">// redirect_uri: encodeURIComponent(redirect_uri),</span>
          <span class="token literal-property property">redirect_uri</span><span class="token operator">:</span> redirect_uri<span class="token punctuation">,</span>
          <span class="token literal-property property">response_type</span><span class="token operator">:</span> <span class="token string">&#39;code&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">scope</span><span class="token operator">:</span> <span class="token string">&#39;snsapi_userinfo&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">state</span><span class="token operator">:</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token comment">//自定义参数</span>
          <span class="token literal-property property">forcePopup</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token literal-property property">forceSnapShot</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
        params <span class="token operator">=</span> querystring<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>redirectWxUrl <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>wxUrl<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">?</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>params<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">#wechat_redirect</span><span class="token template-punctuation string">\`</span></span>
        window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>redirectWxUrl
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    	<span class="token comment">// 监听浏览器刷新</span>
		<span class="token function">addEvents</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">let</span> eventName <span class="token operator">=</span> <span class="token string">&#39;beforeunload&#39;</span>
			<span class="token keyword">const</span> <span class="token punctuation">{</span> gecko<span class="token punctuation">,</span> iPhone<span class="token punctuation">,</span> iPad <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getBrowserVersion</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>gecko<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				eventName <span class="token operator">=</span> <span class="token string">&#39;unload&#39;</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>iPhone <span class="token operator">&amp;&amp;</span> iPad<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				eventName <span class="token operator">=</span> <span class="token string">&#39;pagehide&#39;</span>
			<span class="token punctuation">}</span>
			window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>eventName<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
				<span class="token keyword">const</span> state <span class="token operator">=</span> unit<span class="token punctuation">.</span><span class="token function">getUrlParam</span><span class="token punctuation">(</span><span class="token string">&#39;state&#39;</span><span class="token punctuation">)</span>
				<span class="token keyword">const</span> pay <span class="token operator">=</span> unit<span class="token punctuation">.</span><span class="token function">getUrlParam</span><span class="token punctuation">(</span><span class="token string">&#39;pay&#39;</span><span class="token punctuation">)</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>state <span class="token operator">&amp;&amp;</span> pay <span class="token operator">===</span> <span class="token string">&#39;sucess&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">closePage</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token comment">// 打开微信公众号主页</span>
		<span class="token function">openOfficialAccount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>wxParams<span class="token punctuation">.</span>appid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">this</span><span class="token punctuation">.</span>$msg<span class="token punctuation">.</span><span class="token function">fail</span><span class="token punctuation">(</span><span class="token string">&#39;非微信公众号环境不能使用该功能&#39;</span><span class="token punctuation">)</span>
				<span class="token keyword">return</span> <span class="token boolean">false</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>redirectHomeUrl<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">this</span><span class="token punctuation">.</span>$msg<span class="token punctuation">.</span><span class="token function">fail</span><span class="token punctuation">(</span><span class="token string">&#39;系统异常,请联系管理员&#39;</span><span class="token punctuation">)</span>
				<span class="token keyword">return</span> <span class="token boolean">false</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">redirectUrl</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>redirectHomeUrl<span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 重定向url</span>
		<span class="token function">redirectUrl</span><span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>history <span class="token operator">&amp;&amp;</span> window<span class="token punctuation">.</span>history<span class="token punctuation">.</span>replaceState<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				window<span class="token punctuation">.</span>history<span class="token punctuation">.</span><span class="token function">replaceState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> document<span class="token punctuation">.</span>title<span class="token punctuation">,</span> url<span class="token punctuation">)</span>
				window<span class="token punctuation">.</span>history<span class="token punctuation">.</span><span class="token function">go</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				window<span class="token punctuation">.</span>location<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token comment">// 关闭当前页面</span>
		<span class="token function">closePage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> <span class="token punctuation">{</span> weixin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getBrowserVersion</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>weixin <span class="token operator">&amp;&amp;</span> window<span class="token punctuation">.</span>WeixinJSBridge<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">return</span> window<span class="token punctuation">.</span><span class="token function">WeixinJSBridge</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">&#39;closeWindow&#39;</span><span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
			window<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token comment">// 浏览器版本</span>
		<span class="token function">getBrowserVersion</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> u <span class="token operator">=</span> window<span class="token punctuation">.</span>navigator<span class="token punctuation">.</span>userAgent
			<span class="token keyword">return</span> <span class="token punctuation">{</span>
				<span class="token literal-property property">trident</span><span class="token operator">:</span> u<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;Trident&#39;</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">//IE内核</span>
				<span class="token literal-property property">presto</span><span class="token operator">:</span> u<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;Presto&#39;</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">//opera内核</span>
				<span class="token literal-property property">webKit</span><span class="token operator">:</span> u<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;AppleWebKit&#39;</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">//苹果、谷歌内核</span>
				<span class="token literal-property property">gecko</span><span class="token operator">:</span>
					<span class="token punctuation">(</span>u<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;Gecko&#39;</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">&amp;&amp;</span> u<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;KHTML&#39;</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">||</span>
					u<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;Firefox&#39;</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">//火狐内核</span>
				<span class="token literal-property property">mobile</span><span class="token operator">:</span> <span class="token operator">!</span><span class="token operator">!</span>u<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">AppleWebKit.*Mobile.*</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">//是否为移动终端</span>
				<span class="token literal-property property">ios</span><span class="token operator">:</span> <span class="token operator">!</span><span class="token operator">!</span>u<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\(i[^;]+;( U;)? CPU.+Mac OS X</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">//ios终端</span>
				<span class="token literal-property property">android</span><span class="token operator">:</span> u<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;Android&#39;</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">||</span> u<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;Adr&#39;</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">//android终端</span>
				<span class="token literal-property property">iPhone</span><span class="token operator">:</span> u<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;iPhone&#39;</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">//是否为iPhone或者QQHD浏览器</span>
				<span class="token literal-property property">iPad</span><span class="token operator">:</span> u<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;iPad&#39;</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">//是否iPad</span>
				<span class="token literal-property property">webApp</span><span class="token operator">:</span> u<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;Safari&#39;</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">//是否web应该程序，没有头部与底部</span>
				<span class="token literal-property property">weixin</span><span class="token operator">:</span> u<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;MicroMessenger&#39;</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">//是否微信 （2015-01-22新增）</span>
				<span class="token literal-property property">qq</span><span class="token operator">:</span> u<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\sQQ</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&#39; qq&#39;</span> <span class="token comment">//是否QQ</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 初始化页面参数</span>
		<span class="token function">setUrlParams</span><span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>location<span class="token punctuation">)</span>
			<span class="token keyword">const</span> searchParams <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URLSearchParams</span><span class="token punctuation">(</span>url<span class="token punctuation">.</span>search<span class="token punctuation">)</span>
			searchParams<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
			url<span class="token punctuation">.</span>search <span class="token operator">=</span> searchParams<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			window<span class="token punctuation">.</span>history<span class="token punctuation">.</span><span class="token function">replaceState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> url<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","微信常见功能.html.vue"]]);export{k as default};
