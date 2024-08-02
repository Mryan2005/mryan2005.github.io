---
title: 大整数加法
date: 2024-08-02 15:27:57
tags: [C++, OpenJudge, string]
categories: OpenJudge
---

总时间限制: 1000ms 内存限制: 65536kB

## 描述

求两个不超过200位的非负整数的和。

## 输入

有两行，每行是一个不超过200位的非负整数，可能有多余的前导0。

## 输出

一行，即相加后的结果。结果里不能有多余的前导0，即如果结果是342，那么就不能输出为0342。

## 样例输入

22222222222222222222
33333333333333333333

## 样例输出

55555555555555555555

## 来源

程序设计实习2007

## 思路

## Code

### C++

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
	ios::sync_with_stdio(false);
	cin.tie(0), cout.tie(0);
	vector<char> s1, s2;
	array<int, 300> a {};
	string str;
	for (int i = 1; i <= 2; i++) {
		cin >> str;
		for (auto j : str) {
			if (i == 1) s1.insert(s1.begin(), j);
			if (i == 2) s2.insert(s2.begin(), j);
		}
	}
	int j = 0;
	for (; j < (int)s1.size() && j < (int)s2.size(); j++) a[j] = s1[j]-'0' + (s2[j]-'0');
	for (; j < (int)s1.size(); j++) a[j] = s1[j]-'0';
	for (; j < (int)s2.size(); j++) a[j] = s2[j]-'0';
	int count = j;
	for (int i = 0; i < j; i++) {
		a[i + 1] += a[i] / 10;
		if(i+1 == j && a[i] / 10 > 0) count++;
		a[i] = a[i] % 10;
	}
	int flag = 0;
	if(count - 1 > 0) {
		for(int i = count-1; i > -1; i--) {
			if(flag == 0) {
				if(a[i] != 0) {
					cout << a[i];
					flag = 1;
				}
			} else if(flag == 1) cout << a[i];
		}
	} else {
		for(int i = count-1; i > -1; i--) cout << a[i];
	}
}
```

## 错误操作

### 错误操作1：空间不足

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
	ios::sync_with_stdio(false);
	cin.tie(0), cout.tie(0);
	vector<char> s1, s2;
	array<int, 200> a {};
	string str;
	for (int i = 1; i <= 2; i++) {
		cin >> str;
		for (auto j : str) {
			if (i == 1) s1.insert(s1.begin(), j);
			if (i == 2) s2.insert(s2.begin(), j);
		}
	}
	int j = 0;
	for (; j < (int)s1.size() && j < (int)s2.size(); j++) a[j] = s1[j]-'0' + (s2[j]-'0');
	for (; j < (int)s1.size(); j++) a[j] = s1[j]-'0';
	for (; j < (int)s2.size(); j++) a[j] = s2[j]-'0';
	int count = j;
	for (int i = 0; i < j; i++) {
		a[i + 1] += a[i] / 10;
		if(i+1 == j && a[i] / 10 > 0) count++;
		a[i] = a[i] % 10;
	}
	int flag = 0;
	if(count - 1 > 0) {
		for(int i = count-1; i > -1; i--) {
			if(flag == 0) {
				if(a[i] != 0) {
					cout << a[i];
					flag = 1;
				}
			} else if(flag == 1) cout << a[i];
		}
	} else {
		for(int i = count-1; i > -1; i--) cout << a[i];
	}
}
```

### 错误原因

```cpp
array<int, 200> a {};
```

这里的`200`是数组的大小，但是题目中说了两个数的长度不超过`200`，所以这里的数组大小应该是`200`以上。

### 错误操作2：未把`0+0`的情况考虑进去

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
	string num1 {0}, num2 {0};
	cin >> num1;
	cin >> num2;
	long long unsigned int i = 0;
	for(; i < num1.size() && num1[i] == '0'; i++);
	num1.erase(0, i);
	i = 0;
	for(; i < num2.size() && num2[i] == '0'; i++);
	num2.erase(0, i);
	reverse(num1.begin(), num1.end());
	reverse(num2.begin(), num2.end());
	long long unsigned int num1P = 0, num2P = 0;
	for(; num1P < num1.size() && num2P < num2.size(); num1P++, num2P++) {
		if((num1[num1P] - '0') + (num2[num2P] - '0') > 9 && num1P < num1.size()-1) {
			num1[num1P+1] += 1;
			num1[num1P] = (((num1[num1P] - '0') + (num2[num2P] - '0')) % 10) + '0';
		} else if((num1[num1P] - '0') + (num2[num2P] - '0') > 9 && num1P == num1.size()-1) { 
			num1.insert(num1.end(), '1');
			num1[num1P] = (((num1[num1P] - '0') + (num2[num2P] - '0')) % 10) + '0';
		} else {
			num1[num1P] = ((num1[num1P] - '0') + (num2[num2P] - '0')) + '0';
		}
	}
	for(;num2P < num2.size(); num2P++) {
		num1.insert(num1.end(), num2[num2P]);
	}
	num1[num1.size()] = 0;
	reverse(num1.begin(), num1.end());
	cout << num1;
}
```

## 测试用例

### 测试用例1

#### 输入

```cpp
22222222222222222222
33333333333333333333
```

#### 输出

```cpp
55555555555555555555
```

### 测试用例2

#### 输入

```cpp
91
99
```

#### 输出

```cpp
190
```

### 测试用例3

#### 输入

```cpp
0
0
```

#### 输出

```cpp
0
```