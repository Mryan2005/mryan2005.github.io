---
title: 回文数
date: 2024-05-18 11:19:15
tags:
- 对数字的处理
categories:
- LeetCode
- 简单题
---

> Problem: [9. 回文数](https://leetcode.cn/problems/palindrome-number/description/)

## 思路

> 先拆分，后对比

## 解题方法

> 有思路可知。

## 复杂度

时间复杂度:
> $O(log_2n)$

空间复杂度:
> O(1)

## Code

```C
bool isPalindrome(int x) {
    if(x < 0) return false;
    int divided[40], ListSize;
    int *p = divided;
    while(x > 0) {
        *(p++) = x % 10;
        x /= 10;
    }
    ListSize = p - divided;
    for(int head = 0, tail = ListSize-1; head < tail; head++, tail--) if(divided[head] != divided[tail]) return false;
    return true;
}
```
  