---
title: 重新排列数组
tags:
  - 数组
categories:
  - LeetCode
  - 简单题
abbrlink: 95f3cae3
date: 2024-05-20 17:18:08
---

> Problem: [1470. 重新排列数组](https://leetcode.cn/problems/shuffle-the-array/description/)

# 思路

> 由题可知，x的部分被放在0\~n/2-1处，y的部分放在n/2\~n处，而重排是按照$[x_1, y_1, ……, x_n, y_n]$摆放。

# 解题方法

> 解题方法如Code所示。

# 复杂度

时间复杂度:
> $O(n)$

空间复杂度:
> $O(n)$

# Code

```C []
int* shuffle(int* nums, int numsSize, int n, int* returnSize){
    int *q = (int*)malloc(sizeof(int)*2*n);
    *returnSize = 2*n;
    for(int i = 0, p = 0; i < numsSize/2; i++, p += 2) q[p] = nums[i];
    for(int i = numsSize/2, p = 1; i < numsSize; i++, p += 2) q[p] = nums[i];
    return q;
}
```
  