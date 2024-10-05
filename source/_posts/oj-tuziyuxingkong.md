---
title: 兔子与星空
date: 2024-10-05 16:11:08
tags: [OpenJudge, C++, 最小生成树]
categories: OpenJudge
---

总时间限制: 1000ms 内存限制: 10000kB

## 描述

很久很久以前，森林里住着一群兔子。兔子们无聊的时候就喜欢研究星座。如图所示，天空中已经有了n颗星星，其中有些星星有边相连。兔子们希望删除掉一些边，然后使得保留下的边仍能是n颗星星连通。他们希望计算，保留的边的权值之和最小是多少？

## 输入

第一行只包含一个表示星星个数的数n，n不大于26，并且这n个星星是由大写字母表里的前n个字母表示。接下来的n-1行是由字母表的前n-1个字母开头。最后一个星星表示的字母不用输入。对于每一行，以每个星星表示的字母开头，然后后面跟着一个数字，表示有多少条边可以从这个星星到后面字母表中的星星。如果k是大于0，表示该行后面会表示k条边的k个数据。每条边的数据是由表示连接到另一端星星的字母和该边的权值组成。权值是正整数的并且小于100。该行的所有数据字段分隔单一空白。该星星网络将始终连接所有的星星。该星星网络将永远不会超过75条边。没有任何一个星星会有超过15条的边连接到其他星星（之前或之后的字母）。在下面的示例输入，数据是与上面的图相一致的。

## 输出

输出是一个整数，表示最小的权值和。

## 样例输入

```
9
A 2 B 12 I 25
B 3 C 10 H 40 I 8
C 2 D 18 G 55
D 1 E 44
E 2 F 60 G 38
F 0
G 1 H 35
H 1 I 35
```

## 样例输出

```
216
```

## 提示

考虑看成最小生成树问题，注意输入表示。

## 思路

这道题是一个最小生成树的问题，我们可以用Prim算法来解决，默认从A开始，然后不断更新最小生成树，更新的办法就是先找到一个点，然后找到这个点到未访问的、可到达的顶点的权值。若出现比之前更小的权值，则要修改，否则，不用，最后标记这个点已访问，后面就是重复这个过程，直到所有的点都被访问。

## 代码

```cpp
#include <bits/stdc++.h>
using namespace std;

int reres;
unordered_map<char, int> mp1;
int map_[26][26], weight[26], parent[26];
char wl[26];
bool isSelect[26];

void initMap_() {
    for(int i = 0; i < 26; ++i) {
        for(int j = 0; j < 26; ++j) {
            map_[i][j] = INT_MAX;
        }
    }
}

void initwl() {
    for(int i = 0; i < 26; ++i) {
        wl[i] = 'A'+i;
        mp1['A'+i] = i;
        weight[i] = INT_MAX;
        isSelect[i] = false;
    }
}

int findMin() {
    int res = INT_MAX, id;
    for(int i = 0; i < 26; ++i) {
        if(isSelect[i] == false && res > weight[i]) {
            res = weight[i];
            id = i;
        }
    }
    return id;
}

void add(int nodeId) {
    isSelect[nodeId] = true;
    reres += weight[nodeId];
    for(int i = 0; i < 26; ++i) {
        if(weight[i] > map_[nodeId][i] && isSelect[i] == false) {
            weight[i] = map_[nodeId][i];
            parent[i] = nodeId;
        }
    }
}

void solve(int n) {
    parent[0] = -1;
    weight[0] = 0;
    int nimId = 0;
    while(n--) {
        add(nimId);
        nimId = findMin();
    }
}

void inputData(int n) {
    int m, c;
    char w, d;
    for(int i = 0; i < n-1; ++i) {
        cin >> w >> m;
        for(int j = 1; j <= m; ++j) {
            cin >> d >> c;
            map_[w-'A'][d-'A'] = c;
            map_[d-'A'][w-'A'] = c;
        }
    }
}

int main() {
    int n;
    initwl();
    initMap_();
    scanf("%d", &n);
    inputData(n);
    solve(n);
    printf("%d", reres);
}
```

## 代码解析

如果以算法的格式去展现这个算法，那么就是这样的：

```cpp
int reres;
unordered_map<char, int> mp1;
int map_[26][26], weight[26], parent[26];
char wl[26];
bool isSelect[26];
```

findMin函数是用来找到在`weight`数组中最小的权值的点的函数，它的原理是遍历所有的点，找到最小的权值的点。

```cpp
int findMin() {
    int res = INT_MAX, id;
    for(int i = 0; i < 26; ++i) {
        if(isSelect[i] == false && res > weight[i]) {
            res = weight[i];
            id = i;
        }
    }
    return id;
}
```

add函数是用来将一个点加入到最小生成树中的函数，它的原理是将这个点标记为已访问，然后将这个点的权值加入到最小生成树的权值中，然后遍历所有的点，找到这个点到未访问的、可到达的顶点的权值。若出现比之前更小的权值，则要修改，否则，不用。

```cpp
void add(int nodeId) {
    isSelect[nodeId] = true;
    reres += weight[nodeId];
    for(int i = 0; i < 26; ++i) {
        if(weight[i] > map_[nodeId][i] && isSelect[i] == false) {
            weight[i] = map_[nodeId][i];
            parent[i] = nodeId;
        }
    }
}
```

solve函数是用来解决这个问题的函数，它的原理是初始化最小生成树，然后不断更新最小生成树，更新的办法就是先找到一个点，然后找到这个点到未访问的、可到达的顶点的权值。若出现比之前更小的权值，则要修改，否则，不用，最后标记这个点已访问，后面就是重复这个过程，直到所有的点都被访问。

```C++
void solve(int n) {
    parent[0] = -1;
    weight[0] = 0;
    int nimId = 0;
    while(n--) {
        add(nimId);
        nimId = findMin();
    }
}
```

inputData函数是用来输入数据的函数，它的原理是输入数据。

```cpp
void inputData(int n) {
    int m, c;
    char w, d;
    for(int i = 0; i < n-1; ++i) {
        cin >> w >> m;
        for(int j = 1; j <= m; ++j) {
            cin >> d >> c;
            map_[w-'A'][d-'A'] = c;
            map_[d-'A'][w-'A'] = c;
        }
    }
}
```

其中，需要`map_[w-'A'][d-'A'] = c;`表示的是从w到d的权值是c，`map_[d-'A'][w-'A'] = c;`表示的是从d到w的权值是c，是因为**这是一个无向图**。
