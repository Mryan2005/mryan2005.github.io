---
title: 二叉树的操作
date: 2024-10-05 16:08:05
tags: [OpenJudge, C++, 二叉树]
categories: OpenJudge
---

总时间限制: 1000ms 内存限制: 65535kB

## 描述

给定一棵二叉树，在二叉树上执行两个操作：

1. 节点交换
    把二叉树的两个节点交换。
2. 前驱询问
    询问二叉树的一个节点对应的子树最左边的节点。

## 输入

第一行输出一个整数t(t <= 100)，代表测试数据的组数。

对于每组测试数据，第一行输入两个整数n m，n代表二叉树节点的个数，m代表操作的次数。

随后输入n行，每行包含3个整数X Y Z，对应二叉树一个节点的信息。X表示节点的标识，Y表示其左孩子的标识，Z表示其右孩子的标识。

再输入m行，每行对应一次操作。每次操作首先输入一个整数type。

当type=1，节点交换操作，后面跟着输入两个整数x y，表示将标识为x的节点与标识为y的节点交换。输入保证对应的节点不是祖先关系。

当type=2，前驱询问操作，后面跟着输入一个整数x，表示询问标识为x的节点对应子树最左的孩子。

1<=n<=100，节点的标识从0到n-1，根节点始终是0.
m<=100

## 输出

对于每次询问操作，输出相应的结果。

## 样例输入

```cpp
2
5 5
0 1 2
1 -1 -1
2 3 4
3 -1 -1
4 -1 -1
2 0
1 1 2
2 0
1 3 4
2 2
3 2
0 1 2
1 -1 -1
2 -1 -1
1 1 2
2 0
```

## 样例输出

```cpp
1
3
4
2
```

## 思路

由输入用例可以知道，我们可以使用一个二维数组来储存这棵树`a[101][2]`，然后剩余的操作就看代码吧

## Code

```cpp
#include <bits/stdc++.h>
using namespace std;

int a[101][2] = {};    /* ChildL, ChildR */

void createTree(int n) {
    int index, ChildL, ChildR;
    for(int i = 1; i <= n; ++i) {
        cin >> index >> ChildL >> ChildR;
        a[index][0] = ChildL;
        a[index][1] = ChildR;
    }
}

void swap(int x, int y, int n) {
    pair<int, bool> pX, pY;     // indexId, l(0), r(1)
    for(int i = 0; i < n ; ++i) {
        if(x == a[i][0]) {
            pX.first = i;
            pX.second = 0;
            break;
        } else if(x == a[i][1]) {
            pX.first = i;
            pX.second = 1;
            break;
        }
    }
    for(int i = 0; i < n ; ++i) {
        if(y == a[i][0]) {
            pY.first = i;
            pY.second = 0;
            break;
        } else if(y == a[i][1]) {
            pY.first = i;
            pY.second = 1;
            break;
        }
    }
    if(pX.second == 0) {
        a[pX.first][0] = y;
    } else {
        a[pX.first][1] = y;
    }
    if(pY.second == 0) {
        a[pY.first][0] = x;
    } else {
        a[pY.first][1] = x;
    }
}

void findLeftestChildAndPrint(int beginP) {
    while(a[beginP][0] != -1) {
        beginP = a[beginP][0];
    }
    cout << beginP << endl;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(0);
    cout.tie(0);
    int t, n, m, typ, x, y;
    cin >> t;
    for(int i = 1;i <= t; ++i) {
        cin >> n >> m;
        createTree(n);
        for(int j = 1; j <= m; ++j) {
            cin >> typ;
            if(typ == 1) {
                cin >> x >> y;
                swap(x, y, n);
            } else {
                cin >> x;
                findLeftestChildAndPrint(x);
            }
            
        }
    }
}
```
