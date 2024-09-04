---
title: 统计字符数
date: 2024-09-04 20:36:33
tags: [OpenJudge, C++, C, String, STL]
categories: OpenJudge
---

总时间限制: 1000ms 内存限制: 65536kB
## 描述

判断一个由a-z这26个字符组成的字符串中哪个字符出现的次数最多
## 输入

第1行是测试数据的组数n，每组测试数据占1行，是一个由a-z这26个字符组成的字符串
每组测试数据之间有一个空行，每行数据不超过1000个字符且非空
## 输出

n行，每行输出对应一个输入。一行输出包括出现次数最多的字符和该字符出现的次数，中间是一个空格。
如果有多个字符出现的次数相同且最多，那么输出ascii码最小的那一个字符
## 样例输入

```
2
abbccc

adfadffasdf
```

## 样例输出

```
c 3
f 4
```

## 答案

### C

```c
#include <stdio.h>
typedef struct {
    char ch;
    int countArise;
} chara;
typedef struct {
    chara chars[26];
    int last;
} words;
int main() {
    int n, j;
    char str[1000], *p=str, ch, maxAriseChar;
    static words word;
    scanf("%d\n", &n);
    for(int i = 0; i < n; i++) {
        gets(str);
        for(p = str; *p != 0; p++) {
            j = 0;
            for(; j < word.last; j++) {
                if(word.chars[j].ch == *p) {
                    word.chars[j].countArise++;
                    goto out;
                }
            }
            word.chars[word.last].ch = *p;
            word.chars[word.last++].countArise = 1;
            out:;
        }
        maxAriseChar = 0;
        for(int k = 0; k < word.last; k++) {
            if(word.chars[maxAriseChar].countArise < word.chars[k].countArise) {
                maxAriseChar = k;
            } else if(word.chars[maxAriseChar].countArise == word.chars[k].countArise && word.chars[maxAriseChar].ch > word.chars[k].ch) {
                maxAriseChar = k;
            }
        }
        printf("%c %d\n", word.chars[maxAriseChar].ch, word.chars[maxAriseChar].countArise);
        if(i < n-1) {
            ch = getchar();
        }
        word.last = 0;
    }
}
```

还有一份比较简单的。

```c
#include <stdio.h>
typedef struct {
    char ch;
    int countArise;
} chara;
int main() {
    int n, j, pos=0;
    char str[1000], *p=str, ch, maxAriseChar;
    static chara chars[26];
    scanf("%d\n", &n);
    for(int i = 0; i < n; i++) {
        gets(str);
        for(p = str; *p != 0; p++) {
            j = 0;
            for(; j < pos; j++) {
                if(chars[j].ch == *p) {
                    chars[j].countArise++;
                    goto out;
                }
            }
            chars[pos].ch = *p;
            chars[pos++].countArise = 1;
            out:;
        }
        maxAriseChar = 0;
        for(int k = 0; k < pos; k++) {
            if(chars[maxAriseChar].countArise < chars[k].countArise) {
                maxAriseChar = k;
            } else if(chars[maxAriseChar].countArise == chars[k].countArise && chars[maxAriseChar].ch > chars[k].ch) {
                maxAriseChar = k;
            }
        }
        printf("%c %d\n", chars[maxAriseChar].ch, chars[maxAriseChar].countArise);
        if(i < n-1) {
            ch = getchar();
        }
        pos = 0;
    }
}
```

### C++

```cpp
#include <bits/stdc++.h>

using namespace std;

int main() {
	int n;
	string str;
	cin >> n;
	for(int i = 1; i <= n; i++) {
		map<char, int> mp;
		map<int, char> mp1;
		cin >> str;
		for(auto j: str) {
			if(mp.count(j) == 0) mp[j] = 1;
			else mp[j]++;
		}
		int max = 0;
		for(auto j: mp) {
			if(mp1.count(j.second) == 0) mp1[j.second] = j.first;
			if(max < j.second) max = j.second;
		}
		cout << mp1[max] << " " << max << endl;
	}
}
```

## 一些感想

1. 我还是太习惯用last了，虽然遍历26次也没什么，所以我用last的办法使程序变复杂了。
