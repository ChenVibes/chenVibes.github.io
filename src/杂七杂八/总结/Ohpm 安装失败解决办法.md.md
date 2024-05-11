---
title: Ohpm 安装失败解决办法
tag: 日常
category:
  - 杂记
  - 总结
order: 7
---

1\. 问题  
一、创建项目时，提示 ohpm 没有设置

![](https://img-blog.csdnimg.cn/direct/14a75792e35c4afd9b01994062dcc8a5.png)

二、点击 Set it up now 后，选了了空文件进行安装，但是提示 ohpm.zip 组件安装失败  
Error: execute install task failed, component ohpm.zip.

Error: execute ‘ohpm install’ failed.

![](https://img-blog.csdnimg.cn/direct/d992c2c59d12415785159076d6c230c3.png)  
2\. 解决办法:清除[npm](https://so.csdn.net/so/search?q=npm&spm=1001.2101.3001.7020)緩存。  
Mac 指令： sudo npm cache clean --force

Windows 指令： npm cache clean --force  
验证 npm 缓存是否已清理 Windows 指令:npm cache verify

3\. 再次点击 Set it up now 后，提示成功。
