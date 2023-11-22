import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as u,c as r,b as n,d as s,a as o,w as a,e as k}from"./app-52f3f02e.js";const d={},m=k(`<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><ul><li><p>一个<strong>先进先出</strong>的数据结构</p></li><li><p>JavaScript 中<strong>没有</strong>队列，但可以用 Array 实现队列的所有功能。</p></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> item1 <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> item2 <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景" aria-hidden="true">#</a> 应用场景</h2><p>需要先进先出的场景，比如：食堂排队打饭、JS 异步中的任务队列、计算最近请求次数。</p><h3 id="最近的请求次数" tabindex="-1"><a class="header-anchor" href="#最近的请求次数" aria-hidden="true">#</a> 最近的请求次数</h3>`,6),b={href:"https://leetcode-cn.com/problems/number-of-recent-calls/",target:"_blank",rel:"noopener noreferrer"},v=n("ul",null,[n("li",null,"解题思路")],-1),h=n("p",null,"越早发出的请求越早不在最近 3000ms 内的请求里",-1),_=n("p",null,"满足先进先出，考虑用队列",-1),f=n("ul",null,[n("li",null,"解题步骤")],-1),g=n("ol",null,[n("li",null,"有新请求就入队，3000ms 前发出的请求出队。"),n("li",null,"队列的长度就是最近请求次数。")],-1),w=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},`/*
 * @lc app=leetcode.cn id=933 lang=javascript
 *
 * [933] 最近的请求次数
 */`),s(`

`),n("span",{class:"token comment"},"// @lc code=start"),s(`

`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"RecentCounter"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("q "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"t"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token class-name"},"RecentCounter"),n("span",{class:"token punctuation"},"."),s("prototype"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"ping"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"t"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// 先进先出 用队列！"),s(`
  `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("q"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("t"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token comment"},"//    3000ms前的请求出队"),s(`
  `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("q"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"<"),s(" t "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"3000"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("q"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"shift"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("q"),n("span",{class:"token punctuation"},"."),s(`length
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token doc-comment comment"},`/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */`),s(`
`),n("span",{class:"token comment"},"// @lc code=end"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},`/*
 * @lc app=leetcode.cn id=933 lang=typescript
 *
 * [933] 最近的请求次数
 */`),s(`

`),n("span",{class:"token comment"},"// @lc code=start"),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"RecentCounter"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"public"),s(" q"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"Array"),n("span",{class:"token operator"},"<"),n("span",{class:"token builtin"},"number"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token function"},"constructor"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token function"},"ping"),n("span",{class:"token punctuation"},"("),s("t"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// 先进先出 用队列"),s(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("q"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("t"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token comment"},"//    3000ms前的请求出队"),s(`
    `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("q"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"<"),s(" t "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"3000"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("q"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"shift"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("q"),n("span",{class:"token punctuation"},"."),s(`length
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token doc-comment comment"},`/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */`),s(`
`),n("span",{class:"token comment"},"// @lc code=end"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),j=n("h3",{id:"前端与队列-js-异步中的任务队列",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#前端与队列-js-异步中的任务队列","aria-hidden":"true"},"#"),s(" 前端与队列：js 异步中的任务队列")],-1),q=n("p",null,"事件循环与任务队列",-1),x=n("p",null,[n("img",{src:"https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/事件循环与任务队列.png",alt:"事件循环与任务队列"}),s("!")],-1);function C(R,A){const l=c("ExternalLinkIcon"),i=c("Tabs");return u(),r("div",null,[m,n("p",null,[n("a",b,[s("LeetCode：933. 最近的请求次数"),o(l)])]),v,h,_,f,g,o(i,{id:"60",data:[{id:"js"},{id:"ts"}]},{title0:a(({value:e,isActive:t})=>[s("js")]),title1:a(({value:e,isActive:t})=>[s("ts")]),tab0:a(({value:e,isActive:t})=>[w]),tab1:a(({value:e,isActive:t})=>[y]),_:1}),j,q,x])}const B=p(d,[["render",C],["__file","队列.html.vue"]]);export{B as default};
