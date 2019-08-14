<div class="copyright">{#
#}{% set current = date(Date.now(), "YYYY") %}{#
#}&copy; {% if theme.footer.since and theme.footer.since != current %}{{ theme.footer.since }} &mdash; {% endif %}{#
#}<span itemprop="copyrightYear">{{ current }}</span>
  <span class="with-love">
    <i class="fa fa-{{ theme.footer.icon }}"></i>
  </span>
  <span class="author" itemprop="copyrightHolder">{{ theme.footer.copyright || config.author }}</span>
  |
  <span class="with-love">
    <i class="fa fa-cubes"></i>
  </span>
  <span><a rel="nofollow" href="https://www.travis-ci.com/Mryan2005/mryan2005.github.io">build</a></span>
  ｜
  <span class="with-love">
    <i class="fa fa-code"></i>
  </span>
  <span><a rel="nofollow" href="https://github.com/Mryan2005/mryan2005.github.io/tree/src">source code</a></span>
  |
  <span class="with-love">
    <i class="fa fa-browser"></i>
  </span>
  <span><a href="https://mryan05.coding.me">中国站</a></span>
  <span><a href="https://mryan2005.github.io">全球站</a></span>
  <br />
  |
  <span class="with-love">
    <img class="fa" src="http://tongji.baidu.com/sc-web/image/icon/11.gif?__v=1564551472149"
  </span>
  <span><a rel="nofollow" href="http://tongji.baidu.com/web/welcome/ico?s=01d7af6f06ec1d8f776e6dfde8d0a7f8">百度统计</a></span>
  |
  本作品采用<a rel="license" rel="nofollow"  href="http://creativecommons.org/licenses/by/4.0/">知识共享署名 4.0 国际许可协议</a>进行许可。
  {% if theme.post_wordcount.totalcount %}
    <span class="post-meta-divider">|</span>
    <span class="post-meta-item-icon">
      <i class="fa fa-area-chart"></i>
    </span>
    {% if theme.post_wordcount.item_text %}
      <span class="post-meta-item-text">{{ __('post.totalcount') }}&#58;</span>
    {% endif %}
    <span title="{{ __('post.totalcount') }}">{#
    #}{{ totalcount(site, '0,0.0a') }}{#
  #}</span>
  {% endif %}
</div>

{% if theme.footer.powered %}
  <div class="powered-by">{#
  #}{{ __('footer.powered', '<a rel="nofollow" class="theme-link" target="_blank" href="https://hexo.io">Hexo</a>') }}{#
#}</div>
{% endif %}

{% if theme.footer.powered and theme.footer.theme.enable %}
  <span class="post-meta-divider">|</span>
{% endif %}

{% if theme.footer.theme.enable %}
  <div class="theme-info">{#
  #}{{ __('footer.theme') }} &mdash; {#
  #}<a rel="nofollow" class="theme-link" target="_blank" href="https://github.com/iissnan/hexo-theme-next">{#
    #}NexT.{{ theme.scheme }}{#
  #}</a>{% if theme.footer.theme.version %} v{{ theme.version }}{% endif %}{#
#}</div>
{% endif %}

{% if theme.footer.custom_text %}
  <div class="footer-custom">{#
  #}{{ theme.footer.custom_text }}{#
#}</div>
{% endif %}