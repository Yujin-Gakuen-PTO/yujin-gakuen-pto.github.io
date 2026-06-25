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
{% assign current_month = site.time | date: "%-m" | plus: 0 %}
{% for child in item.children %}
{% assign show_child = true %}
{% if child.seasonal == "elections" %}
{% if current_month < 3 or current_month > 5 %}
{% assign show_child = false %}
{% endif %}
{% endif %}
{% if show_child %}
  - [{{ child.title }}]({{ child.url | relative_url }})
{% endif %}
{% endfor %}
{% endif %}
{% endfor %}
