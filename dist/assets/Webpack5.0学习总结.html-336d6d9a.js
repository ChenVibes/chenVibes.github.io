import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o,c,b as s,d as n,a as l,e as a}from"./app-e960f0c6.js";const i={},u=a(`<h1 id="webpack5-0-学习总结-基础篇" tabindex="-1"><a class="header-anchor" href="#webpack5-0-学习总结-基础篇" aria-hidden="true">#</a> Webpack5.0 学习总结-基础篇</h1><h1 id="认识-webpack" tabindex="-1"><a class="header-anchor" href="#认识-webpack" aria-hidden="true">#</a> 认识 Webpack</h1><h2 id="webpack-是什么" tabindex="-1"><a class="header-anchor" href="#webpack-是什么" aria-hidden="true">#</a> Webpack 是什么?</h2><p>Webpack 是一种前端资源构建工具，一个静态模块打包器。</p><ul><li>前端资源构建工具：主要理解一下这个前端资源是哪些资源。这些前端资源就是浏览器不认识的 web 资源， 比如 sass、less、ts，包括 js 里的高级语法。这些资源要能够在浏览器中正常工作，必须一一经过编译处理。而 webpack 就是可以集成这些编译工具的一个总的构建工具。</li><li>静态模块打包器：静态模块就是 web 开发过程中的各种资源文件，webpack 根据引用关系，构建一个依赖关系图，然后利用这个关系图将所有静态模块打包成一个或多个 bundle 输出。</li></ul><h2 id="为什么我们需要-webpack" tabindex="-1"><a class="header-anchor" href="#为什么我们需要-webpack" aria-hidden="true">#</a> 为什么我们需要 Webpack</h2><p>回答这个问题，可以和还没有 Webpack、没有构建工具时对比一下，就能明显地感觉出来了。这里就来列举一下不使用构建工具时的痛点。</p><ul><li>web 开发时调用后端接口跨域，需要其他工具代理或者其他方式规避。</li><li>改动代码后要手动刷新浏览器，如果做了缓存还需要清缓存刷新。</li><li>因为 js 和 css 的兼容性问题，很多新语法学习了却不能使用，无论是开发效率和个人成长都受影响。</li><li>打包问题。需要使用额外的平台如 jekins 打包，自己编写打包脚本，对各个环节如压缩图片，打包 js、打包 css 都要一一处理。 ......</li></ul><p>而这些问题，Webpack 都提供了解决方案，你只需要做一些简单的配置就可以上手使用了。当然，Webpack 做的还不止这些，下面就来一一介绍。</p><h1 id="使用-webpack" tabindex="-1"><a class="header-anchor" href="#使用-webpack" aria-hidden="true">#</a> 使用 Webpack</h1><h2 id="webpack-核心配置" tabindex="-1"><a class="header-anchor" href="#webpack-核心配置" aria-hidden="true">#</a> Webpack 核心配置</h2><p>这部分介绍 Webpack 常用配置，主要以代码和注释的形式说明。<br> 提醒一下，文章中写到的配置较少，详细配置可查看 Webpack 官方文档。特别是对于 loader 和 plugins，它们大部分是由第三方集成，内容经常会更新，所以在你需要使用到他们时，直接去对应官网里查找它们的集成和使用方法。</p><h3 id="entry" tabindex="-1"><a class="header-anchor" href="#entry" aria-hidden="true">#</a> entry</h3><p>入口（entry）：指示 Webpack 以哪个文件为入口起点开始打包，分析构建内部依赖图。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// string方式： 单入口，打包形成一个chunk，输出一个buldle文件。chunk的名称默认是main.js</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// array方式：多入口，所有入口文件最终只会形成一个chunk，输出出去只有一个bundle文件</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;./src/test.js&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// object：多入口，有几个入口文件就形成几个chunk，输出几个bundle文件。此时chunk的名称就是对象key值</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token string">&#39;./src/test.js&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="output" tabindex="-1"><a class="header-anchor" href="#output" aria-hidden="true">#</a> output</h3><p>输出（output）：指示 Webpack 打包后的资源 bundles 输出到哪里，以及如何命名。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 输出文件目录（将来所有资源输出的公共目录，包括css和静态文件等等）</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">//默认</span>
    <span class="token comment">// 入口文件名称（指定名称+目录）</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;[name].js&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 默认</span>
    <span class="token comment">// 所有资源引入公共路径前缀，一般用于生产环境，小心使用</span>
    <span class="token literal-property property">publicPath</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">/*
      非入口文件chunk的名称。所谓非入口即import动态导入形成的chunk或者optimization中的splitChunks提取的公共chunk
      它支持和 filename 一致的内置变量
    */</span>
    <span class="token literal-property property">chunkFilename</span><span class="token operator">:</span> <span class="token string">&#39;[contenthash:10].chunk.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">clean</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 打包前清空输出目录，相当于clean-webpack-plugin插件的作用,webpack5新增。</span>
    <span class="token comment">/* 当用 Webpack 去构建一个可以被其他模块导入使用的库时需要用到library */</span>
    <span class="token literal-property property">library</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;[name]&#39;</span><span class="token punctuation">,</span> <span class="token comment">//整个库向外暴露的变量名</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;window&#39;</span> <span class="token comment">//库暴露的方式</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="loader" tabindex="-1"><a class="header-anchor" href="#loader" aria-hidden="true">#</a> loader</h3><p>Loader：Webpack 自身只能理解 JavaScript 和 json 文件，loader 让 Webpack 能够处理其他文件。<br> 这里列举几类常见文件的 loader 配置。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token comment">// 匹配哪些文件</span>
      <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
      <span class="token comment">// 使用哪些loader进行处理。执行顺序，从右至左，从下至上</span>
      <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">// 创建style标签，将js中的样式资源（就是css-loader转化成的字符串）拿过来，添加到页面head标签生效</span>
        <span class="token string">&#39;style-loader&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// 将css文件变成commonjs一个模块加载到js中，里面的内容是样式字符串</span>
        <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token comment">// css 兼容处理 postcss，注意需要在package.json配置browserslist</span>
          <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;postcss-loader&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">postcssOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">ident</span><span class="token operator">:</span> <span class="token string">&#39;postcss&#39;</span><span class="token punctuation">,</span>
              <span class="token comment">// postcss-preset-env插件：帮postcss找到package.json中的browserslist配置，根据配置加载指定的兼容性样式</span>
              <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;postcss-preset-env&#39;</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
      <span class="token comment">// 注意需要在package.json配置browserslist，否则babel-loader不生效</span>
      <span class="token comment">// js兼容处理 babel</span>
      <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;babel-loader&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 规则只使用一个loader时推荐写法</span>
      <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">[</span>
            <span class="token string">&#39;@babel/preset-env&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 预设：指示babel做怎么样的兼容处理</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">useBuiltIns</span><span class="token operator">:</span> <span class="token string">&#39;usage&#39;</span><span class="token punctuation">,</span> <span class="token comment">//按需加载</span>
              <span class="token literal-property property">corejs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">version</span><span class="token operator">:</span> <span class="token string">&#39;3&#39;</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token literal-property property">targets</span><span class="token operator">:</span> <span class="token string">&#39;defaults&#39;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">/*
    Webpack5.0新增资源模块(asset module)，它是一种模块类型，允许使用资源文件（字体，图标等）而无需     配置额外 loader。支持以下四个配置
    asset/resource 发送一个单独的文件并导出 URL。之前通过使用 file-loader 实现。
    asset/inline 导出一个资源的 data URI。之前通过使用 url-loader 实现。
    asset/source 导出资源的源代码。之前通过使用 raw-loader 实现。
    asset 在导出一个 data URI 和发送一个单独的文件之间自动选择。之前通过使用 url-loader，并且配置资     源体积限制实现。
    */</span>
    <span class="token comment">// Webpack4使用file-loader实现</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(eot|svg|ttf|woff|)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;asset/resource&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">generator</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 输出文件位置以及文件名</span>
        <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;fonts/[name][ext]&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// Webpack4使用url-loader实现</span>
    <span class="token punctuation">{</span>
      <span class="token comment">//处理图片资源</span>
      <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(jpg|png|gif|)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;asset&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">generator</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 输出文件位置以及文件名</span>
        <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;images/[name][ext]&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">dataUrlCondition</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">maxSize</span><span class="token operator">:</span> <span class="token number">10</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token comment">//超过10kb不转base64</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="plugin" tabindex="-1"><a class="header-anchor" href="#plugin" aria-hidden="true">#</a> plugin</h3><p>插件（plugins）：可以用于执行范围更广的任务。从打包优化和压缩，一直到重新定义环境中的变量等。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// CleanWebpackPlugin帮助你在打包时自动清除dist文件，学习时使用比较方便</span>
    <span class="token comment">// const { CleanWebpackPlugin } = require(&quot;clean-webpack-plugin&quot;); //从webpack5开始，webpack内置了该功能，只要在ouput中配置clear为true即可</span>

    <span class="token comment">// HtmlWebpackPlugin帮助你创建html文件，并自动引入打包输出的bundles文件。支持html压缩。</span>
    <span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;html-webpack-plugin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 该插件将CSS提取到单独的文件中。它会为每个chunk创造一个css文件。需配合loader一起使用</span>
    <span class="token keyword">const</span> MiniCssExtractPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;mini-css-extract-plugin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 该插件将在Webpack构建过程中搜索CSS资源，并优化\\最小化CSS</span>
    <span class="token keyword">const</span> OptimizeCssAssetsWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;optimize-css-assets-webpack-plugin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// vue-loader V15版本以上，需要引入VueLoaderPlugin插件，它的作用是将你定义过的js、css等规则应用到vue文件中去。</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> VueLoaderPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;vue-loader&#39;</span><span class="token punctuation">)</span>

    module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.vue$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;vue-loader&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
            <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token comment">// MiniCssExtractPlugin.loader的作用就是把css-loader处理好的样式资源（js文件内），单独提取出来 成为css样式文件</span>
            MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span><span class="token comment">//生产环境下使用，开发环境还是推荐使用style-loader</span>
            <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">template</span><span class="token operator">:</span><span class="token string">&quot;index.html&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token keyword">new</span> <span class="token class-name">MiniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;css/built.css&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token keyword">new</span> <span class="token class-name">OptimizeCssAssetsWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token keyword">new</span> <span class="token class-name">VueLoaderPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mode" tabindex="-1"><a class="header-anchor" href="#mode" aria-hidden="true">#</a> mode</h3><p>模式（mode）:指示 Webpack 使用相应模式的配置。默认为 production。 搬一下官网的表格，还是有必要知道一下我们平常使用最多的两种模式，Webpack 都做了什么。</p><p>选项</p><p>描述</p><p>development</p><p>会将 DefinePlugin 中 p<wbr>rocess.env.NODE_ENV 的值设置为 development. 为模块和 chunk 启用有效的名。</p><p>production</p><p>会将 DefinePlugin 中 p<wbr>rocess.env.NODE_ENV 的值设置为 production。为模块和 chunk 启用确定性的混淆名称，FlagDependencyUsagePlugin，FlagIncludedChunksPlugin，ModuleConcatenationPlugin，NoEmitOnErrorsPlugin 和 TerserPlugin 。</p><p>none</p><p>不使用任何默认优化选项</p><ul><li>DefinePlugin：定义全局变量 p<wbr>rocess.env.NODE_ENV，区分程序运行状态。</li><li>FlagDependencyUsagePlugin：标记没有用到的依赖。</li><li>FlagIncludedChunksPlugin：标记 chunks，防止 chunks 多次加载。</li><li>ModuleConcatenationPlugin：作用域提升(scope hosting)，预编译功能，提升或者预编译所有模块到一个闭包中，提升代码在浏览器中的执行速度。</li><li>NoEmitOnErrorsPlugin：防止程序报错，就算有错误也继续编译。</li><li>TerserPlugin：压缩 js 代码。</li></ul><h3 id="其他常用配置" tabindex="-1"><a class="header-anchor" href="#其他常用配置" aria-hidden="true">#</a> 其他常用配置</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 解析模块的规则：</span>
  <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 配置 解析模块路径别名：可简写路径。</span>
    <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;@&#39;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 配置 省略文件路径的后缀名。默认省略js和json。也是webpack默认认识的两种文件类型</span>
    <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;.js&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.json&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.css&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 新加css文件</span>
    <span class="token comment">// 告诉webpack解析模块是去找哪个目录</span>
    <span class="token comment">// 该配置明确告诉webpack，直接去上一层找node_modules。</span>
    <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">[</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;../node_modules&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// devServer（开发环境下配置）：</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 运行代码的目录</span>
    <span class="token literal-property property">contentBase</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;build&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// 为每个静态文件开启gzip压缩</span>
    <span class="token literal-property property">compress</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&#39;localhost&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">5000</span><span class="token punctuation">,</span>
    <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 自动打开浏览器</span>
    <span class="token literal-property property">hot</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//开启HMR功能</span>
    <span class="token comment">// 设置代理</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 一旦devServer(5000端口)接收到/api/xxx的请求，就会用devServer起的服务把请求转发到另外一个服务器（3000）</span>
      <span class="token comment">// 以此来解决开发中的跨域问题</span>
      <span class="token literal-property property">api</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;htttp://localhost:3000&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// 发送请求时，请求路径重写：将/api/xxx  --&gt; /xxx （去掉/api）</span>
        <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">&#39;^api&#39;</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// optimization（生产环境下配置）</span>
  <span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 提取公共代码</span>
    <span class="token literal-property property">splitChunks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token string">&#39;all&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">minimizer</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// 配置生产环境的压缩方案：js和css</span>
      <span class="token keyword">new</span> <span class="token class-name">TerserWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token comment">// 多进程打包</span>
        <span class="token literal-property property">parallel</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">terserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">// 启动source-map</span>
          <span class="token literal-property property">sourceMap</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="webpack-打包优化" tabindex="-1"><a class="header-anchor" href="#webpack-打包优化" aria-hidden="true">#</a> webpack 打包优化</h2><h3 id="开发环境优化" tabindex="-1"><a class="header-anchor" href="#开发环境优化" aria-hidden="true">#</a> 开发环境优化</h3><h5 id="一、-使用-source-map" tabindex="-1"><a class="header-anchor" href="#一、-使用-source-map" aria-hidden="true">#</a> 一、 使用 source-map</h5><p>source-map：一种提供源代码到构建后代码映射的技术，如果构建后代码出错了，通过映射可以追踪源代码错误。优化代码调试。 开启 source-map 配置很简单：devtool:&quot;source-map&quot;。source-map 的值有多种类型，简单解释下。 source-map 各选项常用组成：inline|eval|cheap|cheap-module</p><ul><li>inline：内联，一个 chunk 生成一个总的 source-map</li><li>eval：内联，每一个文件生成一个 source-map</li><li>cheap：外部，报错位置只能精确到行。</li><li>cheap-module：显示第三方库的 source-map</li></ul><p>内联和外部的区别： 内联不生成 map.js 文件，而是通过 data-url 的形式直接注入到 chunk 里；内联构建速度更快。</p><h5 id="二、-hmr-模块热替换" tabindex="-1"><a class="header-anchor" href="#二、-hmr-模块热替换" aria-hidden="true">#</a> 二、 HMR（模块热替换）</h5><p>devServer 启动一个代理服务器。启动过后修改代码就会自动刷新浏览器了，但这个并不是 HMR。 HMR：模块热替换，也可以理解为局部替换。替换、添加或删除 模块，而无需重新加载整个页面。如下配置开启 HMR</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">contentBase</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">hot</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">//开启HMR功能</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 注意：Webpack升级到5.0后，target默认值值会根据package.json中的browserslist改变，导致devServer的自动更新失效。所以development环境下直接配置成web。</span>
  <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;web&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>开启 HMR 后，还需要进行一些配置才能生效。</p><ul><li>样式文件：style-loader 内部实现，所以只要 loader 中配置了 style-loade 就可直接使用 HMR 功能</li><li>vue 文件：vue-loader 内部实现，同理配置 vue-loader 直接使用 HMR。</li><li>js 文件：需要修改源代码，接收更新通知，代码如下</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">import</span> test <span class="token keyword">from</span> <span class="token string">&quot;./test.js&quot;</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>module<span class="token punctuation">.</span>hot<span class="token punctuation">)</span><span class="token punctuation">{</span>
    module<span class="token punctuation">.</span>hot<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment">// module.hot.accept(&quot;./test.js&quot;,()=&gt;{</span>
  <span class="token comment">// console.log(&#39;Accepting the updated test module!&#39;);</span>
  <span class="token comment">// })</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当 test 文件被改动时，更新事件会一层层往上传递，直到传递到入口文件中。而在传递的过程中，任何地方接收了这个更新事件，即上面的 module.hot.accept 方法，就会停止传递，执行回调。如果一直未接收，最后就会通知 Webpack 刷新整个页面。</p><h3 id="生产环境优化" tabindex="-1"><a class="header-anchor" href="#生产环境优化" aria-hidden="true">#</a> 生产环境优化</h3><h5 id="一、-oneof" tabindex="-1"><a class="header-anchor" href="#一、-oneof" aria-hidden="true">#</a> 一、 oneOf</h5><p>默认情况下，文件会去匹配 rules 下面的每一个规则，即使已经匹配到某个规则了也会继续向下匹配。而如果将规则放在 oneOf 属性中，则一旦匹配到某个规则后，就停止匹配了。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;eslint-loader&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//  以下loader一种文件只会匹配一个</span>
        <span class="token literal-property property">oneOf</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">// 不能有两个配置处理同一种类型文件，如果有，另外一个规则要放到外面。</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
            <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
            <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;babel-loader&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
            <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>放在 oneOf 属性中的规则只会匹配成功一次，所以如果有一种类型的文件需要使用多个 loader，要么使用 use 数组，要么放到 oneOf 之外。</p><h5 id="二、-缓存" tabindex="-1"><a class="header-anchor" href="#二、-缓存" aria-hidden="true">#</a> 二、 缓存</h5><p>在编译打包时可对文件做缓存，有两种方式，一种是解析文件的 loader 自身带有缓存功能（如 babel-loader,vue-loader），第二种就是使用专门的 loader（cache-loader）。 开启缓存后，对于未改动的文件，webpack 直接从缓存中读取而不用再次编译，大大加快构建速度。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
      <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">//使用cache-loader，放在babel-loader前可对babel编译后的js文件做缓存。</span>
        <span class="token string">&#39;cache-loader&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;babel-loader&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">[</span>
                <span class="token string">&#39;@babel/preset-env&#39;</span> <span class="token comment">// 预设：指示babel做怎么样的兼容处理</span>
              <span class="token punctuation">]</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token comment">// 开启babel缓存，第二次构建时，会读取之前的缓存。</span>
            <span class="token literal-property property">cacheDirectory</span><span class="token operator">:</span> <span class="token boolean">true</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上方配置是对文件的编译做了缓存，webpack5 提供了 cache 配置项，可对最终输出的 trunk 和模块进行缓存。具体配置如下</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">cache</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;filesystem&#39;</span><span class="token punctuation">,</span> <span class="token comment">//保存位置，开发环境下默认为memory类型，生产环境cache配置默认是关闭的。</span>
    <span class="token literal-property property">buildDependencies</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">config</span><span class="token operator">:</span> <span class="token punctuation">[</span>__filename<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="三、-多进程打包-thread-loader" tabindex="-1"><a class="header-anchor" href="#三、-多进程打包-thread-loader" aria-hidden="true">#</a> 三、 多进程打包（thread-loader）</h5><p>一般只有在编译花费时间较长时才需要使用 thread-loader，因为这个 loader 启动和通信都是有开销的，如果时间较短，使用这个 loader 就得不偿失了。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// &quot;thread-loader&quot;放在babel-loader前，就会在babel-loader工作时进行多进程工作。</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;thread-loader&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">workers</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token comment">// 启动进程个数，默认是电脑cpu核数-1</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;babel-loader&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&#39;@babel/preset-env&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="四、-外部扩展-externals" tabindex="-1"><a class="header-anchor" href="#四、-外部扩展-externals" aria-hidden="true">#</a> 四、 外部扩展(externals)</h5><p>externals 用来告诉 Webpack 要构建的代码中使用了哪些不用被打包的模块，这些模块可能是通过外部环境（如 CDN）引入的。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>export <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">externals</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 把导入语句里的 jquery 替换成运行环境里的全局变量 jQuery</span>
    <span class="token literal-property property">jquery</span><span class="token operator">:</span> <span class="token string">&#39;jQuery&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 源代码</span>
<span class="token keyword">import</span> $ <span class="token keyword">from</span> <span class="token string">&#39;jquery&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置了 externals 后，即使你代码中引入了这个库，Webpack 也不会将库打包进 bundle，而是直接使用全局变量。</p><h5 id="五、-dll" tabindex="-1"><a class="header-anchor" href="#五、-dll" aria-hidden="true">#</a> 五、 DLL</h5><p>dll（动态链接库）：使用 dll 技术对公共库进行提前打包，可大大提升构建速度。公共库一般情况下是不会有改动的，所以这些模块只需要编译一次就可以了，并且可以提前打包好。在主程序后续构建时如果检测到该公共库已经通过 dll 打包了，就不再对其编译而是直接从动态链接库中获取。 实现 dll 打包需要以下三步：</p><ol><li>抽取公共库，打包到一个或多个动态链接库中。</li><li>将打包好的动态链接库在页面中引入。</li><li>主程序使用了动态链接库中的公共库时，不能被打包入 bundle，应该直接去动态链接库中获取。</li></ol><p>针对这个步骤的代码</p><p>1 新建一个 webpack.dll.js 用来提前打包动态链接库</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// webpack.dll.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// JS 执行入口文件</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 把 vue 相关模块的放到一个单独的动态链接库</span>
    <span class="token literal-property property">vendor</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;vue&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;axios&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 其他模块放到另一个动态链接库</span>
    <span class="token literal-property property">other</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;jquery&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;lodash&#39;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 输出的动态链接库的文件名称，[name] 代表当前动态链接库的名称（&quot;vendor&quot;和&quot;other&quot;）</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;[name].dll.js&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// 输出的文件都放到 dist 目录下的dll文件夹中</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;dll&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// 存放动态链接库的向外暴露的变量名，例如对应 vendor 来说就是 _dll_vendor</span>
    <span class="token literal-property property">library</span><span class="token operator">:</span> <span class="token string">&#39;_dll_[name]&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//  打包生成一个mainfest.json文件。告诉webpack哪些库不参与后续的打包，已经通过dll事先打包好了。</span>
    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>DllPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// 动态链接库的库名，需要和 output.library 中保持一致</span>
      <span class="token comment">// 该字段的值也就是输出的 manifest.json 文件 中 name 字段的值</span>
      <span class="token comment">// 例如 vendor.manifest.json 中就有 &quot;name&quot;: &quot;_dll_vendor&quot;</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;_dll_[name]&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// 描述动态链接库的 manifest.json 文件输出时的文件名称</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;dll&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;[name].manifest.json&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>在模板页 index.html 中引入打包好的动态链接库</li></ol><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>IE=edge<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Webpack<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./dll/vendor.dll.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./dll/other.dll.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>在主程序的 Webpack 配置中使用 webpack.DllReferencePlugin 插件，读取 webpack.DllPlugin 生成的 manifest.json 文件，从中获取依赖关系。</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// webpack.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;./index.html&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// 告诉 Webpack 使用了哪些动态链接库</span>
    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>DllReferencePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// manifest 文件告诉 webpack 哪些库已经通过 dll 事先打包好了，后续构建直接去动态链接库里获取。</span>
      <span class="token literal-property property">manifest</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;./dll/vendor.manifest.json&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>DllReferencePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">manifest</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;./dll/other.manifest.json&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="六、-tree-shaking-树摇" tabindex="-1"><a class="header-anchor" href="#六、-tree-shaking-树摇" aria-hidden="true">#</a> 六、 Tree Shaking(树摇)</h5><p>Tree Shaking(树摇)：移除 JavaScript 上下文中的未引用代码(dead-code)。将整个应用程序想象成一棵树，绿色的树叶表示实际用到的 source code（源码）和 library（库），灰色的树叶则表示未被使用的代码，是枯萎的树叶。为了除去这些死去的无用的树叶，你需要摇动这棵树使其落下。这就是 Tree Shaking 的名称由来。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 入口文件index.js</span>
<span class="token keyword">import</span> test <span class="token keyword">from</span> <span class="token string">&#39;./test.js&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>test<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// 测试文件test.js</span>
<span class="token keyword">const</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x <span class="token operator">+</span> y
<span class="token keyword">const</span> <span class="token function-variable function">print</span> <span class="token operator">=</span> <span class="token parameter">msg</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span> add<span class="token punctuation">,</span> print <span class="token punctuation">}</span>

<span class="token comment">// 最终打包输出的bundle：main.js文件</span>
<span class="token operator">!</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token string">&#39;use strict&#39;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上面示例可以看出，index.js 中虽然引入了 test 文件，但是因为 test 文件暴露的 print 方法没有被使用，所以在最终打包中被去除。 这一点在 Webpack4 中还做不到，Webpack4 中只会去除从未被使用的模块。带入上面的例子，如果 test 在 index.js 文件中没有被用到，才会被 Tree Shaking。之所以这样，是因为 Webpack4 默认认为所有文件的代码都是有副作用的。如何告知 Webpack 你的代码是否有副作用，可通过 package.json 中的 sideEffects 字段。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// 所有文件都有副作用</span>
    <span class="token punctuation">{</span>
     <span class="token string-property property">&quot;sideEffects&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 所有文件都没有副作用，</span>
    <span class="token punctuation">{</span>
     <span class="token string-property property">&quot;sideEffects&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 只有这些文件有副作用，所有其他文件都可以 Tree Shaking，但会保留这些文件</span>
    <span class="token punctuation">{</span>
     <span class="token string-property property">&quot;sideEffects&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;./src/file1.js&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;./src/file2.js&quot;</span>
     <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>比如说 Webpack5.0 默认设置中认为样式文件是有副作用的，所以引入样式文件虽然没有被使用（样式文件肯定是不使用的）也不会被去除，但是如果设置了 sideEffects：false，就会进行 Tree Shaking 将代码去除。 说了这么多，到底怎么设置 Tree Shaking？其实不用特别配置，只要将 mode 设置为&quot;production&quot;，Webpack 就自动启用 Tree Shaking 了。有两点说明下：</p><ul><li>源代码必须使用 静态的 ES6 模块化语法。原因是 Webpack 在构建时通过静态分析，分析出代码之间的依赖关系。而动态导入如 require 语法只有在执行时才知道导入了哪个模块，所以无法做 Tree Shaking。</li><li>三方库无法做 Tree Shaking。原因猜测是 Webpack 无法保证三方库导入是否会直接对程序产生影响。</li></ul><h5 id="七、-code-split-代码分割" tabindex="-1"><a class="header-anchor" href="#七、-code-split-代码分割" aria-hidden="true">#</a> 七、 Code Split（代码分割）</h5><p>Webpack 默认会将所有依赖的文件打包输出到一个 bundle.js 中（单入口时），当应用程序逐渐复杂，这个 bundle.js 文件也会越来越大，浏览器加载的速度也会越来越慢，所以就需要使用代码分割来将不同代码单独打包成不同 chunk 输出。主要有两种方法</p><p>一、 通过 optimization 将公共代码单独打包成 chunk</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">splitChunks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 选择哪些 chunk 进行优化，默认async，即只对动态导入形成的chunk进行优化。</span>
      <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token string">&#39;all&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// 提取chunk最小体积</span>
      <span class="token literal-property property">minSize</span><span class="token operator">:</span> <span class="token number">20000</span><span class="token punctuation">,</span>
      <span class="token comment">// 要提取的chunk最少被引用次数</span>
      <span class="token literal-property property">minChunks</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token comment">// 对要提取的chunk进行分组</span>
      <span class="token literal-property property">cacheGroups</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 匹配node_modules中的三方库，将其打包成一个chunk</span>
        <span class="token literal-property property">defaultVendors</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[\\\\/]node_modules[\\\\/]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
          <span class="token comment">// chunk名称</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;vendors&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">priority</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">10</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token keyword">default</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">// 将至少被两个chunk引入的模块提取出来打包成单独chunk</span>
          <span class="token literal-property property">minChunks</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;default&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">priority</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">20</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>二、 import 动态导入 当想要根据业务拆分 bundle 时推荐用这种方式。import 动态导入的模块 Webpack 会将其作为单独的 chunk 打包。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &#39;test&#39; */</span> <span class="token string">&#39;./test.js&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">result</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;加载失败！&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="webpack5-0-学习总结-进阶篇" tabindex="-1"><a class="header-anchor" href="#webpack5-0-学习总结-进阶篇" aria-hidden="true">#</a> Webpack5.0 学习总结-进阶篇</h1><h1 id="窥探-webpack-原理" tabindex="-1"><a class="header-anchor" href="#窥探-webpack-原理" aria-hidden="true">#</a> 窥探 webpack 原理</h1><h2 id="如何开发一个-loader" tabindex="-1"><a class="header-anchor" href="#如何开发一个-loader" aria-hidden="true">#</a> 如何开发一个 loader</h2><p>loader 本质上是一个函数，它的作用就是将匹配到的源文件内容做一些处理然后输出。当某个规则使用了多个 loader 处理时，就会按照从下往上的顺序依次执行，后一步拿到的都是前一步处理完成的内容。可以理解为链式调用。所以开发 loader 时，最要关心的就是它的输入与输出。<br> 下面就用实例分步介绍开发一个 loader 的过程</p><ol><li>在 webpack 配置文件中引入自己编写的 loader，并在某个规则中使用。</li><li>编写自定义 loader。</li><li>对比 loader 使用前后，bundle 文件（main.js）的差异，验证 loader 效果。</li></ol><p>首先明确下编写的这个 loader 想要实现什么功能。本示例中，简单实现删除 js 注释的功能，以此来介绍 loader 编写流程。</p><h3 id="一、-配置文件中引入-loader" tabindex="-1"><a class="header-anchor" href="#一、-配置文件中引入-loader" aria-hidden="true">#</a> 一、 配置文件中引入 loader</h3><p>在 webpack.config.js 中引入 loader，这里说明一下 resolveLoader，它的作用是配置 loader 的查找路径，若未配置 resolveLoader，rules 中的 loader 参数，需要填写完整的 loader 文件路径。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// webpack.config.js</span>

<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;none&#39;</span><span class="token punctuation">,</span> <span class="token comment">//mode设置为none，不启用任何默认配置，防止Webpack自动处理干扰loader效果。</span>
  <span class="token comment">/* 解析loader的规则 */</span>
  <span class="token literal-property property">resolveLoader</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// loader查找路径，默认是node_modules,所以我们平常写loader（如babel-loader）时实际都会去node_modules里找</span>
    <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;node_modules&#39;</span><span class="token punctuation">,</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;loaders&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token comment">// 增加查找路径。顺序是从前往后</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token comment">// 因为配置了resolveLoader，在loaders文件夹下找到了myLoader</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;myLoader&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">oneLine</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 是否删除单行注释</span>
          <span class="token literal-property property">multiline</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// 是否删除多行注释</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二、-编写自定义-loader" tabindex="-1"><a class="header-anchor" href="#二、-编写自定义-loader" aria-hidden="true">#</a> 二、 编写自定义 loader</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// myLoader.js</span>

module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">source</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Webpack5.0开始，不在需要使用工具获取option了</span>
  <span class="token comment">// 获取到webpack.config.js中配置的options</span>
  <span class="token keyword">let</span> options <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getOptions</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">let</span> result <span class="token operator">=</span> source
  <span class="token comment">// 默认单行和多行注释都删除</span>
  <span class="token keyword">const</span> defaultOption <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">oneLine</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">multiline</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
  options <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> defaultOption<span class="token punctuation">,</span> options<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>oneLine<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 去除单行注释</span>
    result <span class="token operator">=</span> result<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\/\\/.*</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>multiline<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 去除多行注释</span>
    result <span class="token operator">=</span> result<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\/\\*.*?\\*\\/</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// loader必须要有输出，否则Webpack构建报错</span>
  <span class="token keyword">return</span> result
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="三、-对比打包输出的-bundle-验证-loader-效果。" tabindex="-1"><a class="header-anchor" href="#三、-对比打包输出的-bundle-验证-loader-效果。" aria-hidden="true">#</a> 三、 对比打包输出的 bundle，验证 loader 效果。</h3><p>为了让对比更清晰简洁，源代码 index.js 中的内容非常简单。</p><ul><li>源代码</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>

<span class="token punctuation">;</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">_ 增加多行注释，用于测试 _</span><span class="token regex-delimiter">/</span></span>
<span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token number">100</span>
<span class="token keyword">let</span> y <span class="token operator">=</span> x <span class="token comment">// 行内单行测试</span>
<span class="token comment">// 单行注释测试</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>未使用 loader 时的输出文件，可以看到源代码中的注释都保留着。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token comment">// main.js</span>

  <span class="token doc-comment comment">/**\\*\\***/</span> <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// webpackBootstrap</span>
  <span class="token keyword">var</span> <span class="token operator">**</span>webpack_exports<span class="token operator">**</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">_ 增加多行注释，用于测试 _</span><span class="token regex-delimiter">/</span></span>
  <span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> y <span class="token operator">=</span> x<span class="token punctuation">;</span> <span class="token comment">// 行内单行测试</span>
  <span class="token comment">// 单行注释测试</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**\\*\\***/</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用 loader 时的输出文件，很明显源代码中的注释都被删除了，loader 生效。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token comment">// main.js</span>

  <span class="token doc-comment comment">/**\\*\\***/</span> <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// webpackBootstrap</span>
  <span class="token keyword">var</span> <span class="token operator">**</span>webpack_exports<span class="token operator">**</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> y <span class="token operator">=</span> x<span class="token punctuation">;</span>

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**\\*\\***/</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上就是编写一个 loader 的基本过程，还有几点补充说明下：</p><ul><li>options 参数校验：可以使用三方库 schema-utils 对 options 设置的参数进行校验。</li><li>同步和异步：loader 分为同步 loader 和异步 loader，上文写的是同步 loader。而有些场景下可能需要使用异步 loader。如下所示：</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">source</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 生成一个异步回调函数。</span>
  <span class="token keyword">const</span> callback <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">async</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 回调函数的第一个参数是错误信息，第二个参数为输出结果，第三个参数是 source-map</span>
    <span class="token function">callback</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> source<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在开发一个 loader 时，要尽量使它的职责单一。即一个 loader 只做一个任务。这样可以使 loader 更容易维护并且可以在更多的场景下复用。</li></ul><h2 id="如何开发一个插件" tabindex="-1"><a class="header-anchor" href="#如何开发一个插件" aria-hidden="true">#</a> 如何开发一个插件</h2>`,114),r={href:"https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fwebpack%2Ftapable",title:"https://github.com/webpack/tapable",target:"_blank",rel:"noopener noreferrer"},k=a(`<h3 id="tapable-简介" tabindex="-1"><a class="header-anchor" href="#tapable-简介" aria-hidden="true">#</a> Tapable 简介</h3><p>Tapable 用法个人理解类似发布订阅模式，不同插件可以订阅同一个事件，当 Webpack 执行到该事件时，分发给各个注册的插件。Tapable 提供的钩子类型很多，总体可以分为同步和异步，它们的注册方式不同。同步钩子通过 tap 注册，异步钩子通过 tapAsync 或 tapPromise，两者的区别在于前者使用回调函数，后者使用 Promise。 Tapable 本身还细分很多类型，比如 Bail 类型的钩子，可以终止此类注册事件的调用（某个 Bail 钩子注册的事件中有 return，就不再执行其他注册事件），具体的这里不再展开。下面通过读取文件的例子具体看一下 Tapable 钩子的用法</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> SyncHook<span class="token punctuation">,</span> AsyncSeriesHook <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;tapable&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 钩子存放容器</span>
<span class="token keyword">const</span> hooks <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">beforeRead</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">SyncHook</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;param&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 同步钩子，数组代表注册时，回调函数的参数。</span>
  <span class="token literal-property property">afterRead</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">AsyncSeriesHook</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;param&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 异步顺序执行钩子</span>
<span class="token punctuation">}</span>
<span class="token comment">// 订阅beforeRead</span>
hooks<span class="token punctuation">.</span>beforeRead<span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token parameter">param</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>param<span class="token punctuation">,</span> <span class="token string">&#39;beforeRead执行触发回调&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 订阅afterRead</span>
hooks<span class="token punctuation">.</span>afterRead<span class="token punctuation">.</span><span class="token function">tapAsync</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">param<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>param<span class="token punctuation">,</span> <span class="token string">&#39;afterRead执行触发回调&#39;</span><span class="token punctuation">)</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 回调执行完毕</span>
    <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 读取文件前调用beforeRead，注册事件按照注册顺序同步执行</span>
hooks<span class="token punctuation">.</span><span class="token function">beforeRead</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">&#39;开始读取&#39;</span><span class="token punctuation">)</span>
fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">&#39;package.json&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 读取文件后执行afterRead钩子</span>
  hooks<span class="token punctuation">.</span>afterRead<span class="token punctuation">.</span><span class="token function">callAsync</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 所有注册事件执行完后调用，类似Promise.all</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;afterRead end~&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在读取文件的两个阶段，执行相应钩子，执行时广播通知到所有注册事件。执行完后再继续下面的步骤。</p><h3 id="自定义插件编写" tabindex="-1"><a class="header-anchor" href="#自定义插件编写" aria-hidden="true">#</a> 自定义插件编写</h3><p>插件本质上是一个构造函数，它的原型上必须有一个 apply 方法。在 Webpack 初始化 compiler 对象之后会调用插件实例的 apply 方法，传入 compiler 对象。然后插件就可以在 compiler 上注册想要注册的钩子，Webpack 会在执行到对应阶段时触发注册事件。下面用两个简单的插件实例演示这个过程。</p><h4 id="插件一-删除输出文件夹内的文件" tabindex="-1"><a class="header-anchor" href="#插件一-删除输出文件夹内的文件" aria-hidden="true">#</a> 插件一：删除输出文件夹内的文件</h4><p>模仿 CleanWebpackPlugin 插件，但是不删除文件夹，因为 Node 只能删除空文件夹，需要使用递归才能完整实现 CleanWebpackPlugin 的功能，这里重点演示插件编写流程，所以就简化为只删除文件。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// RmFilePlugin.js</span>

<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">RmFilePlugin</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 插件的options</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>options <span class="token operator">=</span> options
  <span class="token punctuation">}</span>
  <span class="token comment">// Webpack会自动调用插件的apply方法，并给这个方法传入compiler参数</span>
  <span class="token function">apply</span><span class="token punctuation">(</span><span class="token parameter">compiler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 拿到webpack的所有配置</span>
    <span class="token keyword">const</span> webpackOptions <span class="token operator">=</span> compiler<span class="token punctuation">.</span>options
    <span class="token comment">// context为Webpack的执行环境（执行文件夹路径）</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> context <span class="token punctuation">}</span> <span class="token operator">=</span> webpackOptions
    <span class="token comment">// 在compiler对象的beforeRun钩子上注册事件</span>
    compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>beforeRun<span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token string">&#39;RmFilePlugin&#39;</span><span class="token punctuation">,</span> <span class="token parameter">compiler</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// 获取打包输出路径</span>
      <span class="token keyword">const</span> outputPath <span class="token operator">=</span>
        webpackOptions<span class="token punctuation">.</span>output<span class="token punctuation">.</span>path <span class="token operator">||</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> fileList <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readdirSync</span><span class="token punctuation">(</span>outputPath<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">withFileTypes</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
      fileList<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// 只删除文件，不对文件夹做递归删除，简化逻辑</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span><span class="token function">isFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> delPath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>outputPath<span class="token punctuation">,</span> item<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
          fs<span class="token punctuation">.</span><span class="token function">unlinkSync</span><span class="token punctuation">(</span>delPath<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 导出 Plugin</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> RmFilePlugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个例子很简单，只用到了 compiler 对象，在实际开发插件的过程中，大多数情况下还需要使用 compilation 对象，那么它和 compiler 有什么不同？</p><ul><li>个人理解，compiler 代表了 Webpack 从启动到关闭的整个完整生命周期，它上面的钩子是基于 Webpack 运行自身的，比如打包环境是否准备好，是否开始编译了等。而 compilation 专注于编译阶段，它的钩子存在于编译的各个细节中，如模块被加载(load)、优化(optimize)、 分块(chunk)等。</li></ul><p>下面这个例子就用到了 compilation 对象</p><h4 id="插件二-删除-js-注释" tabindex="-1"><a class="header-anchor" href="#插件二-删除-js-注释" aria-hidden="true">#</a> 插件二：删除 js 注释</h4><p>这个插件的功能在上文 loader 中实现过，在 plugin 里又实现一遍，是想说明 loader 能做到的事 plugin 都能做到，并且 plugin 可以做的更彻底。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// DelCommentPlugin.js</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> sources <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">DelCommentPlugin</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>options <span class="token operator">=</span> options
  <span class="token punctuation">}</span>

  <span class="token function">apply</span><span class="token punctuation">(</span><span class="token parameter">compiler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// compilation 创建之后执行注册事件</span>
    compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>compilation<span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token string">&#39;DelCommentPlugin&#39;</span><span class="token punctuation">,</span> <span class="token parameter">compilation</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// 处理asset</span>
      compilation<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>processAssets<span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;DelCommentPlugin&#39;</span><span class="token punctuation">,</span> <span class="token comment">//插件名称</span>
          <span class="token comment">//要对asset做哪种类型的处理，这里的填值代表的是对asset 进行了基础预处理</span>
          <span class="token literal-property property">stage</span><span class="token operator">:</span> compiler<span class="token punctuation">.</span>webpack<span class="token punctuation">.</span>Compilation<span class="token punctuation">.</span><span class="token constant">PROCESS_ASSETS_STAGE_PRE_PROCESS</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token parameter">assets</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> name <span class="token keyword">in</span> assets<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 只对js资产做处理</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>name<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">&#39;.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token keyword">if</span> <span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>assets<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">const</span> asset <span class="token operator">=</span> compilation<span class="token punctuation">.</span><span class="token function">getAsset</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token comment">// 通过asset名称获取到asset</span>
                <span class="token keyword">const</span> contents <span class="token operator">=</span> asset<span class="token punctuation">.</span>source<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 获取到asset的内容</span>
                <span class="token keyword">const</span> result <span class="token operator">=</span> contents
                  <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\/\\/.*</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
                  <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\/\\*.*?\\*\\/</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token comment">//删除注释</span>
                <span class="token comment">// 更新asset的内容</span>
                compilation<span class="token punctuation">.</span><span class="token function">updateAsset</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">sources<span class="token punctuation">.</span>RawSource</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">)</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> DelCommentPlugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>跟 loader 一样，对比一下使用了这个插件后的输出。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// main.js</span>

<span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> __webpack_exports__ <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token number">100</span>
  <span class="token keyword">let</span> y <span class="token operator">=</span> x

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>很明显，删除注释没有问题，并且可以看到，它把 main.js 文件内的注释都删除了，而 loader 只能删除源代码中的注释。plugin 却可以直接改变最终输出的 bundle 内容。</p><h2 id="手写一个简易-webpack" tabindex="-1"><a class="header-anchor" href="#手写一个简易-webpack" aria-hidden="true">#</a> 手写一个简易 Webpack</h2><p>Webpack 是一个 Node 应用，所以本质上它就是在 Node 环境上跑了一段（一大大大段）js 代码，看上去就像这样。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// built.js</span>

<span class="token keyword">const</span> myWebpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../lib/myWebpack&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 引入自定义配置</span>
<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../config/webpack.config.js&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> compiler <span class="token operator">=</span> <span class="token function">myWebpack</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span>
<span class="token comment">// 开始webpack打包</span>
compiler<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>向 myWebpack 函数里传入配置 config，然后构造一个 compiler 对象，执行它的 run 方法。run 方法重点做两个事情，一是根据入口文件找出并记录所有依赖，二是用字符串组装最后输出的 boundle 函数，这个函数的主要功能就是根据依赖关系实现 require 和 export 功能。下面就按照这两步分析下代码：</p><h3 id="根据入口文件分析出依赖关系表" tabindex="-1"><a class="header-anchor" href="#根据入口文件分析出依赖关系表" aria-hidden="true">#</a> 根据入口文件分析出依赖关系表</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// myWebpack.js</span>

<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> babelParser <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@babel/parser&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> traverse <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@babel/traverse&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>default
<span class="token keyword">const</span> <span class="token punctuation">{</span> transformFromAstSync <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@babel/core&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// Compiler构造函数</span>
<span class="token keyword">class</span> <span class="token class-name">Compiler</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>options <span class="token operator">=</span> options <span class="token comment">// 获得webpack配置</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>entry <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span>entry <span class="token operator">||</span> <span class="token string">&#39;./src/index.js&#39;</span> <span class="token comment">// 获取入口文件，不存在则使用默认值</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>entryDir <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">dirname</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>entry<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>depsGraph <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">//依赖关系表，第一步的产出</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 启动webpack打包</span>
  <span class="token keyword">async</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> entry<span class="token punctuation">,</span> entryDir <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span>
    <span class="token comment">// 从入口文件开始获取模块信息</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getModuleInfo</span><span class="token punctuation">(</span>entry<span class="token punctuation">,</span> entryDir<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>depsGraph<span class="token punctuation">)</span>
    <span class="token comment">// 获取到模块信息后生成构建内容，第二步的内容，先注释。</span>
    <span class="token comment">// this.outputBuild()</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 根据文件路径获取模块信息</span>
  <span class="token function">getModuleInfo</span><span class="token punctuation">(</span><span class="token parameter">modulePath<span class="token punctuation">,</span> dirname</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> depsGraph <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span>
    <span class="token comment">/*
        利用fs模块和文件路径可以读取到文件内容，然后根据文件内容（import和export）又可以分析出模块之间的依赖关系。
        自己去做这步是没有任何问题的。只是这里为了方便，就利用babelParser库生成一个抽象的模型ast(抽象语法树)。
        ast将我们的代码抽象出来，方便我们操作。
        */</span>
    <span class="token keyword">const</span> ast <span class="token operator">=</span> <span class="token function">getAst</span><span class="token punctuation">(</span>modulePath<span class="token punctuation">)</span>
    <span class="token comment">// 利用ast和traverse库获得该模块的依赖。原理就是分析了代码中的&quot;import&quot;语句。</span>
    <span class="token keyword">const</span> deps <span class="token operator">=</span> <span class="token function">getDeps</span><span class="token punctuation">(</span>ast<span class="token punctuation">,</span> dirname<span class="token punctuation">)</span>
    <span class="token comment">// 利用ast和babel/core将源代通过babel编码输出。如果不用ast也可以直接使用babel/core的transform方法将源代码转码</span>
    <span class="token keyword">const</span> code <span class="token operator">=</span> <span class="token function">getParseCode</span><span class="token punctuation">(</span>ast<span class="token punctuation">)</span>
    <span class="token comment">// depsGraph保存的模块信息就是code源代码和它的依赖关系</span>
    depsGraph<span class="token punctuation">[</span>modulePath<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
      deps<span class="token punctuation">,</span>
      code
    <span class="token punctuation">}</span>
    <span class="token comment">// 如果该模块存在依赖deps，就通过递归继续找出它下面的依赖，这样循环就找出了入口文件开始的所有依赖。</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>deps<span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> deps<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>deps<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// 递归获取模块信息</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getModuleInfo</span><span class="token punctuation">(</span>deps<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">,</span> dirname<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// getModuleInfo中用到的三个工具函数</span>
<span class="token comment">// 根据文件路径获取抽象语法树</span>
<span class="token keyword">const</span> <span class="token function-variable function">getAst</span> <span class="token operator">=</span> <span class="token parameter">modulePath</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> file <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>modulePath<span class="token punctuation">,</span> <span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
  <span class="token comment">// 2. 将其解析成ast抽象语法树</span>
  <span class="token keyword">const</span> ast <span class="token operator">=</span> babelParser<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>file<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">sourceType</span><span class="token operator">:</span> <span class="token string">&#39;module&#39;</span> <span class="token comment">// 要解析的是 es6 module（默认为commonJs）</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> ast
<span class="token punctuation">}</span>
<span class="token comment">// 根据抽象语法树ast获取依赖关系</span>
<span class="token keyword">const</span> <span class="token function-variable function">getDeps</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">ast<span class="token punctuation">,</span> dirname</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 该模块依赖合集</span>
  <span class="token keyword">const</span> dependSet <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token comment">// 利用traverse这个库收集依赖，自己收集也可以，不管是抽象语法树还是源代码中都是可以拿到依赖关系的。现成的库比较方便</span>
  <span class="token function">traverse</span><span class="token punctuation">(</span>ast<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token comment">// 内部遍历ast中的program.body,判断里面语句类型</span>
    <span class="token comment">// 如果type为ImportDeclaration 就会触发当前函数</span>
    <span class="token function">ImportDeclaration</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> node <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> relativePath <span class="token operator">=</span> node<span class="token punctuation">.</span>source<span class="token punctuation">.</span>value <span class="token comment">//import文件的相对路径</span>
      <span class="token keyword">const</span> absolutePath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>dirname<span class="token punctuation">,</span> relativePath<span class="token punctuation">)</span>
      dependSet<span class="token punctuation">[</span>relativePath<span class="token punctuation">]</span> <span class="token operator">=</span> absolutePath <span class="token comment">// 依赖中记录文件的绝对路径</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> dependSet
<span class="token punctuation">}</span>
<span class="token comment">// 根据抽象语法树，获取最终输出代码</span>
<span class="token keyword">const</span> <span class="token function-variable function">getParseCode</span> <span class="token operator">=</span> <span class="token parameter">ast</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 编译代码，将现代浏览器不能识别的语法进行编译处理</span>
  <span class="token comment">// @babel/core可以直接将ast抽象语法树编译成兼容代码</span>
  <span class="token comment">/* 编译完成，可输出 */</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> code <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">transformFromAstSync</span><span class="token punctuation">(</span>ast<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;@babel/preset-env&#39;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> code
<span class="token punctuation">}</span>

<span class="token comment">// 该模块要输出的myWebpack函数</span>
<span class="token keyword">const</span> <span class="token function-variable function">myWebpack</span> <span class="token operator">=</span> <span class="token parameter">config</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Compiler</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> myWebpack
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果现在运行一下上面的 built.js，就会打印出依赖关系表，它大概长这样。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>depsGraph <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&#39;./src/index.js&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">deps</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;./add.js&#39;</span><span class="token operator">:</span>
        <span class="token string">&#39;E:\\\\study\\\\JavaScript\\\\webpack\\\\bWebpack\\\\principle\\\\myWebpack2\\\\src\\\\add.js&#39;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&#39;./sub.js&#39;</span><span class="token operator">:</span>
        <span class="token string">&#39;E:\\\\study\\\\JavaScript\\\\webpack\\\\bWebpack\\\\principle\\\\myWebpack2\\\\src\\\\sub.js&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">code</span><span class="token operator">:</span>
      <span class="token string">&#39;&quot;use strict&quot;;\\n&#39;</span> <span class="token operator">+</span>
      <span class="token string">&#39;\\n&#39;</span> <span class="token operator">+</span>
      <span class="token string">&#39;var _add = _interopRequireDefault(require(&quot;./add.js&quot;));\\n&#39;</span> <span class="token operator">+</span>
      <span class="token string">&#39;\\n&#39;</span> <span class="token operator">+</span>
      <span class="token string">&#39;var _sub = _interopRequireDefault(require(&quot;./sub.js&quot;));\\n&#39;</span> <span class="token operator">+</span>
      <span class="token string">&#39;\\n&#39;</span> <span class="token operator">+</span>
      <span class="token string">&#39;function _interopRequireDefault(obj) { return obj &amp;&amp; obj.__esModule ? obj : { default: obj }; }\\n&#39;</span> <span class="token operator">+</span>
      <span class="token string">&#39;\\n&#39;</span> <span class="token operator">+</span>
      <span class="token string">&#39;console.log((0, _add.default)(1, 2));\\n&#39;</span> <span class="token operator">+</span>
      <span class="token string">&#39;console.log((0, _sub.default)(3, 1));&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;E:\\\\study\\\\JavaScript\\\\webpack\\\\bWebpack\\\\principle\\\\myWebpack2\\\\src\\\\add.js&#39;</span><span class="token operator">:</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">deps</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">code</span><span class="token operator">:</span>
        <span class="token string">&#39;&quot;use strict&quot;;\\n&#39;</span> <span class="token operator">+</span>
        <span class="token string">&#39;\\n&#39;</span> <span class="token operator">+</span>
        <span class="token string">&#39;Object.defineProperty(exports, &quot;__esModule&quot;, {\\n&#39;</span> <span class="token operator">+</span>
        <span class="token string">&#39;  value: true\\n&#39;</span> <span class="token operator">+</span>
        <span class="token string">&#39;});\\n&#39;</span> <span class="token operator">+</span>
        <span class="token string">&#39;exports.default = _default;\\n&#39;</span> <span class="token operator">+</span>
        <span class="token string">&#39;\\n&#39;</span> <span class="token operator">+</span>
        <span class="token string">&#39;function _default(x, y) {\\n&#39;</span> <span class="token operator">+</span>
        <span class="token string">&#39;  return x + y;\\n&#39;</span> <span class="token operator">+</span>
        <span class="token string">&#39;}&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;E:\\\\study\\\\JavaScript\\\\webpack\\\\bWebpack\\\\principle\\\\myWebpack2\\\\src\\\\sub.js&#39;</span><span class="token operator">:</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">deps</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">code</span><span class="token operator">:</span>
        <span class="token string">&#39;&quot;use strict&quot;;\\n&#39;</span> <span class="token operator">+</span>
        <span class="token string">&#39;\\n&#39;</span> <span class="token operator">+</span>
        <span class="token string">&#39;Object.defineProperty(exports, &quot;__esModule&quot;, {\\n&#39;</span> <span class="token operator">+</span>
        <span class="token string">&#39;  value: true\\n&#39;</span> <span class="token operator">+</span>
        <span class="token string">&#39;});\\n&#39;</span> <span class="token operator">+</span>
        <span class="token string">&#39;exports.default = _default;\\n&#39;</span> <span class="token operator">+</span>
        <span class="token string">&#39;\\n&#39;</span> <span class="token operator">+</span>
        <span class="token string">&#39;function _default(x, y) {\\n&#39;</span> <span class="token operator">+</span>
        <span class="token string">&#39;  return x - y;\\n&#39;</span> <span class="token operator">+</span>
        <span class="token string">&#39;}&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二步要做的事，就是根据依赖关闭表，输出最后的 bundle 文件。</p><h3 id="组装输出函数" tabindex="-1"><a class="header-anchor" href="#组装输出函数" aria-hidden="true">#</a> 组装输出函数</h3><p>如果直接用字符串组装输出函数，可能会有点不好理解。所以先在一个 js 中实现想要输出的函数。这个函数以依赖关系表为参数，内部实现 require 和 export 函数，因为 babel 转码输出后的代码中使用的就是 CommonJs 规则。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">depsGraph</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 为了加载入口文件</span>
  <span class="token keyword">function</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token parameter">module</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 定义模块内部的require函数</span>
    <span class="token keyword">function</span> <span class="token function">localRequire</span><span class="token punctuation">(</span><span class="token parameter">relativePath</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 为了找到要引入模块的绝对路径，通过require加载</span>
      <span class="token keyword">return</span> <span class="token function">require</span><span class="token punctuation">(</span>depsGraph<span class="token punctuation">[</span>module<span class="token punctuation">]</span><span class="token punctuation">.</span>deps<span class="token punctuation">[</span>relativePath<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 定义暴露对象</span>
    <span class="token keyword">var</span> exports <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token comment">/*
        模块内部要自定义localRequire，而不是直接用require函数，原因是使用babell转化后的code，require传参时使用的是
        相对路径，而我们内部依赖表中，是根据绝对路径找到code，所以要实现一层转化
        */</span>
    <span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">require<span class="token punctuation">,</span> exports<span class="token punctuation">,</span> code</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// code是字符串，用eval执行</span>
      <span class="token function">eval</span><span class="token punctuation">(</span>code<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>localRequire<span class="token punctuation">,</span> exports<span class="token punctuation">,</span> depsGraph<span class="token punctuation">[</span>module<span class="token punctuation">]</span><span class="token punctuation">.</span>code<span class="token punctuation">)</span>

    <span class="token comment">// 作为require函数的返回值返回出去</span>
    <span class="token comment">// 后面的require函数能得到暴露的内容</span>
    <span class="token keyword">return</span> exports
  <span class="token punctuation">}</span>
  <span class="token comment">// 加载入口文件</span>
  <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>depsGraph<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个就是最后要输出的 bundle，如果把第一步中获取到的依赖关系表拿过来，直接执行这个函数，就可以和执行源代码取得同样的效果。最后要做的就是在 myWebpack.js 中用字符串拼装出这个函数。下面是 myWebpack.js 中的完整代码。</p><h3 id="mywebpack-完整源代码" tabindex="-1"><a class="header-anchor" href="#mywebpack-完整源代码" aria-hidden="true">#</a> myWebpack 完整源代码</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> babelParser <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@babel/parser&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> traverse <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@babel/traverse&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>default
<span class="token keyword">const</span> <span class="token punctuation">{</span> transformFromAstSync <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@babel/core&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">myWebpack</span> <span class="token operator">=</span> <span class="token parameter">config</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Compiler</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// Compiler构造函数</span>
<span class="token keyword">class</span> <span class="token class-name">Compiler</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>options <span class="token operator">=</span> options <span class="token comment">// 获得webpack配置</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>entry <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span>entry <span class="token operator">||</span> <span class="token string">&#39;./src/index.js&#39;</span> <span class="token comment">// 获取入口文件，不存在则使用默认值</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>entryDir <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">dirname</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>entry<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>depsGraph <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">//依赖关系表，第一步的产出</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 启动webpack打包</span>
  <span class="token keyword">async</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> entry<span class="token punctuation">,</span> entryDir <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span>
    <span class="token comment">// 从入口文件开始获取模块信息</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getModuleInfo</span><span class="token punctuation">(</span>entry<span class="token punctuation">,</span> entryDir<span class="token punctuation">)</span>
    <span class="token comment">// 获取到模块信息后生成构建内容</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">outputBuild</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 根据文件路径获取模块信息</span>
  <span class="token function">getModuleInfo</span><span class="token punctuation">(</span><span class="token parameter">modulePath<span class="token punctuation">,</span> dirname</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> depsGraph <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span>
    <span class="token keyword">const</span> ast <span class="token operator">=</span> <span class="token function">getAst</span><span class="token punctuation">(</span>modulePath<span class="token punctuation">)</span>
    <span class="token keyword">const</span> deps <span class="token operator">=</span> <span class="token function">getDeps</span><span class="token punctuation">(</span>ast<span class="token punctuation">,</span> dirname<span class="token punctuation">)</span>
    <span class="token keyword">const</span> code <span class="token operator">=</span> <span class="token function">getParseCode</span><span class="token punctuation">(</span>ast<span class="token punctuation">)</span>
    <span class="token comment">// depsGraph保存的模块信息就是code源代码和它的依赖关系</span>
    depsGraph<span class="token punctuation">[</span>modulePath<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
      deps<span class="token punctuation">,</span>
      code
    <span class="token punctuation">}</span>
    <span class="token comment">// 如果该模块存在依赖deps，就通过递归继续找出它下面的依赖，这样循环就找出了入口文件开始的所有依赖。</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>deps<span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> deps<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>deps<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// 递归获取模块信息</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getModuleInfo</span><span class="token punctuation">(</span>deps<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">,</span> dirname<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 最后一步，利用fs输出js文件</span>
  <span class="token function">outputBuild</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> build <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">(function (depsGraph) {
        function require(module) {
            function localRequire(relativePath) {
            // 为了找到要引入模块的绝对路径，通过require加载
            return require(depsGraph[module].deps[relativePath])
            };
            // 定义暴露对象
            var exports = {};
            (function (require, exports, code) {
            // code是字符串，要eval执行
            eval(code)
            })(localRequire, exports, depsGraph[module].code);

            return exports;
        }
        require(&quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span>entry<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;)
        })((</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>depsGraph<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">))</span><span class="token template-punctuation string">\`</span></span>
    <span class="token keyword">let</span> outputPath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span>output<span class="token punctuation">.</span>path<span class="token punctuation">,</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span>output<span class="token punctuation">.</span>filename
    <span class="token punctuation">)</span>
    fs<span class="token punctuation">.</span><span class="token function">writeFileSync</span><span class="token punctuation">(</span>outputPath<span class="token punctuation">,</span> build<span class="token punctuation">,</span> <span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 根据文件路径获取抽象语法树</span>
<span class="token keyword">const</span> <span class="token function-variable function">getAst</span> <span class="token operator">=</span> <span class="token parameter">modulePath</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 1.读取入口文件内容</span>
  <span class="token comment">/* 第二个参数如果不写，默认返回Buffer数据，如果写了utf-8解码，则返回字符串数据 */</span>
  <span class="token comment">//  注意：从这个入口文件读取可以看出来，node针对的所有相对路径，都是根据运行环境来的，在这里就是package.json目录，</span>
  <span class="token comment">// 即myWebpack目录</span>
  <span class="token keyword">const</span> module <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>modulePath<span class="token punctuation">,</span> <span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
  <span class="token comment">// 2. 将其解析成ast抽象语法树</span>
  <span class="token keyword">const</span> ast <span class="token operator">=</span> babelParser<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>module<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">sourceType</span><span class="token operator">:</span> <span class="token string">&#39;module&#39;</span> <span class="token comment">// 要解析的是 es6 module（默认为commonJs）</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> ast
<span class="token punctuation">}</span>
<span class="token comment">// 根据抽象语法树ast获取依赖关系</span>
<span class="token keyword">const</span> <span class="token function-variable function">getDeps</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">ast<span class="token punctuation">,</span> dirname</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 依赖合集</span>
  <span class="token keyword">const</span> dependSet <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token comment">// 利用traverse这个库收集依赖，自己收集其实也可以，不管是抽象语法树还是import源代码中都是可以拿到依赖关系的。现成的库比较方便</span>
  <span class="token function">traverse</span><span class="token punctuation">(</span>ast<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token comment">// 内部遍历ast中的program.body,判断里面语句类型</span>
    <span class="token comment">// 如果type：ImportDeclaration 就会触发当前函数</span>
    <span class="token function">ImportDeclaration</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> node <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 模块相对路径&quot;./add.js&quot;</span>
      <span class="token keyword">const</span> relativePath <span class="token operator">=</span> node<span class="token punctuation">.</span>source<span class="token punctuation">.</span>value
      <span class="token keyword">const</span> absolutePath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>dirname<span class="token punctuation">,</span> relativePath<span class="token punctuation">)</span>
      dependSet<span class="token punctuation">[</span>relativePath<span class="token punctuation">]</span> <span class="token operator">=</span> absolutePath
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> dependSet
<span class="token punctuation">}</span>
<span class="token comment">// 根据抽象语法树，获取最终输出代码</span>
<span class="token keyword">const</span> <span class="token function-variable function">getParseCode</span> <span class="token operator">=</span> <span class="token parameter">ast</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 编译代码，将现代浏览器不能识别的语法进行编译处理</span>
  <span class="token comment">// @babel/core可以直接将ast抽象语法树编译成兼容代码</span>
  <span class="token comment">/* 编译完成，可输出 */</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> code <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">transformFromAstSync</span><span class="token punctuation">(</span>ast<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;@babel/preset-env&#39;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> code
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> myWebpack
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,33);function d(v,m){const e=t("ExternalLinkIcon");return o(),c("div",null,[u,s("p",null,[n("Webpack 的打包过程就像一个产品的流水线，按部就班地执行一个又一个环节。而插件就是在这条流水线各个阶段插入的额外功能，Webpack 以此来扩展自身的功能。 在实例介绍之前，需要先简单了解下插件是如何在 Webpack 打包的不同阶段准确插入其中的。它使用的是 "),s("a",r,[n("Tapable"),l(e)]),n(" 工具类，compiler 和 compilation 类都扩展自 Tapable 类。")]),k])}const y=p(i,[["render",d],["__file","Webpack5.0学习总结.html.vue"]]);export{y as default};
