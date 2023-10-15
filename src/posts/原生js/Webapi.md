---
    icon: pen-to-square
    date: 2018-08-08
    category: 
      - 原生js
    tag:
      - js
---

### 一、概念

- web-api=BOM+DOM
- BOM 操作浏览器功能的方法（刷新 返回）
- DOM 文档对象模型，DOM 把页面中所有的东西都一一对应成了一个对象，我们操作页面中元素的时候，只要操作对象，对象有方法和属性

### 二、DOM 经常进行的操作

- ##### 1.获取页面中的元素
  - 节点：页面中所有的东西都可以称之为节点，标签节点，注释节点，属性节点、 文本节点
  - 元素：页面中的标签节点
  - 文档：document 指的是整个页面
- ###### 根据 id 获取元素：
  document.getElementById(" " );
  - 参数：字符串类型的 id；
  - 返回值：元素，如果 id 不存在返回 null
  - getElementById 只能通过 document 调用
- ###### 根据标签名获取元素：
  获取的是页面中所有的标签名对应元素
  - get：获取 elements：元素
  - by：通过 tagNmae：标签名
    document.getElementsByTagName( );
  - 参数：字符串类型的标签名
  - 返回值：伪数组，伪数组不是数组，但是可以跟数组一样遍
    历，也可以通过下标操作， 不能用数组的方法（push 等）返回的都是伪数组；
- ###### 注意：不能直接给伪数组注册事件，要注册事件，必须把伪数组里面的元素取出来，才能注册事件

```js
decument.getElementsByTagName("li") 获取页面中所有的li
box.getElementsByTagName("li") 获取box里所有的li
//getElementById 、getElementsByTagName没有兼容性问题 推荐使用
```

- ###### 根据 name 获取元素：
  document.getElementsByName( );
- ###### 根据类名获取元素：
  document.getElementsByClassName( );
  var lis = document.getElementsByClassName("beauty")
- ###### 根据选择器获取元素：
  document.querySelector( );
  - query:查询，selector：选择器
  - 参数：字符串类型的 css 选择器；
  - 返回值：元素，如果是多个元素，只会返回第一个
    其他获取方式：
- 通过 css 选择器获取元素(一个元素)
- document.querySelector("#box");
- document.querySelector(".demo");
- document.querySelector("div");
- 获取多个元素：document.querySelectorAll( );
- 参数：字符串类型 css 选择器
- 返回值：伪数组
- ##### 2.对元素进行操作(设置其属性或调用其方法)
- ##### 3.动态创建元素

### 三、事件(什么时机做相应的操作)

- ###### 1，事件三要素：
  - 事件源 ：给谁注册事件 this
  - 事件名称 ：注册一个什么事件 click
  - 事件处理程序：触发事件时要干什么
  - 注册事件：把一个匿名函数赋值给了 btn.onclick 属性，没有调用函数，
  - 注册事件： 事件源.on+事件名称
    每次点击的时候，浏览器回去调用一个你绑定的 function
    函数页面加载的时候不执行，点击的时候需要触发事件会执行函数
- ###### 2， this

```js
    //this指的事件源，指的是当前对象，在事件里面不能使用i了，原因：点击的 时候，i已经结束循环了，一定要在function里面用才有意义，this谁调用，指向谁
    inputs[i].onclick = function () {
    // //当我们点击的时候，i已经循环完了，在事件里头，这个i不能用。
    //在事件里面，有一个关键字，this，this指的是事件源，你点击了谁，this就是谁
    //this 当前对象 通过this就能找到点击的那个按钮。
    在定时器中不要用this，this调用的是window
    this.className = "now";
    }
```

- ###### 3、给 a 标签注册事件

