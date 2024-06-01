---
title: 杨氏双缝干涉
categories:
  - 物理
  - 光学
abbrlink: d83f0373
date: 2024-05-21 21:01:42
tags:
---

![](https://pic.imgdb.cn/item/664c9eacd9c307b7e9ae3cb0.jpg)  

<!--more-->

d表示两缝间距，D表示缝到屏幕的距离，λ表示光波长，x表示屏幕上的某一点到中心的距离。O点处表示中央明纹，在O点两侧，与$k=1,2,3, ……$相应的$x_k$处的$\Delta r$分别是$\plusmn\lambda, \plusmn2\lambda, \plusmn3\lambda, ……$，分别称为一级明纹、二级明纹、三级明纹，……。

## 明纹与暗纹

明纹表示的是两束光干涉加强，暗纹表示的是两束光干涉减弱。

## 波程差

$Δr = r_2-r_1 = d\sinθ = \plusmn k\lambda \ (k = 1, ……)$  
由于 $D>>d$，所以$\sin\theta = \tan\theta = x/D$  
所以$d\frac{x}{D} = \plusmn k\lambda \ (k = 1, …… )$
这是用于计算明纹中心的，计算暗纹中心时，$d\frac{x}{D} = \frac{\lambda}{2}(2k+1) \ (k = 0, ……)$
同时这也是第k级明纹的中心坐标计算公式，即
$$
x_k = k\lambda\frac{D}{d}
\ 或\ 
x_k = \frac{\lambda}{2}(2k+1)\frac{D}{d}
$$

### 相邻明纹或暗纹间距

相邻明纹或暗纹间距为$\Delta x = x_{a} - x_b = \lambda [a-b]\frac{D}{d}$

## 光强分布

$I = I_1 + I_2 + 2\sqrt{I_1I_2}\cos\Delta\varphi$

## 光程和光程差

**光程是光波传播的距离**，**光程差是两束光波传播的距离差**。

光程差的计算公式是光程差为几何光程乘以折射率之差，即$\Delta = n_2r_2-n_1r_1$，其中n是介质的折射率。

## 光程差与相位差

光程差与相位差的关系是$\Delta\varphi = \frac{2\pi}{\lambda}\Delta$（这个公式很重要）  
所以，我们可以知道这个$\plusmn k\lambda$和$\plusmn\frac{\lambda}{2}(2k+1)$的推导也是通过$\Delta\varphi = 2k\pi$和$\Delta\varphi = (2k+1)\pi$推导出来的。  
当然，这可以联系到之前的波程差与相位差的关系，即$\Delta\varphi = \frac{2\pi}{\lambda}\Delta x$
其实，由上面的公式可以推导出以下关系  
$\Delta = \plusmn k\lambda$时，干涉加强（最强）。  
$\Delta = \plusmn\frac{\lambda}{2}(2k+1)$时，干涉减弱（最弱）。  
这也和波动中的叠加原理相符。

## 如何使干涉条纹间距发生变化

首先，我们要知道，干涉条纹间距的公式是$\Delta x = \lambda [a-b]\frac{D}{d}$和图示
![](https://pic.imgdb.cn/item/664c9eacd9c307b7e9ae3cb0.jpg)  
我们可以通过改变$\lambda$、$D$、$d$中的任意一个来改变干涉条纹间距。  
由此，我们可以通过改变光源的波长、改变屏幕到缝的距离、改变两缝间的距离来改变干涉条纹间距使其变大或变小。  
至于将装置从一个环境转移到另一个环境，干涉条纹间距是不变的。

## 劳埃德镜

![劳埃德镜](https://pic.imgdb.cn/item/6652bebdd9c307b7e9cb8c02.jpg)

### 半波损失

当入射光**从折射率较小的光疏介质投射到折射率较大的光密介质**表面时，反射光比入射光有$\pi$的相位突变，这使得**反射光与入射光之间附加了半个波长（$\frac{\lambda}{2}$）的相位差**，这一现象称为**半波损失**。
