---
title: hello Golang
date: 2025-09-15 10:57:26
tags: [golang]
categories: golang
---

## Hello, Golang World!

在每一个语言开始的时候，总会有一个仪式——Hello, World! 让我们在 Go 语言中实现这个经典的例子。

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
```

## 程序架构

- Go 程序由包（package）组成，`main` 包是程序的入口点。每个 Go 文件都以 `package` 关键字开头，表示该文件属于哪个包。
- `import` 语句用于引入其他包，这里我们引入了 `fmt` 包来进行格式化输出。
- `func main()` 是程序的主函数，程序从这里开始执行。
- `fmt.Println` 用于打印输出到控制台。

## 运行 Go 代码

要执行 Go 语言代码可以使用 go run 命令。

```bash
go run hello.go
```

这将编译并运行 `hello.go` 文件中的代码。

还可以使用 go build 命令来生成二进制文件：

```bash
go build hello.go
```

这会生成一个名为 `hello`（在 Windows 上是 `hello.exe`）的可执行文件。运行它：

```bash
./hello
```
