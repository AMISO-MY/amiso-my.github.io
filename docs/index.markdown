---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
title: AMISO
---

# Register to our newsletter
Get updates about Olympiad registrations
<form accept-charset="UTF-8" action="https://script.google.com/macros/s/AKfycbxGQcp8JVv6k0mtTYg49iemtm7YVVnxX-aTiAREzyqjijgkI16KV7xRhgP6p1AI7bcr/exec" method="GET" target='_blank'>
  <input type="email" name="email" placeholder="Your Email">
  <button type="submit">Register</button>
</form>
<br>

# Olympiads and Alumni
Discover our [alumni](/alumni/) or learn about the national selection tests for these Olympiads:
<ul>
{% for iso in site.iso %}
<h2>
    <a href="{{ iso.url }}">
      {{ iso.title }} - {{ iso.nst }}
    </a>
  </h2>
{% endfor %}
</ul>