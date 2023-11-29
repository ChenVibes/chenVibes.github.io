import{_ as c}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as i,c as l,b as n,d as a,a as o,e as s}from"./app-75b90f47.js";const d={},p=s(`<h2 id="node-js-介绍" tabindex="-1"><a class="header-anchor" href="#node-js-介绍" aria-hidden="true">#</a> node.js 介绍</h2><p>一个基于 <code>Chrome v8</code> 引擎的 <code>Javascript</code> 运行时(代码的运行环境)环境</p><h3 id="chrome-v8-引擎" tabindex="-1"><a class="header-anchor" href="#chrome-v8-引擎" aria-hidden="true">#</a> chrome v8 引擎</h3><ul><li><code>chrome </code>是一个浏览器，它可以执行 <code>js</code> 代码</li><li><code>V8</code> 就是 <code>chrome</code> 的 <code>js </code>引擎，以速度著称</li><li><code>nodejs</code> 也是基于 <code>js</code> 语法的，因此也可以借用 <code>∨8</code> 引擎</li></ul><h2 id="nvm" tabindex="-1"><a class="header-anchor" href="#nvm" aria-hidden="true">#</a> nvm</h2><p><code>nvm</code> 是 <code>node.js</code> 的版本管理工具</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>当在 <code>arm</code>架构下的 <code>macos</code> 上，通过 <code>nvm</code> 安装 <code>v16</code> 以下版本 <code>node</code> 时,必须在 <code>Rosetta 2</code>的模式下打开终端，再执行安装命令</p></div><p>建议使用 <code>homebrew</code>，安装<code>nvm</code>:</p><p>第一步：<code>brew install nvm</code></p><p>第二步：<code>touch .zshrc</code>,写入：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">NVM_DIR</span><span class="token operator">=</span><span class="token string">&quot;<span class="token environment constant">$HOME</span>/.nvm&quot;</span>
  <span class="token punctuation">[</span> <span class="token parameter variable">-s</span> <span class="token string">&quot;/opt/homebrew/opt/nvm/nvm.sh&quot;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">.</span> <span class="token string">&quot;/opt/homebrew/opt/nvm/nvm.sh&quot;</span>  <span class="token comment"># This loads nvm</span>
  <span class="token punctuation">[</span> <span class="token parameter variable">-s</span> <span class="token string">&quot;/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm&quot;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">.</span> <span class="token string">&quot;/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm&quot;</span>  <span class="token comment"># This loads nvm bash_completion</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">NVM_NODEJS_ORG_MIRROR</span><span class="token operator">=</span>https://npmmirror.com/mirrors/node/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第三步：<code>source .zshrc</code></p><p>接下来就可以使用 <code>nvm </code>指令安装 <code>node</code></p><p>常用命令:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nvm <span class="token function">install</span> xxx
nvm uninstall xxx
nvm <span class="token builtin class-name">alias</span> default xxx //设置新终端的默认node版本
nvm <span class="token function">ls</span>  // 列出已安装的版本
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装低版本-node" tabindex="-1"><a class="header-anchor" href="#安装低版本-node" aria-hidden="true">#</a> 安装低版本 node</h3>`,16),r={href:"https://blog.csdn.net/longgege001/article/details/114067242",target:"_blank",rel:"noopener noreferrer"},u=s(`<p>在 <code>Rosetta </code>的模式下打开终端，再执行<code>nvm</code>安装命令</p><h3 id="mac-无法安装-node-sass-的解决办法" tabindex="-1"><a class="header-anchor" href="#mac-无法安装-node-sass-的解决办法" aria-hidden="true">#</a> mac 无法安装 node-sass 的解决办法</h3><p>这个问题是当前 <code>node</code> 版本太高，而 <code>node-sass</code> 并不支持 <code>arm</code> 架构导致</p><ol><li>安装低版本 <code>node</code>（如 12.16.1)</li><li><code>npm</code> 配置文件写入,设置淘宝镜像</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">sass_binary_site</span><span class="token operator">=</span>https://npmmirror.com/mirrors/node-sass/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="npm" tabindex="-1"><a class="header-anchor" href="#npm" aria-hidden="true">#</a> npm</h2>`,6),m={class:"hint-container warning"},h=n("p",{class:"hint-container-title"},"注意",-1),v={href:"https://blog.csdn.net/u014607184/article/details/104395593",target:"_blank",rel:"noopener noreferrer"},k=s(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string-property property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;react&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^16.8.0&quot;</span>
    <span class="token string-property property">&quot;react&quot;</span><span class="token operator">:</span> <span class="token string">&quot;~16.8.0&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;react&quot;</span><span class="token operator">:</span> <span class="token string">&quot;16.8.0&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>三种方式的区分在于，项目通过 npm install 重新下载依赖包时，对于所下载的版本号的区别：</p><ul><li>^16.8.0’ 表示安装 16.x.x 的最新版本，安装时不改变大版本号。</li><li>‘~16.8.0’ 表示安装 16.8.x 的最新版本，安装时不改变大版本号和次要版本号。</li><li>‘16.8.0’ 表示安装指定的版本号，也就是安装 16.8.0 版本。</li></ul>`,3),b=s('<p><code>npm</code> 是 <code>node.js</code> 的软件包管理器</p><h3 id="npm-的常用命令" tabindex="-1"><a class="header-anchor" href="#npm-的常用命令" aria-hidden="true">#</a> npm 的常用命令</h3><ul><li>安装所有依赖：<code>npm install</code></li><li>查看全局的包：<code>npm list -g --depth 0</code></li><li>查看全局包的安装位置：<code>npm root -g</code></li><li>查看 bin 目录位置:<code>npm bin -g</code></li><li>安装全局的包：<code>npm installl -g</code></li><li>安装生产依赖：<code>npm intall module_name</code></li><li>安装开发依赖： <code>npm install module_name -D</code></li><li>移除依赖：<code>npm uninstall module_name</code>,全局加上<code>-g</code></li><li>设置淘宝镜像源：npm config set registry=https://registry.npmmirror.com</li></ul><h2 id="nrm" tabindex="-1"><a class="header-anchor" href="#nrm" aria-hidden="true">#</a> nrm</h2><p>nrm 是 npm 的源管理工具</p><p>安装：<code>npm install -g @adams549659584/nrm</code></p>',6),g={href:"https://www.douyin.com/user/MS4wLjABAAAAz0TXiTnI3HAmxDEfBrHItlViAwC6rsxJL6_GIHFA2Ho",target:"_blank",rel:"noopener noreferrer"},x=s(`<h3 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h3><ul><li>nrm ls:显示源列表</li><li>nrm test：测试延迟</li><li>nrm use xxxx:使用 xxxx 源</li></ul><h2 id="yarn" tabindex="-1"><a class="header-anchor" href="#yarn" aria-hidden="true">#</a> Yarn</h2><p><strong><code>Yarn</code> 也是 <code>node</code> 包管理工具</strong></p><p><code>React</code> 脚手架默认使用 <code>yarn</code></p><p>使用 <code>homebrew</code>安装：<code>brew install yarn</code></p><p>yarn 的镜像设置默认使用<code>.npmrc</code> 中的设置，无需单独配置</p><h3 id="yarn-的一些常用命令" tabindex="-1"><a class="header-anchor" href="#yarn-的一些常用命令" aria-hidden="true">#</a> Yarn 的一些常用命令</h3><div class="hint-container warning"><p class="hint-container-title">macOS:yarn 安装全局包后找不到命令的问题</p><p>将</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token string">&quot;<span class="token environment constant">$PATH</span>:<span class="token variable"><span class="token variable">\`</span><span class="token function">yarn</span> global bin<span class="token variable">\`</span></span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>添加到.zshrc 中</p></div><ul><li>安装所有依赖：<code>yarn</code></li><li>查看全局的包：<code>yarn global list</code></li><li>查看全局包的安装位置：<code>yarn global dir</code></li><li>查看 bin 目录位置:<code>yarn global bin</code></li><li>安装全局的包:<code>yarn global add &lt;packageName&gt;</code></li><li>安装生产依赖：<code>yarn add &lt;packageName&gt;</code></li><li>安装开发依赖： <code>yarn add &lt;packageName&gt; -D</code></li><li>移除依赖：<code>yarn &lt;global&gt; remove &lt;packageName&gt;</code></li></ul><h2 id="common-js-模块化" tabindex="-1"><a class="header-anchor" href="#common-js-模块化" aria-hidden="true">#</a> common.js 模块化</h2><h3 id="commonjs-语法介绍" tabindex="-1"><a class="header-anchor" href="#commonjs-语法介绍" aria-hidden="true">#</a> commonjs 语法介绍</h3><ul><li><code>module.exports</code> 导出</li><li><code>require</code>(…)导入</li><li>主要用于 <code>node.js</code> 开发</li></ul><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><h4 id="index-js" tabindex="-1"><a class="header-anchor" href="#index-js" aria-hidden="true">#</a> index.js</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> add<span class="token punctuation">,</span> message <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./tool&#39;</span><span class="token punctuation">)</span>

<span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token function">message</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// node index.js</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="tool-js" tabindex="-1"><a class="header-anchor" href="#tool-js" aria-hidden="true">#</a> tool.js</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">message</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;common.js&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  add<span class="token punctuation">,</span>
  message<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="commonjs-和-es6-module-的区别" tabindex="-1"><a class="header-anchor" href="#commonjs-和-es6-module-的区别" aria-hidden="true">#</a> commonjs 和 ES6 Module 的区别</h3><ul><li><code>commonJs</code> 是执行时引入 ，动态的,<strong>程序执行到 <code>require </code>才会引入</strong></li><li><code>ES6 Module </code>是打包时引入，静态的,<strong>代码执行之前就要把所有东西引入进来</strong></li></ul>`,20);function _(f,j){const e=t("ExternalLinkIcon");return i(),l("div",null,[p,n("p",null,[a("如何"),n("a",r,[a("安装低版本 node"),o(e)])]),u,n("div",m,[h,n("p",null,[n("a",v,[a("package.json 中的版本和 package-lock.json 的作用"),o(e)])]),k]),b,n("p",null,[a("Mac M1 芯片电脑可能无法正确获取当前正在使用的源使用此包可解决问题,解决方法来自抖音前端博主："),n("a",g,[a("后盾人"),o(e)]),a("，感谢！")]),x])}const w=c(d,[["render",_],["__file","node基础知识以及常用库.html.vue"]]);export{w as default};
