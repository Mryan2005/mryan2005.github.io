---
title: 细菌实验分组
date: 2024-07-21 11:19:50
tags: OpenJudge
categories: OpenJudge
---

总时间限制: 1000ms 内存限制: 65536kB

## 描述

有一种细菌分为A、B两个亚种，它们的外在特征几乎完全相同，仅仅在繁殖能力上有显著差别，A亚种繁殖能力非常强，B亚种的繁殖能力很弱。在一次为时一个 小时的细菌繁殖实验中，实验员由于疏忽把细菌培养皿搞乱了，请你编写一个程序，根据实验结果，把两个亚种的培养皿重新分成两组。

## 输入

输入有多行，第一行为整数n（n≤100），表示有n个培养皿。
其余n行，每行有三个整数，分别代表培养皿编号，试验前细菌数量，试验后细菌数量。

## 输出

输出有多行：
第一行输出A亚种培养皿的数量，其后每行输出A亚种培养皿的编号，按繁殖率升序排列。
然后一行输出B亚种培养皿的数量，其后每行输出B亚种培养皿的编号，也按繁殖率升序排列。

## 样例输入

```plaintext
5
1 10 3456
2 10 5644
3 10 4566
4 20 234
5 20 232
```

## 样例输出

```plaintext
3
1
3
2
2
5
4
```

## 提示

亚种内部，细菌繁殖能力差异远远小于亚种之间细菌繁殖能力的差异。  
也就是说，亚种间任何两组细菌的繁殖率之差都比亚种内部两组细菌的繁殖率之差大。

## 思路

1. 其实，这道题目的突破口在于，亚种间任何两组细菌的繁殖率之差都比亚种内部两组细菌的繁殖率之差大。我们只要在一个有序的序列中，找到两个数，并且它们的差值最大，那么这两个数就是亚种的分界线。
感谢[NodYoung的解题思路](https://blog.csdn.net/nnnnnnnnnnnny/article/details/48177197)。
2. 我想到了一个办法，就是使用插入排序法，在输入的时候就进行排序，这样可以节省一次排序的时间。

## 解题步骤

1. 使用`array<pair<int, double>, 100> a;`来存储细菌的编号和繁殖率。
2. 读入n，a，b，计算繁殖率，将编号和繁殖率存入数组中。
3. 对数组进行排序，找到繁殖率差值最大的两个细菌，`maxDiffIndex = i`。
4. 输出`n - (maxDiffIndex+1)`，然后输出编号。
5. 输出`maxDiffIndex+1 - 0`，然后输出编号。

## Code

### C++ STL

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
	array<pair<int, double>, 100> a;	// pair<id, cent>
	int n, j;
	double a_, b;
	cin >> n;
	pair<int, double> temp {};
	a.fill(temp);
	for (int i = 0; i < n; i++) {
		cin >> temp.first >> a_ >> b;
		temp.second = (b - a_) / a_;
		if (i == 0) a[0] = temp;
		for (j = i; j > 0 && temp.second < a[j - 1].second; j--) a[j] = a[j - 1];
		a[j] = temp;
	}
	int maxDiffIndex;
	double maxDiff = a[1].second - a[0].second;
	for (int i = 0; i < n - 1; i++) {
		if (a[i+1].second - a[i].second > maxDiff) {
			maxDiffIndex = i;
			maxDiff = a[i + 1].second - a[i].second;
		}
	}
	cout << n - (maxDiffIndex+1) << endl;
	for (int i = maxDiffIndex+1; i < n; i++) cout << a[i].first << endl;
	cout << maxDiffIndex+1 - 0 << endl;
	for (int i = 0; i < maxDiffIndex+1; i++) cout << a[i].first << endl;
}
```

### C++ Array

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    pair<int, double> a[100];	// pair<id, cent>
    int n, j;
    double a_, b;
    cin >> n;
    pair<int, double> temp {};
    for (int i = 0; i < n; i++) {
        cin >> temp.first >> a_ >> b;
        temp.second = (b - a_) / a_;
        if (i == 0) a[0] = temp;
        for (j = i; j > 0 && temp.second < a[j - 1].second; j--) a[j] = a[j - 1];
        a[j] = temp;
    }
    int maxDiffIndex;
    double maxDiff = a[1].second - a[0].second;
    for (int i = 0; i < n - 1; i++) {
        if (a[i+1].second - a[i].second > maxDiff) {
            maxDiffIndex = i;
            maxDiff = a[i + 1].second - a[i].second;
        }
    }
    cout << n - (maxDiffIndex+1) << endl;
    for (int i = maxDiffIndex+1; i < n; i++) cout << a[i].first << endl;
    cout << maxDiffIndex+1 - 0 << endl;
    for (int i = 0; i < maxDiffIndex+1; i++) cout << a[i].first << endl;
}
```

### C

```c
#include <stdio.h>

typedef struct {
    int id;
    double cent;
} Pair;

int main() {
    Pair a[100];	// pair<id, cent>
    int n, j;
    double a_, b;
    scanf("%d", &n);
    Pair temp;
    for (int i = 0; i < n; i++) {
        scanf("%d %lf %lf", &temp.id, &a_, &b);
        temp.cent = (b - a_) / a_;
        if (i == 0) a[0] = temp;
        for (j = i; j > 0 && temp.cent < a[j - 1].cent; j--) a[j] = a[j - 1];
        a[j] = temp;
    }
    int maxDiffIndex;
    double maxDiff = a[1].cent - a[0].cent;
    for (int i = 0; i < n - 1; i++) {
        if (a[i+1].cent - a[i].cent > maxDiff) {
            maxDiffIndex = i;
            maxDiff = a[i + 1].cent - a[i].cent;
        }
    }
    printf("%d\n", n - (maxDiffIndex+1));
    for (int i = maxDiffIndex+1; i < n; i++) printf("%d\n", a[i].id);
    printf("%d\n", maxDiffIndex+1 - 0);
    for (int i = 0; i < maxDiffIndex+1; i++) printf("%d\n", a[i].id);
}
```

## 总结

1. 只要题目没给出一个具体的分界线，那么我们就可以通过题目所给的提示，来找到一个最大的差值，然后以这个差值为分界线。
譬如这道题目，亚种间任何两组细菌的繁殖率之差都比亚种内部两组细菌的繁殖率之差大，所以我们只要找到一个最大的差值，那么这个差值就是分界线。