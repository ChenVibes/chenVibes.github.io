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

# 创建临时目录
mkdir temp

# 复制构建生成的文件到临时目录
cp -R dist/* .github/* .git/* publish.cjs publish.sh temp/

# 切换到目标分支
git checkout $target_branch
# 删除目标分支下的旧文件，但保留 .git 目录和指定文件
find .  ! -name '.git' ! -name 'publish.cjs' ! -name 'publish.sh' -name '.github' -exec rm -rf {} \;
# 复制临时目录中的文件到当前目录
cp -R temp/* .
find .  -path "./dist/*" -path "./temp/*" -path "./objects/*" -path "./logs/*"  -path "./node_modules/*" -path "./assets/*" -path "./category/*" -path "./docs/*" -type f -delete

# 添加所有更改
git add  -A -f

# 提交更改
git commit -m "Update VuePress build"

# 推送更改到远程仓库
git push -f https://gitee.com/magicBegin/vuepress-blog.git develop



echo "打包目录已成功提交到 $target_branch 分支"
# 切换回原分支
git checkout $source_branch
