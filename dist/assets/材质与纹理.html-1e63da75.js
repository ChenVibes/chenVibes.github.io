const n=JSON.parse(`{"key":"v-3913334e","path":"/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9B%BE%E5%BD%A2/Three.js/%E6%9D%90%E8%B4%A8%E4%B8%8E%E7%BA%B9%E7%90%86.html","title":"材质与纹理","lang":"zh-CN","frontmatter":{"title":"材质与纹理","category":"前端开发 - 前端图形 - Three.js","order":4,"description":"使用纹理 import * as THREE from 'three' import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls' // 创建场景 const scene = new THREE.Scene() // 创建相机 const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 ) // 设置相机位置 camera.position.set(2, 2, 2) // 将相机添加到场景 scene.add(camera) // 加载纹理 const doorTexture = new THREE.TextureLoader().load( '/src/assets/textures/door/color.jpg' ) // 使用纹理进行材质创建 const material = new THREE.MeshBasicMaterial({ map: doorTexture }) // 创建几何体 const geometry = new THREE.BoxBufferGeometry() // 根据几何体和材质创建物体 const cube = new THREE.Mesh(geometry, material) // 将几何体添加到场景中 scene.add(cube) // 初始化渲染器 const renderer = new THREE.WebGLRenderer() // 设置渲染的尺寸大小 renderer.setSize(window.innerWidth, window.innerHeight) // 将webgl渲染的canvas内容添加到body document.body.appendChild(renderer.domElement) // 创建轨道控制器 const controls = new OrbitControls(camera, renderer.domElement) // 阻尼效果 controls.enableDamping = true // 渲染函数 function render() { renderer.render(scene, camera) // 渲染下一帧的时候就会调用render函数 requestAnimationFrame(render) // controls.update() } render()","head":[["meta",{"property":"og:url","content":"http://magicbegin.gitee.io/vuepress-blog/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9B%BE%E5%BD%A2/Three.js/%E6%9D%90%E8%B4%A8%E4%B8%8E%E7%BA%B9%E7%90%86.html"}],["meta",{"property":"og:site_name","content":"Mr Chen's Blog"}],["meta",{"property":"og:title","content":"材质与纹理"}],["meta",{"property":"og:description","content":"使用纹理 import * as THREE from 'three' import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls' // 创建场景 const scene = new THREE.Scene() // 创建相机 const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 ) // 设置相机位置 camera.position.set(2, 2, 2) // 将相机添加到场景 scene.add(camera) // 加载纹理 const doorTexture = new THREE.TextureLoader().load( '/src/assets/textures/door/color.jpg' ) // 使用纹理进行材质创建 const material = new THREE.MeshBasicMaterial({ map: doorTexture }) // 创建几何体 const geometry = new THREE.BoxBufferGeometry() // 根据几何体和材质创建物体 const cube = new THREE.Mesh(geometry, material) // 将几何体添加到场景中 scene.add(cube) // 初始化渲染器 const renderer = new THREE.WebGLRenderer() // 设置渲染的尺寸大小 renderer.setSize(window.innerWidth, window.innerHeight) // 将webgl渲染的canvas内容添加到body document.body.appendChild(renderer.domElement) // 创建轨道控制器 const controls = new OrbitControls(camera, renderer.domElement) // 阻尼效果 controls.enableDamping = true // 渲染函数 function render() { renderer.render(scene, camera) // 渲染下一帧的时候就会调用render函数 requestAnimationFrame(render) // controls.update() } render()"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-27T11:35:00.000Z"}],["meta",{"property":"article:author","content":"Mr Chen"}],["meta",{"property":"article:modified_time","content":"2023-10-27T11:35:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"材质与纹理\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-10-27T11:35:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr Chen\\",\\"url\\":\\"https://gitee.com/magicBegin/vuepress-blog\\",\\"email\\":\\"599422271@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"使用纹理","slug":"使用纹理","link":"#使用纹理","children":[]},{"level":2,"title":"纹理常用属性","slug":"纹理常用属性","link":"#纹理常用属性","children":[{"level":3,"title":"偏移","slug":"偏移","link":"#偏移","children":[]},{"level":3,"title":"旋转","slug":"旋转","link":"#旋转","children":[]},{"level":3,"title":"重复","slug":"重复","link":"#重复","children":[]}]},{"level":2,"title":"纹理显示算法","slug":"纹理显示算法","link":"#纹理显示算法","children":[]},{"level":2,"title":"透明材质与透明纹理","slug":"透明材质与透明纹理","link":"#透明材质与透明纹理","children":[]},{"level":2,"title":"环境遮挡贴图与强度","slug":"环境遮挡贴图与强度","link":"#环境遮挡贴图与强度","children":[]}],"git":{"createdTime":1698406500000,"updatedTime":1698406500000,"contributors":[{"name":"chenzhen","email":"599422271@qq.com","commits":1}]},"readingTime":{"minutes":2.42,"words":725},"filePathRelative":"前端开发/前端图形/Three.js/材质与纹理.md","localizedDate":"2023年10月27日","excerpt":"<h2> 使用纹理</h2>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">import</span> <span class=\\"token operator\\">*</span> <span class=\\"token keyword\\">as</span> <span class=\\"token constant\\">THREE</span> <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">'three'</span>\\n<span class=\\"token keyword\\">import</span> <span class=\\"token punctuation\\">{</span> OrbitControls <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">'three/examples/jsm/controls/OrbitControls'</span>\\n\\n<span class=\\"token comment\\">// 创建场景</span>\\n<span class=\\"token keyword\\">const</span> scene <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">THREE<span class=\\"token punctuation\\">.</span>Scene</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token comment\\">// 创建相机</span>\\n<span class=\\"token keyword\\">const</span> camera <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">THREE<span class=\\"token punctuation\\">.</span>PerspectiveCamera</span><span class=\\"token punctuation\\">(</span>\\n  <span class=\\"token number\\">75</span><span class=\\"token punctuation\\">,</span>\\n  window<span class=\\"token punctuation\\">.</span>innerWidth <span class=\\"token operator\\">/</span> window<span class=\\"token punctuation\\">.</span>innerHeight<span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token number\\">0.1</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token number\\">1000</span>\\n<span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token comment\\">// 设置相机位置</span>\\ncamera<span class=\\"token punctuation\\">.</span>position<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">set</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token comment\\">// 将相机添加到场景</span>\\nscene<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">add</span><span class=\\"token punctuation\\">(</span>camera<span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token comment\\">// 加载纹理</span>\\n<span class=\\"token keyword\\">const</span> doorTexture <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">THREE<span class=\\"token punctuation\\">.</span>TextureLoader</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">load</span><span class=\\"token punctuation\\">(</span>\\n  <span class=\\"token string\\">'/src/assets/textures/door/color.jpg'</span>\\n<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token comment\\">// 使用纹理进行材质创建</span>\\n<span class=\\"token keyword\\">const</span> material <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">THREE<span class=\\"token punctuation\\">.</span>MeshBasicMaterial</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span> <span class=\\"token literal-property property\\">map</span><span class=\\"token operator\\">:</span> doorTexture <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token comment\\">// 创建几何体</span>\\n<span class=\\"token keyword\\">const</span> geometry <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">THREE<span class=\\"token punctuation\\">.</span>BoxBufferGeometry</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token comment\\">// 根据几何体和材质创建物体</span>\\n<span class=\\"token keyword\\">const</span> cube <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">THREE<span class=\\"token punctuation\\">.</span>Mesh</span><span class=\\"token punctuation\\">(</span>geometry<span class=\\"token punctuation\\">,</span> material<span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token comment\\">// 将几何体添加到场景中</span>\\nscene<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">add</span><span class=\\"token punctuation\\">(</span>cube<span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token comment\\">// 初始化渲染器</span>\\n<span class=\\"token keyword\\">const</span> renderer <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">THREE<span class=\\"token punctuation\\">.</span>WebGLRenderer</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token comment\\">// 设置渲染的尺寸大小</span>\\nrenderer<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">setSize</span><span class=\\"token punctuation\\">(</span>window<span class=\\"token punctuation\\">.</span>innerWidth<span class=\\"token punctuation\\">,</span> window<span class=\\"token punctuation\\">.</span>innerHeight<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token comment\\">// 将webgl渲染的canvas内容添加到body</span>\\ndocument<span class=\\"token punctuation\\">.</span>body<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">appendChild</span><span class=\\"token punctuation\\">(</span>renderer<span class=\\"token punctuation\\">.</span>domElement<span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token comment\\">// 创建轨道控制器</span>\\n<span class=\\"token keyword\\">const</span> controls <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">OrbitControls</span><span class=\\"token punctuation\\">(</span>camera<span class=\\"token punctuation\\">,</span> renderer<span class=\\"token punctuation\\">.</span>domElement<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token comment\\">// 阻尼效果</span>\\ncontrols<span class=\\"token punctuation\\">.</span>enableDamping <span class=\\"token operator\\">=</span> <span class=\\"token boolean\\">true</span>\\n\\n<span class=\\"token comment\\">// 渲染函数</span>\\n<span class=\\"token keyword\\">function</span> <span class=\\"token function\\">render</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  renderer<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">render</span><span class=\\"token punctuation\\">(</span>scene<span class=\\"token punctuation\\">,</span> camera<span class=\\"token punctuation\\">)</span>\\n  <span class=\\"token comment\\">//   渲染下一帧的时候就会调用render函数</span>\\n  <span class=\\"token function\\">requestAnimationFrame</span><span class=\\"token punctuation\\">(</span>render<span class=\\"token punctuation\\">)</span>\\n  <span class=\\"token comment\\">// controls.update()</span>\\n<span class=\\"token punctuation\\">}</span>\\n<span class=\\"token function\\">render</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
