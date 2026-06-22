---
layout: page
title: Sitemap
permalink: /sitemap/
hero_label: Sitemap
summary: A complete list of site sections and pages, generated from the same navigation structure used across the website.
---

{% for item in site.data.navigation %}
- [{{ item.title }}]({{ item.url | relative_url }})
{% if item.children %}
{% for child in item.children %}
  - [{{ child.title }}]({{ child.url | relative_url }})
{% endfor %}
{% endif %}
{% endfor %}
