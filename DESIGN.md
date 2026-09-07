# MediCloud – Telehealth SaaS Landing Page Template (Tailwind CSS)

## Context and Goals

Deliver token-driven, implementation-ready UI guidance for the MediCloud telehealth SaaS marketing site. This design system enforces consistent component behavior, accessibility conformance (WCAG 2.2 AA), and rapid development using Tailwind CSS across all sections: navigation, hero, features, how-it-works, about, testimonials, pricing, FAQ, and footer.

## Design Tokens and Foundations

### Color Palette

| Token | Hex | Usage |
|---|---|---|
| `color.primary` | `#FF8D6D` | CTAs, active states, brand accent |
| `color.primary-hover` | `rgba(255, 141, 109, 0.5)` | Button/ link hover |
| `color.secondary` | `#003A43` | Dark section backgrounds (how-it-works, footer) |
| `color.success` | `#006E2F` | Check icons, positive indicators |
| `color.info` | `#00B8DB` | Informational badges |
| `color.warning` | `#F0B100` | Warning indicators |
| `color.danger` | `#FB2C36` | Error states, destructive actions |
| `color.white` | `#ffffff` | Card backgrounds, text on dark |
| `color.text.primary` | `#394447` | Body text |
| `color.text.secondary` | `#ffffff` | Text on dark surfaces (secondary bg) |
| `color.text.tertiary` | `#22292b` | Headings, navbar links |
| `color.text.inverse` | `#161b1d` | Text on light accent surfaces |
| `color.surface.muted` | `#f1f3f3` | Card backgrounds, feature cards, light section bgs |
| `color.surface.neutral` | `#d0d6d8` | Borders, dividers |
| `color.surface.border` | `#e3e7e8` | Subtle borders, sidebar dividers |
| `color.surface.overlay` | `rgba(0, 0, 0, 0.45)` | Modal/dropdown overlays |

### Typography

| Token | Value | Usage |
|---|---|---|
| `font.family.primary` | `IBM Plex Sans, sans-serif` | All text |
| `font.size.xs` | `14px` | Small labels, footnotes |
| `font.size.sm` | `16px` | Body, lead text |
| `font.size.base` | `16px` | Base body |
| `font.size.md` | `18px` | Lead paragraphs |
| `font.size.lg` | `20px` | Feature descriptions |
| `font.size.xl` | `24px` | Card titles, h3/h4 |
| `font.size.2xl` | `40px` | Section headings (h2) |
| `font.size.3xl` | `64px` | Hero heading (display-3) |
| `font.weight.normal` | `400` | Body text |
| `font.weight.semibold` | `600` | Nav links, card titles |
| `font.weight.bold` | `700` | Headings, pricing amounts |
| `font.lineHeight.base` | `24px` | Body line height |
| `letterSpacing.md` | `0.1em` | Pricing labels, section labels |

### Spacing Scale

| Token | Value | Usage |
|---|---|---|
| `space.1` | `5px` | Minimal spacing |
| `space.2` | `8px` | Icon-to-text gap |
| `space.3` | `12px` | Tight element spacing |
| `space.4` | `16px` | Card padding, small gaps |
| `space.5` | `20px` | Standard gap between items |
| `space.6` | `24px` | Section heading to content, grid gaps |
| `space.7` | `32px` | Section top/bottom padding (mobile) |
| `space.8` | `40px` | Section top/bottom padding (desktop py-lg-12=96px) |

### Radius, Shadow, Motion

| Token | Value | Usage |
|---|---|---|
| `radius.xs` | `16px` | Card borders, FAQ items |
| `radius.sm` | `50px` | Pill badges, circular elements |
| `radius.full` | `9999px` | Number step circles, rounded pills |
| `motion.duration.instant` | `150ms` | Hover transitions |
| `motion.duration.normal` | `300ms` | Sidebar collapse, accordion toggle |
| `motion.duration.slow` | `500ms` | Accordion chevron rotation |

