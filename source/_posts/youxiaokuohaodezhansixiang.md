---
title: 有效的括号的栈思想
tags:
  - Stack
categories:
  - LeetCode
abbrlink: a5285d9d
date: 2024-05-19 13:07:11
---


> Problem: [20. 有效的括号](https://leetcode.cn/problems/valid-parentheses/description/)

# 思路

> Mryan2005，觉得要先将不相干的先入栈，然后，当遇到相关的括号时，出栈。

# 解题方法

> 有思路可得

# 复杂度

时间复杂度:
> $O(n)$

空间复杂度:
> $O(n)$

# Code

```C []
typedef struct stackNode {
    char data;
    struct stackNode *next;
} stackNode, *Stack;

void Push(Stack *S, char data) {
    stackNode *p = (stackNode*)malloc(sizeof(stackNode));
    p->data = data;
    p->next = *S;
    *S = p;
}
char GetHead(Stack S) {return S? S->data: 0;}
char Pop(Stack *S) {
    char data;
    stackNode *p = *S;
    data = p->data;
    *S = (*S)->next;
    free(p);
    return data;
}
bool isValid(char* s) {
    Stack S = NULL;
    for(char *p = s, c; *p != 0; p++) {
        if(S) {
            c = GetHead(S);
            if(c == '(' && *p == ')') Pop(&S);
            else if(c == '[' && *p == ']') Pop(&S);
            else if(c == '{' && *p == '}') Pop(&S);
            else Push(&S, *p);
        } else Push(&S, *p);
    }
    if(!S) return true;
    else return false;
}
```
  