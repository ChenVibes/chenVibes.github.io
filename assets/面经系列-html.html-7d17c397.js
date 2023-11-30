import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as p,c as o,b as a,d as c,a as l,e as n}from"./app-762bcd9b.js";const u={},i=n(`<h3 id="图片中-title-和-alt-区别" tabindex="-1"><a class="header-anchor" href="#图片中-title-和-alt-区别" aria-hidden="true">#</a> 图片中 title 和 alt 区别？</h3><ul><li>通常当⿏标滑动到元素上的时候显示</li><li><code>alt</code> 是 的特有属性，是图⽚内容的等价描述，⽤于图⽚⽆法加载时显示、读屏器阅读图⽚。可提图⽚⾼可访问性，除了纯装饰图⽚外都必须设置有意义的值，搜索引擎会重点分析。</li></ul><h3 id="html5-有哪些新特性、移除了哪些元素" tabindex="-1"><a class="header-anchor" href="#html5-有哪些新特性、移除了哪些元素" aria-hidden="true">#</a> Html5 有哪些新特性、移除了哪些元素</h3><ul><li>新增元素： <ul><li>绘画<code>canvas</code></li><li>用于媒介回放的<code>video 和 audio</code> 元素</li><li>本地离线存储 <code>localStorage</code> 长期存储数据，浏览器关闭后数据不丢失</li><li><code>sessionStorage</code> 的数据在浏览器关闭后自动删除</li><li>语义化更好的内容元素，比如 <code>article 、footer、header、nav、section</code></li><li>表单控件 ，<code>calendar 、 date 、 time 、 email 、 url 、 search</code></li><li>新的技术 <code>webworker 、 websocket 、 Geolocation</code></li></ul></li><li>移除的元素： <ul><li>纯表现的元素： <code>basefont 、 big 、 center 、 font 、 s 、 strike 、 tt 、 u</code></li><li>对可⽤性产⽣负⾯影响的元素： <code>frame 、 frameset 、 noframes</code></li></ul></li><li>⽀持 HTML5 新标签： <ul><li><code>IE8/IE7/IE6</code> ⽀持通过 <code>document.createElement</code> ⽅法产⽣的标签</li><li>可以利⽤这⼀特性让这些浏览器⽀持 <code>HTML5</code> 新标签</li><li>浏览器⽀持新标签后，还需要添加标签默认的样式</li></ul></li></ul><h3 id="浏览器是怎么对-html5-的离线储存资源进行管理和加载的呢" tabindex="-1"><a class="header-anchor" href="#浏览器是怎么对-html5-的离线储存资源进行管理和加载的呢" aria-hidden="true">#</a> 浏览器是怎么对 Html5 的离线储存资源进⾏管理和加载的呢</h3><p>如何使⽤：</p><ul><li>⻚⾯头部像下⾯⼀样加⼊⼀个 <code>manifest</code> 的属性；</li><li>在 <code>cache.manifest</code> ⽂件的编写离线存储的资源</li><li>在离线状态时，操作 <code>window.applicationCache</code> 进⾏需求实现</li></ul><p>在线的情况下，浏览器发现 <code>html</code> 头部有 <code>manifest</code> 属性，它会请求 <code>manifest</code> ⽂件，如 果是第⼀次访问 <code>app</code> ，那么浏览器就会根据<code>manifest</code>⽂件的内容下载相应的资源并且进⾏ 离线存储。如果已经访问过 <code>app</code> 并且资源已经离线存储了，那么浏览器就会使⽤离线的资 源加载⻚⾯，然后浏览器会对⽐新的 <code>manifest</code> ⽂件与旧的 <code>manifest</code> ⽂件，如果⽂件没 有发⽣改变，就不做任何操作，如果⽂件改变了，那么就会重新下载⽂件中的资源并进⾏ 离线存储。</p><h3 id="iframe-有那些缺点" tabindex="-1"><a class="header-anchor" href="#iframe-有那些缺点" aria-hidden="true">#</a> iframe 有那些缺点？</h3><ul><li><code>iframe</code> 会阻塞主⻚⾯的 <code>Onload</code> 事件</li><li>搜索引擎的检索程序⽆法解读这种⻚⾯，<code>不利于 SEO</code></li><li><code>iframe</code> 和主⻚⾯共享连接池，⽽浏览器对相同域的连接有限制，所以会影响⻚⾯的并⾏加载</li><li>使⽤ <code>iframe</code> 之前需要考虑这两个缺点。如果需要使⽤ <code>iframe</code> ，最好是通过<code>javascript</code> 动态给 <code>iframe</code> 添加 <code>src</code> 属性值，这样可以绕开以上两个问题</li></ul><h3 id="html-w3c-的标准" tabindex="-1"><a class="header-anchor" href="#html-w3c-的标准" aria-hidden="true">#</a> HTML W3C 的标准</h3><p>标签闭合、标签⼩写、不乱嵌套、使⽤外链 css 和 js 、结构⾏为表现的分离</p><h3 id="doctype-作用-严格模式与混杂模式如何区分-它们有何意义" tabindex="-1"><a class="header-anchor" href="#doctype-作用-严格模式与混杂模式如何区分-它们有何意义" aria-hidden="true">#</a> Doctype 作⽤? 严格模式与混杂模式如何区分？它们有何意义?</h3><ul><li><code>&lt;!DOCTYPE&gt;</code> 声明位于⽂档中的最前⾯，处于 <code>html</code> 标签之前。告知浏览器的解析器， ⽤什么⽂档类型 规范来解析这个⽂档</li><li>严格模式的排版和 <code>JS</code> 运作模式是 以该浏览器⽀持的最⾼标准运⾏</li><li>在混杂模式中，⻚⾯以宽松的向后兼容的⽅式显示。模拟⽼式浏览器的⾏为以防⽌站点⽆法⼯作。<code>DOCTYPE</code> 不存在或格式不正确会导致⽂档以混杂模式呈现</li></ul><h3 id="html-全局属性-global-attribute-有哪些" tabindex="-1"><a class="header-anchor" href="#html-全局属性-global-attribute-有哪些" aria-hidden="true">#</a> HTML 全局属性(global attribute)有哪些</h3><ul><li><code>class</code> :为元素设置类标识</li><li><code>data-*</code> : 为元素增加⾃定义属性</li><li><code>draggable</code> : 设置元素是否可拖拽</li><li><code>id</code> : 元素 id ，⽂档内唯⼀</li><li><code>lang</code> : 元素内容的的语⾔</li><li><code>style</code> : ⾏内 css 样式</li><li><code>title</code> : 元素相关的建议信息</li></ul><h3 id="viewport-的-content-属性作用" tabindex="-1"><a class="header-anchor" href="#viewport-的-content-属性作用" aria-hidden="true">#</a> viewport 的 content 属性作用</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token comment">&lt;!-- width viewport的宽度[device-width | pixel_value]width如果直接设置pixel_value数值，大部分的安卓手机不支持，但是ios支持；
    height – viewport 的高度 （范围从 223 到 10,000 ）
    user-scalable [yes | no]是否允许缩放
    initial-scale [数值] 初始化比例（范围从 &gt; 0 到 10）
    minimum-scale [数值] 允许缩放的最小比例
    maximum-scale [数值] 允许缩放的最大比例
    target-densitydpi 值有以下（一般推荐设置中等响度密度或者低像素密度，后者设置具体的值dpi_value，另外webkit内核已不准备再支持此属性）
         -- dpi_value 一般是70-400//没英寸像素点的个数
         -- device-dpi设备默认像素密度
         -- high-dpi 高像素密度
         -- medium-dpi 中等像素密度
         -- low-dpi 低像素密度 --&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>附带问题：怎样处理 移动端 1px 被 渲染成 2px 问题?</p><p>局部处理</p><ul><li><code>mate</code> 标签中的 <code>viewport</code> 属性 ， <code>initial-scale</code> 设置为 1</li><li><code>rem</code> 按照设计稿标准⾛，外加利⽤ <code>transfrome 的 scale(0.5)</code> 缩⼩⼀倍即可；</li></ul><p>全局处理</p><ul><li><code>mate</code> 标签中的 <code>viewport</code> 属性 ， <code>initial-scale</code> 设置为 0.5</li><li><code>rem</code> 按照设计稿标准⾛即可</li></ul><h3 id="meta-相关" tabindex="-1"><a class="header-anchor" href="#meta-相关" aria-hidden="true">#</a> meta 相关</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--H5标准声明，使⽤ HTML5 doctype，不区分⼤⼩写--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>”en”<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!--标准的 lang 属性写法--&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>’utf-8′<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token comment">&lt;!--声明⽂档使⽤的字符编码--&gt;</span>
  &lt;meta http-equiv=&quot;”X-UA-Compatible”&quot; content=&quot;”IE&quot; =&quot;edge,chrome&quot; =&quot;1″&quot; /&gt;
  <span class="token comment">&lt;!--优先使用指定浏览器使用特定的文档模式--&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>”description”<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>”不超过150个字符”<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token comment">&lt;!--⻚⾯描述--&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>”keywords”<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>””<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token comment">&lt;!-- ⻚⾯关键词--&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>”author”<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>”name,<span class="token punctuation">&quot;</span></span> <span class="token attr-name">email@gmail.com”</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token comment">&lt;!--⽹⻚作者--&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>”robots”<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>”index,follow”<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token comment">&lt;!--搜索引擎抓取--&gt;</span>
  &lt;meta
    name=&quot;”viewport”&quot;
    content=&quot;”initial-scale&quot;
    =&quot;1,&quot;
    maximum-scale=&quot;3,&quot;
    minimum-sc
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span>
    <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>”apple-mobile-web-app-title”<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>”标题”<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
  <span class="token comment">&lt;!--iOS 设备 begin--&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>”apple-mobile-web-app-capable”<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>”yes”<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token comment">&lt;!--添加到主屏后的标
    是否启⽤ WebApp 全屏模式，删除苹果默认的⼯具栏和菜单栏--&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>”apple-mobile-web-app-status-bar-style”<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>”black”<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>”renderer”<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>”webkit”<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token comment">&lt;!-- 启⽤360浏览器的极速模式(webkit)--&gt;</span>
  &lt;meta http-equiv=&quot;”X-UA-Compatible”&quot; content=&quot;”IE&quot; =&quot;edge”&quot; /&gt;
  <span class="token comment">&lt;!--避免IE使⽤兼容模式--&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>”Cache-Control”<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>”no-siteapp”<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token comment">&lt;!--不让百度转码--&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>”HandheldFriendly”<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>”true”<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token comment">&lt;!--针对⼿持设备优化，主要是针对一些老的不识别viewport的浏览器--&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>”MobileOptimized”<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>”320″<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token comment">&lt;!--微软的⽼式浏览器--&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>”screen-orientation”<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>”portrait”<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token comment">&lt;!--uc强制竖屏--&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>”x5-orientation”<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>”portrait”<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token comment">&lt;!--QQ强制竖屏--&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>”full-screen”<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>”yes”<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token comment">&lt;!--UC强制全屏--&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>”x5-fullscreen”<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>”true”<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token comment">&lt;!--QQ强制全屏--&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>”browsermode”<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>”application”<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token comment">&lt;!--UC应⽤模式--&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>”x5-page-mode”<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>”app”<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token comment">&lt;!-- QQ应⽤模式--&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>”msapplication-tap-highlight”<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>”no”<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token comment">&lt;!--windows phone
    设置⻚⾯不缓存--&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>”pragma”<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>”no-cache”<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>”cache-control”<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>”no-cache”<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>”expires”<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>”0″<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25),d={href:"https://blog.csdn.net/kongjiea/article/details/17092413",target:"_blank",rel:"noopener noreferrer"},r=n('<h3 id="div-css-的布局较-table-布局有什么优点" tabindex="-1"><a class="header-anchor" href="#div-css-的布局较-table-布局有什么优点" aria-hidden="true">#</a> div+css 的布局较 table 布局有什么优点</h3><ul><li>改版的时候更⽅便 只要改 <code>css</code> ⽂件。</li><li>⻚⾯加载速度更快、结构化清晰、⻚⾯显示简洁。</li><li>表现与结构相分离。</li><li>易于优化<code>（ seo ）</code>搜索引擎更友好，排名更容易靠前。</li></ul><h3 id="src-与-href-的区别" tabindex="-1"><a class="header-anchor" href="#src-与-href-的区别" aria-hidden="true">#</a> src 与 href 的区别</h3><ul><li><code>src</code> ⽤于替换当前元素，<code>href</code>⽤于在当前⽂档和引⽤资源之间确⽴联系。</li><li><code>src</code> 是 <code>source</code> 的缩写，指向外部资源的位置，指向的内容将会嵌⼊到⽂档中当前标签所在位置；在请求<code>src</code> 资源时会将其指向的资源下载并应⽤到⽂档内，例如 <code>js</code> 脚本，<code>img</code> 图⽚和 <code>frame</code> 等元素</li></ul><blockquote><p>当浏览器解析到该元素时，会暂停其他资源的下载和处理，直到将该资源加载、编译、执⾏完毕，图⽚和框架等元素也如此，类似于将所指向资源嵌⼊当前标签内。这也是为什么将 js 脚本放在底部⽽不是头部</p></blockquote><ul><li><code>href 是 Hypertext Reference</code> 的缩写，指向⽹络资源所在位置，建⽴和当前元素（锚点）或当前⽂档（链接）之间的链接，如果我们在⽂档中添加</li><li><code>link href=&quot;common.css&quot; rel=&quot;stylesheet&quot;</code> 那么浏览器会识别该⽂档为 <code>css</code> ⽂件，就会并⾏下载资源并且不会停⽌对当前⽂档的处理。这也是为什么建议使⽤ <code>link</code> ⽅式来加载 <code>css</code> ，⽽不是使⽤ <code>@import</code> ⽅式</li></ul>',6);function k(m,v){const s=e("ExternalLinkIcon");return p(),o("div",null,[i,a("p",null,[a("a",d,[c("了解更多参考：https://blog.csdn.net/kongjiea/article/details/17092413"),l(s)])]),r])}const h=t(u,[["render",k],["__file","面经系列-html.html.vue"]]);export{h as default};
