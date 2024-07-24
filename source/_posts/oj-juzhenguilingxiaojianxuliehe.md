---
title: 矩阵归零消减序列和
date: 2024-07-24 10:18:15
tags: [OpenJudge, C++, STL, Array, 2D Array, C]
categories: OpenJudge
---
总时间限制: 1000ms 内存限制: 65536kB

## 描述

给定一个n\*n的矩阵（3 <= n <= 100，元素的值都是非负整数）。通过(n-1)次实施下述过程，可把这个矩阵转换成一个1\*1的矩阵。每次的过程如下：

首先对矩阵进行行归零：即对每一行上的所有元素，都在其原来值的基础上减去该行上的最小值，保证相减后的值仍然是非负整数，且这一行上至少有一个元素的值为0。

接着对矩阵进行列归零：即对每一列上的所有元素，都在其原来值的基础上减去该列上的最小值，保证相减后的值仍然是非负整数，且这一列上至少有一个元素的值为0。

然后对矩阵进行消减：即把n\*n矩阵的第二行和第二列删除，使之转换为一个(n-1)\*(n-1)的矩阵。

下一次过程，对生成的(n-1)\*(n-1)矩阵实施上述过程。显然，经过(n-1)次上述过程， n\*n的矩阵会被转换为一个1\*1的矩阵。

请求出每次消减前位于第二行第二列的元素的值。

## 输入

第一行是一个整数n。
接下来n行，每行有n个正整数，描述了整个矩阵。相邻两个整数间用单个空格分隔。

## 输出

输出为n行，每行上的整数为对应矩阵归零消减过程中，每次消减前位于第二行第二列的元素的值。

## 样例输入

```cpp
3
1 2 3
2 3 4
3 4 5
```

## 样例输出

```cpp
3
0
0
```

## 思路

1. 读入矩阵
2. 输出第二行第二列的元素（注意这个地方，它并不是归零后的第二行第二列的元素，而是归零前的第二行第二列的元素）
3. 对矩阵进行行归零
4. 对矩阵进行列归零
5. 对矩阵进行消减

## Code

### C++ STL

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
 int n;
 array<array<int, 100>, 100> a;
 array<int, 100> line, row;
 cin >> n;
 for(int i = 0; i < n; i++) {
  for(int j = 0; j < n; j++) cin >> a[i][j];
 }
 while(n > 0) {
  cout << a[1][1] << endl;
  for(int i = 0; i < n; i++) {
   line[i] = a[i][0];
   for(int j = 0; j < n; j++) if(line[i] > a[i][j]) line[i] = a[i][j];
  }
  for(int i = 0; i < n; i++) {
   for(int j = 0; j < n; j++) a[i][j] -= line[i];
  }
  for(int i = 0; i < n; i++) {
   row[i] = a[0][i];
   for(int j = 0; j < n; j++) if(row[i] > a[j][i]) row[i] = a[j][i];
  }
  for(int i = 0; i < n; i++) {
   for(int j = 0; j < n; j++) a[j][i] -= row[i];
  }
  for(int i = 0; i < n; i++) for(int j = 1; j < n-1; j++) a[i][j] = a[i][j+1];
  for(int i = 0; i < n; i++) for(int j = 1; j < n-1; j++) a[j][i] = a[j+1][i];
  n--;
 }
}
```

### C++

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    int a[100][100];
    int line[100], row[100];
    cin >> n;
    for(int i = 0; i < n; i++) {
        for(int j = 0; j < n; j++) cin >> a[i][j];
    }
    while(n > 0) {
        cout << a[1][1] << endl;
        for(int i = 0; i < n; i++) {
            line[i] = a[i][0];
            for(int j = 0; j < n; j++) if(line[i] > a[i][j]) line[i] = a[i][j];
        }
        for(int i = 0; i < n; i++) {
            for(int j = 0; j < n; j++) a[i][j] -= line[i];
        }
        for(int i = 0; i < n; i++) {
            row[i] = a[0][i];
            for(int j = 0; j < n; j++) if(row[i] > a[j][i]) row[i] = a[j][i];
        }
        for(int i = 0; i < n; i++) {
            for(int j = 0; j < n; j++) a[j][i] -= row[i];
        }
        for(int i = 0; i < n; i++) for(int j = 1; j < n-1; j++) a[i][j] = a[i][j+1];
        for(int i = 0; i < n; i++) for(int j = 1; j < n-1; j++) a[j][i] = a[j+1][i];
        n--;
    }
}
```

### C

```c
#include <stdio.h>

int main() {
    int n;
    int a[100][100];
    int line[100], row[100];
    scanf("%d", &n);
    for(int i = 0; i < n; i++) {
        for(int j = 0; j < n; j++) scanf("%d", &a[i][j]);
    }
    while(n > 0) {
        printf("%d\n", a[1][1]);
        for(int i = 0; i < n; i++) {
            line[i] = a[i][0];
            for(int j = 0; j < n; j++) if(line[i] > a[i][j]) line[i] = a[i][j];
        }
        for(int i = 0; i < n; i++) {
            for(int j = 0; j < n; j++) a[i][j] -= line[i];
        }
        for(int i = 0; i < n; i++) {
            row[i] = a[0][i];
            for(int j = 0; j < n; j++) if(row[i] > a[j][i]) row[i] = a[j][i];
        }
        for(int i = 0; i < n; i++) {
            for(int j = 0; j < n; j++) a[j][i] -= row[i];
        }
        for(int i = 0; i < n; i++) for(int j = 1; j < n-1; j++) a[i][j] = a[i][j+1];
        for(int i = 0; i < n; i++) for(int j = 1; j < n-1; j++) a[j][i] = a[j+1][i];
        n--;
    }
}
```
