---
title: 多项式加法
date: 2024-08-17 16:32:38
tags: [OpenJudge, C++, STL]
categories: OpenJudge
---

总时间限制: 1000ms 内存限制: 5000kB

## 描述

我们经常遇到两多项式相加的情况，在这里，我们就需要用程序来模拟实现把两个多项式相加到一起。首先，我们会有两个多项式，每个多项式是独立的一行，每个多项式由系数、幂数这样的多个整数对来表示。

如多项式2x20- x17+ 5x9- 7x7+ 16x5+ 10x4 + 22x2- 15

对应的表达式为：2 20 -1 17 5 9 - 7 7 16 5 10 4 22 2 -15 0。  

为了标记每行多项式的结束，在表达式后面加上了一个幂数为负数的整数对。

同时输入表达式的幂数大小顺序是随机的。

我们需要做的就是把所给的两个多项式加起来。

## 输入

输入包括多行。
第一行整数n,表示有多少组的多项式需要求和。(1 < n < 100)
下面为2n行整数，每一行都是一个多项式的表达式。表示n组需要相加的多项式。
每行长度小于300。

## 输出

输出包括n行，每行为1组多项式相加的结果。
在每一行的输出结果中，多项式的每一项用“[x y]”形式的字符串表示，x是该项的系数、y 是该项的幂数。要求按照每一项的幂从高到低排列，即先输出幂数高的项、再输出幂数低的项。
系数为零的项不要输出。

## 样例输入

```cpp
2
-1 17 2 20 5 9 -7 7 10 4 22 2 -15 0 16 5 0 -1
2 19 7 7 3 17 4 4 15 10 -10 5 13 2 -7 0 8 -8
-1 17 2 23 22 2 6 8 -4 7 -18 0 1 5 21 4 0 -1
12 7 -7 5 3 17 23 4 15 10 -10 5 13 5 2 19 9 -7
```

## 样例输出

```cpp
[ 2 20 ] [ 2 19 ] [ 2 17 ] [ 15 10 ] [ 5 9 ] [ 6 5 ] [ 14 4 ] [ 35 2 ] [ -22 0 ]
[ 2 23 ] [ 2 19 ] [ 2 17 ] [ 15 10 ] [ 6 8 ] [ 8 7 ] [ -3 5 ] [ 44 4 ] [ 22 2 ] [ -18 0 ]
```

## 提示

第一组样例数据的第二行末尾的8 -8，因为幂次-8为负数，所以这一行数据结束，8 -8不要参与计算。

## 思路

首先从输入中读取整数 n，表示要处理的多项式的数量。

然后，在每次循环中，程序读取多项式的系数和指数，并将它们添加到映射中。如果映射中已经存在具有相同指数的项，则将新系数与现有系数相加。

接下来，程序将第一个多项式的项添加到第二个多项式的映射中，并根据需要进行系数相加。

最后，程序将处理后的多项式的每一项添加到一个栈中，然后依次输出每个项的系数和指数。当处理完所有多项式后，程序输出一个换行符，并开始处理下一个多项式。

## Code

### C++ STL

```cpp
#include <bits/stdc++.h>

using namespace std;
 
int main() {
	int n;
	cin >> n;
	for(int i = 1; i <= n; i++) {
		map<int, int> v1, v2;	// v1 -> v2
		stack<pair<int, int>> outputList;
		pair<int, int> temp;
		for(int j = 1; j <= 2; j++) {
			while(cin >> temp.first && cin >> temp.second && temp.second >= 0) {
				if(j == 1) {
					if(v1.count(temp.second) == 0) v1[temp.second] = temp.first;
					else v1[temp.second] += temp.first;
				} else if(j == 2) {
					if(v2.count(temp.second) == 0) v2[temp.second] = temp.first;
					else v2[temp.second] += temp.first;
				}
			}
		}
		for(auto i: v1) {
			if(v2.count(i.first) != 0) v2[i.first] += i.second;
			else v2[i.first] = i.second;
		}
		for(auto i: v2) if(i.second != 0) outputList.push(i);
		while(!outputList.empty()) {
			cout << "[ " << outputList.top().second << " " << outputList.top().first << " ] ";
			outputList.pop();
		}
		cout << endl;
	}
}
```

## 一些不得不说的东西

1. 这道题存在多次输入同一个幂次的情况。
