---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

Discover our [alumni](/alumni/) or learn about the national selection tests for these Olympiads:
<ul>
{% for iso in site.iso %}
<h2>
    <a href="{{ iso.url }}">
      {{ iso.nst }} - {{ iso.title }}
    </a>
  </h2>
{% endfor %}
</ul>