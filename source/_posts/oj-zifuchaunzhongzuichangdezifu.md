---
title: 字符串中最长的连续出现的字符
date: 2024-07-30 23:30:49
tags: [C++, OpenJudge, C, string]
categories: OpenJudge
---

总时间限制: 1000ms 内存限制: 65536kB

## 描述

求一个字符串中最长的连续出现的字符，输出该字符及其出现次数，字符串中无空白字符（空格、回车和tab），如果这样的字符不止一个，则输出第一个

## 输入

首先输入N，即测试数据的组数  
每组测试数据输入：  
一行，一个不包含空白字符的字符串，字符串长度小于200

## 输出

一行，输出最长的连续出现的字符及其出现次数，中间用空格隔开

## 样例输入

```cpp
2
aaaaabbbbbcccccccdddddddddd
abcdefghigk
```

## 样例输出

```cpp
d 10
a 1
```

## 思路

遍历字符串，记录当前字符和出现次数，如果当前字符和上一个字符相同，次数加一，否则比较当前次数和最大次数，如果当前次数大于最大次数，更新最大次数和字符，最后输出最大次数和字符。

其实，一开始我想使用map来解决，但是碰到了一些记录上的问题，所以最后还是使用了pair来解决。用map倒像是将问题复杂化了。

这其实就是一个简单的遍历+获取最大值的问题。

感谢[xcdq的博文](https://blog.csdn.net/xcdq_aaa/article/details/106641237)

## Code

### C++

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
	int N;
	cin >> N;
	for(int i = 1; i <= N; i++) {
		string str;
		pair<char, int> tmp (0, 0), max (0, 0);
		cin >> str;
		for(long long unsigned int j = 0; j < str.size(); j++) {
			if(tmp.first == str[j]) tmp.second++;
			else {
				if(tmp.second > max.second) {
					max.second = tmp.second;
					max.first = tmp.first;
				}
				tmp.second = 1;
				tmp.first = str[j];
			}
		}
		if(tmp.second > max.second) {
			max.second = tmp.second;
			max.first = tmp.first;
		}
		cout << max.first << " " << max.second << endl;
	}
}
```

### C

```c
#include <stdio.h>
#include <string.h>

int main() {
    int N;
    scanf("%d", &N);
    for(int i = 1; i <= N; i++) {
        char str[200];
        char tmp = 0, max = 0;
        int count = 0, max_count = 0;
        scanf("%s", str);
        for(int j = 0; j < strlen(str); j++) {
            if(tmp == str[j]) count++;
            else {
                if(count > max_count) {
                    max_count = count;
                    max = tmp;
                }
                count = 1;
                tmp = str[j];
            }
        }
        if(count > max_count) {
            max_count = count;
            max = tmp;
        }
        printf("%c %d\n", max, max_count);
    }
}
```