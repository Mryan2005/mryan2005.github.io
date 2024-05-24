---
title: 回文数
tags:
  - 对数字的处理
categories:
  - LeetCode
  - 简单题
abbrlink: df58b0a0
date: 2024-05-18 11:19:15
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

## 一些碎碎念

有时候，我，Mryan2005，有一种感觉，就是上了大学，但还是逃不过各个学科的考试，基本上只要有一个学科考试，你就得抽出至少一天的时间去准备，这就导致了我很少有时间刷题，但是我还是会坚持下去吧，毕竟，刷题只是为了有一种收剑入鞘的感觉。
