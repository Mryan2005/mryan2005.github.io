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

## `#ifdef`、`#ifndef` 条件编译

在实现多平台兼容的时候可以使用 `#ifdef` 和 `#ifndef` 来进行条件编译。

`#ifdef`：如果满足条件，则编译该部分代码。

`#ifndef`：如果不满足条件，则编译该部分代码。

### 模版

```vue
<template>
    <!-- #ifdef MP-WEIXIN -->
    <view>微信小程序</view>
    <!-- #endif -->
    <!-- #ifdef APP-ANDROID -->
    <view>APP</view>
    <!-- #endif -->
    <!-- #ifndef APP-IOS -->
    <view>IOS</view>
    <!-- #endif -->
    <!-- #ifndef APP-APP-HARMONY -->
    <view>鸿蒙</view>
    <!-- #endif -->
    <!-- #ifndef WEB -->
    <view>网页</view>
    <!-- #endif -->
</template>
```

### 脚本

```vue
<script>
export default {
    data() {
        return {
            }
        },
    methods: {
        // #ifdef WEB
        test() {
            alert("hello")
        }
        // #endif
    }
};
</script>
```

基本上都是直接在注释当中，`#ifdef` 或 `#ifndef`，后面跟平台名称起头，`#endif` 结尾。

> 未声明的情况下，默认选择：APP-ANDROID

### 可使用的文件类型

1. ts
2. uts
3. vue
4. uvue
5. css
6. pages.json

***

## 参考资料

1. [uni-app-x 多平台代码提示和语法校验 - HBuilderX 文档](https://hx.dcloud.net.cn/Tutorial/Language/language_service_target_support?id=%E6%9D%A1%E4%BB%B6%E7%BC%96%E8%AF%91%E4%BB%A3%E7%A0%81%E5%9D%97%E7%BD%AE%E7%81%B0)