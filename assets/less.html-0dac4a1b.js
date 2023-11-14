import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-f32a210c.js";const p={},e=t(`<h4 id="_1-定义变量" tabindex="-1"><a class="header-anchor" href="#_1-定义变量" aria-hidden="true">#</a> 1.定义变量</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>    @color：red；
    @container：1280px
    //定义变量  不会被解析到css文件的注释
    <span class="token comment">/*头部区域*/</span>  <span class="token selector">会被解析的css文件的注释
    body</span><span class="token punctuation">{</span>
    background-color：@color；
    color：@color；
    width：@container；
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-嵌套语法" tabindex="-1"><a class="header-anchor" href="#_2-嵌套语法" aria-hidden="true">#</a> 2.嵌套语法</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>    <span class="token selector">.father</span><span class="token punctuation">{</span>
    <span class="token property">widht</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
    height<span class="token punctuation">;</span>100px<span class="token punctuation">;</span>
    <span class="token selector">.son1</span><span class="token punctuation">{</span>
    <span class="token property">widht</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
    height<span class="token punctuation">;</span>100px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">&gt;.son2</span><span class="token punctuation">{</span>
    <span class="token property">widht</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
    height<span class="token punctuation">;</span>100px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">//&amp;在less里面代表元素本身
    &amp;:hover</span><span class="token punctuation">{</span>
    background-color：blue<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">&amp;:before</span><span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    <span class="token property">widht</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
    height<span class="token punctuation">;</span>100px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-mixin-混入" tabindex="-1"><a class="header-anchor" href="#_3-mixin-混入" aria-hidden="true">#</a> 3.mixin 混入</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.fl</span> <span class="token punctuation">{</span>
  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.fr</span> <span class="token punctuation">{</span>
  <span class="token property">float</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">//混入函数（无参数）
//不会被编译
.btn_base()</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
//加了括号，css里面不会将这个类编译进去，但是可以调用
//不加括号，可以调用同时会进行编译
//可以支持传递参数
//并且可以设置默认值

&lt;!--混入函数，带参数-- &gt; .btn_<span class="token function">border</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@width</span><span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> <span class="token atrule"><span class="token rule">@width</span> solid #000<span class="token punctuation">;</span></span>
<span class="token punctuation">}</span>
<span class="token selector">.btn</span> <span class="token punctuation">{</span>
  .btn_<span class="token function">border</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> //报错
  .btn_<span class="token function">border</span><span class="token punctuation">(</span>10px<span class="token punctuation">)</span><span class="token punctuation">;</span> //不报错
<span class="token punctuation">}</span>

<span class="token selector">.one-txt-cut()</span> <span class="token punctuation">{</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
  <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.box</span> <span class="token punctuation">{</span>
  .<span class="token function">fl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  .<span class="token function">one-txt-cut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  .<span class="token function">border-dadius</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-导入" tabindex="-1"><a class="header-anchor" href="#_4-导入" aria-hidden="true">#</a> 4.导入</h4><pre><code>\`\`\`css
@import &quot;base.less&quot;;//引入base模块
@import &quot;header.less&quot;;//引入header模块
@import &quot;nav.less&quot;;//引入nav模块
@import &quot;footer.less&quot;;//引入footer模块
\`\`\`
</code></pre><h4 id="_5-less-运算" tabindex="-1"><a class="header-anchor" href="#_5-less-运算" aria-hidden="true">#</a> 5.less 运算</h4><p>运算：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%/6<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 500px * 2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
.<span class="token function">col</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@num</span><span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token property">widht</span><span class="token punctuation">:</span> 100%/12 * <span class="token atrule"><span class="token rule">@num</span><span class="token punctuation">;</span></span>
<span class="token punctuation">}</span>
<span class="token selector">.col-1</span> <span class="token punctuation">{</span>
  .<span class="token function">col</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-rem" tabindex="-1"><a class="header-anchor" href="#_6-rem" aria-hidden="true">#</a> 6.rem</h4><p><strong>em 是一个相对单位，相对的是当前这个盒子本身的 font-size 大小</strong></p><p><strong>rem 是一个相对单位，相对的是 html 的字体大小</strong></p><p>Rem 的宽高自适应原理： 所有的 rem 单位都是基于 html 的字体大小，在不同的屏 幕下面，修改 html 的字体大小就可以实现自适应效果。</p><p>Rem 计算公式：设计图的大小/自己自定义的 html 的 font-size=改变后的屏幕大小/这个屏幕对应的 font-size 值；</p><p>https://github.com/Maroon1/px2rem</p><h4 id="_7、函数" tabindex="-1"><a class="header-anchor" href="#_7、函数" aria-hidden="true">#</a> 7、函数</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>    <span class="token function">escape</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@string</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span> // 通过 URL-encoding 编码字符串

    <span class="token function">e</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@string</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span> // 对字符串转义

    %<span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@string</span><span class="token punctuation">,</span> values...<span class="token punctuation">)</span><span class="token punctuation">;</span></span> // 格式化字符串

    <span class="token function">unit</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@dimension</span><span class="token punctuation">,</span> [<span class="token atrule"><span class="token rule">@unit</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span>]<span class="token punctuation">)</span><span class="token punctuation">;</span></span></span> // 移除或替换属性值的单位

    <span class="token function">color</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@string</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span> // 将字符串解析为颜色值

    <span class="token function">color</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span><span class="token punctuation">;</span> // 将字符串或者转义后的值转换成颜色

    <span class="token function">data-uri</span><span class="token punctuation">(</span>[mimetype<span class="token punctuation">,</span>] url<span class="token punctuation">)</span><span class="token punctuation">;</span> // * 将资源内嵌到css中，可能回退到<span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>

    <span class="token function">ceil</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@number</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span> // 向上取整

    <span class="token function">floor</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@number</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span> // 向下取整

    <span class="token function">percentage</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@number</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span> // 将数字转换为百分比，例如 0.5 -&gt; 50%

    <span class="token function">round</span><span class="token punctuation">(</span>number<span class="token punctuation">,</span> [<span class="token property">places</span><span class="token punctuation">:</span> 0]<span class="token punctuation">)</span><span class="token punctuation">;</span> // 四舍五入取整

    <span class="token function">sqrt</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span><span class="token punctuation">;</span> // * 计算数字的平方根

    <span class="token function">abs</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span><span class="token punctuation">;</span> // * 数字的绝对值

    <span class="token function">sin</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span><span class="token punctuation">;</span> // * sin函数

    <span class="token function">asin</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span><span class="token punctuation">;</span> // *

    arcsin函数

    <span class="token function">cos</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span><span class="token punctuation">;</span> // * cos函数

    <span class="token function">acos</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span><span class="token punctuation">;</span> // *

    arccos函数

    <span class="token function">tan</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span><span class="token punctuation">;</span> // * tan函数

    <span class="token function">atan</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span><span class="token punctuation">;</span> // *

    arctan函数

    <span class="token function">pi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> // * 返回PI

    <span class="token function">pow</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@base</span><span class="token punctuation">,</span> <span class="token atrule"><span class="token rule">@exponent</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span></span> // * 返回<span class="token atrule"><span class="token rule">@base</span>的<span class="token atrule"><span class="token rule">@exponent</span>次方

    <span class="token function">mod</span><span class="token punctuation">(</span>number<span class="token punctuation">,</span> number<span class="token punctuation">)</span><span class="token punctuation">;</span></span></span> // * 第一个参数对第二个参数取余

    <span class="token function">convert</span><span class="token punctuation">(</span>number<span class="token punctuation">,</span> units<span class="token punctuation">)</span><span class="token punctuation">;</span> // * 在数字之间转换

    <span class="token function">unit</span><span class="token punctuation">(</span>number<span class="token punctuation">,</span> units<span class="token punctuation">)</span><span class="token punctuation">;</span> // * 不转换的情况下替换数字的单
    位

    <span class="token function">rgb</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@r</span><span class="token punctuation">,</span> <span class="token atrule"><span class="token rule">@g</span><span class="token punctuation">,</span> <span class="token atrule"><span class="token rule">@b</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span></span></span> // 转换为颜色值

    <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@r</span><span class="token punctuation">,</span> <span class="token atrule"><span class="token rule">@g</span><span class="token punctuation">,</span> <span class="token atrule"><span class="token rule">@b</span><span class="token punctuation">,</span> <span class="token atrule"><span class="token rule">@a</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span></span></span></span> // 转换为颜色值

    <span class="token function">argb</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@color</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span> // 创建 #AARRGGBB 格式的颜色值

    <span class="token function">hsl</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@hue</span><span class="token punctuation">,</span> <span class="token atrule"><span class="token rule">@saturation</span><span class="token punctuation">,</span> <span class="token atrule"><span class="token rule">@lightness</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span></span></span> // 创建颜色值

    <span class="token function">hsla</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@hue</span><span class="token punctuation">,</span> <span class="token atrule"><span class="token rule">@saturation</span><span class="token punctuation">,</span> <span class="token atrule"><span class="token rule">@lightness</span><span class="token punctuation">,</span> <span class="token atrule"><span class="token rule">@alpha</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span></span></span></span> // 创建颜色值

    <span class="token function">hsv</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@hue</span><span class="token punctuation">,</span> <span class="token atrule"><span class="token rule">@saturation</span><span class="token punctuation">,</span> <span class="token atrule"><span class="token rule">@value</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span></span></span> // 创建颜色值

    <span class="token function">hsva</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@hue</span><span class="token punctuation">,</span> <span class="token atrule"><span class="token rule">@saturation</span><span class="token punctuation">,</span> <span class="token atrule"><span class="token rule">@value</span><span class="token punctuation">,</span> <span class="token atrule"><span class="token rule">@alpha</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span></span></span></span> // 创建颜色值

    <span class="token function">hue</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@color</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span> // 从颜色值中提取 hue 值（色相）

    <span class="token function">saturation</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@color</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span> // 从颜色值中提取 saturation 值（饱和度）

    <span class="token function">lightness</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@color</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span> // 从颜色值中提取 <span class="token string">&#39;lightness&#39;</span> 值（亮度）
    <span class="token function">hsvhue</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@color</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span> // * 从颜色中提取 hue 值，以HSV色彩空间表示（色相）

    <span class="token function">hsvsaturation</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@color</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span> // * 从颜色中提取 saturation 值，以HSV色彩空间表示（饱和度）

    <span class="token function">hsvvalue</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@color</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span> // * 从颜色中提取 value 值，以HSV色彩空间表示（色调）

    <span class="token function">red</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@color</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span> // 从颜色值中提取 <span class="token string">&#39;red&#39;</span> 值（红色）

    <span class="token function">green</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@color</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span> // 从颜色值中提取 <span class="token string">&#39;green&#39;</span> 值（绿色）

    <span class="token function">blue</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@color</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span> // 从颜色值中提取 <span class="token string">&#39;blue&#39;</span> 值（蓝色）

    <span class="token function">alpha</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@color</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span> // 从颜色值中提取 <span class="token string">&#39;alpha&#39;</span> 值（透明度）

    <span class="token function">luma</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@color</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span> // 从颜色值中提取 <span class="token string">&#39;luma&#39;</span> 值（亮度的百分比表示法）

    <span class="token function">saturate</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@color</span><span class="token punctuation">,</span> 10%<span class="token punctuation">)</span><span class="token punctuation">;</span></span> // 饱和度增加 10%

    <span class="token function">desaturate</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@color</span><span class="token punctuation">,</span> 10%<span class="token punctuation">)</span><span class="token punctuation">;</span></span> // 饱和度降低 10%

    <span class="token function">lighten</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@color</span><span class="token punctuation">,</span> 10%<span class="token punctuation">)</span><span class="token punctuation">;</span></span> // 亮度增加 10%

    <span class="token function">darken</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@color</span><span class="token punctuation">,</span> 10%<span class="token punctuation">)</span><span class="token punctuation">;</span></span> // 亮度降低 10%

    <span class="token function">fadein</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@color</span><span class="token punctuation">,</span> 10%<span class="token punctuation">)</span><span class="token punctuation">;</span></span> // 透明度增加 10%

    <span class="token function">fadeout</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@color</span><span class="token punctuation">,</span> 10%<span class="token punctuation">)</span><span class="token punctuation">;</span></span> // 透明度降低 10%

    <span class="token function">fade</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@color</span><span class="token punctuation">,</span> 50%<span class="token punctuation">)</span><span class="token punctuation">;</span></span> // 设定透明度为 50%

    <span class="token function">spin</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@color</span><span class="token punctuation">,</span> 10<span class="token punctuation">)</span><span class="token punctuation">;</span></span> // 色相值增加 10

    <span class="token function">mix</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@color1</span><span class="token punctuation">,</span> <span class="token atrule"><span class="token rule">@color2</span><span class="token punctuation">,</span> [<span class="token atrule"><span class="token rule">@weight</span><span class="token punctuation">:</span> 50%]<span class="token punctuation">)</span><span class="token punctuation">;</span></span></span></span> // 混合两种颜色

    <span class="token function">greyscale</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@color</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span> // 完全移除饱和度，输出灰色

    <span class="token function">contrast</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@color1</span><span class="token punctuation">,</span>
    [<span class="token atrule"><span class="token rule">@darkcolor</span><span class="token punctuation">:</span> black]<span class="token punctuation">,</span>
    [<span class="token atrule"><span class="token rule">@lightcolor</span><span class="token punctuation">:</span> white]<span class="token punctuation">,</span>
    [<span class="token atrule"><span class="token rule">@threshold</span><span class="token punctuation">:</span> 43%]<span class="token punctuation">)</span><span class="token punctuation">;</span></span></span></span></span>
    // 如果 <span class="token atrule"><span class="token rule">@color1</span> 的 luma 值 &gt; 43% 输出 <span class="token atrule"><span class="token rule">@darkcolor</span>，
    否则输出 <span class="token atrule"><span class="token rule">@lightcolor</span>

    <span class="token function">multiply</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@color1</span><span class="token punctuation">,</span> <span class="token atrule"><span class="token rule">@color2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span></span></span></span></span>
    <span class="token function">screen</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@color1</span><span class="token punctuation">,</span> <span class="token atrule"><span class="token rule">@color2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span></span>
    <span class="token function">overlay</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@color1</span><span class="token punctuation">,</span> <span class="token atrule"><span class="token rule">@color2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span></span>
    <span class="token function">softlight</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@color1</span><span class="token punctuation">,</span> <span class="token atrule"><span class="token rule">@color2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span></span>
    <span class="token function">hardlight</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@color1</span><span class="token punctuation">,</span> <span class="token atrule"><span class="token rule">@color2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span></span>
    <span class="token function">difference</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@color1</span><span class="token punctuation">,</span> <span class="token atrule"><span class="token rule">@color2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span></span>
    <span class="token function">exclusion</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@color1</span><span class="token punctuation">,</span> <span class="token atrule"><span class="token rule">@color2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span></span>
    <span class="token function">average</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@color1</span><span class="token punctuation">,</span> <span class="token atrule"><span class="token rule">@color2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span></span>
    <span class="token function">negation</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@color1</span><span class="token punctuation">,</span> <span class="token atrule"><span class="token rule">@color2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span></span>
    <span class="token function">iscolor</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@colorOrAnything</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span> // 判断一个值是否是颜色

    <span class="token function">isnumber</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@numberOrAnything</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span> // 判断一个值是否是数字（可含单位）

    <span class="token function">isstring</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@stringOrAnything</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span> // 判断一个值是否是字符串

    <span class="token function">iskeyword</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@keywordOrAnything</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span> // 判断一个值是否是关键字

    <span class="token function">isurl</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@urlOrAnything</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span> // 判断一个值是否是url

    <span class="token function">ispixel</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@pixelOrAnything</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span> // 判断一个值是否是以px为单位的数值

    <span class="token function">ispercentage</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@percentageOrAnything</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span> //
    判断一个值是否是百分数

    <span class="token function">isem</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@emOrAnything</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span> // 判断一个值是否是以em为单位的数值

    <span class="token function">isunit</span><span class="token punctuation">(</span><span class="token atrule"><span class="token rule">@numberOrAnything</span><span class="token punctuation">,</span> <span class="token string">&quot;rem&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span> // * 判断一个值是否是指定单位的
    数值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8、使用-less-js-编译" tabindex="-1"><a class="header-anchor" href="#_8、使用-less-js-编译" aria-hidden="true">#</a> 8、使用 less.js 编译</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--第一步，引入less文件--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet/less<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>01.less<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token comment">&lt;!--第二部：引入less.js文件--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>less.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>注意：这种方式必须在http协议下运行，因为本质上less.js是通过ajax请求了less文件，进行编译。

缺点：

1. 需要多引入一个less.js文件
2. 需要多一次http请求，file协议打开无效
3. 如果浏览器禁用了js，那么无法生效
4. 线上编译，可能出现短暂的css混乱
</code></pre>`,22),c=[e];function l(o,u){return s(),a("div",null,c)}const k=n(p,[["render",l],["__file","less.html.vue"]]);export{k as default};
