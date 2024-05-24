---
title: 链表入门
tags:
  - 链表
categories:
  - 数据结构与算法大全
  - 线性结构（线性表）
abbrlink: e86a0aed
date: 2024-05-23 22:25:31
---

## 链表（**linked list**）的别称

**线性表的链式表示**、**链式存储结构**、**链式映像**、**随机存取结构**的储存结构

## 单向链表

### 长相

#### 无头链表

![](https://pic.imgdb.cn/item/662db4730ea9cb14037a6420.jpg)
指向首元结点的指针叫做**头指针（head pointed）**

#### 有头链表

第一个结点叫**头结点（head node）**

### 结构体定义

```c
typedef struct node {
    ElementType data;
    struct node *next;
} node;
typedef node* List;
```

### 初始化

```c
void initList(List *L) {
    List p = *L;
    while(p && p->next) p = p->next;
    if(!p) {
        *L = (node*)malloc(sizeof(node));
        p = *L;
        scanf("%d", &p->data);
        p->next = NULL;
    } else {
        p->next = (node*)malloc(sizeof(node));
        p = p->next;
        scanf("%d", &p->data);
        p->next = NULL;
    }
}
```

## 增加

### 行尾增加

:::collapse[代码]

```c
int addNodeFromLast(List *L, ElementType data) {
    List p = *L;
    while(p && p->next) p = p->next;
    p->next = (node*)malloc(sizeof(node));
    p = p->next;
    p->data = data;
    p->next = NULL;
}
```

:::

### 行首增加

:::collapse[代码]

```c
int addNodeFromHead(List *L, ElementType data) {
    node *p = (node*)malloc(sizeof(node));
    p->data = data;
    p->next = *L;
    *L = p;
}
```

:::

### 中间插入

:::collapse[代码]

```c
int addNodeFromMiddle(List *L, ElementType data, int position) {
    node *p = *L, *q = (node*)malloc(sizeof(node));
    int positionCur = 0;
    while(position-1 > positionCur) {
        positionCur++;
        p = p->next;
        if(!p) return 0;
    }
    q->data = data;
    q->next = p->next;
    p->next = q;
    return 1;
}
```

:::

### 有序插入

原理：找到比它大的数，插在比它大的数的前面
:::collapse[代码]

```c
void insertNode(List *L, ElementType x) {
    node *p = (node*)malloc(sizeof(node)), *q = *L, *k = NULL;
    p->data = x;
    while(x > q->data && q->next) {
        k = q;
        q = q->next;
    }
    if(q != *L) {
        p->next = k->next;
        k->next = p;
    } else {
        p->next = *L;
        *L = p;
    }
}
```

:::

## 删除

### 通过序号删除

原理：寻找——>删除
:::collapse[代码]

```c
int removeNode(List *L, int position) {
    if(position < 1) return 1;
    node *p = *L, *q = *L;
    int curPosition = 1;
    while(p && curPosition < position) {
        curPosition++;
        q = p;
        p = p->next;
    }
    if(p) {
        if(p != *L) q->next = p->next;
        else *L = p->next;
        free(p);
        return 0;
    } else return 1;
}
```

:::

### 通过匹配结果删除

原理：寻找（需要删除的位置和需要删除的位置的前一个位置）——>删除
:::collapse[代码]

```c
int removeNodeThroughContent(List *L, ElementType data) {
    node *p = *L, *k = *L;
    int positionCurrent = 0;
    while(p && p->data != data) {
        k = p;
        p = p->next;
    }
    if(p) {
        if(p != *L) k->next = p->next;
        else *L = p->next;
        free(p);
        return 0;
    } else {
        k->next = NULL;
        free(p);
        return 0;
    }
    return 1;
}
```

:::

### 全部删除

:::collapse[代码]

```c
int removeAllNode(List *L) {
    node *p = *L, *k = *L;
    while(k) {
        k = p;
        if(p) {
            p = p->next;
        }
        free(k);
    }
    *L = NULL;
    return 1;
}
```

:::

## 返回信息

### 返回长度

:::collapse[代码]

#### C

```c
int getListLength(sqList List) {
    int length = 0;
    node *p = List;
    while(p) {
        p = p->next;
        length++;
    }
    return length;
}
```

#### Python

```python
def getListLength(List):
```

:::

### 返回某一元素的位置

:::collapse[代码]

```c
```

:::

### 返回某一位置元素的信息

:::collapse[代码]

```c
```

:::

### 是否是空表

:::collapse[代码]

#### C

```c
#define OK 1
#define NO 0
int isEmpty(sqList List) {
    if(List) return OK;
    else return NO;
}
```

#### Python

```python
def isEmpty(List):
```

:::

## 对内部数据进行操作

### 排序

### 逆置

#### 方法一

##### 原理

![](https://pic.imgdb.cn/item/662db4730ea9cb14037a6361.jpg)
:::collapse[代码]

#### C

```c
List f(List *L) {
    List p = *L, L1 = NULL, q = NULL;
    while(p) {
        q = p->next;
        if(!L1) {
            L1 = p;
            L1->next = NULL;
        } else {
            p->next = L1;
            L1 = p;
        }
        p = q;
    }
    return L1;
}
```

:::

#### 方法二

##### 原理

![](https://pic.imgdb.cn/item/662db4730ea9cb14037a63d1.jpg)
:::collapse[代码]

#### C

```c
List f(List *L) {
    List p = *L, Last = *L;
    while(Last->next) Last = Last->next;
    while(p != Last) {
        *L = (*L)->next;
        p->next = Last->next;
        Last->next = p;
        p = *L;
    }
    return *L;
}
```

:::

作者：[**Mryan2005**](https://www.mryan2005.top)

## 参考资料

1. [数据结构（C语言版）| 作者：严蔚敏女士](http://www.tup.tsinghua.edu.cn/bookscenter/book_00236807.html)