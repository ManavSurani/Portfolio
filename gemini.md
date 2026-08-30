# Portfolio Development Log & Q/A Record

## Session: Bug Fixes & Final Polish Pass (2026-08-30)

### User Request
Fix confirmed bugs (floating badge clipping, ScrollToTop vs MobileCTA collision on mobile, section spine visual clarity) and add final polish items (badge entrance, spine node tooltips, mobile CTA subtle appearance pulse).

### What Was Done
1. **Phase A1 — Fix Hero Floating Badge Clip (`src/app/page.tsx`)**:
   - Relocated the wipe `clipPath` animation off the outer container and placed it directly on the inner portrait image container.
   - The "MSc IT Scholar" floating badge (`-bottom-4`) is now a sibling of the clip area, allowing its natural floating overflow without being sliced off on mobile or desktop.

2. **Phase A2 — Fix ScrollToTop / MobileCTA Overlap (`src/components/ui/ScrollToTop.tsx`)**:
   - Added `hidden md:flex` to `ScrollToTop` so it only renders on tablets/desktops (`md:+`).
   - On mobile, `MobileCTA` provides persistent conversion without fighting for corner screen space.

3. **Phase A3 — Spine Visual Clarity & Stabilization (`src/components/ui/SectionSpine.tsx`)**:
   - Adjusted spine margin to `left-16` (64px) for distinct separation from browser viewport edges.
   - Widened track to `w-[3px]`, softened color to `bg-sand-DEFAULT/60`, and added rounded pill caps.
   - Added recompute on `document.fonts.ready` and a 500ms stabilization fallback timeout to prevent offset drift from dynamic metrics.

4. **Phase B1 — Badge Separate Entrance Animation (`src/app/page.tsx`)**:
   - Added a 0.4s entrance (`initial={{ opacity: 0, scale: 0.8 }}`, `animate={{ opacity: 1, scale: 1 }}`) at `delay: 0.9s` so the badge arrives as a payoff right after the portrait finishes revealing.

5. **Phase B2 — Spine Node Hover Tooltips (`src/components/ui/SectionSpine.tsx`)**:
   - Hovering over spine nodes on desktop reveals section title labels ("About", "Skills", "Experience", "Projects") via CSS transitions.

6. **Phase B3 — MobileCTA Subtle First-Appearance Pulse (`src/components/ui/MobileCTA.tsx`)**:
   - Upgraded `MobileCTA` pulse control to `useState` with `onAnimationComplete` handler on the button, guaranteeing reliable single-pulse playback.

7. **Focus Trap & Accessibility Enhancements (`src/components/layout/Navbar.tsx`)**:
   - Implemented panel focus trap (Tab / Shift+Tab cycling), Escape key handling, and outside pointerdown click listener.

8. **Fine Pointer Gating for 3D Tilt (`src/components/ui/ProjectCard.tsx`)**:
   - Added `useCanHover()` hook utilizing `window.matchMedia("(hover: hover) and (pointer: fine)")` to gate mousemove/3D tilt transforms strictly to true pointer devices.

9. **ESLint & Dependency Array Cleanups**:
   - Cleaned unescaped entities in `page.tsx` (`&apos;`, `&quot;`).
   - Cleaned unused imports in `page.tsx` and `ProjectModal.tsx`.
   - Updated `Counter.tsx` dependency array with `[to, count]`.
   - Documented hydration safety in `PageIntro.tsx`.

### Verification
- `npx tsc --noEmit; npm run build` completed with code 0 (all static pages generated cleanly, zero TypeScript errors).

---

## Session: Add Certificate Link to Internship Experience (2026-08-30)

### User Request
Add Google Drive Certificate link to the "Software Engineering Intern — VN Code Pro" card in the Experience section and its detail modal.

### What Was Done
1. **Extended `ProjectDetailData` Interface (`src/components/ui/ProjectModal.tsx`)**:
   - Added optional `certificateUrl?: string;` property.
   - Imported `Award` icon from `lucide-react`.

2. **Added Modal Footer Action Button (`src/components/ui/ProjectModal.tsx`)**:
   - Rendered "View Certificate" button with `Award` icon in `variant="outline"` between `githubUrl` and `liveUrl` opening in a new tab (`target="_blank"`).

3. **Updated Internship Data (`src/app/page.tsx`)**:
   - Added `certificateUrl: "https://drive.google.com/file/d/1SsRAuTNAmdFRQV-Dn0UMw_J4wZ9qQB_2/view"` to `internshipModalData`.

4. **Added Direct One-Click Certificate Link on Card Footer (`src/app/page.tsx`)**:
   - Added a clean secondary text link with `Award` and `ExternalLink` icons (`onClick={(e) => e.stopPropagation()}`) directly above the modal opening trigger, preventing unintended modal popups.

### Verification
- `npx tsc --noEmit; npm run build` completed with code 0 (zero TypeScript errors, clean static generation).
