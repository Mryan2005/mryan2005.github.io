---
title: 数组逆序重放
date: 2024-07-10 16:42:14
tags: OpenJudge
categories: OpenJudge
---

总时间限制: 1000ms 内存限制: 65536kB

## 描述

将一个数组中的值按逆序重新存放。例如，原来的顺序为8,6,5,4,1。要求改为1,4,5,6,8。

<!-- more -->

## 输入

输入为两行：第一行数组中元素的个数n（1<n<100)，第二行是n个整数，每两个整数之间用空格分隔。

## 输出

输出为一行：输出逆序后数组的整数，每两个整数之间用空格分隔。

## 样例输入

```plaintext
5
8 6 5 4 1
```

## 样例输出

```plaintext
1 4 5 6 8
```

## 来源

计算概论05

## Code

### C

```c
#include <stdio.h>
#include <math.h>
int main() {
  static int n, a[100], t;
  scanf("%d", &n);
  for(int i = 1; i<= n; i++) {
    scanf("%d", &a[i-1]);
  } 
  for(int i = n-1; i >= 0; i--) {
    if(i == n-1)
      printf("%d", a[i]);
    else  
      printf(" %d", a[i]);
  }
}
```

### C++

```cpp
#include <bits/stdc++.h>
using namespace std;
int main() {
	array<int, 100> a {};
	int n;
	cin >> n;
	for(int i = n-1; i >= 0; i--) {
		cin >> a[i];
	}
	for(int i = 0; i < n; i++) {
		cout << a[i];
		if(i < n-1) cout << " ";
	}
}
```