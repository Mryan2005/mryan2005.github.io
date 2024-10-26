---
title: 朋友圈
date: 2024-10-26 20:28:09
tags: [C++, STL, PTA]
categories: PTA
---

某学校有N个学生，形成M个俱乐部。每个俱乐部里的学生有着一定相似的兴趣爱好，形成一个朋友圈。一个学生可以同时属于若干个不同的俱乐部。根据“我的朋友的朋友也是我的朋友”这个推论可以得出，如果A和B是朋友，且B和C是朋友，则A和C也是朋友。请编写程序计算最大朋友圈中有多少人。

### 输入格式
输入的第一行包含两个正整数N（≤30000）和M（≤1000），分别代表学校的学生总数和俱乐部的个数。后面的M行每行按以下格式给出1个俱乐部的信息，其中学生从1~N编号：

第i个俱乐部的人数Mi（空格）学生1（空格）学生2 … 学生Mi

### 输出格式
输出给出一个整数，表示在最大朋友圈中有多少人。

### 输入样例

```
7 4
3 1 2 3
2 1 4
3 5 6 7
1 6
```

### 输出样例

```
4
```

### 一些限制

| 项目 | 限制      |
|----|---------|
| 代码长度限制 | 16 KB   |
| 时间限制 | 400 ms |
| 内存限制 | 64 MB   |
| 栈限制 | 8192 KB |

### 解题思路

1. 初始化`init`
    ```cpp
    void init(int n) {
        for(int i = 1; i <= n; ++i) {
            fa[i] = i;
        }
    }
    ```
2. 查询`find`
    ```cpp
    int find(int i) {
        if(i == fa[i]) return i;
        else {
            fa[i] = find(fa[i]);
            return fa[i];
        }
    }
    ```
3. 合并`unionn`
    ```cpp
    void union1(int a, int b) {
	     int afa = find(a), bfa = find(b);
         fa[afa] = bfa;
    }
    ```
4. 更新`update`（这个是我写题时想到的）
    ```cpp
    int update(int i) {
        if(i == fa[i]) return i;
        else {
            fa[i] = find(fa[i]);
            return fa[i];
        }
    }
    ```
5. 最后的数据整理工作（如统计最大的人数等）
   ```cpp
    unordered_map<int, int> mp;
    for(int i = 1; i <= N; ++i) {
        update(i);
    }
    for(int i = 1; i <= N; ++i) {
        if(mp.find(fa[i]) != mp.end()) {
            mp[fa[i]] += 1;
        } else {
            mp[fa[i]] = 1;
        }
    }
    for(auto i: mp) {
        maxCount = max(maxCount, i.second);
    }
    cout << maxCount;
    ```

## Code

```cpp
#include <bits/stdc++.h>
using namespace std;
int fa[30020];

void init(int n) {
	for(int i = 1; i <= n; ++i) {
		fa[i] = i;
	}
}

int find(int i) {
	if(i == fa[i]) return i;
	else {
		fa[i] = find(fa[i]);
		return fa[i];
	}
}

int update(int i) {
	if(i == fa[i]) return i;
	else {
		fa[i] = find(fa[i]);
		return fa[i];
	}
}

void union1(int a, int b) {
	int afa = find(a), bfa = find(b);
	fa[afa] = bfa;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(0);
    cout.tie(0);
	int N, M, Mi, maxCount = 0;
	cin >> N >> M;
	init(N);
	for(int i = 1; i <= M; ++i) {
        int a, b;
		cin >> Mi >> a;
		for(int j = 1; j <= Mi-1; ++j) {
			cin >> b;
		    union1(a, b);
            a = b;
		}
	}
    for(int i = 1; i <= N; ++i) {
		update(i);
	}
    unordered_map<int, int> mp;
	for(int i = 1; i <= N; ++i) {
        if(mp.find(fa[i]) != mp.end()) {
            mp[fa[i]] += 1;
        } else {
            mp[fa[i]] = 1;
        }
    }
    for(auto i: mp) {
        maxCount = max(maxCount, i.second);
    }
	cout << maxCount;
}
```