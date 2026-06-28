# Yujin Gakuen PTO Website

This repository holds the public Yujin Gakuen PTO website. It is built with Jekyll and published with GitHub Pages.

## Quick Start

If you need to update the website:

1. Find the page or shared data file that controls the content.
2. Make the edit.
3. Preview locally if you can.
4. Commit and push the change.
5. Check the live site after GitHub Pages finishes publishing.

For a simple wording change, edit the page file itself. If the same fact appears in more than one place, update the shared data file once instead of editing every page separately.

## Where Things Live

- Page content lives in Markdown files such as `index.md`, `about/index.md`, and `meetings/upcoming/index.md`.
- Shared links, dates, announcement text, and repeated facts live in `_data/`.
- The site navigation lives in `_data/navigation.yml`. Header links, mobile menu links, footer links, breadcrumbs, and sitemap links all come from that file.
- Shared page structure lives in `_layouts/` and `_includes/`.
- Site styling lives in `assets/css/site.css`.
- Small browser behavior lives in `assets/js/site.js`.
- Images live in `assets/images/`.
- Editor-only notes live in `_internal/`.
- Review and launch notes live in `WEBSITE_GREMLINS.md`.

## Common Editing Tasks

### Update page wording

Edit the page Markdown file for that page. Most public copy is written directly in the page file.

### Update an event date or signup link

Check `_data/events.yml` first. If the same event fact is reused on several pages, update the data file and let the pages pick it up from there.

### Update a shared link

Use `_data/links.yml` for repeated links such as join forms, email addresses, donation links, store links, and other shared URLs.

### Update navigation

Edit `_data/navigation.yml`. That file drives the top menu, mobile menu, footer links, breadcrumbs, and sitemap-style links.

### Add or replace an image

Put the image in `assets/images/`, then update the page front matter or page content to point to it.

### Update meeting materials

Use `_data/meeting_materials.yml` for public agendas and approved minutes. If a file is not yet approved for public viewing, keep it out of the public page.

### Update donation or fundraiser links

Use `_data/links.yml` for the live links, then update the relevant donation page or fund page to match.

### Mark something unfinished

Use the page front matter fields the site already uses for partial pages, such as `status`, `pending_title`, `pending_intro`, and `pending_items`. Record the missing piece in `_internal/content-needed.md` and, if it is a launch or layout issue, also in `WEBSITE_GREMLINS.md`.

### Check what still needs attention

Start with `_internal/content-needed.md` for active missing items and `WEBSITE_GREMLINS.md` for layout, link, image, and launch-readiness notes.

## Public Content Rules

- Only publish facts that have a real source.
- Do not guess dates, minutes, board names, fund rules, documents, or meeting outcomes.
- Do not publish private PTO notes, private contact details, or unapproved records.
- Do not paste raw admin or signup links into visible page text if a cleaner public label or shared link works better.
- When something is not ready, use an intentional placeholder or a partial page state instead of filling the space with guesswork.

## TODO, REVIEW, and Placeholder Labels

The site uses a few labels to show what still needs attention:

- `TODO` means content or work is still needed.
- `FIXME` means something is broken or incorrect.
- `REVIEW` means a human should check it before publishing.
- `PLACEHOLDER` means the temporary content is intentional.
- `LINK NEEDED` means the page still needs a public URL, form, or document.
- `IMAGE NEEDED` means the page still needs final art or a photo.
- `CONTENT SOURCE NEEDED` means the page still needs real source material before it can be finished.

These notes are tracked in `_internal/content-needed.md` and `WEBSITE_GREMLINS.md`. Some pages also use partial-page front matter so unfinished content is clear on the site itself.

## Local Preview

Use the bundled Jekyll setup:

```sh
bundle install
bundle exec jekyll serve
```

Then open the local URL shown in the terminal.

If you only want to check whether the site builds, use:

```sh
bundle exec jekyll build
```

Restart the preview server after changing `_config.yml`, Gemfile settings, or other build-related files. Most page and style edits refresh automatically.

## Publishing

GitHub Pages publishes this site from the repository when changes are pushed.

After publishing, check the live site once the build has finished and make sure the edited page looks right on both desktop and mobile.

If the custom domain is being used, the root `CNAME` file should contain:

```text
www.yujingakuenpto.com
```

## Before Publishing

- Links go where they should.
- The page looks good on phone and desktop.
- The wording is clear and specific.
- No private or invented information is visible.
- Images have suitable alt text or an intentional review note.
- Any unfinished items are recorded in `_internal/content-needed.md` or `WEBSITE_GREMLINS.md`.

## When Something Feels Confusing

If you are not sure where an item belongs, start with the page file, then check the shared data file it uses, then look at `_internal/content-needed.md` and `WEBSITE_GREMLINS.md`.

That usually points you to the right place fast.
