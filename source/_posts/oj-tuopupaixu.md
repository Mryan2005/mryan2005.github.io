---
title: 拓扑排序
date: 2024-10-05 16:12:01
tags: [OpenJudge, C++, 拓扑排序]
categories: OpenJudge
---

总时间限制: 10000ms 内存限制: 1000kB

## 描述

给出一个图的结构，输出其拓扑排序序列，要求在同等条件下，编号小的顶点在前

## 输入

若干行整数，第一行有2个数，分别为顶点数v和弧数a，接下来有a行，每一行有2个数，分别是该条弧所关联的两个顶点编号

## 输出

若干个空格隔开的顶点构成的序列(用小写字母)

## 样例输入

```
6 8
1 2
1 3
1 4
3 2
3 5
4 5
6 4
6 5
```

## 样例输出

```
v1 v3 v2 v6 v4 v5
```

## 思路

其实吧，我们都知道拓扑排序存在于有向无环图中，所以我们可以先将图用邻接矩阵表示出来，然后再用一个数组来存储每个节点的入度，然后再用一个数组来存储是否被选择过，最后再用一个数组来存储结果，以下为代码：

```cpp
int ar[1024][1024];
int f[1024];
bool isSelect[1024];
```

由于这三个数组都是全局变量，所以不需要初始化，接下来就是处理函数了：

```cpp
void process(int n) {
    for(int i = 1; i <= n; ++i) {
        for(int j = 1; j <= n; ++j) {
            if(ar[i][j] == 1) {
                ++f[j];
            }
        }
    }
}
```

这个函数的作用是用于将每个节点的入度存储到数组f中，接下来就是选择函数了：

```cpp
int select(int n) {
    for(int i = 1; i <= n; ++i) {
        if(f[i] == 0 && isSelect[i] != true) {
            isSelect[i] = true;
            return i;
        }
    }
}
```

这个函数的作用是用于选择入度为0的节点，然后将其返回，同时标记这个点已被选择，接下来就是删除函数了：

```cpp
void remove(int id, int n) {
    for(int i = 1; i <= n; ++i) {
        if(ar[id][i] == 1) {
            --f[i];
        }
    }
}
```

这个函数用于结点`id`所连接的节点的入度减1。

这三个函数也就是拓扑排序的核心了——预处理、选择、删除。

## Code

```cpp
#include <bits/stdc++.h>
using namespace std;
int ar[1024][1024];
int f[1024];
bool isSelect[1024];
vector<int> res;

void process(int n) {
    for(int i = 1; i <= n; ++i) {
        for(int j = 1; j <= n; ++j) {
            if(ar[i][j] == 1) {
                ++f[j];
            }
        }
    }
}

int select(int n) {
    for(int i = 1; i <= n; ++i) {
        if(f[i] == 0 && isSelect[i] != true) {
            isSelect[i] = true;
            return i;
        }
    }
}

void remove(int id, int n) {
    for(int i = 1; i <= n; ++i) {
        if(ar[id][i] == 1) {
            --f[i];
        }
    }
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);
    int v, a, b, c, n;
    cin >> v >> a;
    n = v;
    res.reserve(n);
    for(int i = 1; i <= a; ++i) {
        cin >> b >> c;
        ar[b][c] = 1;
    }
    process(v);
    while(n--) {
        int id = select(v);
        remove(id, v);
        res.push_back(id);
    }
    for(auto i: res) cout << "v" << i << " ";
}
```