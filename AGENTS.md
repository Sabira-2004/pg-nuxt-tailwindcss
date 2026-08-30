# Repository guidance for AI coding agents

## Start here

- Read `README.md` for the canonical project overview, setup, stack, coding style, and common commands. Read `package.json`, `nuxt.config.ts`, `app/site.ts`, and the relevant route/components before editing.
- Treat the existing codebase and `AI_AGENT_REVIEW.md` as constraints, not just examples. Keep changes focused and preserve unrelated user work.

## Stack and structure

- This is a Nuxt 3/Vue project using TypeScript, Composition API, and Vue SFCs with `<script setup>`. Keep that style consistent; strict TypeScript is intentionally disabled.
- Application code lives in `app/`. The `app-nuxt-tailwindcss-layer/` directory is a Nuxt layer containing shared navigation, branding, footer, and related composables. Changes there affect every route.
- Pinegrow/Vue Designer compatibility is a requirement. Preserve visually editable SFC structure and reuse existing abstractions such as `BaseButton`, `BaseIcon`, `BackgroundImageWrapper`, and `useOptimizeImage` before adding new patterns.
- Use the dependencies already provided by Nuxt, Tailwind, UnoCSS/Iconify, Nuxt Image, Nuxt Content, and the Pinegrow modules. Do not add a dependency when an existing package or local abstraction covers the need.

## Styling and design

- Use Tailwind utilities and the semantic palettes in `themes/pg-tailwindcss/tokens.mjs` as the design source of truth. Keep the generated `tokens.cjs` mirror synchronized when theme tokens change.
- Do not scatter arbitrary hex colors or introduce a parallel styling system in components. Use existing semantic colors, responsive utilities, and the established light/dark mode approach; reserve component CSS for behavior Tailwind cannot express.
- Keep utility classes statically discoverable by Tailwind’s content scan. Avoid hiding important classes in runtime-generated strings unless the required classes are safely safelisted.
- When changing a palette, typography system, shared shell, or design token, inspect every route and shared consumer (`/`, `/quick-start`, `/subscribe`, and error states) in responsive, light, and dark modes so all pages stay visually in sync.

## Components, content, and assets

- Prefer the existing component and composable patterns over duplicating markup. Keep shared navigation, footer, theme controls, metadata, and route links stable unless the task explicitly requires a cross-route change.
- Preserve the page’s purpose, existing links, and authoritative product wording. Put site metadata and navigation in `app/site.ts`; use README and official Vue Designer/Pinegrow sources for product claims.
- For images, prefer local assets or explicitly configured remote sources and use Nuxt Image/the existing `useOptimizeImage` flow. Provide meaningful alt text and consider loading, placeholder, and fallback behavior.
- Avoid changing or deleting generated/design-tool files without understanding their source of truth. Do not introduce new visual assets or dependencies merely to work around existing project patterns.

## Scope and validation

- Before editing, identify whether a change is route-local or shared. Keep homepage work in the homepage components by default; if shared files change, verify all affected routes and document the reason.
- Use the exact scripts in `package.json` as the command authority. Note that `npm run lint` auto-fixes and formats; use targeted `npx eslint --no-fix ...` and `npx prettier --check ...` when a read-only check is needed.
- For meaningful changes, run the relevant documented checks: lint/format, `npm run build`, and `npm run generate` when static output is affected. Smoke-test affected routes, responsive breakpoints, keyboard/accessible states, and both color modes.
- Do not declare the work complete with a known build, prerender, accessibility, or visual failure. Fix it or report the exact failing stage, impact, and any limitation.
