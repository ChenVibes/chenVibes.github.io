const e=JSON.parse(`{"key":"v-33770c83","path":"/%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91/%E6%95%B0%E6%8D%AE%E5%BA%93/%E6%B7%B1%E5%85%A5%E6%B5%85%E5%87%BAmongoose.html","title":"深入浅出mongoose","lang":"zh-CN","frontmatter":{"title":"深入浅出mongoose","tag":["mongodb","mongoose"],"category":"数据库","description":"连接数据库 connect mongoose 有两种方式 第一种: 第二种: mongoose.createConnection()和 mongoose.connect()区别 首先，我们需要定义一个连接，如果你的 app 只用到一个数据库，你应该使用 mongoose.connect。如果你还需要连接其他数据库，使用 mongoose.createC...","head":[["meta",{"property":"og:url","content":"https://zfhblog.top/vuepress-blog/%E5%90%8E%E7%AB%AF%E5%BC%80%E5%8F%91/%E6%95%B0%E6%8D%AE%E5%BA%93/%E6%B7%B1%E5%85%A5%E6%B5%85%E5%87%BAmongoose.html"}],["meta",{"property":"og:site_name","content":"Mr Chen's Blog"}],["meta",{"property":"og:title","content":"深入浅出mongoose"}],["meta",{"property":"og:description","content":"连接数据库 connect mongoose 有两种方式 第一种: 第二种: mongoose.createConnection()和 mongoose.connect()区别 首先，我们需要定义一个连接，如果你的 app 只用到一个数据库，你应该使用 mongoose.connect。如果你还需要连接其他数据库，使用 mongoose.createC..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Mr.Chen"}],["meta",{"property":"article:tag","content":"mongodb"}],["meta",{"property":"article:tag","content":"mongoose"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"深入浅出mongoose\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Chen\\",\\"url\\":\\"/logo.png\\"}]}"]]},"headers":[{"level":2,"title":"连接数据库","slug":"连接数据库","link":"#连接数据库","children":[{"level":3,"title":"connect mongoose 有两种方式","slug":"connect-mongoose-有两种方式","link":"#connect-mongoose-有两种方式","children":[]},{"level":3,"title":"connect mongodb","slug":"connect-mongodb","link":"#connect-mongodb","children":[]}]},{"level":2,"title":"了解 mongoose","slug":"了解-mongoose","link":"#了解-mongoose","children":[]},{"level":2,"title":"深入浅出 mongoose","slug":"深入浅出-mongoose-1","link":"#深入浅出-mongoose-1","children":[{"level":3,"title":"Schema","slug":"schema","link":"#schema","children":[]},{"level":3,"title":"实例 Model","slug":"实例-model","link":"#实例-model","children":[]}]},{"level":2,"title":"文档新增","slug":"文档新增","link":"#文档新增","children":[{"level":3,"title":"save()","slug":"save","link":"#save","children":[]},{"level":3,"title":"create()","slug":"create","link":"#create","children":[]},{"level":3,"title":"insertMany()","slug":"insertmany","link":"#insertmany","children":[]}]},{"level":2,"title":"mongoose 条件操作符","slug":"mongoose-条件操作符","link":"#mongoose-条件操作符","children":[{"level":3,"title":"mongoose 多条件模糊查询","slug":"mongoose-多条件模糊查询","link":"#mongoose-多条件模糊查询","children":[]}]},{"level":2,"title":"文档查询","slug":"文档查询","link":"#文档查询","children":[{"level":3,"title":"find()","slug":"find","link":"#find","children":[]},{"level":3,"title":"findById()","slug":"findbyid","link":"#findbyid","children":[]},{"level":3,"title":"findOne()","slug":"findone","link":"#findone","children":[]},{"level":3,"title":"$where","slug":"where","link":"#where","children":[]}]},{"level":2,"title":"文档更新","slug":"文档更新","link":"#文档更新","children":[{"level":3,"title":"update()","slug":"update","link":"#update","children":[]},{"level":3,"title":"updateMany()","slug":"updatemany","link":"#updatemany","children":[]},{"level":3,"title":"find() + save()","slug":"find-save","link":"#find-save","children":[]},{"level":3,"title":"updateOne()","slug":"updateone","link":"#updateone","children":[]},{"level":3,"title":"findOne() + save()","slug":"findone-save","link":"#findone-save","children":[]}]},{"level":2,"title":"文档删除","slug":"文档删除","link":"#文档删除","children":[{"level":3,"title":"remove()","slug":"remove","link":"#remove","children":[]},{"level":3,"title":"findOneAndRemove()","slug":"findoneandremove","link":"#findoneandremove","children":[]},{"level":3,"title":"findByIdAndRemove()","slug":"findbyidandremove","link":"#findbyidandremove","children":[]}]},{"level":2,"title":"前后钩子","slug":"前后钩子","link":"#前后钩子","children":[{"level":3,"title":"pre()","slug":"pre","link":"#pre","children":[]},{"level":3,"title":"post()","slug":"post","link":"#post","children":[]}]},{"level":2,"title":"查询后处理","slug":"查询后处理","link":"#查询后处理","children":[{"level":3,"title":"sort()","slug":"sort","link":"#sort","children":[]},{"level":3,"title":"skip()","slug":"skip","link":"#skip","children":[]},{"level":3,"title":"limit()","slug":"limit","link":"#limit","children":[]},{"level":3,"title":"select()","slug":"select","link":"#select","children":[]},{"level":3,"title":"count()","slug":"count","link":"#count","children":[]},{"level":3,"title":"distinct()","slug":"distinct","link":"#distinct","children":[]}]},{"level":2,"title":"文档验证","slug":"文档验证","link":"#文档验证","children":[{"level":3,"title":"required","slug":"required","link":"#required","children":[]},{"level":3,"title":"default","slug":"default","link":"#default","children":[]},{"level":3,"title":"min | max","slug":"min-max","link":"#min-max","children":[]},{"level":3,"title":"match","slug":"match","link":"#match","children":[]},{"level":3,"title":"enum","slug":"enum","link":"#enum","children":[]},{"level":3,"title":"validate","slug":"validate","link":"#validate","children":[]}]},{"level":2,"title":"连接数据库","slug":"连接数据库-1","link":"#连接数据库-1","children":[]},{"level":2,"title":"Schema/Model/Entity","slug":"schema-model-entity","link":"#schema-model-entity","children":[]},{"level":2,"title":"model 数据插入","slug":"model-数据插入","link":"#model-数据插入","children":[]},{"level":2,"title":"find 数据查询","slug":"find-数据查询","link":"#find-数据查询","children":[]},{"level":2,"title":"update 数据更新","slug":"update-数据更新","link":"#update-数据更新","children":[]},{"level":2,"title":"remove 数据删除","slug":"remove-数据删除","link":"#remove-数据删除","children":[]}],"git":{},"readingTime":{"minutes":31.85,"words":9556},"filePathRelative":"后端开发/数据库/深入浅出mongoose.md","autoDesc":true}`);export{e as data};
