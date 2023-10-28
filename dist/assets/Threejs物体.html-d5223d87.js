const n=JSON.parse(`{"key":"v-0f704b9a","path":"/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9B%BE%E5%BD%A2/Three.js/Threejs%E7%89%A9%E4%BD%93.html","title":"Threejs物体","lang":"zh-CN","frontmatter":{"title":"Threejs物体","category":"前端开发 - 前端图形 - Three.js","order":3,"description":"几何体顶点 attributes.position 代表顶点的位置 控制台输出物体的 attributes.position 属性发现一个四面体有 24 个顶点 四面体不是只有 8 个顶点吗？ 在 threejs 中顶点代表的是组成一个面的两个三角形的顶点，一个三角形有 3 个顶点，所以一个面有 6 个顶点 const geometry = new THREE.BufferGeometry() // 创建一个简单的矩形. 在这里我们左上和右下顶点被复制了两次 // 因为在两个三角面片里，这两个顶点都需要被用到 const vertices = new Float32Array([ -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0, 1.0 ]) geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3)) const material = new THREE.MeshBasicMaterial({ color: 0xff0000 }) const mesh = new THREE.Mesh(geometry, material)","head":[["meta",{"property":"og:url","content":"http://magicbegin.gitee.io/vuepress-blog/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9B%BE%E5%BD%A2/Three.js/Threejs%E7%89%A9%E4%BD%93.html"}],["meta",{"property":"og:site_name","content":"Mr Chen's Blog"}],["meta",{"property":"og:title","content":"Threejs物体"}],["meta",{"property":"og:description","content":"几何体顶点 attributes.position 代表顶点的位置 控制台输出物体的 attributes.position 属性发现一个四面体有 24 个顶点 四面体不是只有 8 个顶点吗？ 在 threejs 中顶点代表的是组成一个面的两个三角形的顶点，一个三角形有 3 个顶点，所以一个面有 6 个顶点 const geometry = new THREE.BufferGeometry() // 创建一个简单的矩形. 在这里我们左上和右下顶点被复制了两次 // 因为在两个三角面片里，这两个顶点都需要被用到 const vertices = new Float32Array([ -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0, 1.0 ]) geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3)) const material = new THREE.MeshBasicMaterial({ color: 0xff0000 }) const mesh = new THREE.Mesh(geometry, material)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-27T11:35:00.000Z"}],["meta",{"property":"article:author","content":"Mr Chen"}],["meta",{"property":"article:modified_time","content":"2023-10-27T11:35:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Threejs物体\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-10-27T11:35:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr Chen\\",\\"url\\":\\"https://gitee.com/magicBegin/vuepress-blog\\",\\"email\\":\\"599422271@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"几何体顶点","slug":"几何体顶点","link":"#几何体顶点","children":[]},{"level":2,"title":"uv","slug":"uv","link":"#uv","children":[]},{"level":2,"title":"法向","slug":"法向","link":"#法向","children":[]},{"level":2,"title":"酷炫三角形科技物体","slug":"酷炫三角形科技物体","link":"#酷炫三角形科技物体","children":[]},{"level":2,"title":"常用网格几何体","slug":"常用网格几何体","link":"#常用网格几何体","children":[]}],"git":{"createdTime":1698406500000,"updatedTime":1698406500000,"contributors":[{"name":"chenzhen","email":"599422271@qq.com","commits":1}]},"readingTime":{"minutes":2.33,"words":700},"filePathRelative":"前端开发/前端图形/Three.js/Threejs物体.md","localizedDate":"2023年10月27日","excerpt":"<h2> 几何体顶点</h2>\\n<p><code>attributes.position</code> 代表顶点的位置</p>\\n<p>控制台输出物体的 <code>attributes.position</code> 属性发现一个四面体有 24 个顶点</p>\\n<p>四面体不是只有 8 个顶点吗？</p>\\n<p>在 <code>threejs</code> 中顶点代表的是组成一个面的两个三角形的顶点，一个三角形有 3 个顶点，所以一个面有 6 个顶点</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">const</span> geometry <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">THREE<span class=\\"token punctuation\\">.</span>BufferGeometry</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token comment\\">// 创建一个简单的矩形. 在这里我们左上和右下顶点被复制了两次</span>\\n<span class=\\"token comment\\">// 因为在两个三角面片里，这两个顶点都需要被用到</span>\\n<span class=\\"token keyword\\">const</span> vertices <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Float32Array</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">[</span>\\n  <span class=\\"token operator\\">-</span><span class=\\"token number\\">1.0</span><span class=\\"token punctuation\\">,</span> <span class=\\"token operator\\">-</span><span class=\\"token number\\">1.0</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">1.0</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">1.0</span><span class=\\"token punctuation\\">,</span> <span class=\\"token operator\\">-</span><span class=\\"token number\\">1.0</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">1.0</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">1.0</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">1.0</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">1.0</span><span class=\\"token punctuation\\">,</span>\\n\\n  <span class=\\"token number\\">1.0</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">1.0</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">1.0</span><span class=\\"token punctuation\\">,</span> <span class=\\"token operator\\">-</span><span class=\\"token number\\">1.0</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">1.0</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">1.0</span><span class=\\"token punctuation\\">,</span> <span class=\\"token operator\\">-</span><span class=\\"token number\\">1.0</span><span class=\\"token punctuation\\">,</span> <span class=\\"token operator\\">-</span><span class=\\"token number\\">1.0</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">1.0</span>\\n<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span>\\ngeometry<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">setAttribute</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'position'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">THREE<span class=\\"token punctuation\\">.</span>BufferAttribute</span><span class=\\"token punctuation\\">(</span>vertices<span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token keyword\\">const</span> material <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">THREE<span class=\\"token punctuation\\">.</span>MeshBasicMaterial</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span> <span class=\\"token literal-property property\\">color</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">0xff0000</span> <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token keyword\\">const</span> mesh <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">THREE<span class=\\"token punctuation\\">.</span>Mesh</span><span class=\\"token punctuation\\">(</span>geometry<span class=\\"token punctuation\\">,</span> material<span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
