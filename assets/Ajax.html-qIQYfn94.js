import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as i,e as s,b as n}from"./app-l76D7KiL.js";const t={},l=s(`<h2 id="一、ajax" tabindex="-1"><a class="header-anchor" href="#一、ajax" aria-hidden="true">#</a> 一、AJAX</h2><h3 id="_1-概念" tabindex="-1"><a class="header-anchor" href="#_1-概念" aria-hidden="true">#</a> 1.概念：</h3><ul><li><p>（1）ajax 不是一个新的语言，本质上还是 js，综合运用了很多的奇数</p></li><li><p>（2）本质上 ajax 进行数据传输，基于 http 协议（get/post）</p><ul><li><h6 id="js-是一个单线程的语言-代码从上往下顺序执行-有一个时间队列-event-loop-js-遇到异步事件-将异步事件扔到事件队列中-不会阻塞主线程的执行-等主线程执行完成后浏览器会不断轮巡事件队列-如果发现异步事件满足事件-将异步事件去除-到主线程执行" tabindex="-1"><a class="header-anchor" href="#js-是一个单线程的语言-代码从上往下顺序执行-有一个时间队列-event-loop-js-遇到异步事件-将异步事件扔到事件队列中-不会阻塞主线程的执行-等主线程执行完成后浏览器会不断轮巡事件队列-如果发现异步事件满足事件-将异步事件去除-到主线程执行" aria-hidden="true">#</a> js 是一个单线程的语言，代码从上往下顺序执行，有一个时间队列 event loop；js 遇到异步事件，将异步事件扔到事件队列中，不会阻塞主线程的执行；等主线程执行完成后浏览器会不断轮巡事件队列，如果发现异步事件满足事件，将异步事件去除，到主线程执行</h6></li></ul></li><li><p>ajax 和执行定时器一样，都是异步事件；ajax 用于和后台进行数据交互，所以可能会消耗大量时间</p></li></ul><h3 id="_2、xmlhttprequest-对象" tabindex="-1"><a class="header-anchor" href="#_2、xmlhttprequest-对象" aria-hidden="true">#</a> 2、XMLHttpRequest 对象</h3><ul><li>发送请求前，需要先创建 XMLHttpRequset 对象，它是浏览器内建对象，</li><li>ajax 发送请求（get，post）一定是基于 http 协议</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var xhr=new XMLHttpRequset（）;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>请求基于 http 协议，就一定有一定规范：1，请求行，2.请求头 3，请求主体 设置了这三个之后, 就可以发送 get/post 请求</li></ul><h4 id="_2-1、发送-get-请求" tabindex="-1"><a class="header-anchor" href="#_2-1、发送-get-请求" aria-hidden="true">#</a> 2-1、发送 get 请求</h4><p>xhr.open(type,url,async)</p><ul><li><ol><li>设置请求行 ( 请求类型, 请求地址 ) open 设置请求打开方式 - 参数 1: type 请求类型 - 参数 2: url 请求地址 - 参数 3: async 是否异步 默认 true 就是异步, false xhr.open(&#39;post&#39;,&#39;url&#39;)</li></ol></li><li>2.设置请求头，</li><li>get 请求没有请求体，所以不要设置请求体的编码方式 content-type 所以，不用请求头，按浏览器默认的就可以了</li><li>3.设置请求体 并发送请求 <ul><li>get 请求没有请求体</li><li>send（请求体） get 传 null</li><li>xhr.send(null);</li></ul></li></ul><h4 id="_2-2、发送-post-请求" tabindex="-1"><a class="header-anchor" href="#_2-2、发送-post-请求" aria-hidden="true">#</a> 2-2、发送 post 请求</h4><ul><li><ol><li>设置请求行 ( 请求类型, 请求地址 ) open 设置请求打开方式</li></ol><ul><li>参数 1: 请求类型 <ul><li>参数 2: 请求地址</li><li>参数 3: 是否异步 默认 true 就是异步, false</li></ul></li></ul></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token function">open</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span>url<span class="token punctuation">,</span>async<span class="token punctuation">)</span>
    post 请求 type<span class="token operator">:</span> post<span class="token punctuation">,</span> url 不拼接参数
    xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;post&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;05-post.php&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>2.设置请求头 <ul><li>get 请求没有请求体，所以不要设置请求体的编码方式 content-type,所以，不用请求头，按浏览器默认的就可以了，</li><li>post 请求有请求体，所以需要设置 content-type，设置请求头，告诉后台浏览器请求的编码方式</li></ul></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>xhr<span class="token punctuation">.</span><span class="token function">setRequestHeader</span><span class="token punctuation">(</span><span class="token string">&#39;content-type&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;application/x-www-form-urlencoded&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><ol start="3"><li>设置请求体 并发送请求</li></ol></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//    get请求没有请求体</span>
<span class="token comment">//    send( 请求体 )  get 传 null</span>
xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;username=Jepson&amp;password=123456&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-3、获取响应" tabindex="-1"><a class="header-anchor" href="#_2-3、获取响应" aria-hidden="true">#</a> 2-3、获取响应</h4><ul><li>readyState</li></ul><h6 id="readystate-有五种可能的值-用来标记当前-xhr-的状态" tabindex="-1"><a class="header-anchor" href="#readystate-有五种可能的值-用来标记当前-xhr-的状态" aria-hidden="true">#</a> readyState 有五种可能的值：用来标记当前 xhr 的状态</h6><ul><li><p>xhr.readyState = 0 时，UNSENT open 尚未调用</p></li><li><p>xhr.readyState = 1 时，OPENED open 已调用</p></li><li><p>xhr.readyState = 2 时，HEADERS_RECEIVED 接收到头信息</p></li><li><p>xhr.readyState = 3 时，LOADING 接收到响应主体</p></li><li><p>xhr.readyState = 4 时，DONE 响应完成</p></li><li><p>因为 ajax 是异步的, 发送请求的过程, 不会阻塞主线程的执行，我们需要监听 readyState 的变化</p></li><li><p>onreadystatechange 方法可以监听 readyState 的变化 每变换一次都会触发</p></li><li><p>HTTP 响应分为 3 个部分，状态行、响应头、响应体。</p></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//给xhr注册一个onreadystatechange事件，当xhr的状态发生状态发生改变时，会触发这个事件。</span>
xhr<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span><span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>readystate<span class="token operator">===</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token comment">//1.获取状态行</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;状态行:&#39;</span><span class="token operator">+</span>xhr<span class="token punctuation">.</span>status）<span class="token punctuation">;</span>
<span class="token comment">//2.获取响应头</span>
console<span class="token punctuation">.</span>log（<span class="token string">&#39;所有的响应头:&#39;</span><span class="token operator">+</span>xhr<span class="token punctuation">.</span><span class="token function">getAllResponseHeaders</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;指定响应头:&#39;</span><span class="token operator">+</span>xhr<span class="token punctuation">.</span><span class="token function">getResponseHeader</span><span class="token punctuation">(</span>content<span class="token operator">-</span>type<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//3. 获取响应体</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">}</span>


<span class="token comment">// status 表示状态码 200 说明响应成功</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-数据交互" tabindex="-1"><a class="header-anchor" href="#_3-数据交互" aria-hidden="true">#</a> 3. 数据交互</h3><ul><li><p>浏览器端只是负责用户的交互和数据的收集以及展示，真正的数据都是存储在服务器端的。</p></li><li><p>我们现在通过 ajax 的确可以返回一些简单的数据（一个字符串）,但是在实际开发过程中，肯定会会设计到大量的复杂类型的数据传输，比如数组、对象等，但是每个编程语言的语法都不一样。</p></li><li><p>因此我们会采用通过的数据交换格式（XML、JSON）来进行数据的交互。</p></li></ul><h4 id="_3-1-xml-了解" tabindex="-1"><a class="header-anchor" href="#_3-1-xml-了解" aria-hidden="true">#</a> 3-1 XML(了解)</h4><ul><li>什么是 XML <ul><li>XML 指可扩展标记语言（EXtensible Markup Language）</li><li>XML 是一种标记语言，很类似 HTML</li><li>XML 的设计宗旨是传输数据，而非显示数据</li><li>XML 标签没有被预定义。您需要自行定义标签。</li></ul></li><li>语法规范 <ul><li>第一行必须是版本信息</li><li>必须有一个根元素（有且仅有一个）</li><li>标签不可有空格、不可以数字或.开头、大小写敏感</li><li>不可交叉嵌套，都是双标签，如果是单标签，必须闭合</li><li>属性双引号（浏览器自动修正成双引号了）</li><li>特殊符号要使用实体</li><li>注释和 HTML 一样</li></ul></li></ul><h4 id="_3-2php-获取-xml-文件的内容" tabindex="-1"><a class="header-anchor" href="#_3-2php-获取-xml-文件的内容" aria-hidden="true">#</a> 3-2php 获取 xml 文件的内容</h4><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// 注意: 如果需要返回 xml 数据, 需要将 content-type 改成 text/xml, 不然浏览器以 text/html 解析</span>
<span class="token function">header</span><span class="token punctuation">(</span> <span class="token string single-quoted-string">&#39;content-type:text/xml;charset=utf-8&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// file_get_content 用于获取文件的内容</span>
<span class="token comment">// 参数: 文件的路径</span>
<span class="token variable">$result</span> <span class="token operator">=</span> <span class="token function">file_get_content</span><span class="token punctuation">(</span> <span class="token string double-quoted-string">&quot;data.xml&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token variable">$result</span><span class="token punctuation">;</span>

php关联数组 <span class="token operator">==</span><span class="token operator">&gt;</span>  <span class="token function">json</span>   <span class="token punctuation">(</span> json_encode <span class="token punctuation">)</span>

<span class="token comment">// php的关联数组</span>
<span class="token variable">$obj</span> <span class="token operator">=</span> <span class="token keyword">array</span><span class="token punctuation">(</span>
  <span class="token string double-quoted-string">&quot;a&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;hello&quot;</span><span class="token punctuation">,</span>
  <span class="token string double-quoted-string">&quot;b&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;world&quot;</span><span class="token punctuation">,</span>
  <span class="token string double-quoted-string">&quot;name&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;鹏鹏&quot;</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//json字符串</span>
<span class="token variable">$json</span> <span class="token operator">=</span> <span class="token function">json_encode</span><span class="token punctuation">(</span> <span class="token variable">$obj</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token variable">$json</span><span class="token punctuation">;</span>

json <span class="token operator">==</span><span class="token operator">&gt;</span> php对象<span class="token operator">/</span>关联数组	<span class="token punctuation">(</span> json_decode <span class="token punctuation">)</span>
<span class="token variable">$json</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;{&quot;a&quot;: &quot;Hello&quot;, &quot;b&quot;: &quot;World&quot;}&#39;</span><span class="token punctuation">;</span><span class="token comment">//json字符串</span>
<span class="token comment">//第一个参数：json字符串</span>
<span class="token comment">//第二个参数：</span>
<span class="token comment">//false，将json转换成对象(默认)</span>
<span class="token comment">//true：将json转换成数组(推荐)</span>
<span class="token variable">$obj</span> <span class="token operator">=</span> <span class="token function">json_decode</span><span class="token punctuation">(</span><span class="token variable">$json</span><span class="token punctuation">,</span><span class="token constant boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token variable">$obj</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;a&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">//通过json文件获取到的内容就是一个json字符串。</span>
<span class="token variable">$data</span> <span class="token operator">=</span> <span class="token function">file_get_contents</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;data.json&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//将json转换成数组</span>
<span class="token variable">$result</span> <span class="token operator">=</span> <span class="token function">json_decode</span><span class="token punctuation">(</span><span class="token variable">$data</span><span class="token punctuation">,</span> <span class="token constant boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">print_r</span><span class="token punctuation">(</span><span class="token variable">$result</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-3-兼容性-了解" tabindex="-1"><a class="header-anchor" href="#_3-3-兼容性-了解" aria-hidden="true">#</a> 3-3 兼容性 (了解)</h4><h6 id="现在一般最多兼容到-ie8-这里见到了知道是在处理兼容性就行了" tabindex="-1"><a class="header-anchor" href="#现在一般最多兼容到-ie8-这里见到了知道是在处理兼容性就行了" aria-hidden="true">#</a> 现在一般最多兼容到 IE8, 这里见到了知道是在处理兼容性就行了</h6><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>var xhr = null;
if(XMLHttpRequest){
  //现代浏览器 IE7+
  xhr = new  XMLHttpRequest();
}else{
  //老版本的 Internet Explorer （IE5 和 IE6）使用 ActiveX 对象：
  xmlHttp = new ActiveXObject(&quot;Microsoft.XMLHTTP&quot;);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>$(表单）.serialize（）方法 序列化文档</p><p>jQuery 中的 ajax 方法 $.ajax</p>`,33),d=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"参数名称"),n("th",null,"描述"),n("th",null,"取值示例")])]),n("tbody",null,[n("tr",null,[n("td",null,"url"),n("td",null,"接口地址"),n("td",null,'url:"02.php"')]),n("tr",null,[n("td",null,"type"),n("td",null,"请求方式"),n("td",null,'get/post type:"get"')]),n("tr",null,[n("td",null,"timeout"),n("td",null,"超时时间 单位毫秒"),n("td",null,"timeout:5000")]),n("tr",null,[n("td",null,"dataType"),n("td",null,"服务器返回的格式 json/xml/text(默认)"),n("td",null,'dataType:"json"')]),n("tr",{"name:zs,age:18":""},[n("td",null,"data"),n("td",null,"发送的请求数据 对象"),n("td",null,"data:")]),n("tr",{"alert(1)":""},[n("td",null,"beforeSend"),n("td",null,"调用前的回调函数"),n("td",null,"function(){} beforeSend:function()")]),n("tr",null,[n("td",null,"success"),n("td",null,"成功的回调函数"),n("td",null,"function (data) {} success:function (data) {}")]),n("tr",null,[n("td",null,"error"),n("td",null,"失败的回调函数"),n("td",null,"function (error) {} error:function(data) {}")]),n("tr",null,[n("td",null,"complete"),n("td",null,"完成后的回调函数"),n("td",null,"function () {} complete:function () {}")])])],-1),c=s(`<p>其他 api</p><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>// 发送get请求
$.get(url, data, callback, dataType);
$.get(option);

// 发送post请求
$.post(url, data, callback, dataType);
$.post(option)

// 发送get请求, 并设置 dataType为 json
$.getJSON(url, data, callback);
$.getJSON(obj);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、模板引擎-arttemplate-的使用" tabindex="-1"><a class="header-anchor" href="#二、模板引擎-arttemplate-的使用" aria-hidden="true">#</a> 二、模板引擎 artTemplate 的使用</h2><h3 id="_1-引入模板引擎的-js-文件" tabindex="-1"><a class="header-anchor" href="#_1-引入模板引擎的-js-文件" aria-hidden="true">#</a> 1.引入模板引擎的 js 文件</h3><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>&lt;script src=&quot;template-web.js&quot;&gt;&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-准备模板" tabindex="-1"><a class="header-anchor" href="#_2-准备模板" aria-hidden="true">#</a> 2.准备模板</h3><div class="language-HTML line-numbers-mode" data-ext="HTML"><pre class="language-HTML"><code>&lt;!--
  指定了type为text/html后，这一段script标签并不会解析，也不会显示。
--&gt;
&lt;script type=&quot;text/html&quot; id=&quot;myTmp&quot;&gt;
  &lt;p&gt;姓名：隔壁老王&lt;/p&gt;
  &lt;p&gt;年龄：18&lt;/p&gt;
  &lt;p&gt;技能：查水表&lt;/p&gt;
  &lt;p&gt;描述：年轻力气壮&lt;/p&gt;
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-准备数据" tabindex="-1"><a class="header-anchor" href="#_3-准备数据" aria-hidden="true">#</a> 3.准备数据</h3><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>// 3. 准备数据, 数据是后台获取的，可以随时变化
var obj = {
  userName:&quot;隔壁老王&quot;,
  age: 18,
  skill:&quot;查水表&quot;,
  desc:&quot;年轻气壮&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-将模板与数据进行绑定" tabindex="-1"><a class="header-anchor" href="#_4-将模板与数据进行绑定" aria-hidden="true">#</a> 4.将模板与数据进行绑定</h3><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>//第一个参数：模板的id
//第二个参数：数据对象, 模版中可以直接使用对象中的属性
//返回值：根据模板生成的字符串。
var html = template(&quot;myTmp&quot;, obj);
console.log(html);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-修改模板" tabindex="-1"><a class="header-anchor" href="#_5-修改模板" aria-hidden="true">#</a> 5.修改模板</h3><div class="language-HTML line-numbers-mode" data-ext="HTML"><pre class="language-HTML"><code>&lt;script type=&quot;text/html&quot; id=&quot;myTmp&quot;&gt;
  &lt;p&gt;姓名：{{userName}}&lt;/p&gt;
  &lt;p&gt;年龄：{{age}}&lt;/p&gt;
  &lt;p&gt;技能：{{skill}}&lt;/p&gt;
  &lt;p&gt;描述：{{desc}}&lt;/p&gt;
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-将数据显示到页面" tabindex="-1"><a class="header-anchor" href="#_6-将数据显示到页面" aria-hidden="true">#</a> 6.将数据显示到页面</h3><h4 id="arttemplate-标准语法" tabindex="-1"><a class="header-anchor" href="#arttemplate-标准语法" aria-hidden="true">#</a> artTemplate 标准语法</h4><h5 id="if-语法" tabindex="-1"><a class="header-anchor" href="#if-语法" aria-hidden="true">#</a> if 语法</h5><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>var div = document.querySelector(&quot;div&quot;);
div.innerHTML = html;


{{if gender=&#39;男&#39;}}
  &lt;div class=&quot;man&quot;&gt;
{{else}}
  &lt;div class=&quot;woman&quot;&gt;
{{/if}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="each-语法" tabindex="-1"><a class="header-anchor" href="#each-语法" aria-hidden="true">#</a> each 语法</h5><div class="language-HTML line-numbers-mode" data-ext="HTML"><pre class="language-HTML"><code>&lt;!--
  1. {{each data}}  可以通过$value 和 $index获取值和下标
  2. {{each data v i}}  自己指定值为v，下标为i
--&gt;
{{each data v i}}
  &lt;li&gt;
    &lt;a href=&quot;{{v.url}}&quot;&gt;
      &lt;img src=&quot;{{v.src}}&quot; alt=&quot;&quot;&gt;
      &lt;p&gt;{{v.content}}&lt;/p&gt;
     &lt;/a&gt;
   &lt;/li&gt;
{{/each}}

//如果返回的数据是个数组，必须使用对象进行包裹，因为在{{}}中只写书写对象的属性。
var html = template(&quot;navTmp&quot;, {data:info});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、同源与跨域" tabindex="-1"><a class="header-anchor" href="#三、同源与跨域" aria-hidden="true">#</a> 三、同源与跨域</h2><h3 id="同源" tabindex="-1"><a class="header-anchor" href="#同源" aria-hidden="true">#</a> 同源</h3><h4 id="同源策略的基本概念" tabindex="-1"><a class="header-anchor" href="#同源策略的基本概念" aria-hidden="true">#</a> 同源策略的基本概念</h4><ul><li>1995 年，同源政策由 Netscape 公司引入浏览器。目前，所有浏览器都实行这个政策。同源策略：最初，它的含义是指，A 网页设置的 Cookie，B 网页不能打开，除非这两个网页&quot;同源&quot;。所谓&quot;同源&quot;指的是&quot;三个相同&quot;。协议相同、域名相同、端口相同</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>举例来说，这个网址http://www.example.com/dir/page.html
协议是http://，域名是www.example.com，端口是80（默认端口可以省略）。它的同源情况如下。
http://www.example.com/dir2/other.html：同源

file:///F:/phpStudy/WWW/day01/04-demo/04.html 不同源(协议不同)
http://v2.www.example.com/dir/other.html：不同源（域名不同）
http://www.example.com:81/dir/other.html：不同源（端口不同）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="同源策略的目的" tabindex="-1"><a class="header-anchor" href="#同源策略的目的" aria-hidden="true">#</a> 同源策略的目的</h4><ul><li>同源政策的目的，是为了保证用户信息的安全，防止恶意的网站窃取数据。</li><li>虽然这个限制出于安全来说, 是很有必要，但是也给我们日常开发带来不好的影响。比如实际开发过程中，往往都会把服务器端架设到一台甚至是一个集群的服务器中，把客户端页面放到另外一个单独的服务器。那么这时候就会出现不同源的情况，如果我们知道两个网站都是安全的话，我们是希望两个不同源的网站之间可以相互请求数据的。这就需要使用到跨域 。</li></ul><h5 id="跨域" tabindex="-1"><a class="header-anchor" href="#跨域" aria-hidden="true">#</a> 跨域</h5><ul><li>演示跨域问题</li></ul><h5 id="jsonp-无兼容性问题" tabindex="-1"><a class="header-anchor" href="#jsonp-无兼容性问题" aria-hidden="true">#</a> jsonp( 无兼容性问题 )</h5><pre><code>- JSONP(JSON with Padding)、可用于解决主流浏览器的跨域数据访问的问题。
原理：服务端返回一个定义好的js函数的调用，并且将服务器的数据以该函数参数的形式传递过来，这个方法需要前后端配合
script 标签 src属性请求数据 是不受同源策略的限制的，它可以载入任意地方的 js文件。类似的还有img和link标签
</code></pre><div class="language-HTML line-numbers-mode" data-ext="HTML"><pre class="language-HTML"><code>&lt;!--不受同源策略的标签--&gt;
&lt;img src=&quot;http://www.api.com/1.jpg&quot; alt=&quot;&quot;&gt;
&lt;link rel=&quot;stylesheet&quot; href=&quot;http://www.api.com/1.css&quot;&gt;
&lt;script src=&quot;http://www.api.com/1.js&quot;&gt;&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>jsonp 演化过程 1 php 文件</p><div class="language-PHP line-numbers-mode" data-ext="PHP"><pre class="language-PHP"><code>header(&quot;content-type:text/html;charset=utf-8&quot;);
echo &quot;alert(1111)&quot;;
//html文件

&lt;script src=&quot;http://www.api.com/testjs.php&quot;&gt;&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>原理：其实 src 的路径是什么文件不重要，无论引入 js 文件还是 php 文件，最后返回给浏览器的都是字符串，因此我们 script 标签是可以引入一个 php 文件的。 jsonp 演化过程 2 php 文件</p><div class="language-PHP line-numbers-mode" data-ext="PHP"><pre class="language-PHP"><code>header(&quot;content-type:text/html;charset=utf-8&quot;);
echo &quot;var a = 118;&quot;;
//html文件

&lt;script src=&quot;http://www.api.com/testjs.php&quot;&gt;&lt;/script&gt;
&lt;script&gt;
  //a打印出来了118
  console.log(a);
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们现在做到了一件事情，从不同源的 php 文件中获取到了数据 缺点：获取数据的 script 标签必须写在使用的 script 标签的前面，必须保证先有数据才能对数据进行渲染。 jsonp 演化过程 3 php 代码</p><div class="language-PHP line-numbers-mode" data-ext="PHP"><pre class="language-PHP"><code>header(&quot;content-type:text/html;charset=utf-8&quot;);
$arr = array(
    &quot;name&quot;=&gt;&quot;zs&quot;,
    &quot;age&quot;=&gt;18
);
$result = json_encode($arr);
//这是一段js函数的调用的代码，$result就是我们想要的数据
echo &quot;func($result)&quot;;
//js代码

&lt;script&gt;
  function func(data) {
    console.log(data);
  }
&lt;/script&gt;
&lt;script src=&quot;http://www.api.com/testjs.php&quot;&gt;&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>缺点：后端必须知道前端声明的方法的名字，后端才能调用。 jsonp 演化过程 4 php 代码</p><div class="language-PHP line-numbers-mode" data-ext="PHP"><pre class="language-PHP"><code>header(&quot;content-type:text/html;charset=utf-8&quot;);
$arr = array(
    &quot;name&quot;=&gt;&quot;zs&quot;,
    &quot;age&quot;=&gt;18
);
$result = json_encode($arr);
//这是一段js函数的调用的代码，$result就是我们想要的数据
echo $_GET[&#39;callback&#39;].&quot;($result)&quot;;
//javascript代码

function fun(data) {
  console.log(data);
}
var button = document.querySelector(&quot;button&quot;);
button.onclick = function () {
  var script = document.createElement(&quot;script&quot;);
  script.src = &quot;http://www.api.com/testjs.php?callback=fun&quot;;
  document.body.appendChild(script);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><ol><li>说白了，jsonp 的原理就是 借助了 script 标签 src 请求资源时, 不受同源策略的限制.</li></ol></li><li><ol start="2"><li>在服务端返回一个函数的调用，将数据当前调用函数的实参。</li></ol></li><li><ol start="3"><li>在浏览器端，需要程序要声明一个全局函数，通过形参就可以获取到服务端返回的对应的值 ​ jsonp 原理大家知道即可，不用太过于去纠结这个原理，因此 jquery 已经帮我们封装好了，我们使用起来非常的方便。 jquery 对于 jsonp 的封装</li></ol></li></ul><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>//使用起来相当的简单，跟普通的get请求没有任何的区别，只需要把dataType固定成jsonp即可。
$.ajax({
  type:&quot;get&quot;,
  url:&quot;http://www.Jepson.com/testjs.php&quot;,
  dataType:&quot;jsonp&quot;,
  data:{
    uname:&quot;Jepson&quot;,
    upass:&quot;123456&quot;
  },
  success:function (info) {
    console.log(info);
  }
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="【案例-查询天气-html】" tabindex="-1"><a class="header-anchor" href="#【案例-查询天气-html】" aria-hidden="true">#</a> 【案例：查询天气.html】</h5><ul><li>天气查询 api 地址</li><li>【案例：省市区三级联动.html】</li><li>api 地址</li><li>跨域资源共享(CORS) ( 兼容性 IE10+ )</li><li>cors 的使用</li><li>新版本的 XMLHttpRequest 对象，可以向不同域名的服务器发出 HTTP 请求。这叫做&quot;跨域资源共享&quot;（Cross-origin resource sharing，简称 CORS）。 跨域资源共享（CORS）的前提 - 浏览器支持这个功能( 兼容性 IE10+ ) - 服务器必须允许这种跨域。 服务器允许跨域的代码：</li></ul><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>//允许所有的域名访问这个接口
header(&quot;Access-Control-Allow-Origin:*&quot;);
//允许www.study.com这个域名访问这个接口
header(&quot;Access-Control-Allow-Origin:http://www.jepson.com&quot;);
//CORS的具体流程（了解）
//服务器端收到一个简单跨域请求后，根据资源权限配置，在响应头中添加Access-Control-Allow-Origin Header。浏览器收到响应后，查看是否设置了header(&#39;Access-Control-Allow-Origin:请求源域名或者*&#39;);如果当前域已经得到授权，则将结果返回给JavaScript。否则浏览器忽略此次响应。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="总结-解决跨域两种最常用方式-jsonp-与-cors" tabindex="-1"><a class="header-anchor" href="#总结-解决跨域两种最常用方式-jsonp-与-cors" aria-hidden="true">#</a> 总结: 解决跨域两种最常用方式 jsonp 与 cors</h6><ul><li>jsonp 与 cors 的对比 - jsonp 兼容性好，老版本浏览器也支持，但是 jsonp 仅支持 get 请求，发送的数据量有限。使用麻烦 - cors 需要浏览器支持 cors 功能才行。但是使用简单，只要服务端设置允许跨域，对于客户端来说，跟普通的 get、post 请求并没有什么区别。 - 跨域的安全性问题：因为跨域是需要服务端配合控制的 ，也就是说不论 jsonp 还是 cors，如果没有服务端的允许，浏览器是没法做到跨域的。 当然还有一种很常用的解决跨域的方式, 就是服务器端配置反向代理 ( 纯服务器端实施, 了解即可 )</li></ul><h5 id="ajax-全局事件" tabindex="-1"><a class="header-anchor" href="#ajax-全局事件" aria-hidden="true">#</a> Ajax 全局事件</h5><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>$(window).ajaxStart(); //ajax开始时触发
beforeSend:function(）{}  //ajax开始前触发
success：function（）{}
error：function(){}
$(window).complete（）{}//每一个ajax执行结束都会触发ajaxComeplete事件，

$(window).ajaxStop(); //ajax结束时触发 会检查是否存在其他ajax事件，如果有就会执行complete事件，没有才去执行ajaxStop事件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,48),o=[l,d,c];function u(r,p){return e(),i("div",null,o)}const h=a(t,[["render",u],["__file","Ajax.html.vue"]]);export{h as default};
