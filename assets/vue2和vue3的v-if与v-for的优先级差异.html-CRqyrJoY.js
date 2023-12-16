import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as s,e as t}from"./app--yQHQ5cb.js";const e={},p=t(`<p>最近在使用<code>vue3</code>写一个公共表格组件，操作列需要利用<code>v-if</code>判断是否渲染这个操作按钮。居然提示：属性 <code>button</code> 此时没有在该实例上定义。这是原本的代码：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">slot-scope</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scope<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.showConfig.type=== &#39;button&#39;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>table-opt-button<span class="token punctuation">&quot;</span></span> 
                 <span class="token attr-name">plain</span> 
                 <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(button, index) in item.showConfig.buttons<span class="token punctuation">&quot;</span></span> 
                 <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index + button.title<span class="token punctuation">&quot;</span></span>
                 <span class="token attr-name">:title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button.title<span class="token punctuation">&quot;</span></span> 
                 <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button.func(scope.row)<span class="token punctuation">&quot;</span></span> 
                 <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button.show ? button.show(scope.row, button.buttonCode) : true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button.icon<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查了<code>vue2</code>和<code>vue3</code>的文档发现了一个问题：</p><ul><li><code>Vue2</code>:当它们处于同一节点，<code>v-for</code> 的优先级比 <code>v-if</code> 更高，这意味着 <code>v-if</code> 将分别重复运行于每个 <code>v-for</code> 循环中。当你只想为<em>部分</em>项渲染节点时，这种优先级的机制会十分有用，如下：</li></ul><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todo in todos<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>!todo.isComplete<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  {{ todo }}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样写在<code>vue2</code>是完全正确的，官方也是这样写的。</p><ul><li><code>Vue3</code>:当它们同时存在于一个节点上时，<code>v-if</code> 比 <code>v-for</code> 的优先级更高。这意味着 <code>v-if</code> 的条件将无法访问到 <code>v-for</code> 作用域内定义的变量别名：</li></ul><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>	<span class="token comment">&lt;!--
 这会抛出一个错误，因为属性 todo 此时
 没有在该实例上定义
--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todo in todos<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>!todo.isComplete<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  {{ todo.name }}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>很明显<code>vue3</code>和<code>vue2</code>的表现有差异，这就是导致问题的原因。</p><p>那么在<code>vue3</code>中，这种问题怎么处理呢？</p><p>在外新包装一层 <code>&lt;template&gt;</code> 再在其上使用 <code>v-for</code> 可以解决这个问题：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todo in todos<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>!todo.isComplete<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    {{ todo.name }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),o=[p];function c(l,u){return a(),s("div",null,o)}const k=n(e,[["render",c],["__file","vue2和vue3的v-if与v-for的优先级差异.html.vue"]]);export{k as default};