### Shadows

No custom shadows used. Cards rely on `border-0` (flat) or `border` with `bg-white` (subtle outline). The primary visual depth comes from color contrast and radius, not shadows.

## Component-Level Rules

### 1. Navigation Bar (Navbar)

**Anatomy:** Brand logo (left) | Nav links (center) | CTA button "Get a Demo" (right). Mobile: hamburger toggler collapses nav into off-canvas.

**Variants:** Sticky-top with `bg-white` + `border-bottom`.

**States:**

| State | Behavior |
|---|---|
| Default | `color.text.tertiary` links, `bg-white` navbar, `border-bottom` on `#e3e7e8` |
| Hover (link) | `color.primary` text |
| Active (link) | `color.tertiary` with `fw-semibold` |
| Focus-visible | 2px `color.primary` outline ring, offset 2px |
| Mobile toggler | Collapsed: hamburger icon. Expanded: close icon. `aria-expanded` toggles |
| Scrolled | Sticky-top pinned, no additional treatment needed |

**Spacing & Typography:**
- Nav links: `font.size.sm`, `font.weight.semibold`, `space.4` padding
- Nav items: `space.5` gap between links
- Container: `space.4` horizontal padding via `.container`

**Responsive:**
- `lg` breakpoint (`992px`): collapses to hamburger menu
- Mobile nav: stacked links full-width, CTA below links

**Long-content:** Nav links should truncate at 2 words max. Overflow items go into a "More" dropdown if needed.

**Accessibility:**
- Nav landmark must use `<nav>` with `aria-label="Main navigation"`
- Hamburger must have `aria-expanded="false"` / `"true"` and `aria-controls`
- Focus must be trappable inside mobile nav when open
- Skip link must be present to bypass nav

### 2. Button (`.btn`)

**Anatomy:** Text label, optional icon (left/right). Pill-shaped via `rounded-pill`.

**Variants:**

| Variant | Default BG | Default Color | Hover BG | Hover Color |
|---|---|---|---|---|
| Primary (`btn-primary`) | `color.primary` | `color.text.inverse` | `rgba(255, 141, 109, 0.5)` | `color.text.inverse` |
| Outline Secondary (`btn-outline-secondary`) | transparent | `color.secondary` | `rgba(0, 58, 67, 0.1)` | `color.secondary` |
| White (`btn-white`) | `color.white` | `color.text.primary` | `color.surface.border` | `color.text.tertiary` |

**States:**

| State | Rule |
|---|---|
| Default | Per variant table above |
| Hover | Per variant table above. Transition: `motion.duration.instant` |
| Focus-visible | 2px `color.primary` outline, 2px offset |
| Active | Slightly darker variant (`--bs-btn-active-border-color` applies) |
| Disabled | `color.surface.neutral` bg, `#9ca8ab` bg/ border, `#fff` text. `cursor: not-allowed`. Must not respond to clicks. |
| Loading | Show spinner icon, disable pointer events, preserve width |
| Error | Show error state adjacent to button (not inline). Button remains clickable for retry. |

**Spacing & Typography:**
- Minimum touch target: `44px x 44px`
- Font: `font.size.sm`, `font.weight.semibold`
- Padding: `space.3` vertical `space.5` horizontal (default)
- Border radius: `radius.sm` (pills via `rounded-pill`)

**Long-content:** Button text must not wrap. Use `text-truncate` with max-width or shrink text. Maximum 3 words for CTA buttons.

**Accessibility:**
- Must use `<button>` or `role="button"` with `tabindex`
- Disabled buttons must use `disabled` attribute (not just CSS class)
- Loading state must communicate via `aria-label="Loading..."` or `aria-busy="true"`
- Color must not be the only differentiator — include text, icon, or underline
- Contrast: 4.5:1 for text, 3:1 for large text (18px+ bold or 24px+ regular)

### 3. Card (`.card`)

**Anatomy:** Optional icon/image (top) | Heading | Description text | Optional action (link/button). Sections: features, testimonials, pricing.

