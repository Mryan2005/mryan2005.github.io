---
title: nao开发 行走
date: 2025-11-09 16:15:03
tags: [Nao, Choregraphe]
categories: [Choregraphe]
---

## 相关的指令盒

- Move To：让机器人移动到指定位置
- Move Toward：让机器人朝指定方向移动
- Walk Toward：让机器人走到指定位置
- Move Along：让机器人沿着指定路径移动

<!--more-->

## Move To 指令盒

![nao_move_to_box](/img/nao_move_to_box.png)

- Destination X (m)：目标位置的X坐标，单位为米
- Destination Y (m)：目标位置的Y坐标，单位为米
- Theta (deg)：目标位置的角度，单位为弧度
- Arms movement enabled：是否启用手臂运动，默认启用

> 私以为，你想要让机器人转弯，理论上，可以使 `Destination X` 为 `0.900000`，`Destination Y` 为 `0.000000`，`Theta` 为 `90` 度（即 `1.5708` 弧度）。

## Move Toward 指令盒

![nao_move_toward_box](/img/nao_move_toward_box.png)

- X (m/s)：机器人在X方向上的速度，单位为米每秒
- Y (m/s)：机器人在Y方向上的速度，单位为米每秒
- Theta (rad/s)：机器人旋转的角速度，单位为弧度每秒
- Period of direction update (s)：方向更新周期，单位为秒
- Arms movement enabled：是否启用手臂运动，默认启用

## Walk Toward 指令盒

![nao_walk_toward_box](/img/nao_walk_toward_box.png)

## Move Along 指令盒

![nao_move_along_box](/img/nao_move_along_box.png)