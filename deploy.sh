#!/bin/bash
git config --global user.name "Mryan05"
git config --global user.email "a2564011261@163.com"
cd ./public
rm -rf .git
git init
git add .
git commit -m "Travis CI Auto Builder at `date +"%Y-%m-%d %H:%M"`"  # 提交记录包含时间 跟上面更改时区配合
git push --force --quiet "https://Mryan05:${Travis_Token}@git.dev.tencent.com/Mryan05/mryan05.coding.me.git" master:master