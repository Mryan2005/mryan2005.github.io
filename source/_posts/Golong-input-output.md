---
title: Golong的输入输出
date: 2025-09-15 11:04:34
tags: [golang, input, output]
categories: golang
---

## Golang的输出

在 C++ 里面，对于输出我们使用 `cout`，在 Python 里面我们使用 `print`，在 Java 里面我们使用 `System.out.println`。在 Go 语言中，我们使用 `fmt` 包来进行输出。

```go
fmt.Println("Hello, World!")
```

println 是 Print Line 的缩写，表示打印一行内容。

我们也可以通过 `fmt.Printf` 来进行格式化输出：

```go
name := "Alice"
age := 30
fmt.Printf("Name: %s, Age: %d\n", name, age)
```

如果不想换行输出，可以使用 `fmt.Print`：

```go
fmt.Print("Hello, ")
fmt.Print("World!")
```

## Golang的输入

在 Go 语言中，我们可以使用 `fmt.Scan`、`fmt.Scanf` 和 `fmt.Scanln` 来进行输入。

```go
var name string
var age int
fmt.Print("Enter your name: ")
fmt.Scan(&name)
fmt.Print("Enter your age: ")
fmt.Scan(&age)
fmt.Printf("Name: %s, Age: %d\n", name, age)
```

`fmt.Scan` 会从标准输入中读取数据，并将其存储在传入的变量中。注意变量前需要加上 `&` 符号，表示传入的是变量的地址。

`fmt.Scanf` 允许我们指定输入的格式：

```go
var name string
var age int
fmt.Print("Enter your name and age (e.g., Alice 30): ")
fmt.Scanf("%s %d", &name, &age)
fmt.Printf("Name: %s, Age: %d\n", name, age)
```

`fmt.Scanln` 会读取一行输入，直到遇到换行符：

```go
var name string
fmt.Print("Enter your name: ")
fmt.Scanln(&name)
fmt.Printf("Hello, %s!\n", name)
```

通过这些基本的输入输出方法，我们可以轻松地与用户进行交互，获取输入并显示结果。

这与其他编程语言的输入输出方式有些类似，有类似于 C 的 `printf` 和 `scanf` 的输入输出方式，有类似于 Python 的 `print` 函数，也有类似于 Java 的 `System.out.println` 方法。

对于`fmt`包内的输入输出，每个方法的开头要大写，这点与其他语言的习惯不同。

或许是因为 Go 语言中大写开头的方法表示是公开的，可以被其他包调用，而小写开头的方法则是私有的，只能在当前包内使用。