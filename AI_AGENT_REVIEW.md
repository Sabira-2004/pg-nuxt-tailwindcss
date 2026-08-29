# AI agent review: durable repository guidance

## Findings from the homepage redesign

- The redesign used many arbitrary Tailwind colors (`[#...]`) and a new dark/green visual system instead of the Pinegrow-managed `primary`, `secondary`, `tertiary`, `neutral`, and background tokens in `themes/pg-tailwindcss/tokens.mjs`. This breaks the design-panel source of truth and left the homepage visually out of step with Quick Start and Subscribe.
- It changed the shared layer's navigation, logo, footer, global layout, site metadata, and OG-card defaults while the request was only for the homepage. Those components affect every route, but the other routes were not designed or reviewed as a coordinated set.
- It recreated a product illustration in markup instead of first deciding whether the supplied assets, Nuxt Image setup, and `BackgroundImageWrapper`/`useOptimizeImage` conventions should be reused.
- It mixed project patterns: existing sections use the supplied semantic components, `BaseButton`, `BaseIcon`, UnoCSS icon names, and the theme palette; the redesign added a second, page-local visual language and hard-coded visual values.
- Validation was incomplete as a repository practice. The README documents `npm run dev`, `npm run build`, `npm run generate`, preview, analysis, and Lighthouse. A baseline build/generate result was not captured before edits, and every affected route was not checked. The final build's prerender failure should be investigated separately rather than attributed to a page redesign without a baseline.

## Recommended durable rules for a future `AGENTS.md`

1. Read `README.md`, `nuxt.config.ts`, `tailwind.config.ts`, `themes/pg-tailwindcss/tokens.mjs`, and the relevant route/component files before changing UI.
2. Treat `themes/pg-tailwindcss/tokens.mjs` and `tailwind.config.ts` as the visual source of truth. Use Tailwind theme palettes (`primary-*`, `secondary-*`, `tertiary-*`, `neutral-*`, semantic palettes) and configured background tokens. Do not add arbitrary hex color utilities unless the user explicitly approves a token-system update.
3. Preserve the Vue Designer/Pinegrow conventions: Composition API with `<script setup>`, Tailwind utilities, `BaseButton`, `BaseIcon`, UnoCSS `i-*` icon names, `useOptimizeImage`, and existing Nuxt Image configuration. Do not add dependencies without approval.
4. Scope changes to the requested route by default. Before editing `app-nuxt-tailwindcss-layer`, layouts, `app/site.ts`, global CSS, SEO/OG components, or tokens, identify every route affected and either update and review them together or request permission.
5. Keep all routes visually coherent. When a shared shell or palette changes, review Home, Quick Start, Subscribe, error states, light mode, dark mode, desktop, and mobile before considering the work complete.
6. Preserve existing links, metadata, accessibility labels, external-link behavior, and image handling unless a change is explicitly required.
7. Start with a clean-status check and capture baseline validation before edits. After changes, run the documented checks proportionate to scope: `npm run build`, `npm run generate` for static output, the relevant lint/format checks, and local browser checks for affected routes and responsive states. Report existing failures separately from introduced failures.
8. Avoid opportunistic fixes outside the request. If an unrelated issue is found, document it and ask before changing it.
