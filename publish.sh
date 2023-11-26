#!/bin/bash
#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e
source_branch="master"
target_branch="develop"
# 设置变量
source_dir="dist" # VuePress打包后的目录
# 构建 VuePress
npm run build

# 切换到目标分支
git checkout $target_branch

# 删除目标分支下的旧文件
git rm -r .

# 复制构建生成的文件到当前目录
cp -R dist/* .
find .  -path "./dist/*" -path "./category/*" -path "./assets/*" -type d -delete
# 添加所有更改
git add  -A -f

# 提交更改
git commit -m "Update VuePress build"

# 推送更改到远程仓库
git push -f https://gitee.com/magicBegin/vuepress-blog.git develop

echo "打包目录已成功提交到 $target_branch 分支"
# 切换回原分支
git checkout $source_branch
