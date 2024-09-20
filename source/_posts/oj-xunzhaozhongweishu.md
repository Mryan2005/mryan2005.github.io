---
title: 寻找中位数
date: 2024-09-20 09:21:12
tags: [OpenJudge, STL, C++, Vector]
categories: OpenJudge
---

总时间限制: 1000ms 内存限制: 65536kB
## 描述
在N（1<=N<10,000且N为奇数）个数中，找到中位数。

## 输入
第1行：N

第2至N+1行：每行是一个整数
## 输出
第一行：中位数
## 样例输入

```cpp
5
2
4
1
3
5
```

## 样例输出

```cpp
3
```

### 分析

1. 由题目的样例输出可以知道，`3`不在输入序列`2 4 1 3 5`的中间，但是它是中位数，这或许会涉及到排序。
2. 然后通过下标直接找到中位数。

## Code

```cpp
#include <bits/stdc++.h>

using namespace std;

int main() {
	int N, num;
	vector<int> v;
	cin >> N;
	for(int i = 1; i <= N; i++) {
		cin >> num;
		v.insert(v.end(), num);
	}
	sort(v.begin(), v.end());
	cout << v[(0+N)/2];
}
```
