import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as e,e as c}from"./app-66dc9b28.js";const n={},o=c('<figure><img src="https://juejin.cn/post/6844903512845860872" alt="这一次，彻底弄懂 JavaScript 执行机制" tabindex="0"><figcaption>这一次，彻底弄懂 JavaScript 执行机制</figcaption></figure><figure><img src="https://segmentfault.com/a/1190000039971920" alt="一次搞懂- JS 事件循环之宏任务和微任务" tabindex="0"><figcaption>一次搞懂- JS 事件循环之宏任务和微任务</figcaption></figure><figure><img src="https://segmentfault.com/a/1190000012806637#1" alt="10 分钟理解 JS 引擎的执行机制" tabindex="0"><figcaption>10 分钟理解 JS 引擎的执行机制</figcaption></figure><hr><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/浏览器完整流程图.png" alt="浏览器完整流程图" tabindex="0"><figcaption>浏览器完整流程图</figcaption></figure><p><strong>任务队列</strong>的执行过程是：先执行一个<code>宏任务</code>，执行过程中如果产出新的<code>宏/微任务</code>，就将他们推入相应的<code>任务队列</code>，之后在执行一队<code>微任务</code>，之后再执行<code>宏任务</code>，如此循环。以上不断重复的过程就叫做 <code>Event Loop(事件循环)</code>。</p><div class="hint-container tip"><p class="hint-container-title">那些是宏任务？那些是微任务？</p><ul><li>宏任务主要包括：包括整体代码 script、setTimeout、setInterval...</li><li>微任务主要包括：Promise.then...</li></ul></div><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/宏任务微任务.png" alt="宏任务微任务" tabindex="0"><figcaption>宏任务微任务</figcaption></figure>',8),a=[o];function s(g,r){return i(),e("div",null,a)}const l=t(n,[["render",s],["__file","理解js事件循环.html.vue"]]);export{l as default};
