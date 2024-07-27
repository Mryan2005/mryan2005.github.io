---
title: 计算矩阵边缘元素之和
date: 2024-07-27 19:11:14
tags: [C++, OpenJudge, Matrix, C, STL]
categories: OpenJudge
---

总时间限制: 1000ms 内存限制: 65536kB

## 描述

输入一个整数矩阵，计算位于矩阵边缘的元素之和。所谓矩阵边缘的元素，就是第一行和最后一行的元素以及第一列和最后一列的元素。

## 输入

第一行为整数k，表示有k组数据。
每组数据有多行组成，表示一个矩阵：
第一行分别为矩阵的行数m和列数n（m < 100，n < 100），两者之间以空格分隔。
接下来输入的m行数据中，每行包含n个整数，整数之间以空格作为间隔。

## 输出

输出对应矩阵的边缘元素和，一个一行。

## 样例输入

```cpp
2
4 4
1 1 1 1
0 0 0 0
1 0 1 0
0 0 0 0
3 3
3 4 1
3 7 1
2 0 1
```

## 样例输出

```cpp
5
15
```

## 思路

### 直接计算

1. 用`for`循环输入矩阵，在循环中用`if`判断是否为边缘元素，是则加入`sum`中。
2. 输出`sum`。

### 使用数组

1. 用`array<array<int, 100>, 100> a;`定义二维数组。
2. 用`for`循环输入矩阵。
3. 用`for`循环判断是否为边缘元素，是则加入`sum`中。
4. 输出`sum`。

## Code

### C++

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
	int k, m, n, sum = 0, tmp;
	cin >> k;
	for(int i = 1; i <= k; i++) {
		cin >> m >> n;
		for(int j = 0; j < m; j++) {
			for(int k = 0; k < n; k++) {
					cin >> tmp;
					if(j == 0 || k == 0 || j == m-1 || k == n-1) sum += tmp;
			}
		}
		cout << sum << endl;
		sum = 0;
	}
}
```

### C++ STL

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int k, m, n, sum = 0, tmp;
    cin >> k;
    for(int i = 1; i <= k; i++) {
        cin >> m >> n;
        array<array<int, 100>, 100> a;
        for(int j = 0; j < m; j++) {
            for(int k = 0; k < n; k++) {
                cin >> a[j][k];
            }
        }
        for(int j = 0; j < m; j++) {
            for(int k = 0; k < n; k++) {
                if(j == 0 || k == 0 || j == m-1 || k == n-1) sum += a[j][k];
            }
        }
        cout << sum << endl;
        sum = 0;
    }
}
```

### C

### 解法一：直接计算

```c
#include <stdio.h>

int main() {
    int k, m, n, sum = 0, tmp;
    scanf("%d", &k);
    for(int i = 1; i <= k; i++) {
        scanf("%d %d", &m, &n);
        for(int j = 0; j < m; j++) {
            for(int k = 0; k < n; k++) {
                    scanf("%d", &tmp);
                    if(j == 0 || k == 0 || j == m-1 || k == n-1) sum += tmp;
            }
        }
        printf("%d\n", sum);
        sum = 0;
    }
}
```

### 解法二：使用数组

```c
#include <stdio.h>

int main() {
    int k, m, n, sum = 0, tmp;
    scanf("%d", &k);
    for(int i = 1; i <= k; i++) {
        scanf("%d %d", &m, &n);
        int a[100][100];
        for(int j = 0; j < m; j++) {
            for(int k = 0; k < n; k++) {
                scanf("%d", &a[j][k]);
            }
        }
        for(int j = 0; j < m; j++) {
            for(int k = 0; k < n; k++) {
                if(j == 0 || k == 0 || j == m-1 || k == n-1) sum += a[j][k];
            }
        }
        printf("%d\n", sum);
        sum = 0;
    }
}
```