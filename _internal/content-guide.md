# Yujin Gakuen PTO Website Content Guide

This guide is for site editors. It should not publish on the website.

## Voice

- Write like an organized YG PTO parent helping other busy parents.
- Keep copy warm, direct, practical, and scannable on phones.
- Make the next action obvious.
- Say clearly that families need to sign up in order to receive PTO emails.
- Use Japanese terms that are already part of YG community vocabulary, and explain unfamiliar terms briefly when helpful.
- Write about the PTO, event, record, or action. Do not describe the website's organization or publishing process.

## Avoid

- Marketing filler, grant-style language, design brief language, and AI-sounding copy.
- Website-strategy words such as `paths`, `clear next steps`, `public information`, `approved public`, `ready to share`, and `will be added`.
- Phrases such as `future home`, `Use this page`, `content strategy`, `audience`, `dynamic hub`, `stakeholders`, and `mission`.
- Fake dates, fake documents, fake meeting minutes, invented board names, invented policies, fundraising numbers, or unconfirmed links.
- Raw VolunteerSignup URLs as visible page text.

## Shared Sources

- `_data/announcement.yml`: current sitewide announcement.
- `_data/links.yml`: join form and repeated shared links.
- `_data/events.yml`: confirmed dates, times, locations, and signup URLs.
- `_data/impact.yml`: shared PTO impact categories used on About and PTO Impact.
- `_data/involvement_levels.yml`: shared participation choices used on About and Get Involved.
- `_data/committees.yml`: committee timing, commitment levels, membership, and shared descriptions.
- `_data/documents.yml`: current and historical governing-document links.
- `_data/meeting_materials.yml`: public agendas and formally approved minutes only.
- `_data/home_actions.yml`: homepage action cards.
- `_data/home_upcoming.yml`: priority order for homepage upcoming cards. The homepage shows the first four eligible future items.

Keep unique explanatory copy on its page. Do not move one-off paragraphs into data files simply to make them reusable.

## Source Precedence

Use sources in this order:

1. Hannah's hand-edited decisions and explicit confirmations.
2. Existing shared website data and published page facts.
3. The President Command Center website feed as an advisory source for discovery, review reminders, and stale-risk warnings.

Never publish Command Center information automatically. Confirm it against Hannah's direction or a current public-ready source before changing public copy or shared website data.

Use `_internal/content-needed.md` for active questions and resources. Use `_internal/content-inventory.md` for published facts, reuse, ownership, verification dates, and review cadence.

The Command Center automation inbox must not restate the five umbrella questions at the top of `content-needed.md`. It should report only new evidence, changed status, a specific stale risk, or a newly discovered blocker, and may refer back to the relevant question number.

## Page Status

- Use `status: published` when the page has the information needed for its current purpose.
- Use `status: partial` when the page has useful confirmed content but still needs specific facts, files, or action links.
- Partial pages use `pending_title`, `pending_intro`, and `pending_items`.
- Do not label a public page `Draft`.
- Keep the confirmed information in the page body and list only the missing pieces in the pending-details block.
- Every visible pending item must have a matching entry in `_internal/content-needed.md`.
- Layout, image, implementation, and launch-readiness placeholders should also be tracked in `WEBSITE_GREMLINS.md`.
- Use `IMAGE NEEDED`, `LINK NEEDED`, `CONTENT SOURCE NEEDED`, `REVIEW`, and `FIXME` consistently when marking unfinished work.
- When information is supplied, update shared data or page copy, remove the completed pending item, and change the page to `published` when no public gaps remain.

## Event Copy

- State known dates, times, locations, and actions directly.
- Event summaries should describe the event or volunteer action, not the state of the data.
- If part of an event is known, show the known facts and use the pending-details block only for the missing details.
- Do not show raw signup URLs. Use labels such as `Sign up to volunteer`.

## Records

- Publish meeting minutes only after formal approval.
- Do not link a combined agenda-and-minutes file if it would expose draft minutes.
- Label superseded governance files as historical.
- Do not publish tax identifiers, private contact details, internal planning documents, or unapproved financial figures.

## Editing Check

Before publishing:

1. Confirm the factual source and last verification date.
2. Update shared data instead of repeating dates, email addresses, or URLs.
3. Use a heading and link label that make sense out of context.
4. Read the copy at phone width and remove anything families do not need.
5. Add an expiration or review date for seasonal information.
6. Scan for website-strategy language and visible editor notes.

Keep editor notes in `_internal/content-needed.md`, this guide, or non-rendered data fields.
