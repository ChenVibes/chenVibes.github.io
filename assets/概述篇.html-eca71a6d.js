import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as c,c as o,b as i,d as g,a as l,e as n}from"./app-762bcd9b.js";const p={},s=n('<h2 id="什么是计算机网络" tabindex="-1"><a class="header-anchor" href="#什么是计算机网络" aria-hidden="true">#</a> 什么是计算机网络？</h2><p>计算机网络主要由一些通用的、可编程的硬件互连而成，通过这些硬件，可以传送不同类型的数据，并且可以支持广泛和日益增长的应用。</p><ul><li>计算机网络的不是软件概念，还包含硬件设备</li><li>计算机网络不仅仅是信息通信，还可以支持广泛的应用</li></ul><h2 id="计算机网络分类" tabindex="-1"><a class="header-anchor" href="#计算机网络分类" aria-hidden="true">#</a> 计算机网络分类</h2><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/计算机网络分类.png" alt="计算机网络分类" tabindex="0"><figcaption>计算机网络分类</figcaption></figure><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/计算机网络分类2.png" alt="计算机网络分类2" tabindex="0"><figcaption>计算机网络分类2</figcaption></figure><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/计算机网络分类3.png" alt="计算机网络分类3" tabindex="0"><figcaption>计算机网络分类3</figcaption></figure><h2 id="计算机网络发展历史" tabindex="-1"><a class="header-anchor" href="#计算机网络发展历史" aria-hidden="true">#</a> 计算机网络发展历史</h2><h3 id="互联网的发展历史" tabindex="-1"><a class="header-anchor" href="#互联网的发展历史" aria-hidden="true">#</a> 互联网的发展历史</h3><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/互联网的发展历史1.png" alt="互联网的发展历史1" tabindex="0"><figcaption>互联网的发展历史1</figcaption></figure><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/互联网的发展历史2.png" alt="互联网的发展历史2" tabindex="0"><figcaption>互联网的发展历史2</figcaption></figure><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/互联网的发展历史3.png" alt="互联网的发展历史3" tabindex="0"><figcaption>互联网的发展历史3</figcaption></figure><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/互联网的发展历史4.png" alt="互联网的发展历史4" tabindex="0"><figcaption>互联网的发展历史4</figcaption></figure><blockquote><p>isp:网络服务提供商 中国移动...</p></blockquote><h3 id="中国互联网发展历史" tabindex="-1"><a class="header-anchor" href="#中国互联网发展历史" aria-hidden="true">#</a> 中国互联网发展历史</h3><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/中国互联网发展.png" alt="中国互联网发展" tabindex="0"><figcaption>中国互联网发展</figcaption></figure><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/最大的五个公共网络.png" alt="最大的五个公共网络" tabindex="0"><figcaption>最大的五个公共网络</figcaption></figure><h2 id="计算机网络的层次结构" tabindex="-1"><a class="header-anchor" href="#计算机网络的层次结构" aria-hidden="true">#</a> 计算机网络的层次结构</h2><p>⭐ 计算机网络为什么要使用层次结构的设计？</p><ol><li><p>各层之间相互独立：高层是不需要知道底层的功能是采取硬件技术来实现的，它只需要知道通过与底层的接口就可以获得所需要的服务；</p></li><li><p>灵活性好：各层都可以采用最适当的技术来实现，例如某一层的实现技术发生了变化，用硬件代替了软件，只要这一层的功能与接口保持不变，实现技术的变化都并不会对其他各层以及整个系统的工作产生影响；</p></li><li><p>易于实现和标准化：由于采取了规范的层次结构去组织网络功能与协议，因此可以将计算机网络复杂的通信过程，划分为有序的连续动作与有序的交互过程，有利于将网络复杂的通信工作过程化解为一系列可以控制和实现的功能模块，使得复杂的计算机网络系统变得易于设计，实现和标准化</p></li></ol><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/层次结构设计的基本原则.png" alt="层次结构设计的基本原则" tabindex="0"><figcaption>层次结构设计的基本原则</figcaption></figure><h3 id="层次结构设计的基本原则" tabindex="-1"><a class="header-anchor" href="#层次结构设计的基本原则" aria-hidden="true">#</a> 层次结构设计的基本原则</h3><ul><li>各层之间是相互独立的</li><li>每一层有足够的灵活性</li><li>各层之间完全解耦</li></ul><blockquote><p>相互独立意思可以理解为各自是独立，强调的自成一体，有自己的独立的体系，或者功能，是一个整体。而相互解耦指的则是相互之间减少依赖，强调的是依赖关系，依赖程度越少，就是常说的耦合程度越低。</p></blockquote>',24),r={href:"https://blog.csdn.net/shenwansangz/article/details/82284957",target:"_blank",rel:"noopener noreferrer"},u=n('<h3 id="osi-七层模型" tabindex="-1"><a class="header-anchor" href="#osi-七层模型" aria-hidden="true">#</a> OSI 七层模型</h3><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/OSI模型.png" alt="OSI模型" tabindex="0"><figcaption>OSI模型</figcaption></figure><ul><li>OSI 欲成为全球计算机都遵循的标准</li><li>OSI 在市场化过程中困难重重，TCP/IP 在全球范围成功运行</li></ul><h3 id="tcp-ip-模型" tabindex="-1"><a class="header-anchor" href="#tcp-ip-模型" aria-hidden="true">#</a> TCP/IP 模型</h3><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/TCPIP.png" alt="TCPIP" tabindex="0"><figcaption>TCPIP</figcaption></figure><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/tcpip2.png" alt="tcpip2" tabindex="0"><figcaption>tcpip2</figcaption></figure><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/tcpip3.png" alt="tcpip3" tabindex="0"><figcaption>tcpip3</figcaption></figure><h2 id="现代互联网的网络拓扑" tabindex="-1"><a class="header-anchor" href="#现代互联网的网络拓扑" aria-hidden="true">#</a> 现代互联网的网络拓扑</h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>路由器一般是工作在一个网络内部，负责的是同一个网段之间的路由。而网关则不一样，网关是一个网络非常重要的设备，一般作为网络的统一出口或入口使用的。意味着，一个网络和另外一个网络连接，从虚拟互联网络来看，就是两个网关的连接。</p></div><ul><li>边缘部分：由所有连接在互联网上的主机组成。这部分是用户直接使用的，用来进行通信（传送数据、音频或视频）和资源共享</li></ul><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/边缘部分家庭.png" alt="边缘部分家庭" tabindex="0"><figcaption>边缘部分家庭</figcaption></figure><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/边缘部分企业.png" alt="边缘部分企业" tabindex="0"><figcaption>边缘部分企业</figcaption></figure><ul><li>核心部分：由大量的网络和连接这些网络的路由器组成。这部分是为边缘部分提供服务的</li></ul><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/核心部分.png" alt="核心部分" tabindex="0"><figcaption>核心部分</figcaption></figure><p>把边缘部分和核心部分连接起来会形成现代互联网的树状结构</p><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/树状结构.png" alt="树状结构" tabindex="0"><figcaption>树状结构</figcaption></figure><p>从用户角度出发，去看计算机网络，更多看到是各种模式：</p><p>1、客户-服务器方式（C/S 方式）：即 Client/Server 方式，简称为 C/S 方式。</p><p>2、对等方式（P2P 方式）：即 Peer-to-Peer 方式 ，简称为 P2P 方式。</p><h2 id="计算机网络的性能指标" tabindex="-1"><a class="header-anchor" href="#计算机网络的性能指标" aria-hidden="true">#</a> 计算机网络的性能指标</h2><ul><li>速率</li></ul><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/计算机网络的性能指标.png" alt="计算机网络的性能指标" tabindex="0"><figcaption>计算机网络的性能指标</figcaption></figure><p>bps=bit/s</p><p>eg:为什么电信拉的 100m,测试峰值速度只有 12M 每秒？</p><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/计算机网络的性能指标2.png" alt="计算机网络的性能指标2" tabindex="0"><figcaption>计算机网络的性能指标2</figcaption></figure><h3 id="时延" tabindex="-1"><a class="header-anchor" href="#时延" aria-hidden="true">#</a> 时延</h3><ul><li>发送时延</li></ul><p>本机进行网络发送的时候，在本机所停留的时间</p><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/计算机网络的性能指标3.png" alt="计算机网络的性能指标3" tabindex="0"><figcaption>计算机网络的性能指标3</figcaption></figure><ul><li>传播时延</li></ul><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/计算机网络的性能指标4.png" alt="计算机网络的性能指标4" tabindex="0"><figcaption>计算机网络的性能指标4</figcaption></figure><ul><li>排队时延</li></ul><p>数据包在网络设备中等待被处理的时间</p><ul><li>处理时延</li></ul><p>数据包到达设备或者目的机器被处理所需要的时间</p><blockquote><p>总时延=发送时延+传播时延+排队时延+处理时延</p></blockquote><h3 id="往返时间-rtt" tabindex="-1"><a class="header-anchor" href="#往返时间-rtt" aria-hidden="true">#</a> 往返时间 RTT</h3><p>RTT(Route-Trip Time) 是评估网络质量的一项重要指标</p><p>RTT 表示的是数据报文在端到端通信中的来回一次的时间</p><p>通常使用 ping 命令查看 RTT</p><h2 id="物理层概述" tabindex="-1"><a class="header-anchor" href="#物理层概述" aria-hidden="true">#</a> 物理层概述</h2><h3 id="物理层作用" tabindex="-1"><a class="header-anchor" href="#物理层作用" aria-hidden="true">#</a> 物理层作用</h3><ul><li><p>连接不同的物理设备</p></li><li><p>传输比特流(01010101011...)</p></li></ul><h3 id="传输介质" tabindex="-1"><a class="header-anchor" href="#传输介质" aria-hidden="true">#</a> 传输介质</h3><ul><li>双绞线</li></ul><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/双绞线.png" alt="双绞线" tabindex="0"><figcaption>双绞线</figcaption></figure><ul><li>同轴电缆</li></ul><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/同轴电缆.png" alt="同轴电缆" tabindex="0"><figcaption>同轴电缆</figcaption></figure><ul><li>光纤</li></ul><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/光纤.png" alt="光纤" tabindex="0"><figcaption>光纤</figcaption></figure><ul><li>无线介质：红外线，无线，激光</li></ul><h3 id="信道" tabindex="-1"><a class="header-anchor" href="#信道" aria-hidden="true">#</a> 信道</h3><p>信道是往一个方向传送信息的媒体</p><p>一条通信电路包含一个接收信道和一个发送信道</p><p>单工通信信道：只能一个方向通信，没有反方向反馈的信道，（有线电视、无线电收音机）</p><p>半双工通信信道：双方都可以发送和接收信息，不能双方同时发送，也不能同时接收，（非常落后）</p><p>全双工通信信道：双方都可以同时发送和接收信息（网线）</p><h2 id="分用-复用技术" tabindex="-1"><a class="header-anchor" href="#分用-复用技术" aria-hidden="true">#</a> 分用-复用技术</h2><p>解决信道利用率低的问题</p><p><strong>无需关注细节</strong></p><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/分用复用.png" alt="分用复用" tabindex="0"><figcaption>分用复用</figcaption></figure><h2 id="数据链路层概述" tabindex="-1"><a class="header-anchor" href="#数据链路层概述" aria-hidden="true">#</a> 数据链路层概述</h2><p>解决：封装成帧，透明传输，差错检测</p><h3 id="封装成帧" tabindex="-1"><a class="header-anchor" href="#封装成帧" aria-hidden="true">#</a> 封装成帧</h3><p>“帧”是数据链路层数据的基本单位</p><p>发送端在网络层的一段数据前后添加特定标记形成“帧”</p><p>接收端根据前后特定标记识别出“帧”</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>物理层不会管你’帧‘不’帧‘，只管比特流的传输。层与层之间相互独立，解耦。</p></div><p>封装成帧的过程：</p><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/封装成帧的过程.png" alt="封装成帧的过程" tabindex="0"><figcaption>封装成帧的过程</figcaption></figure><p>帧首部<code>SOH</code>:00000001 和尾部<code>EOT</code>:00000100<strong>是特定的控制字符</strong>（特定比特流）</p><h3 id="透明传输" tabindex="-1"><a class="header-anchor" href="#透明传输" aria-hidden="true">#</a> 透明传输</h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p><code>透明</code>：一种实际存在的事物却又看起来不存在一样</p></div><p><strong>即使控制字符在帧数据中，但是要当做不存在的去处理</strong></p><p>数据里面恰好有这些特定比特流怎么办？<strong>对数据中的控制字符进行特殊处理</strong>，在它的前面加一个转义字符</p><p>数据中也出现转义字符咋办？转义字符前再加一个转义字符</p><p><strong>这种处理类似于编程语言中的转义字符</strong></p><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/透明传输.png" alt="透明传输" tabindex="0"><figcaption>透明传输</figcaption></figure><p><strong>注</strong>：<code>ESC</code>转义字符</p><h3 id="差错检测" tabindex="-1"><a class="header-anchor" href="#差错检测" aria-hidden="true">#</a> 差错检测</h3><p><strong>物理层只管传输比特流，无法控制是否出错</strong></p><h4 id="奇偶校验码" tabindex="-1"><a class="header-anchor" href="#奇偶校验码" aria-hidden="true">#</a> 奇偶校验码</h4><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/奇偶校验码.png" alt="奇偶校验码" tabindex="0"><figcaption>奇偶校验码</figcaption></figure><p>局限性</p><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/奇偶校验码局限性.png" alt="奇偶校验码局限性" tabindex="0"><figcaption>奇偶校验码局限性</figcaption></figure><h4 id="循环冗余校验码-crc" tabindex="-1"><a class="header-anchor" href="#循环冗余校验码-crc" aria-hidden="true">#</a> 循环冗余校验码-CRC</h4><p>一种根据传输或保存的数据而<strong>产生固定位数校验码</strong>的方法</p><p><strong>检测</strong>数据传输或者保存后可能出现的错误</p><p>生成的数字计算出来并且<strong>附加到数据后面</strong></p><h5 id="模-2-除法" tabindex="-1"><a class="header-anchor" href="#模-2-除法" aria-hidden="true">#</a> 模 2 除法</h5><p>模 2 除法它既不向上位借位，也不比较除数和被除数的相同位数值的大小，<strong>只要以相同位数进行相除即可</strong>。</p><p>原则：</p><p>1、被除数的首位为 1，商为 1</p><p>2、被除数的首位为 0，商为 0</p><p>3、模 2 除法等同于按位异或，要保证每次除完首位都为 0，才能进行右移</p><p>异或运算：</p><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/异或运算.png" alt="异或运算" tabindex="0"><figcaption>异或运算</figcaption></figure><p>4、计算时每次右移一位，当被除数的位数小于除数，其为余数</p><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/模2除法.jpg" alt="模2除法" tabindex="0"><figcaption>模2除法</figcaption></figure><h5 id="过程" tabindex="-1"><a class="header-anchor" href="#过程" aria-hidden="true">#</a> 过程</h5><ol><li>选定一个用于校验的多项式<strong>G(x)</strong>，并在数据尾部添加<strong>r 个 0</strong>(多项式 G(x)最高阶个 0)</li></ol><blockquote><p>G(x)是协议规定的,不同的协议使用不同的 G(x)</p></blockquote><ol start="2"><li><p>将添加 r 个 0 后的数据，使用<strong>模&quot;2″除法</strong>除以<strong>多项式的位串</strong></p></li><li><p><strong>得到的余数</strong>填充在<strong>原数据 r 个 0 的位置</strong>得到可校验的位串</p></li></ol><p>接收端接收的数据除以 G(x)的位串，根据余数判断出错(余数为 0 就没有出错)</p><p>CRC 的错误检测能力与位串的阶数 r 有关</p><p>数据链路层只进行数据的检测，不进行纠正，直接把错误的数据丢掉。</p><p>eg:使用 CRC 计算 101001 的可校验位串</p><ol><li>第一步</li></ol><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/CRC.png" alt="CRC" tabindex="0"><figcaption>CRC</figcaption></figure><ol start="2"><li>第二步</li></ol><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/CRC2.png" alt="CRC2" tabindex="0"><figcaption>CRC2</figcaption></figure><ol start="3"><li>第三步</li></ol><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/CRC3.png" alt="CRC3" tabindex="0"><figcaption>CRC3</figcaption></figure><h3 id="最大传输单元-mtu" tabindex="-1"><a class="header-anchor" href="#最大传输单元-mtu" aria-hidden="true">#</a> 最大传输单元 MTU</h3><p>数据链路层的数据帧也不是无限大的,长度不能超过 MTU</p><p>数据帧过大或过小都会影响传输的效率</p><p>以太网 MTU 一般为 1500 字节</p><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/路径MTU.png" alt="路径MTU" tabindex="0"><figcaption>路径MTU</figcaption></figure><h3 id="以太网协议详解" tabindex="-1"><a class="header-anchor" href="#以太网协议详解" aria-hidden="true">#</a> 以太网协议详解</h3><p>MAC 地址（物理地址、硬件地址）</p><p>每一个设备都拥有唯一的 MAC 地址</p><p>MAC 地址共 48（12*4）位，使用十六进制表示</p><p>以太网（ Ethernet）是一种使用广泛的局域网技术</p><p>以太网是一种应用于数据链路层的协议</p><p>使用以太网可以完成相邻设备的数据帧传输</p><p>以太网数据格式</p><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/以太网协议数据格式.png" alt="以太网协议数据格式" tabindex="0"><figcaption>以太网协议数据格式</figcaption></figure><p>MAC 地址表</p><p>映射关系</p><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/MAC地址表.png" alt="MAC地址表" tabindex="0"><figcaption>MAC地址表</figcaption></figure><p>发送数据帧</p><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/发送数据帧.png" alt="发送数据帧" tabindex="0"><figcaption>发送数据帧</figcaption></figure><p>如果无法获取目的 mac 地址对应的硬件接口信息，</p><figure><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/发送数据帧2.png" alt="发送数据帧2" tabindex="0"><figcaption>发送数据帧2</figcaption></figure><h2 id="计算机网络概述篇-面试常考题" tabindex="-1"><a class="header-anchor" href="#计算机网络概述篇-面试常考题" aria-hidden="true">#</a> 计算机网络概述篇-面试常考题</h2><ul><li>计算机网络的七层模型从顶往下分别是什么？请按顺序列举出来。</li></ul><blockquote><p>应用层、表示层、会话层、传输层、网络层、数据链路层、物理层。</p></blockquote><ul><li>现在开发者更喜欢使用 TCP/IP 四层模型来划分计算机网络，为什么 TCP/IP 四层模型会取代 OSI 七层模型被广泛使用？</li></ul><blockquote><p>①OSI 的专家缺乏实际经验、他们基于理论来设计的 ②OSI 标准置顶周期过长，按 OSI 标准生产的设备无法及时进入市场 ③OSI 模型设计得并不合理，一些功能在多层中重复出现</p></blockquote><ul><li>ARP 协议、RARP 协议属于计算机网络的哪一个层次？</li></ul><blockquote><p>数据链路层（这主要是一个归类的问题，这两个协议准确来说是工作在数据链路层和网络层之间，一般是把他归为数据链路层的协议）</p></blockquote><ul><li>IP 协议、ICMP 协议属于计算机网络的哪一个层次？</li></ul><blockquote><p>网络层</p></blockquote><ul><li>传输层最重要的两个协议是什么？</li></ul><blockquote><p>TCP 协议、UDP 协议</p></blockquote><ul><li>常见的应用层协议有 HTTP 协议、FTP 协议等，你还能列举一些常见的应用层协议吗？</li></ul><blockquote><p>HTTP、FTP、SMTP、DNS、POP3、Telnet、TFTP、DHCP 等</p></blockquote><ul><li>路由器工作在计算机网络的哪几个层次？</li></ul><blockquote><p>物理层、数据链路层、网络层</p></blockquote><ul><li>现代网络设备互联的两种模式分别是什么？他们有什么特点？</li></ul><blockquote><p>客户 - 服务端模式、对等连接模式。客户 - 服务端模式由服务端提供网络服务，客户端使用服务，常常表现为一个服务端，多个客户端的连接模式。对等连接模式不分客户端和服务端，只要两个主机都运行了对等连接软件（P2P 软件），它们就可以进行平等的、对等连接通信</p></blockquote><ul><li>时延是判断计算机网络质量的重要标准，网络时延由哪几个部分组成？</li></ul><blockquote><p>网络时延可以划分成发送时延、传播时延、排队时延、处理时延几个部分</p></blockquote><ul><li>物理层主要的作用是什么？</li></ul><blockquote><p>物理层主要的作用是连接不同的网络设备并在网络设备之间传输比特流</p></blockquote><ul><li>请列举物理层常见的传输介质。</li></ul><blockquote><p>有线传输（铜线、光纤），无线传输</p></blockquote><ul><li>什么是信道，什么是单工信道、半双工信道、全双工信道？</li></ul><blockquote><p>信道是往一个方向传送信息的媒体，单工信道指的是只能发送或者接收的信道，半双工信道指的是双方都能发送和接收信息但是不能同时发送或同时接收的信道，全双工信道指的是双方可以自由发送和接收信息的信道</p></blockquote><ul><li>数据链路层的三个重要功能分别是什么？</li></ul><blockquote><p>封装成帧、透明传输、差错检测</p></blockquote><ul><li>物理层只负责比特流的传输，这些数据在数据链路层称为什么？</li></ul><blockquote><p>数据帧</p></blockquote><ul><li>为了界定区分一个单独的数据帧，数据链路层通常会做什么操作？</li></ul><blockquote><p>在数据的头部和尾部加入特殊比特位</p></blockquote><ul><li>假设有数据 00100101 需要传输，目标机器接收到的数据为 10100100，请问使用奇偶校验码是否可以检测出错误？</li></ul><blockquote><p>不能，因为奇偶校验位只能检测单个比特位出现的错误</p></blockquote><ul><li>假设有数据 1101011011 需要传输，采用 CRC 的生成多项式为 P (X)=X^4+X+1，请计算添加了 CRC 校验码之后的数据。</li></ul><blockquote><p>多项式位串为：10011，模二除法得到余数 1110，所以得到结果 11010110111110</p></blockquote><ul><li>什么是 MAC 地址？如何查看本机的 MAC 地址？MAC 地址有什么作用？</li></ul><blockquote><p>MAC 地址也称为物理地址、硬件地址，通过在 windows 系统下输入命令 ipconfig 可以查看网络设备的 MAC 地址，MAC 地址使用 48 个比特位标记一个物理设备</p></blockquote><ul><li>请简述以太网的工作过程。MAC 地址在其中起到了什么作用？</li></ul><blockquote><p>以太网（Ethernet）是一种是使用广泛的局域网技术、以太网是一种应用于数据链路层的协议、使用以太网可以完成相邻设备的数据帧传输。</p></blockquote><blockquote><p>在一个以太网里边，现在有 3 台计算机 A、B、C。都连接了路由器 D，如果 A 想发送信息给 B，就必须通过路由器才知道这个信息是发送给谁的，路由器怎么就知道发送给谁呢？因为路由器里边有个叫 MAC 地址表的东西，它保存了连接它自身的计算机的 MAC 地址和映射的硬件接口，通过 MAC 地址，就可以找到对应要发送的端口，就好比键值对。</p></blockquote><blockquote><p>以太网发送的数据由 5 部分组成：目的地址、源地址、类型、帧数据、CRC</p></blockquote><blockquote><p>目的地址（6 个字节，即 MAC 地址）、源地址（6 个字节），类型（2 个字节，0800 为 IP 数据报，0806 为 ARP 请求/响应，8035 为 RARP 请求/答应）、帧数据（46~1500 字节），CRC（4 字节，循环冗余校验码）。</p></blockquote><blockquote><p>MAC 地址作用:以太网协议通过 MAC 地址和硬件接口的映射关系了解到通过具体哪个接口把数据发送给下一跳。</p></blockquote><h2 id="重要概念" tabindex="-1"><a class="header-anchor" href="#重要概念" aria-hidden="true">#</a> 重要概念</h2><ul><li>计算机网络</li><li>ISP</li><li>OSI 七层模型</li><li>TCP/IP 四层模型</li><li>C/S 模式</li><li>P2P 模式</li><li>RTT</li><li>信道</li><li>奇偶校验码</li><li>CRC 循环冗余校验码</li><li>MTU</li><li>路径 MTU</li><li>以太网</li></ul>',179);function h(f,d){const a=t("ExternalLinkIcon");return c(),o("div",null,[s,i("blockquote",null,[i("p",null,[i("a",r,[g("什么是耦合、解耦"),l(a)])])]),u])}const k=e(p,[["render",h],["__file","概述篇.html.vue"]]);export{k as default};
