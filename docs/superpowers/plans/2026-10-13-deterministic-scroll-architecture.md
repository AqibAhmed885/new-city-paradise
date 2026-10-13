# Deterministic Scroll Animation Architecture Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace fragile Communities GSAP pinning and conflicting transforms with native sticky cards while making Hero, HeroIntro, Lenis, and GSAP lifecycle behavior deterministic.

**Architecture:** Keep native document scrolling with Lenis synchronized to one GSAP ticker. Keep Hero’s desktop ScrollTrigger pin with reserved pin spacing. Use native CSS sticky for Communities card positioning and limit GSAP to child reveals plus one scale-only compression tween per previous card.

**Tech Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS, GSAP ScrollTrigger, Lenis.

**Spec:** `docs/superpowers/specs/2026-10-13-scroll-architecture-design.md`

## Global Constraints

- Preserve existing visual design, text, images, Hero animation, and FeaturedDistricts content.
- Do not combine CSS sticky and GSAP pin on the same element.
- Do not allow multiple animations to write the same card-inner transform properties.
- Do not add arbitrary section z-index hierarchy; Navbar may remain high z-index.
- Do not add vertical overflow or transformed page wrappers around sticky cards.
- Remove per-image Communities parallax initially; retain CSS image hover scale.
- Keep all GSAP work inside scoped lifecycle cleanup and responsive `gsap.matchMedia()` branches.

## Review Focus

- Fast downward scroll through Communities must never leave a card invisible or create a pin gap; verify with repeated high-velocity wheel/trackpad scrolling.
- Reverse scrolling must restore card scale/opacity and reveals deterministically; verify by scrolling from FeaturedDistricts back into each card.
- Refreshing or resizing while inside Communities must preserve sticky card positions; verify at desktop widths before and after resize.
- React Strict Mode remount must not duplicate triggers; verify by inspecting `ScrollTrigger.getAll()` in the browser after reload/remount.
- Direct `#plots-overview` navigation must land on the section without Lenis/ScrollTrigger fighting native anchor positioning.

### Task 1: Stabilize shared Lenis and GSAP lifecycle

**Files:**
- Modify: `components/SmoothScroll.tsx:1-40`
- Modify: `hooks/useGsap.ts:1-20`

**Interfaces:**
- `SmoothScroll` continues to wrap children without adding a scroll container.
- `useGsap(effect, dependencies)` continues to scope component animations and cleanup.

- [ ] **Step 1: Write the failing static checks**

Assert that `SmoothScroll` explicitly passes `autoRaf: false`, registers the Lenis scroll callback, and adds exactly one GSAP ticker callback. Assert that `useGsap` creates and reverts a scoped GSAP context.

- [ ] **Step 2: Run checks to verify they fail against the current implementation**

Run a focused shell assertion against the two files. Expected: the `autoRaf: false` assertion fails before implementation.

- [ ] **Step 3: Implement the minimal lifecycle changes**

Set `autoRaf: false` in Lenis options, retain `lenis.on("scroll", ScrollTrigger.update)`, keep one named ticker callback calling `lenis.raf(time * 1000)`, and remove the ticker plus destroy Lenis on cleanup. Keep GSAP context cleanup in `useGsap` and avoid global `ScrollTrigger.killAll()`.

- [ ] **Step 4: Run checks to verify they pass**

Run the focused assertions and TypeScript check. Expected: all assertions pass and `tsc --noEmit` exits 0.

### Task 2: Make Hero pin lifecycle and stacking predictable

**Files:**
- Modify: `components/Hero.tsx:15-224,226-238`

**Interfaces:**
- Hero retains the existing desktop video-to-split-screen timeline and the `#home` section.

- [ ] **Step 1: Write the failing static checks**

Assert that Hero retains `pin: true` and `pinSpacing: true`, while the component does not contain a delayed `ScrollTrigger.refresh()` call or `z-30`.

- [ ] **Step 2: Run checks to verify they fail against the current implementation**

Run focused assertions. Expected: the delayed refresh and `z-30` assertions fail.

- [ ] **Step 3: Implement the lifecycle cleanup**

Remove the component-level delayed global refresh and rely on the existing scoped timeline plus ScrollTrigger’s refresh handling. Remove the arbitrary section z-index while preserving Hero’s pin, pin spacing, function-based width measurements, autoplay behavior, and visual panel animation. Keep cleanup for the pointer listener, timeline, matchMedia, and GSAP context.

- [ ] **Step 4: Run checks to verify they pass**

Run focused assertions, TypeScript, and `git diff --check`.

### Task 3: Remove HeroIntro’s unnecessary stacking context

**Files:**
- Modify: `components/HeroIntro.tsx:221-275`

**Interfaces:**
- HeroIntro preserves its existing reveal triggers, background parallax, content, and CTA anchors.

