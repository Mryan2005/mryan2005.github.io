---
title: 二维数组右上左下遍历
date: 2024-07-31 15:48:40
tags: [C++, OpenJudge, C, 2D Array, Array, STL]
categories: OpenJudge
---

总时间限制: 1000ms 内存限制: 65536kB

## 描述

给定一个row行col列的整数数组array，要求从array[0][0]元素开始，按从左上到右下的对角线顺序遍历整个数组。在这里插入图片描述

![在这里插入图片描述](https://img-blog.csdnimg.cn/img_convert/1e07f29c1f7e9676ad2fb2cbf192d85a.gif#pic_center)

## 输入

输入的第一行上有两个整数，依次为row和col。
余下有row行，每行包含col个整数，构成一个二维整数数组。
（注：输入的row和col保证0 < row < 100, 0 < col < 100）

## 输出

按遍历顺序输出每个整数。每个整数占一行。

## 样例输入

```cpp
3 4
1 2 4 7
3 5 8 10
6 9 11 12
```

## 样例输出

```cpp
1
2
3
4
5
6
7
8
9
10
11
12
```

## 思路

以下图为例
![pkOcpQJ.jpg](https://s21.ax1x.com/2024/07/31/pkOcpQJ.jpg)]
无论在行还是列上开始，都是a[i][j]中的i增加，j减少。
我们可以分为两部分，一部分是列上开始，一部分是行上开始，当到达边界的时候，我们就停止。

## Code

### C++ STL

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
	int row, col;
	array<array<int, 100>, 100> a;
	cin >> row >> col;
	for(int i = 0; i < row; i++) {
		for(int j = 0; j < col; j++) {
			cin >> a[i][j];
		}
	}
	for(int i = 0; i < col; i++) {
		for(int j = 0, k = i; j < row && k < col && k >= 0 && j >= 0; j++, k--) {
			cout << a[j][k] << endl;
		}
	}
	for(int i = 1; i < row; i++) {
		for(int j = i, k = col-1; j < row && k < col && k >= 0 && j >= 0; j++, k--) {
			cout << a[j][k] << endl;
		}
	}
}
```

### C

```c
#include <stdio.h>

int main() {
    int row, col;
    int a[100][100];
    scanf("%d %d", &row, &col);
    for(int i = 0; i < row; i++) {
        for(int j = 0; j < col; j++) {
            scanf("%d", &a[i][j]);
        }
    }
    for(int i = 0; i < col; i++) {
        for(int j = 0, k = i; j < row && k < col && k >= 0 && j >= 0; j++, k--) {
            printf("%d\n", a[j][k]);
        }
    }
    for(int i = 1; i < row; i++) {
        for(int j = i, k = col-1; j < row && k < col && k >= 0 && j >= 0; j++, k--) {
            printf("%d\n", a[j][k]);
        }
    }
}
```

## 测试用例

### 测试用例1

#### 输入

```cpp
3 4
1 2 4 7
3 5 8 10
6 9 11 12
```

#### 输出

```cpp
1
2
3
4
5
6
7
8
9
10
11
12
```

### 测试用例2

#### 输入

```cpp
3 3
1 2 3
4 5 6
7 8 9
```

#### 输出

```cpp
1
2
4
3
5
7
6
8
9
```

### 测试用例3

#### 输入

```cpp
3 2
1 2
3 4
5 6
```

#### 输出

```cpp
1
2
3
4
5
6
```

### 测试用例4

#### 输入

```cpp
1 10
1 2 3 4 5 6 7 8 9 10
```

#### 输出

```cpp
1
2
3
4
5
6
7
8
9
10
```

### 测试用例5

#### 输入

```cpp
10 1
1
2
3
4
5
6
7
8
9
10
```

#### 输出

```cpp
1
2
3
4
5
6
7
8
9
10
```