---
name: Satyam Gazette Portfolio
description: A handcrafted newspaper portfolio for a design-focused full-stack engineer.
colors:
  aged-newsprint: "#DFD5CA"
  newsprint-shadow: "#C3BAB1"
  paper-highlight: "#e7dfce"
  pressed-ink: "#17130f"
  soft-ink: "#756F69"
  editorial-red: "#c0172d"
  editorial-red-dark: "#9f1023"
  plate-black: "#131313"
typography:
  display:
    fontFamily: "Canopee, serif"
    fontSize: "clamp(4.2rem, 18.4vw, 16rem)"
    fontWeight: 400
    lineHeight: 0.715
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Domaine Disp Cond Medium, serif"
    fontSize: "clamp(2.2rem, 7vw, 4.45rem)"
    fontWeight: 500
    lineHeight: 0.86
    letterSpacing: "-0.01em"
  body:
    fontFamily: "PP Editorial New, serif"
    fontSize: "clamp(1.02rem, 4.2vw, 1.5rem)"
    fontWeight: 400
    lineHeight: 1.24
    letterSpacing: "-0.004em"
  label:
    fontFamily: "IBM Plex Mono, monospace"
    fontSize: "0.72rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.08em"
rounded:
  sharp: "0px"
  stamp: "1px"
  small: "3px"
  pill: "999px"
spacing:
  xs: "0.5rem"
  sm: "0.95rem"
  md: "1.35rem"
  lg: "2.15rem"
  xl: "3.2rem"
components:
  editorial-link:
    backgroundColor: "transparent"
    textColor: "{colors.editorial-red}"
    typography: "{typography.label}"
    rounded: "{rounded.sharp}"
    padding: "0 0 0.1rem"
  ink-panel:
    backgroundColor: "{colors.plate-black}"
    textColor: "{colors.paper-highlight}"
    rounded: "{rounded.sharp}"
    padding: "0.95rem"
  paper-chip:
    backgroundColor: "{colors.aged-newsprint}"
    textColor: "{colors.pressed-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.stamp}"
    padding: "0.16rem 0.54rem"
---

# Design System: Satyam Gazette Portfolio

## 1. Overview

**Creative North Star: "The Builder's Gazette"**

This system is a personal front page for a builder who wants taste to be visible. It uses newspaper language, article density, tactile paper, oversized type, ruled divisions, stamped labels, and project imagery to make the portfolio feel authored rather than assembled from a template.

The visual posture is editorial, handcrafted, and distinctive. It should feel like a working desk covered with clippings, printed plates, proofs, and evidence of shipped work. It must still make the basics easy to find: identity, work, credibility, links, and contact.

It rejects the exact anti-references from PRODUCT.md: generic developer portfolio, template resume site, SaaS landing page, polished but forgettable AI-startup page, and copied portfolio surface treatment.

**Key Characteristics:**
- Newspaper grid with strong rules, dense type, and article-like project framing.
- Warm aged paper fields with pressed ink and one sharp editorial red.
- Oversized display type used as image and structure, not decoration.
- Physical texture, inset darkness, and printed contrast instead of glossy app surfaces.
- Motion is choreographed but respectful, with reduced-motion support preserved.

## 2. Colors

The palette is warm newsprint, nearly black ink, and a restrained editorial red used like a printer's mark.

### Primary
- **Editorial Red**: The signal color for rare emphasis, section accents, active links, and selected editorial marks. It should appear in short bursts only.
- **Pressed Ink**: The dominant text, rule, icon, and dark plate color. It replaces pure black everywhere.

### Secondary
- **Plate Black**: Used for heavy poster panels, masthead blocks, and high-impact reversed sections. It should feel like ink saturation on paper, not digital black.

### Neutral
- **Aged Newsprint**: The primary page ground. Use for the main paper surface and large calm fields.
- **Newsprint Shadow**: A darker paper tone for secondary surfaces, inset panels, and quiet separation.
- **Faded Paper Highlight**: Reversed text on ink panels, paper highlights, and old-paper contrast.
- **Soft Ink**: Secondary copy, metadata, dividers, and less important labels.

### Named Rules
**The Red Is Editorial Rule.** Editorial Red is a mark, not a theme wash. Use it for labels, links, small symbols, and moments of emphasis, never as a broad gradient or generic accent flood.

**The No Pure Black Rule.** Never use `#000` or pure white. Ink and paper must stay tinted, aged, and physical.

## 3. Typography

**Display Font:** Canopee, serif  
**Body Font:** PP Editorial New, serif  
**Label/Mono Font:** IBM Plex Mono, monospace

**Character:** The pairing is loud, printed, and personal. Canopee carries mastheads and poster moments; Domaine and PP Editorial New carry the article voice; mono is only for metadata, issue labels, and mechanical UI details.

