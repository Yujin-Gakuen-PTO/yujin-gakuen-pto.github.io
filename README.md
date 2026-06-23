# Yujin Gakuen PTO Website

Static public website for Yujin Gakuen PTO, built for GitHub Pages with Jekyll and Markdown.

## Editing Basics

- Page content lives in Markdown files such as `index.md`, `about/index.md`, and `meetings/upcoming/index.md`.
- The site navigation lives in `_data/navigation.yml`. Header, mobile menu, footer, breadcrumbs, and sitemap-style links all use that same file.
- Shared homepage links, announcements, action cards, and dated events live in `_data/`.
- Shared page structure lives in `_layouts/` and `_includes/`.
- Visual design lives in `assets/css/site.css`.
- Mobile menu behavior lives in `assets/js/site.js`.
- Internal editor guidance lives in `_internal/`, which is excluded from the published site.

## Hosting

This repo is intended to publish with GitHub Pages at:

`https://yujin-gakuen-pto.github.io/`

When the site is finished and approved, add a `CNAME` file in the repository root containing the custom domain:

`www.yujingakuenpto.com`

## Content Guardrails

This is a public website. Do not add private PTO command-center notes, private drafts, private contact details, unapproved financial records, fake meeting minutes, invented board details, or placeholder documents that look official.
