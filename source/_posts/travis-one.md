title: travis的知识-第一章
date: 2019-07-30
tags: [CI,Travis]
categories: [Travis]
---

## 一些无聊的话

对于每一个程序员或运维的人员来说**CI**是必不可少的。今天，我们要说的是**Travis CI**  
Travis CI是一个仅仅只支持GitHub的CI(仅仅支持GitHub的WebHook发来的构建信息)，但Deploy支持特别多的平台的网站

---

## 入坑

### 最开始要说的就是程序的语言

总之，你写的语言主要是什么就选什么

#### 例如hexo的博客语言是node js，那么如下所示

```yaml
language: node_js
```

---

#### 再例如，我比较擅长的程序语言是Python，那么如下所示

```yaml
language: node_js
```

---

### 程序语言的版本的选择

#### 例如：

```yaml
node_js:
- '10'
```
