---
title: 抓住那头牛
date: 2024-10-05 16:07:19
tags: [OpenJudge, C++, BFS]
categories: OpenJudge
---

总时间限制: 2000ms 内存限制: 65536kB

## 描述

农夫知道一头牛的位置，想要抓住它。农夫和牛都位于数轴上，农夫起始位于点N(0<=N<=100000)，牛位于点K(0<=K<=100000)。农夫有两种移动方式：

1、从X移动到X-1或X+1，每次移动花费一分钟
2、从X移动到2*X，每次移动花费一分钟

假设牛没有意识到农夫的行动，站在原地不动。农夫最少要花多少时间才能抓住牛？


## 输入

两个整数，N和K

## 输出

一个整数，农夫抓到牛所要花费的最小分钟数

## 样例输入

```cpp
5 17
```

## 样例输出

```cpp
4
```

## 核心

由于是寻找最短路径，所以我们用到的办法是广度优先搜索

广度优先搜索（Breadth First Search，简称BFS）是一种图形搜索算法，用于遍历或搜索图形或树的数据结构。

BFS从图或树的根节点开始，按照广度的顺序遍历每个邻接节点，然后再依次遍历每个邻接节点的邻接节点，直到遍历完所有节点。具体过程如下：

1. 创建一个队列，将根节点入队。
2. 标记根节点为已访问。
3. 从队列中取出一个节点，访问该节点，并将其所有邻接节点入队。
4. 标记刚刚访问过的节点为已访问。
5. 重复步骤3和4，直到队列为空。
BFS可以用于查找图中两个节点之间的最短路径，因为它按照广度的顺序遍历节点，所以可以保证找到的路径是最短的。

BFS的时间复杂度为O(V+E)，其中V是图中节点的个数，E是图中边的个数。


## Code

```cpp
#include <bits/stdc++.h>
using namespace std;
int N, K;
int record[100060];

int solve() {
	queue<pair<int, int>> Q;
	int cur = N;
	pair<int, int> step;
	Q.push({cur, 0});
	while(!Q.empty()) {
		step = Q.front();
		Q.pop();
		record[step.first] = 1;
		if(step.first == K) return step.second;
		if(step.first < K && record[step.first+1] == 0) Q.push({step.first+1, step.second+1});
		if(step.first > 0 && record[step.first-1] == 0) Q.push({step.first-1, step.second+1});
		if(step.first*2 <= 100000 && record[step.first*2] == 0) Q.push({step.first*2, step.second+1});
	}
}

int main() {
	scanf("%d %d", &N, &K);
	int res = solve();
	printf("%d", res);
}
```

或者

```cpp
#include <bits/stdc++.h>
using namespace std;
int N, K;
int record[100060];
queue<pair<int, int>> Q;
pair<int, int> step;

int solve() {
	Q.push({N, 0});
	while(!Q.empty()) {
		step = Q.front();
		Q.pop();
		record[step.first] = 1;
		if(step.first == K) return step.second;
		if(step.first < K && record[step.first+1] == 0) Q.push({step.first+1, step.second+1});
		if(step.first > 0 && record[step.first-1] == 0) Q.push({step.first-1, step.second+1});
		if(step.first*2 <= 100000 && record[step.first*2] == 0) Q.push({step.first*2, step.second+1});
	}
}

int main() {
	scanf("%d %d", &N, &K);
	int res = solve();
	printf("%d", res);
}
```
