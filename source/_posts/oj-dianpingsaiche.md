---
title: 点评赛车
date: 2024-07-21 13:40:20
tags: OpenJudge
categories: OpenJudge
---

总时间限制: 1000ms 内存限制: 65536kB

## 描述

4名专家对4款赛车进行评论
1）A说：2号赛车是最好的；
2）B说：4号赛车是最好的；
3）C说：3号赛车不是最好的；
4）D说： B说错了。
事实上只有1款赛车最佳，且只有1名专家说对了，其他3人都说错了。
请编程输出最佳车的车号，以及说对的专家。

## 输入

无输入。

## 输出

输出两行。第一行输出最佳车的车号（1-4中的某个数字）。第二行输出说对的专家（A-D中的某个字母）。

## 样例输入

```plaintext
(无)
```

## 样例输出

```plaintext
1
A
```

## 提示

样例输出只是格式说明，并非正确答案

## 思路

![](https://s21.ax1x.com/2024/07/21/pk799DP.png)
![](https://s21.ax1x.com/2024/07/21/pk79put.png)

## Code

### C++

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
	cout << "3\nD";
}
```

### C

```c
#include <stdio.h>

int main() {
    printf("3\nD");
}
```