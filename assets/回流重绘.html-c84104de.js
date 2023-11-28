import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as d,c as i,b as n,d as e,a as s,e as o}from"./app-badd7849.js";const l={},p=o('<h1 id="回流重绘" tabindex="-1"><a class="header-anchor" href="#回流重绘" aria-hidden="true">#</a> 回流重绘</h1><h2 id="回流" tabindex="-1"><a class="header-anchor" href="#回流" aria-hidden="true">#</a> 回流</h2><p><strong>回流</strong>又名<strong>重排</strong>，指改变几何属性的渲染。但感觉回流这个词较高大上，后续统称回流吧。</p><p>可理解为将整个网页填白，对内容重新渲染一次。只不过以人眼的感官速度去看浏览器回流是不会有任何变化的，若你拥有闪电侠的感官速度去看浏览器回流(实质是将时间调慢)，就会发现每次回流都会将页面清空，再从左上角第一个像素点从左到右从上到下这样一点一点渲染，直至右下角最后一个像素点。每次回流都会呈现该过程，只是感受不到而已。</p><p>渲染树的节点发生改变，影响了该节点的几何属性，导致该节点位置发生变化，此时就会触发浏览器回流并重新生成渲染树。回流意味着节点的几何属性改变，需重新计算并生成渲染树，导致渲染树的全部或部分发生变化。</p><h2 id="重绘" tabindex="-1"><a class="header-anchor" href="#重绘" aria-hidden="true">#</a> 重绘</h2><p><strong>重绘</strong>指改变外观属性而不影响几何属性的渲染。相比回流，重绘在两者中会温和一些，后续谈到的 CSS 性能优化就会基于该特点展开</p><p>渲染树的节点发生改变，但不影响该节点的几何属性。由此可见，回流对浏览器性能的消耗是高于重绘的，而且回流一定会伴随重绘，重绘却不一定伴随回流</p><p>为何回流一定会伴随重绘呢？整个节点的位置都变了，肯定要重新渲染它的外观属性啊！</p><h2 id="属性分类" tabindex="-1"><a class="header-anchor" href="#属性分类" aria-hidden="true">#</a> 属性分类</h2><p>以下对一些常用的几何属性和外观属性分类，其实同种分类的属性都有一些共同点，各位同学可自行感受：</p><ul><li>几何属性：包括布局、尺寸等可用数学几何衡量的属性</li><li>布局：<code>display</code>、<code>float</code>、<code>position</code>、<code>list</code>、<code>table</code>、<code>flex</code>、<code>columns</code>、<code>grid</code></li><li>尺寸：<code>margin</code>、<code>padding</code>、<code>border</code>、<code>width</code>、<code>height</code></li><li>外观属性：包括界面、文字等可用状态向量描述的属性</li><li>界面：<code>appearance</code>、<code>outline</code>、<code>background</code>、<code>mask</code>、<code>box-shadow</code>、<code>box-reflect</code>、<code>filter</code>、<code>opacity</code>、<code>clip</code></li><li>文字：<code>text</code>、<code>font</code>、<code>word</code></li></ul><blockquote><p>如何理解回流重绘</p></blockquote><p>有无更好的方式可帮助理解<strong>回流重绘</strong>呢？答案是有的。</p><p>某一天星巴克发行一套很有纪念价值的杯子，男同胞们为了买到心仪的杯子给女友当惊喜礼物，通宵达旦搬张板凳去星巴克门口排队。此时形成的队伍是有序的，毕竟大家都是文明人，不可能随便插队吧，先到先拿，这个道理谁都懂！</p><p>可是总有一些人不按常理出牌，别人排队排得那么辛苦，他一到来就仗着自己有钱有势人多马多，插队到最前面。若他插队成功，那么后面的人都要往后挪一位。此时队伍就要重新往后挪，甚至引发多人斗殴。但混乱的情况总会被控制下来，此时就得重新排队，而原先的队伍顺序经过这次斗殴就可能不按照原先的队伍顺序排队了。几何属性变了，就要重新排队，这个就是<strong>回流</strong>或<strong>重排</strong>。重新排队啊 😂！</p><p>一位漂亮妹纸排队排得久肚子呱呱叫，就与另一位同伴交换，她去买早餐，而这位同伴代替她的位置。各位男同胞可能发现这位妹纸更漂亮了。没错，外观属性改变了，变漂亮了，但除了妹纸，其余人的位置和顺序都无发生变化，所以肯定不会发生上述重新排队的情况。外观属性变了，但几何属性没变，这个就是<strong>重绘</strong>。不用重新排队，还有漂亮妹纸看，大家都很乐意 🤔！</p><h2 id="性能优化" tabindex="-1"><a class="header-anchor" href="#性能优化" aria-hidden="true">#</a> 性能优化</h2><p><strong>回流重绘</strong>在操作节点样式时频繁出现，同时也存在很大程度上的性能问题。回流成本比重绘成本高得多，一个节点的回流很有可能导致子节点、兄弟节点或祖先节点的回流。在一些高性能电脑上也许无什么影响，但回流发生在手机上(明摆说某些安卓手机)，就会减缓加载速度和增加电量消耗</p><p>在上一章中引出一个定向法则：<strong>回流必定引发重绘，重绘不一定引发回流</strong>，可利用该法则解决一些因为回流重绘而引发的性能问题。在优化性能前，需了解什么情况可能产生性能问题，以下罗列一些常见的情况。</p><ul><li>改变窗口大小</li><li>修改盒模型</li><li>增删样式</li><li>重构布局</li><li>重设尺寸</li><li>改变字体</li><li>改动文字</li></ul>',21),r=n("strong",null,"事件循环",-1),u={href:"https://link.juejin.cn/?target=https%3A%2F%2Fhtml.spec.whatwg.org%2Fmultipage%2Fwebappapis.html%23event-loop-processing-model",target:"_blank",rel:"noopener noreferrer"},h=o("<li>浏览器刷新频率为<code>60Hz</code>，即每<code>16.6ms</code>更新一次</li><li>执行事件循环完成微任务</li><li>判断<code>document</code>是否需更新</li><li>判断<code>resize/scroll</code>事件是否存在，存在则触发事件</li><li>判断<code>Media Query</code>是否触发</li><li>更新动作并发送事件</li><li>判断<code>document.isFullScreen</code>是否为<code>true</code>(全屏)</li><li>执行<code>requestAnimationFrame</code>回调,每次重绘之前调用</li>",8),k=n("code",null,"IntersectionObserver",-1),m={href:"https://zhuanlan.zhihu.com/p/447542045",target:"_blank",rel:"noopener noreferrer"},g=n("li",null,"更新界面",-1),b=o(`<p>上述就是浏览器每一帧中可能会做到的事情，若在一帧中有空闲时间，就会执行<code>requestIdleCallback</code>回调</p><p>回到正题，通过定向法则<strong>回流必定引发重绘，重绘不一定引发回流</strong>可知道，尽量减少回流重绘，就是 CSS 性能优化中一个很好的指标。</p><blockquote><p>如何减少和避免回流重绘</p></blockquote><h3 id="使用-visibility-hidden-替换-display-none" tabindex="-1"><a class="header-anchor" href="#使用-visibility-hidden-替换-display-none" aria-hidden="true">#</a> 使用 visibility:hidden 替换 display:none</h3><p>笔者从以下四方面对比<code>display:none</code>和<code>visibility:hidden</code>，<code>display:none</code>简称<code>DN</code>，<code>visibility:hidden</code>简称<code>VH</code>。</p><ul><li>占位表现 <ul><li>DN 不占据空间</li><li>VH 占据空间</li></ul></li><li>触发影响 <ul><li>DN 触发回流重绘</li><li>VH 触发重绘</li></ul></li><li>过渡影响 <ul><li>DN 影响过渡不影响动画</li><li>VH 不影响过渡不影响动画</li></ul></li><li>株连效果 <ul><li>DN 后自身及其子节点全都不可见</li><li>VH 后自身及其子节点全都不可见但可声明子节点<code>visibility:visible</code>单独显示</li></ul></li></ul><p>两者的占位表现、触发影响和株连效果就能说明<code>VH</code>代替<code>DN</code>的好处，从两者区别中就能找出恰当的答案了</p><h3 id="使用-transform-代替-top" tabindex="-1"><a class="header-anchor" href="#使用-transform-代替-top" aria-hidden="true">#</a> 使用 transform 代替 top</h3><p><code>top</code>是几何属性，操作<code>top</code>会改变节点位置从而引发回流，使用<code>transform:translate3d(x,0,0)</code>代替<code>top</code>，只会引发图层重绘，还会间接启动 GPU 加速，该情况在第 12 章<strong>变换与动画</strong>中会详细讲述。</p><h3 id="避免使用-table-布局" tabindex="-1"><a class="header-anchor" href="#避免使用-table-布局" aria-hidden="true">#</a> 避免使用 Table 布局</h3><p>牵一发而动全身用在 <code>Table</code> 布局身上就很适合了，可能很小的一个改动就会造成整个<code>&lt;table&gt;</code>回流，有兴趣的同学可用<code>Chrome Devtools</code>的<code>Performance</code>调试看看，在此就不演示了</p><p>通常可用<code>&lt;ul&gt;</code>、<code>&lt;li&gt;</code>和<code>&lt;span&gt;</code>等标签取代<code>&lt;table&gt;</code>系列标签生成表格。</p><h3 id="避免规则层级过多" tabindex="-1"><a class="header-anchor" href="#避免规则层级过多" aria-hidden="true">#</a> 避免规则层级过多</h3><p>浏览器的<code>CSS解析器</code>解析<code>css文件</code>时，对 CSS 规则是从右到左匹配查找，样式层级过多会影响回流重绘效率，建议保持 CSS 规则在<code>3层</code>左右。</p><h3 id="避免节点属性值放在循环里当成循环变量" tabindex="-1"><a class="header-anchor" href="#避免节点属性值放在循环里当成循环变量" aria-hidden="true">#</a> 避免节点属性值放在循环里当成循环变量</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> top <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;css&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>top
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>top<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>呵呵，每次循环操作 DOM 都会发生回流，应该在循环外使用变量保存一些不会变化的 DOM 映射值</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> top <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;css&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>top
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>top<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="动态改变类而不改变样式" tabindex="-1"><a class="header-anchor" href="#动态改变类而不改变样式" aria-hidden="true">#</a> 动态改变类而不改变样式</h3><p>不要尝试每次操作 DOM 去改变节点样式，这样会频繁触发回流</p><p>更好的方式是使用新的类名预定义节点样式，在执行逻辑操作时收集并确认最终更换的类名集合，在适合时机一次性动态替换原来的类名集合。有点像<code>vue</code>的<code>依赖收集机制</code>，不知这样描述会不会更容易理解</p>`,21),f={href:"https://www.runoob.com/jsref/prop-element-classlist.html",target:"_blank",rel:"noopener noreferrer"},v=o('<h3 id="将频繁回流重绘的节点设置为图层" tabindex="-1"><a class="header-anchor" href="#将频繁回流重绘的节点设置为图层" aria-hidden="true">#</a> 将频繁回流重绘的节点设置为图层</h3><p>上一章的<code>渲染过程</code>最后一步，提到将回流重绘生成的图层逐张合并并显示在屏幕上。可将其理解成<code>Photoshop</code>的图层，若不对图层添加关联，图层间是不会互相影响的。同理，在浏览器中设置频繁回流或重绘的节点为一张新图层，那么新图层就能够阻止节点的渲染行为影响别的节点，这张图层里如何变化都无法影响到其他图层</p><p>设置新图层有两种方式，将节点设置为<code>&lt;video&gt;</code>或<code>&lt;iframe&gt;</code>，为节点添加<code>will-change</code>。<code>will-change</code>是一个很叼的属性，在第 12 章<strong>变换与动画</strong>中会详细讲述</p><h3 id="使用-requestanimationframe-作为动画帧" tabindex="-1"><a class="header-anchor" href="#使用-requestanimationframe-作为动画帧" aria-hidden="true">#</a> 使用 requestAnimationFrame 作为动画帧</h3><p>动画速度越快，回流次数越多，上述有提到浏览器刷新频率为<code>60Hz</code>，即每<code>16.6ms</code>更新一次，而<code>requestAnimationFrame()</code>正是以<code>16.6ms</code>的速度更新一次。所以可用<code>requestAnimationFrame()</code>代替<code>setInterval()</code>。</p>',5);function _(x,y){const a=c("ExternalLinkIcon");return d(),i("div",null,[p,n("p",null,[e("很多同学可能不知，回流重绘其实与浏览器的"),r,e("有关，以下源自对"),n("a",u,[e("HTML 文档"),s(a)]),e("的理解。")]),n("ul",null,[h,n("li",null,[e("执行"),k,e("回调，"),n("a",m,[e("IntersectionObserver API - 回调的触发的时机问题"),s(a)])]),g]),b,n("p",null,[e("各位同学可研究下这个强大的"),n("a",f,[e("classList"),s(a)]),e("，它能满足笔者所说的需求")]),v])}const q=t(l,[["render",_],["__file","回流重绘.html.vue"]]);export{q as default};
