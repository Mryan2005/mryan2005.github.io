---
title: stack or queue
date: 2024-08-21 23:42:37
tags: [OpenJudge, STL, C++, stack, queue]
categories: OpenJudge
---
总时间限制: 1000ms 内存限制: 65535kB
## 描述
栈和队列都是常用的线性结构，它们都提供两个操作：

Push：加入一个元素。

Pop：弹出一个元素。

不同的是，栈是”先进后出”，而队列则是”先进先出”。

给出一个线性结构的进出顺序，判定这个结构是栈还是队列。

## 输入
第一行输入一个整数t，代表有t组测试数据
对于每组测试数据，第一行输入一个整数n，代表操作的次数。
随后输入n行，每行包含两个整数 type val。
当type = 1时，表示该次操作为push操作，val表示进入的数字。当type=2时，表示该次操作为pop操作，val代表出来的数字。
3<=n<=2000
## 输出
每组测试数据输出一行。
输出改组数据对应的线性结构，”Stack” 或者 “Queue”。
题目保证是栈或者队列的一种。
## 样例输入

```cpp
2
6
1 1
1 2
1 3
2 3
2 2
2 1
4
1 1
1 2
2 1
2 2
```

## 样例输出

```cpp
Stack
Queue
```

## 思路

我想了一下，还是弄两个array来解决这个问题，虽说时间复杂度会是$O(n)$。但是，可以解决目前的问题

## Code

```cpp
#include <bits/stdc++.h>
#define push 1
#define pop 2

using namespace std;
 
int main() {
	int t, n, type;
	cin >> t;
	for(int i = 0; i < t; i++) {
		array<int, 2000> A, B;
		cin >> n;
		int k = 0, o = 0;
		for(int j = 1; j <= n; j++) {
			cin >> type;
			if(type == push) {
				cin >> A[k++];
			} else if(type == pop) {
				cin >> B[o++];
			}
		}
		for(int j = 0; j < o; j++) {
			if(A[j] != B[j]) goto out; 
		}
		cout << "Queue" << endl;
		goto out1;
		out:;
		cout << "Stack" <<endl;
		out1:;
	}
}
```
