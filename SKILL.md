\---

name: design-system-medicloud-telehealth-saas-landing-page-template-

description: Creates implementation-ready design-system guidance with tokens, component behavior, and accessibility standards. Use when creating or updating UI rules, component specifications, or design-system documentation.

\---



<!-- TYPEUI\_SH\_MANAGED\_START -->



\# MediCloud – Telehealth SaaS Landing Page Template (Tailwind CSS)



\## Mission

Deliver implementation-ready design-system guidance for MediCloud – Telehealth SaaS Landing Page Template (Tailwind CSS) that can be applied consistently across marketing site interfaces.



\## Brand

\- Product/brand: MediCloud – Telehealth SaaS Landing Page Template (Tailwind CSS)

\- URL: https://themewagon.github.io/medicloud/

\- Audience: authenticated users and operators

\- Product surface: marketing site



\## Style Foundations

\- Visual style: structured, accessible, implementation-first

\- Main font style: `font.family.primary=IBM Plex Sans`, `font.family.stack=IBM Plex Sans, sans-serif`, `font.size.base=16px`, `font.weight.base=400`, `font.lineHeight.base=24px`

\- Typography scale: `font.size.xs=14px`, `font.size.sm=16px`, `font.size.md=18px`, `font.size.lg=20px`, `font.size.xl=24px`, `font.size.2xl=40px`, `font.size.3xl=64px`

\- Color palette: `color.text.primary=#394447`, `color.text.secondary=#ffffff`, `color.text.tertiary=#22292b`, `color.text.inverse=#161b1d`, `color.surface.base=#000000`, `color.surface.muted=#f1f3f3`, `color.surface.strong=#ff8d6d`

\- Spacing scale: `space.1=5px`, `space.2=8px`, `space.3=12px`, `space.4=16px`, `space.5=20px`, `space.6=24px`, `space.7=32px`, `space.8=40px`

\- Radius/shadow/motion tokens: `radius.xs=16px`, `radius.sm=50px` | `motion.duration.instant=150ms`



\## Accessibility

\- Target: WCAG 2.2 AA

\- Keyboard-first interactions required.

\- Focus-visible rules required.

\- Contrast constraints required.



\## Writing Tone

concise, confident, implementation-focused



\## Rules: Do

\- Use semantic tokens, not raw hex values in component guidance.

\- Every component must define required states: default, hover, focus-visible, active, disabled, loading, error.

\- Responsive behavior and edge-case handling should be specified for every component family.

\- Accessibility acceptance criteria must be testable in implementation.



\## Rules: Don't

\- Do not allow low-contrast text or hidden focus indicators.

\- Do not introduce one-off spacing or typography exceptions.

\- Do not use ambiguous labels or non-descriptive actions.



\## Guideline Authoring Workflow

1\. Restate design intent in one sentence.

2\. Define foundations and tokens.

3\. Define component anatomy, variants, and interactions.

4\. Add accessibility acceptance criteria.

5\. Add anti-patterns and migration notes.

6\. End with QA checklist.



\## Required Output Structure

\- Context and goals

\- Design tokens and foundations

\- Component-level rules (anatomy, variants, states, responsive behavior)

\- Accessibility requirements and testable acceptance criteria

\- Content and tone standards with examples

\- Anti-patterns and prohibited implementations

\- QA checklist



\## Component Rule Expectations

\- Include keyboard, pointer, and touch behavior.

\- Include spacing and typography token requirements.

\- Include long-content, overflow, and empty-state handling.



\## Quality Gates

\- Every non-negotiable rule must use "must".

\- Every recommendation should use "should".

\- Every accessibility rule must be testable in implementation.

\- Prefer system consistency over local visual exceptions.



<!-- TYPEUI\_SH\_MANAGED\_END -->



