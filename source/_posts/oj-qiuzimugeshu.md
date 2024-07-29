---
title: 求字母的个数
date: 2024-07-29 15:47:37
tags: [C++, OpenJudge, Map]
categories: OpenJudge
---
总时间限制: 1000ms 内存限制: 65536kB

## 描述

在一个字符串中找出元音字母a,e,i,o,u出现的次数。

## 输入

输入一行字符串（字符串中可能有空格，请用gets(s)方法把一行字符串输入到字符数组s中），字符串长度小于80个字符。

## 输出

输出一行，依次输出a,e,i,o,u在输入字符串中出现的次数，整数之间用空格分隔。

## 样例输入

```plaintext
If so, you already have a Google Account. You can sign in on the right.
```

## 样例输出

```plaintext
5 4 3 7 3
```

## 提示

注意，只统计小写元音字母a,e,i,o,u出现的次数。

## 来源

计算概论05

## 思路

遍历字符串，统计元音字母的个数。

这里可以考虑使用一个哈希表来存储元音字母的个数。

## Code

### C++ STL

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
	string str;
	map<char, int> mp;
	getline(cin, str);
	for (long long unsigned int i = 0; i < str.size(); i++) {
		if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') mp[str[i]]++;
	}
	for(auto i: mp) {
		cout << i.second << " ";
	}
}
```
