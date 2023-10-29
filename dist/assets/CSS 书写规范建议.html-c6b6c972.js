import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as a,e as s}from"./app-4688a70d.js";const i={},l=s(`<blockquote><p>我觉得不同的规范都有各自的长处与缺陷，对待所谓的规范最好的方式不是人云亦云，拿来就用，而是应该结合实际情况及需求，取长补短，取其精华去其糟粕。</p></blockquote><h2 id="编码设置" tabindex="-1"><a class="header-anchor" href="#编码设置" aria-hidden="true">#</a> 编码设置</h2><p>采用 <code>UTF-8</code> 编码，在 CSS 代码头部使用：</p><div class="language-CSS line-numbers-mode" data-ext="CSS"><pre class="language-CSS"><code>@charset &quot;utf-8&quot;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意，必须要定义在 CSS 文件<strong>所有字符的前面</strong>（包括编码注释），<code>@charset</code> 才会生效。</p><p>例如，下面的例子都会使得 <code>@charset</code> 失效：</p><div class="language-CSS line-numbers-mode" data-ext="CSS"><pre class="language-CSS"><code>/* 字符编码 */
@charset &quot;utf-8&quot;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-CSS line-numbers-mode" data-ext="CSS"><pre class="language-CSS"><code>html,
body {
  height: 100%;
}

@charset &quot;utf-8&quot;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="命名空间规范" tabindex="-1"><a class="header-anchor" href="#命名空间规范" aria-hidden="true">#</a> 命名空间规范</h2><ul><li>布局：以 g 为命名空间，例如：.g-wrap 、.g-header、.g-content。</li><li>状态：以 s 为命名空间，表示动态的、具有交互性质的状态，例如：.s-current、s-selected。</li><li>工具：以 u 为命名空间，表示不耦合业务逻辑的、可复用的的工具，例如：u-clearfix、u-ellipsis。</li><li>组件：以 m 为命名空间，表示可复用、移植的组件模块，例如：m-slider、m-dropMenu。</li><li>钩子：以 j 为命名空间，表示特定给 JavaScript 调用的类名，例如：j-request、j-open。</li></ul><h4 id="命名空间思想" tabindex="-1"><a class="header-anchor" href="#命名空间思想" aria-hidden="true">#</a> 命名空间思想</h4><p>没有选择 <code>BEM</code> 这种命名过于严苛及样式名过长过丑的规则，采取了一种比较折中的方案。</p><h4 id="不建议使用下划线-进行连接" tabindex="-1"><a class="header-anchor" href="#不建议使用下划线-进行连接" aria-hidden="true">#</a> 不建议使用下划线 _ 进行连接</h4><ul><li>节省操作，输入的时候少按一个 <code>shift</code> 键</li><li>能良好区分 JavaScript 变量命名</li></ul><h4 id="字符小写" tabindex="-1"><a class="header-anchor" href="#字符小写" aria-hidden="true">#</a> 字符小写</h4><p>定义的选择器名，属性及属性值的书写皆为小写。</p><blockquote><p>在 xhtml 标准中规定了所有标签、属性和值都小写，CSS 书写也应该遵循此约定。</p></blockquote><h2 id="选择器" tabindex="-1"><a class="header-anchor" href="#选择器" aria-hidden="true">#</a> 选择器</h2><p>当一个规则包含多个选择器时，每个选择器独占一行。</p><blockquote><p>、+、~、&gt; 选择器的两边各保留一个空格。</p></blockquote><div class="language-CSS line-numbers-mode" data-ext="CSS"><pre class="language-CSS"><code>.g-header &gt; .g-header-des,
.g-content ~ .g-footer {

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="命名短且语义化良好" tabindex="-1"><a class="header-anchor" href="#命名短且语义化良好" aria-hidden="true">#</a> 命名短且语义化良好</h4><p>对于选择器的命名，尽量简洁且具有语义化，不应该出现 <code>g-abc</code> 这种语义模糊的命名。</p><h2 id="规则声明块" tabindex="-1"><a class="header-anchor" href="#规则声明块" aria-hidden="true">#</a> 规则声明块</h2><ul><li>当规则声明块中有多个样式声明时，每条样式独占一行。</li><li>在规则声明块的左大括号 { 前加一个空格。</li><li>在样式属性的冒号 : 后面加上一个空格，前面不加空格。</li><li>在每条样式后面都以分号 ; 结尾。</li><li>规则声明块的右大括号 } 独占一行。</li><li>每个规则声明间用空行分隔。</li><li>所有最外层引号使用单引号 &#39; 。</li><li>当一个属性有多个属性值时，以逗号 , 分隔属性值，每个逗号后添加一个空格，当单个属性值过长时，每个属性值独占一行。</li></ul><p>完整示例如下：</p><div class="language-CSS line-numbers-mode" data-ext="CSS"><pre class="language-CSS"><code>.g-footer,
.g-header {
  position: relative;
}

.g-content {
  background:
    linear-gradient(135deg, deeppink 25%, transparent 25%) -50px 0,
    linear-gradient(225deg, deeppink 25%, transparent 25%) -50px 0,
    linear-gradient(315deg, deeppink 25%, transparent 25%),
    linear-gradient(45deg, deeppink 25%, transparent 25%);
  }

.g-content::before {
  content: &#39;&#39;;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数值与单位" tabindex="-1"><a class="header-anchor" href="#数值与单位" aria-hidden="true">#</a> 数值与单位</h2><ul><li><p>当属性值或颜色参数为 0 - 1 之间的数时，省略小数点前的 0 。</p><p><s><code>color: rgba(255, 255, 255, 0.5)</code></s></p><p><code>color: rgba(255, 255, 255, .5);</code></p></li><li><p>当长度值为 0 时省略单位。</p><p><s><code>margin: 0px auto</code></s><s><code>left: 0px;</code></s></p><p><code>margin: 0 auto;</code><code>left: 0;</code></p></li><li><p>十六进制的颜色属性值使用小写和尽量简写。</p><p><s><code>color: #ffcc00</code></s></p><p><code>color: #fc0;</code></p></li></ul><h2 id="样式属性顺序" tabindex="-1"><a class="header-anchor" href="#样式属性顺序" aria-hidden="true">#</a> 样式属性顺序</h2><p>单个样式规则下的属性在书写时，应按功能进行分组，并以 Positioning Model &gt; Box Model &gt; Typographic &gt; Visual 的顺序书写，提高代码的可读性。</p><ul><li>如果包含 content 属性，应放在最前面；</li><li>Positioning Model 布局方式、位置，相关属性包括：position / top / right / bottom / left / z-index / display / float / ...</li><li>Box Model 盒模型，相关属性包括：width / height / padding / margin / border / overflow / ...</li><li>Typographic 文本排版，相关属性包括：font / line-height / text-align / word-wrap / ...</li><li>Visual 视觉外观，相关属性包括：color / background / list-style / transform / animation / transition / ...</li></ul><p>Positioning 处在第一位，因为他可以使一个元素脱离正常文本流，并且覆盖盒模型相关的样式。盒模型紧跟其后，因为他决定了一个组件的大小和位置。其他属性只在组件内部起作用或者不会对前面两种情况的结果产生影响，所以他们排在后面。</p><h2 id="合理使用使用引号" tabindex="-1"><a class="header-anchor" href="#合理使用使用引号" aria-hidden="true">#</a> 合理使用使用引号</h2><p>在某些样式中，会出现一些含有空格的关键字或者中文关键字。</p><h4 id="font-family-内使用引号" tabindex="-1"><a class="header-anchor" href="#font-family-内使用引号" aria-hidden="true">#</a> <code>font-family</code> 内使用引号</h4><p>当字体名字中间有空格，中文名字体及 Unicode 字符编码表示的中文字体，为了保证兼容性，都建议在字体两端添加单引号或者双引号：</p><div class="language-CSS line-numbers-mode" data-ext="CSS"><pre class="language-CSS"><code>body {
  font-family: &#39;Microsoft YaHei&#39;, &#39;黑体-简&#39;, &#39;\\5b8b\\4f53&#39;;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="background-image-的-url-内使用引号" tabindex="-1"><a class="header-anchor" href="#background-image-的-url-内使用引号" aria-hidden="true">#</a> <code>background-image</code> 的 url 内使用引号</h4><p>如果路径里面有空格，旧版 IE 是无法识别的，会导致路径失效，建议不管是否存在空格，都添加上单引号或者双引号：</p><div class="language-CSS line-numbers-mode" data-ext="CSS"><pre class="language-CSS"><code>div {
  background-image: url(&#39;...&#39;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="避免使用-important" tabindex="-1"><a class="header-anchor" href="#避免使用-important" aria-hidden="true">#</a> 避免使用 <code>!important</code></h2><p>除去某些极特殊的情况，尽量不要不要使用 <code>!important</code>。</p><p><code>!important</code> 的存在会给后期维护以及多人协作带来噩梦般的影响。</p><blockquote><p>当存在样式覆盖层叠时，如果你发现新定义的一个样式无法覆盖一个旧的样式，只有加上 <code>!important</code> 才能生效时，是因为你新定义的选择器的优先级不够旧样式选择器的优先级高。所以，合理的书写新样式选择器，是完全可以规避一些看似需要使用 <code>!important</code> 的情况的。</p></blockquote><h2 id="代码注释" tabindex="-1"><a class="header-anchor" href="#代码注释" aria-hidden="true">#</a> 代码注释</h2><h3 id="单行注释" tabindex="-1"><a class="header-anchor" href="#单行注释" aria-hidden="true">#</a> 单行注释</h3><p>星号与内容之间必须保留一个空格。</p><div class="language-CSS line-numbers-mode" data-ext="CSS"><pre class="language-CSS"><code>/* 表格隔行变色 */
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="多行注释" tabindex="-1"><a class="header-anchor" href="#多行注释" aria-hidden="true">#</a> 多行注释</h3><p>星号要一列对齐，星号与内容之间必须保留一个空格。</p><div class="language-CSS line-numbers-mode" data-ext="CSS"><pre class="language-CSS"><code>/**
 * Sometimes you need to include optional context for the entire component. Do that up here if it&#39;s important enough.
 */
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="规则声明块内注释" tabindex="-1"><a class="header-anchor" href="#规则声明块内注释" aria-hidden="true">#</a> 规则声明块内注释</h3><p>使用 // 注释，// 后面加上一个空格，注释独立一行。</p><div class="language-CSS line-numbers-mode" data-ext="CSS"><pre class="language-CSS"><code>.foo{
    border: 0;
    // ....
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文件注释" tabindex="-1"><a class="header-anchor" href="#文件注释" aria-hidden="true">#</a> 文件注释</h3><p>文件顶部必须包含文件注释，用 @name 标识文件说明。星号要一列对齐，星号与内容之间必须保留一个空格，标识符冒号与内容之间必须保留一个空格。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/**
 * @name: 文件名或模块名
 * @description: 文件或模块描述
 * @author: author-name(mail-name@domain.com)
 *      author-name2(mail-name2@domain.com)
 * @update: 2015-04-29 00:02
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>@description 为文件或模块描述。</li><li>@update 为可选项，建议每次改动都更新一下。</li></ul><p>当该业务项目主要由固定的一个或多个人负责时，需要添加@author 标识，一方面是尊重劳动成果，另一方面方便在需要时快速定位责任人。</p><h2 id="sass-使用建议" tabindex="-1"><a class="header-anchor" href="#sass-使用建议" aria-hidden="true">#</a> SASS 使用建议</h2><h3 id="嵌套层级规定" tabindex="-1"><a class="header-anchor" href="#嵌套层级规定" aria-hidden="true">#</a> 嵌套层级规定</h3><p>使用 <code>SASS</code> 、 <code>LESS</code> 等预处理器时，建议嵌套层级不超过 3 层。</p><h3 id="组件-公用类的使用方法" tabindex="-1"><a class="header-anchor" href="#组件-公用类的使用方法" aria-hidden="true">#</a> 组件/公用类的使用方法</h3><p>组件/公用类使用 <code>%placeholders</code> 定义，使用 <code>@extend</code> 引用。如：</p><div class="language-SCSS line-numbers-mode" data-ext="SCSS"><pre class="language-SCSS"><code>%clearfix {
  overflow: auto;
  zoom: 1;
}

.g-header {
  @extend %clearfix;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="组件类的思考" tabindex="-1"><a class="header-anchor" href="#组件类的思考" aria-hidden="true">#</a> 组件类的思考</h4><p>使用 SASS ，经常会预先定义好一些常用公用组件类，譬如清除浮动，水平垂直居中，文字 ellipsis。又或者多个元素具有同样的样式，我们希望能够少写这部分代码，公共部分抽离出来只写一次，达到复用。</p><p>但是复用的方式在 SASS 中有多种，那么是使用单独使用一个类定义，给需要的标签添加，还是使用 <code>@include</code> 或者 <code>@extend</code> 在定义的类中引入一个 <code>@mixin</code>，或者一个 <code>@function</code> 呢？</p><p>基于让 CSS 更简洁以及代码的复用考虑，采用上面的使用 <code>%placeholders</code> 定义，使用 <code>@extend</code> 引用的方案。</p><ul><li><code>%placeholders</code>，只是一个占位符，只要不通过 <code>@extend</code> 调用，编译后不会产生任何代码量</li><li>使用 <code>@extend</code> 引用，则是因为每次调用相同的 <code>%placeholders</code> 时，编译出来相同的 CSS 样式会进行合并（反之，如果使用 <code>@include</code> 调用定义好的 <code>@mixin</code>，编译出来相同的 CSS 样式不会进行合并）</li><li>这里的组件类特指那些不会动态改变的 CSS 样式，注意与那些可以通过传参生成不同数值样式的 <code>@mixin</code> 方法进行区分</li></ul><h3 id="尽量避免使用标签名" tabindex="-1"><a class="header-anchor" href="#尽量避免使用标签名" aria-hidden="true">#</a> 尽量避免使用标签名</h3><p>使用 SASS ，或者说在 CSS 里也有这种困惑。假设我们有如下 html 结构：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>g-content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>g-content-list<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在给最里层的标签命名书写样式的时候，我们有两种选择：</p><div class="language-SCSS line-numbers-mode" data-ext="SCSS"><pre class="language-SCSS"><code>.g-content {
  .g-content-list {
    li {
      ...
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者是</p><div class="language-SCSS line-numbers-mode" data-ext="SCSS"><pre class="language-SCSS"><code>.g-content {
  .g-content-list {
    .item {
      ...
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也就是，编译之后生成了下面这两个，到底使用哪个好呢？</p><ul><li><code>.g-content .g-content-list li { }</code></li><li><code>.g-content .g-content-list .item { }</code></li></ul><p>基于 CSS 选择器的解析规则（从右向左），建议使用上述第二种 <code>.g-content .g-content-list .item { }</code> ，避免使用通用标签名作为选择器的一环可以提高 CSS 匹配性能。</p><blockquote><p>浏览器的排版引擎解析 CSS 是基于从右向左（right-to-left）的规则，这么做是为了使样式规则能够更快地与渲染树上的节点匹配。</p></blockquote><h2 id="组织-css-文件-7-1-模式" tabindex="-1"><a class="header-anchor" href="#组织-css-文件-7-1-模式" aria-hidden="true">#</a> 组织 CSS 文件：7-1 模式</h2><h3 id="_7-1-模式" tabindex="-1"><a class="header-anchor" href="#_7-1-模式" aria-hidden="true">#</a> 7-1 模式</h3><p><strong>必须遵守以下两条规则：</strong></p><ul><li>将所有内容分别写入 7 个不同的文件夹中。</li><li>将它们全部导入位于根级别的 main.scss 文件中。仅此而已。</li></ul><p><strong>7 个文件夹：</strong></p><ul><li>base：你可以将所有的样板代码放入该文件夹中。对于这里的样板，我指的是：每次开始一个新项目时，你需要写的所有 CSS 代码。例如：排版规则、动画、工具程序（对于工具程序，我指的是 margin-right-large、text-center、...等类）等等。</li><li>components：这里指组件。这个文件夹包含所有用于构建页面的组件，例如按钮、表单、滑块、弹出窗口等等。</li><li>layout：页面不同部分用到的布局，也就是说：页眉、页脚、导航、分区、你自己的网格等等。</li><li>pages：页面。有的页面可能有特定的样式，与通常的处理方式不同。那么你可以将它放入该文件夹。</li><li>themes：主题。如果你的应用中有不同的主题（黑暗模式、管理员等等），那么可以将它们放入该文件夹。</li><li>abstracts：抽象。你可以将所有函数和变量与混入（mixin）放在这里。简而言之，就是你所有的帮手。</li><li>vendors：外部资源。应用或项目怎么可能没有外部的库呢？你可以将所有不依赖于你的文件都放入该文件夹。例如，你可以放入 Font Awesome 文件、Bootstrap 和其他类似的东西。</li></ul><p><strong>主文件</strong></p><ul><li>你需要将以上所有内容导入到该文件中。</li></ul><div class="language-SCSS line-numbers-mode" data-ext="SCSS"><pre class="language-SCSS"><code>@import abstracts/variables;
@import abstracts/functions;
@import base/reset;
@import base/typography;
@import base/utilities;
@import components/button;
@import components/form;
@import components/user-navigation;
@import layout/header;
@import layout/footer;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个架构适合于大型项目，而非小项目。 <strong>下面我们介绍一种更适合小项目的做法。</strong></p><ul><li>首先，你不需要 vendors 文件夹。可以将所有外部 CSS 代码放在头部的 link 标签内。</li><li>接下来，如果你的应用只有一个主题的话，可以省略 themes 文件夹。</li><li>最后，你可能不会有大量页面特定的风格，所以也 pages 也没必要。好了，现在只剩下 4 个文件夹了。</li><li>然后，你有两个选择： 你可以按照 7-1 模式组织 CSS 代码，那么你需要留下 abstracts、components、layout 和 base 文件夹。</li></ul><p>你想将所有的分块文件和 main.css 放在一个大文件夹内，那么你会得到如下结构：</p><div class="language-SCSS line-numbers-mode" data-ext="SCSS"><pre class="language-SCSS"><code>sass/
  _animations.scss
  _base.scss
  _buttons.scss
  _header.scss
  ...
  _variables.scss
  main.scss
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,95),d=[l];function t(c,o){return e(),a("div",null,d)}const p=n(i,[["render",t],["__file","CSS 书写规范建议.html.vue"]]);export{p as default};
