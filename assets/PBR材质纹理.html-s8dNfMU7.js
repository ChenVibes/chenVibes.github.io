import{_ as e,r as t,o as p,c as o,b as n,d as s,a as c,e as l}from"./app-9gJpSWLU.js";const i={},u=n("h2",{id:"pbr-物理渲染",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#pbr-物理渲染","aria-hidden":"true"},"#"),s(" PBR 物理渲染")],-1),r=n("h3",{id:"什么是-pbr",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#什么是-pbr","aria-hidden":"true"},"#"),s(" 什么是 PBR？")],-1),k={class:"hint-container tip"},d=n("p",{class:"hint-container-title"},"参考",-1),m={href:"https://zhuanlan.zhihu.com/p/342484575",target:"_blank",rel:"noopener noreferrer"},v=l(`<p>基于物理渲染</p><p>以前的渲染在模仿灯光的外观</p><p>现在是在模仿光的实际行为</p><p>使图形看起来跟真实</p><h3 id="标准网格材质与光照物理效果" tabindex="-1"><a class="header-anchor" href="#标准网格材质与光照物理效果" aria-hidden="true">#</a> 标准网格材质与光照物理效果</h3><p>环境光<code>AmbientLight</code>环境光会均匀的照亮场景中的所有物体。环境光不能用来投射阴影，因为它没有方向</p><p>平行光<code>DirectionalLight</code> ,必须设置<code>positon</code>它的方向是从一个平行光的位置<code> position</code>到 <code>target</code>(默认(0,0,0))的位置</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> <span class="token constant">THREE</span> <span class="token keyword">from</span> <span class="token string">&#39;three&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> OrbitControls <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;three/examples/jsm/controls/OrbitControls&#39;</span>
<span class="token comment">//  创建场景</span>
<span class="token keyword">const</span> scene <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Scene</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 创建相机</span>
<span class="token keyword">const</span> camera <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>PerspectiveCamera</span><span class="token punctuation">(</span>
  <span class="token number">45</span><span class="token punctuation">,</span>
  window<span class="token punctuation">.</span>innerWidth <span class="token operator">/</span> window<span class="token punctuation">.</span>innerHeight<span class="token punctuation">,</span>
  <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token number">1000</span>
<span class="token punctuation">)</span>
<span class="token comment">// 设置相机位置</span>
camera<span class="token punctuation">.</span>position<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token comment">// 将相机添加到场景中</span>
scene<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>camera<span class="token punctuation">)</span>
<span class="token comment">// 加载纹理</span>
<span class="token keyword">const</span> doorTexture <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>TextureLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span>
  <span class="token string">&#39;/src/assets/textures/door/color.jpg&#39;</span>
<span class="token punctuation">)</span>
<span class="token comment">// 透明贴图</span>
<span class="token keyword">const</span> alphaTexture <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>TextureLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span>
  <span class="token string">&#39;/src/assets/textures/door/alpha.jpg&#39;</span>
<span class="token punctuation">)</span>
<span class="token comment">// 环境遮挡纹理贴图</span>
<span class="token keyword">const</span> aoTexture <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>TextureLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span>
  <span class="token string">&#39;./src/assets/textures/door/ambientOcclusion.jpg&#39;</span>
<span class="token punctuation">)</span>
<span class="token comment">// 创建平面几何体</span>
<span class="token keyword">const</span> PlaneGeometry <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>PlaneGeometry</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// aoMap必须设置第二组uv</span>
PlaneGeometry<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span>
  <span class="token string">&#39;uv2&#39;</span><span class="token punctuation">,</span>
  <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>BufferAttribute</span><span class="token punctuation">(</span>PlaneGeometry<span class="token punctuation">.</span>attributes<span class="token punctuation">.</span>uv<span class="token punctuation">.</span>array<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
<span class="token comment">// 创建材质</span>
<span class="token keyword">const</span> material <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>MeshStandardMaterial</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">map</span><span class="token operator">:</span> doorTexture<span class="token punctuation">,</span>
  <span class="token literal-property property">alphaMap</span><span class="token operator">:</span> alphaTexture<span class="token punctuation">,</span>
  <span class="token comment">// 必须添加 选择一个alpha通道</span>
  <span class="token literal-property property">transparent</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">side</span><span class="token operator">:</span> <span class="token constant">THREE</span><span class="token punctuation">.</span>DoubleSide<span class="token punctuation">,</span>
  <span class="token literal-property property">aoMap</span><span class="token operator">:</span> aoTexture<span class="token punctuation">,</span>
  <span class="token literal-property property">aoMapIntensity</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 创建物体</span>
<span class="token keyword">const</span> plane <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Mesh</span><span class="token punctuation">(</span>PlaneGeometry<span class="token punctuation">,</span> material<span class="token punctuation">)</span>
<span class="token comment">// 将平面添加到场景</span>
scene<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>plane<span class="token punctuation">)</span>
<span class="token comment">// 初始化渲染器</span>
<span class="token keyword">const</span> renderer2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>WebGLRenderer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 设置渲染的尺寸大小</span>
renderer2<span class="token punctuation">.</span><span class="token function">setSize</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>innerWidth<span class="token punctuation">,</span> window<span class="token punctuation">.</span>innerHeight<span class="token punctuation">)</span>
<span class="token comment">// 将webgl渲染的canvas内容添加到body</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>renderer2<span class="token punctuation">.</span>domElement<span class="token punctuation">)</span>
<span class="token comment">// 创建轨道控制器</span>
<span class="token keyword">const</span> controls <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OrbitControls</span><span class="token punctuation">(</span>camera<span class="token punctuation">,</span> renderer2<span class="token punctuation">.</span>domElement<span class="token punctuation">)</span>
<span class="token comment">// 阻尼效果</span>
controls<span class="token punctuation">.</span>enableDamping <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token comment">// 环境光</span>
<span class="token keyword">const</span> light <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>AmbientLight</span><span class="token punctuation">(</span><span class="token number">0x404040</span><span class="token punctuation">)</span> <span class="token comment">// soft white light</span>
scene<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>light<span class="token punctuation">)</span>
<span class="token comment">// 平行光</span>
<span class="token keyword">const</span> directionalLight <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>DirectionalLight</span><span class="token punctuation">(</span><span class="token number">0xffffff</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">)</span>
scene<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>directionalLight<span class="token punctuation">)</span>
directionalLight<span class="token punctuation">.</span>position<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
<span class="token comment">// 渲染函数</span>
<span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  renderer2<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>scene<span class="token punctuation">,</span> camera<span class="token punctuation">)</span>
  <span class="token comment">//   渲染下一帧的时候就会调用render函数</span>
  <span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>render<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="置换贴图与顶点细分设置" tabindex="-1"><a class="header-anchor" href="#置换贴图与顶点细分设置" aria-hidden="true">#</a> 置换贴图与顶点细分设置</h2>`,9);function b(h,w){const a=t("ExternalLinkIcon");return p(),o("div",null,[u,r,n("div",k,[d,n("p",null,[n("a",m,[s("什么是 PBR？"),c(a)])])]),v])}const f=e(i,[["render",b],["__file","PBR材质纹理.html.vue"]]);export{f as default};
