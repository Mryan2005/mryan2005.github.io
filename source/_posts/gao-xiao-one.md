---
title: sir日常搞事(1) | 代码放错位置了 
date: 2019-08-12 21:29:39
tags: 日常搞事
categories: 日常搞事
---

今天，我这个糟老头子居然搞错了一个文件上的代码，正确的实现了什么叫“你这个糟老头子坏得很”————把一串代码写入了post.swig结果百测不灵。  
以下是那串代码  
这是第一次输错的  

```swig
{% elseif page.comments %}
    <span class="post-meta-divider">|</span>
    <span class="post-meta-item-icon">
        <i class="fa fa-edit"></i>
    </span>
    <span class="post-meta-item-text"><a href="https://github.com/Mryan2005/mryan2005.github.io/blob/src/source{{ url_for(page.source) }}">更改文章</a></span>
{% endif %}
```

后来，将它fix后，输入livere.swig。  
代码如下  

```swig
{% elseif page.comments %}
  {% if not (theme.duoshuo and theme.duoshuo.shortname) and not theme.duoshuo_shortname and not (theme.disqus.enable and theme.disqus.shortname) and not theme.hypercomments_id %}
    {% if page.comments and theme.livere_uid %}
      <script type="text/javascript">
        (function(d, s) {
          var j, e = d.getElementsByTagName(s)[0];
          if (typeof LivereTower === 'function') { return; }
          j = d.createElement(s);
          j.src = 'https://cdn-city.livere.com/js/embed.dist.js';
          j.async = true;
          e.parentNode.insertBefore(j, e);
        })(document, 'script');
      </script>
    {% endif %}
  {% endif %}
{% endif %}
```

不得不说，我是够坑了。把自己给坑了。