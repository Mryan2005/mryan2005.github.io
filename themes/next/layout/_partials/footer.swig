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
    <i class="fa fa-server"></i>
  </span>
  <span><a href="https://stats.mryan.cf ">服务器状态<a></span>
  |
  <span class="with-love">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" class="icon"><path class="st0" d="M11.553 11.153c0 .663.589 1.216 1.289 1.105.442-.074.811-.442.884-.884.111-.553-.221-1.032-.663-1.216-.258-.111-.405-.368-.405-.663v-3.26M.868 5.867C.647 5.867.5 4.117.5 4.117c0-.221.147-.442.332-.479l2.616-.958h3.193l7.491 1.032c.221.036.368.22.368.404 0 0-.184 1.75-.368 1.75L.868 5.867zm5.767 8.602V1.206c0-.221-1.161-.405-1.345-.442L3.816.506c-.184-.037-.369.11-.369.294v13.632h2.211l.977.037zm2.21 0H1.237h7.608z"></path></svg>
  </span>
  <span><a href="https://stats.mryan.cf ">build<a></span>

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
  #}{{ __('footer.powered', '<a class="theme-link" target="_blank" href="https://hexo.io">Hexo</a>') }}{#
#}</div>
{% endif %}

{% if theme.footer.powered and theme.footer.theme.enable %}
  <span class="post-meta-divider">|</span>
{% endif %}

{% if theme.footer.theme.enable %}
  <div class="theme-info">{#
  #}{{ __('footer.theme') }} &mdash; {#
  #}<a class="theme-link" target="_blank" href="https://github.com/iissnan/hexo-theme-next">{#
    #}NexT.{{ theme.scheme }}{#
  #}</a>{% if theme.footer.theme.version %} v{{ theme.version }}{% endif %}{#
#}</div>
{% endif %}

{% if theme.footer.custom_text %}
  <div class="footer-custom">{#
  #}{{ theme.footer.custom_text }}{#
#}</div>
{% endif %}
