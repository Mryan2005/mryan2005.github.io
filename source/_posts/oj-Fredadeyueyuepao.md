---
title: Freda的越野跑
date: 2024-10-05 16:09:20
tags: [OpenJudge, C++, 归并排序, 逆序对]
categories: OpenJudge
---

总时间限制: 1000ms 内存限制: 262144kB

## 描述

Freda报名参加了学校的越野跑。越野跑共有N人参加，在一条笔直的道路上进行。这N个人在起点处站成一列，相邻两个人之间保持一定的间距。比赛开始后，这N个人同时沿着道路向相同的方向跑去。换句话说，这N个人可以看作x轴上的N个点，在比赛开始后，它们同时向x轴正方向移动。
假设越野跑的距离足够远，这N个人的速度各不相同且保持匀速运动，那么会有多少对参赛者之间发生“赶超”的事件呢？

## 输入

第一行1个整数N。
第二行为N 个非负整数，按从前到后的顺序给出每个人的跑步速度。
对于50%的数据，2<=N<=1000。
对于100%的数据，2<=N<=100000。

## 输出

一个整数，表示有多少对参赛者之间发生赶超事件。

## 样例输入

```cpp
5
1 3 10 8 5
```

## 样例输出

```cpp
7
```

## 提示

我们把这5个人依次编号为A,B,C,D,E，速度分别为1,3,10,8,5。
在跑步过程中：
B,C,D,E均会超过A，因为他们的速度都比A快；
C,D,E都会超过B，因为他们的速度都比B快；
C,D,E之间不会发生赶超，因为速度快的起跑时就在前边。

## Code

### 最开始时候的想法

```cpp
#include <bits/stdc++.h>
using namespace std;
array<int, 100003> a;
long res;

void merge(int begin1, int mid, int end1) {
    array<int, 100003> b, c;
    int l1 = 0, l2 = 0;
    for(int i = begin1; i <= mid; ++i) {
        b[l1++] = a[i];
    }
    for(int i = mid+1; i <= end1; ++i) {
        c[l2++] = a[i];
    }
    int i = 0, j = 0, k = begin1;
    while(j < l2 && i < l1) {
        if(b[i] >= c[j]) {
            a[k] = b[i++];
        } else {
            a[k] = c[j++];
            res += mid+j-k;
        }
        ++k;
    }
    while(i < l1) a[k++] = b[i++];
    while(j < l2) a[k++] = c[j++];
}

void mergesort(int begin1, int end1) {
    if(begin1 == end1) return;
    mergesort(begin1, (begin1+end1)/2);
    mergesort((begin1+end1)/2+1, end1);
    merge(begin1, (begin1+end1)/2, end1);
}

int main() {
    int N;
    scanf("%d", &N);
    for(int i = 0; i < N; ++i) {
        scanf("%d", &a[i]);
    }
    mergesort(0, N-1);
    printf("%ld\n", res);
    res = 0;
}
```
