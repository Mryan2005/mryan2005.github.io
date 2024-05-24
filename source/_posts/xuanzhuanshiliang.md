---
title: 旋转矢量
categories:
  - 物理
  - 简谐运动
abbrlink: 6e211ebe
date: 2024-05-18 17:09:50
tags:
---

## 一些位置的相位

![图示1](https://pic.imgdb.cn/item/664883a6d9c307b7e9acd582.jpg)

当相位 $\omega t+φ=0+2k\pi$ 时，$x=A$，物体在最大正向位移处。  
当相位 $\omega t+φ=π+2k\pi$ 时，$x=-A$，物体在最大负向位移处。  
当相位 $\omega t+φ=\frac{\pi}{2}+2k\pi$ 时，$x=0$，物体在平衡位置。  
当相位 $\omega t+φ=\frac{3\pi}{2} + 2k\pi$ 时，$x=0$，物体在平衡位置。  

当相位 $0 < \omega t+φ < \frac{\pi}{2}$ 时， $x>0$，物体向平衡位置运动。  
当相位 $\frac{\pi}{2} < \omega t+φ < \pi$ 时， $x<0$，物体向负方向最大位移运动。  
当相位 $\pi < \omega t+φ < \frac{3\pi}{2}$ 时， $x<0$，物体向平衡位置运动。  
当相位 $\frac{3\pi}{2} < \omega t+φ < 2\pi$ 时， $x>0$，物体向正方向最大位移运动。

## 相位差

相位差 $\Delta φ$ 是两个物体的初相差，即 $\Delta φ = (\omega t+φ_2) - (\omega t+φ_1) = φ_2 - φ_1$。

## 超前与落后

假如 $0 \lt |\Delta φ| = |φ_2 - φ_1| \leqslant \pi$，则称 $φ_2$ 超前于 $φ_1$。  
假如 $\pi < |\Delta φ| \leqslant 2\pi$, 则称 $φ_2$ 落后于 $φ_1$，并且是落后$\Delta φ - \pi$  
其实，就是相差小于 $\pi$ 时，后面的超前；相差大于 $\pi$ 时，后面的落后。

## 同相与反相

当 $\Delta φ = 2k\pi$ 时，两个物体同相。  
当 $\Delta φ = (2k+1)\pi$ 时，两个物体反相。

## 如何求力

用$\vec{F} = -k\vec{x} = -m\omega^2\vec{x}$，其中 $\vec{x} = A\cos(\omega t + φ)$，代入即可。

## 到某处的最短时间

假设从 $x_1$ 到 $x_2$，我们要这样做:
同时要找最短路径，然后
$$
\begin{aligned}
x_1 &= A\cos(\omega t_1 + φ_1) \\
x_2 &= A\cos(\omega t_1 + φ_2)
\end{aligned}
$$
求出 $t_1$、$t_2$，然后 $t_2 - t_1$ 即为最短时间。
