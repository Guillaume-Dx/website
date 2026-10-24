# Lab Note → X Post Handoff Workflow

This document describes how a published lab note on the Lab to Forge web site gets turned into
an X (Twitter) post by `lab-to-forge-web-site.XPoster`. Full agent context and decisions live in
that agent's `REQUIREMENTS.md` (fetch via `agent_doc_get(name: "lab-to-forge-web-site.XPoster",
file: "REQUIREMENTS.md")`) — this doc is the human-facing summary of the hand-off process.

## Who's involved

- **Writer** (this role): writes/publishes the lab note, prepares the hand-off package, and
  records the final log entry in the changelog once a post goes live.
- **XPoster**: single-purpose agent that drafts an X post from the hand-off package, gets human
  approval, and publishes via browser automation (no official X API in v1).
- **Orchestrator**: routes the hand-off between Writer and XPoster and relays the published log
  entry back for the changelog.

## 1. What to send to XPoster

When a lab note is published, send XPoster a hand-off package with:

| Field | Required | Notes |
|---|---|---|
| Title | Yes | The lab note's title as published. |
| Summary | Yes | 1–3 sentences, plain language. This is the source of truth — XPoster must not invent facts or embellish beyond it. |
| Canonical URL | Yes | The live page on the site (e.g. `https://<site>/lab-note-3.html`). |
| Hashtags | No | Suggested hashtags, if any. |
| Tone | No | e.g. "casual", "technical" — a hint, not a script. |

Keep the summary tight: XPoster has to fit title + link + optional hashtags into a single X post
(≤ 280 characters), so a long summary just gets trimmed less gracefully.

## 2. Draft → approve → publish flow

1. XPoster drafts the post text from the package above (title/summary/link, optional hashtags).
2. XPoster asks the human to approve the draft (`question` tool) — **no auto-publish**, always a
   human checkpoint.
3. On approval, XPoster publishes via Timon browser automation on the already-authenticated X
   session for this project, and captures a screenshot/snapshot plus the post URL when available.
4. On rejection/edit request, XPoster redrafts and asks again.

## 3. Where published-post logs get recorded

After a successful publish, XPoster hands back a log entry (post text, X post URL, timestamp,
source lab note URL) to the Orchestrator, which relays it to the Writer. The Writer appends it to
the project changelog at [`changelog.md`](./changelog.md) under "Published X posts".

## Out of scope for this hand-off

- XPoster does not write or edit lab note content — that stays with the Writer.
- XPoster does not auto-publish without approval, and only targets X (no other networks) in v1.
