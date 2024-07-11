---
title: oj-daxiangheshui
date: 2024-07-11 10:29:05
tags: OpenJudge
categories: OpenJudge
---

总时间限制: 1000ms 内存限制: 65536kB

## 描述

一只大象口渴了，要喝20升水才能解渴，但现在只有一个深h厘米，底面半径为r厘米的小圆桶(h和r都是整数)。问大象至少要喝多少桶水才会解渴。

<!-- more -->

## 输入

输入有一行：包行两个整数，以一个空格分开，分别表示小圆桶的深h和底面半径r，单位都是厘米。

## 输出

输出一行，包含一个整数，表示大象至少要喝水的桶数。

## 样例输入

23 11

## 样例输出

3

## 提示

1. 如果一个圆桶的深为h厘米，底面半径为r厘米，那么它最多能装Pi * r * r * h立方厘米的水。(设Pi=3.14159)
1. 1升 = 1000毫升
1. 1毫升 = 1 立方厘米

## 思路

### 方法一

先计算出一个圆桶的体积，然后用 20000 除以这个体积，如果除不尽则加 1。

## Code

### C

```c
#include <stdio.h>
#define PI 3.14159
#define V(h,r) (r)*(r)*(h)*(PI)     // 1mL
int main() {
    int h,r;
    scanf("%d %d", &h, &r);
    int a = 20000 / (V(h,r));
    printf("%d", a+1);
}
```

### C++

```cpp
#include <iostream>
#include <bits/stdc++.h>
#define Pi 3.14159
#define V 20*1000
using namespace std;
int main() {
	int h, r, res;
	double V_bottle;
	cin >> h >> r;
	V_bottle = h*r*r*Pi;
	res = V / V_bottle;
	if(V % (int)V_bottle != 0) res += 1;
	cout << res;
}
```


## 来源

计算概论化学学院期末考试