```JS
//a标签点击的时候，肯定要跳转，注册点击事件时如果不想跳转
return false；

//阻止页面跳转方式二：
<a hreaf=""> 我是一个连接 </a> //页面跳转了，不写地址，默认跳转
到当前页面，页面刷新了
<a hreaf="#"> 我是一个连接 </a>//页面没跳转，没有刷新，跳转到当前
//页面的锚点，页面最顶端
//hreaf="##" 不跳转，查找不到##的锚点
//hreaf="javascript:void(0);"等同于hreaf="javascript:;" 不跳转，内容地址都不变，
//void（0）等同于undefined,效果比<a hreaf="#">好
```

### 四、标签的普通属性（固有属性）

- ###### 1、title src alt id class href

  对于这些属性来说，标签有这个属性，标签对应的对象也有这些属性，我们可以操作对象的这些属性，达到修改标签属性的目的；
  class 属性对应 className

- ###### 2、固有属性：标签本来就有的属性 id，name，value，classname

  标签固有的属性，对象也有，我们修改了对象的属性，标签的属性也会跟着改变

- ###### 3、自定义属性：标签没有这个属性，我们自己添加的属性

  标签的自定义属性，对象没有对应的属性，获取不到，可以存储
  一些信息 如果是固有属性 box.value

- ###### 4、获取属性（固有属性和自定义属性，通常
  - 参数 name 属性名
  - 返回值：对应的属性值
  - 获取标签的属性（所有属性）
    box.getAttribute（name）；

###### 设置标签属性：

- 参数：name，设置的属性名，value 设置的属性值
- 返回值：没有返回值
  box.setAttribute（"title","嘿嘿"）
- 移除属性：
- 参数：name 移除那个属性
  box.removeAttribute("title")
  box.title=""

###### 如何获取当前元素的下标

给当前一个 input 存一个下标

- 1，inputs[i].title=i;
- 2.inputs[i].index=i;
- 3.var index=inputs[i].getAttribute("index")
  inputs[i].index=i

### 五、表单标签的属性

###### type、value、name、disabled、selected、checked

- disabled：可以禁用一个 input，
- disabled：不需要值，只要谢了 disabled，不管值是什么，都禁用，想要不禁用，不写就好了

```js
  <input type =“button” value=“按钮” disabled>
//selected 默认被选中
<select name=" " id = " ">
<option> 张飞 </option>
<option> 赵云 </option>
<option selected>刘备 </option>
//checked 属性设置或返回 checkbox 是否应被选中。

//快速预览快捷键：Alt+F2
//shift+回车 快速转到下一行
```

- seleced 用于单选，:selected 一般是下拉框的属性
- :checked 多选 一般是 checkbox 和 radio 的属性，

###### disabled、selected、checked 布尔类型的属性

- 特点：对象中，除了 true 就是 false，true：生效；false：不生效
- outerHTML 包含了元素自身，而 innerHTML 包含当前元素的子元素,innerText 和 outerText 在获取时是相同效果，但在设置时，innerText 仅设置标签内的文本，而 outerText 设置包括标签在内的文本。
- innerText：内部的内容
- innerHTML：获取的标签的内容（文本+标签）
- 会替换原来的内容 h6 标签生效

###### 简单的说 innerHTML 和 outerHTML、innerText 与 outerText 的不同之处在于：

- 1）、innerHTML 与 outerHTML 在设置对象的内容时包含的 HTML 会被解析，而 innerText 与 outerText 则不会。
- 2)、在设置时，innerHTML 与 innerText 仅设置标签内的文本，而 outerHTML 与 outerText 设置包括标签在内的。

###### innerText IE 支持 textConent 火狐浏览器支持

```js
//思路：如果innerText能获取到；就用innerText获取；如果获取不到就用textContent获取到
if(typeof div.innerText==="string"){
console.log(div.innerText);
}else{
console.log(div.textContent);}

var div =document.querySelector（“div”）
div.innerText=“<h6>我是别人的标签</h6>”
//innerText：内部的文本
//innerText：获取的标签的文本（文本）
//innerText：会替换原来的内容，h6标签没生效，会对标签转义

//innerHTML：标准提出来，所以没有兼容性问题
//innerText：后来IE浏览器提出来，所以老版本的火狐浏览器不支持，但是浏览器就支持了，不识别标签

```

