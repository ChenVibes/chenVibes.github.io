import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o as s,c as n,b as r,d as e,a as t,e as c}from"./app-_V2SQyIj.js";const d={},l={id:"_1-命令行配置",tabindex:"-1"},_=r("a",{class:"header-anchor",href:"#_1-命令行配置","aria-hidden":"true"},"#",-1),i={href:"https://so.csdn.net/so/search?q=%E5%91%BD%E4%BB%A4%E8%A1%8C&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},m=c(`<p>1.开启防火墙</p><pre><code>systemctl start firewalld
</code></pre><p>2.限制端口</p><pre><code>firewall-cmd --zone=public --add-port=5672/tcp --permanent # 开放5672端口
firewall-cmd --zone=public --remove-port=5672/tcp --permanent #关闭5672端口
firewall-cmd --reload # 配置立即生效很重要!!配置好要重新加载
</code></pre><p>3.查看防火墙所有开放的端口</p><pre><code>firewall-cmd --zone=public --list-ports
</code></pre><p>4.关闭防火墙<br> 如果要开放的端口太多，嫌麻烦，可以关闭防火墙，安全性自行评估,不安全,不建议</p><pre><code>systemctl stop firewalld.service
</code></pre>`,8),h=r("br",null,null,-1),f={href:"https://so.csdn.net/so/search?q=cmd&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},b=c(`<p>6.查看监听的端口</p><pre><code>netstat -lnpt
</code></pre><p>7.检查端口被哪个进程占用</p><pre><code>netstat -lnpt |grep 5672
</code></pre><p>8.查看进程的详细信息</p><pre><code>ps 6832
</code></pre><p>9.中止进程</p><pre><code>kill -9 6832
</code></pre><p>10.直接访问修改文件也可</p><pre><code>sudo vim /etc/firewalld/zones/public.xml
</code></pre><h2 id="_2-阿里云控制台配置" tabindex="-1"><a class="header-anchor" href="#_2-阿里云控制台配置" aria-hidden="true">#</a> 2.阿里云控制台配置</h2><p>1.找到控制台位置<br><img src="https://img-blog.csdnimg.cn/f0be47d18ee243e38a9fdec96a481589.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA6Zeq6ICA5aSq6ZizYQ==,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述" loading="lazy"><br> 2.点击添加规则,然后输入允许访问的端口号,应用类型为自定义,最后确定即可(改完一定重启)<br> ps:要是重启没有作用,请用命令行输入</p><pre><code>firewall-cmd --reload
</code></pre><p>即可.<br><img src="https://img-blog.csdnimg.cn/d1011ceb479a4cb4889ed331f4e6d53f.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA6Zeq6ICA5aSq6ZizYQ==,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述" loading="lazy"></p>`,14);function g(u,x){const o=p("ExternalLinkIcon");return s(),n("div",null,[r("h2",l,[_,e(" 1."),r("a",i,[e("命令行"),t(o)]),e("配置")]),m,r("p",null,[e("5.查看防火墙状态"),h,e(" firewall-"),r("a",f,[e("cmd"),t(o)]),e(" --state")]),b])}const z=a(d,[["render",g],["__file","阿里云轻量应用服务器防火墙配置.html.vue"]]);export{z as default};
