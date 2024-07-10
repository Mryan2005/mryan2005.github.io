---
title: 1的个数
date: 2024-07-10 14:34:56
tags: OpenJudge
categories: OpenJudge
---
总时间限制: 1000ms 内存限制: 65536kB

## 描述

给定一个十进制整数N，求其对应2进制数中1的个数

<!-- more -->

## 输入

第一个整数表示有N组测试数据，其后N行是对应的测试数据，每行为一个整数。

## 输出

N行，每行输出对应一个输入。

## 样例输入

```
4
2
100
1000
66
```

## 样例输出

```
1
3
6
2
```

## Code

### C

```c
#include <stdio.h>
#include <math.h>
int main() {
  int N, a, b, count = 0;
  scanf("%d", &N);
  for(int i = 1; i <= N; i++) {
    scanf("%d", &a);
    while(a > 0) {
      b = a % 2;
      a /= 2;
      if(b == 1) {
        count++;
      }
    }
    printf("%d\n", count);
    count = 0;
  }
}
```

### C++

```cpp
#include <bits/stdc++.h>
using namespace std;
int main() {
	int N, temp, count = 0;
	cin >> N;
	for(int i = 1; i <= N; i++) {
		cin >> temp;
		while(temp > 0) {
			if(temp % 2 == 1) count++;
			temp /= 2;
		}
		cout << count << endl;
		count = 0;
	}
}
```
