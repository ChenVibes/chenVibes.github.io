import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as n,e}from"./app-a9815516.js";const i={},d=e(`<h2 id="边框" tabindex="-1"><a class="header-anchor" href="#边框" aria-hidden="true">#</a> 边框</h2><h3 id="边框的三要素" tabindex="-1"><a class="header-anchor" href="#边框的三要素" aria-hidden="true">#</a> 边框的三要素</h3><ul><li>border 属性</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">border</span><span class="token punctuation">:</span> 1px solid red //  线宽度 线型  线颜色 <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>线型</li></ul><ol><li>solid 实线</li><li>dashed 虚线</li><li>dotted 点状线</li></ol><ul><li>边框的三要素可以拆分为小属性</li></ul><ol><li>border-width 线宽</li><li>border-style 线型</li><li>border-color 线颜色</li></ol><h3 id="四个方向的边框" tabindex="-1"><a class="header-anchor" href="#四个方向的边框" aria-hidden="true">#</a> 四个方向的边框</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>border-top //上边框
......

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>同样，四个方向边框的三要素也可以拆分为小属性</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>border-top-width //上边框宽度
border-top-style //上边框线型
......
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>去掉边框</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">border-left</span><span class="token punctuation">:</span> none // 属性即可以去掉左边框，以此类推<span class="token punctuation">;</span><span class="token punctuation">;</span> <span class="token punctuation">;</span> <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>利用边框制作三角形</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token property">border-left</span><span class="token punctuation">:</span> 50px solid transparent<span class="token punctuation">;</span>
<span class="token property">border-right</span><span class="token punctuation">:</span> 50px solid transparent<span class="token punctuation">;</span>
<span class="token property">border-bottom</span><span class="token punctuation">:</span> 100px solid red<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>在给表格加边框时,消除边框之间的缝隙:</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">table</span> <span class="token punctuation">{</span>
  <span class="token property">border-collapse</span><span class="token punctuation">:</span> collapse<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="圆角" tabindex="-1"><a class="header-anchor" href="#圆角" aria-hidden="true">#</a> 圆角</h2><h3 id="border-radius-属性" tabindex="-1"><a class="header-anchor" href="#border-radius-属性" aria-hidden="true">#</a> border-radius 属性</h3><p>border-radius 属性的值通常为 px 单位。表示圆角的半径。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="单独设置四个圆角" tabindex="-1"><a class="header-anchor" href="#单独设置四个圆角" aria-hidden="true">#</a> 单独设置四个圆角</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">border-radius</span><span class="token punctuation">:</span> 10px 20px 30px 40px // 左上 右上 右下 左下 <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="也可以利用小属性单独设置四个圆角" tabindex="-1"><a class="header-anchor" href="#也可以利用小属性单独设置四个圆角" aria-hidden="true">#</a> 也可以利用小属性单独设置四个圆角</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>border-top-left-radius //左上角
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="百分比为单位" tabindex="-1"><a class="header-anchor" href="#百分比为单位" aria-hidden="true">#</a> 百分比为单位</h3><p>border-radius 属性的值也可以用百分比做单位，表示圆角起始于每条边的哪里。</p><h3 id="正圆形" tabindex="-1"><a class="header-anchor" href="#正圆形" aria-hidden="true">#</a> 正圆形</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="盒子阴影" tabindex="-1"><a class="header-anchor" href="#盒子阴影" aria-hidden="true">#</a> 盒子阴影</h2><h3 id="box-shadow-属性" tabindex="-1"><a class="header-anchor" href="#box-shadow-属性" aria-hidden="true">#</a> box-shadow 属性</h3><p>box-shadow 属性用来实现盒子的阴影</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">box-shadow</span><span class="token punctuation">:</span> 10px 20px 30px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.4<span class="token punctuation">)</span><span class="token punctuation">;</span>
// x偏移，y偏移，模糊量，颜色
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="阴影延展" tabindex="-1"><a class="header-anchor" href="#阴影延展" aria-hidden="true">#</a> 阴影延展</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">box-shadow</span><span class="token punctuation">:</span> 10px 20px 30px 40px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.4<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="内阴影" tabindex="-1"><a class="header-anchor" href="#内阴影" aria-hidden="true">#</a> 内阴影</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">box-shadow</span><span class="token punctuation">:</span> inset 10px 20px 30px 40px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.4<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="多阴影" tabindex="-1"><a class="header-anchor" href="#多阴影" aria-hidden="true">#</a> 多阴影</h3><p>box-shadow 属性值可以用逗号隔开多个，表示携带多个阴影</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">box-shadow</span><span class="token punctuation">:</span> 10px 20px 30px 40px blue<span class="token punctuation">,</span> 10px 20px 100px 40px green<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,40),c=[d];function t(l,p){return a(),n("div",null,c)}const u=s(i,[["render",t],["__file","边框圆角与盒子阴影.html.vue"]]);export{u as default};
