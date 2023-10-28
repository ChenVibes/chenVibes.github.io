const e=JSON.parse(`{"key":"v-f28bccce","path":"/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/CSS3/%E8%BF%87%E6%B8%A1%E4%B8%8E%E5%8A%A8%E7%94%BB.html","title":"过渡与动画","lang":"zh-CN","frontmatter":{"title":"过渡与动画","order":4,"category":["前端基石","CSS3"],"description":"过渡 transition 过渡属性是 CSS3 浓墨重彩的特性，过渡可以为一个元素在不同样式之间变化自动添加“补间动画\\" 兼容性 过渡从 IE10 开始兼容，移动端兼容良好 曾几何时，网页上的动画特效基本都是由 Javascript 定时器实现的，现在逐步改为使用 CSS3 过渡 优点：动画更细腻，内存开销小 基本使用 transition: width 1s linear 0s;","head":[["meta",{"property":"og:url","content":"http://magicbegin.gitee.io/vuepress-blog/vuepress-blog/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/CSS3/%E8%BF%87%E6%B8%A1%E4%B8%8E%E5%8A%A8%E7%94%BB.html"}],["meta",{"property":"og:site_name","content":"Mr Chen's Blog"}],["meta",{"property":"og:title","content":"过渡与动画"}],["meta",{"property":"og:description","content":"过渡 transition 过渡属性是 CSS3 浓墨重彩的特性，过渡可以为一个元素在不同样式之间变化自动添加“补间动画\\" 兼容性 过渡从 IE10 开始兼容，移动端兼容良好 曾几何时，网页上的动画特效基本都是由 Javascript 定时器实现的，现在逐步改为使用 CSS3 过渡 优点：动画更细腻，内存开销小 基本使用 transition: width 1s linear 0s;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-27T11:35:00.000Z"}],["meta",{"property":"article:author","content":"Mr Chen"}],["meta",{"property":"article:modified_time","content":"2023-10-27T11:35:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"过渡与动画\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-10-27T11:35:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr Chen\\",\\"url\\":\\"https://gitee.com/magicBegin/vuepress-blog\\",\\"email\\":\\"599422271@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"过渡","slug":"过渡","link":"#过渡","children":[{"level":3,"title":"兼容性","slug":"兼容性","link":"#兼容性","children":[]},{"level":3,"title":"基本使用","slug":"基本使用","link":"#基本使用","children":[]},{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"哪些属性可以参与过渡","slug":"哪些属性可以参与过渡","link":"#哪些属性可以参与过渡","children":[]},{"level":3,"title":"注意项","slug":"注意项","link":"#注意项","children":[]}]},{"level":2,"title":"动画","slug":"动画","link":"#动画","children":[{"level":3,"title":"动画的定义和调用","slug":"动画的定义和调用","link":"#动画的定义和调用","children":[]},{"level":3,"title":"animation-iteration-count","slug":"animation-iteration-count","link":"#animation-iteration-count","children":[]},{"level":3,"title":"animation-direction","slug":"animation-direction","link":"#animation-direction","children":[]},{"level":3,"title":"animation-fill-mode","slug":"animation-fill-mode","link":"#animation-fill-mode","children":[]},{"level":3,"title":"animation-play-state","slug":"animation-play-state","link":"#animation-play-state","children":[]},{"level":3,"title":"多关键帧动画","slug":"多关键帧动画","link":"#多关键帧动画","children":[]},{"level":3,"title":"Animate.css","slug":"animate-css","link":"#animate-css","children":[]}]},{"level":2,"title":"过渡与动画的对比","slug":"过渡与动画的对比","link":"#过渡与动画的对比","children":[{"level":3,"title":"transition 过渡","slug":"transition-过渡","link":"#transition-过渡","children":[]},{"level":3,"title":"animation 动画","slug":"animation-动画","link":"#animation-动画","children":[]},{"level":3,"title":"应用场景分析","slug":"应用场景分析","link":"#应用场景分析","children":[]}]}],"git":{"createdTime":1698406500000,"updatedTime":1698406500000,"contributors":[{"name":"chenzhen","email":"599422271@qq.com","commits":1}]},"readingTime":{"minutes":4.18,"words":1255},"filePathRelative":"前端开发/前端基石/CSS3/过渡与动画.md","localizedDate":"2023年10月27日","excerpt":"<h2> 过渡</h2>\\n<p>transition 过渡属性是 CSS3 浓墨重彩的特性，过渡可以为一个元素在不同样式之间变化自动添加“补间动画\\"</p>\\n<h3> 兼容性</h3>\\n<ul>\\n<li>过渡从 IE10 开始兼容，移动端兼容良好</li>\\n<li>曾几何时，网页上的动画特效基本都是由 Javascript 定时器实现的，现在逐步改为使用 CSS3 过渡</li>\\n<li>优点：动画更细腻，内存开销小</li>\\n</ul>\\n<h3> 基本使用</h3>\\n<div class=\\"language-css line-numbers-mode\\" data-ext=\\"css\\"><pre class=\\"language-css\\"><code><span class=\\"token property\\">transition</span><span class=\\"token punctuation\\">:</span> width 1s linear 0s<span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{e as data};