**Variants:**

| Variant | Background | Border | Special |
|---|---|---|---|
| Feature card | `color.surface.muted` | `border-0` | Fixed icon color via `stroke="currentColor"` |
| Testimonial | `color.white` | `border-0` | Quote SVG, avatar, name + title |
| Pricing | `color.surface.muted` or `color.white` | `border-0` or `border-primary` | "Most Popular" badge, feature list with check/x icons |
| FAQ | `color.white` | `border` | Accordion expandable, chevron icon |

**States:**

| State | Rule |
|---|---|
| Default | As per variant |
| Hover (clickable cards) | Subtle transform: `translateY(-2px)`, `box-shadow` intensity increase |
| Focus-visible (clickable) | 2px `color.primary` outline |
| Active (clickable) | Scale `0.98` |
| Disabled (pricing) | Reduced opacity `0.5`, `cursor: not-allowed` |

**Spacing & Typography:**
- Card padding: `space.8` on `card-body` (features, pricing), `space.6` (testimonials, FAQ)
- Card heading: `font.size.xl` (`h3`/`h2`), `font.weight.bold`
- Card description: `font.size.sm`, `color.text.primary`, `mb-0`
- Grid gap: `space.6` between cards

**Long-content:**
- Feature card text must max out at 3 lines. Use `line-clamp-3` or explicit truncation.
- Testimonial quote text: max 4 lines, `fst-italic` style
- Pricing feature lists: single-line items with consistent icon alignment

**Empty-state:** If a dynamic card section has no data (e.g., no testimonials), show a centered empty-state card with an icon + "No items to display" + optional CTA.

**Accessibility:**
- Cards that are clickable must use `<a>` or `<button>` or have `role="link"` with `tabindex="0"`
- Testimonial `<img>` must have `alt` text describing the person (not just decorative)
- Pricing "Most Popular" badge must be announced by screen readers (`aria-label`)
- FAQ accordion must use proper `aria-controls`, `aria-expanded`, `aria-labelledby`

### 4. Badge (`.badge`)

**Anatomy:** Small pill-shaped label with text + optional icon.

**Variants:**

| Variant | BG | Text Color |
|---|---|---|
| Primary (`text-bg-primary`) | `color.primary` | `color.text.inverse` |
| Secondary (`text-bg-secondary`) | `color.secondary` | `color.text.secondary` |

**States:** Badges are non-interactive (read-only). No hover/focus states.

**Spacing & Typography:** `rounded-pill`, `fw-normal`, `font.size.xs`. Padding: `space.3` vertical, `space.4` horizontal.

**Accessibility:** Decorative icons inside badges must have `alt=""` or `aria-hidden="true"`. Badge text must be descriptive enough on its own.

### 5. Step Number (How It Works)

**Anatomy:** Circular numbered element with icon wrapper.

**Variants:**
- Inactive: `bg-white`, `color.text.tertiary`, `border-4 border-primary border-opacity-25`
- Active: `bg-primary`, `color.white`, `border-4 border-white`

**Sizing:** Use `.icon-shape.icon-xl` (`56px x 56px`), `rounded-circle`, `fw-bold`, `fs-4`.

**Responsive:** Stack vertically on mobile. Center-align text and number.

### 6. Accordion / FAQ Toggle

**Anatomy:** Question row (clickable) | Chevron icon (right) | Expandable content panel.

**States:**

| State | Rule |
|---|---|
| Default | Question row with `border`, `rounded-4`, `p-5` padding. Chevron points down. |
| Expanded | Chevron rotates 180° via `.chevron-arrow` + `[aria-expanded=true]`. Content panel visible. |
| Hover (toggle) | Background change to `color.surface.muted` |
| Focus-visible | 2px `color.primary` outline on toggle link |

