---
title: 扩号匹配问题
date: 2024-07-24 18:16:11
tags: [OpenJudge, C++, Stack, String, Queue, Array, STL, C]
categories: OpenJudge
---
总时间限制: 1000ms 内存限制: 65536kB

## 描述

在某个字符串（长度不超过100）中有左括号、右括号和大小写字母；规定（与常见的算数式子一样）任何一个左括号都从内到外与在它右边且距离最近的右括号匹配。写一个程序，找到无法匹配的左括号和右括号，输出原来字符串，并在下一行标出不能匹配的括号。不能匹配的左括号用"$"标注,不能匹配的右括号用"?"标注.

## 输入

输入包括多组数据，每组数据一行，包含一个字符串，只包含左右括号和大小写字母，字符串长度不超过100  
注意：cin.getline(str,100)最多只能输入99个字符！

## 输出

对每组输出数据，输出两行，第一行包含原始输入字符，第二行由"$","?"和空格组成，"$"和"?"表示与之对应的左括号和右括号不能匹配。

## 样例输入

```cpp
((ABCD(x)
)(rttyy())sss)(
```

## 样例输出

```cpp
((ABCD(x)
$$
)(rttyy())sss)(
?            ?$
```

## 思路

括号匹配主要是使用栈来解决，遇到左括号就入栈，遇到右括号就出栈，如果栈为空，说明右括号没有匹配的左括号，如果栈不为空，说明左括号没有匹配的右括号。

## 解题步骤

1. 设置字符串`str`和结果字符串`res`，栈`S`和队列`Q2`，还有一个数组`res1`，用来记录左括号和右括号的匹配情况
1. 读入字符串`str`
2. 遍历字符串，遇到左括号就入栈`S`，遇到右括号就出栈`S`，直到栈为空
3. 如果栈`S`为空，说明右括号没有匹配的左括号，就要将右括号入队列`Q2`
4. 如果栈`S`不为空，说明左括号没有匹配的右括号。
5. 遍历字符串，将左括号和右括号的匹配情况记录到数组`res1`中
6. 遍历数组`res1`，根据左括号和右括号的匹配情况，将`res`字符串填充
7. 输出原字符串和结果字符串
8. 清空结果字符串和数组`res1`

## Code

### C++ STL

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
	string str, res;
	array<int, 100> res1 {};
	queue<int> Q2;
	stack<int> S;
	while(getline(cin, str) && str[0]) {
		for(long long unsigned int i = 0; i < str.size(); i++) {
			if(str[i] == '(') S.push(i);
			else if(str[i] == ')') {
				if(!S.empty()) S.pop();
				else Q2.push(i);
			}
		}	
		while(!S.empty()) {
			res1[S.top()] = 1;
			S.pop();
		}
		while(!Q2.empty()) {
			res1[Q2.front()] = 2;
			Q2.pop();
		}
		for(long long unsigned int i = 0; i < str.size(); i++) {
			if(res1[i] == 0) res.insert(res.end(), ' ');
			else if(res1[i] == 1) res.insert(res.end(), '$');
			else if(res1[i] == 2) res.insert(res.end(), '?');
		}
		cout << str << endl << res << endl;
		res.clear();
		res1.fill(0);
	}
}
```

### C

```c
#include <stdio.h>

int main() {
    char str[100], res[100];
    int res1[100];
    while(gets(str) && str[0]) {
        for(int i = 0; i < 100; i++) res1[i] = 0;
        for(int i = 0; i < 100; i++) res[i] = '\0';
        int S[100], Q2[100], top = -1, front = -1;
        for(int i = 0; str[i]; i++) {
            if(str[i] == '(') S[++top] = i;
            else if(str[i] == ')') {
                if(top >= 0) top--;
                else Q2[++front] = i;
            }
        }
        for(int i = 0; i <= top; i++) res1[S[i]] = 1;
        for(int i = 0; i <= front; i++) res1[Q2[i]] = 2;
        for(int i = 0; str[i]; i++) {
            if(res1[i] == 0) res[i] = ' ';
            else if(res1[i] == 1) res[i] = '$';
            else if(res1[i] == 2) res[i] = '?';
        }
        printf("%s\n%s\n", str, res);
    }
}
```