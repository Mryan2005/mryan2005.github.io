---
title: 错误探测
date: 2024-08-10 17:51:37
tags: [OpenJudge, C++, STL]
categories: OpenJudge
---

总时间限制: 1000ms 内存限制: 65536kB
## 描述
给出由0和1组成的矩阵，如果矩阵的每一行和每一列的1的数量都是偶数，则认为符合条件。
你的任务就是检测矩阵是否符合条件，或者在仅改变一个矩阵元素的情况下能否符合条件。
"改变矩阵元素"的操作定义为0变成1，1变成0。

## 输入
包含多个测试数据。每个测试数据有多行，第一行为矩阵的大小n(n < 100)，以下n行为矩阵的值。
输入以0结束。
## 输出
如果矩阵符合条件，则输出OK
如果矩阵仅改变一个矩阵元素就能符合条件，则输出Change bit (x,y)，其中x和y为该元素的坐标
如果不符合以上两条，输出Corrupt
## 样例输入

```cpp
4
1 0 1 0
0 0 0 0
1 1 1 1
0 1 0 1
4
1 0 1 0
0 0 1 0
1 1 1 1
0 1 0 1
4
1 0 1 0
0 1 1 0
1 1 1 1
0 1 0 1
0
```

## 样例输出

```cpp
OK
Change bit (2,3)
Corrupt
```

## 思路

1. 输入一个整数 `n`，创建一个 $n*n$ 的二维数组 `a` 和两个一维数组 `line` 和 `row`。
2. 读取矩阵的元素，并存储在二维数组 `a`中。
3. 遍历矩阵的每一行，统计每一行的元素为`1`的量。如果某一行的元素之和是奇数，将 `line` 数组的对应位置设为 `1`，并将 `line[0]` 加 `1`。`line[0]` 存储的是元素之和为奇数的行的数量。
4. 遍历矩阵的每一列，统计每一列的元素为`1`的量。如果某一列的元素之和是奇数，将 row 数组的对应位置设为 `1`，并将 `row[0]` 加 `1`。`row[0]` 存储的是元素之和为奇数的列的数量。
5. 检查 `row[0]` 和 `line[0]` 的值。如果都是 `1`，输出 "`Change bit (x,y)`"，其中 `x` 和 `y` 是元素之和为奇数的行和列的索引。如果都是 `0`，输出 "`OK`"。否则，输出 "`Corrupt`"。

## Code

```cpp
#include <bits/stdc++.h>
using namespace std;
#define A 1
#define B 2

int main() {
    int n;
    while (cin >> n && n != 0)
    {
        array<array<int, 200>, 200> a;
        array<int, 100> line {} , row {};  // 0: count, 1-100: mark
        for(int i = 1; i <= n; i++)
        {
            for(int j = 1; j <= n; j++)
            {
                cin >> a[i][j];
            }
        }
        for(int i = 1; i <= n; i++)
        {
            int count = 0;
            for(int j = 1; j <= n; j++)
            {
                if(a[i][j] == 1) count++;
            }
            if(count % 2 == 1)
            {
                line[i] = 1;
                line[0]++;
            }
        }
        for(int i = 1, j = 1; j <= n; j++, i = 1)
        {
            int count = 0;
            for(; i <= n; i++)
            {
                if(a[i][j] == 1) count++;
            }
            if(count % 2 == 1)
            {
                row[j] = 1;
                row[0]++;
            }
        }
        if(row[0] == 1 && line[0] == 1)
        {
            int x, y;
            for(int i = 1; i <= n; i++)
            {
                if(line[i] == 1) {x = i; break;}
            }
            for(int i = 1; i <= n; i++)
            {
                if(row[i] == 1) {y = i; break;}
            }
            cout << "Change bit ("<< x << "," << y <<")" << endl;
        } else if(row[0] == 0 && line[0] == 0) cout << "OK" << endl;
        else cout << "Corrupt" << endl;
    }
}
```

