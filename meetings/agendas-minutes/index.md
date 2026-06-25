---
layout: page
title: Agendas & Minutes
permalink: /meetings/agendas-minutes/
section: Meetings
section_url: /meetings/
hero_label: Meetings
summary: Find PTO meeting agendas and approved minutes.
status: partial
pending_title: The public meeting archive is still being assembled
pending_intro: "The PTO still needs publication approval and separate public files for:"
pending_items:
  - Current and past meeting agendas
  - Formally approved meeting minutes
  - A consistent archive order and storage location
---

Meeting records will be organized by date and document type. Agendas may be posted before a meeting, while minutes will appear only after they are formally approved.

Draft minutes are not published.

## Public meeting files

{% if site.data.meeting_materials.size > 0 %}
  {% include document-list.html items=site.data.meeting_materials label="Meeting record" %}
{% else %}
  <p class="empty-note">No approved meeting files have been added to the public archive yet.</p>
{% endif %}

For the next confirmed meeting dates, visit [Upcoming Meetings]({{ '/meetings/upcoming/' | relative_url }}).
