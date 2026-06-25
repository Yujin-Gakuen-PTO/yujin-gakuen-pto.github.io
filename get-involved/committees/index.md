---
layout: page
title: Join a Committee
permalink: /get-involved/committees/
section: Get Involved
section_url: /get-involved/
hero_label: Get Involved
summary: Join a planning group for a PTO event, responsibility, or short-term project.
status: published
wide_content: true
---

<section class="recruitment-hero">
  <div>
    <span class="badge badge--gold">Recruiting next</span>
    <h2>Help build お正月 (Oshogatsu)</h2>
    <p>The Oshogatsu Committee will be introduced at the first PTO meeting on September 17, 2026. Interested PTO members may ask about a role now, and the PTO is happy to record early interest before formal recruitment begins.</p>
  </div>
  <a class="button button--primary" href="mailto:info@yujingakuenpto.com?subject=Oshogatsu%20Committee%20interest">Ask about an Oshogatsu role</a>
</section>

<div class="role-list" aria-labelledby="oshogatsu-roles-title">
  <h2 id="oshogatsu-roles-title">Oshogatsu planning roles</h2>
  <ul>
    {% for role in site.data.committees[0].roles %}
      <li>{{ role }}</li>
    {% endfor %}
  </ul>
</div>

## Other PTO committees

Committee members help plan and coordinate work over time. Event-day shifts, setup, cleanup, and other one-time jobs are volunteering rather than committee service.

{% include committee-grid.html %}

## Tell us what interests you

Email the PTO with the committee or kind of work that interests you. It is fine to ask questions before committing.

<p><a class="button button--primary" href="{{ site.data.links.contact.url }}">Ask about committee work</a></p>

## Day-of event help

UO Beverage Booth work and day-of event prep are also important roles. Volunteer signups are posted when each event team confirms what help is needed.

<p><a class="button button--secondary" href="{{ '/get-involved/volunteer/' | relative_url }}">See current volunteer opportunities</a></p>
