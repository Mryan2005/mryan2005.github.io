---
title: 文字排版
date: 2024-07-27 21:42:26
tags: [C++, OpenJudge, C, STL, String]
categories: OpenJudge
---

总时间限制: 1000ms 内存限制: 65536kB

## 描述

给一段英文短文，单词之间以空格分隔（每个单词包括其前后紧邻的标点符号）。请将短文重新排版，要求如下：

每行不超过80个字符；每个单词居于同一行上；在同一行的单词之间以一个空格分隔；行首和行尾都没有空格。

## 输入

第一行是一个整数n，表示英文短文中单词的数目. 其后是n个以空格分隔的英文单词（单词包括其前后紧邻的标点符号，且每个单词长度都不大于40个字母）。

## 输出

排版后的多行文本，每行文本字符数最多80个字符，单词之间以一个空格分隔，每行文本首尾都没有空格。

## 样例输入

```cpp
84
One sweltering day, I was scooping ice cream into cones and told my four children they could "buy" a cone from me for a hug. Almost immediately, the kids lined up to make their purchases. The three youngest each gave me a quick hug, grabbed their cones and raced back outside. But when my teenage son at the end of the line finally got his turn to "buy" his ice cream, he gave me two hugs. "Keep the changes," he said with a smile. 
```

## 样例输出

```cpp
One sweltering day, I was scooping ice cream into cones and told my four
children they could "buy" a cone from me for a hug. Almost immediately, the kids
lined up to make their purchases. The three youngest each gave me a quick hug,
grabbed their cones and raced back outside. But when my teenage son at the end
of the line finally got his turn to "buy" his ice cream, he gave me two hugs.
"Keep the changes," he said with a smile.
```

## 思路

1. 用`string str;`定义字符串
2. 用`int n;`定义整数
3. 用`cin >> n;`输入整数
4. 用`int summaryLine = 0;`定义行字符数
5. 用`for`循环接收字符串，这里用了`cin >> str;`只能接收一个单词，如果有标点符号则会被分开的特性。
6. 用`if`判断是否超过80个字符，是则换行，否则输出字符串。注意：`str.size()+1`是字符串长度加上一个空格的长度，此时设`summaryLine`为字符串长度。
7. 用`else if`判断是否为第一个字符串，是则输出字符串，否则输出空格和字符串，并更新`summaryLine`。
8. 用`else`输出空格和字符串，并更新`summaryLine`。

## Code

### C++ STL

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
	string str;
	int n;
	cin >> n;
	int summaryLine = 0;
	for(int i = 0; i < n; i++) {
		cin >> str;
		if(str.size()+1 + summaryLine > 80) {	// str.size()+1 is the length of str and backspace
			cout << endl; cout << str; summaryLine = str.size(); 
		} else if(summaryLine == 0){cout << str; summaryLine += str.size();} 
		else {cout << " " << str; summaryLine += str.size()+1;}
	}
}
```

### C

```c
#include <stdio.h>
#include <string.h>

int main() {
    char str[41];
    int n;
    scanf("%d", &n);
    int summaryLine = 0;
    for(int i = 0; i < n; i++) {
        scanf("%s", str);
        if(strlen(str)+1 + summaryLine > 80) {	// strlen(str)+1 is the length of str and backspace
            printf("\n"); printf("%s", str); summaryLine = strlen(str); 
        } else if(summaryLine == 0){printf("%s", str); summaryLine += strlen(str);} 
        else {printf(" %s", str); summaryLine += strlen(str)+1;}
    }
}
```

### C++

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    char str[41];
    int n;
    scanf("%d", &n);
    int summaryLine = 0;
    for(int i = 0; i < n; i++) {
        scanf("%s", str);
        if(strlen(str)+1 + summaryLine > 80) {	// strlen(str)+1 is the length of str and backspace
            printf("\n"); printf("%s", str); summaryLine = strlen(str); 
        } else if(summaryLine == 0){printf("%s", str); summaryLine += strlen(str);} 
        else {printf(" %s", str); summaryLine += strlen(str)+1;}
    }
}
```

## 测试用例

### 测试用例1

#### 输入

```cpp
84
One sweltering day, I was scooping ice cream into cones and told my four children they could "buy" a cone from me for a hug. Almost immediately, the kids lined up to make their purchases. The three youngest each gave me a quick hug, grabbed their cones and raced back outside. But when my teenage son at the end of the line finally got his turn to "buy" his ice cream, he gave me two hugs. "Keep the changes," he said with a smile.
```

#### 输出

```cpp
One sweltering day, I was scooping ice cream into cones and told my four
children they could "buy" a cone from me for a hug. Almost immediately, the kids
lined up to make their purchases. The three youngest each gave me a quick hug,
grabbed their cones and raced back outside. But when my teenage son at the end
of the line finally got his turn to "buy" his ice cream, he gave me two hugs.
"Keep the changes," he said with a smile.
```

### 测试用例2

#### 输入

```cpp
84
One sweltering day, I was scooping ice cream into cones and told my four children they could "buy" a cone from me for a hug. Almost immediately, the kids lined up to make their purchases. The three youngest each gave me a quick hug, grabbed their cones and raced back outside. But when my teenage son at the end of the line finally got his turn to "buy" his ice cream, he gave me two hugs. "Keep the changes," he said       with        a smile.
```

#### 输出

```cpp
One sweltering day, I was scooping ice cream into cones and told my four
children they could "buy" a cone from me for a hug. Almost immediately, the kids
lined up to make their purchases. The three youngest each gave me a quick hug,
grabbed their cones and raced back outside. But when my teenage son at the end
of the line finally got his turn to "buy" his ice cream, he gave me two hugs.
"Keep the changes," he said with a smile.
```

### 测试用例3

#### 输入

```cpp
84
One sweltering day, I was scooping ice cream into cones and told my four children they could "buy" a cone from me for a hug. Almost immediately, the kids lined up to make their purchases. The three youngest each gave me a quick hug, grabbed their cones and raced back outside. But when my teenage son at the end of the line finally got his turn to "buy" his ice cream, he gave me two hugs. "Keep the changes," he said                      with        a smile.
```

#### 输出

```cpp
One sweltering day, I was scooping ice cream into cones and told my four
children they could "buy" a cone from me for a hug. Almost immediately, the kids
lined up to make their purchases. The three youngest each gave me a quick hug,
grabbed their cones and raced back outside. But when my teenage son at the end
of the line finally got his turn to "buy" his ice cream, he gave me two hugs.
"Keep the changes," he said with a smile.
```