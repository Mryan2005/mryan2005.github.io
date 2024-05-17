---
title: 顺序表
date: 2024-05-17 12:22:25
tags:
- 线性表
categories:
- 数据结构与算法大全
---

## 别称

**线性表的顺序表示**、**顺序存储结构**、**顺序映像**、**随机存取结构**的储存结构

## 作用

利用数组的连续存储空间顺序存放线性表的各个元素
`a[n-1]`是`a[n]`的直接前趋，`a[n+1]`是`a[n]`的直接后继。

## 结构体代码

### 第一种写法

```c
typedef struct sqList {
    ElementType Data[MAXSIZE];
    int Last;
} sqList;
```

#### Python

```python
class LNode:
    def __init__(self):
        self.Data = []
        self.last = -1
```

### 第二种写法

```c
typedef struct sqList {
    ElementType Data[MAXSIZE];
    int length;
} sqList;
```

#### Python

```python
class LNode:
    def __init__(self):
        self.Data = []
        self.length = 0
```

### 第三种写法

```c
typedef struct sqlList {
    ElementType *Data;
    int length;
} sqList;
```

#### Python

```python
class LNode:
    def __init__(self):
        self.Data = None
        self.length = 0
···

## 初始化

### 通过输入来实现的初始化

```c
int initList(sqList *List, int n) {
    if(MAXSIZE < n) return 1;
    ElementType *p = List->Data;
    for(int i = 0; i < n; i++, List->length = i) scanf("%d", p++);
    return 0;
}
```

#### Python

```python
def initList(List: LNode, n):
    for i in range(0,n):
        List.Data.append(int(input()))
        List.length += 1
···

### 通过读取文件实现的初始化

```c
int initList(sqList *List, int n, FILE *fp) {
    if(MAXSIZE < n || fp == NULL) return 1;
    ElementType *p = List->Data;
    for(int i = 0; i < n; i++, List->length = i) {
        if(sizeof(ElementType) == 4) *(p++) = fgetc(fp) - '0';
        else if(sizeof(ElementType) == 1) *(p++) = fgetc(fp);
        if( feof(fp) ) {
            break ;
        }
    }
    return 0;
}
```

## 增加

### 行尾增加


#### C

```c
int insertNodeFromEnd(sqList *List, int n) {
    if(MAXSIZE < List->length+n) return 1;
    ElementType *p = List->Data + List->length;
    for(int i = 0; i < n; i++) scanf("%d", p++);
    List->length = n + List->length;
    return 0;
}
```

#### Python

```python
def insertNodeFromEnd(List, n):
    for i in range(1, n+1):
        List.Data.append(input())
        List.length += 1

### 行首增加

主要原理就是在添加一个Node时，先将原有的向后移一个，再添加。

#### C

```c
int insertNodeFromHead(sqList *List, int n) {
    if(MAXSIZE < List->length+n) return 1;
    ElementType *p = List->Data;
    for(int i = 0; i < n; i++) {
        for(ElementType *q = List->Data+List->length; q != p; q--) *q = *(q-1);
        scanf("%d", p);
        List->length++;
    }
    return 0;
}
```

#### Python

```python
def insertNodeFromHead(List, n):
    for i in range(0, n):
        List.Data.insert(0, input())
        List.length += 1
```

### 中间插入

#### C

```c
int insertNodeFromMiddle(sqList *List, int insertPostion, int n) {
    if(MAXSIZE < insertPostion+n || MAXSIZE < insertPostion || List->length < insertPostion) {
        printf("insertPostion > List->length");
        return 1;
    }
    ElementType *p = List->Data + insertPostion;
    for(int i = 0; i < n; i++) {
        for(ElementType *q = List->Data+List->length; q != p; q--) *q = *(q-1);
        scanf("%d", p);
        List->length++;
    }
    return 0;
}
```

#### Python

```python
def insertNodeFromMiddle(List, insertPostion, n):
    for i in range(0, n):
        List.Data.insert(insertPostion, input())
        List.length += 1
