#!/bin/bash
#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e
# # 生成静态文件
# npm run build 

# 设置变量
SOURCE_DIR="dist" # VuePress打包后的目录
TARGET_BRANCH="develop" # 您要推送到的目标分支
# 指定要检查的远程仓库名称
remote_name="https://gitee.com/magicBegin/vuepress-blog.git"

# 确保目录存在
if [ ! -d "$SOURCE_DIR" ]; then
  echo "Error: 打包目录不存在"
  exit 1
fi

# 添加所有文件到Git暂存区
git add .
# 提交到本地仓库
git commit -m "发布文章"

# 推送到远程仓库
git push  $TARGET_BRANCH

# 打印操作完成信息
# echo "Pushed to $TARGET_BRANCH successfully"
echo "打包目录已成功提交到 $TARGET_BRANCH 分支"
