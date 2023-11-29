const e=JSON.parse(`{"key":"v-5a1eb93a","path":"/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/JS%E5%9F%BA%E7%A1%80/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1.html","title":"面向对象","lang":"zh-CN","frontmatter":{"title":"面向对象","tag":["对象","原型","原型链"],"category":["前端基石","JS基础"],"description":"对象 对象（ object）是“键值对”的集合，表示属性和值的映射关系; 如果对象的属性键名不符合标识符命名规范，则这个键名必须用引号包裹; 属性的访问 in 运算符 检查属性是否存在的操作符 \\"in\\"。 语法是：\\"key\\" in object 例如： 普通属性名使用点语法来访问; 如果属性名不符合标识符命名规范，则必须用方括号的写法来访问; 如果属性...","head":[["meta",{"property":"og:url","content":"https://magicbegin.gitee.io/vuepress-blog/vuepress-blog/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%9F%B3/JS%E5%9F%BA%E7%A1%80/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1.html"}],["meta",{"property":"og:site_name","content":"Mr Chen's Blog"}],["meta",{"property":"og:title","content":"面向对象"}],["meta",{"property":"og:description","content":"对象 对象（ object）是“键值对”的集合，表示属性和值的映射关系; 如果对象的属性键名不符合标识符命名规范，则这个键名必须用引号包裹; 属性的访问 in 运算符 检查属性是否存在的操作符 \\"in\\"。 语法是：\\"key\\" in object 例如： 普通属性名使用点语法来访问; 如果属性名不符合标识符命名规范，则必须用方括号的写法来访问; 如果属性..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-22T15:38:45.000Z"}],["meta",{"property":"article:author","content":"Mr.Chen"}],["meta",{"property":"article:tag","content":"对象"}],["meta",{"property":"article:tag","content":"原型"}],["meta",{"property":"article:tag","content":"原型链"}],["meta",{"property":"article:modified_time","content":"2023-10-22T15:38:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"面向对象\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-10-22T15:38:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Chen\\",\\"url\\":\\"/logo.png\\"}]}"]]},"headers":[{"level":2,"title":"对象","slug":"对象","link":"#对象","children":[{"level":3,"title":"属性的访问","slug":"属性的访问","link":"#属性的访问","children":[]},{"level":3,"title":"属性的更改","slug":"属性的更改","link":"#属性的更改","children":[]},{"level":3,"title":"属性的创建","slug":"属性的创建","link":"#属性的创建","children":[]},{"level":3,"title":"属性的删除","slug":"属性的删除","link":"#属性的删除","children":[]},{"level":3,"title":"对象的方法","slug":"对象的方法","link":"#对象的方法","children":[]},{"level":3,"title":"对象的遍历","slug":"对象的遍历","link":"#对象的遍历","children":[]},{"level":3,"title":"对象的深浅克隆","slug":"对象的深浅克隆","link":"#对象的深浅克隆","children":[]}]},{"level":2,"title":"this 指向问题","slug":"this-指向问题","link":"#this-指向问题","children":[{"level":3,"title":"this 绑定规则","slug":"this-绑定规则","link":"#this-绑定规则","children":[]},{"level":3,"title":"this 规则之外","slug":"this-规则之外","link":"#this-规则之外","children":[]}]},{"level":2,"title":"构造函数","slug":"构造函数","link":"#构造函数","children":[]},{"level":2,"title":"原型原型链","slug":"原型原型链","link":"#原型原型链","children":[{"level":3,"title":"prototype","slug":"prototype","link":"#prototype","children":[]},{"level":3,"title":"原型链查找","slug":"原型链查找","link":"#原型链查找","children":[]},{"level":3,"title":"hasOwnProperty","slug":"hasownproperty","link":"#hasownproperty","children":[]},{"level":3,"title":"instanceof 运算符","slug":"instanceof-运算符","link":"#instanceof-运算符","children":[]},{"level":3,"title":"in 运算符","slug":"in-运算符","link":"#in-运算符","children":[]},{"level":3,"title":"getPrototypeOf","slug":"getprototypeof","link":"#getprototypeof","children":[]},{"level":3,"title":"create","slug":"create","link":"#create","children":[]},{"level":3,"title":"在 prototype 上添加方法","slug":"在-prototype-上添加方法","link":"#在-prototype-上添加方法","children":[]},{"level":3,"title":"原型链的终点","slug":"原型链的终点","link":"#原型链的终点","children":[]},{"level":3,"title":"js 实现继承","slug":"js-实现继承","link":"#js-实现继承","children":[]}]},{"level":2,"title":"面向对象案例","slug":"面向对象案例","link":"#面向对象案例","children":[{"level":3,"title":"红绿灯案例","slug":"红绿灯案例","link":"#红绿灯案例","children":[]},{"level":3,"title":"炫彩小球小案例","slug":"炫彩小球小案例","link":"#炫彩小球小案例","children":[]}]},{"level":2,"title":"内置对象","slug":"内置对象","link":"#内置对象","children":[{"level":3,"title":"包装类","slug":"包装类","link":"#包装类","children":[]},{"level":3,"title":"Math 对象","slug":"math-对象","link":"#math-对象","children":[]},{"level":3,"title":"Date 对象","slug":"date-对象","link":"#date-对象","children":[]}]}],"git":{"createdTime":1697989125000,"updatedTime":1697989125000,"contributors":[{"name":"chenzhen","email":"32085549+frontchen@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":23.79,"words":7137},"filePathRelative":"前端开发/前端基石/JS基础/面向对象.md","localizedDate":"2023年10月22日","autoDesc":true}`);export{e as data};
