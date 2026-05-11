# Visual System Spec (V1)

Last updated: 2026-04-21

## Purpose

Define the base visual language before building full portfolio sections.

## Implemented Files

- `/Users/satyamchaudhary/Documents/portfolio/index.html`
- `/Users/satyamchaudhary/Documents/portfolio/styles.css`

## Token Families

- Paper:
  - `--paper-0`, `--paper-1`, `--paper-2`
- Ink:
  - `--ink-0`, `--ink-1`, `--ink-2`
- Signal:
  - `--signal`, `--signal-soft`
- Structural:
  - `--rule`, `--rule-thin`, `--rule-mid`, `--shadow-paper`
- Typography:
  - `--display-font`, `--body-font`, `--mono-font`
- Spacing:
  - `--space-2xs` to `--space-xl`

## Typography Roles

- Display: Fraunces
  - Mastheads, section heads, pull quotes
- Body: Source Serif 4
  - Main narrative text and project descriptions
- Mono: IBM Plex Mono
  - Metadata, labels, nav chips, timestamps

## Component Primitives

- Topline / issue metadata bar
- Masthead hero with ticker rail
- Panel blocks with section kicker + heading
- Swatch cards for palette
- Type specimen cards
- Grid preview strip (12-col desktop, 6-col mobile)
- Feature card, quote card, metadata card

## Motion + Accessibility

- Ticker animation for editorial energy
- `prefers-reduced-motion` support included
- Focus-visible styles included for interactive controls

## Next Integration Step

Use this system directly while building the real homepage sections:
- Masthead
- Lead story
- Metrics strip
- Featured work blocks

