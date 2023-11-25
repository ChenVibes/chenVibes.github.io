import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as i,c as d,b as e,d as n,a as r,e as h}from"./app-6ed4d95f.js";const c={},s=h(`<h3 id="一-发送效果" tabindex="-1"><a class="header-anchor" href="#一-发送效果" aria-hidden="true">#</a> 一.发送效果</h3><h4 id="html" tabindex="-1"><a class="header-anchor" href="#html" aria-hidden="true">#</a> HTML</h4><pre><code>&lt;div id=&quot;send-btn&quot;&gt;
  &lt;button&gt;
// 这里是一个svg的占位
Send
  &lt;/button&gt;
&lt;/div&gt;
复制代码
</code></pre><h4 id="css" tabindex="-1"><a class="header-anchor" href="#css" aria-hidden="true">#</a> CSS</h4><pre><code>#send-btn{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

button {
  background: #5f55af;
  border: 0;
  border-radius: 5px;
  padding: 10px 30px 10px 20px;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
}

button svg {
  display: inline-block;
  vertical-align: middle;
  padding-right: 5px;
}

button:hover svg {
  animation: fly 2s ease 1;
}

@keyframes fly {
  0% {
transform: translateX(0%);
  }

  50% {
transform: translateX(300%);
  }

  100% {
transform: translateX(0);
  }
}
复制代码
</code></pre><h4 id="gif-图" tabindex="-1"><a class="header-anchor" href="#gif-图" aria-hidden="true">#</a> GIF 图</h4><figure><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ba88b49b984a48b2adc72db1b62049c7~tplv-k3u1fbpfcp-zoom-1.image" alt="hover_effect_send" tabindex="0"><figcaption>hover_effect_send</figcaption></figure><h3 id="二-霓虹效果" tabindex="-1"><a class="header-anchor" href="#二-霓虹效果" aria-hidden="true">#</a> 二.霓虹效果</h3><h4 id="html-1" tabindex="-1"><a class="header-anchor" href="#html-1" aria-hidden="true">#</a> HTML</h4><pre><code>&lt;div id=&quot;neon-btn&quot;&gt;
  &lt;button class=&quot;btn one&quot;&gt;Hover me&lt;/button&gt;
  &lt;button  class=&quot;btn two&quot;&gt;Hover me&lt;/button&gt;
  &lt;button  class=&quot;btn three&quot;&gt;Hover me&lt;/button&gt;
&lt;/div&gt;
复制代码
</code></pre><h4 id="css-1" tabindex="-1"><a class="header-anchor" href="#css-1" aria-hidden="true">#</a> CSS</h4><pre><code>#neon-btn {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  background: #031628;
}

.btn {
  border: 1px solid;
  background-color: transparent;
  text-transform: uppercase;
  font-size: 14px;
  padding: 10px 20px;
  font-weight: 300;
}

.one {
  color: #4cc9f0;
}

.two {
  color: #f038ff;
}

.three {
  color: #b9e769;
}

.btn:hover {
  color: white;
  border: 0;
}

.one:hover {
  background-color: #4cc9f0;
  -webkit-box-shadow: 10px 10px 99px 6px rgba(76,201,240,1);
  -moz-box-shadow: 10px 10px 99px 6px rgba(76,201,240,1);
  box-shadow: 10px 10px 99px 6px rgba(76,201,240,1);
}

.two:hover {
  background-color: #f038ff;
  -webkit-box-shadow: 10px 10px 99px 6px rgba(240, 56, 255, 1);
  -moz-box-shadow: 10px 10px 99px 6px rgba(240, 56, 255, 1);
  box-shadow: 10px 10px 99px 6px rgba(240, 56, 255, 1);
}

.three:hover {
  background-color: #b9e769;
  -webkit-box-shadow: 10px 10px 99px 6px rgba(185, 231, 105, 1);
  -moz-box-shadow: 10px 10px 99px 6px rgba(185, 231, 105, 1);
  box-shadow: 10px 10px 99px 6px rgba(185, 231, 105, 1);
}
复制代码
</code></pre><h4 id="gif-图-1" tabindex="-1"><a class="header-anchor" href="#gif-图-1" aria-hidden="true">#</a> GIF 图</h4><figure><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/63bd83b42ff94b6a8d645a6d564c3ca8~tplv-k3u1fbpfcp-zoom-1.image" alt="hover_effect_neon" tabindex="0"><figcaption>hover_effect_neon</figcaption></figure><h3 id="三-边框效果" tabindex="-1"><a class="header-anchor" href="#三-边框效果" aria-hidden="true">#</a> 三.边框效果</h3><h4 id="html-2" tabindex="-1"><a class="header-anchor" href="#html-2" aria-hidden="true">#</a> HTML</h4><pre><code>&lt;div id=&quot;draw-border&quot;&gt;
  &lt;button&gt;Hover me&lt;/button&gt;
&lt;/div&gt;
复制代码
</code></pre><h4 id="css-2" tabindex="-1"><a class="header-anchor" href="#css-2" aria-hidden="true">#</a> CSS</h4><pre><code>#draw-border {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

button {
  border: 0;
  background: none;
  text-transform: uppercase;
  color: #4361ee;
  font-weight: bold;
  position: relative;
  outline: none;
  padding: 10px 20px;
  box-sizing: border-box;
}

button::before, button::after {
  box-sizing: inherit;
  position: absolute;
  content: &#39;&#39;;
  border: 2px solid transparent;
  width: 0;
  height: 0;
}

button::after {
  bottom: 0;
  right: 0;
}

button::before {
  top: 0;
  left: 0;
}

button:hover::before, button:hover::after {
  width: 100%;
  height: 100%;
}

button:hover::before {
  border-top-color: #4361ee;
  border-right-color: #4361ee;
  transition: width 0.3s ease-out, height 0.3s ease-out 0.3s;
}

button:hover::after {
  border-bottom-color: #4361ee;
  border-left-color: #4361ee;
  transition: border-color 0s ease-out 0.6s, width 0.3s ease-out 0.6s, height 0.3s ease-out 1s;
}
复制代码
</code></pre><h4 id="gif-效果" tabindex="-1"><a class="header-anchor" href="#gif-效果" aria-hidden="true">#</a> GIF 效果</h4><figure><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/295e3b962d9b4b08b34226604343d256~tplv-k3u1fbpfcp-zoom-1.image" alt="hover_effect_draw" tabindex="0"><figcaption>hover_effect_draw</figcaption></figure><h3 id="四-圆形效果" tabindex="-1"><a class="header-anchor" href="#四-圆形效果" aria-hidden="true">#</a> 四.圆形效果</h3><h4 id="html-3" tabindex="-1"><a class="header-anchor" href="#html-3" aria-hidden="true">#</a> HTML</h4><pre><code>&lt;div id=&quot;circle-btn&quot;&gt;
  &lt;div class=&quot;btn-container&quot;&gt;
// 这里有一个svg元素
&lt;button&gt;Hover me&lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;
复制代码
</code></pre><h4 id="css-3" tabindex="-1"><a class="header-anchor" href="#css-3" aria-hidden="true">#</a> CSS</h4><pre><code>#circle-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.btn-container {
  position: relative;
}

button {
  border: 0;
  border-radius: 50px;
  color: white;
  background: #5f55af;
  padding: 15px 20px 16px 60px;
  text-transform: uppercase;
  background: linear-gradient(to right, #f72585 50%, #5f55af 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition:all 2s ease;
}

svg {
  background: #f72585;
  padding: 8px;
  border-radius: 50%;
  position: absolute;
  left: 0;
  top: 0%;
}

button:hover {
   background-position: left bottom;
}
复制代码
</code></pre><h4 id="gif-图-2" tabindex="-1"><a class="header-anchor" href="#gif-图-2" aria-hidden="true">#</a> GIF 图</h4><figure><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4719262123064ff683dfdff17555efde~tplv-k3u1fbpfcp-zoom-1.image" alt="hover_effect_circle" tabindex="0"><figcaption>hover_effect_circle</figcaption></figure><h3 id="五-圆角效果" tabindex="-1"><a class="header-anchor" href="#五-圆角效果" aria-hidden="true">#</a> 五.圆角效果</h3><h4 id="html-4" tabindex="-1"><a class="header-anchor" href="#html-4" aria-hidden="true">#</a> HTML</h4><pre><code>&lt;div id=&quot;border-btn&quot;&gt;
  &lt;button&gt;Hover me&lt;/button&gt;
&lt;/div&gt;
复制代码
</code></pre><h4 id="css-4" tabindex="-1"><a class="header-anchor" href="#css-4" aria-hidden="true">#</a> CSS</h4><pre><code>#border-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

button {
  border: 0;
  border-radius: 10px;
  background: #2ec4b6;
  text-transform: uppercase;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 15px 30px;
  outline: none;
  position: relative;
  transition: border-radius 3s;
  -webkit-transition: border-radius 3s;
}

button:hover {
   border-bottom-right-radius: 50px;
   border-top-left-radius: 50px;
   border-bottom-left-radius: 10px;
   border-top-right-radius: 10px;
}
复制代码
</code></pre><h4 id="gif-图-3" tabindex="-1"><a class="header-anchor" href="#gif-图-3" aria-hidden="true">#</a> GIF 图</h4><figure><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/514387debb8643a19bf3311bb1b735c1~tplv-k3u1fbpfcp-zoom-1.image" alt="hover_effect_radius" tabindex="0"><figcaption>hover_effect_radius</figcaption></figure><h3 id="六-冰冻效果" tabindex="-1"><a class="header-anchor" href="#六-冰冻效果" aria-hidden="true">#</a> 六.冰冻效果</h3><h4 id="html-5" tabindex="-1"><a class="header-anchor" href="#html-5" aria-hidden="true">#</a> HTML</h4><pre><code>&lt;div id=&quot;frozen-btn&quot;&gt;
  &lt;button class=&quot;green&quot;&gt;Hover me&lt;/button&gt;
  &lt;button class=&quot;purple&quot;&gt;Hover me&lt;/button&gt;
&lt;/div&gt;
复制代码
</code></pre><h4 id="css-5" tabindex="-1"><a class="header-anchor" href="#css-5" aria-hidden="true">#</a> CSS</h4><pre><code>#frozen-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

button {
  border: 0;
  margin: 20px;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: bold;
  padding: 15px 50px;
  border-radius: 50px;
  color: white;
  outline: none;
  position: relative;
}

button:before{
  content: &#39;&#39;;
  display: block;
  background: linear-gradient(to left, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.4) 50%);
  background-size: 210% 100%;
  background-position: right bottom;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  bottom:0;
  right:0;
  left: 0;
  border-radius: 50px;
  transition: all 1s;
  -webkit-transition: all 1s;
}

.green {
   background-image: linear-gradient(to right, #25aae1, #40e495);
   box-shadow: 0 4px 15px 0 rgba(49, 196, 190, 0.75);
}

.purple {
   background-image: linear-gradient(to right, #6253e1, #852D91);
   box-shadow: 0 4px 15px 0 rgba(236, 116, 149, 0.75);
}

.purple:hover:before {
  background-position: left bottom;
}

.green:hover:before {
  background-position: left bottom;
}
复制代码
</code></pre><h4 id="gif-图-4" tabindex="-1"><a class="header-anchor" href="#gif-图-4" aria-hidden="true">#</a> GIF 图</h4><figure><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b8572b77cd25496d85655d4d6fb12a7d~tplv-k3u1fbpfcp-zoom-1.image" alt="hover_effect_frozen" tabindex="0"><figcaption>hover_effect_frozen</figcaption></figure><h3 id="七-闪亮效果" tabindex="-1"><a class="header-anchor" href="#七-闪亮效果" aria-hidden="true">#</a> 七.闪亮效果</h3><h4 id="html-6" tabindex="-1"><a class="header-anchor" href="#html-6" aria-hidden="true">#</a> HTML</h4><pre><code>&lt;div id=&quot;shiny-shadow&quot;&gt;
  &lt;button&gt;&lt;span&gt;Hover me&lt;/span&gt;&lt;/button&gt;
&lt;/div&gt;
复制代码
</code></pre><h4 id="css-6" tabindex="-1"><a class="header-anchor" href="#css-6" aria-hidden="true">#</a> CSS</h4><pre><code>#shiny-shadow {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #1c2541;
}

button {
  border: 2px solid white;
  background: transparent;
  text-transform: uppercase;
  color: white;
  padding: 15px 50px;
  outline: none;
  overflow: hidden;
  position: relative;
}

span {
  z-index: 20;
}

button:after {
  content: &#39;&#39;;
display: block;
position: absolute;
top: -36px;
left: -100px;
background: white;
width: 50px;
height: 125px;
opacity: 20%;
transform: rotate(-45deg);
}

button:hover:after {
  left: 120%;
  transition: all 600ms cubic-bezier(0.3, 1, 0.2, 1);
   -webkit-transition: all 600ms cubic-bezier(0.3, 1, 0.2, 1);
}
复制代码
</code></pre><h4 id="gif-图-5" tabindex="-1"><a class="header-anchor" href="#gif-图-5" aria-hidden="true">#</a> GIF 图</h4><figure><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e6e909e04d0a4b878ef48889fe147765~tplv-k3u1fbpfcp-zoom-1.image" alt="hover_effect_shiny" tabindex="0"><figcaption>hover_effect_shiny</figcaption></figure><h3 id="八-加载效果" tabindex="-1"><a class="header-anchor" href="#八-加载效果" aria-hidden="true">#</a> 八.加载效果</h3><h4 id="html-7" tabindex="-1"><a class="header-anchor" href="#html-7" aria-hidden="true">#</a> HTML</h4><pre><code>&lt;div id=&quot;loading-btn&quot;&gt;
  &lt;button&gt;&lt;span&gt;Hover me&lt;/span&gt;&lt;/button&gt;
&lt;/div&gt;
复制代码
</code></pre><h4 id="css-7" tabindex="-1"><a class="header-anchor" href="#css-7" aria-hidden="true">#</a> CSS</h4><pre><code>#loading-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

button {
  background: transparent;
  border: 0;
  border-radius: 0;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 20px;
  padding: 15px 50px;
  position: relative;
}

button:before {
  transition: all 0.8s cubic-bezier(0.7, -0.5, 0.2, 2);
  content: &#39;&#39;;
  width: 1%;
  height: 100%;
  background: #ff5964;
  position: absolute;
  top: 0;
  left: 0;
}

button span {
  mix-blend-mode: darken;
}

button:hover:before {
  background: #ff5964;
  width: 100%;
}
复制代码
</code></pre><h4 id="gif-图-6" tabindex="-1"><a class="header-anchor" href="#gif-图-6" aria-hidden="true">#</a> GIF 图</h4><figure><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/eee9698995b9441ba3fa622780e5cba8~tplv-k3u1fbpfcp-zoom-1.image" alt="hover_effect_load" tabindex="0"><figcaption>hover_effect_load</figcaption></figure><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3>`,57),b=e("code",null,":before",-1),p=e("code",null,":after",-1),f={href:"https://www.blog.duomly.com/html-button-hover-effects/",target:"_blank",rel:"noopener noreferrer"},l={href:"https://github.com/reng99/blogs",target:"_blank",rel:"noopener noreferrer"};function u(g,x){const t=a("ExternalLinkIcon");return i(),d("div",null,[s,e("p",null,[n("巧用伪元素"),b,n("、"),p,n("等，让你的页面按钮眼前一亮。原文链接："),e("a",f,[n("8 amazing HTML button hover effects, that will make your website memorable"),r(t)]),n("。更多内容："),e("a",l,[n("github.com/reng99/blog…"),r(t)])])])}const _=o(c,[["render",u],["__file","CSS八种让人眼前一亮的HOVER效果.html.vue"]]);export{_ as default};