### Hierarchy
- **Display** (400, `clamp(4.2rem, 18.4vw, 16rem)`, `0.715`): Mastheads, huge section words, and poster-scale signals.
- **Headline** (500, `clamp(2.2rem, 7vw, 4.45rem)`, `0.86`): Project titles, section leads, and feature story headings.
- **Title** (500, `clamp(1.45rem, 4.4vw, 2rem)`, `0.9`): Smaller story titles and supporting editorial blocks.
- **Body** (400, `clamp(1.02rem, 4.2vw, 1.5rem)`, `1.24`): Narrative copy, project descriptions, and personal statements. Keep dense copy near 65 to 75ch max.
- **Label** (400, `0.72rem`, `0.08em`, uppercase): Metadata, issue labels, links, chips, and timestamps.

### Named Rules
**The Type Is the Image Rule.** Large type is allowed to dominate a fold. If a section has no strong image, the typography must carry the visual weight with scale, rhythm, and contrast.

**The Mono Is Metadata Rule.** Mono is forbidden as a lazy developer costume. Use it only for labels, issue data, small navigation, and mechanical marks.

## 4. Elevation

The system is mostly flat and printed. Depth comes from paper texture, border rules, inset ink shadows, dark plates, and slight physical paper shadows. Avoid floating app-card elevation. When shadow appears, it should feel like a sheet, a printed block, or ink pressed into paper.

### Shadow Vocabulary
- **Paper Lift** (`0 8px 28px rgba(23,19,15,0.08)`): Use for large paper sections only when they need separation from the page ground.
- **Ink Plate Inset** (`inset 0 0 0 1px rgba(247,240,227,0.08), inset 0 0 138px rgba(0,0,0,0.76)`): Use for reversed black poster panels and dramatic masthead blocks.
- **Intro Paper Cast** (`0 26px 80px rgba(0,0,0,0.42), 0 7px 26px rgba(0,0,0,0.28)`): Use only for the opening newspaper animation or a similarly physical paper moment.

### Named Rules
**The Printed Depth Rule.** Shadows must explain a physical object. If a shadow makes a panel feel like a SaaS dashboard card, remove it.

## 5. Components

### Buttons
- **Shape:** Sharp printed edges with no radius (`0px`) or tiny stamp edges (`1px`).
- **Primary:** Pressed Ink background with Faded Paper Highlight text, mono uppercase label, compact newspaper-button padding.
- **Hover / Focus:** Hover may lift by `translateY(-1px)` or invert ink and paper. Focus must keep a visible outline.
- **Secondary / Ghost:** Transparent paper background with a full ink border. No side-stripe accents.

### Chips
- **Style:** Paper-tinted rectangle with a thin full border, mono uppercase text, and dense padding.
- **State:** Chips are labels or metadata. They should not look like rounded product filter pills unless the section explicitly needs a softer stamp.

### Cards / Containers
- **Corner Style:** Square by default (`0px`), tiny radius only for image masks or stamp-like artifacts (`1px` to `3px`).
- **Background:** Aged Newsprint, Newsprint Shadow, or translucent paper tints over texture.
- **Shadow Strategy:** Follow the Printed Depth Rule. Prefer rules, spacing, and background tone before shadow.
- **Border:** Thin full borders and horizontal or vertical rules are central to the language.
- **Internal Padding:** Dense but readable. Typical panels use `0.95rem` to `1.35rem`, larger story sections can use `2.15rem`.

### Inputs / Fields
- **Style:** No full form system exists yet. If added, use a paper field with a full ink border, square corners, PP Editorial New body text, and mono uppercase labels.
- **Focus:** Use the existing green focus outline or an ink outline with clear offset. Never rely on color alone.
- **Error / Disabled:** Errors should use Editorial Red sparingly with direct copy. Disabled states should lower ink contrast, not blur.

### Navigation
- **Style:** Small mono uppercase links, thin full borders or underline rules, compact spacing, and ink-to-paper inversion on hover.
- **Mobile:** Stack links or make them wrap like issue tags. Preserve tap size even when the visual language is dense.

### Signature Component
**Ink Poster Panel:** A reversed black editorial block with huge Canopee type, Faded Paper Highlight text, and inset ink shadows. Use it for section punches like Work, Signals, or social proof, not for every section.

## 6. Do's and Don'ts

### Do:
- **Do** make taste visible through type scale, texture, rules, and composition before relying on explanatory copy.
- **Do** treat projects and roles as editorial evidence: feature stories, records, dispatches, clippings, and proofs.
- **Do** use `#17130f` Pressed Ink instead of pure black and `#DFD5CA` or `#C3BAB1` for aged paper surfaces.
- **Do** keep Editorial Red rare and sharp. It is for editorial marks, not broad decoration.
- **Do** preserve reduced-motion support for marquee, intro, reveal, and hover choreography.

### Don't:
- **Don't** make this feel like a generic developer portfolio.
- **Don't** make this feel like a template resume site.
- **Don't** make this feel like a SaaS landing page.
- **Don't** make this feel like a polished but forgettable AI-startup page.
- **Don't** copy another portfolio's surface treatment directly. The newspaper direction must feel owned by Satyam.
- **Don't** use gradient text, decorative glassmorphism, nested app cards, or colored side-stripe borders.
- **Don't** turn every section into identical icon, heading, text cards. Use editorial pacing and section-specific art direction.
