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
rm -rf temp
#如果文件夹不存在，则创建文件夹
mkdir temp
# 复制构建生成的文件到临时目录
cp -R ./dist/* ./.github ./.git ./publish.cjs ./.gitignore  ./publish.sh temp

# 删除临时目录中的文件，但保留 .git 目录和指定文件
find temp   -name 'logs'  -name 'dist'  -name 'docs' -name 'objects' -name 'assets' -name 'category' -exec rm -rf {} \;

# 切换到目标分支
git checkout $target_branch
# 删除目标分支下的旧文件，但保留 .git 目录和指定文件
find . -maxdepth 1 ! -name '.git' ! -name '.gitignore' ! -name 'temp' ! -name 'publish.cjs' ! -name 'publish.sh' ! -name '.github' ! -name 'node_modules' -exec rm -rf {} \;
# 复制临时目录中的文件到当前目录
cp -R temp/* .
rm -rf docs dist assets category temp objects node_modules
# 添加所有文件到Git暂存区

# 添加所有更改
git add  -A -f

# 提交更改
git commit -m "Update VuePress build"

# 推送更改到远程仓库
git push -f https://gitee.com/magicBegin/vuepress-blog.git develop



echo "打包目录已成功提交到 $target_branch 分支"
# 切换回原分支
git checkout $source_branch
yarn install
