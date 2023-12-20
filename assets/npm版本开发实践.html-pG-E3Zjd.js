import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as e,e as s}from"./app-l76D7KiL.js";const i={},l=s(`<h3 id="_1-开发阶段-beta" tabindex="-1"><a class="header-anchor" href="#_1-开发阶段-beta" aria-hidden="true">#</a> 1. 开发阶段 beta</h3><ul><li>更改发布第一个 beta 测试版本： 如下</li></ul><figure><img src="https://pic4.zhimg.com/80/v2-bd3d93e723ebf4f823b1f232abab5c77_720w.webp" alt="更改发布第一个 beta 测试版本" tabindex="0" loading="lazy"><figcaption>更改发布第一个 beta 测试版本</figcaption></figure><ul><li>更改发布第二个 beta 测试版本： 如下</li></ul><figure><img src="https://pic4.zhimg.com/80/v2-85e22b693c0e16347bd62faddea6ee1f_720w.webp" alt="更改发布第二个 beta 测试版本" tabindex="0" loading="lazy"><figcaption>更改发布第二个 beta 测试版本</figcaption></figure><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> version prerelease <span class="token parameter variable">--preid</span><span class="token operator">=</span>beta

packjsion version <span class="token number">1.0</span>.0-beta.1

<span class="token function">npm</span> publish <span class="token parameter variable">--tag</span><span class="token operator">=</span>beta
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>修复阶段 patch</li></ul><p>发布稳定版本 1.0.0 如下</p><figure><img src="https://pic4.zhimg.com/80/v2-9e33f807d3f786a2948006a75fb6bf27_720w.webp" alt="发布稳定版本 1.0.0" tabindex="0" loading="lazy"><figcaption>发布稳定版本 1.0.0</figcaption></figure><ul><li>修复 bug 发布</li></ul><figure><img src="https://pic2.zhimg.com/80/v2-9bf8ef6b1e31a94799afce778e709265_720w.webp" alt="修复 bug 发布" tabindex="0" loading="lazy"><figcaption>修复 bug 发布</figcaption></figure><p>小版本 minor（bug 修复完成 发布小版本） <img src="https://pic3.zhimg.com/80/v2-c8b414d06d48e957941ac4556b21fdba_720w.webp" alt="bug 修复完成 发布小版本" loading="lazy"></p><ul><li>小版本迭代开发 beta</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 1.2.0-beta.0</span>

<span class="token function">npm</span> version prerelease <span class="token parameter variable">--preid</span><span class="token operator">=</span>beta
package.json version <span class="token number">1.2</span>.0-beta.0

<span class="token function">npm</span> publish <span class="token parameter variable">--tag</span><span class="token operator">=</span>beta

<span class="token comment"># 1.2.0-beta.1</span>

<span class="token function">npm</span> version prerelease <span class="token parameter variable">--preid</span><span class="token operator">=</span>beta
package.json version <span class="token number">1.2</span>.0-beta.1

<span class="token function">npm</span> publish <span class="token parameter variable">--tag</span><span class="token operator">=</span>beta

<span class="token comment"># 发布修复 patch</span>

<span class="token function">npm</span> version patch
<span class="token comment"># 1.2.0 ...</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>完成下一个大版本迭代</li></ul><p>大版本 major <img src="https://pic2.zhimg.com/80/v2-4bdaa4135e1dbdeb01d62d5d43578575_720w.webp" alt="完成下一个大版本迭代" loading="lazy"></p><h3 id="_2-撤销发布" tabindex="-1"><a class="header-anchor" href="#_2-撤销发布" aria-hidden="true">#</a> 2. 撤销发布</h3><ul><li><p>废弃</p><blockquote><p>此包内容已经过时，没有了维护的价值 <code>npm deprecate &lt;pkg&gt;[@&lt;version&gt;] &lt;message&gt;</code></p></blockquote></li><li><p>删除</p></li></ul><p>npm 不鼓励任何形式的删除，主要因为我们发布的包可能已经被其他人引用，如果我们删除了此包，其他人在重新安装含有我们包的依赖的工程时，出现找不到包问题。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>npx force-unpublish pkg <span class="token operator">&lt;</span>message<span class="token operator">&gt;</span>
<span class="token comment"># 查看 versions</span>

<span class="token function">npm</span> view pkg
<span class="token comment"># --- latest</span>

<span class="token function">npm</span> view pkg versions

<span class="token comment"># --- list</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),t=[l];function p(c,r){return a(),e("div",null,t)}const b=n(i,[["render",p],["__file","npm版本开发实践.html.vue"]]);export{b as default};
