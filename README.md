# Lab to Forge — Web Site

Static home page for the "Lab to Forge" public web site. No build tooling or
framework: plain HTML/CSS/JS, served as static files.

## Structure

- `index.html` — single-viewport home page: header (brand, Team link, EN/FR
  language switch), hero.
- `team.html` — "Team" page presenting the agents (Zeus, Athena, Aphrodite,
  Hermes, Ares, Artemis) as a grid of cards with circular medallion
  portraits and a short mythologically-phrased role summary for each.
- `styles.css` — all styling (dark theme, responsive layout).
- `script.js` — footer year, EN/FR i18n dictionary + language switch,
  starfield background canvas.
- `background.png`, `logo.png`, `timon-logo.png` — site images.
- `team-zeus.png`, `team-athena.png`, `team-aphrodite.png`,
  `team-hermes.png`, `team-ares.png`, `team-artemis.png` — 480×480 circular
  "medallion" portraits for the Team page. Source photos were taken from
  `D:\Timon\Agents`, square-cropped, and framed with a generated gold/bronze
  ring using Pillow, then palette-quantized to keep file size small.

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

The mythological role summary chosen for each team member on `team.html`
(e.g. Zeus as sovereign/order, Athena as wisdom, Hermes as messenger) is a
plausible framing based on naming conventions, not a confirmed mapping to
each agent's actual function — open to correction.
