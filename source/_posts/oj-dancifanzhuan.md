---
title: 单词翻转
date: 2024-07-31 16:07:03
tags: [C++, OpenJudge, C, string]
categories: OpenJudge
---

总时间限制: 1000ms 内存限制: 65536kB
## 描述
输入一个句子（一行），将句子中的每一个单词翻转后输出。

## 输入
只有一行，为一个字符串，不超过500个字符。单词之间以空格隔开。
## 输出
翻转每一个单词后的字符串，单词之间的空格需与原文一致。
## 样例输入

```cpp
hello world
```

## 样例输出

```cpp
olleh dlrow
```

## 思路

遍历字符串，如果不是空格，就插入到新的字符串的开头，如果是空格，就输出新的字符串并清空。

## Code

### C++

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
	string str, str1;
	getline(cin, str);
	for(int i: str) {
		if(i != ' ') {
			str1.insert(str1.begin(), i);
		} else {
			cout << str1;
			cout << " ";
			str1.clear();
		}
	}
	cout << str1;
}
```

## 测试用例

### 测试用例1

#### 输入

```cpp
hello world
```

#### 输出

```cpp
olleh dlrow
```

### 测试用例2

#### 输入

```cpp
hello     world
```

#### 输出

```cpp
olleh     dlrow
```

## 错误操作

### 错误操作1

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
	string str; vector<char> a; int flag = 0;
	while(cin >> str) {
		for(auto i: str) a.insert(a.begin(), i);
		str.clear();
		for(auto i: a) str.insert(str.end(), i);
		if(!flag) {
			cout << str;
			flag = 1;
		} else cout << " " << str;
		a.clear();
	}
}
```

#### 错误原因

这会使类似于`hello     world`的输入输出为`olleh dlrow`，而不是`olleh     dlrow`。
