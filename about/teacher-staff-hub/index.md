---
layout: page
title: Staff Hub
permalink: /about/teacher-staff-hub/
section: About
section_url: /about/
hero_label: About
summary: "A central PTO page for YG teachers and staff: meetings, reports, questions, spending, and school-project support."
status: partial
wide_content: true
pending_title: A few public details are still being confirmed
pending_intro: "This page is useful now. These final pieces still need confirmation:"
pending_items:
  - A dedicated staff-report submission form
  - Approved public decision summaries for the recent decisions section
staff_cards:
  - title: Upcoming PTO Meetings
    summary: See upcoming meeting dates and ways to listen, ask questions, share updates, or bring ideas.
    url: /meetings/upcoming/
    icon: calendar
    tone: green
    label: Quick path
  - title: Staff Reports
    summary: Send a short update, request, or committee note before a PTO meeting.
    url: "#staff-reports"
    icon: report
    tone: terra
    label: Quick path
  - title: Meeting Participation
    summary: Learn how staff can participate, whether you are listening, reporting, asking, or helping shape support.
    url: "#staff-role"
    icon: meeting
    tone: green
    label: Quick path
  - title: Recent PTO Decisions
    summary: Catch up on decisions that may affect school events, funding, committees, or staff requests.
    url: "#recent-decisions"
    icon: decisions
    tone: gold
    label: Quick path
  - title: Staff-Directed Spending
    summary: Learn how staff-directed PTO spending works and what information is needed.
    url: "#staff-spending"
    icon: spending
    tone: green
    label: Quick path
  - title: School Projects & PTO Committees
    summary: See how an ongoing school project can connect with PTO support or committee structure.
    url: "#projects-pathway"
    icon: committee
    tone: terra
    label: Quick path
  - title: Staff Survey / Membership Coming Soon
    summary: Look for the staff survey and staff membership update in early August.
    url: "#staff-survey"
    icon: coming-soon
    tone: gold
    label: Coming soon
---

{% assign today_seconds = site.time | date: "%s" | plus: 0 %}
{% assign upcoming_meeting_count = 0 %}
{% for event in site.data.events %}
  {% assign event_seconds = event.date | date: "%s" | plus: 0 %}
  {% if event.type == "meeting" and event.needs_confirmation != true and event_seconds >= today_seconds %}
    {% assign upcoming_meeting_count = upcoming_meeting_count | plus: 1 %}
  {% endif %}
{% endfor %}

<section class="action-band staff-hub-intro">
  <div>
    <span class="badge badge--sage">For YG teachers and staff</span>
    <h2>Connect with PTO here</h2>
    <p>This hub helps YG teachers and staff stay connected with PTO meetings, reports, questions, staff-directed spending, and school projects that may need PTO support. Teachers and staff are welcome at PTO meetings whether you are sharing an update, asking a question, bringing an idea, or simply listening and staying informed.</p>
    <div class="button-row">
      <a class="button button--primary" href="{{ site.data.links.secretary.url }}?subject=Staff%20report%20for%20PTO">Send a Staff Report</a>
      <a class="button button--secondary" href="{{ '/meetings/upcoming/' | relative_url }}">View Upcoming Meetings</a>
      <a class="button button--quiet" href="{{ site.data.links.contact.url }}?subject=Question%20about%20PTO%20support%20for%20YG%20staff">Ask a PTO Question</a>
    </div>
  </div>

  <aside class="staff-hub-intro__aside" aria-label="At a glance">
    <p class="eyebrow">At a glance</p>
    <h2>What you can do here</h2>
    <ul class="staff-hub-intro__list">
      <li>Teachers and staff are welcome at PTO meetings.</li>
      <li>Staff reports can be short.</li>
      <li>Questions, updates, ideas, and listening are all valid reasons to connect.</li>
      <li>Staff survey and membership updates are coming in early August.</li>
    </ul>
  </aside>
</section>

