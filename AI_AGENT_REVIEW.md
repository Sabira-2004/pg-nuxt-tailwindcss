# AI Agent Review

Review basis: the homepage redesign in commit `83d8713` was compared with the repository README, package configuration, theme tokens, and existing component patterns. The redesign is being restored to its pre-redesign state; this review is the durable guidance that should inform a future `AGENTS.md`.

## Findings

1. **The theme source was not treated as the source of truth.** The redesign added many arbitrary hex colors directly in Vue classes and replaced the generated `primary`, `secondary`, and `tertiary` palettes without syncing the rest of the application. This risks inconsistent light/dark states and pages that no longer match the design system.

   **Durable rule:** Use the Tailwind palettes from `themes/pg-tailwindcss/tokens.mjs` and the existing semantic color names. If the theme changes, review every route and shared component in both light and dark mode. Avoid one-off hex values in templates unless a documented exception is necessary.

2. **Existing image and component conventions were bypassed.** The original hero uses `hero.ts`, `BackgroundImageWrapper`, and `useOptimizeImage`; the redesign replaced that flow with a raw remote `<img>`. That loses the repository’s Nuxt Image optimization/fallback path and makes the external asset a runtime dependency.

   **Durable rule:** Reuse existing wrappers and composables first. For new images, use Nuxt Image or the established optimization helper, provide meaningful alt text, and prefer a checked-in/local asset or an explicitly configured remote source.

3. **The change scope expanded from the homepage into shared UI.** Navigation, logo, footer, layout, dark-mode controls, and global tokens were changed together with the homepage. That can unintentionally regress `/quick-start`, `/subscribe`, error pages, or Vue Designer’s visual editing workflow.

   **Durable rule:** Keep homepage work in `app/pages/index.vue` and its page components by default. When a shared component or token must change, inspect all routes that consume it and verify that all pages remain visually and functionally consistent.

4. **The Pinegrow/Vue Designer design workflow was not preserved.** The repository intentionally uses `@pinegrow/nuxt-module`, `@pinegrow/tailwindcss-plugin`, `BaseButton`, `BaseIcon`, and visually editable Vue SFCs. Large amounts of new inline markup and dynamically selected utility classes were introduced without checking how Vue Designer and Tailwind scanning handle them.

   **Durable rule:** Follow the existing `<script setup>` Composition API pattern, reuse `BaseButton`, `BaseIcon`, and shared layout components, keep utility classes statically discoverable, and avoid patterns that make components harder to edit in Vue Designer.

5. **The README and existing metadata were not used consistently.** The project documentation already defines the stack, coding style, available modules, and validation commands. The original homepage metadata also contained stale copy that should be corrected deliberately, not silently replaced while redesigning unrelated content.

   **Durable rule:** Read `README.md`, `package.json`, `app/site.ts`, and the relevant route/components before editing. Preserve the page’s purpose and existing links; separate intentional copy updates from visual changes and use authoritative Vue Designer/Pinegrow wording for product claims.

6. **Validation was incomplete.** Targeted lint/format checks and a development response check passed, but `npm run build` still failed during the `netlify-static` prerender step with `Unexpected token 'default'`. A known build failure should not be treated as a finished validation result.

   **Durable rule:** Run the repository’s documented checks (`npm run lint`, `npm run build`, and, when relevant, `npm run generate`) after changes. Smoke-test every affected route, check both color modes and responsive breakpoints, and either fix failures or report them explicitly with their stage and impact.

## Recommended repository-wide rules for a future `AGENTS.md`

- Read `README.md`, `package.json`, and the relevant existing components before changing code.
- Keep Nuxt 3/Vue SFC work in Composition API with `<script setup>` and TypeScript conventions already used here.
- Prefer Tailwind utilities and the palettes in `themes/pg-tailwindcss/tokens.mjs`; do not introduce a parallel styling system or scattered hard-coded colors.
- Reuse `BaseButton`, `BaseIcon`, `BackgroundImageWrapper`, `useOptimizeImage`, and other existing abstractions before adding new ones.
- Treat Pinegrow/Vue Designer compatibility and visually editable SFC structure as a requirement.
- Keep shared shell changes deliberate and verify every page, responsive breakpoint, and light/dark state they affect.
- Do not add dependencies when the existing Nuxt, Tailwind, UnoCSS/Iconify, Nuxt Image, and Pinegrow modules cover the need.
- Finish with the documented validation commands and clearly report any unresolved build, prerender, accessibility, or visual issues.

No `AGENTS.md` was created as requested.
