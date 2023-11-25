import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as c,c as i,a as e,b as n,d as s,e as r}from"./app-0080a928.js";const u={},d=r(`<h1 id="在输入框的光标处插入内容" tabindex="-1"><a class="header-anchor" href="#在输入框的光标处插入内容" aria-hidden="true">#</a> 在输入框的光标处插入内容</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//在光标处插入文字   field为文本框的DOM元素,value要插入的字符</span>
<span class="token keyword">function</span> <span class="token function">insertText</span><span class="token punctuation">(</span><span class="token parameter">field<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> startPos <span class="token operator">=</span> field<span class="token punctuation">.</span>selectionStart
  <span class="token keyword">const</span> endPos <span class="token operator">=</span> field<span class="token punctuation">.</span>selectionEnd
  <span class="token comment">// 保存光标所在处滚动高度</span>
  <span class="token keyword">const</span> restoreTop <span class="token operator">=</span> field<span class="token punctuation">.</span>scrollTop
  field<span class="token punctuation">.</span>value <span class="token operator">=</span>
    field<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> startPos<span class="token punctuation">)</span> <span class="token operator">+</span>
    value <span class="token operator">+</span>
    field<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>endPos<span class="token punctuation">,</span> field<span class="token punctuation">.</span>value<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
  field<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment">// 让文本域卷动高度保持在光标所在处</span>
  field<span class="token punctuation">.</span>scrollTop <span class="token operator">=</span> restoreTop
  field<span class="token punctuation">.</span>selectionStart <span class="token operator">=</span> startPos <span class="token operator">+</span> value<span class="token punctuation">.</span>length
  field<span class="token punctuation">.</span>selectionEnd <span class="token operator">=</span> startPos <span class="token operator">+</span> value<span class="token punctuation">.</span>length
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2>`,3),k=n("h2",{id:"说明",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#说明","aria-hidden":"true"},"#"),s(" 说明")],-1),v={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLTextAreaElement",target:"_blank",rel:"noopener noreferrer"},m=n("ul",null,[n("li",null,[n("p",null,[n("code",null,"selectionStart"),s("返回/设置所选文本开头的索引。如果未选择文本，则返回光标后面的字符的索引。")])]),n("li",null,[n("p",null,[n("code",null,"selectionEnd"),s("返回/设置所选文本结尾的索引。如果未选择文本，则返回光标后面的字符的索引。")])])],-1),h=n("p",null,"未选择文本，两个属性的值相同",-1);function _(t,f){const o=a("CodePen"),l=a("ExternalLinkIcon");return c(),i("div",null,[d,e(o,{link:"https://codepen.io/zhangfanhang/pen/QWrydNK",theme:t.$isDarkMode?"dark":"light"},null,8,["theme"]),k,n("p",null,[n("a",v,[s("HTMLTextAreaElement"),e(l)])]),m,h])}const x=p(u,[["render",_],["__file","在输入框的光标处插入内容.html.vue"]]);export{x as default};
