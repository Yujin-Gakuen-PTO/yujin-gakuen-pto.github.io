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
- `_data/home_actions.yml`: homepage action cards.
- `_data/home_upcoming.yml`: priority order for homepage upcoming cards. The homepage shows the first four eligible future items.

Keep unique explanatory copy on its page. Do not move one-off paragraphs into data files simply to make them reusable.

## Placeholders

- Keep unfinished routes visible.
- Use `status: placeholder` with page-specific `placeholder_title` and `placeholder_text`.
- Make the placeholder explicit about what has not been added.
- Do not repeat the placeholder in the page summary, body, and status box.
- Every public placeholder must have a matching entry in `_internal/content-needed.md`.
- When information is supplied, add the content, remove the placeholder fields, and check off its internal request.

## Event Copy

- State known dates, times, locations, and actions directly.
- Event summaries should describe the event or volunteer action, not the state of the data.
- If part of an event is known, show the known facts and use the page placeholder only for the missing details.
- Do not show raw signup URLs. Use labels such as `Sign up to volunteer`.

## Editing Check

Before publishing:

1. Confirm the factual source and last verification date.
2. Update shared data instead of repeating dates, email addresses, or URLs.
3. Use a heading and link label that make sense out of context.
4. Read the copy at phone width and remove anything families do not need.
5. Add an expiration or review date for seasonal information.
6. Scan for website-strategy language and visible editor notes.

Keep editor notes in `_internal/content-needed.md`, this guide, or non-rendered data fields.
