---
title: 随机事件与概率
tags:
  - 第一版
categories:
  - 数学
  - 概率论与数理统计
abbrlink: becb01a7
date: 2024-05-11 21:10:06
---

## 确定性现象和不确定性现象

### 确定性现象

如果在一相同条件下的试验中只会有一种结果出现，这种现象称为确定性现象

### 不确定性现象

如果在一相同条件下的试验中可能出现多种结果，这种现象称为不确定性现象，也称为随机现象。

### 例子

1. 抛硬币
2. 掷骰子
3. 抽奖

## 随机试验

### 特征

1. 可重复
2. 不确定
3. 可观察

## 样本空间

随机试验E的所有可能结果组成的集合称为E的样本空间，记为S或Ω。样本空间的元素称为样本点，用ω表示。

### 分类

1. 离散型的样本空间，以散乱的点表示
2. 连续型的样本空间，以线段表示

## 随机事件

样本空间S的子集称为随机事件，简称事件。
通常以大写字母A、B、C等表示事件。

只有A中的样本点出现时，称事件A发生，否则称事件A不发生。B、C等事件类似。

### 例子

做如下随机试验：从整数1~9中随机抽取一个数，则样本空间$S = \{1,2,3,4,5,6,7,8,9\}$  
设事件A表示抽到的数不小于5，即$A = \{5,6,7,8,9\}$。  
设事件B表示抽到的是偶数，即$B = \{2,4,6,8\}$。  
A同学随机抽取的数是2，则我们称事件A没有发生，事件B发生。  
B同学随机抽取的数是6，则我们称事件A和B都发生。  
C同学随机抽取的数是1，则我们称事件A和B都没有发生。  
D同学随机抽取的数是9，则我们称事件A发生，事件B没有发生。  

## 必然事件

一定会发生的事件称为必然事件。也就是这一事件包含所有的样本点。

## 不可能事件

一定不会发生的事件称为不可能事件。也就是这一事件不包含任何样本点，为空集。

## 包含关系与相等关系

### 包含关系

如果属于A的样本点必属于B，则称事件B包含事件A，或称事件A被包含于事件B，记为A⊂B，或B⊃A。  
**事件A 发生必然导致事件B发生。**

### 相等关系

如果A⊂B且B⊂A，则称事件A与事件B相等，记为A=B。  
**事件A发生等价于事件B发生。**

## 和（并）运算

由属于事件A或属于事件B的样本点组成的新事件称为事件A与事件B的和事件，记为A⋃B或A+B。  
**事件A发生或事件B发生，即事件A与事件B中至少有一事件发生。**

## 积（交）运算

由属于事件A且属于事件B的样本点组成的新事件称为事件A与事件B的积事件，记为A⋂B或AB。  
**事件A发生且事件B发生，即事件A与事件B同时发生。**

## 差运算

由属于事件A且不属于事件B的样本点组成的新事件称为事件A与事件B的差事件，记为A-B。  
**事件A发生且事件B不发生。**

## 对立事件、互不相容（互斥事件）、独立事件

感觉解释这样的东西，只能用人际交往的方式来解释。

### 对立事件

事件A的对立事件记为$\overline{A}$，即$\overline{A} = S - A$。  
一句话，我们两没办法处了，“你出现”的事件发生，“我出现”的事件就不发生，反之亦然。（我怎么写也是刚好气头上想出来的，别往心里去）

### 互不相容事件（互斥事件）

两者之间没有交集，即$A⋂B = \emptyset$。  
这像不像你跟一些人的思想，无论怎么谈，都谈不到一块去。

### 独立事件

A事件的发生不影响B事件的发生，B事件的发生不影响A事件的发生。  
**符合$P(AB) = P(A)P(B)$的事件称为独立事件。  
注意：$P(\overline{A}\overline{B}) = P(\overline{A})P(\overline{B})$也成立。**

## 事件的运算律

1. 交换律：$A⋃B = B⋃A$，$AB = BA$
2. 结合律：$(A⋃B)⋃C = A⋃(B⋃C)$，$(AB)C = A(BC)$
3. 分配律：$A(B⋃C) = AB⋃AC$，$A⋃(BC) = (A⋃B)(A⋃C)$
4. 对偶律：$\overline{A⋃B} = \overline{A}⋂\overline{B}$，$\overline{AB} = \overline{A}⋃\overline{B}$