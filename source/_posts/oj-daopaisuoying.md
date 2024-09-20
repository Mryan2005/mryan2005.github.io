---
title: 倒排索引
date: 2024-09-20 09:21:50
tags: [OpenJudge, STL, C++, Map]
categories: OpenJudge
---

总时间限制: 1000ms 内存限制: 131072kB
## 描述
给定一些文档，要求求出某些单词的倒排表。

对于一个单词，它的倒排表的内容为出现这个单词的文档编号。

## 输入
第一行包含一个数N，1 <= N <= 1000，表示文档数。
接下来N行，每行第一个数ci，表示第i个文档的单词数。接下来跟着ci个用空格隔开的单词，表示第i个文档包含的单词。文档从1开始编号。1 <= ci <= 100。
接下来一行包含一个数M，1 <= M <= 1000，表示查询数。
接下来M行，每行包含一个单词，表示需要输出倒排表的单词。
每个单词全部由小写字母组成，长度不会超过256个字符，大多数不会超过10个字符。
## 输出
对于每一个进行查询的单词，输出它的倒排表，文档编号按从小到大排序。
如果倒排表为空，输出"NOT FOUND"。
## 样例输入

```cpp
3
2 hello world
4 the world is great
2 great news
4
hello
world
great
pku
```

## 样例输出

```cpp
1
1 2
2 3
NOT FOUND
```

## 分析

1. 这是检索问题
2. 存进去的是单词，但要找的是单词出现在文件的位置，者可以考虑用map来解决。

## Code

### 暴力解法

```cpp
#include <bits/stdc++.h>
using namespace std;
struct file {
	int ci;
	char words[100][257];
};
int main() {
	int N, ci, M;
	scanf("%d", &N);
	file *a = (file*)malloc(sizeof(file)*1000);
	for(int i = 0; i < N; ++i) {
		scanf("%d", &ci);
		a[i].ci = ci;
		for(int j = 0; j < ci; ++j) {
			cin >> a[i].words[j];
		}
	}
	scanf("%d", &M);
	for(int i = 0; i < M; ++i) {
		char s[257];
		int res[1000], p = 0;
		scanf("%s", s);
		for(int j = 0; j < N; ++j) {
			for(int k = 0; k < a[j].ci; ++k) {
				if(strcmp(a[j].words[k], s) == 0) {
					res[p++] = j+1;
					break;
				}
			}
		}
		if(p > 0) {
			for(int i = 0; i < p; ++i) {
				printf("%d ", res[i]);
			}
		} else if(p == 0) {
			printf("NOT FOUND");	
		}
		printf("\n");
	}
}
```

### 哈希解决法

```cpp
#include <bits/stdc++.h>
using namespace std;
int main() {
	int N, ci, M;
	string s;
	scanf("%d", &N);
	unordered_map<string, set<int>> mp;
	for(int i = 1; i <= N; ++i) {
		scanf("%d", &ci);
		for(int j = 1; j <= ci; ++j) {
			cin >> s;
			if(mp.find(s) != mp.end()) mp[s].insert(mp[s].end(), i);
			else {
				set<int> a;
				a.insert(i);
				mp.insert(make_pair(s, a));
			}
		}
	}
	scanf("%d", &M);
	for(int i = 1; i <= M; ++i) {
		cin >> s;
		if(mp.find(s) != mp.end()) {
			for(auto i: mp[s]) {
				printf("%d ", i);
			}
		} else {
			printf("NOT FOUND");
		}
		printf("\n");
	}
}
```

## 注意

在该题目内可能会出现这样的测试用例——`he is venti, he is zhongli`，此时，如果用`vector`，记录`is`的出现位置会发生重复。（感谢[不要失望故事还长的博客](https://blog.csdn.net/m0_37975647/article/details/77600498)）