<section aria-labelledby="staff-reference-title">
  <div class="section-heading">
    <p class="eyebrow">For staff reference</p>
    <h2 id="staff-reference-title">The main places staff connect with PTO</h2>
    <p>Meetings, reports, spending questions, and project support all route from here.</p>
  </div>

  <div class="staff-reference-panel">
    <ul class="staff-reference-list">
      <li><strong>Meetings</strong><span>Listen in, ask questions, share context, or bring an idea forward.</span></li>
      <li><strong>Reports</strong><span>Send a short update before a meeting when something should be on PTO's radar.</span></li>
      <li><strong>Projects</strong><span>Ask whether a school project needs funds, volunteers, website visibility, or committee structure.</span></li>
    </ul>

    {% include image-placeholder.html
      purpose="Staff Hub visual: PTO/staff reference detail, school-community workspace, or non-identifying YG support image"
      ratio="4:3"
      filename="assets/images/staff-hub-reference-4x3.jpg"
      dimensions="1200 x 900 px"
      alt="YG staff and PTO materials arranged for a meeting or school support planning, no identifiable students"
      compact=true
    %}
  </div>
</section>

<section aria-labelledby="staff-quick-paths-title">
  <div class="section-heading">
    <p class="eyebrow">Quick paths</p>
    <h2 id="staff-quick-paths-title">Choose the next step</h2>
    <p>These are common starting points for teachers and staff who want to connect with PTO.</p>
  </div>

  <div class="action-card-row staff-dashboard-grid">
    {% for card in page.staff_cards %}
      <a class="action-card action-card--feature staff-card staff-card--{{ card.tone }}" href="{% if card.url contains '://' or card.url contains '#' or card.url contains 'mailto:' or card.url contains 'tel:' %}{{ card.url }}{% else %}{{ card.url | relative_url }}{% endif %}">
        <span class="action-card__icon {% if card.tone == 'terra' %}action-card__icon--terra{% elsif card.tone == 'gold' %}action-card__icon--gold{% else %}action-card__icon--green{% endif %}" aria-hidden="true">
          {% include action-icon.html icon=card.icon %}
        </span>
        <h3>{{ card.title }}</h3>
        <p>{{ card.summary }}</p>
        <span class="circle-link" aria-hidden="true">→</span>
      </a>
    {% endfor %}
  </div>
</section>

<section class="staff-meeting-report-pair" aria-label="Upcoming meetings and staff reports">
  <article id="upcoming-meetings" class="staff-work-card staff-meeting-panel" aria-labelledby="upcoming-meetings-title">
    <div class="section-heading">
      <p class="eyebrow">Meetings</p>
      <h2 id="upcoming-meetings-title">Upcoming meetings for staff reference</h2>
      <p>PTO meetings are open spaces to hear updates, ask questions, share staff perspective, and understand what support is moving forward.</p>
    </div>

    {% if upcoming_meeting_count > 0 %}
      <ol class="staff-meeting-list">
        {% assign shown_meetings = 0 %}
        {% for event in site.data.events %}
          {% assign event_seconds = event.date | date: "%s" | plus: 0 %}
          {% if event.type == "meeting" and event.needs_confirmation != true and event_seconds >= today_seconds and shown_meetings < 3 %}
            {% assign shown_meetings = shown_meetings | plus: 1 %}
            <li>
              <span class="badge">Meeting {{ shown_meetings }}</span>
              <h3>{{ event.title }}</h3>
              <p class="staff-meeting-panel__meta">{{ event.date | date: "%B %-d, %Y" }}{% if event.time %} · {{ event.time }}{% endif %}</p>
              <p class="small-note">Agenda status: not yet posted.</p>
            </li>
          {% endif %}
        {% endfor %}
      </ol>
    {% else %}
      <div class="staff-meeting-panel__copy">
        <span class="badge">Meetings</span>
        <h3>Upcoming PTO meetings</h3>
        <p class="staff-meeting-panel__meta">The next several meeting dates will appear here when confirmed.</p>
        <p class="small-note">Agenda status will be posted when available.</p>
      </div>
    {% endif %}

    <div class="staff-meeting-panel__footer">
      <p>Teachers and staff are welcome at PTO meetings whether you are bringing an update, asking a question, sharing context, or simply listening in.</p>
      <a class="button button--secondary" href="{{ site.data.links.contact.url }}?subject=Question%20about%20an%20upcoming%20PTO%20meeting">Ask a meeting question</a>
    </div>
  </article>

  <article id="staff-reports" class="staff-work-card staff-report-card" aria-labelledby="staff-reports-title">
    <div class="section-heading">
      <p class="eyebrow">Reports</p>
      <h2 id="staff-reports-title">Send a staff report for a PTO meeting</h2>
      <p>Staff reports are short updates that help the PTO understand what is happening at school, what support may be needed, and what needs to be ready before a meeting.</p>
    </div>

    <p>Reports do not need to be long. A few useful sentences are enough. They are helpful when you cannot attend, when you want something included in the record, or when a committee or project needs a quick update.</p>
    <dl class="communication-key communication-key--compact">
      <div>
        <dt>Current route</dt>
        <dd>Send staff reports to the PTO secretary for now.</dd>
      </div>
      <div>
        <dt>Helpful details</dt>
        <dd>What is happening, timing, what support is needed, and whether the item should reach a PTO meeting.</dd>
      </div>
    </dl>
    <div class="button-row">
      <a class="button button--primary" href="{{ site.data.links.secretary.url }}?subject=Staff%20report%20for%20PTO">Send a staff report</a>
      <a class="button button--secondary" href="https://docs.google.com/document/d/1tWVgVOBwAg8r7-NAzh-LjxFQYU3XPagzHhQ0cAJJiZI/edit?tab=t.swlrfhgcoocs#heading=h.bl4eytwovtql">Preview report format</a>
    </div>
  </article>
