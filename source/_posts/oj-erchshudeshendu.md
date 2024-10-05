---
title: 二叉树的深度
date: 2024-10-05 16:04:42
tags: [OpenJudge, C++, 二叉树]
categories: OpenJudge
---

总时间限制: 1000ms 内存限制: 65535kB

## 描述

给定一棵二叉树，求该二叉树的深度

二叉树深度定义：从根结点到叶结点依次经过的结点（含根、叶结点）形成树的一条路径，最长路径的节点个数为树的深度

## 输入

第一行是一个整数n，表示二叉树的结点个数。二叉树结点编号从1到n，根结点为1，n <= 10
接下来有n行，依次对应二叉树的n个节点。
每行有两个整数，分别表示该节点的左儿子和右儿子的节点编号。如果第一个（第二个）数为-1则表示没有左（右）儿子

## 输出

输出一个整型数，表示树的深度

## 样例输入

```cpp
3
2 3
-1 -1
-1 -1
```

## 样例输出

```cpp
2
```

## 分析

1. 它的输入部分非常符合层序输出的序列，所以，我们可以搭建一个队列，然后将数据输入。
2. 获得深度——实质上用`max(getDepth(T->l)+1, getDepth(T->r)+1);`就可以了。

## Code

```cpp
#include <bits/stdc++.h>
using namespace std;
struct BinTree {
	int data;
	BinTree *l, *r;
};

int max(int a, int b) {
	return a > b? a: b;
}

int getDepth(BinTree *T) {
	if(T) return max(getDepth(T->l)+1, getDepth(T->r)+1);
	else return 0;
}

int main() {
	BinTree *T = (BinTree*)malloc(sizeof(BinTree));
	queue<BinTree **> Q;
	int data;
	scanf("%d", &data);
	T->data = 1;
	Q.push(&T);
	Q.push(&(*(Q.front()))->l);
	Q.push(&(*(Q.front()))->r);
	Q.pop();
	while(!Q.empty()) {
		scanf("%d", &data);
		if(data == -1) {
			*(Q.front()) = NULL;
			Q.pop();
		} else {
			*(Q.front()) = (BinTree*)malloc(sizeof(BinTree));
			(*(Q.front()))->data = data;
			Q.push(&(*(Q.front()))->l);
			Q.push(&(*(Q.front()))->r);
			Q.pop();
		}
	}
	printf("%d", getDepth(T));
}
```
