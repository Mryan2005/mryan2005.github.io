---
title: ds-DynamicAllocation
date: 2024-05-16 10:42:21
tags:
- 动态分配
categories:
- 数据结构与算法大全
---

## 前情提要

在之前的C语言的学习当中，我们提到了`malloc`和`free`，这两个函数是用来动态分配内存的。  
看好。  
动态分配的代码是这样写的。  

```c
#include <stdio.h>
#include <stdlib.h>
int main() {
    int n;
    scanf("%d", &n);
    int *a = (int*)malloc(sizeof(int)*n);
    free(a);
} 
```

## 结构体结构

```c
typedef struct {
    ElemType *data;
    int length;
    int listSize;
} DA;
```

我来解释一下，这个结构体声明。
length是你实际存了多少的东西，listSize是你目前表的最大长度。

## 动态分配的使用

其实，无非就是创、增、删、改、读、销。

### 创建一个动态分配

其实，就是借空间，然后初始化。当然，有的是选择将借空间和初始化这两个操作分开来做。

```c
#define INITIALSIZE 100
DA da;
da.listSize = INITALSIZE;
da.length = 0;
```

### 初始化动态分配

算了，我还是写出来吧。

```c
void initDynamicAllocation(DA *da) {
    da->data = (ElemType*)malloc(sizeof(ElemType)*INITIALSIZE);
    /* initial process */
}


### 添加内容
```c
void addContent(DA *da, ElemType content) {
    ElemType *p = da->data+length;
    *p = content;
    da->length++;
}
```
