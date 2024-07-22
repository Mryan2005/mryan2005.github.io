---
title: 计算鞍点
date: 2024-07-22 22:10:10
tags: [OpenJudge, C++, STL]
categories: OpenJudge
---
总时间限制: 1000ms 内存限制: 65536kB

## 描述

给定一个5*5的矩阵，每行只有一个最大值，每列只有一个最小值，寻找这个矩阵的鞍点。
鞍点指的是矩阵中的一个元素，它是所在行的最大值，并且是所在列的最小值。
例如：在下面的例子中（第4行第1列的元素就是鞍点，值为8 ）。
11 3 5 6 9
12 4 7 8 10
10 5 6 9 11
8 6 4 7 2
15 10 11 20 25

## 输入

输入包含一个5行5列的矩阵

## 输出

如果存在鞍点，输出鞍点所在的行、列及其值，如果不存在，输出"not found"

## 样例输入

```cpp
11 3 5 6 9
12 4 7 8 10
10 5 6 9 11
8  6 4 7 2
15 10 11 20 25
```

## 样例输出

```cpp
4 1 8
```

## 思路

1. 读入矩阵
2. 找出每行的最大值的位置，将其存入数组`line`中
3. 找出每列的最小值的位置，将其存入数组`row`中
4. 遍历`line`和`row`，找出鞍点

## 图例

![pk7bT41.png](https://s21.ax1x.com/2024/07/22/pk7bT41.png)]

## Code

### C++ STL

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
 array<array<int, 5>, 5> a;
 array<pair<int, int>, 5> line, row; // (first, second)
 for(int i = 0; i < 5; i++) {
  for(int j = 0; j < 5; j++) cin >> a[i][j];
 }
 for(int i = 0; i < 5; i++) { // (i, j)
  line[i].first = i, line[i].second = 0;
  for(int j = 0; j < 5; j++) {
   if(a[line[i].first][line[i].second] < a[i][j]) {
    line[i].first = i;
    line[i].second = j;
   }
  }
 }
 for(int i = 0; i < 5; i++) { // (j, i)
  row[i].first = 0, row[i].second = i;
  for(int j = 0; j < 5; j++) {
   if(a[row[i].first][row[i].second] > a[j][i]) {
    row[i].first = j;
    row[i].second = i;
   }
  }
 }
 int flag = 0;
 for(int i = 0; i < 5; i++) {
  for(int j = 0; j < 5; j++) {
   if(row[i].first == line[j].first && line[j].second == row[i].second) {
    cout << row[i].first+1 << " " << row[i].second+1 << " " << a[row[i].first][row[i].second] << endl;
    flag = 1;
   }
  }
 }
 if(!flag) cout << "not found";
}
```

### C

```c
#include <stdio.h>

int main() {
 int a[5][5];
 int line[5][2], row[5][2]; // (first, second)
 for(int i = 0; i < 5; i++) {
  for(int j = 0; j < 5; j++) scanf("%d", &a[i][j]);
 }
 for(int i = 0; i < 5; i++) { // (i, j)
  line[i][0] = i, line[i][1] = 0;
  for(int j = 0; j < 5; j++) {
   if(a[line[i][0]][line[i][1]] < a[i][j]) {
    line[i][0] = i;
    line[i][1] = j;
   }
  }
 }
 for(int i = 0; i < 5; i++) { // (j, i)
  row[i][0] = 0, row[i][1] = i;
  for(int j = 0; j < 5; j++) {
   if(a[row[i][0]][row[i][1]] > a[j][i]) {
    row[i][0] = j;
    row[i][1] = i;
   }
  }
 }
 int flag = 0;
 for(int i = 0; i < 5; i++) {
  for(int j = 0; j < 5; j++) {
   if(row[i][0] == line[j][0] && line[j][1] == row[i][1]) {
    printf("%d %d %d\n", row[i][0]+1, row[i][1]+1, a[row[i][0]][row[i][1]]);
    flag = 1;
   }
  }
 }
 if(!flag) printf("not found");
}
```