</section>

<section id="staff-role" class="staff-section" aria-labelledby="staff-role-title">
  <article class="staff-work-card staff-work-card--soft staff-participation-card">
    <div class="section-heading">
      <p class="eyebrow">Participation</p>
      <h2 id="staff-role-title">How staff can participate in PTO meetings</h2>
      <p>Staff do not need a formal report or agenda item to attend. Meetings are a place to stay informed, share context when helpful, ask questions, and help PTO understand what support would make a real difference.</p>
    </div>

    <ol class="process-steps process-steps--compact">
      <li>
        <span>1</span>
        <div>
          <h3>Listen in</h3>
          <p>Hear what PTO is working on and what decisions or events are coming up.</p>
        </div>
      </li>
      <li>
        <span>2</span>
        <div>
          <h3>Share context</h3>
          <p>Timing, student needs, classroom realities, and cultural connections help PTO make better decisions.</p>
        </div>
      </li>
      <li>
        <span>3</span>
        <div>
          <h3>Bring questions or ideas</h3>
          <p>Questions and ideas do not need to be fully formed before they come to a meeting.</p>
        </div>
      </li>
    </ol>
  </article>
</section>

<section id="recent-decisions" aria-labelledby="recent-decisions-title">
  <div class="section-heading">
    <p class="eyebrow">Decisions</p>
    <h2 id="recent-decisions-title">Recent PTO decisions</h2>
    <p>Use this as a quick check on decisions that may affect school events, funding, committees, or staff requests.</p>
  </div>

  <div class="content-callout staff-decisions-callout">
    <div>
      <h3>Approved public decision summaries will be posted here when available.</h3>
      <p class="small-note">This page keeps the short version in view. Meeting agendas and approved minutes live on the records pages when they are ready to publish.</p>
    </div>
    <a class="button button--secondary" href="{{ '/meetings/agendas-minutes/' | relative_url }}">See meeting records</a>
  </div>
</section>

