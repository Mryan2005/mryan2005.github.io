#!/bin/bash
rm -rf ./public/.git
cd ..
git clone https://e.coding.net/Mryan05/mryan05.coding.me.git coding
mv ./coding/.git/ ./public/
cd ./public
git config --global user.name "Mryan05"
git config --global user.email "A2564011261@163.com"
git add .
git commit -m "Travis CI Auto Builder at `date +"%Y-%m-%d %H:%M"`"  # 提交记录包含时间 跟上面更改时区配合
git push --force --quiet "https://Mryan05:${Travis_Token}@e.coding.net/Mryan05/mryan05.coding.me.git" master:master
