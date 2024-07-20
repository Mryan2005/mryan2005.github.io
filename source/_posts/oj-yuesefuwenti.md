---
title: 约瑟夫问题
date: 2024-07-20 14:06:05
tags: OpenJudge
categories: OpenJudge
---

总时间限制: 1000ms 内存限制: 65536kB

## 描述

约瑟夫问题：有ｎ只猴子，按顺时针方向围成一圈选大王（编号从１到ｎ），从第１号开始报数，一直数到ｍ，数到ｍ的猴子退出圈外，剩下的猴子再接着从1开始报数。就这样，直到圈内只剩下一只猴子时，这个猴子就是猴王，编程求输入ｎ，ｍ后，输出最后猴王的编号。

## 输入

每行是用空格分开的两个整数，第一个是 n, 第二个是 m ( 0 < m,n <=300)。最后一行是：

0 0

## 输出

对于每行输入数据（最后一行除外)，输出数据也是一行，即最后猴王的编号

## 样例输入

```plaintext
6 2
12 4
8 3
0 0
```

## 样例输出

```plaintext
5
1
7
```

## 思路

### 方法一: 使用STL的array

1. 使用`array<int, 302> arr {};`来存储猴子的编号。
2. 从1开始报数，如果报数到m，则将该猴子的编号置为m，直到只剩下一个猴子。
3. 输出编号不为m的猴子。
4. 读入n和m，如果n和m都为0，则结束。

### 方法二: 使用数组

1. 使用`int arr[302] = {0};`来存储猴子的编号。
2. 初始化数组为0。
3. 从1开始报数，如果报数到m，则将该猴子的编号置为m，直到只剩下一个猴子。
4. 输出编号不为m的猴子。
5. 读入n和m，如果n和m都为0，则结束。

## Code

### C++ STL

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
	int n, m, count;
	array<int, 302> arr {};
	cin >> n >> m;
	while(n != 0 && m != 0){
		arr.fill(0);
		count = n;
		for(int i = 1, j = 1; count > 1; i = (i+1) % n? (i+1) % n: n) {
			if(arr[i] != m) {
				arr[i] = j;
				j = (j+1) % m? (j+1) % m: m;
				if(arr[i] == m) count--;
			}
		}
		for(int i = 1; i <= n; i++) {
			if(arr[i] != m) {
				cout << i << endl;
				break;
			}
		}
		cin >> n >> m;
	}
}
```

### C

```c
#include <stdio.h>

int main() {
    int n, m, count, arr[302] = {0};
    while(scanf("%d %d", &n, &m) != EOF && n != 0 && m != 0){
        count = n;
        for(int i = 0; i <= n; i++) arr[i] = 0;
        for(int i = 1, j = 1; count > 1; i = (i+1) % n? (i+1) % n: n) {
            if(arr[i] != m) {
                arr[i] = j;
                j = (j+1) % m? (j+1) % m: m;
                if(arr[i] == m) count--;
            }
        }
        for(int i = 1; i <= n; i++) {
            if(arr[i] != m) {
                printf("%d\n", i);
                break;
            }
        }
    }
}
```