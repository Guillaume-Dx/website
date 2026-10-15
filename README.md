# Lab to Forge — Web Site

Static home page for the "Lab to Forge" public web site. No build tooling or
framework: plain HTML/CSS/JS, served as static files.

## Structure

- `index.html` — single-page home page: hero, About, Projects/Work.
- `styles.css` — all styling (dark theme, responsive layout).
- `script.js` — sets the footer year.
- `background.png` — hero section background image.

## Running locally

Open `index.html` directly in a browser, or serve the folder with any static
file server, e.g.:

```
npx serve .
```

## Notes

Content and visual style (dark theme, product-showcase framing, hero/About/
Projects sections) were chosen autonomously on 2026-10-14 in the absence of
a human response, per Zeus's standing default, to keep the 2026-10-16
milestone on track. The contact form/section and placeholder project cards
were later removed at the user's request, and the hero now uses
`background.png` as its background image. All of this remains
open to revision once reviewed.
