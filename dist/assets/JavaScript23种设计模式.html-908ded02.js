import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-d605ab7d.js";const p={},e=t(`<h1 id="_23-种设计模式" tabindex="-1"><a class="header-anchor" href="#_23-种设计模式" aria-hidden="true">#</a> 23 种设计模式</h1><h2 id="总体来说设计模式分为三大类" tabindex="-1"><a class="header-anchor" href="#总体来说设计模式分为三大类" aria-hidden="true">#</a> 总体来说设计模式分为三大类：</h2><ul><li>① 创建型模式 共五种：工厂方法模式、抽象工厂模式、单例模式、建造者模式、原型模式。</li><li>② 结构型模式，共七种：适配器模式、装饰器模式、代理模式、外观模式、桥接模式、组合模式、享元模式。</li><li>③ 行为型模式，共十一种：策略模式、模板方法模式、观察者模式、迭代子模式、责任链模式、命令模式、备忘录模式、状态模式、访问者模式、中介者模式、解释器模式。</li></ul><h3 id="_1-创建型模式" tabindex="-1"><a class="header-anchor" href="#_1-创建型模式" aria-hidden="true">#</a> 1.创建型模式</h3><h4 id="_1-工厂函数" tabindex="-1"><a class="header-anchor" href="#_1-工厂函数" aria-hidden="true">#</a> &lt;1&gt;.工厂函数</h4><p>简单来说就是封装后的代码，简单的工厂模式是很好理解的，关于它的作用，就是利用面向对象的方法，把一些对象封装，使一些占用空间多的，重复的代码封装起来。实现方法非常简单，也就是在函数内创建一个对象，给对象赋予属性以及方法再将对象返回即可。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 构造一个动物的函数
 */</span>
<span class="token keyword">function</span> <span class="token function">creatper</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> per <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//原料</span>

  <span class="token comment">//加工</span>

  per<span class="token punctuation">.</span>name <span class="token operator">=</span> name

  per<span class="token punctuation">.</span>age <span class="token operator">=</span> age

  per<span class="token punctuation">.</span><span class="token function-variable function">sayHi</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>per<span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&#39;&#39;</span> <span class="token operator">+</span> per<span class="token punctuation">.</span>age<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> per <span class="token comment">//出厂</span>
<span class="token punctuation">}</span>
<span class="token comment">//实例一个对象</span>
<span class="token keyword">var</span> me <span class="token operator">=</span> <span class="token function">creatper</span><span class="token punctuation">(</span><span class="token string">&#39;katherine&#39;</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">)</span>

me<span class="token punctuation">.</span><span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>me<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看出，使用工厂模式，可以重复调用这个 per 函数来生成不同属性值得对象，这就像工厂一样，批量生产，里面的原料，加工，出厂都很清晰。但是你会发现工厂模式是无法识别对象的类型，因为全都是 object，不像 Date，Array 等，但是构造函数就不是了。这还只是简单的工厂模式，复杂的工厂模式（抽象模式）等以后再回来详细了解。</p><h4 id="_2-单例模式" tabindex="-1"><a class="header-anchor" href="#_2-单例模式" aria-hidden="true">#</a> &lt;2&gt;单例模式</h4><ul><li>传统单例模式:保证一个类仅有一个实例，并提供一个访问它的全局访问点。</li><li>实现单例核心思想 <ul><li>无非是用一个变量来标志当前是否已经为某个类创建过对象，如果是，则在下一次获取该类的实例时，直接返回之前创建的对象，接下来我们用 JavaScript 来强行实现这个思路，</li></ul></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">CreateDiv</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">html</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>html <span class="token operator">=</span> html
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token class-name">CreateDiv</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">init</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> div <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
  div<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>html
  document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>div<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> ProxySingletonCreateDiv <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> instance
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">html</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>instance<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CreateDiv</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> instance
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ProxySingletonCreateDiv</span><span class="token punctuation">(</span><span class="token string">&#39;sven1&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ProxySingletonCreateDiv</span><span class="token punctuation">(</span><span class="token string">&#39;sven2&#39;</span><span class="token punctuation">)</span>

<span class="token function">alert</span><span class="token punctuation">(</span>a <span class="token operator">===</span> b<span class="token punctuation">)</span> <span class="token comment">//true</span>

<span class="token comment">//单例模式抽象，分离创建对象的函数和判断对象是否已经创建</span>
<span class="token keyword">var</span> <span class="token function-variable function">singleton</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> result
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> result <span class="token operator">||</span> <span class="token punctuation">(</span>result <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//fn.apply相当于直接调用函数，只是将函数内的this（上下文）改变了</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> createMask <span class="token operator">=</span> <span class="token function">singleton</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-构造函数模式" tabindex="-1"><a class="header-anchor" href="#_2-构造函数模式" aria-hidden="true">#</a> &lt;2&gt;.构造函数模式</h4><p>ECMAScript 中构造函数可以用来创建特定对象，类似于 Array，Date 等原生的 js 对象</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Student</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> classa</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
  <span class="token keyword">this</span><span class="token punctuation">.</span>classa <span class="token operator">=</span> classa
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">sayHello</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>classa<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> me <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&#39;xiaoai&#39;</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token string">&#39;大三&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>me<span class="token punctuation">.</span>classa<span class="token punctuation">)</span>
me<span class="token punctuation">.</span><span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>me <span class="token keyword">instanceof</span> <span class="token class-name">Student</span><span class="token punctuation">)</span> <span class="token comment">//true****</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由代码可以看出，于工厂模式除了函数名不同以外，还要注意：构造函数名的首字母大写（不过好像没有严格规定）。构造函数也没有显示创建的对象，使用了 this，直接把属性和方法赋值给了 this 对象。没有 return 语句，实例化的时候要使用 new，而且它能够识别对象（这正是构造函数模式胜于工厂模式的地方）。</p><p>构造函数虽然好用，但也有很大的缺点，就是每次创建实例的时候都要重新创建一次方法，实际应用中，每次创建对象的时候属性值不同，而对象的方法却是相同的，所以创建两次完全相同的方法是没有必要的</p><h2 id="_3-原型模式" tabindex="-1"><a class="header-anchor" href="#_3-原型模式" aria-hidden="true">#</a> 3.原型模式</h2><p>js 规定每一个创建的函数都有 prototype（原型）属性，这个属性是指针，指向一个对象，而这个对象的用途是包含由特定类型的所有实例所共享的属性和方法，使用原型对象就可以让所有实例对象均包含这些属性及方法。</p>`,18),o=[e];function c(i,l){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","JavaScript23种设计模式.html.vue"]]);export{k as default};
