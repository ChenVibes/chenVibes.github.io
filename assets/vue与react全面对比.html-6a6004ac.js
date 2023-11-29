import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-6987be88.js";const e={},p=t(`<h2 id="vue-与-react-全面对比" tabindex="-1"><a class="header-anchor" href="#vue-与-react-全面对比" aria-hidden="true">#</a> vue 与 react 全面对比</h2><h2 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期" aria-hidden="true">#</a> 生命周期</h2><h3 id="第一阶段-组件挂载阶段" tabindex="-1"><a class="header-anchor" href="#第一阶段-组件挂载阶段" aria-hidden="true">#</a> 第一阶段：组件挂载阶段</h3><table><thead><tr><th>vue</th><th>说明</th><th>react</th><th>说明</th></tr></thead><tbody><tr><td>props</td><td>接收父组件参数</td><td>static defalultProps</td><td>接收父组件参数</td></tr><tr><td>data</td><td>组件内部状态初始化</td><td>constructor</td><td>组件内部状态初始化 this.state={}</td></tr><tr><td>computed</td><td>data 中的属性扩展，同 data 中的数据一样，属于组件内部状态属性，不同的是：计算属性，当依赖值不发生改变时，属性值被缓存不变动</td><td></td><td></td></tr><tr><td>methods</td><td>组件内部事件写在这里</td><td></td><td></td></tr><tr><td>watch</td><td>观察模式，同计算属性类似，可以监听 data 中属性的变化</td><td></td><td></td></tr><tr><td>beforeCreate</td><td>组件实例化后，数据观察 data 和 event/watcher 事件配置之前被调用</td><td></td><td></td></tr><tr><td>created</td><td>（实例创建完成后立即被调用，实例已完成如下配置：数据观察 data observe，属性和方法的运算，event/watcher 回调。$el 属性不可见）</td><td></td><td></td></tr><tr><td>beforeCreate</td><td>组件实例化后，数据观察 data 和 event/watcher 事件配置之前被调用</td><td>componentWillMount</td><td>组件渲染前被调用</td></tr><tr><td>beforeMount</td><td>组件挂载之前调用</td><td>componentWillMount</td><td>组件渲染前被调用</td></tr><tr><td>render</td><td>react 最重要的步骤，创建虚拟 dom，进行 diff 算法，更新 dom 树都在此进行。此时就不能更改 state 了</td><td></td><td></td></tr><tr><td>mounted</td><td>不会承诺所有的子组件都一起被挂载，如果希望等到整个试图都渲染完毕，可以用 vm.$nextTick 替换掉 mounted，mounted(){ this.$nextTick(()=&gt;{})}</td><td>componentDidMount</td><td>组件挂载成功，第一次渲染后调用，组件已经生成在对应的 dom 结构，通过 this.getDOMNode()获取节点，可以在这个周期时获取服务端数据，redux 模式，在这里绑定数据</td></tr><tr><td></td><td></td><td></td><td></td></tr></tbody></table><h3 id="第二阶段-组件更新阶段" tabindex="-1"><a class="header-anchor" href="#第二阶段-组件更新阶段" aria-hidden="true">#</a> 第二阶段：组件更新阶段</h3><table><thead><tr><th>vue</th><th>说明</th><th>react</th><th>说明</th></tr></thead><tbody><tr><td></td><td></td><td>componentWillReceiveProps</td><td>组件接收到一个新的 props 时被调用</td></tr><tr><td></td><td>组件的依赖是在渲染过程中自动追踪的，所以系统能精确知晓哪个组件确实需要被重渲染。可以理解为每一个组件都已经自动获得了 shouldComponentUpdate,使得开发者不再需要考虑此类优化，从而能够更好地专注于应用本身</td><td>shouldComponentUpdate</td><td>返回一个布尔值，组件收到新的或者 state 时被调用，常用于优化组件，减少渲染次数</td></tr><tr><td>beforeUpdate</td><td>数据更新时调用，发生在虚拟 dom 更新之前，适合更新之前访问现有的 dom，如手动移除事件监听</td><td>componentWillUpdate</td><td>接收到新的 props 或者 sate 但还没 render 时调用</td></tr><tr><td></td><td></td><td>render</td><td>渲染模板</td></tr><tr><td>updated</td><td>数据更新完后，组件 DOM 更新完毕，可以依赖与 DOM 的操作，应避免在此期间更改状态，如需要，最好使用计算属性或 watch 取而代之，不会承诺所有子组件一起被重绘。待整个视图重绘完毕，可以用 vm.$nextTick 换掉 updated。updated(){this.$nextTick(()=&gt;{})}</td><td>componentDidUpdate</td><td>组件更新完成后调用</td></tr></tbody></table><h3 id="第三阶段-组件卸载阶段" tabindex="-1"><a class="header-anchor" href="#第三阶段-组件卸载阶段" aria-hidden="true">#</a> 第三阶段：组件卸载阶段</h3><table><thead><tr><th>vue</th><th>说明</th><th>react</th><th>说明</th></tr></thead><tbody><tr><td>beforeDestroy</td><td>实例销毁前调用</td><td>componentWillUnmount</td><td>从 dom 中移除时立即被调用 一些事件监听和定时器需要在此时清除</td></tr><tr><td>destoryed</td><td>实例销毁后调用，与实例相关的所有都会被移动</td><td></td><td></td></tr></tbody></table><p>Vue 独有的：</p><table><thead><tr><th>vue</th><th>说明</th></tr></thead><tbody><tr><td>activated</td><td>keep-alive 组件激活时调用（服务端渲染期不被调用）</td></tr><tr><td>deactivated</td><td>keep-alive 组件停用时调用（服务端渲染期不被调用）</td></tr></tbody></table><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;demo&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#demo&#39;</span><span class="token punctuation">,</span>
  <span class="token function">beforeCreate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//在实例初始化之后，数据观测 (data observer)</span>
    <span class="token comment">//和 event/watcher 事件配置之前被调用。</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//在实例创建完成后被立即调用。在这一步，</span>
    <span class="token comment">//实例已完成以下的配置：数据观测 (data observer)，属性和方法的运算，</span>
    <span class="token comment">//watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function">beforeMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//在挂载开始之前被调用：相关的 render 函数首次被调用。</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。</span>
    <span class="token comment">//如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$el 也在文档内。</span>
    <span class="token comment">/*
     *mounted 不会承诺所有的子组件也都一起被挂载。
     *如果你希望等到整个视图都渲染完毕，可以用 vm.$nextTick
     */</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$nextTick</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// Code that will run only after the</span>
      <span class="token comment">// entire view has been rendered</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">beforeUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">updated</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。</span>
    <span class="token comment">/*
     *同样updated不会承诺所有的子组件也都一起被挂载。
     *如果你希望等到整个视图都渲染完毕，可以用 vm.$nextTick
     */</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">beforeDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//实例销毁之前调用。在这一步，实例仍然完全可用。</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">destroyed</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，</span>
    <span class="token comment">//所有的事件监听器会被移除，</span>
    <span class="token comment">//所有的子实例也会被销毁。</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="组件传值" tabindex="-1"><a class="header-anchor" href="#组件传值" aria-hidden="true">#</a> 组件传值</h2><h3 id="react" tabindex="-1"><a class="header-anchor" href="#react" aria-hidden="true">#</a> react</h3><ul><li><h5 id="父到子-父组件向子组件传值-通过-props-传值-子通过-props-来获取父的属性值" tabindex="-1"><a class="header-anchor" href="#父到子-父组件向子组件传值-通过-props-传值-子通过-props-来获取父的属性值" aria-hidden="true">#</a> 父到子,父组件向子组件传值（通过 props 传值），子通过 props 来获取父的属性值</h5> 子组件</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Children</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>这是：<span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span> <span class="token comment">// 这是 父向子</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>父组件</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Children name<span class="token operator">=</span><span class="token string">&quot;父向子&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><h5 id="子到父-通过父组件向子组件传递函数-然后子组件中调用这些函数-利用回调函数实现数据传递" tabindex="-1"><a class="header-anchor" href="#子到父-通过父组件向子组件传递函数-然后子组件中调用这些函数-利用回调函数实现数据传递" aria-hidden="true">#</a> 子到父,通过父组件向子组件传递函数，然后子组件中调用这些函数，利用回调函数实现数据传递</h5></li></ul><p>子组件</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Children</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">handerClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span><span class="token function">changeColor</span><span class="token punctuation">(</span><span class="token string">&#39;skyblue&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 执行父组件的changeColor 并传参 必须和父组件中的函数一模一样</span>
  <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>父组件的背景色<span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>bgcolor<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span> <span class="token comment">//</span>
        子组件接收父组件传过来的值 bgcolor
        <span class="token operator">&lt;</span>button
          onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token parameter">e</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handerClick</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token operator">&gt;</span>
          改变父组件背景
        <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span> <span class="token comment">// 子组件执行函数</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>父组件</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">Father</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">bgcolor</span><span class="token operator">:</span> <span class="token string">&#39;pink&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token function">bgChange</span><span class="token punctuation">(</span><span class="token parameter">color</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">bgcolor</span><span class="token operator">:</span> color
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>bgcolor <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        // 给子组件传递的值 color
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Children</span></span>
          <span class="token attr-name">bgcolor</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>bgcolor<span class="token punctuation">}</span></span>
          <span class="token attr-name">changeColor</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token parameter">color</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">bgChange</span><span class="token punctuation">(</span>color<span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
        // changeColor 子组件的参数=color 当做形参
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><h5 id="兄弟之间" tabindex="-1"><a class="header-anchor" href="#兄弟之间" aria-hidden="true">#</a> 兄弟之间</h5><p>在 React 中，需要现将数据传递给父组件，然后父组件再传递给兄弟组件。</p></li><li><h5 id="多层级组件" tabindex="-1"><a class="header-anchor" href="#多层级组件" aria-hidden="true">#</a> 多层级组件</h5><p>在 React 中，提供了一个和 Vue 类似的处理多层级组件通信的方式——context，这里会提供一个生产者和一个消费者，会在父组件中生产数据，在子组件中消费数据。从使用上来说，只需要将子组件包裹在生产者的 Provider 中，在需要用到数据的子组件中，通过 Consumer 包裹，就可以拿到生产者的数据。</p></li></ul><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token comment">// Context 可以让我们无须明确地传遍每一个组件，就能将值深入传递进组件树。</span>
<span class="token comment">// 为当前的 theme 创建一个 context（“light”为默认值）。</span>
<span class="token keyword">const</span> ThemeContext <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createContext</span><span class="token punctuation">(</span><span class="token string">&#39;light&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 使用一个 Provider 来将当前的 theme 传递给以下的组件树。</span>
    <span class="token comment">// 无论多深，任何组件都能读取这个值。</span>
    <span class="token comment">// 在这个例子中，我们将 “dark” 作为当前的值传递下去。</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ThemeContext.Provider</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dark<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Toolbar</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">ThemeContext.Provider</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 中间的组件再也不必指明往下传递 theme 了。</span>
<span class="token keyword">function</span> <span class="token function">Toolbar</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ThemedButton</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ThemedButton</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token comment">// 指定 contextType 读取当前的 theme context。</span>
  <span class="token comment">// React 会往上找到最近的 theme Provider，然后使用它的值。</span>
  <span class="token comment">// 在这个例子中，当前的 theme 值为 “dark”。</span>
  <span class="token keyword">static</span> contextType <span class="token operator">=</span> ThemeContext
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">theme</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>context<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><h5 id="任意组件之间" tabindex="-1"><a class="header-anchor" href="#任意组件之间" aria-hidden="true">#</a> 任意组件之间</h5><p>简单的使用 EventBus，复杂的使用 Redux</p></li></ul><h3 id="vue" tabindex="-1"><a class="header-anchor" href="#vue" aria-hidden="true">#</a> vue</h3><ul><li><h5 id="父组件传递数据给子组件-通过-props-属性来实现" tabindex="-1"><a class="header-anchor" href="#父组件传递数据给子组件-通过-props-属性来实现" aria-hidden="true">#</a> 父组件传递数据给子组件 通过 props 属性来实现</h5></li></ul><p>父组件</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>parent</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>child</span> <span class="token attr-name">:child-msg</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>msg<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>child</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">  //这里必须要用 - 代替驼峰
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>parent</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  export defalut {
    data(){
      return {
    msg: [1,2,3]
    }
    }
      }
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>子组件通过 props 来接收数据:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>props: [&#39;childMsg&#39;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><h5 id="子组件与父组件通信" tabindex="-1"><a class="header-anchor" href="#子组件与父组件通信" aria-hidden="true">#</a> 子组件与父组件通信</h5> 子组件:</li></ul><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  &lt;div @click=&quot;testClick&quot;&gt;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
export defalut {
  methods: {   
    testClick() {       
      this.$emit(&#39;test&#39;,&#39;123&#39;);
      //主动触发test方法，&#39;123&#39;为向父组件传递的数据   
      }
      }
}
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>父组件:</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
&lt;child @test=&quot;change&quot; :msg=&quot;msg&quot;/&gt;
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  export default {
    methods: { 
  //监听子组件触发的test事件,然后调用change方法 
  change(msg) {       
    this.msg = msg;  // msg: 123   
    }
  }
  }
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><h5 id="兄弟之间-1" tabindex="-1"><a class="header-anchor" href="#兄弟之间-1" aria-hidden="true">#</a> 兄弟之间</h5> 在 Vue 中，可以通过查找父组件下的子组件实例，然后进行组件进行通信。如 this.$parent.$children，在$children 中，可以通过组件的 name 找到要通信的组件，进而进行通信。</li><li><h5 id="多层级组件-1" tabindex="-1"><a class="header-anchor" href="#多层级组件-1" aria-hidden="true">#</a> 多层级组件</h5> 在多层级的组件中，当然可以通过不断的获取$parent 找到需要传递的祖先级组件，然后进行通信，但是这样繁琐易错，并不推荐。Vue 在 2.2.0 新增提供了 provide/inject 的方式进行传递数据。即在祖先组件提供数据，在需要使用的组件中，注入数据，这样就可以在子组件中使用数据了。</li></ul><p>父组件</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>son</span> <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>data<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
export default {
  name: &#39;Test&#39;,
  provide: {
    name: &#39;Garrett&#39;
  }
}
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>子孙组件</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
	</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
		</span><span class="token punctuation">{</span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token plain-text">
	</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
export default {
	name: &#39;Grandson&#39;,
	inject: [name]
}
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里可以通过 inject 直接访问其两个层级上的数据，其用法与 props 完全相同，同样可以参数校验等</p><h5 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h5><p>这么做也是有明显的缺点的，在任意层级都能访问导致数据追踪比较困难，不知道是哪一个层级声明了这个或者不知道哪一层级或若干个层级使用了，因此这个属性通常并不建议使用能用 vuex 的使用 vuex，不能用的多传参几层，但是在做组件库开发时，不对 vuex 进行依赖，且不知道用户使用环境的情况下可以很好的使用</p><ul><li><h5 id="任意组件之间-1" tabindex="-1"><a class="header-anchor" href="#任意组件之间-1" aria-hidden="true">#</a> 任意组件之间</h5><p>简单的使用 EventBus，复杂的使用 vuex</p></li></ul><h2 id="路由" tabindex="-1"><a class="header-anchor" href="#路由" aria-hidden="true">#</a> 路由</h2><h3 id="react-1" tabindex="-1"><a class="header-anchor" href="#react-1" aria-hidden="true">#</a> react</h3><h4 id="跳转" tabindex="-1"><a class="header-anchor" href="#跳转" aria-hidden="true">#</a> 跳转</h4><blockquote><p>标签式导航 <code>&lt;Link&gt;</code></p></blockquote><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="跳转参数传递和接收参数" tabindex="-1"><a class="header-anchor" href="#跳转参数传递和接收参数" aria-hidden="true">#</a> 跳转参数传递和接收参数</h4>`,50),c=[p];function l(i,o){return s(),a("div",null,c)}const r=n(e,[["render",l],["__file","vue与react全面对比.html.vue"]]);export{r as default};