**Spacing & Typography:**
- Question: `h4`, `font.weight.semibold`
- Answer: `font.size.sm`, `color.text.primary`, `space.3` top margin
- Wrapper `p-5` (`space.8` vertical padding), `border`, `rounded-4`

**Accessibility:**
- Must use `aria-expanded="false/true"` on toggle
- Must use `aria-controls` pointing to the collapse panel `id`
- Must use `aria-labelledby` on the panel referencing the toggle
- Keyboard: `Enter` or `Space` to toggle
- Focus must move to panel content when expanded

### 7. Avatar

**Anatomy:** Circular image or initials + optional online status indicator.

**Sizes:**
| Class | Dimensions |
|---|---|
| `avatar-xs` | `24px` |
| `avatar-sm` | `32px` |
| `avatar-md` | `40px` |
| `avatar-lg` | `56px` |
| `avatar-xl` | `80px` |
| `avatar-xxl` | `120px` |

**Variants:**
- Image: `<img>` with `object-fit: cover`
- Initials: `.avatar-initials` with background color + uppercase text
- Status indicator: `.avatar-indicators` with `.avatar-online` / `.avatar-offline` / `.avatar-away` / `.avatar-busy`

**Accessibility:** Avatar `<img>` must have `alt` text describing the person. Initials avatars must use `aria-label`.

### 8. Feature List (Checkmark Items)

**Anatomy:** Icon (check) + Text label. Used in About section and pricing features.

**Spacing:** `space.2` gap between icon and text. `space.3` margin-bottom between items.

**Icon:** `color.success` (`#006E2F`) for included features. `color.danger` for excluded features.

### 9. Logo Cloud (Clients Section)

**Anatomy:** Heading "Trusted by" + description + row of client logos.

**Behavior:** Logos use `opacity-75` default. No hover state needed (decorative).

**Responsive:** 1 column on mobile (col-6), up to 5 columns on desktop.

**Accessibility:** Client logos are decorative — must use `alt=""` empty alt text.

### 10. Floating Badge (Hero)

**Anatomy:** Absolutely positioned badge overlaying the hero image.

**Positioning:** `position-absolute` with `top-*` and `start-*` / `end-*` utility classes.

**Animation:** Subtle floating animation via CSS (if present) to draw attention.

**Accessibility:** Must not interfere with hero content readability. Must have accessible labels.

## Accessibility Requirements (Testable Acceptance Criteria)

1. **Color contrast:** All text must pass WCAG 2.2 AA (4.5:1 for body text, 3:1 for large text). Use `color.text.primary` on `color.white` (pass) and `color.text.secondary` on `color.secondary` (pass).
2. **Focus indicators:** Every interactive element must show a 2px `color.primary` focus ring with 2px offset on `:focus-visible`. Verify: press Tab through the full page.
3. **Keyboard navigation:** All functionality must be operable via keyboard. Verify: no Tab traps, logical DOM order.
4. **ARIA landmarks:** Must use `<nav>`, `<main>`, `<footer>` landmarks. Verify with screen reader.
5. **Alt text:** All meaningful images must have descriptive `alt` text. Decorative images must use `alt=""`.
6. **Touch targets:** All interactive elements must have a minimum 44x44px touch target. Verify with dev tools.
7. **Skip link:** A "Skip to main content" link must be the first focusable element.
8. **Reduced motion:** `prefers-reduced-motion` must disable all animations and transitions.
9. **Screen reader announcements:** Loading states, error messages, and dynamic content changes must use `aria-live` regions.
10. **Heading hierarchy:** Must not skip levels. H1 (`display-3` or `h1`) in hero, h2 for sections, h3 for cards.

## Content and Tone Standards

