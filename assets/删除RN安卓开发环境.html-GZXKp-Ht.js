import{_ as d}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as n,c as o,b as a,d as e,a as t,e as l}from"./app-S3nsRjMn.js";const s={},c=l(`<h1 id="删除-react-native-android-开发环境总结" tabindex="-1"><a class="header-anchor" href="#删除-react-native-android-开发环境总结" aria-hidden="true">#</a> 删除 React Native Android 开发环境总结</h1><p>============================</p><h3 id="_1、卸载-android-studio-在终端-terminal-执行以下命令" tabindex="-1"><a class="header-anchor" href="#_1、卸载-android-studio-在终端-terminal-执行以下命令" aria-hidden="true">#</a> 1、卸载 Android Studio，在终端(terminal)执行以下命令：</h3><ol><li>rm -rf /Applications/Android\\ Studio.app</li><li>rm -rf ~/Library/Preferences/AndroidStudio*</li><li>rm -rf ~/Library/Preferences/com.google.android.studio.plist</li><li>rm -rf ~/Library/Application\\ Support/AndroidStudio*</li><li>rm -rf ~/Library/Logs/AndroidStudio*</li><li>rm -rf ~/Library/Caches/AndroidStudio*</li></ol><h3 id="_2、删除-projects" tabindex="-1"><a class="header-anchor" href="#_2、删除-projects" aria-hidden="true">#</a> 2、删除 Projects</h3><ol><li>rm -Rf ~/AndroidStudioProjects</li></ol><h3 id="_3、删除-gradle" tabindex="-1"><a class="header-anchor" href="#_3、删除-gradle" aria-hidden="true">#</a> 3、删除 gradle</h3><ol><li>rm -Rf ~/.gradle</li></ol><h3 id="_4、卸载-android-virtual-devices-avds-and-keystore" tabindex="-1"><a class="header-anchor" href="#_4、卸载-android-virtual-devices-avds-and-keystore" aria-hidden="true">#</a> 4、卸载 Android Virtual Devices(AVDs) and *.keystore.</h3><p>注意：如果有其他 IDE 需要用到，请不要删除</p><ol><li>rm -Rf ~/.android</li></ol><h3 id="_5、删除-android-sdk-tools" tabindex="-1"><a class="header-anchor" href="#_5、删除-android-sdk-tools" aria-hidden="true">#</a> 5、删除 Android SDK Tools</h3><p>注意：如果有其他 IDE 需要用到，请不要删除</p><p>rm -Rf ~/Library/Android*</p><h1 id="卸载-java-jdk" tabindex="-1"><a class="header-anchor" href="#卸载-java-jdk" aria-hidden="true">#</a> 卸载 Java JDK</h1><h3 id="卸载步骤" tabindex="-1"><a class="header-anchor" href="#卸载步骤" aria-hidden="true">#</a> 卸载步骤</h3><h4 id="删除-java-文件" tabindex="-1"><a class="header-anchor" href="#删除-java-文件" aria-hidden="true">#</a> 删除 java 文件</h4><pre><code>sudo rm -fr /Library/Internet\\ Plug-Ins/JavaAppletPlugin.plugin
sudo rm -fr /Library/PreferencesPanes/JavaControlPanel.prefpane
sudo rm -fr ~/Library/Application\\ Support/Java
</code></pre><blockquote><p>手动删除可能不成功,建议进目录查看,文件是否存在.</p></blockquote><h4 id="删除-jdk" tabindex="-1"><a class="header-anchor" href="#删除-jdk" aria-hidden="true">#</a> 删除 jdk</h4><pre><code>#查找当前版本
#输入：
ls /Library/Java/JavaVirtualMachines/
#输出：jdk-9.0.1.jdk
sudo rm -rf /Library/Java/JavaVirtualMachines/jdk-9.0.1.jdk
</code></pre><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><pre><code>brew tap caskroom/versions
brew cask install java8   # 安装java8
#brew cask install java  #默认安装最新版本
</code></pre><h4 id="配置-java-环境变量" tabindex="-1"><a class="header-anchor" href="#配置-java-环境变量" aria-hidden="true">#</a> 配置 Java 环境变量</h4><pre><code># 1.定位JAVA_HOME位置
/usr/libexec/java_home

# 2.编辑profile文件
vim ~/.bash_profile

# 3.格式参考

JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_152.jdk/Contents/Home
PATH=$JAVA_HOME/bin:$PATH
CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar

# 4.执行生效
source ~/.bash_profile

# 5.检查是否成功
echo $JAVA_HOME
</code></pre><h3 id="警告-2019-4-17" tabindex="-1"><a class="header-anchor" href="#警告-2019-4-17" aria-hidden="true">#</a> 警告(2019.4.17)</h3>`,26),h=a("code",null,"brew",-1),u=a("code",null,"oracle",-1),_=a("code",null,"java8",-1),p=a("code",null,"java8 for mac",-1),f=a("br",null,null,-1),b={href:"https://pan.baidu.com/s/15NmfrJrf8hErVmyBTVj7bg",target:"_blank",rel:"noopener noreferrer"},v=a("blockquote",null,[a("p",null,"新环境 java12 ,项目折腾半天, 怀疑是 jdk 版本问题, 退回 java8")],-1);function m(j,A){const r=i("ExternalLinkIcon");return n(),o("div",null,[c,a("p",null,[h,e("方法现在已经不能安装了."),u,e("的官网现在也下载不了("),_,e("),提示你登录, 注册了账号, 搞半天登录不了. 老老实实的用百度云下载吧. 以下是下载地址,"),p,e(" ,拿去不谢."),f,a("a",b,[e("jdk-8u201-macosx-x64 .dmg"),t(r)])]),v])}const J=d(s,[["render",m],["__file","删除RN安卓开发环境.html.vue"]]);export{J as default};
