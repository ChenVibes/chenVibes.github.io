const e=JSON.parse(`{"key":"v-080d42c3","path":"/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/vue-cli3.X%E8%87%AA%E5%8A%A8%E9%83%A8%E7%BD%B2%E9%A1%B9%E7%9B%AE%E5%88%B0%E6%9C%8D%E5%8A%A1%E5%99%A8.html","title":"vue-cli3.X自动部署项目到服务器","lang":"zh-CN","frontmatter":{"title":"vue-cli3.X自动部署项目到服务器","tag":"前端工程化","date":"2019-04-12T00:00:00.000Z","category":"前端开发","description":"前言 平时部署前端项目流程是：先部署到测试环境 ok 后再发布到生产环境上，部署到测试环境用 xshell 连上服务器，然后用 xftp 连接服务器，然后本地 build 项目，接着把 build 好的文件通过 xftp 上传到服务器上，整个流程感觉稍有繁琐，重复。 本教程讲解的是 Vue-CLI 3.x 脚手架搭建的 vue 项目, 利用scp2 (...","head":[["meta",{"property":"og:url","content":"https://zfhblog.top/Users/chenzhen/Desktop/code/blog/vuepress-blog/dist/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/vue-cli3.X%E8%87%AA%E5%8A%A8%E9%83%A8%E7%BD%B2%E9%A1%B9%E7%9B%AE%E5%88%B0%E6%9C%8D%E5%8A%A1%E5%99%A8.html"}],["meta",{"property":"og:site_name","content":"Mr Chen's Blog"}],["meta",{"property":"og:title","content":"vue-cli3.X自动部署项目到服务器"}],["meta",{"property":"og:description","content":"前言 平时部署前端项目流程是：先部署到测试环境 ok 后再发布到生产环境上，部署到测试环境用 xshell 连上服务器，然后用 xftp 连接服务器，然后本地 build 项目，接着把 build 好的文件通过 xftp 上传到服务器上，整个流程感觉稍有繁琐，重复。 本教程讲解的是 Vue-CLI 3.x 脚手架搭建的 vue 项目, 利用scp2 (..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-22T15:38:45.000Z"}],["meta",{"property":"article:author","content":"Mr.Chen"}],["meta",{"property":"article:tag","content":"前端工程化"}],["meta",{"property":"article:published_time","content":"2019-04-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-22T15:38:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"vue-cli3.X自动部署项目到服务器\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-04-12T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-22T15:38:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Chen\\",\\"url\\":\\"/logo.png\\"}]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"一 安装 scp2","slug":"一-安装-scp2","link":"#一-安装-scp2","children":[]},{"level":2,"title":"二、配置测试/生产环境 服务器 SSH 远程登陆账号信息","slug":"二、配置测试-生产环境-服务器-ssh-远程登陆账号信息","link":"#二、配置测试-生产环境-服务器-ssh-远程登陆账号信息","children":[]},{"level":2,"title":"三、使用 scp2 库,创建自动化部署脚本","slug":"三、使用-scp2-库-创建自动化部署脚本","link":"#三、使用-scp2-库-创建自动化部署脚本","children":[]},{"level":2,"title":"四、添加 package.json 中的 scripts 命令, 自定义名称为 \\"deploy\\",","slug":"四、添加-package-json-中的-scripts-命令-自定义名称为-deploy","link":"#四、添加-package-json-中的-scripts-命令-自定义名称为-deploy","children":[]},{"level":2,"title":"图解","slug":"图解","link":"#图解","children":[]}],"git":{"createdTime":1697989125000,"updatedTime":1697989125000,"contributors":[{"name":"chenzhen","email":"32085549+frontchen@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":3.26,"words":978},"filePathRelative":"前端开发/前端工程化/vue-cli3.X自动部署项目到服务器.md","localizedDate":"2019年4月12日","autoDesc":true}`);export{e as data};
