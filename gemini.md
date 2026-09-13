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

---

## Session: Flagship Project Treatment — PNP CRM Showcase (2026-09-03)

### User Request
Implement the complete Flagship Project Treatment specification for PNP CRM:
- Separate PNP CRM from the standard project cards grid into a full-width flagship banner.
- Build cinematic clip-path unveil for `/images/pnp_crm_demo.webm` with visibility-driven auto-play/pause.
- Add fine-pointer gated 3D tilt (max ±3°) on media panel.
- Orchestrate content sequence: "✦ Flagship Project" eyebrow → title → description → animated 75% stat counter with honest Before/After comparison bars → micro-staggered tags → action CTAs (Source Code + View Case Study).
- Add static 1-shot ambient radial glow backdrop.
- Ensure the remaining 5 projects render in the standard grid.

### What Was Done
1. **Shared 3D Tilt Hook (`src/components/ui/ProjectCard.tsx`)**:
   - Exported `useCanHover` and `useTiltHandlers` with configurable `maxAngle` parameter (default 4° for cards, 3° for flagship).

2. **Created Flagship Project Component (`src/components/ui/FlagshipProject.tsx`)**:
   - Built full-width responsive showcase container (video leads on mobile, 2-column on `lg:`+).
   - Added cinematic clip-path unveil (`0.9s`, ease `[0.16, 1, 0.3, 1]`) for the video.
   - Connected `useInView` to video `ref` to auto-play when in viewport and pause when scrolled out of view to preserve battery and CPU.
   - Implemented `flagshipStagger` sequence (`0.15s`) for content elements.
   - Integrated `<Counter to={75} suffix="%" />` with truthful Before (100%) and After (25%) comparative bars delayed by 0.3s.
   - Added static, 1-shot ambient radial glow backdrop (zero infinite loops).
   - Strict CTA compliance: no magnetic effect on flagship buttons.

3. **Integrated into Main Page (`src/app/page.tsx`)**:
   - Partitioned `flagshipProject` and `remainingProjects` (5 cards).
   - Rendered `<FlagshipProject />` right below `SectionHeading` in `#projects`.
   - Rendered `remainingProjects` in the standard grid below.

### Verification
- `npx tsc --noEmit; npm run build` completed with code 0 (all 4 static pages generated cleanly, zero TypeScript errors).
- Dev server running on `http://localhost:3054`.

---

## Session: Signature Scroll Sequence — Horizontal Pin, Curved Spine & Line-by-Line Stagger (2026-09-03)

### User Request
Implement the complete Signature Scroll Sequence specification:
- Experience section: line-by-line bullet reveal via nested `staggerContainer`.
- About section: internal staggered reveal (SectionHeading → P1 → P2 → MSc card → BSc card).
- Projects section: horizontal pin-scroll sequence for desktop (`xl:`+) tuned for the 5 remaining projects with `250vh` sticky wrapper.
- Spine track: migrate straight div line to SVG `<path>` with a 14px S-curve kink spanning 80px right at the Projects boundary, drawn with scroll-linked `pathLength`.
- Ensure mobile/tablet under 1280px (`xl:hidden`) continues rendering the standard responsive grid.

### What Was Done
1. **About Section Internal Stagger (`src/app/page.tsx`)**:
   - Swapped outer About container animation to `variants={staggerContainer}`.
   - Wrapped `SectionHeading`, heading icon, paragraph 1, paragraph 2, MSc card, and BSc card in individual `motion.div variants={fadeUp}` blocks for natural sequential entrance.

2. **Experience Line-by-Line Bullet Reveal (`src/app/page.tsx`)**:
   - Swapped `#experience` section animation to `staggerContainer`.
   - Preserved card shell with `motion.div variants={fadeUp}` (header row, VN badge, Details button enter as first unit).
   - Wrapped bullet list in `motion.ul variants={staggerContainer}` and each of the 4 `<li>` items in `motion.li variants={fadeUp}`.
   - Left tags row and certificate link in the card footer inheriting trigger automatically.

