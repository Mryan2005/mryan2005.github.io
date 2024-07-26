---
title: 生日相同 2.0
date: 2024-07-26 15:17:06
tags: [STL, C++, OpenJudge, Map, Vector, Sort, String]
categories: OpenJudge
---
总时间限制: 1000ms 内存限制: 65536kB

## 描述

在一个有180人的大班级中，存在两个人生日相同的概率非常大，现给出每个学生的名字，出生月日。试找出所有生日相同的学生。

## 输入

第一行为整数n，表示有n个学生，n ≤ 180。此后每行包含一个字符串和两个整数，分别表示学生的名字（名字第一个字母大写，其余小写，不含空格，且长度小于20）和出生月(1 ≤ m ≤ 12)日(1 ≤ d ≤ 31)。名字、月、日之间用一个空格分隔

## 输出

每组生日相同的学生，输出一行，其中前两个数字表示月和日，后面跟着所有在当天出生的学生的名字，数字、名字之间都用一个空格分隔。对所有的输出，要求按日期从前到后的顺序输出。 对生日相同的名字，按名字从短到长按序输出，长度相同的按字典序输出。如没有生日相同的学生，输出”None”

## 样例输入

```cpp
6
Avril 3 2
Candy 4 5
Tim 3 2
Sufia 4 5
Lagrange 4 5
Bill 3 2
```

## 样例输出

```cpp
3 2 Tim Bill Avril
4 5 Candy Sufia Lagrange
```

## 思路

1. 用`map<pair<int, int>, vector<string>>`存储生日相同的学生名字
2. 用`vector<pair<int, int>>`存储生日相同的日期
3. 用`sort`排序`vector<pair<int, int>>`
4. 用`sort`排序`vector<string>`，然后按照长度从小到大排序。
5. 输出
6. 如果`flag`为0，输出`None`

## Code

### C++ STL

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
	int n;
	string tempName;
	pair<int, int> tempDate;
	vector<pair<int, int>> List;
	map<pair<int, int>, vector<string>> mp;		// (3, 2) -> ["Avril", "Tim"]
	cin >> n;
	for(int i = 1; i <= n; i++) {
		cin >> tempName >> tempDate.first >> tempDate.second;
		mp[tempDate].insert(mp[tempDate].end(), tempName);
		for(long long unsigned int j = 0; j < List.size(); j++) {
			if(List[j] == tempDate) goto out;
		}
		List.insert(List.end(), tempDate);
		out:;
	}
	int flag = 0;
	sort(List.begin(), List.end());
	for(auto i: List) {
		if(mp[i].size() != 1) {
			flag = 1;
			sort(mp[i].begin(), mp[i].end());
			for(long long unsigned int j = 0; j < mp[i].size()-1; j++) {
				for(long long unsigned int k = 0; k < mp[i].size()-1; k++) {
					if(mp[i][k].size() > mp[i][k+1].size()) {
						tempName = mp[i][k];
						mp[i][k] = mp[i][k+1];
						mp[i][k+1] = tempName;
					}
				}
			}
			cout << i.first << " " << i.second;
			for(long long unsigned int j = 0; j < mp[i].size(); j++) {
				cout << " " << mp[i][j];
			}
			cout << endl;
		}
	}
	if(!flag) cout << "None";
}
```

## 测试用例

### 测试用例1

#### 输入

```cpp
6
Avril 3 2
Candy 4 5
Tim 3 2
Sufia 4 5
Lagrange 4 5
Bill 3 2
```

#### 输出

```cpp
3 2 Tim Bill Avril
4 5 Candy Sufia Lagrange
```

### 测试用例2

#### 输入

```cpp
6
Avril 3 2
Candy 4 5
Tim 3 2
Sufia 4 5
Lagrange 4 5
Bill 3 3
```

#### 输出

```cpp
3 2 Tim Avril
4 5 Candy Sufia Lagrange
```

### 测试用例3

#### 输入

```cpp
6
Avril 3 2
Candy 4 5
Tim 3 3
Sufia 4 5
Lagrange 4 5
Bill 3 3
```

#### 输出

```cpp
3 3 Tim Bill
4 5 Candy Sufia Lagrange
```

### 测试用例4

#### 输入

```cpp
6
Avril 3 2
Candy 4 5
Tim 3 2
Bufia 4 5
Lagrange 4 5
Bill 3 2
```

#### 输出

```cpp
3 2 Tim Bill Avril
4 5 Bufia Candy Lagrange
```

### 测试用例5

#### 输入

```cpp
2
Avril 3 2
Candy 4 5
```

#### 输出

```cpp
None
```