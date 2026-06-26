---
layout: page
title: Host Interns
permalink: /get-involved/host-interns/
section: Get Involved
section_url: /get-involved/
hero_label: Get Involved
summary: Learn what is involved in hosting a Yujin Gakuen classroom intern.
wide_content: true
status: partial
pending_title: Hosting details are still being confirmed
pending_intro: "Program coordinators will follow up with current requirements. This page still needs:"
pending_items:
  - A clear list of what host families provide
  - Matching steps and current school or district requirements
---

PTO support helps Yujin Gakuen welcome classroom interns from Japan during the school year. Host families make those programs possible and give interns a closer connection to daily life in the YG community.

<section class="intern-intro">
  <div>
    <span class="badge badge--sage">Applications accepted year-round</span>
    <h2>Interested in hosting an intern?</h2>
    <p>Families can apply anytime. Program coordinators follow up about current timing, matching, and expectations.</p>
  </div>
  <a class="button button--primary" href="{{ site.data.interns.application.url }}">{{ site.data.interns.application.label }}</a>
</section>

<section class="intern-program">
  <p class="intern-program__tag">Two short-term program cycles each year, plus one longer placement</p>
  <h2>Program at a glance</h2>
  <div class="intern-program__cards">
    {% for cycle in site.data.interns.cycles %}
      <article class="intern-cycle intern-cycle--{{ cycle.accent }}">
        <span class="intern-cycle__mark" aria-hidden="true"></span>
        <h3>{{ cycle.title }}</h3>
        <strong>{{ cycle.length }}</strong>
        <p>{{ cycle.timing }}</p>
      </article>
    {% endfor %}
  </div>
</section>

<section class="intern-apply">
  <div class="intern-apply__icon" aria-hidden="true">↗</div>
  <div>
    <h2>How to apply</h2>
    <p>Complete the Google Form application to get started. Sending the form starts the conversation; it does not invent a placement or skip the coordinator follow-up.</p>
    <a class="button button--primary" href="{{ site.data.links.intern_application.url }}">Open the host-family application</a>
  </div>
</section>

## Why hosting matters

Hosting helps interns experience everyday life in the YG community while supporting the classroom programs students know and love.
