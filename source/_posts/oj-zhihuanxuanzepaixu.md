---
title: 置换选择排序
date: 2024-10-05 16:12:45
tags: [OpenJudge, C++, 外排序, 置换选择排序]
categories: OpenJudge
---

总时间限制: 1000ms 内存限制: 65536kB
描述
给定初始整数顺串，以及大小固定并且初始元素已知的二叉最小堆（为完全二叉树或类似完全二叉树，且父元素键值总小于等于任何一个子结点的键值），要求利用堆实现置换选择排序，并输出第一个顺串。例如给定初始顺串29,14,35,13,以及堆（记为16 19 31 25 21 56 40）， 置换选择排序得到的第一个顺串为16 19 21 25。

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/34f0390f5f384d8797d8ef43adf47c39.png)


## 输入
第一行包含两个整数，m为初始顺串的数的个数，n为二叉最小堆的大小
第二行包含m个整数，即初始顺串
第三行包含n个整数，即已经建好的堆的元素（有序，按照从堆顶到堆底，从左到右的顺序）
## 输出
输出包含一行，即第一个顺串。
## 样例输入

```cpp
4 7
29 14 35 13
16 19 31 25 21 56 40
```

## 样例输出

```cpp
16 19 21 25
```

## 思路

1. 我们知道这是一个小根堆，堆顶元素是最小的，我们可以将堆顶元素取出，将其放入`res`数组中，然后将堆顶元素删除，注意，在这一步当中是不用关注初始化顺串的元素的。
2. 然后将初始的顺串中的下一个元素放入堆中，然后调整堆，使其满足堆的性质。
   1. 如果初始的顺串被选中的元素比`res`数组中的最后一个元素大，那么就将这个元素放入堆中，然后调整堆；否则将这个元素先放入堆，然后与堆的最后一个元素交换，堆的大小减一，最后调整堆。
2. 然后将堆顶元素取出，放入`res`数组中，然后将堆顶元素删除。
4. 重复上述步骤2、3，直到堆为空或者初始顺串中的元素全部被替换。

看完原理，我们可以将代码分为两个部分，一个是调整堆的代码，一个是置换选择排序的代码。

## 代码解析

先说调整堆的代码：

```cpp
void reflushHeap(int n) {
    int i = 1;
	while(2*i <= n || 2*i+1 <= n) {
		if(2*i <= n && 2*i+1 <= n) {
			if(ar[2*i] < ar[2*i+1]) {
				if(ar[i] > ar[2*i]) {
					swap(ar[i], ar[2*i]);
					i = 2*i;
				}
			} else {
				if(ar[i] > ar[2*i+1]) {
					swap(ar[i], ar[2*i+1]);
					i = 2*i+1;
				}
			}
		} else if(2*i <= n && 2*i+1 > n) {
			if(ar[i] > ar[2*i]) {
				swap(ar[i], ar[2*i]);
				i = 2*i;
			}	
		} else break;
	}
}
```

然后是置换选择排序的代码：
这代码在排除输入部分之后是这样的：

```cpp
while(t--) {
    if(n <= 0) break;
    res.push_back(ar[1]);
    if(res.back() > in[j]) {
        ar[1] = in[j];
        swap(ar[1], ar[n]);
        --n;
        reflushHeap(n);
    } else {
        ar[1] = in[j];
        reflushHeap(n);
    }
    ++j;
}
```

## Code

```cpp
#include <bits/stdc++.h>
#pragma GCC optimize(3,"Ofast","inline")
using namespace std;

int ar[1024], in[1024];

void reflushHeap(int n) {
	int i = 1;
	while(2*i <= n || 2*i+1 <= n) {
		if(2*i <= n && 2*i+1 <= n) {
			if(ar[2*i] < ar[2*i+1]) {
				if(ar[i] > ar[2*i]) {
					swap(ar[i], ar[2*i]);
					i = 2*i;
				}
			} else {
				if(ar[i] > ar[2*i+1]) {
					swap(ar[i], ar[2*i+1]);
					i = 2*i+1;
				}
			}
		} else if(2*i <= n && 2*i+1 > n) {
			if(ar[i] > ar[2*i]) {
				swap(ar[i], ar[2*i]);
				i = 2*i;
			}	
		} else break;
	}
}

int main() {
	vector<int> res;
	ios::sync_with_stdio(false);
	cin.tie(nullptr);
	cout.tie(nullptr);
	int m, n, t, j = 1;
	cin >> m >> n;
	res.reserve(m);
	for(int i = 1; i <= m; ++i) {
		cin >> in[i];
	}
	for(int i = 1; i <= n; ++i) {
		cin >> ar[i];
	}
	t = m;
	while(t--) {
		if(n <= 0) break;
		res.push_back(ar[1]);
		if(res.back() > in[j]) {
			ar[1] = in[j];
			swap(ar[1], ar[n]);
			--n;
			reflushHeap(n);
		} else {
			ar[1] = in[j];
			reflushHeap(n);
		}
		++j;
	}
	for(auto i: res) {
		cout << i << " ";
	}
}
```