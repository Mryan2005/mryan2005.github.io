---
title: Golong 的变量和他们的类型
date: 2025-09-15 12:16:45
tags: [Golong, 变量, 类型]
categories: Golong
---

## 变量

有三种变量声明办法：

1. `var` 关键字声明变量

    ```go
    var a int = 10
    var b = 20 // 自动推导类型
    var c, d int = 30, 40 // 多变量声明
    var e, f = 50, "hello" // 多变量自动推导类型
    ```

2. `:=` 短变量声明（只能在函数体内使用）

    ```go
    a := 10
    b, c := 20, "hello"
    ```

3. `const` 关键字声明常量

    ```go
    const Pi = 3.14
    const (
        e = 2.718
        f = "hello"
    )
    ```

## 基本数据类型

Golang 有以下基本数据类型：
- 布尔型：`bool`，取值为 `true` 或 `false`
- 整型：`int`, `int8`, `int16`, `int32`, `int64`（有符号整数），`uint`, `uint8`, `uint16`, `uint32`, `uint64`（无符号整数）
- 浮点型：`float32`, `float64`
- 复数型：`complex64`, `complex128`
- 字符型：`rune`（表示一个 Unicode 码点）
- 字符串型：`string`
- 字节型：`byte`（实际上是 `uint8` 的别名）
