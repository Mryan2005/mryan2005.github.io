---
title: uni-app-muti-platform
date: 2025-09-04 08:00:22
tags: [uni-app, 前端, 移动端, 跨平台]
categories: uni-app
---

## 概述

在uni-app中，支持以下的平台：

| 平台名称       | 备注                                                         |
|--------------|------------------------------------------------------------|
| `APP-ANDROID` | Android |
| `APP-IOS`     | iOS                                                       |
| `APP-APP-HARMONY` | 鸿蒙 |
| `WEB` | 网页 |
| `MP-WEIXIN`   | 微信小程序                                                   |

## `#ifdef` 条件编译

在脚本、样式、模板中，可以使用 `#ifdef` 和 `#ifndef` 来进行条件编译。

```vue
<template>
    #ifdef MP-WEIXIN
    <view>微信小程序</view>
    #endif
    #ifdef APP-ANDROID
    <view>APP</view>
    #endif
    #ifndef APP-IOS
    <view>IOS</view>
    #endif
    #ifndef APP-APP-HARMONY
    <view>鸿蒙</view>
    #endif
    #ifndef WEB
    <view>网页</view>
    #endif
</template>
```

> 未声明的情况下，默认选择：APP-ANDROID
