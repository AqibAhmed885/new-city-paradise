# Deterministic Scroll Animation Architecture

## Goal

Make the Home flow from Hero through HeroIntro, Communities, and FeaturedDistricts deterministic, reversible, resize-safe, and free of duplicate or conflicting ScrollTriggers while preserving the current visual design and content.

## Scope

The change is limited to the scroll architecture in:

- `components/Hero.tsx`
- `components/HeroIntro.tsx`
- `components/Communities.tsx`
- `components/SmoothScroll.tsx`
- `hooks/useGsap.ts`
- `app/page.tsx`
- `app/globals.css`

No unrelated sections or content are rewritten.

## Root Causes

1. Communities uses GSAP `pin` with `pinSpacing: false`, so the document relies on manually coordinated pin ranges instead of a stable CSS layout.
2. The same `data-card-inner` receives `y` and `scale` writes from both the card-enter tween and the compression tween. Their ScrollTriggers can be active together and overwrite each other during fast or reverse scrolling.
3. Per-image parallax adds twelve extra scrubbed ScrollTriggers to a section that already has card and content animation.
4. Hero and Communities schedule independent global `ScrollTrigger.refresh()` calls, which can race with Lenis/layout measurement and each other.
5. Hero, HeroIntro, and Communities use arbitrary section z-index layers and HeroIntro creates an isolated stacking context, making overlap behavior harder to reason about.
6. The Lenis integration is close to correct but does not explicitly document/lock the single RAF owner, making accidental double RAF integration easier.

## Design

### Scroll ownership

The browser remains the native document scroll container. Lenis owns smooth interpolation of that document scroll, with `autoRaf: false`. A single GSAP ticker calls `lenis.raf(time * 1000)`, and Lenis emits `ScrollTrigger.update` on scroll. No transformed page wrapper or nested scroll container is introduced.

`useGsap` remains the shared lifecycle boundary. Components create animations inside a GSAP context and return cleanup through that context. Responsive branches use `gsap.matchMedia()` and are reverted on unmount or breakpoint changes.

### Hero

Hero keeps its existing desktop pinned video-to-split-screen timeline and `pinSpacing: true`. Its layout measurements remain functional on refresh through function-based dimensions and `invalidateOnRefresh`. The component removes the arbitrary high section z-index and its component-level delayed global refresh. The timeline and context cleanup remain the only lifecycle ownership for its ScrollTrigger.

### HeroIntro

HeroIntro keeps its reveal animations and background parallax. Its section no longer establishes an unnecessary z-index/isolation hierarchy; background layers use normal positioning within the section and cannot cover the next section. Its animation count and content remain unchanged.

### Communities

Desktop uses native CSS sticky cards:

- Each `data-stack-card` wrapper provides approximately `115svh` of scroll distance.
- Each `data-card-inner` is `sticky top-4` and receives an increasing wrapper z-index.
- No GSAP `pin` is used for cards.
- The final wrapper releases naturally into FeaturedDistricts.

GSAP has three limited responsibilities:

1. One reversible, one-time card-content reveal per card using child opacity/y values.
2. One reversible gallery reveal per card using child opacity/y values.
3. One compression trigger per non-final card that owns only the card inner `scale`, opacity, filter, and border radius while the following card approaches. It does not animate `y`.

Image parallax is removed initially. Existing image hover scale remains CSS-only.

The card inner has no card-entry transform animation. Therefore, the compression trigger is the only animation that writes its scale, and no GSAP tween competes with native sticky positioning.

### Global stacking and overflow

Normal content sections share the normal stacking level. HeroIntro and Communities lose arbitrary z-index values. Navbar may retain its own high z-index. The main wrapper keeps horizontal clipping only; no vertical overflow or transform is added to ancestors of sticky cards.

## Verification

Static checks will verify:

- No Communities `pin` or `pinSpacing` remains.
- No per-image ScrollTrigger remains.
- No card-inner entry tween writes `y` or `scale`.
- Only the compression tween writes card-inner scale.
- Hero retains `pin: true` and `pinSpacing: true`.
- Component-level ad-hoc refresh calls are removed.
- Lenis has `autoRaf: false` and one GSAP ticker integration.

Runtime checks will cover slow and fast downward scrolling, reverse scrolling, refresh while inside Communities, desktop resize, direct navigation to `#plots-overview`, and React Strict Mode remount behavior. TypeScript, formatting/diff checks, and the production build will be run where the environment allows.

