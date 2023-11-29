import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as p,c,b as n,d as s,a as l,e as a}from"./app-6987be88.js";const o={},r=a(`<h3 id="_1、浏览器的工作原理" tabindex="-1"><a class="header-anchor" href="#_1、浏览器的工作原理" aria-hidden="true">#</a> 1、浏览器的工作原理</h3><h4 id="浏览器组成" tabindex="-1"><a class="header-anchor" href="#浏览器组成" aria-hidden="true">#</a> 浏览器组成：</h4><ul><li><p>用户界面：地址栏 前进后退、书签菜单</p></li><li><p>渲染引擎:负责显示请求的内容</p></li><li><p>浏览器引擎:在用户界面和渲染引擎之间传达指令（点击刷新）</p></li><li><p>网络模块：用户网络调用</p></li><li><p>UI 后端:用户绘制基本的窗口小部件</p></li><li><p>JS 解释器:解析和执行 js 代码</p></li><li><p>数据存储:持久层（cookie、LocalStorage 和 SessionStorage）</p></li></ul><h4 id="流程图" tabindex="-1"><a class="header-anchor" href="#流程图" aria-hidden="true">#</a> 流程图</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>graph TD

    A(用户界面)--&gt;B{浏览器引擎}
    A--&gt;F(UI后端)
    B--&gt;C{渲染引擎}
    B--&gt;G(数据存储)
    C--&gt;D[网络模块]
    C--&gt;E[JS解释器]
    C--&gt;F[UI后端]


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、node-js-的简单介绍" tabindex="-1"><a class="header-anchor" href="#_2、node-js-的简单介绍" aria-hidden="true">#</a> 2、Node.js 的简单介绍</h3><pre><code>node 是一个开发平台 基于 Chrom V8 javascript 引擎构建,可以开发控制台程序（命令行程序）、桌面应用程序（GUI）（借助 node-webkit、electron 等框架实现）、Web 应用程序（网站）
</code></pre><h4 id="win10-安装" tabindex="-1"><a class="header-anchor" href="#win10-安装" aria-hidden="true">#</a> win10 安装:</h4><ul><li>1.管理员运行 cmd 进入安装包所在目录</li><li>2.msiexec /package node-v8.9.3-x64.msi</li></ul><h4 id="运行指令" tabindex="-1"><a class="header-anchor" href="#运行指令" aria-hidden="true">#</a> 运行指令</h4><ul><li>npm install -g npm 这样 npm 就更新到最新版本了。</li><li>如果想更新到指定版本， 运行指令 npm -g install npm@2.9.1（@后跟版本号）， 这样我们就可以更新 npm 版本了。</li><li>怎么查看自己全局安装过的包，用命令 npm list -g --depth 0</li></ul><h4 id="淘宝镜像" tabindex="-1"><a class="header-anchor" href="#淘宝镜像" aria-hidden="true">#</a> 淘宝镜像</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//淘宝镜像</span>
npm config <span class="token keyword">set</span> registry https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>registry<span class="token punctuation">.</span>npm<span class="token punctuation">.</span>taobao<span class="token punctuation">.</span>org

npm config <span class="token keyword">set</span> registry http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>registry<span class="token punctuation">.</span>cnpmjs<span class="token punctuation">.</span>org

<span class="token comment">//检测是否设置成功</span>
npm config <span class="token keyword">get</span> registry

<span class="token comment">//查看全局包位置：</span>
npm root <span class="token operator">-</span>g
<span class="token comment">//可以看到实际的位置</span>

<span class="token comment">//修改全局包位置</span>
npm config <span class="token keyword">set</span> prefix <span class="token string">&#39;目标目录&#39;</span>

<span class="token comment">//npm清理缓存</span>
npm cache verify


<span class="token comment">//查看修改结果</span>
npm config <span class="token keyword">get</span> prefix
<span class="token comment">//或者用npm root -g命令也可</span>
npm uninstall <span class="token operator">-</span>g xxx

npm update moduleName：更新node模块
npm rebuild moduleName
npm view moudleName dependencies：查看包的依赖关系
npm view moduleName repository<span class="token punctuation">.</span>url：查看包的源文件地址
npm view moduleName engines：查看包所依赖的Node的版本
npm outdated：检查包是否已经过时，此命令会列出所有已经过时的包，可以及时进行包的更新


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="升级-node-版本" tabindex="-1"><a class="header-anchor" href="#升级-node-版本" aria-hidden="true">#</a> 升级 node 版本</h4><ul><li>1)首先:查看当前 node 版本:node –v</li><li>2)安装 n 模块:npm install -g n</li><li>3)升级到指定版本/最新版本(该步骤可能需要花费一些时间)升级之前,可以执行 n ls (查看可升级的版本) 如:n 6.9.1 或者你也可以告诉管理器,安装最新的稳定版本 n stable</li><li>4)安装完成后,查看 Node 的版本,检查升级是否成功 node -v</li><li>注:如果得到的版本信息不正确,你可能需要重启机器</li></ul><h4 id="cnpm" tabindex="-1"><a class="header-anchor" href="#cnpm" aria-hidden="true">#</a> cnpm</h4><h5 id="_1-npm-安装-cnpm" tabindex="-1"><a class="header-anchor" href="#_1-npm-安装-cnpm" aria-hidden="true">#</a> 1. npm 安装 cnpm</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>   npm i cnpm <span class="token operator">-</span>g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_2-检查-cnpm" tabindex="-1"><a class="header-anchor" href="#_2-检查-cnpm" aria-hidden="true">#</a> 2. 检查 cnpm</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    cnpm -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_3-安装其他包" tabindex="-1"><a class="header-anchor" href="#_3-安装其他包" aria-hidden="true">#</a> 3. 安装其他包:</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>   cnpm  i bootstrap -S
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="yarn" tabindex="-1"><a class="header-anchor" href="#yarn" aria-hidden="true">#</a> yarn</h4><h5 id="_1-npm-安装-yarn" tabindex="-1"><a class="header-anchor" href="#_1-npm-安装-yarn" aria-hidden="true">#</a> 1. npm 安装 yarn</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>   npm i yarn -g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_2-检查-yarn" tabindex="-1"><a class="header-anchor" href="#_2-检查-yarn" aria-hidden="true">#</a> 2. 检查 yarn</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    yarn -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_3-安装其他包-1" tabindex="-1"><a class="header-anchor" href="#_3-安装其他包-1" aria-hidden="true">#</a> 3. 安装其他包:</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>   yarn add underscore
   yarn add 包名    本地
   yarn add 包名  -g    全局
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4-更新一个依赖" tabindex="-1"><a class="header-anchor" href="#_4-更新一个依赖" aria-hidden="true">#</a> 4.更新一个依赖</h5><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>yarn upgrade [package]
yarn upgrade [package]@[version]
yarn upgrade [package]@[tag]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5-移除一个依赖" tabindex="-1"><a class="header-anchor" href="#_5-移除一个依赖" aria-hidden="true">#</a> 5.移除一个依赖</h5><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>yarn remove [package]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_6-安装-package-json-中所有的依赖项" tabindex="-1"><a class="header-anchor" href="#_6-安装-package-json-中所有的依赖项" aria-hidden="true">#</a> 6.安装 package.json 中所有的依赖项</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yarn或者 yarn install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_7-运行脚本" tabindex="-1"><a class="header-anchor" href="#_7-运行脚本" aria-hidden="true">#</a> 7.运行脚本</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yarn run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>yarn 执行 dev 对应的脚本 node app.js</li></ul><h5 id="_8-显示某个包信息" tabindex="-1"><a class="header-anchor" href="#_8-显示某个包信息" aria-hidden="true">#</a> 8. 显示某个包信息</h5><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>    yarn info webpack # yarn
    npm info webpack # npm
    yarn info webpack --json # 输出 json 格式
    npm info webpack  --json # npm
    yarn info webpack readme # 输出 README 部分
    npm info webpack readme
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_9-列出项目的所有依赖" tabindex="-1"><a class="header-anchor" href="#_9-列出项目的所有依赖" aria-hidden="true">#</a> 9. 列出项目的所有依赖</h5><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>     yarn list # 列出当前项目的依赖
    npm list # npm
    yarn list --depth=0 # 限制依赖的深度
    sudo yarn global list # 列出全局安装的模块
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_10-管理-yarn-配置文件" tabindex="-1"><a class="header-anchor" href="#_10-管理-yarn-配置文件" aria-hidden="true">#</a> 10.管理 yarn 配置文件</h5><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code> yarn coinfig
  yarn config set key value # 设置
    npm config set key value

    yarn config get key # 读取值
    npm config get key

    yarn config delete key # 删除
    npm config delete key

    yarn config list # 显示当前配置
    npm config list

    yarn config set registry https://      registry.npm.taobao.org
    yarn config set registry http://registry.cnpmjs.org
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="设置淘宝镜像" tabindex="-1"><a class="header-anchor" href="#设置淘宝镜像" aria-hidden="true">#</a> 设置淘宝镜像</h6><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    npm config set registry https://registry.npm.taobao.org # npm
     yarn config set registry http://registry.cnpmjs.org
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_11-缓存" tabindex="-1"><a class="header-anchor" href="#_11-缓存" aria-hidden="true">#</a> 11.缓存</h5><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>yarn cache
    sudo yarn cache list # 列出已缓存的每个包
    sudo yarn cache dir # 返回 全局缓存位置
    sudo yarn cache clean # 清除缓存
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、常见错误号" tabindex="-1"><a class="header-anchor" href="#_3、常见错误号" aria-hidden="true">#</a> 3、常见错误号</h3><ul><li><p>EACCES (Permission denied)</p><ul><li>An attempt was made to access a file in a way forbidden by its file access permissions.</li><li>访问被拒绝</li></ul></li><li><p>EADDRINUSE (Address already in use)</p><ul><li>An attempt to bind a server (net, http, or https) to a local address failed due to another server on the local system already occupying that address.</li><li>地址正在被使用（比如：端口号备占用）</li></ul></li><li><p>EEXIST (File exists)</p><ul><li>An existing file was the target of an operation that required that the target not exist.</li><li>文件已经存在</li></ul></li><li><p>EISDIR (Is a directory)</p><ul><li>An operation expected a file, but the given pathname was a directory.</li><li>给定的路径是目录</li></ul></li><li><p>ENOENT (No such file or directory)</p><ul><li>Commonly raised by fs operations to indicate that a component of the specified pathname does not exist -- no entity (file or directory) could be found by the given path.</li><li>文件 或 目录不存在</li></ul></li></ul><ul><li>ENOTDIR (Not a directory) <ul><li>A component of the given pathname existed, but was not a directory as expected. Commonly raised by fs.readdir.</li><li>给定的路径不是目录</li></ul></li></ul><h3 id="_4、读取写入文件" tabindex="-1"><a class="header-anchor" href="#_4、读取写入文件" aria-hidden="true">#</a> 4、读取写入文件</h3><h5 id="加载模块" tabindex="-1"><a class="header-anchor" href="#加载模块" aria-hidden="true">#</a> 加载模块</h5><pre><code>var fs=require(&#39;fs&#39;);
</code></pre><h5 id="写入文件" tabindex="-1"><a class="header-anchor" href="#写入文件" aria-hidden="true">#</a> 写入文件</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    fs<span class="token punctuation">.</span><span class="token function">writeFile</span><span class="token punctuation">(</span>file<span class="token punctuation">,</span> data<span class="token punctuation">[</span><span class="token punctuation">,</span> options<span class="token punctuation">]</span><span class="token punctuation">,</span> callback<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//参数1:file 要把文件写入到哪里(路径)</span>
    <span class="token comment">//参数2:data 写入的数据</span>
    <span class="token comment">//参数3:options 编码 默认:utf8（可选）</span>
    <span class="token comment">//参数4:callback 回调函数:err</span>
    <span class="token keyword">var</span> msg <span class="token operator">=</span> <span class="token string">&#39;你好，世界&#39;</span><span class="token punctuation">;</span>
    fs<span class="token punctuation">.</span><span class="token function">writeFile</span><span class="token punctuation">(</span><span class="token string">&#39;./data.txt&#39;</span><span class="token punctuation">,</span> msg<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> err<span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>&quot;写入成
        功&quot;<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="读取文件-readfire" tabindex="-1"><a class="header-anchor" href="#读取文件-readfire" aria-hidden="true">#</a> 读取文件 readFire</h5><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>     fs.readFile(path[, options], callback)
    //参数1:path 要把文件写入到哪里(路径)
    //参数2:options 编码 默认:utf8（可选）
    //参数3:callback 回调函数:err
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="path-模块" tabindex="-1"><a class="header-anchor" href="#path-模块" aria-hidden="true">#</a> path 模块</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>__dirname <span class="token comment">//读取当前js所在的文件夹目录</span>
<span class="token comment">//1. 加载 fs 模块</span>
<span class="token keyword">var</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span> <span class="token comment">//  path 模块 负责处理路径</span>
path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token comment">//把a+b 安装路径的规则拼接起来</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="try-catch-捕获异常-抛出错误" tabindex="-1"><a class="header-anchor" href="#try-catch-捕获异常-抛出错误" aria-hidden="true">#</a> try...catch(捕获异常，抛出错误)</h5><h6 id="代码-同步-try-catch" tabindex="-1"><a class="header-anchor" href="#代码-同步-try-catch" aria-hidden="true">#</a> 代码: 同步 try .. catch</h6><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 一旦出错,后面的代码不执行了..</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">111</span><span class="token punctuation">)</span>

<span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> data <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">&#39;./abcd.txt&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;utf8&#39;</span><span class="token punctuation">)</span>

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// throw err</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;读取时:&#39;</span> <span class="token operator">+</span> err<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">222</span><span class="token punctuation">)</span>

<span class="token comment">//代码: 异步 try .. catch</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">111</span><span class="token punctuation">)</span>

<span class="token keyword">try</span> <span class="token punctuation">{</span>
  fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span>file<span class="token punctuation">,</span> <span class="token string">&#39;utf8&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 异步 try...catch</span>
    <span class="token comment">// 如果正确: err 没有值  data 有值</span>
    <span class="token comment">// 如果错误: err 有值 ,data 没有值</span>
    <span class="token comment">// 不管怎么样,都会走这个回调方法,,, try catch 没有用</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">333</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token comment">// 不要拼字符串,会转化为字符串的</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">222</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5、使用-node-js-创建一个极简服务器" tabindex="-1"><a class="header-anchor" href="#_5、使用-node-js-创建一个极简服务器" aria-hidden="true">#</a> 5、使用 Node.js 创建一个极简服务器</h3><h4 id="_1-加载-http-模块" tabindex="-1"><a class="header-anchor" href="#_1-加载-http-模块" aria-hidden="true">#</a> 1.加载 http 模块</h4><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>    var http=require(&quot;http&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-创建服务器" tabindex="-1"><a class="header-anchor" href="#_2-创建服务器" aria-hidden="true">#</a> 2.创建服务器</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    var server=http.createSever();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3-监听-request" tabindex="-1"><a class="header-anchor" href="#_3-监听-request" aria-hidden="true">#</a> 3.监听 request</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    server<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;request&quot;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span>res</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token comment">//参数1:req 请求过来的对象信息</span>
      <span class="token comment">//参数2:res 服务器响应给浏览器的信息</span>

      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;有人访问了&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">//告诉浏览器以什么格式解析内容  content-type 文本类型  text/plain 普通文本</span>

       <span class="token comment">//mime.getType(&#39;.../XXX.css&#39;) -----&gt; text/css</span>

     <span class="token comment">//mime.getType(&#39;文件名/文件路径&#39;)  看中是 后缀名</span>

    res<span class="token punctuation">.</span>url<span class="token punctuation">.</span>startsWith（）<span class="token comment">//选择以...开始的路径</span>

      <span class="token comment">//设置响应头</span>
      res<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&quot;content-type&quot;</span><span class="token punctuation">,</span>mime<span class="token punctuation">.</span><span class="token function">getType</span><span class="token punctuation">(</span>reg<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


      <span class="token comment">//设置不同url返回不同的响应文本</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>url<span class="token operator">==</span><span class="token string">&#39;/&#39;</span><span class="token operator">||</span>req<span class="token punctuation">.</span>url<span class="token operator">==</span><span class="token string">&#39;/index&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&quot;首页&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>url<span class="token operator">==</span><span class="token string">&#39;/login&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&quot;登录页&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>url<span class="token operator">==</span><span class="token string">&#39;/register&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&quot;注册页&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
      res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&quot;404 no found page&quot;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>

    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-开启服务器" tabindex="-1"><a class="header-anchor" href="#_4-开启服务器" aria-hidden="true">#</a> 4.开启服务器</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    server.listen(9000,function(){
    console.log(&quot;服务器开启了,请访问:http:/localhost:9000&quot;)
    });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6、request-对象" tabindex="-1"><a class="header-anchor" href="#_6、request-对象" aria-hidden="true">#</a> 6、request 对象</h3><h4 id="_1-request-headers-请求头对象" tabindex="-1"><a class="header-anchor" href="#_1-request-headers-请求头对象" aria-hidden="true">#</a> 1.request.headers 请求头对象</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>      <span class="token comment">// 打印 request.headers</span>
<span class="token punctuation">{</span> <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&#39;localhost:8080&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">connection</span><span class="token operator">:</span> <span class="token string">&#39;keep-alive&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// 人家默认的,不要动它,,知道也没用,,也改变不了</span>
  <span class="token string-property property">&#39;user-agent&#39;</span><span class="token operator">:</span> <span class="token string">&#39;Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">//User-Agent 告诉HTTP服务器， 客户端使用的操作系统和浏览器的名称和版本.</span>

  <span class="token string-property property">&#39;upgrade-insecure-requests&#39;</span><span class="token operator">:</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span><span class="token comment">//是否可使用更高的版本进行通信</span>
  <span class="token literal-property property">accept</span><span class="token operator">:</span> <span class="token string">&#39;text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">//浏览器端可以接受的媒体类型,</span>
  <span class="token string-property property">&#39;accept-encoding&#39;</span><span class="token operator">:</span> <span class="token string">&#39;gzip, deflate, br&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// 浏览器申明自己接收的编码方法 通常指定压缩方法，是否支持压缩，支持什么压缩方法（gzip，deflate）</span>
  <span class="token string-property property">&#39;accept-language&#39;</span><span class="token operator">:</span> <span class="token string">&#39;zh-CN,zh;q=0.8,en;q=0.6&#39;</span>
 <span class="token comment">//浏览器申明自己接收的语言。</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-request-rawheaders-请求头-数组" tabindex="-1"><a class="header-anchor" href="#_2-request-rawheaders-请求头-数组" aria-hidden="true">#</a> 2.request.rawHeaders-请求头(数组)</h4><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>// 打印 request.rawHeaders
[ &#39;Host&#39;,
  &#39;localhost:8080&#39;,
  &#39;Connection&#39;,
  &#39;keep-alive&#39;,
  &#39;Cache-Control&#39;,
  &#39;max-age=0&#39;,
  &#39;Upgrade-Insecure-Requests&#39;,
  &#39;1&#39;,
  &#39;User-Agent&#39;,
  &#39;Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36&#39;,
  &#39;Accept&#39;,
  &#39;text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8&#39;,
  &#39;Accept-Encoding&#39;,
  &#39;gzip, deflate, br&#39;,
  &#39;Accept-Language&#39;,
  &#39;zh-CN,zh;q=0.8,en;q=0.6&#39; ]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-request-httpversion-http-版本" tabindex="-1"><a class="header-anchor" href="#_3-request-httpversion-http-版本" aria-hidden="true">#</a> 3.request.httpVersion-http 版本</h4><h4 id="_4-request-method-请求方式-get-post" tabindex="-1"><a class="header-anchor" href="#_4-request-method-请求方式-get-post" aria-hidden="true">#</a> 4.request.method-请求方式（get/post）</h4><h4 id="_5-request-url-请求-url-路径" tabindex="-1"><a class="header-anchor" href="#_5-request-url-请求-url-路径" aria-hidden="true">#</a> 5.request.url-请求 url 路径</h4><h3 id="_7-response-对象" tabindex="-1"><a class="header-anchor" href="#_7-response-对象" aria-hidden="true">#</a> 7.response 对象</h3><h4 id="_1-response-write-data-encoding-callback" tabindex="-1"><a class="header-anchor" href="#_1-response-write-data-encoding-callback" aria-hidden="true">#</a> 1.response.write(data[,encoding][,callback])</h4><ul><li>参数 1:要写入的数据，可以是字符串或二进制数据(必填) string|Buffer</li><li>参数 2:编码，默认是 utf8；选填</li><li>参数 3:回调函数;选填</li></ul><h4 id="_2-response-end-data-encoding-callback" tabindex="-1"><a class="header-anchor" href="#_2-response-end-data-encoding-callback" aria-hidden="true">#</a> 2.response.end(data[,encoding][,callback])</h4><ul><li>参数 1:结束响应前要发送的数据, 选填 string |Buffer</li><li>参数 2: 编码, 选填</li><li>参数 3: 回调函数, 选填</li></ul><h4 id="_3-response-setheader-name-value-—-设置响应报文头-★★" tabindex="-1"><a class="header-anchor" href="#_3-response-setheader-name-value-—-设置响应报文头-★★" aria-hidden="true">#</a> 3.response.setHeader(name, value) — 设置响应报文头 (★★)</h4><pre><code>//告诉浏览器解析文本是以什么格式解析,又以什么编码格式解析
</code></pre><h4 id="_4-response-statuscode-—-设置或者读取-http-状态码" tabindex="-1"><a class="header-anchor" href="#_4-response-statuscode-—-设置或者读取-http-状态码" aria-hidden="true">#</a> 4.response.statusCode — 设置或者读取 http 状态码</h4><h4 id="_5-response-statusmessage-—-设置或读取-http-响应状态消息" tabindex="-1"><a class="header-anchor" href="#_5-response-statusmessage-—-设置或读取-http-响应状态消息" aria-hidden="true">#</a> 5.response.statusMessage — 设置或读取 http 响应状态消息</h4><h4 id="_6-response-writehead-statuscode-statusmessage-headers-—-设置响应头信息-★" tabindex="-1"><a class="header-anchor" href="#_6-response-writehead-statuscode-statusmessage-headers-—-设置响应头信息-★" aria-hidden="true">#</a> 6.response.writeHead(statusCode [, statusMessage]_[, headers]) — 设置响应头信息 (★)</h4><ul><li>参数 1: 状态码</li><li>参数 2: 状态信息</li><li>参数 3: 响应头</li></ul><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>        // 示例代码：
    res.writeHead(200, &#39;OK&#39;, {
      &#39;Content-Type&#39;: &#39;text/html; charset=utf-8&#39;,
      &#39;Content-Length&#39;: Buffer.byteLength(msg)
    });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>1.res.end() 放在最后;</li><li>2.setHeader/statusCode/statusMessage 和 writeHead(statusCode [, statusMessage]_[, headers]) 最好只使用一个</li><li>3.setHeader() 最好放在最前</li></ul><h3 id="_8、url-模块" tabindex="-1"><a class="header-anchor" href="#_8、url-模块" aria-hidden="true">#</a> 8、url 模块</h3><h4 id="内置模块-url-转化-包含查询字符串的-req-url" tabindex="-1"><a class="header-anchor" href="#内置模块-url-转化-包含查询字符串的-req-url" aria-hidden="true">#</a> 内置模块 url ,转化 包含查询字符串的 req.url</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>      <span class="token keyword">var</span> <span class="token constant">URL</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;url&#39;</span><span class="token punctuation">)</span>

      <span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>url<span class="token punctuation">)</span>  <span class="token operator">-</span><span class="token operator">&gt;</span> query 依然是查询字符串

      <span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>url<span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">)</span>  <span class="token operator">-</span><span class="token operator">&gt;</span> query 才是一个 url 对象

     <span class="token comment">//如果为 \`true\`，则 \`query 属性\`总会通过 querystring 模块的 parse() 方法生成一个\`对象\`。</span>
    <span class="token comment">//如果为 \`false\`，则返回的 URL 对象上的 query 属性会是一个\`未解析、未解码的字符串\`。</span>
    <span class="token comment">//默认为\` false。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="内置模块-querystring-查询字符串-转化为对象" tabindex="-1"><a class="header-anchor" href="#内置模块-querystring-查询字符串-转化为对象" aria-hidden="true">#</a> 内置模块 queryString, 查询字符串 转化为对象</h4><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>       var queryString =  require(&#39;queryString&#39;);

       querystring.parse(bodypost)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9、第三方模板-mime" tabindex="-1"><a class="header-anchor" href="#_9、第三方模板-mime" aria-hidden="true">#</a> 9、第三方模板:MIME</h3><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>    //需要先安装
    npm i mime -s
      // 设置样式 (mime)
       mime.getType(req.url)
       得到的是文件类型如:text/html,text/plian,image/jpeg等
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10、第三方模块-underscore" tabindex="-1"><a class="header-anchor" href="#_10、第三方模块-underscore" aria-hidden="true">#</a> 10、第三方模块:underscore</h3><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>    var _=require(&#39;underscore&#39;);
    //_跟jquery中的$类似
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用 underscore 的步骤</li></ul><h4 id="_1-获取模板字符串" tabindex="-1"><a class="header-anchor" href="#_1-获取模板字符串" aria-hidden="true">#</a> 1.获取模板字符串</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> oldHtml <span class="token operator">=</span> <span class="token string">&#39;&lt;h1&gt;&lt;%=name %&gt;&lt;/h1&gt;&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-生成模板函数" tabindex="-1"><a class="header-anchor" href="#_2-生成模板函数" aria-hidden="true">#</a> 2.生成模板函数</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//参数:模板文件</span>

<span class="token comment">//返回值:模板函数</span>

<span class="token keyword">var</span> tplFn <span class="token operator">=</span> _<span class="token punctuation">.</span><span class="token function">template</span><span class="token punctuation">(</span>oldHtml<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-传值" tabindex="-1"><a class="header-anchor" href="#_3-传值" aria-hidden="true">#</a> 3.传值</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//参数:对象</span>

<span class="token keyword">var</span> newStr <span class="token operator">=</span> <span class="token function">tplFn</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;乐福&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11、其他" tabindex="-1"><a class="header-anchor" href="#_11、其他" aria-hidden="true">#</a> 11、其他</h3><h4 id="_1-读取文件如果发生错误-不需要-throw-err-因为这是做项目了" tabindex="-1"><a class="header-anchor" href="#_1-读取文件如果发生错误-不需要-throw-err-因为这是做项目了" aria-hidden="true">#</a> 1. 读取文件如果发生错误,不需要 throw err ,因为这是做项目了</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">404</span><span class="token punctuation">,</span> <span class="token string">&#39;Not Found&#39;</span><span class="token punctuation">)</span>

  res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&#39;404 no found page&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-处理大小写-因为-method-get-和-post" tabindex="-1"><a class="header-anchor" href="#_2-处理大小写-因为-method-get-和-post" aria-hidden="true">#</a> 2. 处理大小写 因为 method = GET 和 POST</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//把url转换成小写</span>
req<span class="token punctuation">.</span>url <span class="token operator">=</span> req<span class="token punctuation">.</span>url<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

req<span class="token punctuation">.</span>method <span class="token operator">=</span> req<span class="token punctuation">.</span>method<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-数组转化为字符串" tabindex="-1"><a class="header-anchor" href="#_3-数组转化为字符串" aria-hidden="true">#</a> 3.数组转化为字符串</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_4-重定向" tabindex="-1"><a class="header-anchor" href="#_4-重定向" aria-hidden="true">#</a> 4. 重定向</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>res<span class="token punctuation">.</span>statusCode <span class="token operator">=</span> <span class="token number">301</span>

res<span class="token punctuation">.</span>statusMessage <span class="token operator">=</span> <span class="token string">&#39;Moved Permanently&#39;</span>

res<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&#39;Location&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span>

res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 一定要加上这个</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-错误-又不是文件不存在的错误处理" tabindex="-1"><a class="header-anchor" href="#_5-错误-又不是文件不存在的错误处理" aria-hidden="true">#</a> 5. 错误,又不是文件不存在的错误处理</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>err <span class="token operator">&amp;&amp;</span> err<span class="token punctuation">.</span>code <span class="token operator">!==</span> <span class="token string">&#39;ENOENT&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">throw</span> err
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-拼接-buffer-的传递" tabindex="-1"><a class="header-anchor" href="#_6-拼接-buffer-的传递" aria-hidden="true">#</a> 6. 拼接 buffer 的传递</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token keyword">var</span> bufferArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    req<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;data&#39;</span><span class="token punctuation">,</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">chunk</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;111&#39;</span><span class="token punctuation">)</span>

      bufferArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>chunk<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    req<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;end&#39;</span><span class="token punctuation">,</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;22&#39;</span><span class="token punctuation">)</span>

     <span class="token comment">//把 buffer数组拼组成一个完整的 buffer</span>

      <span class="token keyword">var</span> postBody <span class="token operator">=</span>  Buffer<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>bufferArr<span class="token punctuation">)</span><span class="token punctuation">;</span>

      postBody <span class="token operator">=</span> postBody<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>postBody<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//title=44&amp;url=444&amp;text=444</span>

      <span class="token comment">//4. 把字符串转化为对象</span>

      postBody <span class="token operator">=</span>  queryString<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>postBody<span class="token punctuation">)</span><span class="token punctuation">;</span>

      postBody<span class="token punctuation">.</span>id <span class="token operator">=</span> list<span class="token punctuation">.</span>length<span class="token punctuation">;</span>

      list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>postBody<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7-注意-不要在最后写-res-end-因是异步的因为结束响应-就不会传了" tabindex="-1"><a class="header-anchor" href="#_7-注意-不要在最后写-res-end-因是异步的因为结束响应-就不会传了" aria-hidden="true">#</a> 7.注意,,不要在最后写 res.end(), 因是异步的因为结束响应,,就不会传了</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token function">ml_readData</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>

  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">var</span>  data <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

 <span class="token operator">...</span>

 data <span class="token operator">=</span> <span class="token number">13</span> <span class="token operator">--</span><span class="token operator">&gt;</span>

 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>



  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_12、node-js-模块" tabindex="-1"><a class="header-anchor" href="#_12、node-js-模块" aria-hidden="true">#</a> 12、node.js 模块</h3><h4 id="_1-模块分类" tabindex="-1"><a class="header-anchor" href="#_1-模块分类" aria-hidden="true">#</a> 1.模块分类</h4><h5 id="核心模块-内置模块-原生模块" tabindex="-1"><a class="header-anchor" href="#核心模块-内置模块-原生模块" aria-hidden="true">#</a> 核心模块(内置模块，原生模块):</h5><ul><li>fs 读写文件</li><li>http 创建服务并监听服务</li><li>path 拼接路径</li><li>url 解析 reg.url，设置参数 true，把 query 的查询字符串转化为对象啊 (/add?id=12&amp;name=&#39;yaya&#39;)</li><li>querystring 解析查询字符串 ( ? 后面的: id=2&amp;name=&#39;xingge&#39; )</li></ul><h4 id="_2-文件模块" tabindex="-1"><a class="header-anchor" href="#_2-文件模块" aria-hidden="true">#</a> 2.文件模块</h4><pre><code>- 说明 : 根据文件路径引入的模块
</code></pre><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>    var a = require(&#39;./a&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>- 如果加载时,没有指定后缀名, 那么就按照如下顺序加载响应模块  ( 例如 :  require ( &#39; ./demo  &#39; ))
  - 1. .js
  - 2. .json
  - 3. .node (C/C++编写的模块)
</code></pre><h4 id="_3-自定义模块-第三方模块" tabindex="-1"><a class="header-anchor" href="#_3-自定义模块-第三方模块" aria-hidden="true">#</a> 3.自定义模块(第三方模块)**</h4><ul><li>说明 : 需要额外通过 npm 安装的模块 var mime = require(&#39;mime&#39;);</li><li>mime 根据路径/文件 后缀名 转化为对应的样式( Content-Type) , (mime.getType() )</li><li>underscore 模板引擎 : 给 html 文件赋值</li></ul><h3 id="_13-require-加载模块顺序" tabindex="-1"><a class="header-anchor" href="#_13-require-加载模块顺序" aria-hidden="true">#</a> 13.require 加载模块顺序</h3><h4 id="_1-require-test-js-如果是具体的文件名" tabindex="-1"><a class="header-anchor" href="#_1-require-test-js-如果是具体的文件名" aria-hidden="true">#</a> 1.require(&#39;./test.js&#39;) ==&gt; 如果是具体的文件名</h4><ul><li>直接根据给定的路径去加载模块,找到了,加载成功,找不到加载失败</li></ul><h4 id="_2-require-test-不是具体的文件名" tabindex="-1"><a class="header-anchor" href="#_2-require-test-不是具体的文件名" aria-hidden="true">#</a> 2.require(&#39;./test&#39;) ==&gt; 不是具体的文件名</h4><ul><li>第一步: 根据指定的路径,依次添加文件后缀 .js、.json、.node 进行匹配,如果找不到匹配,执行第二步</li><li>第二步: 找不到会认为是 test 文件夹, 查找是否有 test 目录,, (尝试找 test 包)</li><li>找不到: 加载失败</li><li>找到了,依次在 test 目录下查找 package.json 文件（找到该文件后尝试找 main 字段中的入口文件）、index.js、index.json、index.node，找不到则加载失败</li></ul><h4 id="_3-不是-那么就认为传入的是-模块名称-比如-require-http-、require-mime" tabindex="-1"><a class="header-anchor" href="#_3-不是-那么就认为传入的是-模块名称-比如-require-http-、require-mime" aria-hidden="true">#</a> 3.不是, 那么就认为传入的是 模块名称,（比如：require(&#39;http&#39;)、require(&#39;mime&#39;)）</h4><ul><li>先从内置模块里找,找到说明是内置模块: 直接加载内置模块</li><li>不是内置模块</li><li>依次递归查找 node_modules 目录中是否有相应的包</li><li>从当前目录开始,依次递归查找所有父目录下的 node_modules 目录中是否包含相应的包</li></ul><h3 id="_14、模块化步骤" tabindex="-1"><a class="header-anchor" href="#_14、模块化步骤" aria-hidden="true">#</a> 14、模块化步骤</h3><ul><li>1.创建模块</li><li>2.导出模块 <ul><li><pre><code>2-1 当前写什么内容?(对象里赋值)
</code></pre></li><li><pre><code>2.2 是否需要参数?
</code></pre></li><li><pre><code>2.3是否需要第三方模块和函数
</code></pre></li></ul></li><li>3.加载模块</li><li>4.使用模块</li><li></li></ul><h3 id="_15、如何编写模块" tabindex="-1"><a class="header-anchor" href="#_15、如何编写模块" aria-hidden="true">#</a> 15、如何编写模块:</h3><ul><li><p>1.当前模块要写什么内容? :内容</p></li><li><p>2.这些代码是否用到外部的数据?：参数</p></li><li><p>3.是否依赖模块 ( 第三方模块、内置模块、文件模块)和一起自定义方法 ——&gt;简: 模块(函数)</p><p>配置模块: config.js :</p><ul><li>port</li><li>filename</li></ul><p>拓展模块: context.js</p><ul><li>req.method</li><li>res.ml_render</li></ul><p>路由模块: router.js</p><ul><li>记得 urlObj</li><li>一定要注意 内置模块, 别忘记加载 <ul><li>把业务数据模块都引进来,后面提出去</li></ul></li></ul><p>业务模块: handler.js</p><ul><li>module.exports.index = function(req,res) {...}</li></ul><p>数据操作模块:</p><p>服务模块: app.js</p></li></ul><h3 id="_16、express-模块" tabindex="-1"><a class="header-anchor" href="#_16、express-模块" aria-hidden="true">#</a> 16、Express 模块</h3><h4 id="_1-基本步骤" tabindex="-1"><a class="header-anchor" href="#_1-基本步骤" aria-hidden="true">#</a> 1. 基本步骤</h4><pre><code>- 安装:   npm i express -S    // 安装之前: 先npm init -y 初始化 package.json 文件
- 加载:   var express = require(&#39;express&#39;)
- 实例:   var app = express()      // 实例化 express 对象
- 使用:   app.get()/app.use()/app.all() …. App.listen()
</code></pre><h4 id="_2-演示案例" tabindex="-1"><a class="header-anchor" href="#_2-演示案例" aria-hidden="true">#</a> 2. 演示案例</h4><h5 id="_1-加载-express" tabindex="-1"><a class="header-anchor" href="#_1-加载-express" aria-hidden="true">#</a> 1. 加载 express</h5><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>    var express = require(&#39;express&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_2-实例" tabindex="-1"><a class="header-anchor" href="#_2-实例" aria-hidden="true">#</a> 2. 实例</h5><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>    var app = express();   //  (类似于创建一个 server 对象)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_3-使用" tabindex="-1"><a class="header-anchor" href="#_3-使用" aria-hidden="true">#</a> 3. 使用</h5><ul><li>参数 1: 路径</li><li>参数 2: 回调函数</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&#39;Hello world&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 开启服务器</span>
app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8080</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;服务器开启了 http://localhost:8080&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-res-send-和-res-end-的异同" tabindex="-1"><a class="header-anchor" href="#_3-res-send-和-res-end-的异同" aria-hidden="true">#</a> 3. res.send() 和 res.end() 的异同 ?</h4><ul><li>相同点: 都能够结束响应,把内容响应给浏览器</li><li>不同点:</li></ul><h5 id="_1-send-不乱码" tabindex="-1"><a class="header-anchor" href="#_1-send-不乱码" aria-hidden="true">#</a> 1.send () 不乱码:</h5><ul><li>res.send() 参数可以是 a Buffer object、a String , 还有 an object、an Array</li></ul><h5 id="_2-参数类型不同" tabindex="-1"><a class="header-anchor" href="#_2-参数类型不同" aria-hidden="true">#</a> 2.参数类型不同:</h5><ul><li><p>res.send() 参数可以是 a Buffer object、a String , 还有 an object、an Array</p></li><li><p>res.end() 参数类型只能是: Buffer 或者 String</p><p>总结: 以后在 express 推荐使用: send() 发送 HTTP 响应;</p></li></ul><h4 id="_4-res-的其他几个常用的方法" tabindex="-1"><a class="header-anchor" href="#_4-res-的其他几个常用的方法" aria-hidden="true">#</a> 4. res 的其他几个常用的方法</h4><h5 id="res-redirect-status-path-重定向" tabindex="-1"><a class="header-anchor" href="#res-redirect-status-path-重定向" aria-hidden="true">#</a> res.redirect([status,] path) : 重定向</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>res<span class="token punctuation">.</span><span class="token function">redirect</span><span class="token punctuation">(</span><span class="token string">&#39;https://www.baidu.com&#39;</span><span class="token punctuation">)</span>
res<span class="token punctuation">.</span><span class="token function">redirect</span><span class="token punctuation">(</span><span class="token number">301</span><span class="token punctuation">,</span> <span class="token string">&#39;https://www.baidu.com&#39;</span><span class="token punctuation">)</span>
<span class="token comment">//之前的</span>
res<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">301</span><span class="token punctuation">,</span> <span class="token string">&#39;Moved Permanently&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">Location</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="res-sendfile-path-options-fn-读取文件" tabindex="-1"><a class="header-anchor" href="#res-sendfile-path-options-fn-读取文件" aria-hidden="true">#</a> res.sendFile(path [, options]_[, fn]) 读取文件</h5><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>
    // 以前 : 读取文件并响应
      fs.readFile(path.join(__dirname,&#39;./index.html&#39;),function (err,data) {
    if (err) {
      throw err
    }
    res.end(data);
      })

    // 现在 :
    // 2.1 不需要回调函数 直接展示页面
    res.sendFile(path.join(__dirname,&#39;./demo.html&#39;))
    // 2.2 需要回调函数
    res.sendFile(path.join(__dirname,&#39;./demo.html&#39;),function (err) {
    if (err) {
      throw err
    }
    console.log(&#39;ok&#39;)
      })
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="res-status-设置状态" tabindex="-1"><a class="header-anchor" href="#res-status-设置状态" aria-hidden="true">#</a> res.status() : 设置状态</h5><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>    res.status(404).send(&#39;文件不存在！&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_5-express-中注册路由的方法" tabindex="-1"><a class="header-anchor" href="#_5-express-中注册路由的方法" aria-hidden="true">#</a> 5. Express 中注册路由的方法</h4><h5 id="方法一-app-method-类型固定-路径完全匹配" tabindex="-1"><a class="header-anchor" href="#方法一-app-method-类型固定-路径完全匹配" aria-hidden="true">#</a> 方法一 : app.METHOD()类型固定,路径完全匹配</h5><ol><li>基本用法</li></ol><ul><li>Method 是一个 http 请求方法: 例如: get / post / put / delete 等等 - 1. 请求方式固定 - 2. 路径完全匹配</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 参数1: 路径</span>
<span class="token comment">// 参数2: callback 回调</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/index&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;index&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="方法二-app-use-—-中间件一般与这个配合使用" tabindex="-1"><a class="header-anchor" href="#方法二-app-use-—-中间件一般与这个配合使用" aria-hidden="true">#</a> 方法二 : app.use() — (中间件一般与这个配合使用)</h5><ul><li><p>开头是: /index 就匹配</p></li><li><p>任意类型,路径开始相同就匹配</p><ul><li><ol><li>在进行路由匹配的时候,不限定方法,什么请求方法都可以</li></ol></li><li><ol start="2"><li>请求路径的第一部分只要与 /index 相等即可,,,并不要求请求路径 ( pathname ) 完全匹配</li></ol></li></ul></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&#39;/index&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;hello 你好世界&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="方法三-app-all" tabindex="-1"><a class="header-anchor" href="#方法三-app-all" aria-hidden="true">#</a> 方法三 : app.all()</h5><ul><li><p>任意类型, 路径完全匹配</p><ul><li><ol><li>不限定请求方法;</li></ol></li><li><ol start="2"><li>请求路径的 pathname 必须完全匹配;</li></ol></li></ul></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token string">&#39;/index&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;index&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-express-处理静态资源" tabindex="-1"><a class="header-anchor" href="#_6-express-处理静态资源" aria-hidden="true">#</a> 6. Express 处理静态资源</h4><h5 id="_1-使用-express-按照以前的逻辑写" tabindex="-1"><a class="header-anchor" href="#_1-使用-express-按照以前的逻辑写" aria-hidden="true">#</a> 1.使用 express 按照以前的逻辑写:</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//3. 注册路由</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">sendFile</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./demo.html&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// if(req.url.startWith(&#39;/public)) { 拼接路径 返回绝对路径的文件 }</span>

<span class="token comment">// 处理静态资源</span>
<span class="token comment">//app.use(path,callback)  //use 请求路径的第一部分只要与 path 路径匹配即可</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&#39;/public&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">sendFile</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./public/demo.css&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 是异步的</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-使用-express-的内置模块-express-static" tabindex="-1"><a class="header-anchor" href="#_2-使用-express-的内置模块-express-static" aria-hidden="true">#</a> 2.使用 express 的内置模块 express.static</h5><ul><li>通过 Express 内置的 express.static 可以方便地托管静态文件，例如图片、CSS、JavaScript 文件等。</li><li>将<code>静态资源文件所在的目录</code>作为参数传递给 <code>express.static 中间件</code>,就可以提供静态资源文件的访问了。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    href<span class="token operator">=</span><span class="token string">&quot;./public/demo.css&quot;</span>     src<span class="token operator">=</span><span class="token string">&quot;./public/dog.jpg&quot;</span>


    <span class="token comment">// 因为1 express.static 是中间件 中间件也就是函数 所以,,可以替换后面的函数</span>
     <span class="token literal-property property">官网的话</span><span class="token operator">:</span>

     app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&#39;/public&#39;</span><span class="token punctuation">,</span>express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//因为2.上面说到\`静态资源文件所在的目录\`作为参数传,所以传目录</span>
    <span class="token comment">// 目录:</span>

    path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">&#39;./public&#39;</span><span class="token punctuation">)</span>
    app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&#39;/public&#39;</span><span class="token punctuation">,</span>express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">&#39;./public&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="额外补充" tabindex="-1"><a class="header-anchor" href="#额外补充" aria-hidden="true">#</a> 额外补充:</h5><pre><code>1. 例如:静态文件叫: demo.css
   - ./demo.css  —&gt; 请求路径的第一个部分是: /
   - ./public/demo.css  —&gt; 请求路径的第一个部分是: /public
2. express 中的 req.url 已经不是之前的那个了
   - /public/demo.css  —&gt; http的 req.url = /public/demo.css
   - /public/demo.css  —&gt; express的 req.url = /demo.css
</code></pre><h4 id="_7-express-的路由模块" tabindex="-1"><a class="header-anchor" href="#_7-express-的路由模块" aria-hidden="true">#</a> 7.Express 的路由模块</h4><ul><li>配置</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//创建 router.js</span>
module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">app</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;index&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/submit&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;submit&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// app.js 呢</span>
<span class="token keyword">var</span> router <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./router&#39;</span><span class="token punctuation">)</span>
<span class="token function">router</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>效果是能完成

但是这样暴露了 app, , app 是个对象,,,,可以随时改里面的东西, 很不安全，所以: 使用 express 自带的路由类: express.Router()
</code></pre><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//创建 router.js</span>
<span class="token comment">//1. 加载 express 和 router</span>
<span class="token keyword">var</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> router <span class="token operator">=</span> express<span class="token punctuation">.</span><span class="token function">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">//2. 配置 router</span>
router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;index&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/submit&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;submit&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//3. 导出 router</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> router

<span class="token comment">// app.js</span>
<span class="token keyword">var</span> router <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./router&#39;</span><span class="token punctuation">)</span> <span class="token comment">//加载</span>

<span class="token comment">// 路由 挂载到 app 上</span>
<span class="token comment">// app.use([path,] fn)</span>
<span class="token comment">// app.use(&#39;/&#39; fn)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="express-的读取页面和传值问题" tabindex="-1"><a class="header-anchor" href="#express-的读取页面和传值问题" aria-hidden="true">#</a> Express 的读取页面和传值问题??</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports<span class="token punctuation">.</span><span class="token function-variable function">index</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//1. 读取页面  正常读取网页没有问题</span>
  <span class="token comment">//2. 但是  无法传值</span>
  res<span class="token punctuation">.</span><span class="token function">sendFile</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./views/index.html&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> err
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">//2. res.render() 配合 ejs 这个模板引擎使用</span>
  res<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string">&#39;index&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39; 哈&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-express-中的-res-render-配合-ejs-模板引擎" tabindex="-1"><a class="header-anchor" href="#_8-express-中的-res-render-配合-ejs-模板引擎" aria-hidden="true">#</a> 8.Express 中的 res.render() 配合 ejs 模板引擎</h4><h5 id="一、使用后缀-ejs-模板的步骤" tabindex="-1"><a class="header-anchor" href="#一、使用后缀-ejs-模板的步骤" aria-hidden="true">#</a> 一、使用后缀.ejs 模板的步骤:</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token comment">//1. app.js 模块</span>
    <span class="token comment">//配置使用 ejs 模板引擎</span>
    <span class="token comment">// 配置 express 使用 ejs 引擎</span>
    <span class="token comment">// 配置模板引擎要放到正式处理请求之前,否则可能不能用</span>
    <span class="token comment">// 当使用 esj 模板引擎的时候,模板文件的后缀必须是 .ejs</span>
    <span class="token comment">//1. 安装 esj:</span>
       <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">npm i ejs -SD</span><span class="token template-punctuation string">\`</span></span>
    <span class="token comment">//2. 配置</span>
    <span class="token comment">//   - 告诉 express 模板文件的目录</span>
    <span class="token comment">//    + views 是固定的</span>
    <span class="token comment">//   - 告诉 express 要使用的模板引擎</span>
    app<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;views&#39;</span><span class="token punctuation">,</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">&#39;./views&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    app<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;view engine&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;ejs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//2. handler.js 模块  ---前提: 在 views 下创建一个 test.ejs 文件</span>
     <span class="token comment">// 测试 views/test.ejs 已经 ok</span>
      res<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39; 星哥&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">//3. test.ejs</span>
     <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">%=</span> name <span class="token operator">%</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="二、-使用后缀-html-的模板" tabindex="-1"><a class="header-anchor" href="#二、-使用后缀-html-的模板" aria-hidden="true">#</a> 二、 使用后缀 .html 的模板</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token comment">//1. app.js 模块</span>
    <span class="token comment">// 配置使用 ejs 模板引擎 , 修改默认查找的模板文件后缀为.html</span>
    <span class="token comment">//1. 设置模板文件的目录</span>
    app<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;views&#39;</span><span class="token punctuation">,</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">&#39;./views&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//2. 创建一个自己的模板引擎, 用来识别后缀是 html 的</span>
    <span class="token comment">// 把渲染 esj 的功能都交给渲染 html 后缀的模板引擎上</span>
    app<span class="token punctuation">.</span><span class="token function">engine</span><span class="token punctuation">(</span><span class="token string">&#39;html&#39;</span><span class="token punctuation">,</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;ejs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>renderFile<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//3. 使用模板引擎</span>
    app<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;view engine&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;html&#39;</span><span class="token punctuation">)</span>

    <span class="token comment">//2. handler.js 模板</span>
     <span class="token comment">//要把 .ejs 全部变为 .html 才可以啊</span>
      res<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string">&#39;test01&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">90</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">//3. test01.html  是 views 目录下创建的模板</span>
    <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">%=</span> age <span class="token operator">%</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_17-模板引擎-ejs" tabindex="-1"><a class="header-anchor" href="#_17-模板引擎-ejs" aria-hidden="true">#</a> 17.模板引擎 - ejs :</h3>`,201),u={href:"https://www.npmjs.com/package/ejs",target:"_blank",rel:"noopener noreferrer"},d=n("li",null,"说明: express 里可以渲染文件 res.sendFile(),,但是不能传值,所以放弃使用;",-1),v=a(`<h4 id="ejs-基本使用" tabindex="-1"><a class="header-anchor" href="#ejs-基本使用" aria-hidden="true">#</a> ejs 基本使用</h4><ul><li><ol><li>安装: npm i ejs -S</li></ol></li><li><ol start="2"><li>加载: var ejs = require(&#39;ejs&#39;)</li></ol></li><li><ol start="3"><li>使用: 官网提供:</li></ol></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token comment">// Example</span>
    <span class="token operator">&lt;</span><span class="token operator">%</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>user<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">%</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">%=</span> user<span class="token punctuation">.</span>name <span class="token operator">%</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">%</span> <span class="token punctuation">}</span> <span class="token operator">%</span><span class="token operator">&gt;</span>

    <span class="token comment">// Usage</span>
    <span class="token comment">// 方法一:(适用于 html 代码片段)</span>
    <span class="token keyword">var</span> template <span class="token operator">=</span> ejs<span class="token punctuation">.</span><span class="token function">compile</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">template</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 返回一个新的 html</span>
    <span class="token comment">// =&gt; Rendered HTML string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一" aria-hidden="true">#</a> 方法一:</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//html 片段</span>
<span class="token keyword">var</span> oldHtml <span class="token operator">=</span> <span class="token string">&#39;&lt;h1&gt;&lt;%= name %&gt;&lt;/h1&gt;&#39;</span>

<span class="token comment">//模板函数</span>
<span class="token keyword">var</span> template <span class="token operator">=</span> ejs<span class="token punctuation">.</span><span class="token function">compile</span><span class="token punctuation">(</span>oldHtml<span class="token punctuation">)</span>

<span class="token comment">//传值</span>
<span class="token keyword">var</span> newHtml <span class="token operator">=</span> <span class="token function">template</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;哈哈&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newHtml<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="方法二" tabindex="-1"><a class="header-anchor" href="#方法二" aria-hidden="true">#</a> 方法二:</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>ejs<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> data<span class="token punctuation">,</span> options<span class="token punctuation">)</span> <span class="token comment">// 返回一个新的 html</span>
<span class="token comment">// =&gt; Rendered HTML string</span>

<span class="token comment">//html 片段</span>
<span class="token keyword">var</span> oldHtml <span class="token operator">=</span> <span class="token string">&#39;&lt;h1&gt;&lt;%= name %&gt;&lt;/h1&gt;&#39;</span>

<span class="token comment">// 渲染并赋值</span>
<span class="token keyword">var</span> newHtml <span class="token operator">=</span> ejs<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>oldHtml<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;哈&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newHtml<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="方法三" tabindex="-1"><a class="header-anchor" href="#方法三" aria-hidden="true">#</a> 方法三:</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>ejs<span class="token punctuation">.</span><span class="token function">renderFile</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span> data<span class="token punctuation">,</span> options<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//str 就是新的 html</span>
  <span class="token comment">// str =&gt; Rendered HTML string</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">/// 方法四:</span>
ejs<span class="token punctuation">.</span><span class="token function">renderFile</span><span class="token punctuation">(</span>
  path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./index.html&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;这是标题&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39; 星哥&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span> <span class="token comment">// 新的 html</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>index.html 代码</li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  &lt;% for ( var i = 0;i &lt; 5; i++ ) { %&gt;

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>&lt;%= name %&gt;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>

  &lt;% } %&gt;
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>     xxxxxxxxxx <span class="token doc-comment comment">/** * 使用 ejs 后缀 */</span>
     <span class="token keyword">var</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span><span class="token keyword">var</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token comment">//1. 告诉程序 模板文件放在什么地方</span>

     app<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;views&#39;</span><span class="token punctuation">,</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">&#39;./Views&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

     <span class="token comment">//2.自定义自己的模板引擎</span>

     app<span class="token punctuation">.</span><span class="token function">engine</span><span class="token punctuation">(</span><span class="token string">&#39;html&#39;</span><span class="token punctuation">,</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;ejs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>renderFile<span class="token punctuation">)</span>

    <span class="token comment">//2. 使用引擎</span>

    app<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;view engine&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;html&#39;</span><span class="token punctuation">)</span>

    <span class="token comment">//注册路由</span>
    app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span>res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 直接写 views 下的文件名就可以</span>

    res<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string">&#39;demo&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39; 牛逼&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">//开启服务器</span>

    app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">9090</span><span class="token punctuation">,</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;开启了 http://localhost:9090&#39;</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_17-webpack-拓展-不要紧张" tabindex="-1"><a class="header-anchor" href="#_17-webpack-拓展-不要紧张" aria-hidden="true">#</a> 17. webpack (拓展) 不要紧张</h4><ul><li><p>4.1 隔行变色 --&gt; import (不能: 浏览器不识别) --&gt; webpack</p></li><li><p>4.2 全局 webpack : npm i webpack -g</p></li><li><p>4.3 webpack 要处理的文件 处理之后的文件</p></li><li><p>4.4 webpack + webpack.config.js</p></li></ul><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>    // entry :  要处理的文件

    entry: path.join(__dirname,&#39;./src/js/main.js&#39;);

    //output: 处理之后的文件

    output:{

      path:path.join(__dirname,&#39;./dist&#39;),

      filename:&#39;bundle.js&#39;

    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>4.5 实时构建

安装:  npm  i webpack-dev-server webpack -S

配置:  package.json --&gt; &quot;dev&quot;:&quot;webpack-dev-server&quot;

用: npm  run dev

--contentBase src : 进入到 src 文件目录下

--open   自动打开浏览器

bundle.js 放到 根目录下,, src=&#39;bundle.js&#39;

4.6 html 放到内内存中

//1. 快

//2. bundle.js 不需要我们引入

安装:  npm  i html-webpack-plugin -S

加载: var htmlwebpackplugin =  require(&#39;html-webpack-plugin&#39;);

配置:
</code></pre><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>    webpack.config.js

    plugins:[

      new  htmlwebpackplugin({

    template:path.join(__dirnam,&#39;./src/index.html&#39;), // 来源
    filename:&#39;index.html&#39;   //内存中的名字

      })

    ]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18);function k(m,h){const e=i("ExternalLinkIcon");return p(),c("div",null,[r,n("ul",null,[n("li",null,[s("esj "),n("a",u,[s("官网"),l(e)])]),d]),v])}const f=t(o,[["render",k],["__file","Node.html.vue"]]);export{f as default};