3. **Desktop Horizontal Pin-Scroll (`src/components/ui/ProjectsHorizontalScroll.tsx`)**:
   - Created desktop-only component (`hidden xl:block relative`, `height: "250vh"`).
   - Sticky viewport pins on screen while `useScroll` drives `x` transform on the row of cards (`w-[420px] shrink-0`, `gap-8`).
   - Calibrated end transform (`-110vw`) specifically for 5 cards to eliminate trailing dead scroll space.
   - Retained card 3D tilt and modal triggers (`onOpenModal`).

4. **SectionSpine S-Curve SVG Migration (`src/components/ui/SectionSpine.tsx`)**:
   - Added wrapper height measurement (`setTotalHeight(wrapperHeight)`).
   - Generated cubic Bezier `pathD` with `curveSpan = 80` and `bulge = 14` positioned at `nodeOffsets["projects"]`.
   - Converted spine line to SVG `<path>` with `overflow-visible`.
   - Replaced `scaleY` with scroll-linked `pathLength: scrollYProgress` for smooth, undistorted curve drawing.
   - Section indicator dots and hover tooltips retain their exact positions and transition logic.

5. **Responsive Coordination in Projects Section (`src/app/page.tsx`)**:
   - Full-width Flagship banner (PNP CRM) rendered above at all breakpoints.
   - `xl:hidden`: Standard responsive grid displaying the 5 remaining cards.
   - `hidden xl:block`: `<ProjectsHorizontalScroll />` running the pinned horizontal sequence.

### Verification
- `npm run build`: Compiled cleanly in 7.1s with 0 errors (all 4 static routes generated in 674ms).
- `npm run lint`: Exited with code 0 (zero lint warnings or errors).
- Dev server running live on `http://localhost:3054`.

---

## 🔒 Standing Design Rules — Projects Section (2026-09-03)

These rules were established after a design review comparing the portfolio's horizontal card pan against the gsap.com cover-panel scroll pattern. They govern all future work on the Projects section.

### Rule P1 — No Horizontal Card Pan in Projects
The `ProjectsHorizontalScroll` pattern (panning 420px-wide cards left with a sticky `250vh` wrapper) is **deprecated**. It shall not be rebuilt, restored, or used in any other section. The confirmed reasons:
- Cards at fixed `420px` width read as a shopping list, not a showcase.
- Horizontal pan on vertical scroll is unintuitive and disorienting.
- No immersion — the page background bleeds through.

### Rule P2 — Projects Remaining (5 Cards) Must Use Cover-Panel Stack
The 5 remaining projects (`Finteam FaaS`, `Furnish & Florish`, `Print-any-folder`, `VN Code Pro Blog Bot`, `Furniture Management System`) must be displayed using a **full-screen sticky cover-panel stack** — the same mechanic used on gsap.com:
- Each project panel = `100vw × 100vh` (full viewport).
- Panels stack in z-axis. Scrolling reveals each new panel by sliding it up over the previous one.
- Panel height and layout make each project feel like its own world, not a repeating template.
- The scroll mechanic is `position: sticky; top: 0; height: 100vh` on each panel inside a `500vh` wrapper.
- `framer-motion` `useScroll` + `useTransform` drives `y` and `scale` transitions — no GSAP, no new dependencies.

### Rule P3 — Cover Panel Layout Template
Each cover panel must follow this two-column layout on desktop (`lg:`+):
- **Left column (50%):** Category eyebrow badge → Large project title (`text-5xl lg:text-6xl`) → Description → Technology badge row → Action CTAs (`Source Code` + `View Case Study`) → Panel index counter (`01 / 05` in `font-mono text-muted`).
- **Right column (50%):** Project image/media, large format, edge-to-edge with gradient overlay toward the left for text legibility.
- Mobile: single column, image above content.

### Rule P4 — Cover Panels Use the Existing Design Palette
No new colors, fonts, or shadow tokens. Cover panels use:
- `bg-cream-card/95` or `bg-white` for panel backgrounds (subtle variation between panels is allowed).
- `text-navy-DEFAULT` for titles, `text-muted` for descriptions.
- `border-l-4 border-l-navy-DEFAULT` for left accent — from the existing education card pattern.
- `Button` component `variant="outline"` and `variant="primary"` for CTAs — unchanged.
- Transition ease: always `[0.16, 1, 0.3, 1]` (signature curve).

