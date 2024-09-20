---
title: 二叉搜索树
date: 2024-09-20 09:19:14
tags: [OpenJudge, STL, C++, Tree]
categories: OpenJudge
---

总时间限制: 1000ms 内存限制: 1024kB
## 描述

 二叉搜索树在动态查表中有特别的用处，一个无序序列可以通过构造一棵二叉搜索树变成一个有序序列，构造树的过程即为对无序序列进行排序的过程。每次插入的新的结点都是二叉搜索树上新的叶子结点，在进行插入操作时，不必移动其它结点，只需改动某个结点的指针，由空变为非空即可。

 这里，我们想探究二叉树的建立和序列输出。

## 输入

只有一行，包含若干个数字，中间用空格隔开。（数字可能会有重复）
## 输出

输出一行，对输入数字建立二叉搜索树后进行前序周游的结果。

## 样例输入

```cpp
41 467 334 500 169 724 478 358 962 464 705 145 281 827 961 491 995 942 827 436 
```

## 样例输出

```cpp
41 467 334 169 145 281 358 464 436 500 478 491 724 705 962 827 961 942 995 
```

## 分析

这是有关二叉搜索树+先序遍历的题目

### 二叉搜索树
二叉搜索树（Binary Search Tree，简称BST）是一种特殊的二叉树，它的每个节点最多有两个子节点，并且满足以下条件：
1. 左子树上所有节点的值小于根节点的值；
2. 右子树上所有节点的值大于根节点的值；
3. 对于相同的值不会出现两次；
4. 左右子树也都是二叉搜索树。

### 先序遍历

先序遍历是一种二叉树的遍历方式，也称为前序遍历。具体过程如下：

访问根节点；
递归地先序遍历左子树；
递归地先序遍历右子树。
先序遍历的顺序是根节点->左子树->右子树。

## Code

### 写法1

```cpp
#include <bits/stdc++.h>

using namespace std;

struct TreeNode {
	int data;
	TreeNode *L;
	TreeNode *R;
};

void addNode(TreeNode **T, int data) {
	if(!*T) {
		*T = (TreeNode*)malloc(sizeof(TreeNode));
		(*T)->data = data;
		(*T)->L = (*T)->R = NULL;
	} else {
		TreeNode *p = *T;
		while(p) {
			if(data > p->data) {
				if(p->R) p = p->R;
				else break;
			} else if(data < p->data) {
				if(p->L) p = p->L;
				else break;
			} else if(data == p->data) {
				goto out;
			}
		}
		if(data > p->data) {
			p->R = (TreeNode*)malloc(sizeof(TreeNode));
			p = p->R;
			p->data = data;
			p->L = p->R = NULL;
		} else if(data < p->data) {
			p->L = (TreeNode*)malloc(sizeof(TreeNode));
			p = p->L;
			p->data = data;
			p->L = p->R = NULL;
		}
		out:;
	}
}

void readTree(TreeNode *T) {
	stack<TreeNode*> S;
	TreeNode *p = T;
	while(p || !S.empty()) {
		if(p) {
			printf("%d ", p->data);
			S.push(p);	
			p = p->L;
		} else if(!p) {
			p = S.top()->R;
			S.pop();
		}
	}
}

int main() {
	TreeNode *T = NULL;
	int num;
	while(cin >> num){
		addNode(&T, num);
	}
	readTree(T);
}
```

### 写法2

```cpp
#include <bits/stdc++.h>

using namespace std;

struct TreeNode {
	int data;
	TreeNode *L;
	TreeNode *R;
};

void addNode(TreeNode **T, int data) {
	if(!*T) {
		*T = (TreeNode*)malloc(sizeof(TreeNode));
		(*T)->data = data;
		(*T)->L = (*T)->R = NULL;
	} else {
		TreeNode *p = *T;
		while(p) {
			if(data > p->data) {
				if(p->R) p = p->R;
				else break;
			} else if(data < p->data) {
				if(p->L) p = p->L;
				else break;
			} else if(data == p->data) {
				goto out;
			}
		}
		if(data > p->data) {
			p->R = (TreeNode*)malloc(sizeof(TreeNode));
			p = p->R;
			p->data = data;
			p->L = p->R = NULL;
		} else if(data < p->data) {
			p->L = (TreeNode*)malloc(sizeof(TreeNode));
			p = p->L;
			p->data = data;
			p->L = p->R = NULL;
		}
		out:;
	}
}

void readTree(TreeNode *T) {
	stack<TreeNode*> S;
	TreeNode *p = T;
	while (p) {
		printf("%d ", p->data);
		if (p->L) {
			S.push(p);
			p = p->L;
		} else if (p->R) p = p->R;
		else {
			while (!S.empty() && !p->R) {
				p = S.top();
				S.pop();
			}
			if (p->R) p = p->R;
			else break;
		}
	}
}

int main() {
	TreeNode *T = NULL;
	int num;
	while(cin >> num){
		addNode(&T, num);
	}
	readTree(T);
}
```

## 注意

一般情况下，对于这样的题目，应当用`while(cin >> num)`来控制输入，因为**题目没有给出具体的输入的数的数量**。
