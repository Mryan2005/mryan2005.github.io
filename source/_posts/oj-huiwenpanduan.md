---
title: 回文串判断
date: 2024-07-14 21:59:22
tags: OpenJudge
categories: OpenJudge
---

总时间限制: 1000ms 内存限制: 65536kB

## 描述

任意给定一个非空的字符串，判断其是否是回文串。回文串是指正向看和反向看均相等的串，如AbcDcbA和cDDc。如果是回文串，则输出1，否则，输出0

## 输入

长度不小于1不大于100的字符串

## 输出

如果是回文串，输出1
如果不是回文串，输出0

## 样例输入

```cpp
abcdefghijkjihgfedcba
```

## 样例输出

```cpp
1
```

## 思路

### 方法一：栈思想

将字符串的前半部分入栈，然后遍历后半部分，判断是否和栈顶元素相等。
这里要注意字符串长度为奇数和偶数的情况。

### 方法二：双指针

设置两个指针，一个指向字符串的头部，一个指向字符串的尾部，判断两个指针指向的字符是否相等。

## Code

### C++

#### 方法一

```cpp
#include <bits/stdc++.h>
using namespace std;
int main() {
	string str;
	stack<char> S;
	cin >> str;
	for(long long unsigned int i = 0; i < str.size()/2; i++) {
		S.push(str[i]);
	}
	if(str.size() % 2 == 0) {
		for(long long unsigned int i = str.size()/2; i < str.size(); i++) {
			if(str[i] != S.top()) goto out;
			S.pop();
		}
	} else {
		for(long long unsigned int i = str.size()/2+1; i < str.size(); i++) {
			if(str[i] != S.top()) goto out;
			S.pop();
		}
	}
	cout << 1;
	goto out1;
	out:;
	cout << 0;
	out1:;
}
```

#### 方法二

```cpp
#include <bits/stdc++.h>
using namespace std;
int main() {
	string str;
	cin >> str;
	for(int i = 0, j = str.size()-1; i < j; i++, j--){
		if(str[i] != str[j]) {
			cout << 0;
			goto out;
		}
	}
	cout << 1;
	out:;
}
```