body 在页面中是唯一的，如果获取 body 可以用 document.body

###### 处理浏览器兼容性的问题

- 能力检测：判断使用 innerText 能否获取内容，如果能获取，就用 innerText 获取，如果获取不到，就用 textContent 获取

```js
if(typeof div.innerText==="string"){
console.log(div.innerText);
}else{
console.log(div.textContent);
}

//参数：element 获取谁的innerText
function getInnerText(element){
if(type div.innerText==="string"){
console.log(div.innerText);
}else{
console.log(div.textContent);
}
return div.textContent;
}
//代理检测：navigator.userAgent:可以判断浏览器的类型和版本
//怪癖检测：针对ie6,7,8 attacheEvent只有IE浏览器支持
```

### 六、事件

##### ① 注册事件的几种方法

- onclick 鼠标点击时触发 单击
- ondblclick 双击
- onmouseover:当鼠标经过的时候触发
- onmouseout：当鼠标离开的时候触发
- onmousedown 鼠标按下的时候触发
- onmouseup 鼠标弹起的时候触发
- onchange 事件 事件会在域的内容改变时发生。
- onchange 事件也可用于单选框与复选框改变后触发的事件。
- oninput 　　当 input 元素的 value 属性发现变化时触发，该事件是冒泡的，如果 window 对象支持该事件，input 元素同样也支持。

###### transitionend 事件 在 CSS transition 完成的时候触发。

如果 transition 在完成前被删除（例如 remove 掉 transition 属性），则不会触发。

- onfocus 与 onblur
- onfocus 当光标获取到 input 框的焦点时触发，有一个光标在闪
- onblur 当光标失去焦点时触发
- onkeydown 键盘按下事件 文本框获取的值是上一次
- onkeyup 键盘弹起事件 文本框获取的值是对的（常用）
- 注意：keyup keydown 只能给有焦点的东西注册事件，比如 text 框，或者 document，不能给单个 div 注册

##### ② 事件对象

###### 1.获取事件对象

- 注册事件的时候，给 function 添加一个形参 e，通过 e 接收到事件对象，有兼容问题

- IE678 把事件对象绑定到了 window.event 事件上
  e=e||window.event //获取事件对象的兼容性代码

###### 2、事件对象中的常用属性

- screenX 与 screenY 光标相对于屏幕左上角的水平位置和垂直位置
- clientX 与 clientY 光标相对于屏幕可视区左上角的水平位置和垂直位置
- pageX 与 pageY 光标相对于整个文档左上角的水平位置和垂直位置

###### 3.注册事件新方法

- addEventListener：注册事件
- 参数 1：事件类型：click
- 参数 2：function 触发的时候，这个 function 会被调用，给一个函数的名字，或给一个匿名函数；
- 参数 3：是否使用事件捕获，默认值：false，是事件冒泡