### Rule P5 — Flagship PNP CRM is Exempt From the Panel Stack
`FlagshipProject.tsx` (the PNP CRM full-width showcase with video, counter, and before/after bars) is **not** part of the cover-panel stack. It renders above the stack at all breakpoints, unchanged. The 5-panel stack begins immediately below it.

### Rule P6 — Mobile Fallback Is the Responsive Grid
Below `xl:` (1280px), the cover-panel stack does **not** render. The `xl:hidden` fallback must remain the standard responsive grid (`md:grid-cols-2 lg:grid-cols-3`) — exactly as it exists today. Do not replace the mobile fallback with touch-swipe carousels or any other pattern without a separate user-approved plan.

### Rule P7 — Reduced Motion Compliance
The cover-panel stack must degrade gracefully under `prefers-reduced-motion`. With `MotionConfig reducedMotion="user"` already wrapping the root layout, `y` panel transitions must collapse to `opacity`-only fades at most — no large spatial movement for users who've requested reduced motion.

---

## Session: SectionSpine Straightening & Dot Layering Alignment (2026-09-14)

### User Request
1. Straighten the SectionSpine line by removing the S-curve bump.
2. Add resume download capability using `C:\Document\Manav_Surani_Resume.pdf`.
3. In Technology Stack & Tooling and Professional Work & Internships sections, the SectionSpine dot is partially hidden/sunken under the container background (Images 1 & 2); make them fully visible on top of the container backgrounds exactly like Featured Projects (Image 3).

### What Was Diagnosed
- In `<section id="skills">`, `className="... relative"` combined with `bg-cream-card/60` caused the skills container to paint over earlier positioned DOM elements without an explicit `z-index`.
- `SectionSpine.tsx` root container and dot nodes had `position: absolute` with no explicit `z-index` (`z-index: auto`).
- As a result:
  - At the top of Skills: the bottom half of the Skills dot was submerged under the Skills container background.
  - At the bottom of Skills: the top half of the Experience dot was submerged under the Skills container background.
  - In Featured Projects: the section is `position: static` without `relative`, so the `absolute` spine naturally rendered above it.

### Planned Resolution
- Phase 1: Elevate `SectionSpine.tsx` root container to `z-20`, dot nodes to `z-20`, and hover tooltips to `z-30`.
- Phase 2: Remove redundant `relative` class from `<section id="skills">` in `page.tsx` for consistent `position: static` section containers.
- Phase 3: Run TypeScript, lint, and build verification gates.

---

## Session: Hero Spacing Below CGPA & Background Shadow Animation Fix (2026-09-14)

### User Request
1. Fix lack of space below the CGPA stats row in the Hero section.
2. Remove the dark/black shadow animation in the background that does not look correct.

### What Was Diagnosed
1. **Lack of Space Below CGPA:**
   - `<section id="hero">` had `min-h-[85vh] flex items-center` with zero bottom padding (`pb-0`).
   - With the addition of "Download Resume" in the buttons row, the stats row was pushed down against the bottom edge of the Hero section.
   - The About dot on SectionSpine starts at `top: 0` immediately below Hero, giving almost zero breathing room.
2. **Black Shadow Animation in Background:**
   - The ambient cursor glow (`glowBackground`) used `rgba(27,42,74,0.06)` in a 600px radial gradient following mouse movement. On a light cream background (`#F6F3EE`), this produced moving dark grey/black smoky smudges.

### Planned Resolution
- Phase 1: Remove the dark ambient cursor glow animation (`glowBackground`, `glowX`, `glowY`, `onMouseMove`, `onMouseLeave`) from `page.tsx`.
- Phase 2: Add responsive bottom padding (`pb-20 md:pb-28 lg:pb-32`) to `<section id="hero">` for generous breathing room below the stats counter.
- Phase 3: Run validation suite (`tsc`, `lint`, `build`).



