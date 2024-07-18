---
title: 奇偶排序
date: 2024-07-18 16:33:49
tags: OpenJudge
categories: OpenJudge
---

总时间限制: 1000ms 内存限制: 65536kB

## 描述

输入十个整数，将十个整数按升序排列输出，并且奇数在前，偶数在后。

## 输入

输入十个整数

## 输出

按照奇偶排序好的十个整数

## 样例输入
 
```cpp
10 9 8 7 6 5 4 3 2 1
```

## 样例输出

```cpp
1 3 5 7 9 2 4 6 8 10
```

## 提示

先排序，再分别输出奇数、偶数

## 我的测试用例

### 测试用例1（题目本身的）

#### 输入

```cpp
10 9 8 7 6 5 4 3 2 1
```

#### 输出

```cpp
1 3 5 7 9 2 4 6 8 10
```

### 测试用例2

#### 输入

```cpp
10 20 30 16 14 12 2 4 6 8
```

#### 输出

```cpp
2 4 6 8 10 12 14 16 20 30
```

### 测试用例3

#### 输入

```cpp
1 5 13 17 31 61 3 7 39 27
```

#### 输出

```cpp
1 3 5 7 13 17 27 31 39 61
```

## 思路

由题可知，输入十个整数，将十个整数按升序排列输出，并且奇数在前，偶数在后。  
至于排序的方法，可以使用冒泡排序，也可以使用STL中的sort函数（仅限于C++）。

## Code

### C++

#### 不适用STL的sort函数

```cpp
#include <bits/stdc++.h>
using namespace std;

void sortting(array<int, 10> *arr, int length) {
	for(int i = 0, temp; i < length-1; i++) {
		for(int j = 0; j < length-1; j++) {
			if((*arr)[j] > (*arr)[j+1]) {
				temp = (*arr)[j];
				(*arr)[j] = (*arr)[j+1];
				(*arr)[j+1] = temp;
			}
		}
	}
}

int main() {
	array<int, 10> odd, even;
	int oddP = 0, evenP = 0;
	for(int i = 1, num; i <= 10; i++) {
		cin >> num;
		if(num % 2 == 0){
			even[evenP++] = num;
		} else {
			odd[oddP++] = num;
		}
	}
	sortting(&odd, oddP);
	sortting(&even, evenP);
	for(int i = 0; i < oddP; i++) {
		if(i == 0) cout << odd[i];
		else cout << " " << odd[i];
	}
	for(int i = 0; i < evenP; i++) {
		if(i == 0 && oddP) cout << " " << even[i];
		else if(i == 0 && !oddP) cout << even[i];
		else cout << " " << even[i];
	}
}
```

#### 使用STL的sort函数

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
	array<int, 10> odd, even;
	int oddP = 0, evenP = 0;
	for(int i = 1, num; i <= 10; i++) {
		cin >> num;
		if(num % 2 == 0){
			even[evenP++] = num;
		} else {
			odd[oddP++] = num;
		}
	}
    sort(odd.begin(), odd.begin() + oddP);
    sort(even.begin(), even.begin() + evenP);
    for(int i = 0; i < oddP; i++) {
        if(i == 0) cout << odd[i];
        else cout << " " << odd[i];
    }
    for(int i = 0; i < evenP; i++) {
        if(i == 0 && oddP) cout << " " << even[i];
        else if(i == 0 && !oddP) cout << even[i];
        else cout << " " << even[i];
    }
}
```
