import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as t,c as i,e as n}from"./app-c0549a84.js";const s={},a=n(`<p>1、进入服务器 ssh 目录并输入以下命令（root 权限），进入到 linux 启动配置文件目录</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    cd /etc/rc.d/init.d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、输入以下命令会自动打开一个新建启动文件的编辑窗口（名称可自行定义）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    vi yunyuone_start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://img-blog.csdnimg.cn/5f40712194434690a3dc303383857fdc.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5LqR6bG8b25l,size_20,color_FFFFFF,t_70,g_se,x_16" alt="" tabindex="0"><figcaption></figcaption></figure><p>3、窗口里输入键盘命令 i 进入编辑模式，并输入以下内容，注意第一行、第二行必须保留。从第三行开始输入你要启动的服务命令（必须得手动能成功启动，自动启动才会生效）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    #!/bin/bash
    # chkconfig: 2345 10 90 php /www/wwwroot/workerman/start.php start -d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>输入完以后按<strong>ESC</strong>键，再次输入:wq 自动保存退出</p><p>4、最后执行以下两个命令（注意名称需要和你输入的一至）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    chkconfig --add yunyuone_start
    chkconfig yunyuone_start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>重启服务器看是否应用正常启动了！</p><p>5、常见问题</p><p>1、为什么没有启动？请手动先在 ssh 里启动一次看是否正常启动</p><p>2、手动能启动自动启动无效？ 检查是否二进制文件，如果时则需要先进入文件目录，再启动</p>`,14),d=[a];function r(c,l){return t(),i("div",null,d)}const _=e(s,[["render",r],["__file","服务器如何设置服务自动启动进程.html.vue"]]);export{_ as default};
