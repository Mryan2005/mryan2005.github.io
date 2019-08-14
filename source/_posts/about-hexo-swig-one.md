---
title: 'swig资料 | 关于swig在hexo中的判断'
date: 2019-08-11 22:58:29
tags: [swig,hexo]
categories: Hexo
---

## 函数判断

```swig
{% if ····() %}
{% endif %}
```

····() 为有return true/false的函数

### 例(1)

```swig
{% if is_post() %}
    <p>如果返回true，那么就显示这个段落</p>
{% endif %}
```

### 例(2)

```swig
{% if is_post() %}
  <span class="post-meta-divider">|</span>
  <span class="post-meta-item-icon">
    <i class="fa fa-edit"></i>
  </span>
  <span class="post-meta-item-text">
    <a rel="nofollow" href="https://github.com/Mryan2005/mryan2005.github.io/blob/src/source{{url_for(page.source)}}">更改文章</a>
  </span>
{% endif %}
```

_**如果没猜错的话这就是我的博客的文章更改传送门**_

## 变量判断

### 第一种

```swig
{% if x === '' %}
{% endif %}
```

### 第二种

```swig
{% if '' in x %}
{% endif %}
```
