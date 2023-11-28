import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,e as t}from"./app-a9815516.js";const e={},p=t(`<p>我们在显示器上看到的动画，每一帧变化都是系统绘制出来的（GPU 或者 CPU）。它的最高绘制频率受限于显示器的刷新频率（而非显卡，大多数是 60Hz 或者 75Hz）。</p><p>帧频越高，屏幕上图片闪烁感就越小，稳定性也就越高。人的眼睛不容易察觉 75Hz 以上刷新频率带来的闪烁感。</p><h3 id="实现方式" tabindex="-1"><a class="header-anchor" href="#实现方式" aria-hidden="true">#</a> 实现方式</h3><p>通常我们在前端实现动画效果的几种主要实现方式如下：</p><ul><li><p>JavaScript：通过定时器（setTimeout 和 setIterval）来间隔来改变元素样式，或者使用 requestAnimationFrame；</p></li><li><p>CSS3：transition 和 animation；</p></li><li><p>HTML5：使用 HTML5 提供的绘图方式（canvas、svg、webgl）；</p></li></ul><h4 id="requestanimationframe" tabindex="-1"><a class="header-anchor" href="#requestanimationframe" aria-hidden="true">#</a> requestAnimationFrame</h4><p>requestAnimationFrame 是浏览器用于定时循环操作的一个接口，类似于 setTimeout，主要用途是按帧对网页进行重绘。</p><p>设置这个 API 的目的是为了让各种网页动画效果（DOM 动画、Canvas 动画、SVG 动画、WebGL 动画）能够有一个统一的刷新机制，从而节省系统资源，提高系统性能，改善视觉效果。代码中使用这个 API，就是告诉浏览器希望执行一个动画，让浏览器在下一个动画帧安排一次网页重绘。</p><ul><li><strong>requestAnimationFrame 使用一个回调函数作为参数，这个回调函数会在浏览器重绘之前调用，由于功效只是一次性的，所以想实现连续的动效，需要递归调用</strong>，示例如下：</li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
  <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>demo<span class="token punctuation">&quot;</span></span>
  <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">position</span><span class="token punctuation">:</span>absolute<span class="token punctuation">;</span> <span class="token property">width</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span> <span class="token property">background</span><span class="token punctuation">:</span>#ccc<span class="token punctuation">;</span> <span class="token property">left</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span> <span class="token property">top</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span>
<span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">var</span> demo <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;demo&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    demo<span class="token punctuation">.</span>style<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>demo<span class="token punctuation">.</span>style<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span> <span class="token comment">//每一帧向右移动1px</span>
  <span class="token punctuation">}</span>
  <span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">//当超过300px后才停止</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">parseInt</span><span class="token punctuation">(</span>demo<span class="token punctuation">.</span>style<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token operator">&lt;=</span> <span class="token number">300</span><span class="token punctuation">)</span>
      <span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>arguments<span class="token punctuation">.</span>callee<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>cancelAnimationFrame 方法用于取消重绘</strong>：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var requestID = requestAnimationFrame(repeatOften);
cancelAnimationFrame(requestID);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="使用-requestanimationframeapi-的优势如下" tabindex="-1"><a class="header-anchor" href="#使用-requestanimationframeapi-的优势如下" aria-hidden="true">#</a> 使用 requestAnimationFrameAPI 的优势如下：</h5><p>会把每一帧中的所有 DOM 操作集中起来，在一次重绘或回流中就完成，并且重绘或回流的时间间隔紧紧跟随显示器的刷新频率（60 Hz 或者 75 Hz）；</p><p>在隐藏或不可见的元素中，将不会进行重绘或回流，这当然就意味着更少的的 cpu，gpu 和内存使用量；</p><h4 id="transition" tabindex="-1"><a class="header-anchor" href="#transition" aria-hidden="true">#</a> Transition</h4><p>CSS 中的 transition 属性允许块级元素中的属性在指定的时间内平滑的改变，简单看下其语法规则：</p><p>transition: property duration timing-function delay; 具体属性值介绍如下：</p><table><thead><tr><th>值</th><th>概述</th></tr></thead><tbody><tr><td>name</td><td>规定需要绑定到选择器的 keyframe 名称</td></tr><tr><td>transition-property</td><td>设置过渡属性</td></tr><tr><td>transition-duration</td><td>设置过渡时间(linear、ease、ease-in、ease-out、ease-in-out)</td></tr><tr><td>transition-timing-function</td><td>设置过渡动画效果</td></tr><tr><td>transition-delay</td><td>设置过渡延时</td></tr></tbody></table><h4 id="animation" tabindex="-1"><a class="header-anchor" href="#animation" aria-hidden="true">#</a> Animation</h4><p>类似的 CSS 还提供了一个 Animation 属性，不过区别于 Transition，Animation 作用于元素本身而不是样式属性，可以使用关键帧的概念，应该说可以实现更自由的动画效果。</p><p>语法</p><p>具体属性值介绍如下：</p><table><thead><tr><th>值</th><th>概述</th></tr></thead><tbody><tr><td>animation-name</td><td>动画名称，由@keyframes 定义的</td></tr><tr><td>animation-duration</td><td>动画的持续时间</td></tr><tr><td>animation-timing-function</td><td>动画的过渡类型</td></tr><tr><td>animation-delay</td><td>动画的延迟时间</td></tr><tr><td>animation-iteration-count</td><td>动画的循环次数</td></tr><tr><td>animation-direction</td><td>设置动画在循环中是否反向运动</td></tr><tr><td>animation-fill-mode</td><td>设置动画时间之外的状态</td></tr><tr><td>animattion-play-state</td><td>设置动画的状态。</td></tr></tbody></table><p>DEMO 传送门：http://www.w3school.com.cn/tiy/t.asp?f=css3_animation</p><h4 id="canvas" tabindex="-1"><a class="header-anchor" href="#canvas" aria-hidden="true">#</a> Canvas</h4><p><code>&lt;canvas&gt;</code>是 HTML5 新增的元素，作为页面图形绘制的容器，可用于通过使用 JavaScript 中的脚本来绘制图形。例如，它可以用于绘制图形，制作照片，创建动画，甚至可以进行实时视频处理或渲染，Canvas 具有如下特点：</p><ul><li>依赖分辨率，基于位图；</li><li>不支持事件处理器；</li><li>弱的文本渲染能力；</li><li>能够以 .png 或 .jpg - 格式保存结果图像；</li><li>最适合图像密集型的游戏，其中的许多对象会被频繁重绘；</li></ul><p>大多数 Canvas 绘图 API 都没有定义在 <code>&lt;canvas&gt;</code>元素本身上，而是定义在通过画布的 getContext()方法获得的一个“绘图环境”对象上。Canvas API 也使用了路径的表示法。但是，路径由一系列的方法调用来定义，而不是描述为字母和数字的字符串，比如调用 beginPath() 和 arc() 方法。一旦定义了路径，其他的方法，如 fill()，都是对此路径操作。</p><p>DEMO 传送门：https://jsfiddle.net/gaogy/rzss4mmr/</p><h4 id="svg" tabindex="-1"><a class="header-anchor" href="#svg" aria-hidden="true">#</a> SVG</h4><p>SVG 是英文 Scalable Vector Graphics 的缩写，意为可缩放矢量图形，用来定义用于网络的基于矢量的图形，其使用 XML 格式定义图像，并且具有如下特点：</p><ul><li>不依赖分辨率，基于矢量图；</li><li>支持事件处理器；</li><li>最适合带有大型渲染区域的应用程- 序（比如谷歌地图）；</li><li>复杂度高会减慢渲染速度（任何过度使用 DOM 的应用都不快）；</li><li>不适合游戏应用； 来看一个简单的示例，用 SVG 画了一个圆：</li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2000/svg<span class="token punctuation">&quot;</span></span> <span class="token attr-name">version</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1.1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rect</span>
    <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>50<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">y</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>20<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">rx</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>20<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">ry</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>20<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>150<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>150<span class="token punctuation">&quot;</span></span>
    <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">fill</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span><span class="token property">stroke</span><span class="token punctuation">:</span>black<span class="token punctuation">;</span><span class="token property">stroke-width</span><span class="token punctuation">:</span>5<span class="token punctuation">;</span><span class="token property">opacity</span><span class="token punctuation">:</span>0.5</span><span class="token punctuation">&quot;</span></span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SVG 代码以 <code>&lt;svg&gt;</code> 元素开始，包括开启标签<code>&lt;svg&gt;</code> 和关闭标签<code>&lt;/svg&gt;</code> 。这是根元素。width 和 height 属性可设置此 SVG 文档的宽度和高度。version 属性可定义所使用的 SVG 版本，xmlns 属性可定义 SVG 命名空间。</p><p>SVG 的 <code>&lt;circle&gt;</code> 用来创建一个圆。cx 和 cy 属性定义圆中心的 x 和 y 坐标。如果忽略这两个属性，那么圆点会被设置为 (0, 0)。r 属性定义圆的半径。</p><p>下面主要是介绍 SVG 中的几个用于动画的元素，它们分别是：</p><ul><li><code>&lt;animate&gt;</code>：通常放置到一个 SVG 图像元素里面，用来定义这个图像元素的某个属性的动画变化过程；</li><li><code>&lt;animateMotion&gt;</code>：元素也是放置一个图像元素里面，它可以引用一个事先定义好的动画路径，让图像元素按路径定义的方式运动；</li><li><code>&lt;animateTransform&gt;</code>：元素对图形的运动和变换有更多的控制，它可以指定图形的变换、缩放、旋转和扭曲等；</li><li><code>&lt;mpath&gt;</code>：元素的用法在上面的例子里出现过，它是一个辅助元素，通过它，</li><li><code>&lt;animateMotion&gt;</code>等元素可以引用一个外部的定义的<code>&lt;path&gt;</code>。让图像元素按这个</li><li><code>&lt;path&gt;</code>轨迹运动；</li></ul><p>DEMO 传送门：https://jsfiddle.net/gaogy/ac4avoqk/</p><h4 id="webgl" tabindex="-1"><a class="header-anchor" href="#webgl" aria-hidden="true">#</a> WebGL</h4><p>WebGL 使得网页在支持 HTML <code>&lt;canvas&gt;</code>标签的浏览器中，不需要安装任何插件，便可以使用基于 OpenGL ES 2.0 的 API 在 canvas 中进行 3D 渲染。 WebGL 程序由 JavaScript 的控制代码，和在计算机的图形处理单元（GPU）中执行的特效代码(shader code，渲染代码) 组成。</p><p>WebGL.png WebGL 本质上是基于光栅化的 API，而不是基于 3D 的 API。WebGL 只关注两个方面，即投影矩阵的坐标和投影矩阵的颜色。使用 WebGL 程序的任务就是实现具有投影矩阵坐标和颜色的 WebGL 对象即可。可以使用“着色器”来完成上述任务。顶点着色器可以提供投影矩阵的坐标，片段着色器可以提供投影矩阵的颜色。</p><p>由于 WebGL 的体系比较庞大，三言两语说不完，所以以下仅提供各种传送门了：</p><p>WebGL 参考资料：https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL WebGL API：https://developer.mozilla.org/zh-CN/docs/Web/API/WebGL_API</p><h4 id="几个常用的动画库" tabindex="-1"><a class="header-anchor" href="#几个常用的动画库" aria-hidden="true">#</a> 几个常用的动画库</h4><ul><li>Ani.js -- 基于 CSS 动画的生命处理库</li><li>Dynamics.js -- 创建具有物理运动效果动画的 js 库</li><li>Animate.css -- 齐全的 CSS3 动画库</li><li>Three.js -- 让用户通过 javascript 入手进入搭建 webgl 项目的类库</li></ul>`,46),o=[p];function i(c,l){return a(),s("div",null,o)}const d=n(e,[["render",i],["__file","前端动画.html.vue"]]);export{d as default};
