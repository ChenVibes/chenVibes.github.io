import{_ as p}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as n,o as c,c as a,b as e,d,a as r,e as t}from"./app-od6tKAwO.js";const i={},s=e("p",null,"::: tip 参考文章",-1),l={href:"https://juejin.cn/post/6918323869824909319",target:"_blank",rel:"noopener noreferrer"},h=t('<p>:::</p><h2 id="移动-web-开发基础知识" tabindex="-1"><a class="header-anchor" href="#移动-web-开发基础知识" aria-hidden="true">#</a> 移动 Web 开发基础知识</h2><h3 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念" aria-hidden="true">#</a> 基本概念</h3><h4 id="分辨率" tabindex="-1"><a class="header-anchor" href="#分辨率" aria-hidden="true">#</a> 分辨率</h4><h4 id="分类" tabindex="-1"><a class="header-anchor" href="#分类" aria-hidden="true">#</a> 分类</h4><ul><li>设备分辨率：适用于电子屏幕,<code>设备分辨率</code>反映了硬件设备处理图像时的效果是否细腻（别名：<code>显示器分辨率</code>，<code>屏幕分辨率</code>，<code>物理分辨率</code>）</li></ul><p>::: tip 提示</p><p>显示器分辨率（屏幕分辨率）是指显示器能显示的像素有多少。 由于屏幕上的点、线和面都是由像素组成的，显示器可显示的像素越多，画面就越精细，同样的屏幕区域内能显示的信息也越多。</p><ul><li>显示分辨率一定的情况下，显示屏越小图像越清晰</li><li>显示屏大小固定时，显示分辨率越高图像越清晰</li></ul><p>:::</p><ul><li>图像分辨率：适用于图像/设计稿,<code>图像分辨率</code>指标的高低反映了图像清晰程度</li></ul><p><strong>在 PC 端非 retina 屏</strong>上,设备分辨率等于图像分辨率</p><p><code>分辨率=画面水平方向的像素值 * 画面垂直方向的像素值</code></p><p>例如，一个屏幕分辨率是 1024×768 =786432 ，也就是说：水平方向上有 1024 个物理像素,垂直方向上有 768 个物理像素</p><h4 id="单位" tabindex="-1"><a class="header-anchor" href="#单位" aria-hidden="true">#</a> 单位</h4><p>分辨率的单位用 <code>屏幕像素密度</code> 来表示（屏幕像素密度，即每英寸屏幕所拥有的像素数，即在一个对角线长度为 1 英寸的正方形内所拥有的像素数）</p><p><code>PPI</code>: <strong>Pixels Per Inch</strong>(像素每英寸) 适用于<code>图像分辨率</code></p><p><code>DPI</code>: <strong>Dots Per Inch</strong>(点每英寸)适用于<code>设备分辨率</code></p><p><span style="color:red;">PPI/DPI 越大，画面就越细腻。当用于描述显示器设备时 PPI 与 DPI 是同一个概念</span></p><p><strong><code>PPI/DPI的计算</code></strong>：</p><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/PPI计算公式.png" alt="PPI计算公式" tabindex="0" loading="lazy"><figcaption>PPI计算公式</figcaption></figure><span style="color:red;"> 相同的分辨率，更高的 PPI 表现为物理尺寸更小; 物理尺寸相同，较低的 PPI 表现为较低的分辨率 </span><h4 id="像素" tabindex="-1"><a class="header-anchor" href="#像素" aria-hidden="true">#</a> 像素</h4><p><strong><code>逻辑像素-PX(CSS pixels)也叫：设备独立像素、CSS像素</code></strong>:</p><p>浏览器内的一切长度都是以 CSS 像素为单位的，CSS 像素的单位是 px，<span style="color:red;">px 是一个相对单位，相对的是设备物理像素(device pixel)，其相对性体现在在同一个设备上或在不同设备之间每 1 个 px 所代表的物理像素是可以变化的</span></p><p><code>CSS 像素</code>的单位是<code>PX</code>(CSS pixels), 在浏览器中可以通过 <code>screen.width</code> ,<code>screen.height</code> 获取浏览器的<code>逻辑像素</code></p><p>在一般 PC 屏幕上， CSS 的 1px = PC 屏幕的 1 个物理像素</p><p>retina 屏幕上， CSS 的 1px = PC 屏幕的 4 个物理像素</p><p>iphone3 的分辨率是 320*480。 但是从 iphone4 开始，苹果公司推出了的 retina 屏，分辨率提高了一倍，变成 640x960，但屏幕尺寸却没变化，这就意味着同样大小的屏幕上，像素却多了一倍</p><p>安卓设备上的一个 css 像素相当于多少个屏幕物理像素，也因设备的不同而不同</p><p><strong><code>用户缩放浏览器也会引起 css 中 px 的变化</code></strong>：</p><p>当用户把页面放大一倍，那么 css 中 1px 所代表的物理像素也会增加一倍；</p><p>把页面缩小一倍，css 中 1px 所代表的物理像素也会减少一倍</p><p>假设我们用 PC 浏览器打开一个页面，浏览器此时的宽度为 800px，页面上同时有一个 400px 宽的块级元素容器。很明显此时块状容器应该占页面的一半。但如果我们把页面放大，放大为 200%，也就是原来的两倍。此时块状容器则横向占满了整个浏览器。但此时我们既没有调整浏览器窗口大小，也没有改变块状元素的 css 宽度，但是它看上去却变大了一倍——这是因为我们<strong>把 CSS 像素放大为了原来的两倍</strong>.也就是说默认情况下一个 CSS 像素应该是等于一个物理像素的宽度的，但是浏览器的放大操作让一个 CSS 像素等于了两个设备像素宽度。 从上面的例子可以看出，<strong>CSS 像素从来都只是一个相对值</strong>。</p><p><strong><code>物理像素-DP(device pixels),也叫设备像素、设备物理像素</code></strong>:</p><p>::: tip pt 和 px 的关系 pt 和 px 的关系就是—— <strong>1pt 里面有几个像素点</strong>。（比如 1pt 里面有 1 个 px，也可以有 2 个，3 个） :::</p><p><code>设备像素（物理像素）</code>，顾名思义，显示屏是由一个个物理像素点组成的，通过控制每个像素点的颜色，使屏幕显示出不同的图像，屏幕从工厂出来那天起，它上面的物理像素点就固定不变了，单位 pt。</p><p>设备屏幕实际拥有的像素点，屏幕的基本单元，是有实体的。</p><p>比如 iPhone 6 的屏幕在宽度方向有 750 个物理像素点，高度方向有 1334 个物理像素点，所以 iPhone 6 总共有 750*1334 个物理像素点。</p><p>所谓的一倍屏、二倍屏(Retina)、三倍屏，指的是设备以多少物理像素来显示一个 CSS 像素，也就是说，多倍屏以更多更精细的物理像素点来显示一个 CSS 像素点，在普通屏幕下 1 个 CSS 像素对应 1 个物理像素。在 Retina 屏幕下，1 个 CSS 像素对应 4 个物理像素。</p><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/dpr.png" alt="dpr" tabindex="0" loading="lazy"><figcaption>dpr</figcaption></figure><p>可以发现，在同样的大小下，2dpr 的屏幕时普通屏幕像素点的 4 倍，3dpr 的屏幕时普通屏幕像素点的 9 倍。这就是 retina 屏幕</p><p><strong><code>设备像素比-DPR(device pixels ratio)</code></strong>:</p><p><strong>设备像素比(dpr 描述的是未缩放状态下，<span style="color:red;">一个方向上</span>物理像素和 CSS 像素的比值)</strong></p><p><code>设备像素比(dpr)</code>是指开发中 1 个 css 像素占用多少设备像素，如 2 代表 1 个 css 像素用 2x2 个设备像素来绘制。</p><p>其实在很久以前，CSS 的 1px，屏幕就渲染成 1 个实际的物理像素点，即 DPR=1。</p><p>但从 iPhone4 开始， 苹果公司为其产品 mac、iPhone 以及 iPad 的屏幕配置了 Retina 高清屏，在 Retina 屏上，,DPR=2</p><p>那 CSS 的 1px 到底等于几个物理像素呢？</p><span style="color:red;"> 把页面放大一倍，那么 CSS 中 1px 所代表的物理像素也会增加一倍； 把页面缩小一倍，CSS 中 1px 所代表的物理像素也会减少一倍。 </span><p>在某些浏览器中，<code>window.devicePixelRatio</code> 可以获得此比例,即 devicePixelRatio = 设备物理像素 / 逻辑像素。</p><p>但是要注意的是，<code>window.devicePixelRatio</code> 在不同的浏览器中还存在些许的兼容性问题</p>',51);function g(P,S){const o=n("ExternalLinkIcon");return c(),a("div",null,[s,e("p",null,[e("a",l,[d("作为前端，你应该了解的分辨率/逻辑像素/物理像素/retina 屏知识 🧐"),r(o)])]),h])}const C=p(i,[["render",g],["__file","移动Web开发入门.html.vue"]]);export{C as default};
