---
title: 统计学生信息
date: 2024-07-10 22:02:05
tags: OpenJudge
categories: OpenJudge
---

总时间限制: 1000ms 内存限制: 65536kB
## 描述
利用动态链表记录从标准输入输入的学生信息（学号、姓名、性别、年龄、得分、地址）

其中,学号长度不超过20, 姓名长度不超过40, 性别长度为1, 地址长度不超过40

<!-- more -->

## 输入
包括若干行，每一行都是一个学生的信息，如：
```
00630018 zhouyan m 20 10.0 28#460
```
输入的最后以"end"结束
## 输出
将输入的内容倒序输出
每行一条记录，按照
```
学号 姓名 性别 年龄 得分 地址
```
的格式输出
## 样例输入
```
00630018 zhouyan m 20 10 28#4600
0063001 zhouyn f 21 100 28#460000
0063008 zhoyan f 20 1000 28#460000
0063018 zhouan m 21 10000 28#4600000
00613018 zhuyan m 20 100 28#4600
00160018 zouyan f 21 100 28#4600
01030018 houyan m 20 10 28#4600
0630018 zuyan m 21 100 28#4600
10630018 zouan m 20 10 28#46000
end
```
## 样例输出
```
10630018 zouan m 20 10 28#46000
0630018 zuyan m 21 100 28#4600
01030018 houyan m 20 10 28#4600
00160018 zouyan f 21 100 28#4600
00613018 zhuyan m 20 100 28#4600
0063018 zhouan m 21 10000 28#4600000
0063008 zhoyan f 20 1000 28#460000
0063001 zhouyn f 21 100 28#460000
00630018 zhouyan m 20 10 28#4600
```

## 思路

### 方法一

使用头插法，将输入的学生信息插入到链表中，然后再将链表倒序输出。

### 方法二

使用链式栈，将输入的学生信息压入栈中，然后再将栈中的元素弹出。

## Code

### C

```c
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
typedef struct node {
	char data[9999999];
	struct node *next;
} Node;
void addNode(Node **head, char data[]) {
	Node *p = (Node*)malloc(sizeof(Node)), *q = *head;
	strcpy((*p).data, data);
	if(*head != 0) {
		*head = p;
		(*p).next = q;
	} else {
		*head = p;
        (**head).next = NULL;
	}
}
void readNode(Node **head) {
	Node *last = *head;
	while(last != 0) {
		printf("%s\n", last->data);
		last = last->next;
	}
}
int main() {
	Node *head = NULL;
	static char data[9999999];
	static int old, grade;
	while(gets(data), strcmp(data, "end")) {
        addNode(&head, data);
	}
	readNode(&head);
}
```

### C++

```cpp
#include <bits/stdc++.h>
#include <iostream>
using namespace std;
int main() {
	string str;
	stack<string> S;
	do {
		getline(cin, str);
		if(str.find("end") == -1) S.push(str);
	} while(str.find("end") == -1);
	while(!S.empty()) {
		cout << S.top() << endl;
		S.pop();
	}
}
```

## 一些感想

其实，将`学号 姓名 性别 年龄 得分 地址`看成是一个整体反而会好很多
这要感谢[Looy_cai的6379:统计学生信息（使用动态链表完成）](https://blog.csdn.net/lalala625/article/details/113534395)
至于，我之前写的是怎样的，看下面的代码

```c
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
typedef struct node {
	char id[20];
	char name[40];
	char sex;
	int old;
	int grade;
	char address[40];
	struct node *next;
} Node;
void addNode(Node **head, char id[], char name[], char sex, int old, int grade, char address[]) {
	Node *p = (Node*)malloc(sizeof(Node)), *q = *head;
	strcpy((*p).id, id);
	strcpy((*p).name, name);
	(*p).sex = sex;
	strcpy((*p).address, address);
	(*p).old = old;
	(*p).grade = grade;
	if(*head != 0) {
		*head = p;
		(*p).next = q;
	} else {
		*head = p;
		(**head).next = NULL;
	}
}
void readNode(Node **head) {
	Node *last = *head;
	while(last != 0) {
		printf("%s %s %c %d %d %s\n", last->id, last->name, last->sex, last->old, last->grade, last->address);
		last = last->next;
	}
}
int main() {
	Node *head = NULL;
	static char id[20], name[40], sex, address[40], *p=id;
	static int old, grade;
	while(scanf("%s", id), strcmp(id, "end")) {
		scanf("%s ", name);
		scanf("%c", &sex);
		scanf("%d", &old);
		scanf("%d", &grade);
		scanf("%s", address);
		addNode(&head, id, name, sex, old, grade, address);
		for(p = id; *p != 0; p++) {
			*p = 0;
		}
	}
	readNode(&head);
}
```