- [ ] **Step 1: Write the failing static checks**

Assert that the section currently contains `z-20` and `isolate`, establishing the pre-change failure condition.

- [ ] **Step 2: Run checks to verify they fail after checking the desired absence condition**

Run the focused assertion expecting no section-level `z-20` or `isolate`; it must fail before implementation.

- [ ] **Step 3: Remove only the section stacking hierarchy**

Remove `z-20` and `isolate` from the section. Preserve `overflow-hidden` for the background visual and keep the existing negative background layer ordering local to the section.

- [ ] **Step 4: Run checks to verify they pass**

Run focused assertions, TypeScript, and `git diff --check`.

### Task 4: Rebuild Communities around native sticky cards

**Files:**
- Modify: `components/Communities.tsx:1-390` for animation logic and wrapper/card classes

**Interfaces:**
- `Communities` continues rendering the same `communities` data, IDs, links, image mosaic, text, and `#plots-overview` anchor.

- [ ] **Step 1: Write the failing static checks**

Assert that the current component contains GSAP `pin`, `pinSpacing`, card-inner entry `y`/`scale` writes, image parallax selectors, and a component-level `ScrollTrigger.refresh()`.

- [ ] **Step 2: Run checks to verify they fail against the current implementation**

Run focused assertions. Expected: all legacy architecture markers are found.

- [ ] **Step 3: Replace the desktop animation architecture**

Remove all card pinning, `pinSpacing`, image parallax, card-inner entry transform animation, and component refresh scheduling. Keep `useGsap` and `gsap.matchMedia()` for desktop/mobile/reduced-motion branches.

Update each card wrapper to provide approximately `115svh` scroll distance, retain increasing wrapper z-index, and keep the wrapper free of transforms. Update each card inner to use `sticky top-4` on desktop, retain the current visual sizing/rounded/shadow classes, and avoid `will-change-transform` unless needed for the scale tween.

Keep content and gallery child reveal triggers. Add one compression ScrollTrigger per non-final card targeting only that card inner’s `scale`, `autoAlpha`, `filter`, and `borderRadius` as the next wrapper enters. Do not animate card-inner `y`. Use `invalidateOnRefresh: true` and ensure the trigger is scoped by the component context.

Keep mobile simple reveals without sticky or pinning. Preserve reduced-motion behavior by creating no motion triggers for reduced-motion users.

- [ ] **Step 4: Run checks to verify they pass**

Assert there is no `pin`/`pinSpacing`/`data-parallax-image` animation, no card-inner entry tween, exactly one scale owner per compression tween, and a desktop `sticky top-4` class. Run TypeScript and `git diff --check`.

### Task 5: Keep page flow and global overflow neutral

**Files:**
- Inspect and modify only if required: `app/page.tsx:18-47`
- Inspect and modify only if required: `app/globals.css:1-170`

**Interfaces:**
- Home order remains Hero → HeroIntro → Communities → FeaturedDistricts.

- [ ] **Step 1: Write the failing static checks**

Assert that the current Home main wrapper does not introduce vertical overflow or transforms and that the section order remains unchanged.

- [ ] **Step 2: Run checks to verify the baseline**

Run the assertions and record the existing result. No product change is expected unless inspection finds a vertical scroll container or transform.

- [ ] **Step 3: Apply the minimal neutral layout change if required**

Keep `overflow-x-clip` only if it does not create a vertical scroll container; remove or adjust only rules that interfere with sticky positioning. Do not change typography, colors, or unrelated global styles.

- [ ] **Step 4: Run checks to verify they pass**

Run section-order/overflow assertions, TypeScript, and `git diff --check`.

### Task 6: Verify behavior in browser and final static checks

**Files:**
- Inspect: all changed files

- [ ] **Step 1: Start the app**

Run `npm run dev` and open the Home page in a browser.

- [ ] **Step 2: Exercise the required scroll matrix**

Test slow downward scroll, fast downward scroll, reverse scroll, refresh while inside Communities, desktop resize, direct `#plots-overview` navigation, and at least one narrow/mobile viewport. Confirm the final card releases directly into FeaturedDistricts.

- [ ] **Step 3: Check trigger lifecycle**

After reload and any Strict Mode remount, inspect `ScrollTrigger.getAll()` from the browser console or an equivalent diagnostic. Confirm no duplicate Communities triggers and no card pin triggers.

- [ ] **Step 4: Run final static verification**

Run:

```bash
./node_modules/.bin/tsc --noEmit
git diff --check
```

Run the production build with telemetry disabled. Expected: TypeScript and diff checks pass; if the known macOS `SecItemCopyMatching failed -50` crash persists, report it as an environment blocker with the exact exit code rather than attributing it to the scroll changes.

