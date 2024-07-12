---
title: 分离整数的各个数位
date: 2024-07-12 10:43:43
tags: OpenJudge
categories: OpenJudge
---

总时间限制: 1000ms 内存限制: 65536kB

## 描述

从键盘输入一个任意的三位整数，要求正确地分离出它的百位、十位和个位数，并分别在屏幕上输出，输出采用每行输出一个数的方式，不带其它符号。

## 输入

一个任意的三位整数

## 输出

一个任意的三位整数

## 样例输入

```plaintext
123
```

## 样例输出

```plaintext
1
2
3
```

## 思路

使用取模运算和整除运算分别得到百位、十位和个位数。

## Code

### C

```c
#include <stdio.h>
#include <math.h>
int main() {
    int a;
    scanf("%d", &a);
    printf("%d\n", a/100);
    printf("%d\n", (a%100)/10);
    printf("%d\n", a%10);
}
```

### C++

```cpp
#include <iostream>
#include <bits/stdc++.h>
using namespace std;
int main() {
	array<int, 3> a;
	int num;
	cin >> num;
	for(int i = 2; num > 0; i--) {
		a[i] = num % 10;
		num /= 10;
	}
	for(auto i: a) {
		cout << i << endl;
	}
}
```
