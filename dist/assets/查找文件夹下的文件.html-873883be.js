import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-4bddcd1f.js";const p={},e=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> fs <span class="token keyword">from</span> <span class="token string">&#39;fs&#39;</span>
<span class="token keyword">import</span> path <span class="token keyword">from</span> <span class="token string">&#39;path&#39;</span>
<span class="token comment">// 读取内容目录中的文件列表</span>
<span class="token keyword">function</span> <span class="token function">readDir</span><span class="token punctuation">(</span><span class="token parameter">dir<span class="token punctuation">,</span> depth</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> files <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readdirSync</span><span class="token punctuation">(</span>dir<span class="token punctuation">)</span> <span class="token comment">// 读取文件夹中的所有内容</span>
  <span class="token keyword">const</span> folderName <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">basename</span><span class="token punctuation">(</span>dir<span class="token punctuation">)</span>
  <span class="token keyword">const</span> folderItem <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> folderName<span class="token punctuation">,</span>
    <span class="token literal-property property">prefix</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>folderName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;pen-to-square&#39;</span><span class="token punctuation">,</span>
    depth<span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>depth <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    folderItem<span class="token punctuation">.</span>text <span class="token operator">=</span> <span class="token string">&#39;博文&#39;</span>
    folderItem<span class="token punctuation">.</span>prefix <span class="token operator">=</span> <span class="token string">&#39;/zh&#39;</span> <span class="token operator">+</span> folderItem<span class="token punctuation">.</span>prefix
  <span class="token punctuation">}</span>
  files<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">file</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> filePath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>dir<span class="token punctuation">,</span> file<span class="token punctuation">)</span> <span class="token comment">// 获取文件的完整路径</span>
    <span class="token keyword">const</span> stat <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">statSync</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span> <span class="token comment">// 判断文件是否是一个文件夹</span>
    depth<span class="token operator">++</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>stat<span class="token punctuation">.</span><span class="token function">isDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> item <span class="token operator">=</span> <span class="token function">readDir</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span>
      item<span class="token punctuation">.</span>prefix <span class="token operator">+=</span> <span class="token string">&#39;/&#39;</span>
      item<span class="token punctuation">.</span>depth <span class="token operator">=</span> depth
      folderItem<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token comment">// 递归处理子文件夹 // 如果是一个文件夹，继续递归遍历子文件夹</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// 根据你的要求修改名字</span>
      <span class="token keyword">let</span> newName <span class="token operator">=</span> file<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\d{4}-\\d{2}-\\d{2}-</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;newName&#39;</span><span class="token punctuation">,</span> newName<span class="token punctuation">]</span><span class="token punctuation">)</span>
      fs<span class="token punctuation">.</span><span class="token function">rename</span><span class="token punctuation">(</span>filePath<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>dir<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>newName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;失败: &#39;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token comment">// 读取文件内容</span>
      <span class="token keyword">const</span> fileText <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>filePath<span class="token punctuation">,</span> <span class="token string">&#39;utf8&#39;</span><span class="token punctuation">)</span>
      <span class="token keyword">let</span> newReplaceContent <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
      <span class="token keyword">let</span> replaceContent <span class="token operator">=</span> fileText<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">---[\\s\\S]*?---</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>replaceContent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        replaceContent <span class="token operator">=</span> replaceContent<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
        <span class="token keyword">const</span> date <span class="token operator">=</span> replaceContent<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">date:\\s*(\\d{4}-\\d{2}-\\d{2})</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span>
        <span class="token keyword">let</span> tag <span class="token operator">=</span> replaceContent<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">tags:\\s*([\\s\\S]*?)\\n</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span>
        <span class="token keyword">let</span> tagContent <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">tag:</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">+</span> <span class="token string">&#39;\\n&#39;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>tag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          tag <span class="token operator">=</span> <span class="token punctuation">(</span>tag<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;,&#39;</span><span class="token punctuation">)</span>
          tag<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">v</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            tagContent <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">  -</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">+</span> v
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        newReplaceContent <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">---
        icon: pen-to-square
        date: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>date<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
        category:
          - </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>folderItem<span class="token punctuation">.</span>text<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
        </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>tagContent<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
        ---</span><span class="token template-punctuation string">\`</span></span>
      <span class="token punctuation">}</span>
      <span class="token comment">// 替换文件内容</span>
      <span class="token keyword">const</span> newFileText <span class="token operator">=</span> fileText<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">---[\\s\\S]*?---</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> newReplaceContent<span class="token punctuation">)</span>

      <span class="token comment">// 写回文件</span>
      fs<span class="token punctuation">.</span><span class="token function">writeFileSync</span><span class="token punctuation">(</span>filePath<span class="token punctuation">,</span> newFileText<span class="token punctuation">)</span>

      <span class="token keyword">const</span> fileName <span class="token operator">=</span> file<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&#39;.md&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> fileItem <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> fileName<span class="token punctuation">,</span>
        <span class="token literal-property property">link</span><span class="token operator">:</span> fileName<span class="token punctuation">,</span>
        depth
      <span class="token punctuation">}</span>
      folderItem<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>fileItem<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> folderItem
<span class="token punctuation">}</span>

<span class="token function">readDir</span><span class="token punctuation">(</span><span class="token string">&#39;./src/posts&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","查找文件夹下的文件.html.vue"]]);export{k as default};
