import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as n,e}from"./app--yQHQ5cb.js";const o={},t=e(`<h4 id="centos-7-系统下-本文以-mate-桌面环境安装进行安装配置说明" tabindex="-1"><a class="header-anchor" href="#centos-7-系统下-本文以-mate-桌面环境安装进行安装配置说明" aria-hidden="true">#</a> CentOS 7 系统下，本文以 MATE 桌面环境安装进行安装配置说明：</h4><ul><li><strong>1.登录服务器，执行如下指令安装桌面环境：</strong></li></ul><p>先安装 MATE Desktop</p><p>yum groups install “MATE Desktop”</p><p>命令输入之后，会列出一大堆文字的，然后显示这个 y/d/n，输入 y，按回车下载安装； 安装完成，显示下面图片 complete</p><p>安装好 MATE Desktop 后，再安装 X Window System。</p><p>yum groups install “X Window System” 命令输入之后，会列出一大堆文字的，然后显示这个 y/d/n，输入 y，按回车下载安装；</p><p>安装完成</p><ul><li><strong>2.设置默认通过桌面环境启动服务器：</strong> systemctl set-default graphical.target</li></ul><p>systemctl set-default multi-user.target //设置成命令模式</p><p>systemctl set-default graphical.target //设置成图形模式</p><p>安装完成后，通过 reboot 等指令重启服务器，或者在 ECS 服务器控制台重启服务器。 选择第一个，按回车</p><ul><li><strong>3.通过 管理终端 连接服务器，验证测试安装情况。在 ECS 控制台，用管理终端登录服务器，查看安装好的桌面</strong></li></ul><p>默认的 KDE 为英文界面，可以使用这条命令 安装中文环境。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
sudo apt-get install language-pack-kde-zh language-pack-kde-zh-base language-pack-zh language-pack-zh-base language-support-zh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="yummain-py-install-yum-不能运行的原因-yummain-py-not-found" tabindex="-1"><a class="header-anchor" href="#yummain-py-install-yum-不能运行的原因-yummain-py-not-found" aria-hidden="true">#</a> yummain.py install yum 不能运行的原因 yummain.py not found</h4><ul><li><ol><li>wget http://yum.baseurl.org/download/3.2/yum-3.2.28.tar.gz</li></ol></li><li><ol start="2"><li>tar xvf yum-3.2.28.tar.gz</li></ol></li><li><ol start="3"><li>touch /etc/yum.conf</li></ol></li><li><ol start="4"><li>cd yum-3.2.28</li></ol></li><li><ol start="5"><li>./yummain.py install yum</li></ol></li></ul><h4 id="配置服务器环境" tabindex="-1"><a class="header-anchor" href="#配置服务器环境" aria-hidden="true">#</a> 配置服务器环境</h4><ul><li><strong>1.在阿里云管理控制台把云服务器实例启动</strong></li><li><strong>2.登入服务器：用 Putty 或 Xshell（我使用的是 xshell）：</strong></li><li><strong>3.把 yum 更新到最新版本：</strong></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>yum <span class="token operator">-</span>y update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><strong>4.我们将使用最新源代码构建 Node.js，要进行软件的安装，需要一组用来编译源代码的开发工具：</strong></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>yum <span class="token operator">-</span>y groupinstall <span class="token string">&quot;Development Tools&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="安装-node-js" tabindex="-1"><a class="header-anchor" href="#安装-node-js" aria-hidden="true">#</a> 安装 node.js</h4><ul><li><strong>1.开始安装 Node.js，先进入/usr/src 文件夹，这个文件夹通常用来存放软件源代码:</strong></li></ul><p>cd /usr/src</p><ul><li><strong>2.从 Node.js 的站点 中获取压缩档源代码, 我选择的版本为 v0.10.18：</strong></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>wget http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>nodejs<span class="token punctuation">.</span>org<span class="token operator">/</span>dist<span class="token operator">/</span>v0<span class="token punctuation">.</span><span class="token number">10.18</span><span class="token operator">/</span>node<span class="token operator">-</span>v0<span class="token punctuation">.</span><span class="token number">10.18</span><span class="token punctuation">.</span>tar<span class="token punctuation">.</span>gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><strong>3.解压缩源文件，并且进入到压缩后的文件夹中:</strong></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>tar zxf node<span class="token operator">-</span>v0<span class="token punctuation">.</span><span class="token number">10.18</span><span class="token punctuation">.</span>tar<span class="token punctuation">.</span>gz
cd node<span class="token operator">-</span>v0<span class="token punctuation">.</span><span class="token number">10.18</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>4.执行配置脚本来进行编译预处理:</strong></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./configure
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><strong>5.开始编译源代码 make</strong></li><li><strong>6.当编译完成后，我们需要使之在系统范围内可用, 编译后的二进制文件将被放置到系统路径，默认情况下，Node 二进制文件应该放在/user/local/bin/node 文件夹下:</strong></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>make install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><strong>7.现在已经安装了 Node.js, 可以开始部署应用程序, 首先要使用 Node.js 的模块管理器 npm 安装 Express middleware 和 forever（一个用来确保应用程序启动并且在需要时重启的非常有用的模块）：</strong></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>npm <span class="token operator">-</span>g install express forever
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><strong>8.建立超级链接, 不然 sudo node 时会报 &quot;command not found&quot;</strong></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>sudo ln <span class="token operator">-</span>s <span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>bin<span class="token operator">/</span>node <span class="token operator">/</span>usr<span class="token operator">/</span>bin<span class="token operator">/</span>node
sudo ln <span class="token operator">-</span>s <span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>lib<span class="token operator">/</span>node <span class="token operator">/</span>usr<span class="token operator">/</span>lib<span class="token operator">/</span>node
sudo ln <span class="token operator">-</span>s <span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>bin<span class="token operator">/</span>npm <span class="token operator">/</span>usr<span class="token operator">/</span>bin<span class="token operator">/</span>npm
sudo ln <span class="token operator">-</span>s <span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>bin<span class="token operator">/</span>node<span class="token operator">-</span>waf <span class="token operator">/</span>usr<span class="token operator">/</span>bin<span class="token operator">/</span>node<span class="token operator">-</span>waf
sudo ln <span class="token operator">-</span>s <span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>bin<span class="token operator">/</span>forever <span class="token operator">/</span>usr<span class="token operator">/</span>bin<span class="token operator">/</span>forever

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,37),l=[t];function r(p,i){return a(),n("div",null,l)}const u=s(o,[["render",r],["__file","阿里云linux服务器安装桌面.html.vue"]]);export{u as default};
