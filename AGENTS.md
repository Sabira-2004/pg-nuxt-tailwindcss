# Repository guide for coding agents

## Orientation

- Read [README.md](README.md) for the project purpose, setup, stack, and available scripts; reference it instead of duplicating those instructions here.
- This is a Nuxt 3 / Vue 3 project for Vue Designer and Pinegrow. Preserve the existing Nuxt modules, `app-nuxt-tailwindcss-layer`, file-based routing, and Vue Designer configuration unless the task explicitly requires a coordinated change.
- Before UI work, inspect `nuxt.config.ts`, `tailwind.config.ts`, `themes/pg-tailwindcss/tokens.mjs`, and the route, layout, and components in scope.

## Stack and conventions

- Use Vue Composition API with `<script setup>`, Tailwind utilities, and the existing primitives/composables such as `BaseButton`, `BaseIcon`, `useOptimizeImage`, and `NuxtImg`.
- Use UnoCSS icon names with the `i-` prefix. Do not add a competing icon system or dependency without explicit scope.
- Treat `themes/pg-tailwindcss/tokens.mjs` and `tailwind.config.ts` as the visual source of truth. Use configured palettes (`primary-*`, `secondary-*`, `tertiary-*`, `neutral-*`, and semantic colors); do not add arbitrary color values in components.
- `tailwind.config.ts` imports `tokens.mjs`; keep `tokens.cjs` synchronized when Pinegrow tooling requires it, and verify parity after token changes.
- Preserve existing image handling, approved remote domains, links, metadata, accessibility labels, and external-link behavior unless the task calls for a change. Use official product sources for new marketing claims.

## Scope and consistency

- Keep changes route-scoped by default. Changes to shared components, layouts, global CSS, site metadata, OG components, or design tokens affect multiple routes and require an explicit reason.
- When shared UI or tokens change, review Home, Quick Start, Subscribe, error states, shared navigation, light/dark mode, and desktop/mobile views for visual and functional consistency.
- Do not make unrelated opportunistic fixes. Note them separately instead of folding them into the requested change.

## Validation and handoff

- Start with `git status --short` and capture relevant baseline behavior/checks before editing, so pre-existing failures are distinguishable from regressions.
- Use the validation scripts documented in `README.md`: run formatting/linting, `npm run build`, and `npm run generate` when relevant. Inspect the result of auto-fixing commands and do not leave unrelated formatting changes.
- Review affected routes in a browser at desktop and mobile widths; for shared changes, exercise the route/theme matrix above. Check image loading, navigation, and console errors where applicable.
- In the final handoff, summarize the files changed, validation performed, and any failures or limitations, clearly identifying failures reproduced from the baseline.
