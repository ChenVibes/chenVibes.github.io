import{_ as c}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as d,o as i,c as l,b as e,d as a,a as t,e as r}from"./app-l76D7KiL.js";const n={},s=r('<h3 id="浏览器内核的理解" tabindex="-1"><a class="header-anchor" href="#浏览器内核的理解" aria-hidden="true">#</a> 浏览器内核的理解</h3><ul><li>主要分两个部分：<code>渲染引擎</code>、<code>js引擎</code></li><li><code>渲染引擎：</code>负责取得网页的内容（html css img ...），以及计算网页的显示方式，然后会输出至显示器或者打印机。浏览器的内核不同对于网页的语法解释也不同，所以渲染的效果也不一样</li><li><code>js引擎：</code>解析和执行 javascript 来实现网页的动态效果</li><li>最开始渲染引擎和 js 引擎并没有区分的很明确，后来 js 引擎越来越独立，内核就倾向于只值渲染引擎</li><li><code>IE : trident</code> 内核</li><li><code>Firefox ： gecko</code> 内核</li><li><code>Safari : webkit</code> 内核</li><li><code>Opera</code> :以前是 <code>presto</code> 内核， <code>Opera</code> 现已改⽤<code>Google - Chrome</code> 的 <code>Blink</code> 内核</li><li><code>Chrome:Blink</code> (基于 <code>webkit</code> ，<code>Google与Opera Software</code>共同开发)</li></ul><h3 id="http-请求-作用" tabindex="-1"><a class="header-anchor" href="#http-请求-作用" aria-hidden="true">#</a> HTTP 请求+作用？</h3><ul><li><code>Get</code> 方法：发送一个请求来获取服务器资源</li><li><code>POST</code> 方法：向服务器提交数据</li><li><code>PUT</code> 方法：与<code>POST</code>方法很像，也是提交数据，但<code>PUT</code>制定了资源在服务器上的位置，常用在修改数据</li><li><code>HEAD</code> 方法：只请求页面的首部信息</li><li><code>DELETE</code> 方法：删除服务器上的资源</li><li><code>OPTIONS</code> 方法：用于获取当前<code>URL</code>支持的请求方式</li><li><code>TRACE</code> 方法：用于激活一个远程的应用层请求消息回路</li><li><code>CONNECT</code> 方法：把请求链接转换到透明的<code>TCP/IP</code>的通道</li></ul><h3 id="http-状态吗" tabindex="-1"><a class="header-anchor" href="#http-状态吗" aria-hidden="true">#</a> HTTP 状态吗</h3><ul><li><code>1XX</code> ：信息状态吗 <ul><li><code>100 continue</code> 继续，⼀般在发送 post 请求时，已发送了 http header 之后服务端将返回此信息，表示确认，之后发送具体参数信息</li></ul></li><li><code>2XX</code> ：成功状态吗 <ul><li><code>200 ok</code> 正常返回信息</li><li><code>201 created</code> 请求成功并且服务器创建了新资源</li><li><code>202 accepted</code> 服务器已经接收请求，但尚未处理</li></ul></li><li><code>3XX</code> ：重定向 <ul><li><code>301 move per</code> 请求的网页已经永久重定向</li><li><code>302 found</code> 临时重定向</li><li><code>303 see other</code> 临时冲重定向，且总是使用 get 请求新的 url</li><li><code>304 not modified</code> 自从上次请求后，请求的网页未修改过</li></ul></li><li><code>4XX</code> ：客户端错误 <ul><li><code>400 bad request</code> 服务器无法理解请求的格式，客户端不应当尝试再次使用相同的内容发起请求</li><li><code>401 unauthorized</code> 请求未授权</li><li><code>403 forbidden</code> 禁止访问</li><li><code>404 not found</code> 找不到如何与 url 匹配的资源</li></ul></li><li><code>5XX</code> ：服务器错误 <ul><li><code>500 internal server error</code> 最常见的服务器端的错误</li><li><code>503 service unacailable</code> 服务器端暂时无法处理请求（可能是过载活维护）</li></ul></li></ul><h3 id="从浏览器地址栏输入-url-后发生了什么" tabindex="-1"><a class="header-anchor" href="#从浏览器地址栏输入-url-后发生了什么" aria-hidden="true">#</a> 从浏览器地址栏输入 URL 后发生了什么？</h3><h4 id="基础版本" tabindex="-1"><a class="header-anchor" href="#基础版本" aria-hidden="true">#</a> 基础版本</h4><ul><li>1.的浏览器根据请求的 <code>URL</code> 交给 <code>DNS</code> 域名解析，找到真实 <code>IP</code> ，向服务器发起请求；</li><li>2.服务器交给后台处理完成后返回数据，浏览器接收⽂件<code>（ HTML、JS、CSS 、图象等）</code>；</li><li>3.浏览器对加载到的资源<code>（ HTML、JS、CSS 等）</code>进⾏语法解析，建⽴相应的内部数据结构<code>（如 HTML 的 DOM ）</code>；</li><li>4.载⼊解析到的资源⽂件，渲染⻚⾯，完成。</li></ul><h4 id="详细版" tabindex="-1"><a class="header-anchor" href="#详细版" aria-hidden="true">#</a> 详细版</h4><ul><li>1.从浏览器接收 <code>url</code> 到开启⽹络请求线程（这⼀部分可以展开浏览器的机制以及进程与线程之间的关系）</li><li>2.开启⽹络线程到发出⼀个完整的 <code>HTTP</code> 请求（这⼀部分涉及到 dns 查询， <code>TCP/IP</code> 请求，五层因特⽹协议栈等知识）</li><li>3.从服务器接收到请求到对应后台接收到请求（这⼀部分可能涉及到负载均衡，安全拦截以及后台内部的处理等等）</li><li>4.后台和前台的 <code>HTTP</code> 交互（这⼀部分包括 <code>HTTP</code> 头部、响应码、报⽂结构、 <code>cookie</code> 等知识，可以提下静态资源的 <code>cookie</code> 优化，以及编码解码，如 <code>gzip</code> 压缩等）</li><li>5.单独拎出来的缓存问题， <code>HTTP</code> 的缓存（这部分包括<code>http缓存头部</code>， <code>ETag ， catchcontrol</code> 等）</li><li>6.浏览器接收到 <code>HTTP</code> 数据包后的解析流程（解析 <code>html</code> -词法分析然后解析成 <code>dom</code> 树、解析 <code>css</code> ⽣成 <code>css</code> 规则树、合并成 <code>render</code> 树，然后 <code>layout 、 painting</code> 渲染、复合图层的合成、 <code>GPU</code> 绘制、外链资源的处理、 <code>loaded 和 DOMContentLoaded</code> 等）</li><li>7.<code>CSS</code> 的可视化格式模型（元素的渲染规则，如包含块，控制框， <code>BFC</code> ， IFC 等概念）</li><li>8.<code>JS</code> 引擎解析过程（ <code>JS</code> 的解释阶段，预处理阶段，执⾏阶段⽣成执⾏上下⽂， <code>VO</code> ，作⽤域链、回收机制等等）</li><li>9.其它（可以拓展不同的知识模块，如跨域，<code>web</code>安全， <code>hybrid</code> 模式等等内容）</li></ul><h4 id="详细升级版" tabindex="-1"><a class="header-anchor" href="#详细升级版" aria-hidden="true">#</a> 详细升级版</h4><ul><li><p>1.在浏览器地址栏输⼊<code>URL</code></p></li><li><p>2.浏览器查看缓存，如果请求资源在缓存中并且新鲜，跳转到转码步骤</p><ul><li>2.1 如果资源未缓存，发起新请求</li><li>2.2 如果已缓存，检验是否⾜够新鲜，⾜够新鲜直接提供给客户端，否则与服务器进⾏验证。</li><li>2.3 检验新鲜通常有两个<code>HTTP</code>头进⾏控制 <code>Expires</code> 和 <code>Cache-Control</code> ： <ul><li>2.3.1 <code>HTTP1.0</code>提供<code>Expires</code>，值为⼀个绝对时间表示缓存新鲜⽇期</li><li>2.3.2 <code>HTTP1.1</code>增加了<code>Cache-Control: max-age=</code>,值为以秒为单位的最⼤新鲜时间</li></ul></li></ul></li><li><p>3.浏览器解析<code>URL</code>获取协议，主机，端⼝，<code>path</code></p></li><li><p>4.浏览器组装⼀个<code>HTTP（GET）</code>请求报⽂</p></li><li><p>5.浏览器获取主机<code>ip地址</code>，过程如下：</p><ul><li>5.1 浏览器缓存</li><li>5.2 本机缓存</li><li>5.3 hosts 文件</li><li>5.4 路由器缓存</li><li>5.5 ISP DNS 缓存</li><li>5.6 DNS 递归查询（可能存在负载均衡导致每次 IP 不一致）</li></ul></li><li><p>6.打开一个<code>socket</code>与目标<code>IP地址</code>，端口建立 TCP 链接，<code>三次握手</code>如下：</p><ul><li>6.1 客户端发送一个<code>TCP的SYN=1，Seq=X</code>的包到服务器端口</li><li>6.2 服务器发回<code>SYN=1，ACK=x+1,Seq=Y</code>的相应包</li><li>6.3 客户端发送<code>ACK=Y+1，Seq=z</code></li></ul></li><li><p>7.<code>TCP</code>链接建立后发送<code>HTTP</code>请求</p></li><li><p>8.服务器接收请求后解析，将请求转发到服务器程序，如虚拟主机使用<code>HTTP Host</code>头部判断请求的服务程序</p></li><li><p>9.服务器检测<code>HTTP</code>请求头是否包含缓存验证信息，如果验证缓存新鲜，返回 304 等对应状态</p></li><li><p>10.出合理程序读取完整请求并准备<code>HTTP</code>相应，可能需要查询数据库等操作</p></li><li><p>11.服务器将相应报文通过<code>TCP</code>链接发送回浏览器</p></li><li><p>12.浏览器接收<code>HTTP</code>相应，然后根据情况选择关闭<code>TCP</code>链接或者保留重用，关闭 TCP 链接的四次握手如下：</p><ul><li>12.1 主动方发送<code>Fin=1,ACK=z,Seq=x</code>报文</li><li>12.2 被动方发送<code>ACK=X+1,Seq=Y</code>报文</li><li>12.3 被动方发送<code>Fin=1,ACK=X,Seq=Y</code>报文</li><li>12.4 主动方发送<code>ACK=Y,Seq=x</code> 报文</li></ul></li><li><p>13.浏览器检查相应状态码</p></li><li><p>14.如果资源可缓存，进行缓存</p></li><li><p>15.对相应进行解码</p></li><li><p>16.根据资源类型决定如何处理</p></li><li><p>17.解析<code>HTML</code>文档，构建<code>DOM</code>树，下载资源，构建<code>CSSOM</code>树，执行 js 脚本，这些操作每月严格的先后顺序</p></li><li><p>18.构建 DOM 树：</p><ul><li>18.1 Tokenizing：根据 HTML 规范将字符流解析为标记</li><li>18.2 Lexing：词法分析将标记转换为对象并定义属性和规则</li><li>18.3 DOM construction：根据 HTML 标记关系将对象组成 DOM 树</li></ul></li><li><p>19.解析过程中遇到图⽚、样式表、js ⽂件，启动下载</p></li><li><p>20.构建<code>CSSOM</code>树：</p><ul><li>20.1 <code>Tokenizing</code>：字符流转换为标记流</li><li>20.2 <code>Node</code>：根据标记创建节点</li><li>20.3 <code>CSSOM</code>：节点创建 CSSOM 树</li></ul></li><li><ol start="21"><li>根据<code>DOM树和CSSOM树</code>构建渲染树</li></ol><ul><li>21.1 从<code>DOM树</code>的根节点遍历所有可⻅节点，不可⻅节点包括：1） <code>script , meta</code> 这样本身不可⻅的标签。2)被 css 隐藏的节点，如 display: none</li><li>21.2 对每⼀个可⻅节点，找到恰当的<code>CSSOM</code>规则并应⽤</li><li>21.3 发布可视节点的内容和计算样式</li></ul></li><li><p>22.js 解析如下</p><ul><li>22.1 浏览器创建<code>Document对象</code>并解析<code>HTML</code>，将解析到的元素和⽂本节点添加到⽂档中，此时<code>document.readystate为loading</code></li><li>22.2 HTML 解析器遇到没有<code>async和defer的script时</code>，将他们添加到⽂档中，然后执⾏⾏内或外部脚本。这些脚本会同步执⾏，并且在脚本下载和执⾏时解析器会暂停。这样就可以⽤<code>document.write()</code>把⽂本插⼊到输⼊流中。同步脚本经常简单定义函数和注册事件处理程序，他们可以遍历和操作 script 和他们之前的⽂档内容</li><li>22.3 当解析器遇到设置了<code>async属性的script</code>时，开始下载脚本并继续解析⽂档。脚本会在它下载完成后尽快执⾏，但是解析器不会停下来等它下载。异步脚本禁⽌使⽤<code>document.write()</code>，它们可以访问⾃⼰ script 和之前的⽂档元素</li><li>22.4 当⽂档完成解析，<code>document.readState变成interactive</code></li><li>22.5 所有<code>defer脚本</code>会按照在⽂档出现的顺序执⾏，延迟脚本能访问完整⽂档树，禁⽌使⽤<code>document.write()</code></li><li>22.6 浏览器在<code>Document</code>对象上触发<code>DOMContentLoaded事件</code></li><li>22.7 此时⽂档完全解析完成，浏览器可能还在等待如图⽚等内容加载，等这些内容完成载⼊并且所有异步脚本完成载⼊和执⾏，<code>document.readState变为complete，window触发load事件</code></li></ul></li><li><p>23.显示⻚⾯（HTML 解析过程中会逐步显示⻚⾯）</p></li></ul><h3 id="cookies-sessionstorage-和-localstorage-的区别" tabindex="-1"><a class="header-anchor" href="#cookies-sessionstorage-和-localstorage-的区别" aria-hidden="true">#</a> cookies ， sessionStorage 和 localStorage 的区别</h3><ul><li><code>cookie</code> 是⽹站为了标示⽤户身份⽽储存在⽤户本地终端上的数据（通常经过加密）</li><li><code>cookie</code>数据始终在同源的 http 请求中携带（即使不需要），记会在浏览器和服务器间来回传递（优化点）</li><li><code>sessionStorage</code> 和 <code>localStorage</code> 不会⾃动把数据发给服务器，仅在本地保存</li><li>存储⼤⼩： <ul><li><code>cookie</code> 数据⼤⼩不能超过 4k</li><li><code>sessionStorage 和 localStorage</code> 虽然也有存储⼤⼩的限制，但⽐ cookie ⼤得多，可以达到 5M 或更⼤</li></ul></li><li>有期时间：</li></ul><p><code>localStorage</code> 存储持久数据，浏览器关闭后数据不丢失除⾮主动删除数据</p><p><code>sessionStorage</code> 数据在当前浏览器窗⼝关闭后⾃动删除</p><p><code>cookie 设置的 cookie</code> 过期时间之前⼀直有效，即使窗⼝或浏览器关闭</p><h3 id="浏览器缓存" tabindex="-1"><a class="header-anchor" href="#浏览器缓存" aria-hidden="true">#</a> 浏览器缓存</h3><blockquote><p>浏览器缓存分为强缓存和协商缓存。当客户端请求某个资源时，获取缓存的流程如下</p></blockquote><ul><li>先根据这个资源的⼀些 <code>http header</code> 判断它是否命中强缓存，如果命中，则直接从本地获取缓存资源，不会发请求到服务器；</li><li>当强缓存没有命中时，客户端会发送请求到服务器，服务器通过另⼀些 <code>request header</code>验证这个资源是否命中协商缓存，称为 <code>http</code> 再验证，如果命中，服务器将请求返回，但不返回资源，⽽是告诉客户端直接从缓存中获取，客户端收到返回后就会从缓存中获取资源；</li><li>强缓存和协商缓存共同之处在于，如果命中缓存，服务器都不会返回资源； 区别是，强缓存不对发送请求到服务器，但协商缓存会。</li><li>当协商缓存也没命中时，服务器就会将资源发送回客户端。</li><li>当 <code>ctrl+f5</code> 强制刷新⽹⻚时，直接从服务器加载，跳过强缓存和协商缓存；</li><li>当 <code>f5</code> 刷新⽹⻚时，跳过强缓存，但是会检查协商缓存；</li></ul>',21),p={href:"https://juejin.cn/post/6844903763665240072#heading-5",target:"_blank",rel:"noopener noreferrer"};function h(u,T){const o=d("ExternalLinkIcon");return i(),l("div",null,[s,e("p",null,[e("a",p,[a("强缓存-协商缓存：这篇文章介绍挺细的：https://juejin.cn/post/6844903763665240072#heading-5"),t(o)])])])}const P=c(n,[["render",h],["__file","面经系列-浏览器.html.vue"]]);export{P as default};
