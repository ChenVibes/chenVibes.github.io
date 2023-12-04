#!/bin/bash
#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e
docker run -it --env-file=.env  -e "CONFIG=$(cat config.json | jq -r tostring)" --platform "linux/amd64" algolia/docsearch-scraper 