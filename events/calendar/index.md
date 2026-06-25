---
layout: page
title: Calendar
permalink: /events/calendar/
section: Events
section_url: /events/
hero_label: Events
summary: Find YG events, PTO meetings, volunteer signups, and school-year traditions.
wide_content: true
---

<nav class="jump-nav" aria-label="Jump to calendar section">
  <span>Jump to:</span>
  <a href="#coming-up">Coming up soon</a>
  <a href="#summer-recess">Summer Recess</a>
  <a href="#uo-games">UO games</a>
  <a href="#school-year">School-year highlights</a>
  <a href="#meetings">Meetings</a>
  <a href="#appreciation">Appreciation</a>
</nav>

<section id="coming-up" class="calendar-group">
  <div class="section-heading">
    <p class="eyebrow">Next dates</p>
    <h2>Coming up soon</h2>
  </div>
  <div class="calendar-list">
    {% assign event = site.data.events | where: "id", "summer-recess-2026" | first %}
    {% include calendar-row.html event=event %}
    {% assign event = site.data.events | where: "id", "asian-celebration-2026" | first %}
    {% include calendar-row.html event=event %}
    {% assign event = site.data.events | where: "id", "obon-taiko-festival-2026" | first %}
    {% include calendar-row.html event=event %}
  </div>
</section>

{% assign summer = site.data.events | where: "id", "summer-recess-2026" | first %}
<section id="summer-recess" class="calendar-group">
  <div class="section-heading">
    <p class="eyebrow">Summer 2026</p>
    <h2>Summer Recess playground meetups</h2>
    <p>Grade groups refer to students' rising grades for the 2026-2027 school year. A parent, guardian, or responsible adult stays with each child.</p>
  </div>

  <div class="summer-groups">
    <section class="summer-group" aria-labelledby="july-meetups">
      <h3 id="july-meetups">July meetups</h3>
      <ul>
        {% for session in summer.sessions %}
          {% assign month = session.date | date: "%-m" %}
          {% if month == "7" %}
            <li>
              <time datetime="{{ session.date }}">{{ session.date | date: "%A, %B %-d, %Y" }}</time>
              <span>{{ session.time }}</span>
              <strong>{% if session.group == "K/1" %}Kindergarten and 1st Grade{% elsif session.group == "2/3" %}2nd and 3rd Grade{% elsif session.group == "4/5/6" %}4th, 5th, and 6th Grade{% endif %}</strong>
            </li>
          {% endif %}
        {% endfor %}
      </ul>
    </section>

    <section class="summer-group" aria-labelledby="august-meetups">
      <h3 id="august-meetups">August meetups</h3>
      <ul>
        {% for session in summer.sessions %}
          {% assign month = session.date | date: "%-m" %}
          {% if month == "8" and session.group != "Everyone" %}
            <li>
              <time datetime="{{ session.date }}">{{ session.date | date: "%A, %B %-d, %Y" }}</time>
              <span>{{ session.time }}</span>
              <strong>{% if session.group == "K/1" %}Kindergarten and 1st Grade{% elsif session.group == "2/3" %}2nd and 3rd Grade{% elsif session.group == "4/5/6" %}4th, 5th, and 6th Grade{% endif %}</strong>
            </li>
          {% endif %}
        {% endfor %}
      </ul>
    </section>

    <section class="summer-group summer-group--everyone" aria-labelledby="everyone-meetup">
      <p class="eyebrow">All YG families</p>
      <h3 id="everyone-meetup">Everyone meetup</h3>
      <p><strong>Saturday, August 22, 2026</strong></p>
      <p>2:00-4:00 PM</p>
      <p>Everyone at Emerald Park</p>
    </section>
  </div>
</section>

<section id="uo-games" class="calendar-group">
  <div class="section-heading">
    <h2>UO game volunteer opportunities</h2>
    <p>Every home game needs at least 21 OLCC-permitted adult volunteers.</p>
  </div>
  <div class="calendar-list">
    {% for event in site.data.events %}
      {% if event.calendar_section == "uo" %}
        {% include calendar-row.html event=event %}
      {% endif %}
    {% endfor %}
  </div>
  <p><a class="button button--secondary" href="{{ '/get-involved/uo-beverage-booth/' | relative_url }}">How the UO Beverage Booth works</a></p>
</section>

<section id="school-year" class="calendar-group">
  <div class="section-heading">
    <h2>School-year highlights</h2>
  </div>
  <div class="calendar-list">
    {% assign highlight_ids = "back-to-school-picnic-2026,school-choice-tour-2027,oshogatsu-2027,kodomo-no-hi-2027" | split: "," %}
    {% for event_id in highlight_ids %}
      {% assign event = site.data.events | where: "id", event_id | first %}
      {% include calendar-row.html event=event %}
    {% endfor %}
  </div>
</section>

<section id="meetings" class="calendar-group">
  <div class="section-heading">
    <h2>PTO meetings</h2>
    <p>General Assembly meetings are where PTO members ask questions, discuss proposals, and vote on organization-wide business.</p>
  </div>
  <div class="calendar-list">
    {% for event in site.data.events %}
      {% if event.calendar_section == "meetings" %}
        {% include calendar-row.html event=event %}
      {% endif %}
    {% endfor %}
  </div>
</section>

<section id="appreciation" class="calendar-group">
  <div class="section-heading">
    <h2>Appreciation weeks</h2>
    <p>Ways to participate will be added when each plan is ready.</p>
  </div>
  <div class="calendar-list">
    {% for event in site.data.events %}
      {% if event.calendar_section == "appreciation" %}
        {% include calendar-row.html event=event %}
      {% endif %}
    {% endfor %}
  </div>
</section>
