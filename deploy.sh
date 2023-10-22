#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e
# 生成静态文件
npm run build 
# 进入生成的文件夹
cd ./dist 
# deploy to github
if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:frontchen/czblog.git
else
  msg='来自github action的自动部署'
  githubUrl=https://frontchen:${GITHUB_TOKEN}@github.com/frontchen/czblog.git
  git config --global user.name "frontchen"
  git config --global user.email "599422271@qq.com"
fi
git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl master # 推送到github

cd -
rm -rf ./dist

