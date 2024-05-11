import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o,c,b as n,d as s,a as p,e as l}from"./app-od6tKAwO.js";const i={},r=n("h1",{id:"vue-cli-3-x-自动部署项目至服务器",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vue-cli-3-x-自动部署项目至服务器","aria-hidden":"true"},"#"),s(" Vue-CLI 3.x 自动部署项目至服务器")],-1),u=n("h2",{id:"前言",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#前言","aria-hidden":"true"},"#"),s(" 前言")],-1),d=n("p",null,"平时部署前端项目流程是：先部署到测试环境 ok 后再发布到生产环境上，部署到测试环境用 xshell 连上服务器，然后用 xftp 连接服务器，然后本地 build 项目，接着把 build 好的文件通过 xftp 上传到服务器上，整个流程感觉稍有繁琐，重复。",-1),k={href:"https://link.juejin.im?target=https%3A%2F%2Fgithub.com%2Fspmjs%2Fnode-scp2",target:"_blank",rel:"noopener noreferrer"},v=n("h2",{id:"一-安装-scp2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#一-安装-scp2","aria-hidden":"true"},"#"),s(" 一 安装 scp2")],-1),m={href:"https://link.juejin.im?target=https%3A%2F%2Fgithub.com%2Fspmjs%2Fnode-scp2",target:"_blank",rel:"noopener noreferrer"},b=l(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    npm install scp2 <span class="token operator">--</span>save<span class="token operator">-</span>dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="二、配置测试-生产环境-服务器-ssh-远程登陆账号信息" tabindex="-1"><a class="header-anchor" href="#二、配置测试-生产环境-服务器-ssh-远程登陆账号信息" aria-hidden="true">#</a> 二、配置测试/生产环境 服务器 SSH 远程登陆账号信息</h2><h4 id="_1-在项目根目录下-创建-env-dev-文件-测试环境变量" tabindex="-1"><a class="header-anchor" href="#_1-在项目根目录下-创建-env-dev-文件-测试环境变量" aria-hidden="true">#</a> 1. 在项目根目录下, 创建 .env.dev 文件 (测试环境变量)</h4><p>VUE_APP_SERVER_ID 变量表示 当前需部署的测试服务器 ID 为 0</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// .env.dev文件中</span>
<span class="token constant">VUE_APP_SERVER_ID</span> <span class="token operator">=</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-在项目根目录下-创建-env-prod-文件-生产环境变量" tabindex="-1"><a class="header-anchor" href="#_2-在项目根目录下-创建-env-prod-文件-生产环境变量" aria-hidden="true">#</a> 2. 在项目根目录下, 创建 .env.prod 文件 (生产环境变量)</h4><p>VUE_APP_SERVER_ID 变量表示 当前需部署的生产服务器 ID 为 1</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// .env.prod文件中</span>
<span class="token constant">VUE_APP_SERVER_ID</span> <span class="token operator">=</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-在项目根目录下-创建-deploy-products-js-文件" tabindex="-1"><a class="header-anchor" href="#_3-在项目根目录下-创建-deploy-products-js-文件" aria-hidden="true">#</a> 3. 在项目根目录下, 创建 deploy/products.js 文件</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
 *读取env环境变量
 */</span>
<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// env 文件 判断打包环境指定对应的服务器id</span>
<span class="token keyword">const</span> envfile <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&#39;prod&#39;</span> <span class="token operator">?</span> <span class="token string">&#39;../.env.prod&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;../.env.dev&#39;</span>
<span class="token comment">// env环境变量的路径</span>
<span class="token keyword">const</span> envPath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> envfile<span class="token punctuation">)</span>
<span class="token comment">// env对象</span>
<span class="token keyword">const</span> envObj <span class="token operator">=</span> <span class="token function">parse</span><span class="token punctuation">(</span>fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>envPath<span class="token punctuation">,</span> <span class="token string">&#39;utf8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token constant">SERVER_ID</span> <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>envObj<span class="token punctuation">[</span><span class="token string">&#39;VUE_APP_SERVER_ID&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">parse</span><span class="token punctuation">(</span><span class="token parameter">src</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 解析KEY=VAL的文件</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  src<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;\\n&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">line</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// matching &quot;KEY&#39; and &#39;VAL&#39; in &#39;KEY=VAL&#39;</span>
    <span class="token comment">// eslint-disable-next-line no-useless-escape</span>
    <span class="token keyword">const</span> keyValueArr <span class="token operator">=</span> line<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\s*([\\w\\.\\-]+)\\s*=\\s*(.*)?\\s*$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span>
    <span class="token comment">// matched?</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>keyValueArr <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> key <span class="token operator">=</span> keyValueArr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
      <span class="token keyword">let</span> value <span class="token operator">=</span> keyValueArr<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token string">&#39;&#39;</span>

      <span class="token comment">// expand newlines in quoted values</span>
      <span class="token keyword">const</span> len <span class="token operator">=</span> value <span class="token operator">?</span> value<span class="token punctuation">.</span>length <span class="token operator">:</span> <span class="token number">0</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>len <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> value<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;&quot;&#39;</span> <span class="token operator">&amp;&amp;</span> value<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;&quot;&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        value <span class="token operator">=</span> value<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\\\n</span><span class="token regex-delimiter">/</span><span class="token regex-flags">gm</span></span><span class="token punctuation">,</span> <span class="token string">&#39;\\n&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>

      <span class="token comment">// remove any surrounding quotes and extra spaces</span>
      value <span class="token operator">=</span> value<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(^[&#39;&quot;]|[&#39;&quot;]$)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

      res<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> value
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> res
<span class="token punctuation">}</span>

<span class="token comment">/*
 *定义多个服务器账号 及 根据 SERVER_ID 导出当前环境服务器账号
 */</span>
<span class="token keyword">const</span> <span class="token constant">SERVER_LIST</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;A-生产环境&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">domain</span><span class="token operator">:</span> <span class="token string">&#39;www.prod.com&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 域名</span>
    <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&#39;46.106.38.24&#39;</span><span class="token punctuation">,</span> <span class="token comment">// ip</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token comment">// 端口</span>
    <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 登录服务器的账号</span>
    <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 登录服务器的账号</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/mdm/nginx/dist&#39;</span> <span class="token comment">// 发布至静态服务器的项目路径</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;B-测试环境&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">domain</span><span class="token operator">:</span> <span class="token string">&#39;test.xxx.com&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&#39;XX.XX.XX.XX&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">22</span><span class="token punctuation">,</span>
    <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">&#39;xxxxxxx&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/usr/local/www/xxx_program_test/&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token constant">SERVER_LIST</span><span class="token punctuation">[</span><span class="token constant">SERVER_ID</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、使用-scp2-库-创建自动化部署脚本" tabindex="-1"><a class="header-anchor" href="#三、使用-scp2-库-创建自动化部署脚本" aria-hidden="true">#</a> 三、使用 scp2 库,创建自动化部署脚本</h2><p>在项目根目录下, 创建 deploy/index.js 文件</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> scpClient <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;scp2&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> ora <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;ora&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> chalk <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;chalk&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> server <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./products&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> spinner <span class="token operator">=</span> <span class="token function">ora</span><span class="token punctuation">(</span>
  <span class="token string">&#39;正在发布到&#39;</span> <span class="token operator">+</span>
    <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&#39;prod&#39;</span> <span class="token operator">?</span> <span class="token string">&#39;生产&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;测试&#39;</span><span class="token punctuation">)</span> <span class="token operator">+</span>
    <span class="token string">&#39;服务器...&#39;</span>
<span class="token punctuation">)</span>
spinner<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
scpClient<span class="token punctuation">.</span><span class="token function">scp</span><span class="token punctuation">(</span>
  <span class="token string">&#39;dist/&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">host</span><span class="token operator">:</span> server<span class="token punctuation">.</span>host<span class="token punctuation">,</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> server<span class="token punctuation">.</span>port<span class="token punctuation">,</span>
    <span class="token literal-property property">username</span><span class="token operator">:</span> server<span class="token punctuation">.</span>username<span class="token punctuation">,</span>
    <span class="token literal-property property">password</span><span class="token operator">:</span> server<span class="token punctuation">.</span>password<span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> server<span class="token punctuation">.</span>path
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    spinner<span class="token punctuation">.</span><span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>chalk<span class="token punctuation">.</span><span class="token function">red</span><span class="token punctuation">(</span><span class="token string">&#39;发布失败.\\n&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token keyword">throw</span> err
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>
        chalk<span class="token punctuation">.</span><span class="token function">green</span><span class="token punctuation">(</span>
          <span class="token string">&#39;Success! 成功发布到&#39;</span> <span class="token operator">+</span>
            <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&#39;prod&#39;</span> <span class="token operator">?</span> <span class="token string">&#39;生产&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;测试&#39;</span><span class="token punctuation">)</span> <span class="token operator">+</span>
            <span class="token string">&#39;服务器! \\n&#39;</span>
        <span class="token punctuation">)</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、添加-package-json-中的-scripts-命令-自定义名称为-deploy" tabindex="-1"><a class="header-anchor" href="#四、添加-package-json-中的-scripts-命令-自定义名称为-deploy" aria-hidden="true">#</a> 四、添加 package.json 中的 scripts 命令, 自定义名称为 &quot;deploy&quot;,</h2><p>发布到测试环境命令为 <code>npm run deploy:dev</code>,生产环境为 <code>npm run deploy:prod</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>      <span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;serve&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-cli-service serve --mode dev&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-cli-service build --mode prod&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;deploy:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npm run build &amp;&amp; cross-env NODE_ENV=dev node ./deploy&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;deploy:prod&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npm run build &amp;&amp; cross-env NODE_ENV=prod node ./deploy&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ps 这里用到了 cross_env 得安装 <code>npm i --save-dev cross-env</code> cross-env 能跨平台地设置及使用环境变量，这里用来设置是生产环境还是测试环境。</p><h2 id="图解" tabindex="-1"><a class="header-anchor" href="#图解" aria-hidden="true">#</a> 图解</h2><img alt="vue config" class="lazyload" src="https://user-gold-cdn.xitu.io/2019/4/1/169d81456e6dc85c?imageView2/0/w/1280/h/960/ignore-error/1" data-width="891" data-height="962">`,19);function g(h,y){const a=t("ExternalLinkIcon");return o(),c("div",null,[r,u,d,n("p",null,[s("本教程讲解的是 Vue-CLI 3.x 脚手架搭建的 vue 项目, 利用"),n("a",k,[s("scp2"),p(a)]),s("自动化部署到静态文件服务器 Nginx")]),v,n("p",null,[n("a",m,[s("scp2"),p(a)]),s("是一个基于 ssh2 增强实现，纯粹使用 JavaScript 编写。 而 ssh2 就是一个使用 nodejs 对于 SSH2 的模拟实现。scp，是 secure copy 的缩写, scp 是 Linux 系统下基于 SSH 登陆进行安全的远程文件拷贝命令。这里我们就用这个功能，在 Vue 编译构建成功之后，将项目推送至测试/生产环境，以方便测试，提高效率。 安装 scp2：")]),b])}const f=e(i,[["render",g],["__file","vue-cli3.X自动部署项目到服务器.html.vue"]]);export{f as default};
