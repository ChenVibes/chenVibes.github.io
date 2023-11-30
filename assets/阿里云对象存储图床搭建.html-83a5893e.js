import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as a,e}from"./app-762bcd9b.js";const o={},t=e(`<h2 id="picgo-配置" tabindex="-1"><a class="header-anchor" href="#picgo-配置" aria-hidden="true">#</a> picgo 配置</h2><p>使用 <code>npm</code> 全局安装 <code>picgo</code>，终端输入 <code>picgo -v</code> 检查是否正确安装</p><p>到用户文件夹找到<code>.picgo </code>文件夹下的 <code>config.json</code>,写入:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>Picgo 阿里云配置
<span class="token punctuation">{</span>
  <span class="token property">&quot;picBed&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;uploader&quot;</span><span class="token operator">:</span> <span class="token string">&quot;aliyun&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;aliyun&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;accessKeyId&quot;</span><span class="token operator">:</span> <span class="token string">&quot;替换ID&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;accessKeySecret&quot;</span><span class="token operator">:</span> <span class="token string">&quot;替换Secret&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;bucket&quot;</span><span class="token operator">:</span> <span class="token string">&quot;zfh-oss&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 替换成你的Bucket名称</span>
    <span class="token property">&quot;area&quot;</span><span class="token operator">:</span> <span class="token string">&quot;oss-cn-shanghai&quot;</span><span class="token punctuation">,</span> <span class="token comment">// OSS管理界面EndPoint(地域节点的第一部分)</span>
    <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;docs-images/&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 上传路径</span>
     <span class="token property">&quot;customUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://填你的bucket名称.oss-cn-shanghai.aliyuncs.com&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="typora-配置" tabindex="-1"><a class="header-anchor" href="#typora-配置" aria-hidden="true">#</a> typora 配置</h2><p>设置-》图像-》上传服务器设定-》custom command-》命令：node 路径 + picgo 路径 + u</p><p>查看路径:终端输入<code>where node &amp;&amp;where picgo</code></p><p>所以我的自定义命令为：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/Users/frank/.nvm/versions/node/v16.14.2/bin/node /Users/frank/.nvm/versions/node/v16.14.2/bin/picgo u
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,9),p=[t];function c(i,r){return n(),a("div",null,p)}const d=s(o,[["render",c],["__file","阿里云对象存储图床搭建.html.vue"]]);export{d as default};
