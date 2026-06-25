---
layout: page
title: Agendas & Minutes
permalink: /meetings/agendas-minutes/
section: Meetings
section_url: /meetings/
hero_label: Meetings
summary: Find current-school-year agendas and formally approved PTO minutes.
status: partial
pending_title: Current-year files are still being added
pending_intro: "This archive will expand as public files are prepared. It still needs:"
pending_items:
  - Separate public agenda files for current-year meetings
  - Formally approved minute files for current-year meetings
---

Agendas may be posted before a meeting. Minutes are published only after formal approval; draft minutes remain internal.

## Current school year

{% if site.data.meeting_materials.size > 0 %}
  {% include document-list.html items=site.data.meeting_materials label="Meeting record" %}
{% else %}
  <p class="empty-note">No current-school-year files have been added to this archive yet.</p>
{% endif %}

## Older records

Older agendas and minutes may be reviewed in person or requested from the PTO.

<p><a class="button button--secondary" href="mailto:info@yujingakuenpto.com?subject=Older%20PTO%20meeting%20record%20request">Request an older meeting record</a></p>
