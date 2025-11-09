---
title: nao开发 命令盒子的基本操作
date: 2025-11-08 22:48:57
tags: [Nao, Choregraphe]
categories: [Choregraphe]
---

## 一些没用的概念

**指令盒是定义机器人应用、实现一系列动作(流程)的基本构成元素**。

指令盒库中直接可以使用的指令盒包括“Say(说话)“这样简单功能的指令盒,也有AI属性能够人脸识别复杂功能的指令盒。

在Choregraphe 编程中,不仅可以使用指令盒库中预先准备的标准功能指令盒,也可以使用自己定义的指令盒。

<!--more-->

## 指令盒的构成要素（重点）

![nao_commandbox_structure](/img/nao_commandbox_structure.png)

![nao_commandbox_structure_single](/img/nao_commandbox_structure_single.png)

***

## 参考内容

1. 软银机器人中国的 [02课 指令盒的基本操作](https://www.bilibili.com/video/BV1eg411u7Aj/?spm_id_from=333.1007.top_right_bar_window_history.content.click&vd_source=376d18e5cd56f0f6d656311763c5e9b8)

## 指令盒的执行顺序

1. 串联处理：将指令盒一个一个按顺序处理，例如移动结束后说话
2. 并联处理：将指令盒进行并联处理，例如一边移动一边说话
3. 同时处理：指令盒的连接器可以连接多条线，例如在说话的同时，停止听的状态
4. 条件分支处理：根据条件分支来决定执行哪个指令盒，例如识别到人脸后说“你好”，否则说“请靠近我”
5. 循环处理：将指令盒进行循环处理，例如重复说话三次

