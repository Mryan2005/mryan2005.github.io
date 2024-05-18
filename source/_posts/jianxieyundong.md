---
title: 简谐运动（入门）
date: 2024-05-14 09:10:32
tags:
categories: 
- 物理
- 简谐运动
---

## 弹簧振子

一端固定，一端连接物体，在平衡位置O点反复运动，如下图所示
![弹簧振子](https://pic.imgdb.cn/item/663044c10ea9cb14035fade5.webp)

物理情景：将物块拉到A位置上，然后撤掉拉力，物体发生运动。  
当物体到达O点时，物体加速度为0，因为弹力为0；  
当物体到达A点的时候，速度减为0。  

在这里我们知道，弹力的计算公式是 $F = -kx$。  
由此，我们可以由加速度公式 $a=\frac{F}{m}$ 推出 $a=-\frac{kx}{m}$。
由于 $\omega^2 = \frac{k}{m}$，所以，$a = -\omega^2x$。
而微分方程就是在这基础之上将$a$变成$\frac{d^2x}{dt^2}$。

这里我们要引出一个公式，就是运动方程：$x = A\cos(wt+\phi)$  
然后，我们结合物理学上册的运动描述 $v = \frac{dx}{dt}$，$a = \frac{dv}{dt}$，我们可以知道，$v = - \omega A\sin(wt+\phi)$，$a = \omega^2A\cos(wt+\phi)$  
![cos图](https://pic.imgdb.cn/item/66486744d9c307b7e98c7cf3.png)
