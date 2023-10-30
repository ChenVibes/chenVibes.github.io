#!/bin/bash
#!/usr/bin/env sh
# # 确保脚本抛出遇到的错误
# set -e
# # 生成静态文件
# npm run build 

# 设置变量
SOURCE_DIR="dist" # VuePress打包后的目录
TARGET_BRANCH="develop" # 您要推送到的目标分支
# 指定要检查的远程仓库名称
remote_name="https://gitee.com/magicBegin/vuepress-blog.git"

# 进入打包目录
cd $SOURCE_DIR

# 使用git remote命令列出所有远程仓库
remotes=$(git remote)

# 检查指定的远程仓库是否存在
if [[ $remotes == *"$remote_name"* ]]; then
  echo "远程仓库 $remote_name 存在"
else
  # 添加远程仓库地址
  git remote add origin https://gitee.com/magicBegin/vuepress-blog.git
fi

# 初始化Git仓库
git init

# 添加所有文件到Git暂存区
git add .

# 提交到本地仓库
git commit -m "发布文章"

# 切换到目标分支
git checkout  $TARGET_BRANCH

# 推送到远程仓库
git push origin $TARGET_BRANCH

# 打印操作完成信息
echo "Pushed to $TARGET_BRANCH successfully"
