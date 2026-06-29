---
layout: page
title: Donate
permalink: /get-involved/donate-funds/
section: Get Involved
section_url: /get-involved/
hero_label: Get Involved
summary: Ways families and community partners can support YG students through PTO giving and funds.
wide_content: true
status: published
---

<style>
  .donation-dashboard {
    display: grid;
    gap: clamp(1.2rem, 3vw, 1.85rem);
    margin-top: -0.25rem;
  }

  .donation-impact {
    text-align: center;
  }

  .donation-impact h2,
  .donation-card h2,
  .donation-embed-card h2 {
    color: var(--color-primary-hover);
    font-family: var(--font-heading);
  }

  .donation-impact h2 {
    margin: 0;
    font-size: clamp(1.55rem, 2.5vw, 2rem);
  }

  .donation-impact__rule {
    display: grid;
    width: min(17rem, 70%);
    height: 1.15rem;
    place-items: center;
    margin: 0.35rem auto 0.95rem;
    color: var(--color-gold);
  }

  .donation-impact__rule::before {
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(216, 168, 70, 0.85), transparent);
    content: "";
  }

  .donation-impact__rule::after {
    position: absolute;
    border-radius: 999px;
    background: var(--color-surface-warm);
    content: "*";
    font-weight: 700;
    padding-inline: 0.35rem;
  }

  .donation-impact__grid {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: clamp(0.85rem, 2vw, 1.4rem);
  }

  .donation-impact__item {
    display: grid;
    justify-items: center;
    gap: 0.55rem;
  }

  .donation-icon {
    display: grid;
    width: clamp(4.1rem, 6vw, 5.1rem);
    height: clamp(4.1rem, 6vw, 5.1rem);
    place-items: center;
    border: 1px solid rgba(49, 92, 69, 0.12);
    border-radius: 50%;
    background: rgba(238, 243, 231, 0.72);
    color: var(--color-primary-hover);
  }

  .donation-icon svg {
    width: 2.05rem;
    height: 2.05rem;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.6;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .donation-impact__item h3 {
    margin: 0.15rem 0 0;
    color: var(--color-ink);
    font-family: var(--font-body);
    font-size: 0.94rem;
    line-height: 1.25;
  }

  .donation-impact__item p {
    max-width: 18ch;
    margin: 0;
    color: var(--color-muted);
    font-size: 0.86rem;
    line-height: 1.45;
  }

  .donation-main {
    display: grid;
    grid-template-columns: minmax(0, 1.03fr) minmax(320px, 0.97fr);
    gap: clamp(1rem, 3vw, 1.8rem);
    align-items: stretch;
  }

  .donation-card,
  .donation-embed-card {
    border: 1px solid rgba(49, 92, 69, 0.12);
    border-radius: var(--radius);
    background: rgba(255, 255, 255, 0.9);
    box-shadow: var(--shadow-soft);
    padding: clamp(1.1rem, 2.5vw, 1.65rem);
  }

  .donation-card h2,
  .donation-embed-card h2 {
    margin: 0;
    font-size: clamp(1.45rem, 2vw, 1.72rem);
  }

  .donation-card > p,
  .donation-embed-card > p {
    margin: 0.75rem 0 0;
    color: var(--color-muted);
    line-height: 1.5;
  }

  .donation-destinations {
    display: grid;
    margin-top: 1.2rem;
  }

  .donation-destination {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr) auto;
    gap: 0.9rem;
    align-items: center;
    border-top: 1px solid var(--color-border-soft);
    color: inherit;
    padding: 0.82rem 0;
    text-decoration: none;
  }

  .donation-destination:first-child {
    border-top: 0;
  }

  .donation-destination strong {
    display: block;
    color: var(--color-ink);
    font-size: 0.98rem;
  }

  .donation-destination span:not(.donation-icon) {
    color: var(--color-muted);
    font-size: 0.86rem;
    line-height: 1.4;
  }

  .donation-destination__arrow {
    color: var(--color-primary-hover);
    font-weight: 700;
  }

  .donation-destination .donation-icon {
    width: 3.4rem;
    height: 3.4rem;
  }

  .donation-destination .donation-icon svg {
    width: 1.55rem;
    height: 1.55rem;
  }

  .donation-embed {
    min-height: 450px;
    margin-top: 1rem;
    overflow: hidden;
    border: 1px solid var(--color-border-soft);
    border-radius: var(--radius);
    background: #fff;
  }

  .donation-embed [data-zeffy-embed] {
    min-height: 450px;
  }

  .donation-note-band {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0;
    overflow: hidden;
    border: 1px solid rgba(216, 168, 70, 0.36);
    border-radius: var(--radius);
    background: linear-gradient(135deg, rgba(255, 248, 237, 0.94), rgba(247, 234, 209, 0.62));
  }

  .donation-note {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    gap: 0.9rem;
    align-items: center;
    padding: 1rem 1.2rem;
  }

  .donation-note + .donation-note {
    border-left: 1px solid rgba(122, 78, 45, 0.16);
  }

  .donation-note h3 {
    margin: 0;
    color: var(--color-primary-hover);
    font-size: 1rem;
  }

  .donation-note p {
    margin: 0.2rem 0 0;
    color: var(--color-muted);
    font-size: 0.9rem;
    line-height: 1.4;
  }

  .donation-note a {
    font-weight: 700;
  }

  @media (max-width: 899px) {
    .donation-impact__grid,
    .donation-main,
    .donation-note-band {
      grid-template-columns: 1fr;
    }

    .donation-impact__grid {
      gap: 1rem;
    }

    .donation-impact__item {
      grid-template-columns: auto minmax(0, 1fr);
      justify-items: start;
      text-align: left;
    }

    .donation-impact__item p {
      max-width: none;
    }

    .donation-note + .donation-note {
      border-top: 1px solid rgba(122, 78, 45, 0.16);
      border-left: 0;
    }
  }
