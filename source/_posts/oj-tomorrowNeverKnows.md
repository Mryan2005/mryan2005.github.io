---
title: Tomorrow never knows？
date: 2024-07-17 10:14:00
tags: OpenJudge
categories: OpenJudge
---
总时间限制: 1000ms 内存限制: 65536kB

## 描述

甲壳虫的《A day in the life》和《Tomorrow never knows》脍炙人口，如果告诉你a day in the life,真的会是tomorrow never knows?相信学了计概之后这个不会是难题，现在就来实现吧。

读入一个格式为yyyy-mm-dd的日期（即年－月－日），输出这个日期下一天的日期。可以假定输入的日期不早于1600-01-01，也不晚于2999-12-30。

## 输入

输入仅一行，格式为yyyy-mm-dd的日期。

## 输出

输出也仅一行，格式为yyyy-mm-dd的日期

## 样例输入

```cpp
2010-07-05
```

## 样例输出

```cpp
2010-07-06
```

## 提示

闰年的标准：

1. 普通年能被4整除且不能被100整除的为闰年。（如2004年就是闰年,1901年不是闰年）
    地球公转示意图
2. 世纪年能被400整除的是闰年。(如2000年是闰年，1100年不是闰年)
3. 输入语句scanf("%d-%d-%d",&y,&m,&d)可以存储年，月，日．输出语句格式类似printf("%d-%02d-%02d\n",year,month,day)．

## 思路

### 方法一

由题可知，输入一个日期，输出明天的日期。  
其中，这将涉及到年、月、日的修改。  
首先，将输入的日期的日数加一，然后判断是否需要修改月份，再判断是否需要修改年份。  
这里要注意闰年的判断。
如果是闰年，2月份有29天，否则有28天。
1、3、5、7、8、10、12月份有31天，其他月份有30天。

值得注意的是，如果是闰年且为2月份，且日期为28号，那么明天就是29号。

## Code

### C++

```cpp
#include <bits/stdc++.h>
using namespace std;

typedef struct date {
	int year;
	int month;
	int day;
} date;

int main() {
	date input;
	cin >> input.year >> input.month >> input.day;
	input.day *= -1;
	input.day++;
	input.month *= -1;
	if((input.day > 29) && (input.month == 2) && ((input.year % 4 == 0 && input.year % 100 != 0) || input.year % 400 == 0)) {
		input.day = 1;
		input.month++;
	} else if((input.day > 28) && (input.month == 2) && ((input.year % 4 == 0 && input.year % 100 != 0) || input.year % 400 == 0));
	else if(((input.year % 4 != 0 && input.year % 400 != 0) || input.year % 100 == 0) && input.month == 2 && input.day > 28) {
		input.day = 1;
		input.month++;
	} else if((input.month == 1 || input.month == 3 || input.month == 5 || input.month == 7 || input.month == 8 || input.month == 10) && input.month != 12 && input.day > 31) {
		input.day = 1;
		input.month++;
	} else if((input.month == 2 || input.month == 4 || input.month == 6 || input.month == 9 || input.month == 11) && input.month != 12 && input.day > 30) {
		input.day = 1;
		input.month++;
	} else if(input.month == 12 && input.day > 31) {
		input.day = 1;
		input.month = 1;
		input.year++;
	}
	cout << input.year << "-";
	if(input.month < 10) cout << "0" << input.month;
	else cout << input.month;
	if(input.day < 10) cout << "-" << "0" << input.day;
	else cout << "-" << input.day;
}
```