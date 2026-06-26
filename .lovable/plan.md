## Scope

Implement Section 1B (Our Story page) and Section 2 (Leadership & Legacy, Why We Exist, Publications pages + HEART core values + donation/footer/global polish), plus add the missing nav items.

## New Pages

1. **`src/pages/OurStoryPage.tsx`** (`/our-story`)
   - Hero with headline "Our Story", subheading, intro paragraph, scroll indicator
   - Section 1: "Where It All Began" – 2-column (image left, story right) with the 2010 ₦3,000 narrative
   - Section 2: "A Life Changed" – soft bg, market illustration, akara story, elegant quote box
   - Section 3: "From Compassion to a Calling" – cream bg, single column
   - Section 4: "Building the Vision Together" – intro + grid of 11 founding supporter cards + closing paragraph
   - Section 5: "October 8, 2010" milestone band
   - Section 6: "How Our Name Was Born" – billboard storytelling
   - Section 7: "Sixteen Years of Purpose" – centered impact section
   - Section 8: "Our Story Continues..." closing with 2 CTA buttons (WhatsApp via buildMailto/contact helper)
   - Final centered quote + motto

2. **`src/pages/LeadershipLegacyPage.tsx`** (`/leadership-legacy`)
   - Hero with portrait, headline "Leadership That Inspires Hope"
   - Stat cards: 27+, 16+, 1, Thousands
   - Areas of Impact – 12 icon cards
   - Leadership Philosophy quote block
   - "A Legacy Still Growing" copy
   - CTA: Volunteer Today / Support Our Mission

3. **`src/pages/WhyWeExistPage.tsx`** (`/why-we-exist`)
   - Hero, main copy paragraphs
   - "Our Commitment" – 8 elegant cards
   - Final statement quote + 2 CTAs

4. **`src/pages/PublicationsPage.tsx`** (`/publications`)
   - Hero, featured book showcase ("30 Vital Principles for Success") with cover placeholder
   - Coming Soon / Learn More buttons
   - "Future Publications" placeholder section

5. **`src/pages/VolunteerPage.tsx`** (`/volunteer`)
   - Simple page since "Volunteer" is in nav; reuse SiteLayout + PageHero + CTA to WhatsApp

## Modifications

- **`src/components/Navbar.tsx`**: Add menu items: Our Story, Leadership & Legacy, Why We Exist, Publications, Volunteer, Donate (Donate already as button — keep in menu list too). Compact existing list; given length, may need to reorganize. Will keep dropdown-free flat menu but the bar gets long — keep flat as user explicitly requested all links visible.
- **`src/components/Footer.tsx`**: Update quick links to: Home, About the Founder, Our Story, Leadership & Legacy, Programs, Volunteer, Donate, Contact.
- **`src/components/sections/CoreValues.tsx`**: Replace with HEART values (Honesty, Empathy, Accountability, Responsibility, Transformation) + highlighted banner below.
- **`src/components/sections/Donate.tsx`**: Add emotional opener paragraph + secure giving badge + transparency note.
- **`src/App.tsx`**: Register the 5 new routes.
- **`scripts/generate-sitemap.ts`**: Add new routes.

## Technical Details

- All pages use `SiteLayout` + `Seo` + `PageHero` (or custom hero for Our Story).
- All CTA buttons use existing `buildMailto` helper from `@/lib/contact` for WhatsApp redirect.
- Use existing design tokens — no hardcoded colors. `gradient-royal`, `gradient-gold`, `text-gradient-royal`, primary/accent semantic tokens.
- Reuse `useReveal` hook for scroll animations.
- Founder portrait: reuse existing leadership image (`team-judith` or similar).
- Founding-supporter cards: name + soft initials avatar (no photos provided).
- Book cover: placeholder gradient card with title.
- SEO: unique title/description per page; canonical via `Seo` component.

## Out of Scope

- No new image generation (use existing assets + initials/illustration placeholders).
- Existing pages (Founder, Team, Programs, etc.) untouched unless listed above.
- Performance/accessibility audit pass is incremental (alt text, headings) — no global refactor.
