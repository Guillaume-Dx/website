---
name: labnote-style
description: Create or edit a Lab to Forge lab note page (e.g. r8kqwn/index.html, vbvup1/index.html, or n4tylb/index.html). Use when adding a new lab note, editing an existing one's content or structure, building a multi-part note series with badges and prev/next navigation, adding a table of contents, styling Mermaid diagrams inside a note, or touching the labnotes.* / labnoteN.* i18n keys in script.js. Covers typography, color tokens, the series-badge/nav pattern, TOC generation, and the i18n wrapping convention this site relies on.
license: Proprietary
metadata:
  project: lab-to-forge-web-site
---

A lab note is a static page at `<slug>/index.html` (slug = random 6-char id, e.g. `vbvup1`) plus a feed
card + sidebar entry in `n4tylb/index.html` (the listing page) and translation strings in `script.js`.
There is no build step: every note is hand-written HTML sharing `styles.css` and `script.js`.

## Typography — do not invent new sizes

All text in `.labnotes-content` must use one of these existing sizes. Introducing an ad hoc
`font-size` is the single most common mistake — check this table before writing CSS.

| Element | Selector | Size | Notes |
| - | - | - | - |
| Note title (h1) | `.labnotes-hero h1` | `1.7rem` | |
| Section heading (h3) | `.labnote-stage` | `1.4rem`, weight 700 | Use `var(--font-display)` |
| Feed-card title (h2) | `.labnotes-content .project-card h2` | `1.15rem` | listing page only |
| Body text, lists, code, meta row, back-link | `.about-content.labnotes-content p` and siblings | `1rem` | the default — most content |
| Sidebar date-list link | `.labnotes-date-list li a` | `0.82rem` | |
| "Read the full note →" link | `.labnotes-content .labnote-readmore` | `0.85rem` | |
| Tag pills and the date | `.labnotes-content .project-stack`, `.labnotes-content .labnote-date` | `0.52rem` | see gotcha below |

**Gotcha — tags/date look bigger than their font-size suggests.** Uppercase text with
letter-spacing reads visually larger than mixed-case text at the same size. That's why the tag
pills and date are set smaller (`0.52rem`) than body text (`1rem`) on purpose — this was tuned
through several rounds of user feedback ("tag font is still too big") until it visually matched.
Don't "fix" this by bumping it back up to `1rem`.

Fonts: headings/titles/badges use `var(--font-display)` (Space Grotesk); body copy uses the
default `var(--font-body)` (Inter). Both are theme variables in `:root` — never hardcode a
font-family inside a lab note.

## Color tokens

Never hardcode hex colors in a note. Use the existing CSS variables so dark/light theme switching
keeps working:

| Token | Light | Dark | Use for |
| - | - | - | - |
| `--color-text` | `#171a21` | `#e8eaed` | body/heading text |
| `--color-muted` | `#5b6372` | `#a3a9b4` | secondary text |
| `--color-accent` | `#d9661a` | `#e07a2c` | orange — badges, section-heading color, TOC title |
| `--color-circuit` / `--color-circuit-bright` | teal `#0e9c8c` / `#0c8276` | teal `#35e0c9` / `#7df5e3` | links, hover states |
| `--color-border` | `#e3e7ee` | `#262b35` | borders, dividers |
| `--color-bg-alt` | `#ffffff` | `#161a22` | boxed panels (TOC, code blocks) |

**Gotcha — white text on the orange accent fails contrast.** `--color-accent` is a bright
orange; white/light text directly on it (e.g. a Mermaid edge-label background inherited from
`secondaryColor`) gives ~2.6:1 contrast, failing WCAG AA. Set an explicit dark background
(`themeVariables.edgeLabelBackground: "#0a1020"`) instead of letting it default to the accent.

## Multi-part series (badge + prev/next nav)

When a note is one part of a multi-note series (e.g. the 5-note NetBird/"Remote to LAN" series:
`t8wrnq`→`w4plkd`→`x5qjrn`→`y9tkzb`→`vbvup1`), every note in the series needs three things, and
**only** notes that belong to the series — never add these to a standalone note.

1. **A badge** combining a short series name and the position, e.g. `Remote to LAN · 3/5`,
   in the note's own `<h1>`, the listing-page feed-card `<h2>`, and the listing-page sidebar
   list item — three places, same markup pattern:

   ```html
   <span class="labnote-series-badge"><span data-i18n="labnotes.seriesName">Remote to LAN</span> · 3/5</span>
   ```

2. **Prev/next nav**, placed both near the top (after `.labnote-meta`) and near the bottom
   (before the "Back to Lab notes" link), omitting the missing side on the first/last note:

   ```html
   <nav class="labnote-series-nav" aria-label="Lab note series navigation">
     <a class="labnote-series-link labnote-series-prev" href="/w4plkd/" data-i18n="labnotes.prevNote">&larr; Previous note</a>
     <a class="labnote-series-link labnote-series-next" href="/y9tkzb/" data-i18n="labnotes.nextNote">Next note &rarr;</a>
   </nav>
   ```

