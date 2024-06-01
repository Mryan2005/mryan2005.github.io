---
title: 算法的基础知识
tags:
  - 第一版
  - 算法
categories:
  - 数据结构与算法大全
  - 入门
abbrlink: 5e7b20a2
date: 2024-05-12 10:51:11
---

## 算法的五大特性

1. **确定性**
2. **有穷性**
3. **可行性**
4. **输入**和**输出**（可以没有输入，但是得要有输出）

<!--more-->

## 辨析

1. 程序是不是算法？
答案是False，因为程序可以没有输入。

## 算法的要求

1. **正确性（correctness）**
2. **可读性（readability）**
3. **健壮性（robustness）**
4. 效率与低储存量需求

## 算法的书写

我们要把它写成一个函数。

声明行由返回值类型（int、char、double、float、void、long int）、函数名称和形式参数声明区构成

```C
returnValueType functionName(type1 value1;type2 value2) {
    command 1;
    command 2;
    ……
    command n;
}
```

如果没有声明行，那一定要原型声明，如果不进行原型声明，就有可能造成C语言去猜测变量。

如果输入参数与定义的不匹配，那么会发生变量类型转换。

当然如果你把要声明的函数放到main函数的前面或者是放到头文件当中就不会需要声明行了。
总之，要知道，我们要用到函数来表示一个算法。譬如，我们要从顺序表（从零号位开始存数据，里面的数值都大于等于0）中返回指定位置的值：

```C
/*
#define maxSize 100 
typedef struct {
    elementType data[maxSize];
    int length;
};
*/
elementType initAlist(seqList *L, int i) {
    if(i > L->length) return -1;
    return L->data[i-1];
}
```

至于顺序表是什么，为什么要特别声明是从0号位开始，我们以后再说。
不过，在这里形式参数声明区代表的是要输入的值的区域，函数名称得表达出算法的用途，实在不行可以随意。

## 算法的衡量标准

即时间复杂度（time complexity）和空间复杂度（space complexity）。

### 时间复杂度（time complexity）

又分为事前估计和事后估计

#### 事前估计

##### 语句频度

1. 顺序结构、分支结构、循环结构——运行次数会有变化，取最大的运行次数。

##### 渐进时间复杂度（asymptotic time complexity）

2. T(n) = O(f(n))，渐进时间复杂度。
3. 主要是要找到关键操作（递归和循环），就是嵌套最深的语句，可以是判断、也可以是普通语句。
4. 当存在最好和最坏情况后，用平均复杂度。

##### 例题 <sup><a href="https://blog.csdn.net/weixin_63866037/article/details/128087397">1</a></sup>

1. 多重循环
![多重循环](https://pic.imgdb.cn/item/662db4800ea9cb14037a864f.png)
![多重循环](https://pic.imgdb.cn/item/662db4840ea9cb14037a8e71.png)

1. 一重循环
![一重循环](https://pic.imgdb.cn/item/662db4800ea9cb14037a83a9.png)
![d9379049-6e45-4356-a8b0-f19cb2ecb852.png](https://s2.loli.net/2024/04/18/AoCu61OVJqYiBhW.png)
![一重循环](https://pic.imgdb.cn/item/662db4800ea9cb14037a8404.png)
![一重循环](https://pic.imgdb.cn/item/662db4800ea9cb14037a852c.png)
![一重循环](https://pic.imgdb.cn/item/662db4800ea9cb14037a8451.png)

#### 事后统计

1. 利用计算机的计时工具，用一组或多组数据去测。**缺点是要运行程序，还会依赖于硬件、软件等因素。**

### 空间复杂度（space complexity）

算法本身会占用：输入、输出、指令、常数、变量等。
看看弄出了多少空间被占用。
注意：如果是递归的算法，那就**是看层数**，不是看节点数，因为递归算法是单线程的弄完一个以后，就会删除掉。

## 参考资料

1. [详解时间复杂度计算公式(附例题细致讲解过程)](https://blog.csdn.net/weixin_63866037/article/details/128087397)
2. [数据结构（C语言版）| 作者：严蔚敏女士](http://www.tup.tsinghua.edu.cn/bookscenter/book_00236807.html)
