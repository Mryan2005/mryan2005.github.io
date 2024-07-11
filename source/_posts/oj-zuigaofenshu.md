---
title: 最高的分数
date: 2024-07-11 11:52:23
tags: OpenJudge
categories: OpenJudge
---

总时间限制: 1000ms 内存限制: 65536kB

## 描述

孙老师讲授的《计算概论》这门课期中考试刚刚结束，他想知道考试中取得的最高分数。因为人数比较多，他觉得这件事情交给计算机来做比较方便。你能帮孙老师解决这个问题吗？

<!-- more -->

## 输入

输入两行，第一行为整数n（1 <= n < 100），表示参加这次考试的人数.第二行是这n个学生的成绩，相邻两个数之间用单个空格隔开。所有成绩均为0到100之间的整数。

## 输出

输出一个整数，即最高的成绩。

## 样例输入

```plaintext
5
85 78 90 99 60
```

## 样例输出

```plaintext
99
```

## 思路

### 方法一

遍历所有成绩，找出最大值。（不推荐）

### 方法二

第一个数为最大值，后面的数与最大值比较，如果大于最大值则更新最大值。

## Code

### C

```c
#include <stdio.h>
#include <math.h>
int main() {
  int n, a, max = 0;
  scanf("%d", &n);
  for(int i = 1; i <= n; i++) {
    scanf("%d", &a);
    if(max < a) {
      max = a;
    }
  }
  printf("%d", max);
}
```

### C++

```cpp
#include <iostream>
#include <bits/stdc++.h>
using namespace std;
int main() {
	int n, max, num;
	cin >> n;
	for(int i = 1; i <= n; i++) {
		if(i == 1) cin >> max;
		else {
			cin >> num;
			max = num > max? num: max;
		}
	}
	cout << max;
}
```