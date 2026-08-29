# Repository guide for coding agents

## Start here

- Read [README.md](README.md) for setup, available scripts, and project capabilities. Before UI work, also read `nuxt.config.ts`, `tailwind.config.ts`, `themes/pg-tailwindcss/tokens.mjs`, and the route and components you will change.
- This is a Nuxt 3 / Vue 3 project designed for Vue Designer and Pinegrow. Keep the existing module configuration, layer structure, and file-based routing intact unless the task explicitly requires a coordinated change.

## Implementation conventions

- Use Vue Composition API with `<script setup>`, Tailwind utilities, and the project's existing semantic components and composables (including `BaseButton`, `BaseIcon`, `useOptimizeImage`, and `NuxtImg`) where applicable.
- Use UnoCSS icon names with the `i-` prefix. Do not introduce a competing icon approach or dependencies without approval.
- Treat `themes/pg-tailwindcss/tokens.mjs` and `tailwind.config.ts` as the visual source of truth. Use configured Tailwind palettes (such as `primary-*`, `secondary-*`, `tertiary-*`, and `neutral-*`) and background tokens; do not add arbitrary hex color utilities unless updating the token system is explicitly in scope.
- Preserve existing image handling, links, metadata, accessibility labels, and external-link behavior unless the task calls for a change.

## Scope and visual consistency

- Keep changes scoped to the requested route by default. Editing the shared layer, layouts, global CSS, site metadata, OG components, or design tokens affects multiple routes; identify and review the affected pages first, and seek direction if the wider change is not clearly requested.
- When shared UI or palette changes are in scope, keep Home, Quick Start, Subscribe, error states, light/dark mode, and desktop/mobile views visually coherent.
- Do not make unrelated opportunistic fixes. Record them separately and ask before changing them.

## Validation

- Begin with a clean-status check and capture relevant baseline behavior before changes.
- Run the checks appropriate to the scope, using the scripts documented in the README: formatting/linting, `npm run build`, and `npm run generate` for static output when relevant. Review affected routes in a browser at desktop and mobile widths.
- Report validation performed and distinguish pre-existing failures from changes introduced by the work.
