---
title: 线性表入门
date: 2024-05-12 15:00:51
tags: 
- 第一版
- 线性表
categories:
- 数据结构与算法大全
---

## 定义

线性表（**linear list**）有以下三个规则：

1. 存在唯一的一个“第一个”数据元素
2. 存在唯一的一个“最后一个”数据元素
3. 除“第一个”和“最后一个”元素均只有一个**直接前驱（immediate predecessor）**和一个**直接后继（immediate successor）**。

## 一些参数

线性表长度为`n`，也可以直接用`xxLen`表示
当`n=0`时，就是空表
`a`的下表i表示的是`a(i)`在线性表的位序

## 一些要说的东西

对于线性表存在两种输入的情况：

1. 不修改内容，只是把内容传入，如`List L`
1. 譬如，`getLength(List L)`
2. 可修改内容，也可把内容传入，就传地址（指针），如`List *L`
1. 譬如，`initList(List *L)`
2. 但是，在此后要访问这指针的内容要用到`L->`

但是，我们要注意的是结构体。
举个例子
这是一个动态分配

```c
typedef struct {
 ElemType *data;
 int length;
 int listSize;
} DA;
```

注意，如果我们要修改结构体变量的内容（即data、length、listSize），那就直接传地址，如果我们只是读取，那就传变量即可。
譬如，我们的读取函数

```c
void readDA(DA da) {
 for(int i = 0; i < da.length; i++) printf("%d", da.data[i]);
}
```

这就是直接传变量本身。
如果们要对该变量本身进行一系列的修改的时候，下面的增加函数代码

```c
void addContent(DA *da, ElemType content) {
 ElemType *p = da->data+da->length;
 *p = content;
 da->length++;
}
```

这就是直接传地址的。

## 参考资料

1. [数据结构（C语言版）| 作者：严蔚敏女士](http://www.tup.tsinghua.edu.cn/bookscenter/book_00236807.html)