```

### 有序插入

原理：从后往前找——>比它小的数的后面

#### C

```c
int insertANode(List va, ElementType a) {
    if(va->length > MaxSize) {
        printf("序列已满");
        return 1;
    }
    ElementType *p = va->data + va->length-1;
    while(p != va->data && a <= *p) {
        *(p+1) = *p;
        p--;
    }
    *(p+1) = a;
    va->length++;
    return 0;
}
```

## 删除

### 通过序号删除

原理：从后往前找——>比它小的数的后面

#### C

```c
int removeNodeThroughPosition(List *L, int position) {
    
}
```

### 通过匹配结果删除

原理：

#### C

```c
int removeNodeThroughContent(List *L, ElementType data) {
    node *p = *L, *q;
    int positionCurrent = 0;
    while(p && p->next) {
        p = p->next;
        if(p->data == data) {
            q = p->next;
            p->next = q->next;
            free(q);
            return 0;
        }
    }
    return 1;
}
```

### 从i开始删除k个

原理：

#### C

```c
int deleteNodeFromItoK(sqList *List, int i, int k) {
    if(i > List->length || i+k-1 > List->length) return 1;
    int *p = List->Data+(i-1);
    for(int *q = List->Data+i+k-1; q != List->Data+List->length; q++, p++) *p = *q;
    List->length -= k;
    return 0;
}
```

### 全部删除

#### C

```c
int deleteAllNodes(sqList *List) {
    List->length = 0;
}
```

#### python

```python
def deleteAllNodes(List):
    List.length = 0;
```

## 修改

### 通过序号修改


#### C

```c
int changeValue(sqList *List, int insertPostion, ElementType value) {
    if(insertPostion > List->length) {
        printf("insertPostion > List->length");
        return 1;
    }
    ElementType *p = List->Data+(insertPostion-1);
    *p = value;
    return 0;
}
```

#### python

```python
def changeValue(List, insertPostion, value):
    if insertPostion > List.length:
        print("插入位置超过表长")
        return 1
    List[insertPostion-1] = value
    return 0
```

### 通过匹配结果修改

#### C

```c
int changeValue(sqList *List, ElementType value1, ElementType value) {
    for(int i = 0; i < List->length; i++) if(*(List->Data+i) == value1) {
        *(List->Data+i) = value;
        return 0;
    }
    printf("not find");
    return 1;
}
```

#### python

```python
def changeValue(List, value1, value2):
    try:
        List.Data[List.Data.index(value1)] = value2
    except ValueError:
        print("找不到该值")
        return 1
```

## 返回信息

### 返回长度

#### C

```c
int getListLength(sqList List) {
    return List.length;
}
```

#### python

```python
def getListLength(List):
    return List.length
```

### 返回某一元素的位置

#### C

```c
int getThePositionOfNode(sqList List, int value) {
    ElementType *p = List.Data;
    for(int i = 0; i < List->length; i++) if(p[i] == value) return i+1;
    return -1
}
```

#### Python

```python
def getThePositionOfNode(List, int value):
    try:
        return List.Data.index(value)+1
    except ValueError:
        print("找不到该值")
        return 1
```

### 返回某一位置元素的信息

#### C

```c
int getTheContactOfNode(sqList List, int postion) {
    ElementType *p = List.Data;
    if(postion > List.length) {
         return p[postion-1];
    }
    return NULL;
}
```

#### Python

```python
def getTheContactOfNode(List, postion):
    if postion > List.length:
        return False
    return List.Data[postion-1]
```

### 是否是空表

#### C

```c
#define OK 1
#define NO 0
int isEmpty(sqList List) {
    if(List.length) return OK;
    else return NO;
```

#### Python

```python
def isEmpty(List):
    if len(List):
        return 1
    else:
        return 0
```

### 获得最大长度

#### C

```c
int getMaxSize() {
    return MAXSIZE;
}
```

## 对内部数据进行操作

### 排序


### 逆置

#### C

```c
void f(sqList *L) {
    ElementType *p = L->Data, temp;
    for(ElementType *q = L->Data + L->length-1; q > p; q--, p++) {
        temp = *q;
        *q = *p;
        *p = temp;
    }
}
```

## 参考资料

1. [数据结构（C语言版）| 作者：严蔚敏女士](http://www.tup.tsinghua.edu.cn/bookscenter/book_00236807.html)