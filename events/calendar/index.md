---
layout: page
title: Events & Calendar
permalink: /events/calendar/
section: Events
section_url: /events/
hero_label: Events
summary: PTO meetings, school events, volunteer opportunities, and community celebrations.
wide_content: true
---

<div class="calendar-dashboard">
  <div class="calendar-dashboard__intro">
    <nav class="calendar-dashboard__jumps" aria-label="Jump to calendar section">
      <a href="#coming-up">Coming Up Soon</a>
      <a href="#summer-recess">Summer Recess</a>
      <a href="#uo-games">UO Games</a>
      <a href="#school-year">School-Year Highlights</a>
    </nav>
    <div class="calendar-dashboard__actions">
      <a class="button button--primary" href="{{ '/events/' | relative_url }}">Browse Event Pages</a>
      <a class="button button--secondary" href="{{ '/get-involved/volunteer/' | relative_url }}">Volunteer Signups</a>
    </div>
  </div>

  <section class="calendar-dashboard-panel calendar-coming-up" id="coming-up" aria-labelledby="coming-up-title">
    <div class="calendar-panel-heading">
      <div>
        <p class="eyebrow">Next dates</p>
        <h2 id="coming-up-title">Coming Up Soon</h2>
      </div>
    </div>
    <div class="calendar-feature-grid">
      {% for item in site.data.calendar.featured %}
        {% include calendar-feature-card.html item=item %}
      {% endfor %}
    </div>
  </section>

  <div class="calendar-dashboard__middle">
    {% include calendar-summer-card.html %}

    <section class="calendar-dashboard-panel calendar-uo" id="uo-games" aria-labelledby="uo-games-title">
      <div class="calendar-panel-heading">
        <div>
          <p class="eyebrow">Volunteer fundraiser</p>
          <h2 id="uo-games-title">UO Games Volunteer Opportunities</h2>
          <p>Every home game needs at least 21 OLCC-permitted adult volunteers.</p>
        </div>
        <span class="calendar-panel-heading__art calendar-panel-heading__art--hanacon" aria-hidden="true">
          <img src="{{ '/assets/images/hanacons/new/green/volunteer-green184.png' | relative_url }}" alt="" loading="lazy">
        </span>
      </div>
      <ul class="calendar-uo-list">
        {% for event_id in site.data.calendar.uo_games %}
          {% include calendar-uo-row.html event_id=event_id %}
        {% endfor %}
      </ul>
      <a class="calendar-panel-link" href="{{ '/get-involved/uo-beverage-booth/' | relative_url }}">How the UO Beverage Booth works</a>
    </section>
  </div>

  <section class="calendar-dashboard-panel calendar-highlights" id="school-year" aria-labelledby="school-year-title">
    <div class="calendar-panel-heading">
      <div>
        <p class="eyebrow">2026-2027</p>
        <h2 id="school-year-title">School-Year Highlights</h2>
      </div>
      <span class="calendar-panel-heading__art calendar-panel-heading__art--school">{% include calendar-icon.html icon="school" %}</span>
    </div>
    <div class="calendar-highlight-groups">
      {% for group in site.data.calendar.highlights %}
        <section class="calendar-highlight-group calendar-highlight-group--{{ group.tone }}">
          <h3>{{ group.title }}</h3>
          <ul>
            {% for event_id in group.events %}
              {% include calendar-highlight-row.html event_id=event_id %}
            {% endfor %}
          </ul>
        </section>
      {% endfor %}
    </div>
  </section>
</div>
