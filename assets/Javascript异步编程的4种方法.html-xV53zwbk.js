import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as s,e}from"./app-VsgOdKNj.js";const t={},o=e(`<h5 id="javascript-语言的执行环境是-单线程-single-thread-。" tabindex="-1"><a class="header-anchor" href="#javascript-语言的执行环境是-单线程-single-thread-。" aria-hidden="true">#</a> Javascript 语言的执行环境是&quot;单线程&quot;（single thread）。</h5><ul><li>所谓&quot;单线程&quot;，就是指一次只能完成一件任务。如果有多个任务，就必须排队，前面一个任务完成，再执行后面一个任务，以此类推。</li><li>这种模式的好处是实现起来比较简单，执行环境相对单纯；坏处是只要有一个任务耗时很长，后面的任务都必须排队等着，会拖延整个程序的执行。</li><li>常见的浏览器无响应（假死），往往就是因为某一段 Javascript 代码长时间运行（比如死循环），导致整个页面卡在这个地方，其他任务无法执行。</li></ul><h5 id="本文总结了-异步模式-编程的-4-种方法" tabindex="-1"><a class="header-anchor" href="#本文总结了-异步模式-编程的-4-种方法" aria-hidden="true">#</a> 本文总结了&quot;异步模式&quot;编程的 4 种方法:</h5><h5 id="一、回调函数" tabindex="-1"><a class="header-anchor" href="#一、回调函数" aria-hidden="true">#</a> 一、回调函数</h5><pre><code>这是异步编程最基本的方法。

假定有两个函数f1和f2，后者等待前者的执行结果。
　　f1();
　　f2();
　　
如果f1是一个很耗时的任务，可以考虑改写f1，把f2写成f1的回调函数。
</code></pre><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">f1</span><span class="token punctuation">(</span><span class="token parameter">callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// f1的任务代码</span>
    <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>执行代码就变成下面这样：
　　f1(f2);
</code></pre><h6 id="回调函数的优点是简单、容易理解和部署-缺点是不利于代码的阅读和维护-各个部分之间高度耦合-coupling-流程会很混乱-而且每个任务只能指定一个回调函数。" tabindex="-1"><a class="header-anchor" href="#回调函数的优点是简单、容易理解和部署-缺点是不利于代码的阅读和维护-各个部分之间高度耦合-coupling-流程会很混乱-而且每个任务只能指定一个回调函数。" aria-hidden="true">#</a> 回调函数的优点是简单、容易理解和部署，缺点是不利于代码的阅读和维护，各个部分之间高度耦合（Coupling），流程会很混乱，而且每个任务只能指定一个回调函数。</h6><h5 id="二、事件监听" tabindex="-1"><a class="header-anchor" href="#二、事件监听" aria-hidden="true">#</a> 二、事件监听</h5><pre><code>另一种思路是采用事件驱动模式。任务的执行不取决于代码的顺序，而取决于某个事件是否发生。
还是以f1和f2为例。首先，为f1绑定一个事件（这里采用的jQuery的写法）。
</code></pre><p>f1.on(&#39;done&#39;, f2);</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//上面这行代码的意思是，当f1发生done事件，就执行f2。然后，对f1进行改写：</span>

<span class="token keyword">function</span> <span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// f1的任务代码</span>
    f1<span class="token punctuation">.</span><span class="token function">trigger</span><span class="token punctuation">(</span><span class="token string">&#39;done&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">//f1.trigger(&#39;done&#39;)表示，执行完成后，立即触发done事件，从而开始执行f2。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="这种方法的优点是比较容易理解-可以绑定多个事件-每个事件可以指定多个回调函数-而且可以-去耦合-decoupling-有利于实现模块化。缺点是整个程序都要变成事件驱动型-运行流程会变得很不清晰。" tabindex="-1"><a class="header-anchor" href="#这种方法的优点是比较容易理解-可以绑定多个事件-每个事件可以指定多个回调函数-而且可以-去耦合-decoupling-有利于实现模块化。缺点是整个程序都要变成事件驱动型-运行流程会变得很不清晰。" aria-hidden="true">#</a> 这种方法的优点是比较容易理解，可以绑定多个事件，每个事件可以指定多个回调函数，而且可以&quot;去耦合&quot;（Decoupling），有利于实现模块化。缺点是整个程序都要变成事件驱动型，运行流程会变得很不清晰。</h6><h5 id="三、发布-订阅" tabindex="-1"><a class="header-anchor" href="#三、发布-订阅" aria-hidden="true">#</a> 三、发布/订阅</h5><pre><code>我们假定，存在一个&quot;信号中心&quot;，某个任务执行完成，就向信号中心&quot;发布&quot;（publish）一个信号，其他任务可以向信号中心&quot;订阅&quot;（subscribe）这个信号，从而知道什么时候自己可以开始执行。这就叫做&quot;发布/订阅模式&quot;（publish-subscribe pattern），又称&quot;观察者模式&quot;
（observer pattern）。

这个模式有多种实现，下面采用的是Ben Alman的Tiny Pub/Sub，这是jQuery的一个插
件。
首先，f2向&quot;信号中心&quot;jQuery订阅&quot;done&quot;信号。

　　jQuery.subscribe(&quot;done&quot;, f2);
　　
然后，f1进行如下改写：

　　function f1(){
　　　　setTimeout(function () {
　　　　　　// f1的任务代码
　　　　　　jQuery.publish(&quot;done&quot;);
　　　　}, 1000);
　　}
　　
jQuery.publish(&quot;done&quot;)的意思是，f1执行完成后，向&quot;信号中
心&quot;jQuery发布&quot;done&quot;信号，从而引发f2的执行。

此外，f2完成执行后，也可以取消订阅（unsubscribe）。
　　jQuery.unsubscribe(&quot;done&quot;, f2);
　　
这种方法的性质与&quot;事件监听&quot;类似，但是明显优于后者。因为我们可以通过查看&quot;消息中心&quot;，了解存在多少信号、每个信号有多少订阅者，从而监控程序的运行。
</code></pre><h5 id="四、promises-对象" tabindex="-1"><a class="header-anchor" href="#四、promises-对象" aria-hidden="true">#</a> 四、Promises 对象</h5><pre><code>Promises对象是CommonJS工作组提出的一种规范，目的是为异步编程提供统一接口。

简单说，它的思想是，每一个异步任务返回一个Promise对象，该对象有一个then方法，允许指定回调函数。比如，f1的回调函数f2,可以写成：
　　f1().then(f2);
f1要进行如下改写（这里使用的是jQuery的实现）：

　　function f1(){
　　　　var dfd = $.Deferred();
　　　　setTimeout(function () {
　　　　　　// f1的任务代码
　　　　　　dfd.resolve();
　　　　}, 500);
　　　　return dfd.promise;
　　}
　　
这样写的优点在于，回调函数变成了链式写法，程序的流程可以看得很清楚，而且有一整套的配套方法，可以实现许多强大的功能。

比如，指定多个回调函数：

　　f1().then(f2).then(f3);

再比如，指定发生错误时的回调函数：
　　f1().then(f2).fail(f3);

而且，它还有一个前面三种方法都没有的好处：
如果一个任务已经完成，再添加回调函数，该回调函数会立即执行。所以，你不用担心是否错过了某个事件或信号。这种方法的缺点就是编写和理解，都相对比较难。
</code></pre>`,17),i=[o];function c(u,p){return a(),s("div",null,i)}const l=n(t,[["render",c],["__file","Javascript异步编程的4种方法.html.vue"]]);export{l as default};
