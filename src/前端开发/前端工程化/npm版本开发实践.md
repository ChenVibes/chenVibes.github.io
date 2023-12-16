---
title: npm版本开发实践
star: true
tag: 前端工程化
date: 2023-12-16
category: 前端开发
---

### 1. 开发阶段 beta

- 更改发布第一个 beta 测试版本： 如下

![更改发布第一个 beta 测试版本](https://pic4.zhimg.com/80/v2-bd3d93e723ebf4f823b1f232abab5c77_720w.webp)

- 更改发布第二个 beta 测试版本： 如下

![更改发布第二个 beta 测试版本](https://pic4.zhimg.com/80/v2-85e22b693c0e16347bd62faddea6ee1f_720w.webp)

```bash
npm version prerelease --preid=beta

packjsion version 1.0.0-beta.1

npm publish --tag=beta
```

- 修复阶段 patch

发布稳定版本 1.0.0 如下

![发布稳定版本 1.0.0](https://pic4.zhimg.com/80/v2-9e33f807d3f786a2948006a75fb6bf27_720w.webp)

- 修复 bug 发布

![修复 bug 发布](https://pic2.zhimg.com/80/v2-9bf8ef6b1e31a94799afce778e709265_720w.webp)

小版本 minor（bug 修复完成 发布小版本）
![bug 修复完成 发布小版本](https://pic3.zhimg.com/80/v2-c8b414d06d48e957941ac4556b21fdba_720w.webp)

- 小版本迭代开发 beta

```bash
# 1.2.0-beta.0

npm version prerelease --preid=beta
package.json version 1.2.0-beta.0

npm publish --tag=beta

# 1.2.0-beta.1

npm version prerelease --preid=beta
package.json version 1.2.0-beta.1

npm publish --tag=beta

# 发布修复 patch

npm version patch
# 1.2.0 ...

```

- 完成下一个大版本迭代

大版本 major
![完成下一个大版本迭代](https://pic2.zhimg.com/80/v2-4bdaa4135e1dbdeb01d62d5d43578575_720w.webp)

### 2. 撤销发布

- 废弃

  > 此包内容已经过时，没有了维护的价值 `npm deprecate <pkg>[@<version>] <message>`

- 删除

npm 不鼓励任何形式的删除，主要因为我们发布的包可能已经被其他人引用，如果我们删除了此包，其他人在重新安装含有我们包的依赖的工程时，出现找不到包问题。

```bash
npx force-unpublish pkg <message>
# 查看 versions

npm view pkg
# --- latest

npm view pkg versions

# --- list
```
