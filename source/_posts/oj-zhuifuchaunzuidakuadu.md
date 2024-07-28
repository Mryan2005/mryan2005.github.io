---
title: 字符串最大跨距
date: 2024-07-28 11:59:53
tags: [C++, OpenJudge, STL, String]
categories: OpenJudge
---
总时间限制: 1000ms 内存限制: 65536kB

## 描述

有三个字符串S,S1,S2，其中，S长度不超过300，S1和S2的长度不超过10。想检测S1和S2是否同时在S中出现，且S1位于S2的左边，并在S中互不交叉（即，S1的右边界点在S2的左边界点的左侧）。计算满足上述条件的最大跨距（即，最大间隔距离：最右边的S2的起始点与最左边的S1的终止点之间的字符数目）。如果没有满足条件的S1，S2存在，则输出-1。

例如，S = "abcd123ab888efghij45ef67kl", S1="ab", S2="ef"，其中，S1在S中出现了2次，S2也在S中出现了2次，最大跨距为：18。

## 输入

三个串：S, S1, S2，其间以逗号间隔（注意，S, S1, S2中均不含逗号和空格）；

## 输出

S1和S2在S最大跨距；若在S中没有满足条件的S1和S2，则输出-1。

## 样例输入

```cpp
abcd123ab888efghij45ef67kl,ab,ef
```

## 样例输出

```cpp
18
```

## 思路

1. 就是使用`string`的`find`和`rfind`方法，分别找到`S1`和`S2`在`S`中的位置，然后计算最大跨距。
2. 如果`S1`和`S2`中有一个找不到，则输出`-1`。

## 注意

1. `string`中的`length`方法和`size`方返回的是`unsigned int`类型，所以在比较时要注意类型转换，如果直接计算会出现错误。（这还是我的朋友告诉我的，那时我还不知道这个问题）

## Code

### C++ STL

#### 第一种写法

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
	string S, S1, S2;
	getline(cin, S, ',');
	getline(cin, S1, ',');
	getline(cin, S2);
	int a = S.find(S1), b = S.rfind(S2), c = S1.length();
	if(a == -1 || b == -1 || a > b) cout << "-1";
	else {
		cout << b - (a+c);
	}
}
```

#### 第二种写法

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
	string S, S1, S2;
	getline(cin, S, ',');
	getline(cin, S1, ',');
	getline(cin, S2);
	int a = S.find(S1), b = S.rfind(S2), c = S1.length();
	if(a == -1 || b == -1 || b - (a+c) < 0) cout << "-1";
	else {
		cout << b - (a+c);
	}
}
```

#### 第三种写法

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
	string S, S1, S2;
	getline(cin, S, ',');
	getline(cin, S1, ',');
	getline(cin, S2);
	int a = S.find(S1), b = S.rfind(S2);
	if(a == -1 || b == -1 || b - (a+(int)S1.length() < 0)) cout << "-1";
	else {
		cout << b - (a+(int)S1.length());
	}
}
```

#### 第四种写法

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
	string S, S1, S2;
	getline(cin, S, ',');
	getline(cin, S1, ',');
	getline(cin, S2);
	int a = S.find(S1), b = S.rfind(S2), c = S1.length();
	if(a == -1 || b == -1 || a > b) cout << "-1";
	else {
		cout << b - (a+(int)S1.length());
	}
}
```