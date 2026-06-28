# Yujin Gakuen PTO Website

This repository holds the public Yujin Gakuen PTO website. It is built with Jekyll and published with GitHub Pages.

## What Lives Where

- Page content is in the Markdown files, like `index.md`, `about/index.md`, and `events/calendar/index.md`.
- Shared navigation lives in `_data/navigation.yml`.
- Shared links, dates, announcements, and other repeated facts live in `_data/`.
- Shared page layouts and reusable pieces live in `_layouts/` and `_includes/`.
- Site styling lives in `assets/css/site.css`.
- Small browser behavior lives in `assets/js/site.js`.
- Editor-only notes live in `_internal/`.
- Review and launch notes live in `WEBSITE_GREMLINS.md`.

## How To Edit

The easiest workflow is to edit files in GitHub Desktop or your code editor, preview locally, then push when the page looks right.

For normal content updates:

1. Open the page file you want to change.
2. Update the wording or the shared data file it pulls from.
3. Preview locally before publishing.

If a fact appears on more than one page, update the shared data file once instead of editing every page separately.

## Preview Locally

Use the bundled Ruby/Jekyll setup:

```sh
bundle install
bundle exec jekyll serve
```

Then open the local preview URL shown in the terminal.

Restart the preview server after changing `_config.yml`, dependency settings, or other build-related files. Most content and style edits will refresh automatically.

## Publishing

The site is set up for GitHub Pages.

When the site is ready to go live on the custom domain, add a `CNAME` file in the repository root with:

```text
www.yujingakuenpto.com
```

## A Few Rules Of Thumb

- Keep public copy warm, clear, and specific.
- Do not add private PTO notes, fake documents, invented dates, or unapproved records.
- Do not paste raw VolunteerSignup URLs into visible page text.
- Put editor-only reminders in `_internal/content-needed.md` or `WEBSITE_GREMLINS.md`, not on the live pages.
- If you are not sure whether something should be public, pause and check the source first.
