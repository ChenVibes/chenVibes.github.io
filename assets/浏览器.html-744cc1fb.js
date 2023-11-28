import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as d,c as r,b as e,d as n,a as s,e as c}from"./app-6267275e.js";const i={},p=c('<h1 id="浏览器" tabindex="-1"><a class="header-anchor" href="#浏览器" aria-hidden="true">#</a> 浏览器</h1><h2 id="渲染引擎" tabindex="-1"><a class="header-anchor" href="#渲染引擎" aria-hidden="true">#</a> 渲染引擎</h2><p><strong>渲染引擎</strong>又名<strong>浏览器内核</strong>，指负责对网页语法解析并渲染成一张可视化页面的解析器。它是浏览器最核心最重要的部位，不同内核对网页语法的解析也有不同，因此同一网页语法在不同内核的浏览器中的渲染效果也可能不同，这就是常说的<strong>浏览器差异性</strong></p><p>上述提到的世界五大浏览器，在自身的发展过程中都使用了一种或多种浏览器内核作为自身的渲染引擎。</p><ul><li><strong><code>Google Chrome</code></strong>：Webkit(前期)、Blink(后期)</li><li><strong><code>Apple Safari</code></strong>：Webkit</li><li><strong><code>Mozilla Firefox</code></strong>：Gecko</li><li><strong><code>ASA Opera</code></strong>：Presto(前期)、Blink(后期)</li><li><strong><code>Microsoft IExplorer</code></strong>：Trident</li><li><strong><code>Microsoft Edge</code></strong>：Trident(前期)、Blink(后期)</li></ul><p><code>IExplorer</code>和<code>Edge</code>同是微软公司开发的浏览器产品，鉴于<code>IExplorer</code>存在很多为人诟病的问题，在后续的系统升级中逐渐使用<code>Edge</code>取代<code>IExplorer</code>在<code>Windows</code>上的位置</p><p>因此 20 多年的浏览器发展史里，被大规模使用的浏览器内核也就这五个。</p><ul><li><strong><code>Blink</code> 内核</strong>：由谷歌公司和欧朋公司合作自研的内核，同时谷歌公司也将其作为开源内核架构<code>Chromium</code>的一部分发布，在<code>Chrome 28+</code>和<code>Opear 15+</code>中被使用。</li><li><strong><code>Webkit</code> 内核</strong>：由苹果公司自研的内核，同时也是<code>Blink内核</code>的原型，在<code>Chrome 1 ~ 28</code>和<code>Safari 1+</code>中被使用。</li><li><strong><code>Gecko</code> 内核</strong>：由网景公司自研的内核，先期在<code>Navigator</code>中使用，后期推广到<code>Firefox</code>上，在<code>Firefox 1+</code>中被使用。</li><li><strong><code>Presto</code> 内核</strong>：由欧朋公司自研的内核，其渲染性能达到极致但牺牲了兼容性，目前已经废弃，在<code>Opear 7 ~ 14</code>中被使用。</li><li><strong><code>Trident </code>内核</strong>：由微软公司自研的内核，由于其被包含在全世界使用率最高的<code>Windows操作系统</code>中，导致十多年时间里一直称霸浏览器内核界，在<code>IExplorer 4+</code>中被使用。</li></ul><h2 id="渲染过程" tabindex="-1"><a class="header-anchor" href="#渲染过程" aria-hidden="true">#</a> 渲染过程</h2><p>要了解浏览器页面的渲染过程，首先得知道<strong>关键渲染路径</strong>。关键渲染路径指浏览器从最初接收请求得到 <code>HTML</code>、<code>CSS</code>、<code>JS</code> 等资源，然后解析、构建、渲染、布局、绘制、合成，到最后呈现在用户眼前界面的整个过程</p><p>将关键渲染路径划分理解，那网页的渲染过程可分为以下部分:</p><ol><li>解析文件</li></ol><ul><li>将 <code>html</code> 文件转换为 <code>DOM</code> 树</li><li>将 <code>css</code> 文件转换为 <code>CSSOM</code> 树</li><li>将 <code>DOM</code> 树和 <code>CSSOM</code> 树合并生成渲染树</li></ul><ol start="2"><li>绘制图层</li></ol><ul><li><strong>根据渲染树生成布局渲染树</strong>(<code>回流</code>)</li><li><strong>根据布局渲染树生成绘制渲染树</strong>(<code>重绘</code>)</li></ul><ol start="3"><li>合成图层：根据 绘制渲染树 合成 图层 显示在屏幕上</li></ol><h3 id="解析文件" tabindex="-1"><a class="header-anchor" href="#解析文件" aria-hidden="true">#</a> 解析文件</h3><p><code>HTML</code>描述网页的结构，浏览器通过<code>HTML</code>解析器将 <code>HTML</code> 解析成<code>DOM</code>树结构。<code>HTML</code> 中所有内容皆为节点，各节点间拥有层级关系，彼此相连，构成 <code>DOM</code> 树</p><p>构建<code>DOM树</code>的过程：读取 HTML 的<strong>字节</strong><code>Bytes</code>，将字节转换成<strong>字符</strong><code>Chars</code><span style="color:red;">批注：在计算机屏幕上看到的是实体化的文字，而在计算机存储介质中存放的实际是二进制的比特流。 那么在这两者之间的转换规则就需要一个统一的标准，各种字符集标准就出现了</span> 依据字符确定<strong>标签</strong><code>Tokens</code>，将标签转换成<strong>节点</strong><code>Nodes</code>，以节点为基准构建<strong>DOM 树</strong></p><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/DOM树构建过程.webp" alt="DOM树构建过程" tabindex="0"><figcaption>DOM树构建过程</figcaption></figure><p><code>CSS</code> 文档描述网页的表现，<strong>浏览器通过 <code>CSS</code> 解析器将 <code>CSS </code>解析成 <code>CSSOM</code> 树结构</strong>，与 <code>DOM </code>树结构比较像。<code>CSS</code> 中所有内容皆为节点，与<code> HTML</code> 中的节点一一对应，各节点间拥有层级关系，彼此相连，构成 <code>CSSOM</code> 树</p><p>构建 <code>CSSOM</code> 树的过程：读取 <code>CSS</code> 文档的字节<code>Bytes</code>，将字节转换成字符<code>Chars</code>，依据字符确定标签<code>Tokens</code>，将标签转换成节点<code>Nodes</code>，以节点为基准构建 <code>CSSOM</code> 树。与 <code>DOM</code> 树的构建过程完全一致</p><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/CSSOM树结构.webp" alt="CSSOM树结构" tabindex="0"><figcaption>CSSOM树结构</figcaption></figure>',23),l={class:"hint-container tip"},u=e("p",{class:"hint-container-title"},"扩展阅读",-1),g={href:"https://www.jianshu.com/p/7c3e2493c7a7",target:"_blank",rel:"noopener noreferrer"},h={href:"https://web.dev/critical-rendering-path-constructing-the-object-model/",target:"_blank",rel:"noopener noreferrer"},m=c('<p>在构建 <code>DOM</code> 树的过程中，当<code>HTML</code>解析器遇到<code>&lt;script&gt;</code>时会立即阻塞 DOM 树的构建，将控制权移交给浏览器的<code>JS</code>引擎，等到<code>JS</code>引擎运行完毕，浏览器才会从中断的地方恢复<code> DOM</code> 树的构建。<code>&lt;script&gt;</code>的脚本加载完毕，<code>JS</code>引擎通过<code>DOM API</code>和<code>CSSOM API</code>操作 <code>DOM</code> 树和 <code>CSSOM </code>树。为何会产生<strong>渲染阻塞</strong>呢？其根本原因在于：<strong><code>JS</code> 操作 <code>DOM</code> 后，浏览器无法预测未来 <code>DOM</code> 的具体内容，为了防止无效操作和节省资源，只能阻塞 <code>DOM</code> 树的构建</strong></p><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/解析文件.png" alt="解析文件" tabindex="0"><figcaption>解析文件</figcaption></figure><p>浏览器的渲染引擎将 <code>DOM </code>树和 <code>CSSOM</code> 树合并生成渲染树，只渲染需显示的节点及其样式。<strong>DOM 树</strong>、<strong>CSSOM 树</strong>和<strong>渲染树</strong>三者的构建并无先后条件先后顺序，并非完全独立而是存在交叉并行构建的情况。因此会形成一边加载，一边解析，一边渲染的工作现象</p><h3 id="绘制图层" tabindex="-1"><a class="header-anchor" href="#绘制图层" aria-hidden="true">#</a> 绘制图层</h3><p>进入绘制阶段，遍历渲染树，调用渲染器的<code>paint()</code>在屏幕上绘制内容。根据 渲染树布局计算样式，即每个节点在页面中的布局、尺寸等几何属性。<code>HTML </code>默认是流式布局，<code>CSS</code> 和 <code>JS </code>会打破这种布局，改变 <code>DOM</code> 的几何属性和外观属性。在绘制过程中，根据渲染树布局，再根据布局绘制，这就是常听常说的<strong>回流重绘</strong>。</p><p>在此涉及到两个核心概念：<strong>回流</strong>、<strong>重绘</strong>。笔者用两句精简的话分别概括它们。</p><ul><li><strong>回流</strong>：几何属性需改变的渲染</li><li><strong>重绘</strong>：更改外观属性而不影响几何属性的渲染</li></ul><p>当生成渲染树后，至少会渲染一次。在后续交互过程中，还会不断地重新渲染。这时只会回流重绘或只有重绘。因此引出一个定向法则：<strong>回流必定引发重绘，重绘不一定引发回流</strong>。</p><p>在下一章中，笔者会安排整章篇幅讲述<strong>回流重绘</strong>以及如何让回流重绘的影响最小化。相信下一章提及的<strong>属性排序</strong>应该较少同学了解过或使用过，敬请期待。</p><h3 id="合成图层" tabindex="-1"><a class="header-anchor" href="#合成图层" aria-hidden="true">#</a> 合成图层</h3><p>将回流重绘生成的图层逐张合并并显示在屏幕中。上述几个步骤并非一次性顺序完成，若改动<code>DOM/CSSOM</code>，上述过程会被重新执行，实际上<code>CSS</code>与<code>JS</code>往往会多次改动<code>DOM/CSSOM</code>。简而言之，用户的交互操作引发了网页的重渲染。</p><h2 id="兼容性" tabindex="-1"><a class="header-anchor" href="#兼容性" aria-hidden="true">#</a> 兼容性</h2><p><strong>兼容性</strong>又名网站兼容性或网页兼容性，指网页在各种浏览器上的显示效果可能不同而产生浏览器和网页间的兼容问题</p>',13),k=e("code",null,"CSS/JS特性",-1),S={href:"https://link.juejin.cn/?target=https%3A%2F%2Fcaniuse.com",target:"_blank",rel:"noopener noreferrer"},v=c(`<p>产生浏览器间的兼容问题，正是上述谈到的渲染引擎而导致的。在网站的设计和开发中，做好浏览器兼容才能让网站在不同浏览器间都能显示正常。浏览器对标准的更好兼容能够给用户带来更好的使用体验，当然无法奢求浏览器厂商能统一所有浏览器标准，所以前端开发者只能自己着手解决</p><p>以下聊聊处理 CSS 兼容性的三种方式，相对处理 JS 兼容性来说简单到不得了，这也是普遍前端开发者认为 CSS 简单的原因之一</p><h3 id="磨平浏览器默认样式" tabindex="-1"><a class="header-anchor" href="#磨平浏览器默认样式" aria-hidden="true">#</a> 磨平浏览器默认样式</h3><p>每个浏览器的 <code>CSS</code> 默认样式不尽相同，所以最简单最有效的方式就是对其默认样式初始化。以下贴一个各位同学都会的初始化代码。简单暴力但不明确，<code>*</code>通配符可是有执行性能问题的。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">*</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下推荐两种磨平浏览器默认样式的方式，在接入其他<code>css文件</code>前将其导入，天下太平，大家都不能拼爹了，都是在同一起跑线上，<code>IExplorer</code>同学你可别抢跑哇，大家都盯着你呢！</p><p><img src="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fnecolas%2Fnormalize.css" alt="normalize.css">：懒人必备的浏览器默认样式库，接近<code>40k</code>的 Star，说明大部分人都是懒人 <img src="https://github.com/JowayYoung/idea-css/blob/master/css/reset.css" alt="reset.css">：其实就是笔者自定义的默认样式，各位同学也可自行为项目撰写一份默认样式</p><p>在项目入口文件的其他<code>css文件</code>前导入:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">&#39;path/to/normalize.css&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// 或</span>
<span class="token keyword">import</span> <span class="token string">&#39;path/to/reset.css&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="插入浏览器私有属性" tabindex="-1"><a class="header-anchor" href="#插入浏览器私有属性" aria-hidden="true">#</a> 插入浏览器私有属性</h3><p>通常编写 CSS 都会在一些 CSS3 属性前加入<code>-webkit-</code>、<code>-moz-</code>、<code>-ms-</code>或<code>-o-</code>，这些奇形怪状写到手软的东西就是<strong>浏览器私有属性</strong>。样式少还好，样式多那就欲哭无泪了 😂。</p><p>出现这些私有属性，是因为制定 CSS 标准的 W3C 其动作就像蜗牛一样慢，量产一个属性是需走一个很严格很复杂的流程。一个成熟且被大众肯定的属性，浏览器厂商会加大其支持力度而铺路，但为了避免日后 W3C 公布标准时有所变更，就加入一个本厂商的私有属性提前支持该属性，待 W3C 公布该属性标准后，再让新版浏览器支持标准属性。</p><p>对于编写私有属性的顺序需特别注意：<strong>兼容性写法放到前面，标准写法放到最后</strong>。在浏览器解析 CSS 过程中，若标准属性无法使用则使用当前浏览器对应的私有属性。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* Chrome、Safari、New Opera、New Edge */</span>
<span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>10px<span class="token punctuation">,</span> 10px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/* Firefox */</span>
<span class="token property">-moz-transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>10px<span class="token punctuation">,</span> 10px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/* IExplorer、Old Edge */</span>
<span class="token property">-ms-transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>10px<span class="token punctuation">,</span> 10px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/* Old Opera */</span>
<span class="token property">-o-transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>10px<span class="token punctuation">,</span> 10px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/* 标准 */</span>
<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>10px<span class="token punctuation">,</span> 10px<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然不是所有的 CSS3 属性都需补齐<code>-webkit-</code>、<code>-moz-</code>、<code>-ms-</code>或<code>-o-</code>，上述 Demo 只是一个示例，真正的<code>transform</code>私有属性只有<code>-webkit-</code>和<code>-ms-</code>。这些需查看<code>Caniuse</code>确保正确的编写，若想偷懒也可全部写上</p>`,15),b={href:"https://github.com/webpack-contrib/postcss-loader",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env",target:"_blank",rel:"noopener noreferrer"},C=e("code",null,"postcss-preset-env",-1),x=e("code",null,"autoprefixer",-1),M=e("code",null,"Caniuse",-1),_=c(`<p><span style="color:red;">批注：vue-cli 脚手架项目已内置 autoprefixer;vite 内置了 postcss,但没有内置 autoprefixer,究其原因 vue-cli 是脚手架工具而非打包工具，它是更上层的应用，vite 是打包工具</span></p><h3 id="css-hack" tabindex="-1"><a class="header-anchor" href="#css-hack" aria-hidden="true">#</a> CSS Hack</h3><p><strong>CSS Hack</strong>指针对不同浏览器编写不同 CSS，让它能够同时兼容不同浏览器，在不同浏览器中渲染想要的效果。当然也可反过来利用<code>CSS Hack</code>为不同版本的浏览器定制不同效果。</p><p>在一些老旧网站的<code>html文件</code>或<code>css文件</code>里可能会看到以下代码，没错，这就是<code>CSS Hack</code>。现在可能很多同学都不会遇到这种写法，毕竟很多公司的产品都放弃了<code>IExplorer 8</code>以下的兼容，这些痕迹都已经成为历史。很多同学没想过 5 年到 10 年前的前端开发者是多么苦逼的，光兼容<code>IExplorer</code>就已经够烦了，还连续兼容几个版本。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!--[if IE]&gt;
    &lt;style&gt;
      .elem {
        background-color: #f66;
      }
    &lt;/style&gt;
  &lt;![endif]--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
.elem { background-color: #f66; /* IExplorer 8+ */ *background-color: #f66; /* IExplorer 7 */ _background-color: #f66;
/* IExplorer 6 */ }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以现在也不会推荐去学习这些<code>CSS Hack</code>，有一个基本的了解即可。上述<code>CSS Hack</code>写法只是最简单的几行代码，其实还存在一些更难的表达式。当然也不推荐这种写法，毕竟不符合大名鼎鼎的<strong>雅虎军规</strong>的<code>Avoid CSS Expressions</code></p>`,6);function O(D,E){const o=t("ExternalLinkIcon");return d(),r("div",null,[p,e("div",l,[u,e("p",null,[e("a",g,[n("CSS 对象模型 CSSOM 是什么？"),s(o)])]),e("p",null,[e("a",h,[n("Constructing the Object Model"),s(o)])])]),m,e("p",null,[n("说到兼容性，就不得不推荐一个专门为前端开发者定制可查询"),k,n("在各种浏览器中兼容性的网站"),e("a",S,[n("Caniuse"),s(o)]),n("，它可很好地保障网页在不同浏览器间的兼容性。有了这个工具可快速地了解使用到的代码在各个浏览器中的效果")]),v,e("p",null,[n("每个 CSS3 属性都编写这么一堆兼容性代码，无疑是对生命最大的浪费。在使用 Webpack 打包项目代码的过程中，可接入"),e("a",b,[n("postcss-loader"),s(o)]),n("和"),e("a",f,[n("postcss-preset-env"),s(o)]),n("，"),C,n("内置了"),x,n("，它会依据"),M,n("所提供的数据对代码里的 CSS3 属性批量添加私有属性")]),_])}const I=a(i,[["render",O],["__file","浏览器.html.vue"]]);export{I as default};
