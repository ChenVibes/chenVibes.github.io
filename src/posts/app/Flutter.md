---
    icon: pen-to-square
    date: 2021-09-06
    category:
      - app
    tag:
      - 随笔
---

## 搭建环境

### 1.flutter Unable to find bundled Java version

在 M1 芯片上搭建 flutter 环境，因为使用的是 android studio preview 版本。导致 flutter doctor 过不了，一直报 Unable to find bundled Java version ，搜索一番，找到如下解决办法：

把 globals.fs.path.join(directory, 'jre', 'jdk', 'Contents', 'Home') :替换成 globals.fs.path.join(directory, 'jre', 'Contents', 'Home') ，就是去掉 jdk。

然后在 android studio preview.app 的包中把/Applications/Android Studio Preview.app/Contents/jre/Contents 中的文件 copy 到/Applications/Android Studio Preview.app/Contents/jre/jdk/Contents 中。
