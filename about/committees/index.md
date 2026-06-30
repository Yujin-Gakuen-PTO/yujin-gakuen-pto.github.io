---
layout: page
title: Committees
permalink: /about/committees/
section: About
section_url: /about/
hero_label: About
summary: Learn about PTO committees, seasonal projects, and the work volunteers coordinate.
status: published
wide_content: true
---

<style>
  .committees-directory {
    display: grid;
    gap: clamp(0.95rem, 2.2vw, 1.45rem);
  }

  .committees-helper {
    display: grid;
    gap: 0.35rem;
    max-width: 34rem;
    align-items: center;
    border: 1px solid var(--color-border-soft);
    border-left: 4px solid var(--color-gold);
    border-radius: var(--radius);
    background: var(--color-surface-soft);
    padding: 0.75rem 0.9rem;
  }

  .committees-helper h2,
  .committee-feature h2,
  .committee-feature h3,
  .committee-card-link h3 {
    margin: 0;
    color: var(--color-primary-hover);
    font-family: var(--font-heading);
    line-height: 1.18;
  }

  .committees-helper h2 {
    font-size: 1.05rem;
  }

  .committees-helper p,
  .committee-feature p,
  .committee-feature li,
  .committee-card-link p {
    margin: 0.28rem 0 0;
    color: #374842;
  }

  .committee-feature {
    display: grid;
    grid-template-columns: minmax(0, 1.2fr) minmax(250px, 0.8fr);
    gap: clamp(1rem, 3vw, 2rem);
    align-items: start;
    border: 1px solid rgba(49, 92, 69, 0.16);
    border-radius: var(--radius);
    background:
      linear-gradient(135deg, rgba(238, 243, 231, 0.88), rgba(255, 255, 255, 0.9)),
      url("{{ '/assets/images/backgrounds/right-side-bamboo-green.png' | relative_url }}") right 0.8rem bottom 0.6rem / 110px auto no-repeat,
      radial-gradient(circle at 8% 16%, rgba(216, 168, 70, 0.12), transparent 25%),
      var(--color-surface);
    padding: clamp(0.95rem, 2.4vw, 1.3rem);
  }

  .committee-feature__label {
    display: inline-flex;
    width: fit-content;
    margin-bottom: 0.45rem;
    border-radius: 999px;
    background: rgba(49, 92, 69, 0.12);
    color: var(--color-primary);
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    padding: 0.22rem 0.58rem;
    text-transform: uppercase;
  }

  .committee-feature__tagline {
    color: var(--color-primary);
    font-weight: 700;
  }

  .committee-feature__details {
    display: grid;
    gap: 0.75rem;
    margin: 0;
  }

  .committee-feature__details div {
    display: grid;
    gap: 0.12rem;
  }

  .committee-feature__details dt {
    color: var(--color-secondary);
    font-size: 0.74rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  .committee-feature__details dd {
    margin: 0;
    color: var(--color-muted);
  }

  .committee-feature__needs {
    display: grid;
    gap: 0.45rem;
    margin: 0.8rem 0 0;
    padding: 0;
    list-style: none;
  }

  .committee-feature__needs li {
    display: grid;
    grid-template-columns: 0.9rem 1fr;
    gap: 0.45rem;
    align-items: start;
  }

  .committee-feature__needs li::before {
    content: "";
    width: 0.45rem;
    aspect-ratio: 1;
    margin-top: 0.5rem;
    border: 1.5px solid var(--color-primary);
    border-radius: 999px;
  }

  .committee-feature__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
    margin-top: 1rem;
  }

  .committee-card-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1rem;
  }

  .committee-card-link {
    --committee-accent: var(--color-primary);
    display: grid;
    min-width: 0;
    align-content: start;
    gap: 0.55rem;
    min-height: 100%;
    border: 1px solid var(--color-border-soft);
    border-top: 4px solid var(--committee-accent);
    border-radius: var(--radius);
    background: var(--color-surface);
    box-shadow: var(--shadow-soft);
    color: var(--color-ink);
    padding: 0.85rem;
    text-decoration: none;
  }

  .committee-card-link:hover {
    border-color: rgba(122, 78, 45, 0.36);
    box-shadow: var(--shadow-hover);
    color: var(--color-ink);
    transform: translateY(-1px);
  }

  .committee-card-link[data-accent="red"] {
    --committee-accent: var(--color-accent);
  }

  .committee-card-link[data-accent="gold"] {
    --committee-accent: #c57d12;
  }

  .committee-card-link[data-accent="blue"] {
    --committee-accent: #365d80;
  }

  .committee-card-link[data-accent="green"] {
    --committee-accent: var(--color-primary);
  }

  .committee-card-link h3 {
    font-size: 1.08rem;
  }

  .committee-card-link__details {
    display: grid;
    gap: 0.5rem;
    margin: 0;
  }

  .committee-card-link__details div {
    display: grid;
    gap: 0.12rem;
  }

  .committee-card-link__details dt {
    color: var(--color-secondary);
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  .committee-card-link__details dd {
    margin: 0;
    color: var(--color-muted);
  }

  .committee-card-link__cta {
    align-self: end;
    color: var(--committee-accent);
    font-weight: 700;
    margin-top: 0.25rem;
  }

  .committee-feature__aside {
    display: grid;
    gap: 0.85rem;
    border-radius: var(--radius);
    background: rgba(255, 255, 255, 0.72);
    border: 1px solid rgba(49, 92, 69, 0.12);
    padding: 0.9rem;
  }

  .committee-feature__aside h3 {
    font-size: 1.05rem;
  }

  .committee-note {
    border-left: 3px solid var(--color-gold);
    padding-left: 0.7rem;
    color: var(--color-muted) !important;
  }

  @media (max-width: 820px) {
    .committee-feature {
      grid-template-columns: 1fr;
    }

    .committee-card-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 620px) {
    .committee-card-grid {
      grid-template-columns: 1fr;
    }
  }
</style>

{% assign garden_committee = site.data.committees | where: "id", "garden" | first %}

<section class="committees-directory" aria-label="PTO committees">
  <section class="committees-helper" aria-labelledby="committees-helper-title">
    <div>
      <h2 id="committees-helper-title">Looking for a one-time shift?</h2>
      <p>Event-day help and UO Beverage Booth shifts are listed on the Volunteer page.</p>
    </div>
  </section>

  {% if garden_committee %}
    <section class="committee-feature" aria-labelledby="garden-committee-title">
      <div>
        <span class="committee-feature__label">Featured committee</span>
        <h2 id="garden-committee-title">{{ garden_committee.title }}</h2>
        <p class="committee-feature__tagline">{{ garden_committee.tagline }}</p>
        <p>{{ garden_committee.summary }}</p>

        {% if garden_committee.highlights %}
          <ul class="committee-feature__needs" aria-label="Garden Committee focus areas">
            {% for item in garden_committee.highlights %}
              <li>{{ item }}</li>
            {% endfor %}
          </ul>
        {% endif %}

        <div class="committee-feature__actions">
          <a class="button button--primary" href="mailto:{{ garden_committee.contact_email }}?subject=Garden%20Committee">Email {{ garden_committee.contact_name }}</a>
          <a class="button button--quiet" href="{{ '/get-involved/volunteer/' | relative_url }}">See volunteer opportunities</a>
        </div>
      </div>

      <aside class="committee-feature__aside" aria-label="Garden Committee details">
        <h3>Garden details</h3>
        <dl class="committee-feature__details">
          <div>
            <dt>Timing</dt>
            <dd>{{ garden_committee.timing }}</dd>
          </div>
          <div>
            <dt>Commitment</dt>
            <dd>{{ garden_committee.commitment }}</dd>
          </div>
          <div>
            <dt>Contact</dt>
            <dd><a href="mailto:{{ garden_committee.contact_email }}?subject=Garden%20Committee">{{ garden_committee.contact_name }}</a></dd>
          </div>
          <div>
            <dt>Current needs</dt>
            <dd>Seasonal needs, photos, and project details will be added when the committee shares them.</dd>
          </div>
        </dl>
        {% if garden_committee.note %}
          <p class="committee-note">{{ garden_committee.note }}</p>
        {% endif %}
      </aside>
    </section>
  {% endif %}

  <section aria-labelledby="committee-directory-title">
    <div class="section-heading">
      <p class="eyebrow">Current committees</p>
      <h2 id="committee-directory-title">Committee Directory</h2>
    </div>

    <div class="committee-card-grid">
      {% for committee in site.data.committees %}
        {% unless committee.id == "garden" %}
          <a class="committee-card-link" data-accent="{{ committee.accent }}" href="{{ committee.url | relative_url }}">
            <span class="badge">{{ committee.label }}</span>
            <h3>{{ committee.title }}</h3>
            <p>{{ committee.summary }}</p>
            <dl class="committee-card-link__details">
              <div>
                <dt>Timing</dt>
                <dd>{{ committee.timing }}</dd>
              </div>
              <div>
                <dt>Commitment</dt>
                <dd>{{ committee.commitment }}</dd>
              </div>
            </dl>
            <span class="committee-card-link__cta">{{ committee.cta | default: "View details" }} -&gt;</span>
          </a>
        {% endunless %}
      {% endfor %}
    </div>
  </section>
</section>
