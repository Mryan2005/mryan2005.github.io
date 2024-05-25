---
title: 使用 “自带栈” 解决中序遍历（2）
date: 2024-05-25 13:12:50
tags:
- 二叉树的中序遍历
- 栈
- 二叉树
categories:
- LeetCode
- 简单题
---


> Problem: [94. 二叉树的中序遍历](https://leetcode.cn/problems/binary-tree-inorder-traversal/description/)

## 思路

> 我们都知道中序遍历是左边——>中间——>右边

## 解题方法

1. 一直向左边走
2. 到达左边尽头后弹出并打印，然后向右边走一个。
3. 继续一直向左边走。
4. 到达左边尽头后弹出并打印，然后向右边走一个。
5. 结束条件是p和栈S都为空。

## 复杂度

时间复杂度:
> $O(n)$

空间复杂度:
> $O(n)$

## Code

```C
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */

typedef struct StackNode {
 struct TreeNode **TreeNode;
 struct StackNode *next;
} StackNode, *Stack;

void Push(Stack *S, struct TreeNode **tNode) {
 StackNode *SN = (StackNode*)malloc(sizeof(StackNode));
 SN->TreeNode = tNode;
 if(!*S) {
  SN->next = NULL;
  (*S) = SN; 
 } else {
  SN->next = *S;
  *S = SN;
 }
}

// 出栈
struct TreeNode **Pop(Stack *S) {
 if(*S) {
  struct TreeNode **p = (*S)->TreeNode;
  StackNode *q = *S;
  (*S) = (*S)->next;
  free(q);
  return p;
 } else return NULL;
}

int* inorderTraversal(struct TreeNode* root, int* returnSize) {
    Stack S = NULL;
    struct TreeNode *p = root;
    int *a = (int*)malloc(sizeof(int) * 100), *q = a;
    if(root) Push(&S, &root);
 while(p || S) {
  if(p) {
   if(p->left) Push(&S, &p->left);
   p = p->left;
  } else {
   p = *Pop(&S);
            *(q++) = p->val;
            if(p->right) Push(&S, &p->right);
            p = p->right;
  }
 }
    *returnSize = q - a;
    return a;
}
```
  