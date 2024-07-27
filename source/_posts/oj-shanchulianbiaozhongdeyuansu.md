---
title: 删除数组中的元素（链表）
date: 2024-07-27 09:00:53
tags: [C++, OpenJudge, LinkedList]
categories: OpenJudge
---

总时间限制: 1000ms 内存限制: 65536kB

## 描述

给定N个整数，将这些整数中与M相等的删除  
假定给出的整数序列为：1,3,3,0,-3,5,6,8,3,10,22,-1,3,5,11,20,100,3,9,3  
应该将其放在一个链表中，链表长度为20  
要删除的数是3，删除以后，链表中只剩14个元素：1 0 -3 5 6 8 10 22 -1 5 11 20 100 9  

要求：必须使用链表，不允许使用数组,也不允许不删除元素直接输出  
程序中必须有链表的相关操作：建立链表，删除元素，输出删除后链表中元素，释放链表  
不符合要求的程序即使通过，也会算作0分  

## 输入

输入包含3行：
第一行是一个整数n(1 <= n <= 200000)，代表数组中元素的个数。
第二行包含n个整数，代表数组中的n个元素。每个整数之间用空格分隔；每个整数的取值在32位有符号整数范围以内。
第三行是一个整数k，代表待删除元素的值（k的取值也在32位有符号整数范围内）。

## 输出

输出只有1行：
将数组内所有待删除元素删除以后，输出数组内的剩余元素的值，每个整数之间用空格分隔。

## 样例输入

```cpp
20
1 3 3 0 -3 5 6 8 3 10 22 -1 3 5 11 20 100 3 9 3
3
```

## 样例输出

```cpp
1 0 -3 5 6 8 10 22 -1 5 11 20 100 9
```

## 思路

1. 用`struct node {int data; node *next;};`定义链表
2. 用`typedef node *List;`定义链表指针
3. 用`List init()`初始化链表
4. 用`for`循环输入链表
5. 用`for`循环删除链表中的元素，注意这里删除操作中的`q = q->next`要放在`for`语句之外，否则会出现邻近的元素没被删除的情况。（注意：将结点删除后，要释放结点的内存空间）
6. 用`for`循环输出链表中的元素

## Code

### C++

```cpp
#include <bits/stdc++.h>
using namespace std;

struct node {int data; node *next;};
typedef node *List;

List init() {
	List L = (node*)malloc(sizeof(node));
	L->next = NULL;
	return L;
}

int main() {
	List L = init(); node *p = L; int n, b;
	cin >> n;
	for(int i = 1; i <= n; i++) {
		p->next = (node*)malloc(sizeof(node));
		p = p->next;
		p->next = NULL;
		cin >> p->data;
	}
	cin >> b;
	for(node *q = L, *k; q && q->next;) {
		if(q->next->data == b) {k = q->next; q->next = k->next; free(k);} else q = q->next;
	}
	int i = 0;
	for(node *q = L->next; q; q = q->next) {
		if(i++ == 0) cout << q->data;
		else cout << " " << q->data;
	}
}
```

### C

```c
#include <stdio.h>
#include <stdlib.h>

typedef struct node {int data; struct node *next;} node;

node *init() {
    node *L = (node*)malloc(sizeof(node));
    L->next = NULL;
    return L;
}

int main() {
    node *L = init(), *p = L, *q, *k; int n, b;
    scanf("%d", &n);
    for(int i = 1; i <= n; i++) {
        p->next = (node*)malloc(sizeof(node));
        p = p->next;
        p->next = NULL;
        scanf("%d", &p->data);
    }
    scanf("%d", &b);
    for(q = L; q && q->next;) {
        if(q->next->data == b) {k = q->next; q->next = k->next; free(k);} else q = q->next;
    }
    int i = 0;
    for(q = L->next; q; q = q->next) {
        if(i++ == 0) printf("%d", q->data);
        else printf(" %d", q->data);
    }
}
```