document.addEventListener("click",function(){
console.log("呵呵")}

- 清除事件的方法：
  removeElementListener，如果你想要注册的事件能够移除，必须使用命名函数
- 参数 1：移除的事件类型
- 参数 2：移除哪个 function，函数名

IE678 attachEvent 与 detachEvent 不支持事件冒泡，默认事件捕获

- 事件流

###### body div span 都注册了点击事件，我在 span 上点击了一下，相当于三个都被点了，触发顺序问题：

- 火狐：事件捕获：先触发 body，在触发 div，最后触发 span
- IE：事件冒泡：先触发 span，再触发 div，最后触发 body；

e.target：现代浏览器获取点中的元素
e.srcElment：ie678 旧浏览器获取点中的元素

###### 4.事件冒泡带来的影响

阻止事件冒泡：e.stopPropagation（）；
阻止浏览器默认行为:e.preventDefault();
propagation:传播

- 事件的三个阶段：
  1，事件的捕获阶段
  2，事件的目标阶段（触发自己的事件）
  3，事件的冒泡阶段

- 键盘的事件对象：keyCode 输出的是键盘码

### 七、样式操作

###### class（css）

- 缺点：如果样式频繁的发生改变，比较麻烦
- 使用场景：一次性修改多个方式

###### style

- box.style 是一个对象，这个对象有很多属性，style 中能写的样式这里都有

```js
box.style.borderRadius=“50%”
box.style.backgroundColor=“”
```

- 缺点：如果一次性改很多样式，很麻烦
- 使用场景：样式频繁的发生改变
- 注意：box.style 始终对应的都是行内样式，获取的也是行内样式，设置的也是行内样式
  box.style 通常只用来设置样式，很少用来获取样式

###### classList 属性用于获取元素类名的集合

- classList 属性返回元素的类名，作为 DOMTokenList 对象。
- 该属性用于在元素中添加，移除及切换 CSS 类。
- classList 属性是只读的，但你可以使用 add() 和 remove() 方法修改它。

length 返回类列表中类的数量该属性是只读的

- add(class1, class2, ...) 在元素中添加一个或多个类名。如果指定的类名已存在，则不会添加 /td>
- contains(class) 返回布尔值，判断指定的类名是否存在。
  - 可能值：
  - true - 元素包已经包含了该类名
  - false - 元素中不存在该类名
- item(index) 返回类名在元素中的索引值。索引值从 0 开始。如果索引值在区间范围外则返回 null
- remove(class1, class2, ...) 移除元素中一个或多个类名。
- 注意： 移除不存在的类名，不会报错。
- toggle(class, true|false) 在元素中切换类名。

###### data-自定义属性

```html
<div id="testDiv" data-cd="24">Click Here</div>
// 使用驼峰命名（需要特定注意的地方）
<div id="testDiv" data-cartCd="24">Click Here</div>
```

###### 取绑定的值方法

- 原生 js 的取法

```js
var testDiv = document.getElementById('testDiv')
//简单的单词：
console.log(testDiv.dataset.cd)
//复杂的驼峰命名单词：
console.log(testDiv.dataset.cartcd)
//注意是“cartcd”,不管
//是不是驼峰命名，一切都是小写。
```

- 使用 jquery

```js
$(“#testDiv”).data(“cd”);
$(“testDiv”).data(“cartcd”);
```

###### 修改绑定数据

原生 js 方式:
testDiv.dataset.cartcd= “新值”
Jquery 方式：
$(“testDiv”).data(“cartcd”,”新值”)

###### 获取元素计算后的样式

- window.getComputedStyle(box，null );//IE11 以下不支持
- box.currentStyle//IE8 以上支持
  - 参数 1：元素，获取谁的样式，
  - 参数 2：伪元素，固定为 null，
- 兼容封装

```js
function getStyle(element,attr){
var result=null;//定义一个空对象
if("getComputedStyle" in window){
resutl=window.getComputedStyle(element,null)
}else{
result=element.currentStyle;
}
return resutl[attr];
}
调用 getStyle(box,"width")
function getStyle(element){

if("getComputedStyle" in window){
return window.getComputedStyle(element,null)
}else{
return element.currentStyle;
}

}
getStyle(box).width//调用
```

### 八、节点操作

###### 文本节点，注释节点 coment，标签节点

- childNodes：可以获取到某个元素所有的孩子节点（不用）
- nodeType：节点类型，判断一个节点是不是标签，只要看
- nodeType===1 就可以

##### 1、找节点

- 找孩子节点（只读属性）
  children：动态更新，元素的长度是变化的；没有兼容性，可以获取某个元素中所有的孩子元素，但不能用来添加元素（常用）
  children 的使用场景：出现不同种类的标签名

  - 当前元素第一个孩子节点

  box.firstChild 等于 box.childNodes[0];

  - 当前元素第一个孩子元素

box.firstElementChild 相同于 box.children[0]
如果没有子元素，返回 null；

- 当前元素最后一个孩子节点
  box.lastChild 相同于 box.childNodes[childNodes.length-1];
- 当前元素最后一个孩子元素
  box.lastElementChild 相同于 box.children[children.length-1]

- 找兄弟节点（只读属性） - 当前元素上一个兄弟节点
  box.previousSibling - 当前元素上一个兄弟元素
  box.previousElementSibling
  不会获取空文本节点 - 当前元素下一个兄弟节点
  box.nextSibling - 当前元素下一个兄弟元素
  box.nextElementSibling

- 找父元素
  获取的是当前元素的父节点
  box.parentNode

##### 2、添加节点

###### box.appendChild(p)

append 追加 child 孩子

功能：box 把 p 当成孩子添加到最后面

```HTML
<select multiple id="s1"> multiple:多选
```

###### box.insertBefore（newchild,refChild）

功能：把 newChild 添加到 refChild 的前面，没有兼容性问题 - 第一个参数：newChild 需要添加的元素 - 第二个参数：refChild 添加到谁前面，如果 reChild 为 null 添加到
最后面

```JS
ul.inserBefore(newChild.ul，children[0]) //添加到最前面
ul.inserBefore(newChild.ul，null）//添加到最后面
```

##### 3、克隆节点

p.cloneNode(true);

- 参数：布尔值；deep 是否深度复制，默认 false
- 如果参数是 false，表示浅复制，只复制标签，不复制内容
- 参数是 true，表示深复制，复制内容+标签；

返回值：克隆出来的节点，克隆出来的节点跟原来的节点没有关系

功能：在内存中克隆了一个节点；

##### 4、创建节点

###### 动态创建元素

- document.write(" ");（基本不用）
- 缺点：1.只能往 document 中写内容 2.如果在事件中使用 document.write，会把原来的页面覆盖

###### innerHTML 特性：能够识别 HTML 标签

- 缺点：先把原来的内容干掉，在赋值新的内容，如果使用 innerHTML 创建
  元素的话慎用效率低
  box.innerHTML +="<button>我是一个按钮</button>";

- creatElement(重点）
- var button=document.creatElement（"button"）;
- 语法:ducument.creatElement(tagName); 1.创建 2.设置内容 3.添加

##### 5、删除节点

- 语法:pareng.removeChild(child);
- 作用：删除 child 元素
- 获取文本域的内容 文本框获取值都是用 value
- 功能：删除当前节点的某个子节点

### 九、BOM

###### BOM 对象有:

- window 对象 ，是 JS 的最顶层对象，其他的 BOM 对象都是 window 对象的属性；
- document 对象，文档对象；
- location 对象，浏览器当前 URL 信息；
- navigator 对象，浏览器本身信息；
- screen 对象，客户端屏幕信息；
- history 对象，浏览器访问历史信息；

###### ① window 对象

- 1、window 对象是 js 中的老大，顶级对象
  alert() console.log() document confirm 都是 window 对象的
- 2，window 特别常用，我们可以省略不写
- 3，我们定义的全局变量，声明的函数都是 window 的

- 给 window 注册的事件有：onresize onload onscroll
- window.onload 事件 当文档加载完成时触发
- 使用场景：涉及到获取图片宽度高度，需要用 window.onload 等待
  页面加载完成所有文件才会触发
- window.open 与 window.close
- window.open( ) 开启一个新窗口
- 第一个参数：开启一个新窗口，打开的地址
- 第二个参数：\_ self \_blank
- 第三个参数：设置新打开的窗口的属性
  window.close 关闭窗口

###### ② 定时器

###### 1、延时定时器

setTimeout（）
//timeout 超时
第一个参数：function 函数名 或者直接写一个匿名函数
延迟多久之后调用
第二个参数：deplay 延迟多长时间 单位：毫秒
特点：只会执行一次代码

function fn(){

setTimeout（fn，3000）

clearTimeout( ) 清除定时器
注意：开启演示定时器 让 function 延迟一段时间再调用，这段代码
不是我们调用，而是浏览器帮我们调用

###### 2、间歇定时器

特点：只要不清除，代码会无限的执行下去
setInterval（）
参数 1：function 函数名或者匿名函数
参数 2：delay：延迟时间

注意：定时器 是不会阻碍代码执行的，也就是说开
定时器仅仅是告诉浏览器你过一段时间给我调用 function
就行了
开启定时器（异步操作），当主线程的代码执行完成了，js
才会去事件队列里查看哪些代码要执行，执行完了才去事件队列
查看
clearInterval( )清除定时器

注意：推荐在开启定时器前 要先设置清除定时器；能保证页面只有
一个定时器在执行，在定时器中不要用 this，this 调用的是 window

###### 3.location 对象

href：指的是当前页面的地址，通过 js 实现页面跳转
search：获取参数
location.search

location.reload（）页面刷新 所有依赖的图片不再缓存，重新加载
参数：是否强制刷新，布尔类型，默认是 false
F5 刷新 读缓存 ctrl+F5 强制刷新

###### 4.navigator.userAgen：浏览器版本

| 属性            | 描述                                           |
| --------------- | ---------------------------------------------- |
| appCodeName     | 返回浏览器的代码名。                           |
| appMinorVersion | 返回浏览器的次级版本。                         |
| appName         | 返回浏览器的名称。                             |
| appVersion      | 返回浏览器的平台和版本信息。                   |
| browserLanguage | 返回当前浏览器的语言。                         |
| cookieEnabled   | 返回指明浏览器中是否启用 cookie 的布尔值。     |
| cpuClass        | 返回浏览器系统的 CPU 等级。                    |
| onLine          | 返回指明系统是否处于脱机模式的布尔值。         |
| platform        | 返回运行浏览器的操作系统平台。                 |
| systemLanguage  | 返回 OS 使用的默认语言。                       |
| userAgent       | 返回由客户机发送服务器的 user-agent 头部的值。 |
| userLanguage    | 返回 OS 的自然语言设置。                       |

###### 5.history 对象

- history.back ( ) 后退跟点击浏览器后退按钮一个效果
- history.forward( )前进
- history.go( 1 ) 前进 history.go(-1)后退

javscript:伪协议，页面不跳转，可以执行 js 代码
<a href=“JavaScript：history.go(-1);"></a> 页面后退

###### 6.screen 对象（屏幕）

- screen.width 屏幕的宽度
- screen.height 屏幕的高度
- screen.availWidth 浏览器可以使用屏幕的宽
- screen.availHeight 浏览器可以使用屏幕的高

  - js 三大家族 offset 家族 scroll 家族 client 家族

###### 7.offset 家族（用于获取元素自身的大小和位置）

- offsetWidth 与 offsetHeight
  - 1，offset 获取盒子真实的大小（常用），
  - 2，获取的是数值类型，方便计算；
  - 3，offset 和 children 都是只读属性，只可以获取属性，不能设置属性

```js
// offsetWidth 盒子的宽度 （边框+内边距+内容）
// offsetHeight 盒子的高度
// style.width与style.height
// 1，只能拿到行内样式的属性，拿不到块级样式
// 2，获取到的是字符串类型，需要转换

// 总结：以后要设置一个盒子的宽度 box.style.width
// 获取一个盒子的宽度box.offsetWidth

// parentNode：找最近的父元素
// offsetParent：找最近的有定位的父元素
//
// offsetLeft和offsetRight
// offsetLeft 获取的是当前元素距离offsetParent的真实距离
// offsetleft 获取的是left+margin
// 使用环境：获取盒子的大小和位置

// 参数1：element，获取谁的样式
//参数2：property 样式属性
window.getComputedStyle(element).property 用来获取计算后的样式
```

###### 8.scroll 家族（用户获取盒子内容的大小和位置）

- scrollWidth、scrollHeight、scrollLeft、scrollTop

  - 1、scrollWidth 与 scrollHeight 获取的是盒子内容的真实宽度和高度，
    与盒子大小无关，仅仅与盒子的内容有关。
  - 2、scrollTop 是盒子内容被滚动条卷去的头部的高度；
    scrollLeft 是盒子内容被滚动条卷去的左侧的宽度

  - scroll 家族用的最多的地方就是用来获取页面被卷去的宽度和高度，非常的常用

  - onscroll 事件
  - 对于有滚动条的盒子可以使用 onscroll 注册滚动事件，每滚动一像素，就会触发该事件。通常 onscroll 事件会给 window 注册
  - 使用环境：获取页面滚动条滚动的距离

```js
//如何使用
console.log(scroll().top);//获取页面被卷去的头部的距离
console.log(scroll().left);//获取页面被卷去的左侧的距离
获取页面滚动的距离比较特殊：
window.pageYOffset获取被卷去的头部的距离 （垂直）
window.pageXOffset获取被卷去的左侧的距离 （水平）

document.ducumentElement.scrollTop
document.ducumentElement HTML标签
```

###### 9.client 家族

- client 家族用于获取盒子可视区的大小
- client 家族有 clientWidth、clientHeight、clientLeft、clientTop
  如果内容没有超出盒子范围：clientWidth 与 scrollWidth 相同\*
- clientX 鼠标指针向对于浏览器页面（或客户区）的水平坐标。
- clientY 鼠标指针向对于浏览器页面（或客户区）的垂直坐标。
- 使用环境：client 系列一般用来获取页面的可视区宽高,获取页面可视区的大小
- 现代浏览器：window.innerWidth
- ie678：html 的 clientWidth document.documentElemeng.clientWidth
- onresize:窗口大小发生改变的时候会触发
- 缓动函数封装

### 十、正则表达式

#### 字面量

#### 创建方式

- 1.var reg=/\d/； //digit：匹配数字，包含有数字，不用完全匹配
  reg.test 方法用来校验字符串，所以参数是一个字符串
  reg.test("abc") 返回布尔类型
- 2，var reg=new RegExp（/\d/）；
  / \d /.test("abc111")

#### 元字符：具有特殊意义的字符

- /\d/ 匹配数字【0-9】 只要包含一个就返回 true
- /\D/：非数字 匹配数字外的其他字符
- /\w/：word 单词字符【a-z A-Z 0-9 \_】
- /\W/：非单词字符
- /\s/：表示不可见字符 【 空格 \t（4 个空格）制表符 \n 换行】
- /\S/：表示可见字符
- /./：表示任意字符

#### 正则的优先级

- | 表示或，优先级最低
- （）：提升优先级，优先级最高
- [ ]：表示一个字符的位置，里面表示可以出现的字符
  匹配 a-z 直接的字符
  console.log（/[a-z] /.test("a1111"))
  console.log（/[A-z] /.test("a1111"))

#### 正则边界（精确匹配）

- ^:开始 //[^]:非
- $:结束
- {}表示出现次数
- {n，m}出现次数是 n-m 次；
- {n，}出现 n 次或 n 次以上
- {n}出现 n 次
- \*：表示出现 0 次或 0 次以上；{0，}
- +：表示一次或一次以上；{1，}
- ？：表示 0 次或者一次；{0,1}

```js
test: /\.(jpe?g|png|gif|bmp|webp)$/
//匹配jpeg/jpg/png/gif/bmp/webp
```

#### 正则替换（字符串的方法） replace

var str=" abc，efg，123，abc，134，a "
把所有的，换成！
正则的参数：/\d/g :global 全局的 i：ignore：忽略大小写
str=str.replace（/,/g,"!");

#### 正则匹配（字符串的方法） match

var jsonStr=[
{name：“张三”，
age：18，

]

### 十一、排错的技巧（缩小出错的范围）

- 1，语法错误，webstorm 提示错误。（少个大括号，少个小括号）
- 2，运行时错误，语法没错，但是，代码运行的时候报错（没找到对象）
- 3，不报错（逻辑有问题），最难解决（打断点，可以一行一行的看）
  - 3-1，事件没有注册上
  - 3-2，事件注册上了，但是事件里面的代码有问题
