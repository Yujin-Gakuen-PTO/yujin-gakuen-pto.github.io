---
layout: page
title: Sitemap
permalink: /sitemap/
hero_label: Sitemap
summary: Browse every section and page on the Yujin Gakuen PTO website.
---

{% for item in site.data.navigation %}
- [{{ item.title }}]({{ item.url | relative_url }})
{% if item.children %}
{% for child in item.children %}
  - [{{ child.title }}]({{ child.url | relative_url }})
{% endfor %}
{% endif %}
{% endfor %}
