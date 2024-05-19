---
title: 简谐运动的合成
date: 2024-05-18 23:57:27
tags:
categories:
- 物理
- 简谐运动
---

## 同方向同频率合成

### 相位差为$2k\pi(k=0, \plusmn1, \plusmn2, \plusmn3, ……)$

我们可以这样计算振幅A：
$$
\begin{aligned}
A &= \sqrt{A_1^2 + A_2^2 + 2A_1A_2\cos\Delta\varphi} \\
&= \sqrt{A_1^2 + A_2^2 + 2A_1A_2} \\
&= \sqrt{(A_1 + A_2)^2} \\
&= A_1 + A_2 \\
\end{aligned}
$$

### 相位差为$(2k+1)\pi(k=0, \plusmn1, \plusmn2, \plusmn3, ……)$

我们可以这样计算振幅A：
$$
\begin{aligned}
A &= \sqrt{A_1^2 + A_2^2 + 2A_1A_2\cos\Delta\varphi} \\
&= \sqrt{A_1^2 + A_2^2 - 2A_1A_2} \\
&= \sqrt{(A_1 - A_2)^2} \\
&= | A_1 - A_2 | \\
\end{aligned}
$$

### 当相位差取任意值（不是$2k\pi$或$(2k+1)\pi$）时，合成振动的振幅在$A_1+A_2$和$|A_1 - A_2|$之间

合振幅的计算为：
$$
\begin{aligned}
A &= \sqrt{A_1^2 + A_2^2 + 2A_1A_2\cos\varphi} \\
\end{aligned}
$$
其中$\varphi$是两个振动的相位差。

## 关于φ的计算

### 相位差为$2k\pi(k=0, \plusmn1, \plusmn2, \plusmn3, ……)$

由于是同相，所以就是$x = x_1 + x_2$。
由此，我们可以得到：
$$
\begin{aligned}
x &= A_1\cos(\omega t + \varphi_1) + A_2\cos(\omega t + \varphi_2) \\
&= A_1\cos(\omega t)\cos(\varphi_1) - A_1\sin(\omega t)\sin(\varphi_1) + A_2\cos(\omega t)\cos(\varphi_2) - A_2\sin(\omega t)\sin(\varphi_2) \\
&= [A_1\cos(\varphi_1) + A_2\cos(\varphi_2)]\cos(\omega t) - [A_1\sin(\varphi_1) + A_2\sin(\varphi_2)]\sin(\omega t) \\
\end{aligned}
$$
