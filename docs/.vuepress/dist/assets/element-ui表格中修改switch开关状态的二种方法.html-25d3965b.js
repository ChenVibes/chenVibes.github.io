import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o,c as e,a as c,b as n,e as l}from"./app-92903be0.js";const i={},u=n("p",null,"Swich 默认是 boolean 类型，如果后台传值为 number 类型，这个时候我们想用 number 来取代 boolean 类型",-1),r=n("p",null,"这里有个问题需要注意：当你点击修改状态时，弹出提示框，点击取消关闭时，switch 的状态依旧改变了:",-1),k=l(`<p>这是因为 v-model 双向绑定原理，点击开关时会实时改变状态，只需要把 v-model 改为:value=&quot;&quot;即可</p><ul><li>第一种：后台字段定义为 0 / 1（给后台传 0 / 1）</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>el<span class="token operator">-</span>table<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>el<span class="token operator">-</span>table<span class="token operator">-</span>column label<span class="token operator">=</span><span class="token string">&quot;状态&quot;</span> width<span class="token operator">=</span><span class="token string">&quot;120&quot;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>template slot<span class="token operator">-</span>scope<span class="token operator">=</span><span class="token string">&quot;scope&quot;</span><span class="token operator">&gt;</span>
        <span class="token comment">// 区别在这行代码</span>
         <span class="token operator">&lt;</span>el<span class="token operator">-</span><span class="token keyword">switch</span> <span class="token operator">:</span>value<span class="token operator">=</span><span class="token string">&quot;scope.row.cazt&quot;</span> <span class="token operator">:</span>active<span class="token operator">-</span>value<span class="token operator">=</span><span class="token string">&quot;1&quot;</span> <span class="token operator">:</span>inactive<span class="token operator">-</span>value<span class="token operator">=</span><span class="token string">&quot;0&quot;</span> @change<span class="token operator">=</span><span class="token string">&quot;handleChangeStatus($event,scope.row.id)&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span><span class="token keyword">switch</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
   <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>table<span class="token operator">-</span>column<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&lt;</span>el<span class="token operator">-</span>table<span class="token operator">&gt;</span>

<span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
  <span class="token comment">// 点击修改状态</span>
    <span class="token function">handleChangeStatus</span><span class="token punctuation">(</span><span class="token parameter">$event<span class="token punctuation">,</span> id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// $event 改变后的值</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>$event <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 这里判断一下</span>
        <span class="token comment">// 启用</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$confirm</span><span class="token punctuation">(</span><span class="token string">&#39;确认启用吗？&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;操作确认&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">confirmButtonText</span><span class="token operator">:</span> <span class="token string">&#39;确定&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">cancelButtonText</span><span class="token operator">:</span> <span class="token string">&#39;取消&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;warning&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$requestInternet<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/api/xxx?userid=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&amp;status=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>$event<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>$message<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">&#39;启用成功&#39;</span><span class="token punctuation">)</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onSearch</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// 禁用</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$confirm</span><span class="token punctuation">(</span><span class="token string">&#39;确认禁用吗？&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;操作确认&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">confirmButtonText</span><span class="token operator">:</span> <span class="token string">&#39;确定&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">cancelButtonText</span><span class="token operator">:</span> <span class="token string">&#39;取消&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;warning&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$requestInternet<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/api/xxxx?userid=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&amp;status=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>$event<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>               <span class="token constant">IW</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>$message<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">&#39;禁用成功&#39;</span><span class="token punctuation">)</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onSearch</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Î</p><ul><li>第二种：后台字段定义为 true / false（给后台传 true / false）</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>el<span class="token operator">-</span>table<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>el<span class="token operator">-</span>table<span class="token operator">-</span>column label<span class="token operator">=</span><span class="token string">&quot;状态&quot;</span> width<span class="token operator">=</span><span class="token string">&quot;120&quot;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>template slot<span class="token operator">-</span>scope<span class="token operator">=</span><span class="token string">&quot;scope&quot;</span><span class="token operator">&gt;</span>
        <span class="token comment">// 区别在这行代码</span>
         <span class="token operator">&lt;</span>el<span class="token operator">-</span><span class="token keyword">switch</span> @change<span class="token operator">=</span><span class="token string">&quot;(status)=&gt;handleChangeStatus(status,scope.row.id)&quot;</span> <span class="token operator">:</span>value<span class="token operator">=</span><span class="token string">&quot;scope.row.status&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span><span class="token keyword">switch</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
   <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>table<span class="token operator">-</span>column<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&lt;</span>el<span class="token operator">-</span>table<span class="token operator">&gt;</span>

<span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
  <span class="token comment">// 点击修改状态</span>
    <span class="token function">handleChangeStatus</span><span class="token punctuation">(</span><span class="token parameter">$event<span class="token punctuation">,</span> id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>$event<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 启用</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$confirm</span><span class="token punctuation">(</span><span class="token string">&#39;确认启用吗？&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;操作确认&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">confirmButtonText</span><span class="token operator">:</span> <span class="token string">&#39;确定&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">cancelButtonText</span><span class="token operator">:</span> <span class="token string">&#39;取消&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;warning&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$requestInternet<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/api/xxx?userid=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&amp;status=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>$event<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>$message<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">&#39;启用成功&#39;</span><span class="token punctuation">)</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onSearch</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// 禁用</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$confirm</span><span class="token punctuation">(</span><span class="token string">&#39;确认禁用吗？&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;操作确认&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">confirmButtonText</span><span class="token operator">:</span> <span class="token string">&#39;确定&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">cancelButtonText</span><span class="token operator">:</span> <span class="token string">&#39;取消&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;warning&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$requestInternet<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/api/xxxx?userid=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&amp;status=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>$event<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>$message<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">&#39;禁用成功&#39;</span><span class="token punctuation">)</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onSearch</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function d(s,v){const a=p("CodePen");return o(),e("div",null,[u,r,c(a,{link:"https://codepen.io/zhangfanhang/pen/NWYLEJK",theme:s.$isDarkMode?"dark":"light"},null,8,["theme"]),k])}const b=t(i,[["render",d],["__file","element-ui表格中修改switch开关状态的二种方法.html.vue"]]);export{b as default};
