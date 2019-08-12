{% if is_post() %}
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
{% elseif page.comments %}
                <span class="post-meta-divider">|</span>
                <span class="post-meta-item-icon">
                  <i class="fa fa-edit"></i>
                </span>
                <span class="post-meta-item-text"><a href="https://github.com/Mryan2005/mryan2005.github.io/blob/src/source{{ url_for(page.source) }}">更改文章</a></span>
              {% endif %}
{% endif %}