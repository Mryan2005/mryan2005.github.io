---
title: 整数的个数
date: 2024-07-10 13:39:05
tags: OpenJudge
categories: OpenJudge
---

总时间限制: 1000ms 内存限制: 65536kB

## 描述

给定k（1 < k < 100）个正整数，其中每个数都是大于等于1，小于等于10的数。写程序计算给定的k个正整数中，1，5和10出现的次数。

## 输入

输入有两行：第一行包含一个正整数k，第二行包含k个正整数，每两个正整数用一个空格分开。

## 输出

输出有三行，第一行为1出现的次数，，第二行为5出现的次数，第三行为10出现的次数。

## 样例输入

```
5
1 5 8 10 5
```

## 样例输出

```
1
2
1
```

### 来源

计算概论05－模拟考试1

## Code

### C

```c
#include <stdio.h>
int main() {
    int k,count_1 = 0 ,count_5 = 0, count_10 = 0, temp;
    scanf("%d", &k);
    for (int i = 0; i < k; i++) {
        scanf("%d", &temp);
        if (temp == 1) {
            count_1++;
        } else if (temp == 5) {
            count_5++;
        } else if (temp == 10) {
            count_10++;
        }
    } 
    printf("%d\n%d\n%d\n", count_1, count_5, count_10);
}
```

### C++

```cpp
#include <bits/stdc++.h>
using namespace std;
int main() {
	int k, temp;
	array<int, 3> a {};
	cin >> k;
	for(int i = 1; i <= k; i++) {
		cin >> temp;
		if(temp == 1) a[0]++;
		else if(temp == 5) a[1]++;
		else if(temp == 10) a[2]++;
	}
	for(int i = 0; i < 3; i++) {
		cout << a[i] << endl;
	}
}
```
