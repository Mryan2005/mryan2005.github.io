---
title: DNA排序
date: 2024-07-19 13:35:23
tags: OpenJudge
categories: OpenJudge
---

总时间限制: 1000ms 内存限制: 65536kB

## 描述

给出一系列基因序列，由A,C,G,T四种字符组成。对于每一个序列，定义其逆序对如下：
序列中任意一对字符X和Y，若Y在X的右边（不一定相邻）且Y < X，则称X和Y为一个逆序对。  
例如GAC这个序列，其中GC,GA都是逆序对。

一个序列的逆序对越多，则认为其"无序度"越高。你的任务是将基因按照无序度从小到大的顺序排序，如果存在无序度相同的序列，则按照原始输入顺序输出。

## 输入

首先是基因序列的长度n(0 < n <= 50)和基因序列的个数m ( 0 < m <= 100).
然后依次是这m个基因序列.

## 输出

输出排序后的m个基因序列。

## 样例输入

```plaintext
10 6
AACATGAAGG
TTTTGGCCAA
TTTGGCCAAA
GATCAGATTT
CCCGGGGGGA
ATCGATGCAT
```

## 样例输出

```plaintext
CCCGGGGGGA
AACATGAAGG
GATCAGATTT
ATCGATGCAT
TTTTGGCCAA
TTTGGCCAAA
```

## 思路

### 方法一：使用STL的array和pair

1. 使用`array<pair<string, int>, 102> a;`来存储字符串和无序度。
2. 读入字符串，计算无序度。
3. 使用冒泡排序，按照无序度从小到大排序。（其实，也可以使用别的排序方法，只要稳定性好就行）

### 方法二：使用结构体数组

1. 使用结构体数组`struct DNA`来存储字符串和无序度。
2. 读入字符串，计算无序度。
3. 使用冒泡排序，按照无序度从小到大排序。（其实，也可以使用别的排序方法，只要稳定性好就行）

## Code

### C++

#### 使用STL的array和pair

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
	int n, m;
	cin >> n >> m;
	array<pair<string, int>, 102> a;		// 字符串和无序度
	for(int i = 1, count = 0; i <= m; i++) {
		count = 0;
		cin >> a[i].first;
		for(int j = 0; j < n; j++) {
			for(int k = j+1; k < n; k++) {
				if(a[i].first[j] > a[i].first[k]) count++;
			}
		}
		a[i].second = count;
	}
	for(int i = 1; i <= m-1; i ++) {
		for(int j = 1; j <= m-1; j++) {
			if(a[j].second > a[j+1].second) {
				a[0] = a[j];
				a[j] = a[j+1];
				a[j+1] = a[0];
			}
		}
	}
	for(int i = 1; i <= m; i++) cout << a[i].first << endl;
}
```

## 我的测试用例

### 测试用例1

#### 输入

```plaintext
10 1
AACATGAAGG
TTTTGGCCAA
TTTGGCCAAA
GATCAGATTT
CCCGGGGGGA
ATCGATGCAT
```

#### 输出

```plaintext
AACATGAAGG
```

### 测试用例2

#### 输入

```plaintext
1 6
A
T
G
G
C
A
```

#### 输出

```plaintext
A
T
G
G
C
A
```

### 测试用例3

#### 输入

```plaintext
10 6
AACATGAAGG
TTTTGGCCAA
TTTGGCCAAA
GATCAGATTT
CCCGGGGGGA
ATCGATGCAT
```

#### 输出

```plaintext
CCCGGGGGGA
AACATGAAGG
GATCAGATTT
ATCGATGCAT
TTTTGGCCAA
TTTGGCCAAA
```
