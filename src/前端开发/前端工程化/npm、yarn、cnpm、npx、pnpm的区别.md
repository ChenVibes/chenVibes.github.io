---
title: npm、yarn、cnpm、npx、pnpm的区别
star: true
tag: 前端工程化
date: 2023-12-16
category: 前端开发
---

## npm

- 介绍：全称 Node Package Manager，是 Node.js 自带的包管理器，平时通过 `npm install` 命令来安装各种 npm 包（比如：`npm install vue-router` ），就是通过这个包管理器来安装的。

### 1. 镜像源设置

```bash
# 查看下载源
npm config get registry

# 绑定下载源
npm config set registry https://registry.npmmirror.com

# 删除下载源
npm config rm registry
# 还原默认源
npm config set registry https://registry.npmjs.org/
```

npm 的 包的版本锁定文件是 package-lock.json ，如果有管理多人协作仓库的需求，可以根据实际情况把它添加至 .gitignore 文件，便于统一团队的包管理。

### 2. npm 的配置文件

对于一个项目来说，我们如何使用 npm 来管理这么多包呢?通过配置文件 package.json

配置文件生成途径

- 方式一：手动从零创建项目，`npm init –y`
- 方式二：通过脚手架创建项目，脚手架会帮助我们生成 package.json，并且里面有相关的配置 如 vue-cli、create-react-app

### 3. npm 配置文件常见的属性

必须填写的属性：name、version

- name 是项目的名称；
- version 是当前项目的版本号；
- description 是描述信息，很多时候是作为项目的基本描述；
- author 是作者相关信息（发布时用到）；
- license 是开源协议（发布时用到）；
- main 属性：设置程序的入口。比如我们使用 axios 模块 const axios = require('axios');如果有 main 属性，实际上是找到对应的 main 属性查找文件的；
- dependencies 是指定无论开发环境还是生成环境都需要依赖的包
- devDependencies 一些包在生成环境是不需要的，比如 webpack、babel 等；`npm install webpack --save-dev`，将它安装到 devDependencies 属性中
- peerDependencies 还有一种项目依赖关系是对等依赖，也就是你依赖的一个包，它必须是以另外一个宿主包为前提的；比如 element-plus 是依赖于 vue3 的，ant design 是依赖于 react、react-dom

### 4. 版本管理

#### 4.1 版本号组成

- major：代表主版本号，通常在需要提交不能向下兼容的情况下对该版本号进行升级

- minor：代表次版本号，通常在新增功能时才对该版本号进行升级

- patch：代表修复版本号，升级该版本号通常代表修复一些 bug，但没有新增功能或者存在不向下兼容的功能

- prerelease：带有该版本号的包通常表示在测试阶段，尚未稳定，通常不建议用户安装。

##### prerelease

> alpha、beta、rc

- alpha: 代表内部测试版，会有很多 Bug，是比 beta 更早的版本，一般不建议对外发布
- beta: 相对 alpha 版本已有了很大的改进，但还是存在一些缺陷，需要经过多次测试来进一步消除
- rc：Release Candidate 顾名思义就是正式发布的候选版本。和 Beta 版最大的差别在于 Beta 阶段会一直加入新的功能，但是到了 RC 版本，几乎就不会加入新的功能了，而主要着重于除错! RC 版本是最终发放给用户的最接近正式版的版本，发行后改正 bug 就是正式版了，就是正式版之前的最后一个测试版

例如：
1.1.0-alpha.1
1.1.0-beta.1
1.1.0-rc.1

#### 4.2 版本 tag 控制

```bash
# 查看tag
npm dist-tag ls vue

# 结果
# beta: 3.2.0-beta.8
# csp: 1.0.28-csp
# latest: 2.6.14
# next: 3.2.20

# 安装
npm install vue@latest latest指向的版本
npm install vue@beta   beta指向的版本

# tag如何指向版本(不打tag 默认为latest)
npm publish --tag beta

# publish tag 修改
npm dist-tag add pkg@1.0.0 latest
```

#### 4.3 npm version 版本升级工具

作用： 自动更改 package.json version 版本

```bash
npm version major # 结果0.0.1->1.0.0
npm version minor # 结果0.0.1->0.1.0
npm version patch # 结果0.0.1->0.0.2
npm version prerelease # 结果0.0.1 -> 0.0.2-0
npm version prerelease --preid=beta  # 结果0.0.1->0.0.2-beta.0
npm version prerelease 0.0.2-beta.0  # 结果0.0.1->0.0.2-beta.0
```

#### 4.4 版本管理-案例实践

##### 4.4.1 基本原则

- 第一个稳定版本号为 1.0.0
- beta 版本号从 0 开始，比如：1.0.0-beta.0
- 使用 npm version 工具进行版本升级(npm 自带)
- prerelease 只保留 beta（仅使用 beta,清爽）
- 只有 latest 和 beta 两个标签
- latest tag 永远指向最新的稳定版本
- beta tag 永远指向最新的 beta 公测版本
- beta 发版， 必须加 --tag beta
- git 仓库和 tag 保持一致

##### 4.4.2 一套模拟完整开发流程实践

> 流程：开发-> 修复 bug -> 小版本 -> 大版本

具体流程
[npm 版本开发实践](./npm版本开发实践.md)