3. **A title prefix on tiles only** (listing feed-card `<h2>` and sidebar item — NOT the note's
   own `<h1>`): prepend `<span data-i18n="labnotes.seriesLabel">Remote to LAN:</span>` before the
   title span. **Gotcha:** skip this prefix if the note's own title already starts with
   equivalent wording (e.g. note 1's title is literally "Remote access to the LAN: ...") — adding
   the prefix there produces visible duplication ("Remote to LAN: Remote access to the LAN: …").
   Check the actual title text before prefixing, don't apply it mechanically to every tile.

**Gotcha — `.labnote-series-badge` is defined twice in `styles.css`** (once near line 746, once
near line 884 with different values). CSS cascade means the *later* rule wins. Edit the later one;
editing only the first has no visible effect. Worth deduplicating next time you touch this rule.

## Table of contents (TOC)

Every lab note — series or standalone — gets a TOC immediately after `.labnote-meta` (and before
any series nav), auto-built from that note's own `<h3 class="labnote-stage">` section headings:

```html
<nav class="labnote-toc" aria-label="Table of contents">
  <h2 class="labnote-toc-title" data-i18n="labnotes.toc">On this page</h2>
  <ol class="labnote-toc-list">
    <li><a href="#labnote5-stageIntro" data-i18n="labnote5.stageIntro">What this note covers</a></li>
    <!-- one <li> per h3.labnote-stage, in document order -->
  </ol>
</nav>
```

Derive each anchor `id` from the heading's own `data-i18n` key by replacing the dot with a hyphen
(`labnote5.stageIntro` → `id="labnote5-stageIntro"`), and add that `id` to the `<h3>` itself. Reuse
the same `data-i18n` key on the TOC `<a>` so the link text and the heading stay in sync across
language toggles — don't duplicate the English/French strings by hand.

`.labnote-toc-list` renders as a 2-column numbered list (`columns: 2`) and collapses to 1 column
under the `@media (max-width: 760px)` breakpoint — add new notes to that same cascade rather than
writing a new media query.

When adding/renaming/reordering sections in an existing note, regenerate the whole TOC block —
stale hrefs pointing at renamed/removed ids are the main way this breaks silently.

## The i18n wrapping convention — don't let translation wipe your markup

`script.js`'s i18n engine does `el.textContent = strings[key]` for any `data-i18n="key"` element
(and `el.innerHTML = ...` only for `data-i18n-html`). `textContent` assignment destroys any child
markup. That means:

- **Never** put `data-i18n` on an element that also needs a sibling badge/prefix/icon inside it.
  Instead wrap just the translatable text in its own inner `<span data-i18n="...">`, and add the
  badge/prefix as an untranslated (or separately-`data-i18n`'d) sibling span:

  ```html
  <!-- wrong: data-i18n on the h1 wipes the badge span on every language toggle -->
  <h1 data-i18n="labnote5.title"><span class="labnote-series-badge">3/5</span>Groups and policies</h1>

  <!-- right -->
  <h1><span class="labnote-series-badge">...3/5</span><span data-i18n="labnote5.title">Groups and policies</span></h1>
  ```

- Add new translation keys to **both** the EN and FR blocks of `script.js` at the matching
  alphabetical/grouped position (`labnotes.*` shared keys, then `labnoteN.*` per-note keys) — a key
  present in only one language silently falls back to showing the raw key string in the other.

## Mermaid diagrams inside a note (e.g. `vbvup1/index.html`)

- `.labnote-card` is `display: flex; flex-direction: column; align-items: flex-start` — any
  full-width child (a diagram, a wide table) needs explicit `align-self: stretch; width: 100%`
  or it shrink-wraps to its intrinsic content width instead of filling the card.
- Set `flowchart: { useMaxWidth: false }` and `sequence: { useMaxWidth: false }` in
  `mermaid.initialize()`, and remove any `max-width: 100%` cap on the rendered `<svg>` — otherwise
  diagrams render squeezed instead of at natural size.
- If you add a legend or any other non-Mermaid HTML near a `<pre class="mermaid">`, make it a
  **sibling**, never a child. The render script restores `el.innerHTML` from a captured raw-source
  `Map` on every re-render (e.g. on theme toggle); anything nested inside the `<pre>` gets wiped.
- Set `themeVariables.edgeLabelBackground` explicitly (see Color tokens gotcha above) instead of
  relying on the Mermaid default.

## Verification checklist before finishing a note edit

1. `node -c script.js` if you touched translations.
2. Tag-balance check (`<h1>`/`<nav>`/`<h3>` open vs close counts) and CSS brace-balance check on
   `styles.css` — both are cheap `node -e` regex counts and catch most copy-paste mistakes.
3. `git status --porcelain` — this project's standing rule is **never commit** lab-note work
   automatically; only produce/save the draft unless explicitly told to commit.
4. Preview with a local `python -m http.server` + a screenshot in both English and French, and in
   both the light and dark theme, before reporting the change as done.
