---
title: 字符串插入
date: 2024-08-18 15:20:48
tags: [C++, OpenJudge, C, string]
categories: OpenJudge
---

总时间限制: 1000ms 内存限制: 65536kB

## 描述

有两个字符串str和substr，str的字符个数不超过10，substr的字符个数为3。（字符个数不包括字符串结尾处的'\0'。）将substr插入到str中ASCII码最大的那个字符后面，若有多个最大则只考虑第一个。

## 输入

输入包括若干行，每一行为一组测试数据，格式为
str substr

## 输出

对于每一组测试数据，输出插入之后的字符串。

## 样例输入

```cpp
abcab eee
12343 555
```

## 样例输出

```cpp
abceeeab
12345553
```

## 来源

计算概论期末考试

## 思路

遍历字符串，找到ASCII码最大的字符，将`i`的值设为最大字符的下标，然后在`i+1`的位置插入`substr`。

## Code

### C++ STL

```cpp
#include <bits/stdc++.h>
using namespace std;
int main() {
    string str, substr;
    while(cin >> str >> substr) {
        long long unsigned int i = 0;
        char max;
        for(long long unsigned int j = 0; j < str.size(); j++) {
            if(j == 0) {i = j; max = str[j];}
            else if(str[j] > max) {i = j; max = str[j];}
        }
        str.insert(i+1, substr);
        cout << str << endl;
    }
}
```

### C

```c
#include <stdio.h>
#include <string.h>

int main() {
    char str[12], substr[5];
    while(scanf("%s %s", str, substr) != EOF) {
        int i = 0;
        char max;
        for(int j = 0; j < strlen(str); j++) {
            if(j == 0) {i = j; max = str[j];}
            else if(str[j] > max) {i = j; max = str[j];}
        }
        for(int j = strlen(str); j > i; j--) str[j+3] = str[j];
        for(int j = 0; j < 3; j++) str[i+j+1] = substr[j];
        printf("%s\n", str);
    }
}
```
