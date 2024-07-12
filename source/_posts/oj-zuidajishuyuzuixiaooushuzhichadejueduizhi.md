---
title: 最大奇数与最小偶数之差的绝对值
date: 2024-07-12 10:30:40
tags: 
categories: 
---

总时间限制: 1000ms 内存限制: 65536kB

## 描述

输入6个正整数，且这6个正整数中至少存在一个奇数和一个偶数。
设这6个正整数中最大的奇数为a，最小的偶数为b，求出|a-b|的值

## 输入

输入为一行，6个正整数,且6个正整数都小于100
输入保证这6个数中至少存在一个奇数和一个偶数

## 输出

输出为一行，输出最大的奇数与最小的偶数之差的绝对值

## 样例输入

```plaintext
1 2 3 4 5 6
```

## 样例输出

```plaintext
3
```

## 思路

使用两个变量分别记录最大的奇数和最小的偶数，然后输出两者之差的绝对值。

## Code

### C

```c
#include <stdio.h>
#include <math.h>
int main() {
    int aMax=-1, bMin=100, a;
    for(int i = 0; i < 6; i++) {
        scanf("%d", &a);
        if(i == 0) {
            aMax=a;
        }
        if(a % 2 != 0) {
            if(aMax < a) {
                aMax = a;
            }
        } else {
            if(bMin > a) {
                bMin = a;
            }
        }
    }
    printf("%d", abs(aMax-bMin));
}
```

### C++

```cpp
#include <iostream>
#include <bits/stdc++.h>
using namespace std;
int main() {
	int minNum = 100, maxNum = 0, num;
	for(int i = 1; i <= 6; i++) {
		cin >> num;
		if(num % 2 == 0) {
			if(num < minNum) minNum = num;
		} else {
			if(num > maxNum) maxNum = num;
		}
	}
	cout << abs(maxNum-minNum);
}
```