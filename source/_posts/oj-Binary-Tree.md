---
title: Binary Tree
date: 2024-10-05 16:10:16
tags: [OpenJudge, C++, 二叉树]
categories: OpenJudge
---

总时间限制: 1000ms 内存限制: 65536kB

## 描述

Background
Binary trees are a common data structure in computer science. In this problem we will look at an infinite binary tree where the nodes contain a pair of integers. The tree is constructed like this:
The root contains the pair (1, 1).
If a node contains (a, b) then its left child contains (a + b, b) and its right child (a, a + b)

## Problem

Given the contents (a, b) of some node of the binary tree described above, suppose you are walking from the root of the tree to the given node along the shortest possible path. Can you find out how often you have to go to a left child and how often to a right child?

## 输入

The first line contains the number of scenarios.
Every scenario consists of a single line containing two integers i and j (1 <= i, j <= 2*109) that represent
a node (i, j). You can assume that this is a valid node in the binary tree described above.

## 输出

The output for every scenario begins with a line containing "Scenario #i:", where i is the number of the scenario starting at 1. Then print a single line containing two numbers l and r separated by a single space, where l is how often you have to go left and r is how often you have to go right when traversing the tree from the root to the node given in the input. Print an empty line after every scenario.

## 样例输入

```cpp
3
42 1
3 4
17 73
```

## 样例输出

```cpp
Scenario #1:
41 0

Scenario #2:
2 1

Scenario #3:
4 6
```

## 来源

TUD Programming Contest 2005 (Training Session), Darmstadt, Germany

## Code

一开始，我的想法是用广度优先搜索来解决，好吧，其实，也没必要用这个东西来解决

```cpp
#include <bits/stdc++.h>
using namespace std;

struct node {
    int countL, countR, a, b;
};

pair<int,int> solve(int a, int b) {
    queue<node> q;
    node f;
    if(a - b >= 1) q.push({1, 0, a-b, b});
    if(b - a >= 1) q.push({0, 1, a, b-a});
    while(!q.empty()) {
        f = q.front();
        if(f.a == 1 && f.b == 1) {
            return make_pair(f.countL, f.countR);
        }
        q.pop();
        if(f.a - f.b >= 1) q.push({f.countL+1, f.countR, f.a-f.b, f.b});
        if(f.b - f.a >= 1) q.push({f.countL, f.countR+1, f.a, f.b-f.a});
    }
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(0); cout.tie(0);
    int N, a, b;
    cin >> N;
    for(int i = 1; i <= N; ++i) {
        cin >> a >> b;
        pair<int, int> res = solve(a, b);
        cout << "Scenario #"<< i << ": \n" << res.first << " " << res.second << endl << endl;
    }
}
```

毫无疑问，不负众望，直接超时了。

这该怎么办？

你有没有发现一个事情

其实，可以用乘除运算来解决。
即`a1 = a1 % b1`，`b1 = b1 % a1`，`countL`和`countR`分别是`a1 / b1`和`b1 / a1`。

说是怎么说，但是我们要考虑到一个问题——当`a1 % b1`或者`b1 % a1`等于0的时候，我们要对`countL`和`countR`进行处理——减1，由于是整除关系，`a1`和`b1`如果直接使用`a1 % b1`和`b1 % a1`的话，会变成`0`，所以我们要对`a1`和`b1`进行处理——使其变成`1`即可。

```cpp
#include <bits/stdc++.h>
using namespace std;
long countL, countR, a1, b1;

void solve(long a, long b) {
    countL = countR = 0;
    a1 = a;
    b1 = b;
    while(a1 != 1 || b1 != 1) {
        if(a1 > b1) {
            countL += a1/b1;
            if(a1 % b1 == 0) {
                --countL;
                a1 = 1;
            } else {
                a1 = a1 % b1;
            }
        } else {
            countR += b1 / a1;
            if(b1 % a1 == 0) {
                --countR;
                b1 = 1;
            } else {
                b1 = b1 % a1;
            }
        }
    }
}

int main() {
    long N, a, b;
    scanf("%ld", &N);
    for(long i = 1; i <= N; ++i) {
        scanf("%ld %ld", &a, &b);
        solve(a, b);
        printf("Scenario #%ld:\n%ld %ld\n\n", i, countL, countR);
    }
}
```