| Element | Tone | Example |
|---|---|---|
| Hero headline | Benefit-driven, active voice | "Run Your Virtual Clinic Effortlessly" |
| Section headings | Direct, descriptive | "Clinical Excellence Integrated" |
| Feature descriptions | Concise, feature-forward | "HD, peer-to-peer encrypted video calls with built-in waiting rooms and screen sharing." |
| CTAs | Imperative, action-oriented | "Get a Demo" / "Take a Quick tour" / "Select Plan" / "Get Started" / "Contact Sales" |
| Testimonials | First-person, authentic | "MediCloud transformed how I manage my pediatric practice." |
| FAQ answers | Helpful, complete | No placeholders. Full informative answers. |
| Footer links | Descriptive, clear | "Privacy Policy" not "Learn More" |
| Badge text | Short tag | "HIPAA Compliant & Secure" / "MOST POPULAR" |

**Voice principles:**
- Confident but not hyperbolic. Avoid: "revolutionary," "game-changing," "best ever"
- Healthcare-appropriate: professional, trustworthy, warm
- Use active voice: "Manage patients" not "Patients can be managed"
- Address the provider directly: "your practice," "your clinic"

## Anti-Patterns and Prohibited Implementations

1. **No raw hex values in component CSS.** All colors must use the semantic token names mapped to Tailwind config.
2. **No one-off spacing.** Every margin/padding must come from the spacing scale. No arbitrary values like `17px` or `23px`.
3. **No hidden focus indicators.** `:focus { outline: none }` or `outline: 0` without a `:focus-visible` replacement is prohibited.
4. **No ambiguous CTAs.** "Click Here," "Learn More," "Submit" without context are prohibited. Use descriptive labels like "Get a Demo" or "Select Plan."
5. **No low-contrast text.** Gray-on-gray text (e.g., `#999` on `#f5f5f5`) is prohibited. Minimum 4.5:1 contrast.
6. **No missing Alt text on meaningful images.** Hero image, avatar photos, and illustrations must have descriptive alt text. Only decorative logos may use `alt=""`.
7. **No placeholder content in production.** FAQ answers must be substantive. "Lorem ipsum" is a dev-only placeholder.
8. **No single-type differentiation.** Interactive states must not rely on color alone. Include shape, icon, text decoration, or position changes.
9. **No orphaned floating badges.** Hero floating badges must have sufficient background opacity to remain readable over any image.
10. **No broken accordion markup.** FAQ must use proper `aria-*` attributes for collapse behavior. Missing `aria-controls` or `aria-expanded` is a violation.
11. **No skipped heading levels.** H1 → H3 (skipping H2) is prohibited. Sections must begin with H2.
12. **No motion without `prefers-reduced-motion` query.** All CSS transitions/animations must be wrapped in or overridden by a `@media (prefers-reduced-motion: reduce)` rule.

## QA Checklist

- [ ] All colors referenced by semantic token (not hex)
- [ ] All spacing values from the spacing scale
- [ ] Buttons define all states: default, hover, focus-visible, active, disabled, loading
- [ ] Focus-visible visible on every interactive element
- [ ] Minimum 44x44px touch targets on all interactive elements
- [ ] Color contrast ≥ 4.5:1 for body text, ≥ 3:1 for large text
- [ ] `prefers-reduced-motion` stops all animations
- [ ] Alt text on every meaningful image; `alt=""` on decorative
- [ ] Heading hierarchy: H1 → H2 → H3 (no skips)
- [ ] Skip link present and functional
- [ ] ARIA landmarks: `<nav>`, `<main>`, `<footer>`
- [ ] Accordion has `aria-expanded`, `aria-controls`, `aria-labelledby`
- [ ] Mobile nav: hamburger has `aria-expanded` and `aria-controls`
- [ ] All icon states accounted for (color, size, strokeWidth)
- [ ] Card overflow: text clamped, no broken layouts at max content
- [ ] Logo cloud: `alt=""` on all client logos
- [ ] Pricing cards: disabled variants handled for non-selected features (x icon)
- [ ] No "lorem ipsum" in production-ready code
- [ ] CTA labels are descriptive (no "Click Here")
- [ ] Testimonials: avatar `alt` text describes the doctor
- [ ] Component density verified: cards (37), links (32), buttons (10), lists (8), navigation (1)
