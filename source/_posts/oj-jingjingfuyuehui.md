---
title: 晶晶赴约会
date: 2024-07-10 12:32:50
tags: OpenJudge
categories: 
---

总时间限制: 1000ms 内存限制: 65536kB

## 描述

晶晶的朋友贝贝约晶晶下周一起去看展览，但晶晶每周的1、3、5有课必须上课，请帮晶晶判断她能否接受贝贝的邀请，如果能输出YES；如果不能则输出 `NO`。

## 输入

输入有一行，贝贝邀请晶晶去看展览的日期，用数字1到7表示从星期一到星期日。

## 输出

输出有一行，如果晶晶可以接受贝贝的邀请，输出YES，否则，输出NO。注意YES和NO都是大写字母！
##样例输入

```
2
```

## 样例输出

```
YES
```

## 来源

计算概论化学学院期末考试

## Code

### C

```c
#include <stdio.h>
int main() {
    int day;
    scanf("%d", &day);
    if(day != 1 && day != 3 && day != 5) printf("YES");
    else printf("NO");
}
```

### C++

```cpp
#include <bits/stdc++.h>
using namespace std;
int main() {
	int a;
	cin >> a;
	if(a == 1 || a == 3 || a == 5) cout << "NO";
	else cout << "YES";
}
```