</style>

<section class="donation-dashboard" aria-labelledby="donation-impact-title">
  <div class="donation-impact">
    <h2 id="donation-impact-title">Your support makes a difference</h2>
    <span class="donation-impact__rule" aria-hidden="true"></span>
    <div class="donation-impact__grid">
      <div class="donation-impact__item">
        <span class="donation-icon" aria-hidden="true">{% include action-icon.html icon="report" %}</span>
        <div>
          <h3>Learning and Culture</h3>
          <p>Support Japanese immersion, classroom tools, and cultural learning.</p>
        </div>
      </div>
      <div class="donation-impact__item">
        <span class="donation-icon" aria-hidden="true">{% include action-icon.html icon="hands-heart" %}</span>
        <div>
          <h3>Students and Families</h3>
          <p>Help provide resources and support when the YG community needs it.</p>
        </div>
      </div>
      <div class="donation-impact__item">
        <span class="donation-icon" aria-hidden="true">{% include action-icon.html icon="committee" %}</span>
        <div>
          <h3>Community Events</h3>
          <p>Bring people together through festivals, traditions, and celebrations.</p>
        </div>
      </div>
      <div class="donation-impact__item">
        <span class="donation-icon" aria-hidden="true">{% include action-icon.html icon="bag" %}</span>
        <div>
          <h3>Teacher and School Support</h3>
          <p>Fund classroom needs, teacher requests, and school-wide support.</p>
        </div>
      </div>
      <div class="donation-impact__item">
        <span class="donation-icon" aria-hidden="true">{% include action-icon.html icon="volunteer" %}</span>
        <div>
          <h3>Caring for Each Other</h3>
          <p>Support the Caring Crane Fund and help YG families in times of need.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="donation-main">
    <section class="donation-card" aria-labelledby="gift-goes-title">
      <h2 id="gift-goes-title">Choose where your gift goes</h2>
      <p>The secure Zeffy form lets you choose which PTO fund your donation supports. You can give to general PTO support, Caring Crane, the Garden Committee, or other available funds listed in the form.</p>

      <div class="donation-destinations">
        <a class="donation-destination" href="{{ site.data.links.general_fund.url }}">
          <span class="donation-icon" aria-hidden="true">{% include action-icon.html icon="committee" %}</span>
          <span><strong>General PTO Support</strong><span>Keeps daily programs, classroom help, and school-community support moving.</span></span>
          <span class="donation-destination__arrow" aria-hidden="true">-&gt;</span>
        </a>
        <a class="donation-destination" href="{{ site.data.links.caring_crane.url }}">
          <span class="donation-icon" aria-hidden="true">{% include action-icon.html icon="hands-heart" %}</span>
          <span><strong>Caring Crane Fund</strong><span>Provides confidential, need-based support to YG students and families.</span></span>
          <span class="donation-destination__arrow" aria-hidden="true">-&gt;</span>
        </a>
        <a class="donation-destination" href="{{ site.data.links.garden_committee.url }}">
          <span class="donation-icon" aria-hidden="true">{% include action-icon.html icon="basket" %}</span>
          <span><strong>Garden Committee</strong><span>Supports garden work and outdoor learning connected to YG.</span></span>
          <span class="donation-destination__arrow" aria-hidden="true">-&gt;</span>
        </a>
      </div>

      <a href="{{ '/about/impact/' | relative_url }}">Learn more about PTO impact -&gt;</a>
    </section>

    <section class="donation-embed-card" aria-labelledby="make-donation-title">
      <h2 class="visually-hidden" id="make-donation-title">Make a donation</h2>
      <div class="donation-embed">
        <div data-zeffy-embed data-form-url="/embed/donation-form/yujin-gakuen-pto-donation"></div>
        <div data-zeffy-embed-fallback style="display:none;">
          <div style="position:relative;overflow:hidden;height:450px;width:100%;"><iframe title="Donation form powered by Zeffy" style="position:absolute;border:0;top:0;left:0;bottom:0;right:0;width:100%;height:100%" data-zeffy-embed-src="https://www.zeffy.com/embed/donation-form/yujin-gakuen-pto-donation" allowpaymentrequest allowTransparency="true"></iframe></div>
        </div>
        <script src="https://www.zeffy.com/embed/v2/zeffy-embed.js" onerror="document.querySelectorAll('[data-zeffy-embed-fallback]').forEach(function(el){el.style.display='block';el.querySelectorAll('iframe[data-zeffy-embed-src]').forEach(function(f){f.src=f.getAttribute('data-zeffy-embed-src');});});"></script>
      </div>
    </section>
  </div>

  <div class="donation-note-band" aria-label="More donation information">
    <div class="donation-note">
      <span class="donation-icon" aria-hidden="true">{% include action-icon.html icon="volunteer" %}</span>
      <div>
        <h3>Raise Funds Through Volunteering</h3>
        <p>The UO Beverage Booth is the PTO's largest fundraiser and depends on adult volunteers. <a href="{{ '/get-involved/uo-beverage-booth/' | relative_url }}">See UO Beverage Booth shifts</a>.</p>
      </div>
    </div>
    <div class="donation-note">
      <span class="donation-icon" aria-hidden="true">{% include action-icon.html icon="report" %}</span>
      <div>
        <h3>Tax-Deductible</h3>
        <p>The Yujin Gakuen PTO is a registered 501(c)(3) organization. Your donation is tax-deductible to the extent allowed by law.</p>
      </div>
    </div>
  </div>
</section>
