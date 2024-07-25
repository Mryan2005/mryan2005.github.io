---
title:请开发一个自上而下的模块化程序，用于完成以下任务
date: 2024-07-25 10:50:28
tags: [C++, 算法, 程序设计, 模块化, Array]
categories:
---
总时间限制: 1000ms 内存限制: 65536kB

## 描述

请开发一个自上而下的模块化程序，用于完成以下任务   
a)  读取两个整数数组，数组的元素未经排序。  
b)  将数组元素按递增排序。  
c)  将已排序的数组合并。  
d)  显示已排序的列表。  
使用函数来完成以上每个任务。主函数中只包含函数调用。

## 输入

输入三行  
第一行两个数字 表示两个数组元素的个数  
第二行第一个数组  
第三行第二个数组  

## 输出

输出一行，合并后的数组，注意这时仍然是第一个数组在前，第二个数组在后  
两个数组分别排序，但是合并的数组并没有排序  
注意看例子！！！！！

## 样例输入

```plaintext
4 5
2 3 4 1
3 4 5 1 2
```

## 样例输出

```plaintext
1 2 3 4 1 2 3 4 5
```

## 提示

主函数中只有调用函数的四个语句
其他语句都要在函数中完成

## 思路

a)  读取两个整数数组，数组的元素未经排序。  
b)  将数组元素按递增排序。  
c)  将已排序的数组合并。  
d)  显示已排序的列表。

## Code

### C++

```cpp
#include <bits/stdc++.h>
using namespace std;

int *Merge(int *a, int n, int *b, int m) {
	int *res = (int*)malloc(sizeof(int)*(n+m)), *p = res, *q = a;
	for(int i = 0; i < n+m; i++) {
		if(i == n) q = b;
		*(p++) = *(q++);
	}
	return res;
}

void sortting(int *arr, int n) {
	int temp;
	for(int i = 0; i < n-1; i++) {
		for(int j = 0; j < n-1; j++) {
			if(*(arr+j) > *(arr+j+1)) {
				temp = *(arr+j);
				*(arr+j) = *(arr+j+1);
				*(arr+j+1) = temp;
			}
		}
	}
}

void display(int *res, int n, int m) {
	for(int i = 0; i < m+n; i++) {
		if(i == 0) cout << *(res+i);
		else cout << " " << *(res+i);
	}
}

void input(int *arr, int n) {
	for(int i = 0; i < n; i++) {
		cin >> *(arr+i);
	}
}

void create(int **a, int *n, int **b, int *m) {
	cin >> *n >> *m;
	*a = (int*)malloc(sizeof(int)*(*n)), *b = (int*)malloc(sizeof(int)*(*m));
}

int main() {
	int *a, *b, n, m;
	create(&a, &n, &b, &m);
	input(a, n);
	input(b, m);
	sortting(a, n);
	sortting(b, m);
	int *res = Merge(a, n, b, m);
	display(res, n, m);
}
```

### C

```c
#include <stdio.h>

int *Merge(int *a, int n, int *b, int m) {
    int *res = (int*)malloc(sizeof(int)*(n+m)), *p = res, *q = a;
    for(int i = 0; i < n+m; i++) {
        if(i == n) q = b;
        *(p++) = *(q++);
    }
    return res;
}

void sortting(int *arr, int n) {
    int temp;
    for(int i = 0; i < n-1; i++) {
        for(int j = 0; j < n-1; j++) {
            if(*(arr+j) > *(arr+j+1)) {
                temp = *(arr+j);
                *(arr+j) = *(arr+j+1);
                *(arr+j+1) = temp;
            }
        }
    }
}

void display(int *res, int n, int m) {
    for(int i = 0; i < m+n; i++) {
        if(i == 0) printf("%d", *(res+i));
        else printf(" %d", *(res+i));
    }
}

void input(int *arr, int n) {
    for(int i = 0; i < n; i++) {
        scanf("%d", arr+i);
    }
}

void create(int **a, int *n, int **b, int *m) {
    scanf("%d %d", n, m);
    *a = (int*)malloc(sizeof(int)*(*n)), *b = (int*)malloc(sizeof(int)*(*m));
}

int main() {
    int *a, *b, n, m;
    create(&a, &n, &b, &m);
    input(a, n);
    input(b, m);
    sortting(a, n);
    sortting(b, m);
    int *res = Merge(a, n, b, m);
    display(res, n, m);
}
```