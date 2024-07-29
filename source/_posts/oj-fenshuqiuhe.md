---
title: oj-fenshuqiuhe
date: 2024-07-29 22:18:22
tags:
categories:
---

总时间限制: 1000ms 内存限制: 65536kB
## 描述
输入n个分数并对他们求和，并用最简形式表示。所谓最简形式是指：分子分母的最大公约数为1；若最终结果的分母为1，则直接用整数表示。

如：5/6、10/3均是最简形式，而3/6需要化简为1/2, 3/1需要化简为3。

分子和分母均不为0，也不为负数。

## 输入
第一行是一个整数n，表示分数个数，1 <= n <= 10；
接下来n行，每行一个分数，用"p/q"的形式表示，不含空格，p，q均不超过10。
## 输出
输出只有一行，即最终结果的最简形式。若为分数，用"p/q"的形式表示。
## 样例输入

```cpp
2
1/2
1/3
```

## 样例输出

```cpp
5/6
```

## 思路


## Code

### C++ STL

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
	int n, c;
	pair<int, int> num, res(0, 0);
	string a;
	cin >> n;
	for(int i = 1; i <= n; i++) {
		getline(cin, a, '/');
		num.first = atoi(a.c_str());
		getline(cin, a);
		num.second = atoi(a.c_str());
		if(res.first == 0 && res.second == 0) {
			res.first = num.first;
			res.second = num.second;
		} else {
			res.first *= num.second;
			c = res.second;
			res.second *= num.second;
			num.first *= c;
			num.second *= c;
			res.first += num.first;
			if(res.first > res.second) {
				if(res.first % res.second == 0) {
					c = res.second;
					res.first /= c;
					res.second /= c;
				} 
			} else if(res.first == res.second) {
					res.first = 1;
					res.second = 1;
			} else if(res.first < res.second) {
				if(res.second % res.first == 0) {
					c = res.first;
					res.first /= c;
					res.second /= c;
				} 
			}
		}
	}
	int flag = 1;
	while(flag) {
		for(int i = 2; i < 10; i++) {
			if(res.first % i == 0 && res.second % i == 0) {
				flag = 1;
				res.first /= i;
				res.second /= i;
				goto out;
			}
		}
		flag = 0;
		out:;
	}
	if(res.first != res.second && res.second != 1) cout << res.first << "/" << res.second;
	else if(res.second == 1) cout << res.first;
}
```

### C

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int n, c;
    int num[2], res[2] = {0, 0};
    char a[10];
    scanf("%d", &n);
    for(int i = 1; i <= n; i++) {
        scanf("%d/%d", &num[0], &num[1]);
        if(res[0] == 0 && res[1] == 0) {
            res[0] = num[0];
            res[1] = num[1];
        } else {
            res[0] *= num[1];
            c = res[1];
            res[1] *= num[1];
            num[0] *= c;
            num[1] *= c;
            res[0] += num[0];
            if(res[0] > res[1]) {
                if(res[0] % res[1] == 0) {
                    c = res[1];
                    res[0] /= c;
                    res[1] /= c;
                } 
            } else if(res[0] == res[1]) {
                    res[0] = 1;
                    res[1] = 1;
            } else if(res[0] < res[1]) {
                if(res[1] % res[0] == 0) {
                    c = res[0];
                    res[0] /= c;
                    res[1] /= c;
                } 
            }
        }
    }
    int flag = 1;
    while(flag) {
        for(int i = 2; i < 10; i++) {
            if(res[0] % i == 0 && res[1] % i == 0) {
                flag = 1;
                res[0] /= i;
                res[1] /= i;
                goto out;
            }
        }
        flag = 0;
        out:;
    }
    if(res[0] != res[1] && res[1] != 1) printf("%d/%d", res[0], res[1]);
    else if(res[1] == 1) printf("%d", res[0]);
}
```

## 测试用例

### 样例1：两个分数相加

#### 输入

```plaintext
2
1/2
1/3
```

#### 输出

```plaintext
5/6
```

### 样例2：判定分子分母相等

#### 输入

```plaintext
2
1/2
1/2
```

#### 输出

```plaintext
1
```

### 样例3：分母为1，分子不为1

#### 输入

```plaintext
2
1/1
2/1
```

#### 输出

```plaintext
3
```

### 样例4：求出最简形式

#### 输入

```plaintext
2
5/3
5/3
```

#### 输出

```plaintext
10/3
```

### 样例5：多个分数相加

#### 输入

```plaintext
3
1/2
1/2
1/2
```

#### 输出

```plaintext
3/2
```