#!/bin/bash
#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e
# # 生成静态文件
npm run build 
# 设置源分支和目标分支
source_branch="master"
target_branch="develop"
# 设置变量
source_dir="dist" # VuePress打包后的目录

# 添加所有文件到Git暂存区
# cd $source_dir
git add ./$source_dir/ -A -f
# 提交到本地仓库
git commit -m "Add package from $source_dir"
# 切换到模板分支
git checkout $target_branch
# 推送到远程仓库
git push -f https://gitee.com/magicBegin/vuepress-blog.git develop

# 打印操作完成信息
# echo "Pushed to $target_branch successfully"
echo "打包目录已成功提交到 $target_branch 分支"