## npx

### 1. 介绍

npx 是 npm5.2 版本新增的一个命令,npx 方便使用一次就丢弃的情况，不会全局安装

例如 create-react-app，以往我们需要安装全局的包。但是使用一次后面几乎就不怎么使用了，非常浪费磁盘空间。现在我们可以用 `npx create-react-app myapp`，用完就删

> 如果第一次使用这个命令，npx 会下载 create-react-app 放在临时文件中，过一段时间会自动清除，注意不会立即清除，我测试发现第二次运行 `npx create-react-app myapp` 不会重新下载，它会从缓存中获取。

### 2. npm init 和 npx 相似

在 npm@6 版本中，增加了一个新命令 `npm init <pkg>`

```bash
# 这两个命令是等价的：
npm init react-app myapp
npx create-react-app myapp
```

`npm init <pkg>`对与 create 开头的脚手架制定了一个特殊命令，例如 create-react-app、create-esm、npm init 下载时会默认对安装的 pkg 包添加 create 前缀，同时像 npx 一样不会全局安装，只是运行一次，后面会删除。
但`npm init <pkg>`不能完全取代 npx，例如运行 `npm init http-server` 本意是想一次性启动一个本地服务 结果报错:
![示例](https://pic1.zhimg.com/80/v2-590c3249eed9cd7932b50cc2804ac660_720w.webp)

> 途中可以看到 http-server 被变成了 create-http-server，所以就找不到该模块，推荐用 npx 就好，至少使用起来更可控。

## yarn

yarn 也是一个包管理器，它和 npm 其实没有本质区别，都是管理和安装包的。只是它解决了早期 npm 的一些问题比如：不支持离线模式、树形结构的依赖、依赖安装不确定性等。为什么说是早期？因为 npm 新版本基本上已经解决了自身的老毛病，两者没有想象中那么大的区别。

### 镜像源设置

```bash
# 查看下载源
yarn config get registry

# 绑定下载源
yarn config set registry https://registry.npmmirror.com

# 删除下载源
yarn config rm registry
# 还原默认源
yarn config set registry https://registry.yarnpkg.com
```

> 从最新版的 npm 和 yarn 来看，他们的安装速度和使用体验并没有多大的差距，yarn 稍胜一筹。

- 安装：`npm install -g yarn`

- 安装包：`yarn add [package]`

- 删除包：`yarn remove [package]`

yarn 相当于 npm 优势（早期）：

这里列出一些早期的 yarn 相对于 npm 比较大的优势：

1. 支持离线安装（npm@5 已支持）
2. 依赖扁平化结构（npm@3 已支持）
3. 依赖安装确定性 yarn.lock（npm@5 增加了 package-lock.json）
4. 安装速度快并行下载
5. 安装失败自动重试
   等等...

## cnpm

cnpm 是阿里巴巴推出的包管理工具，安装之后默认会使用 https://registry.npmmirror.com 这个镜像源。

它的安装命令和 npm 非常一致，通过 cnpm install 命令来安装（比如 cnpm install vue-router）。

### 缺点

cnpm 不生成 版本锁定 lock 文件，也不会识别项目下的 lock 文件，所以还是推荐使用 npm 或者其他包管理工具，通过绑定镜像源的方式来管理项目的包。

## pnpm

pnpm 也是一个包管理器，它巧妙的使用了类似于 linux 的软连接方式，达到一个模块文件多处服用，解决了 yarn、npm 在多个项目安装同一个依赖时会下载重复文件的问题，避免磁盘的浪费，同时大大提升下载速度。

### 镜像源设置

```bash
# 查看下载源
pnpm config get registry

# 绑定下载源
pnpm config set registry https://registry.npmmirror.com

# 删除下载源
pnpm config rm registry
# 还原默认源
pnpm config set registry https://registry.npmjs.org
```

下面是 pnpm 的一些特点：

1. pnpm 运行起来非常的快，超过了 npm 和 yarn。
2. pnpm 采用了一种巧妙的方法，利用硬链接和符号链接来避免复制所有本地缓存源文件。也就是说多个项目相同的依赖只会在某处安装一次，连接过来直接使用，节省了安装时间和瓷盘空间。
3. pnpm 继承了 yarn 和新版 npm 的所有优点，包括离线模式和确定性安装。
4. 但是链接在一些场景下会存在兼容的问题，例如 Electron 应用无法使用 pnpm、部署在 lambda 上的应用无法使用 pnpm

## 总结

1. npm 是一个包管理器，方便开发者分享和下载开源包。经历了许多重大版本的更新，各方面已经和 yarn 在同一水平。
2. npx 是npm@5.2的产物，方便运行本地命令
3. cnpm 是方便中国开发者下载依赖包而诞生的下载器。
4. yarn 解决了 npm@5 之前的一些让人诟病的问题，同时拥有一些其它的优点。例如离线安装、失败自动重试安装和并行下载等。
5. pnpm 通过连接的方式，让多个项目的依赖公用同一个包，大大节省了磁盘空间，比 yarn 和 npm 下载速度快得多，但是也有连接带来的各种兼容问题。

> 从个人角度来说，使用 npm、yarn、pnpm 都是可以的，但是最好是团队都使用同一个管理器。
