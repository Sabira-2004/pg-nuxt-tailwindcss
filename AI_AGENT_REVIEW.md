# AI agent review

## Summary

The redesign improved the homepage direction, but the repository would benefit
from a small set of durable rules. The biggest risks were scope drift into
shared components, theme-token inconsistency, and validation under an
unsupported local runtime.

## Findings and recommended rules

1. **No repository-level agent guidance exists.** `AGENTS.md` is absent, so
   the README is the only durable source for the Nuxt, Vue, Tailwind, Pinegrow,
   ESLint, and Prettier conventions.
   **Rule:** Read `README.md` before editing and follow its documented stack,
   Composition API / `<script setup>` style, and validation commands.

2. **The theme has multiple generated representations.** The redesign changed
   `themes/pg-tailwindcss/tokens.mjs` but not the sibling `tokens.cjs`, leaving
   the palette out of sync for tools that consume the CommonJS file.
   **Rule:** Treat Pinegrow theme tokens as the source of truth and update or
   regenerate every supported representation together.

3. **Styling did not consistently use the project palette.** The redesign
   introduced arbitrary hex, rgba, and gradient values in templates even though
   the project already provides Tailwind/Pinegrow theme palettes.
   **Rule:** Prefer `primary`, `secondary`, `tertiary`, and neutral Tailwind
   utilities; add a token before adding a repeated raw color.

4. **A homepage task changed shared surfaces without an all-route review.** The
   changes touched the default layout, navigation, logo, footer, theme switch,
   site metadata, and theme tokens. Those changes also affect Quick Start and
   Subscribe pages, but only the homepage was visually reviewed.
   **Rule:** Keep page-specific work in page components. When shared files or
   tokens change, inspect every route and verify that the design remains
   coherent and functional.

5. **The asset path bypassed existing image conventions.** The hero used a
   remote URL directly in a plain `<img>` even though Nuxt Image and the local
   `useOptimizeImage` helper are part of the documented stack.
   **Rule:** Prefer approved local/public assets or the existing image helper;
   if a remote asset is required, document the dependency and verify loading,
   sizing, accessibility text, and production behavior.

6. **Validation was narrower than the repository workflow.** Targeted linting
   and browser checks passed, but the project build was not clean in this
   workspace: client/server compilation completed, then Nuxt/Nitro static
   prerender failed while loading `cache-driver.js`. `netlify.toml` targets
   Node 20, while the workspace used Node 26.
   **Rule:** Run the repository's documented build/generate command using the
   supported Node version. Report environment failures separately from source
   failures and do not call the implementation fully validated until the
   relevant command passes.

7. **Browser console state should be part of visual QA.** Theme preference
   handling initially produced hydration mismatch warnings during the redesign;
   this was fixed with a client-only theme icon, but it was found late.
   **Rule:** Check browser console errors and hydration warnings after SSR
   changes, alongside desktop/mobile screenshots and key interactions.

