---
title: 苹果和虫子
date: 2024-07-10 19:25:43
tags: OpenJudge
categories: OpenJudge
---

总时间限制: 1000ms 内存限制: 65536kB

## 描述

你买了一箱n个苹果，很不幸的是买完时箱子里混进了一条虫子。虫子每x小时能吃掉一个苹果，假设虫子在吃完一个苹果之前不会吃另一个，那么经过y小时你还有多少个完整的苹果？

<!-- more -->

## 输入

输入仅一行，包括n，x和y（均为整数）。输入数据保证y <= n * x。

## 输出

输出也仅一行，剩下的苹果个数

## 样例输入

10 4 9

## 样例输出

7

## 提示

注意：是要求完整的苹果数。

## 解题思路

### 方法一

我们已经知道虫子每x小时能吃掉一个苹果，那么y小时内虫子能吃掉y/x个苹果，所以剩下的苹果数为n - y/x。
此时，我们要看看y/x是否为整数，如果不是整数，说明虫子在y小时内还没吃完一个苹果，所以剩下的苹果数还要减1。

### 方法二

可以通过循环的方式来模拟虫子吃苹果的过程，每次循环判断是否是虫子吃苹果的时间，如果是，苹果数减1，直到循环结束。

## Code

### C

```c
#include <stdio.h>
int main() {
    int n, x, y;
    scanf("%d %d %d", &n, &x, &y);
    for(int hour = 0; hour < y; hour++) {
        if(hour % x == 0) n -= 1;
        if(n < 0) {
            n = 0;
            break;
        }
    }
    printf("%d", n);
}
```

### C++

```cpp
#include <bits/stdc++.h>
using namespace std;
int main() {
	int n, x, y;
	cin >> n >> x >> y;
	n -= y/x;
	if(y % x > 0) n -= 1;
	cout << n;
}
```