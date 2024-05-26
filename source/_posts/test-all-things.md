---
title: test_all_things
tags:
  - test
categories:
  - test example
abbrlink: 90341f05
date: 2024-05-11 20:06:44
---

## mathjax test

### INLINE EQUATIONS

$y = mx + b$

### MULTI-LINE EQUATIONS

$$ evidence_{i}=\sum_{j}W_{ij}x_{j}+b_{i} $$

## code test

```python
def test():
    print("test")
```

## mindmap

{% markmap %}
- C
  - input and output
    - scanf
    - printf
  - control flow
    - if
    - else
    - switch
  - loop
    - for
    - while
    - do while
  - function
    - declaration
    - definition
    - call
  - value
    - int
    - float
    - char
    - double
    - string
    - array
    - pointer
    - struct
    - union
    - enum
    - typedef
    - const
  - stdlib
    - malloc
    - free
    - exit
    - qsort
    - bsearch
    - rand
    - srand
  - string
    - strlen
    - strcpy
    - strncpy
    - strcat
    - strncat
    - strcmp
    - strncmp
    - strchr
    - strrchr
    - strstr
    - strtok
    - sprintf
    - sscanf
  - stdio
    - fopen
    - fclose
    - fread
    - fwrite
    - fseek
    - ftell
    - fprintf
    - fscanf
    - printf
    - scanf
    - getchar
    - putchar
    - gets
    - puts
{% endmarkmap %}

## Terminal Test

```
{% gdemo_terminal command [最小高度] [窗口标题] [延迟时间] [提示字符] [唯一id] [高亮语言] %}
content
{% endgdemo_terminal %}
```

用`;`隔开代码，可以执行多条命令

{% gdemo_terminal 'cd /usr/bin;./node ./demo' '250px' 'bash' '500' '$' 'demo-teriminal' %}
Hello World!
{% endgdemo_terminal %}

{% gdemo_terminal 'node ./demo' '250px' 'bash' '500' '$' 'demo-teriminal' %}
Hello World!
{% endgdemo_terminal %}
