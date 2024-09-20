---
title: 位查询
date: 2024-09-20 09:20:34
tags: [OpenJudge, STL, C++, Bit]
categories: OpenJudge
---

总时间限制: 5000ms 内存限制: 65536kB
## 描述
   给出N个范围在[0, 65535]的整数，编程支持以下的操作：


（1）修改操作：C d，所有的数都增加d。如果超过65535，把结果模65536。 0 <= d <= 65535
（2）查询操作：Q i，统计在N个正整数中有多少个整数其对应的二进制形式的第i位二进制位为非0。0 <= i <= 15。并且最低位i为0。


最后，输出所有查询操作的统计值。

## 输入
输入的第一行为两个正整数N,M,其中N为操作的整数的个数，而M为具体有多少个操作。
输入的第二行为N个正整数，为进行操作的N个正整数。
下面有M行，分别表示M个操作。

N<=100000,M<=200000
## 输出
输出所有查询操作Q的统计值，每一个查询操作统计结果输出为一行。
## 样例输入

```cpp
3 5
1 2 4
Q 1
Q 2
C 1
Q 1
Q 2
```

## 样例输出

```cpp
1
1
2
1
```

## 提示
只输出查询操作Q的统计值。

## 分析

1. 这是一个搜索问题。
2. 在这个问题中，能够使用一个这样的数据结构——二元组`pair<int, string>`。
3. 不要用stack修改二元组当中的输出循序，要是用了stack修改输出顺序，那会让你的编写代码的难度提升不少。
4. 用C语言和C++的混合体会快一些。

## Code

### 方法一

```cpp
#include <bits/stdc++.h>
using namespace std;
string fun(int num) {
	string res;
	while(num > 0) {
		res.insert(res.end(), (num%2)+'0');
		num /= 2;
	}
	return res;
}

int main() {
	int N, M, i, d;
	char op;
	scanf("%d %d", &N, &M);
	int a[N];
	string b[N];
	for(int i = 0; i < N; ++i) {
		scanf("%d", &a[i]);
		b[i] = fun(a[i]);
	}
	for(int k = 1; k <= M; ++k) {
		cin >> op;
		if(op == 'Q') {
			int count = 0;
			cin >> i;
			for(int j = 0; j < N; ++j) {
				if(b[j].size() <= i) continue;
				else {
					if(b[j][i] != '0') count++;
				}
			}
			cout << count << endl;
		} else {
			cin >> d;
			for(int j = 0; j < N; ++j) {
				a[j] = (a[j]+d)%65536;
				b[j] = fun(a[j]);
			}
		}
	}
}
```

### 方法二

```cpp
#include <bits/stdc++.h>
using namespace std;
pair<int, string> fun(int num) {
	pair<int, string> res;
	res.first = num;
	while (num > 0) {
		res.second.insert(res.second.end(), (num % 2) + '0');
		num /= 2;
	}
	return res;
}
int main() {
	int N, M, i, d, num;
	char op;
	scanf("%d %d", &N, &M);
	pair<int, string> a[N];
	for (int i = 0; i < N; ++i) {
		scanf("%d", &num);
		a[i] = fun(num);
	}
	for (int k = 1; k <= M; ++k) {
		cin >> op;
		if (op == 'Q') {
			int count = 0;
			cin >> i;
			for (int j = 0; j < N; ++j) {
				if (a[j].second.size() <= i) continue;
				else {
					if (a[j].second[i] != '0') count++;
				}
			}
			printf("%d\n", count);
		} else {
			cin >> d;
			for (int j = 0; j < N; ++j) {
				num = (a[j].first + d) % 65536;
				a[j] = fun(num);
			}
		}
	}
}
```
