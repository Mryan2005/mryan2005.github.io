---
title: 矩阵的特征值
tags:
  - 向量
  - 矩阵
categories:
  - 线性代数
  - 矩阵
abbrlink: 816f0c9a
date: 2024-05-25 14:42:07
---

## 特征多项式

特征多项式是指$f(\lambda) = |A - λE|$。
依然，还是上面的例子，特征多项式是$(λ-4)(λ+2)$

## 特征方程

特征方程是指$|A - λE| = 0$  
还是上面的例子，特征方程是$λ^2 - 2λ - 8 = 0$

## 特征值

n阶方阵A的特征值是指数λ，使得线性方程组$(A - λE)x = 0$有非零解。特征值λ是方程$|A - λE| = 0$的根。  
E是单位矩阵，即$E = \begin{bmatrix} 1 & 0 & 0 & \cdots & 0 \\ 0 & 1 & 0 & \cdots & 0 \\ 0 & 0 & 1 & \cdots & 0 \\ \vdots & \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & 0 & \cdots & 1 \end{bmatrix}$

### 例题

我们先来个简单点的——2阶方阵。（例1）  
求矩阵$\begin{bmatrix} 3 & 1 \\ 5 & -1 \end{bmatrix}$的特征值。  
解：  
$|A - λE| = \begin{vmatrix} 3-λ & 1 \\ 5 & -1-λ \end{vmatrix} = (3-λ)(-1-λ) - 5 = λ^2 - 2λ - 8 = 0$  
解得λ = 4, -2
现在，我们抬升难度——3阶方阵（例2）
求矩阵$\begin{bmatrix} -2 & 1 & 1 \\ 0 & 2 & 0 \\ -4 & 1 & 3 \end{bmatrix}$的特征值。
解：
$|\lambda E - A| = \begin{vmatrix} \lambda + 2 & -1 & -1 \\ 0 & \lambda - 2 & 0 \\ 4 & -1 & \lambda - 3 \end{vmatrix} = (\lambda + 1)(\lambda - 2)(\lambda - 2) = 0$
解得λ = -1, 2, 2

### 总结

由此，我们可以知道，求特征值的步骤是：

1. 求特征方程
2. 解特征方程
3. 得到特征值

## 特征向量

依旧是上面的（例1），当λ = 4时，对应的特征向量应该满足$(A - 4E)x = 0$，即$\left\{\begin{matrix}
-5x_1 + x_2 &= 0 \\
5x_1 - 5x_2 &= 0
\end{matrix}
\right.
$，解得$x_1 = x_2$，所以特征向量是$p_1 = \begin{bmatrix} 1 \\ 1 \end{bmatrix}$，而$kp_1$ （k为非零常数）也就是对应于$\lambda_1 = 4$的全部特征向量。

当λ = -2时，对应的特征向量应该满足$(A + 2E)x = 0$，即$\left\{\begin{matrix}
-5x_1  -x_2 &= 0 \\
-5x_1 - x_2 &= 0
\end{matrix}
\right.
$，解得$x_1 = -x_2$，所以特征向量是$p_2 = \begin{bmatrix} 1 \\ -5 \end{bmatrix}$，而$kp_2$（k为非零常数）也就是对应于$\lambda_2 = -2$的全部特征向量。

而（例2），我们知道特征值是-1, 2, 2。
当λ = -1时，对应的特征向量应该满足$(A + E)x = 0$，可以得到基础解系为$\begin{bmatrix} 1 \\ 0 \\ 1 \end{bmatrix}$，所以特征向量是$p_1 = \begin{bmatrix} 1 \\ 0 \\ 1 \end{bmatrix}$，而$kp_1$（k为非零常数）也就是对应于$\lambda_1 = -1$的全部特征向量。

当λ = 2时，对应的特征向量应该满足$(A - 2E)x = 0$，即$2E-A=\begin{bmatrix}
4 & -1 & -1 \\ 0 & 0 & 0 \\ 4 & -1 & -1
\end{bmatrix} \rightarrow \begin{bmatrix} 1 & -\frac{1}{4} & -\frac{1}{4} \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{bmatrix}$，可以得到基础解系为$p_2 = \begin{bmatrix} 1 \\ 4 \\ 0 \end{bmatrix}, p_3 = \begin{bmatrix} 1 \\ 0 \\ 4 \end{bmatrix}$，所以$\lambda = 2的全体特征向量为k_2p_2 + k_3p_3$ （$k_2, k_3$不同时为0）。

## 性质

1. n阶矩阵A与它的转置矩阵$A^T$有相同的特征值。
2. 设$A=(a_{ij})$是n阶矩阵，则$f(\lambda) = |\lambda E - A| = \lambda^n - \sum_{i=1}^{n}a_{ii}\lambda^{n-1} + …… + (-1)^kS_k\lambda^{n-k} + …… + (-1)^n|A|$，其中$S_k$是A的k阶主子式。
k阶主子式 = $|A_k| = \begin{vmatrix} a_{11} & a_{12} & \cdots & a_{1k} \\ a_{21} & a_{22} & \cdots & a_{2k} \\ \vdots & \vdots & \ddots & \vdots \\ a_{k1} & a_{k2} & \cdots & a_{kk} \end{vmatrix}$  
由上可知，$\lambda_1 + \lambda_2 + …… + \lambda_n = a_{11} + a_{22} + …… + a_{nn}$  
$\lambda_1\lambda_2……\lambda_n = |A|$，其中，A的全体特征值的和等于A的主对角线元素之和，称为A的迹。  
至于迹的用处，看下面例题吧
设$A = \begin{bmatrix} 5 & -18 \\ 1 & -1 \end{bmatrix}$，则有$det(A) = -5 + 18 = 13$，$tr(A) = 5 - 1 = 4$。  
而多项式就是$f(\lambda) = \lambda^2 - 4\lambda + 13$。