<section id="staff-spending" aria-labelledby="staff-spending-title">
  <div class="section-heading">
    <p class="eyebrow">Requests and support</p>
    <h2 id="staff-spending-title">Requests, support, and PTO reference</h2>
    <p>PTO currently sets aside 20% of UO Beverage Booth fundraising earnings for staff-directed spending. This is one way staff-identified needs can surface early and get routed clearly.</p>
  </div>

  <dl class="communication-key staff-spending-key">
    <div>
      <dt>Current allocation</dt>
      <dd>20% of UO Beverage Booth fundraising earnings.</dd>
    </div>
    <div>
      <dt>How it routes</dt>
      <dd>Non-monetary requests or requests outside that allocation go to the PTO secretary for routing.</dd>
    </div>
    <div>
      <dt>Bookkeeping</dt>
      <dd>Receipts or basic documentation may still be needed.</dd>
    </div>
  </dl>

  <p class="small-note">Brigitte purchases requested items when possible. If that is not possible, the PTO president and treasurer handle the purchase.</p>
</section>

<section id="projects-pathway" aria-labelledby="projects-pathway-title">
  <div class="section-heading">
    <p class="eyebrow">Projects and committees</p>
    <h2 id="projects-pathway-title">Connect a school project with PTO support</h2>
    <p>If there is already a staff-led project, event, or working group, PTO may be able to help make it easier to sustain by adding volunteer support, funding pathways, website visibility, or committee structure.</p>
  </div>

  <div class="idea-flow staff-pathway">
    <div>
      <strong>Have an idea or project</strong>
      <p>Start with the idea, the timing, and who it helps.</p>
    </div>
    <div>
      <strong>Talk with PTO</strong>
      <p>Talk through whether it needs funds, volunteers, web visibility, or a committee structure.</p>
    </div>
    <div>
      <strong>Bring it forward</strong>
      <p>Bring it to a meeting or send a report so PTO can help it move forward.</p>
    </div>
    <div>
      <strong>If it keeps going</strong>
      <p>Consider whether it should become a PTO committee. If it does, the ongoing requirement is a simple monthly Committee Report.</p>
    </div>
    <div>
      <strong>Keep it simple</strong>
      <p>The process is there to make the work easier, not to add extra bureaucracy.</p>
    </div>
  </div>
</section>

<section id="staff-faq" aria-labelledby="staff-faq-title">
  <div class="section-heading">
    <p class="eyebrow">FAQ</p>
    <h2 id="staff-faq-title">Staff Hub FAQ</h2>
    <p>Quick answers for the questions staff may have while the fuller systems are still being organized.</p>
  </div>

  <div class="staff-faq">
    <details>
      <summary>Should I think of the PTO as only parents?</summary>
      <p>No. The PTO includes families, teachers, and staff working together to support Yujin Gakuen students, culture, events, and school community. Families often handle much of the volunteer labor, but staff perspective is essential because staff understand school timing, needs, and what support is actually useful.</p>
    </details>

    <details>
      <summary>How does the 20% staff-directed spending work?</summary>
      <p>The PTO currently sets aside 20% of UO Beverage Booth fundraising earnings for staff-directed spending. The exact process will stay posted here as it is confirmed. For now, staff can use this page to understand what the spending is for and how questions route.</p>
    </details>

    <details>
      <summary>Should staff volunteer for committees?</summary>
      <p>Staff are welcome to participate in committees, but that does not have to mean taking on hands-on volunteer labor. Staff can provide guidance, context, timing, cultural input, or coordination help. One-time event labor belongs on volunteer shifts; committee work is for ongoing planning and follow-through.</p>
    </details>

    <details>
      <summary>Should staff run for board positions?</summary>
      <p>Eligibility lives in the governing documents and election information. If those details change, this page will point there. Staff participation is welcome either way, and the PTO still benefits from staff input at meetings, in reports, and on school projects.</p>
    </details>
  </div>
</section>

<section id="staff-survey" aria-labelledby="staff-survey-title">
  <div class="section-heading">
    <p class="eyebrow">Coming soon</p>
    <h2 id="staff-survey-title">Staff survey and membership update</h2>
  </div>

  <div class="content-callout staff-survey-callout">
    <div>
      <h3>Look for the staff survey and staff membership update in early August.</h3>
      <p class="small-note">Once the link is confirmed, it will be posted here instead of left as a loose note.</p>
    </div>
  </div>
</section>
