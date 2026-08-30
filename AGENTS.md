# Repository guidance for AI coding agents

These rules apply repository-wide. Use `README.md` as the canonical source for setup, the project overview, the full dependency list, and standard usage. Read `AI_AGENT_REVIEW.md` for the rationale behind the rules below.

## Before editing

- Inspect `README.md`, `package.json`, `nuxt.config.ts`, `app/site.ts`, and the relevant route/components before making changes.
- Identify whether the task is route-local or shared. Keep unrelated user changes and existing content/links intact.

## Stack and conventions

- This is a Nuxt 3/Vue application using TypeScript, Composition API, and Vue SFCs with `<script setup>`. Keep strict TypeScript disabled unless the task explicitly requires a scoped change.
- Application code lives in `app/`. `app-nuxt-tailwindcss-layer/` is an extended Nuxt layer containing shared navigation, branding, footer, and composables; changes there affect every route.
- Preserve Pinegrow/Vue Designer compatibility and visually editable SFC structure. Prefer existing abstractions such as `BaseButton`, `BaseIcon`, `BackgroundImageWrapper`, and `useOptimizeImage`.
- Use existing dependencies and modules (Nuxt, Tailwind, UnoCSS/Iconify, Nuxt Image, Nuxt Content, and Pinegrow tooling) before adding packages.

## Styling and design

- Tailwind utilities and the semantic palettes in `themes/pg-tailwindcss/tokens.mjs` are the design source of truth. Keep the generated `themes/pg-tailwindcss/tokens.cjs` mirror synchronized when tokens change.
- Do not scatter arbitrary hex colors or introduce a parallel styling system in templates. Use semantic palette names, existing typography, responsive utilities, and the established light/dark mode approach. Keep component CSS for behavior Tailwind cannot express.
- Keep important utility classes statically discoverable by Tailwind’s content scan, or add a deliberate safelist entry when runtime class selection is unavoidable.
- If changing theme tokens, typography, shared shell components, or global styles, inspect `/`, `/quick-start`, `/subscribe`, and error states in responsive, light, and dark modes so all pages remain in sync.

## Components, content, and assets

- Keep shared navigation, footer, theme controls, metadata, and route links stable unless a cross-route change is explicitly required.
- Put site metadata and navigation in `app/site.ts`. Preserve the page’s purpose and existing links; use the README and authoritative Vue Designer/Pinegrow sources for product claims.
- For images, prefer checked-in/local assets or explicitly configured remote sources. Use Nuxt Image or the established `useOptimizeImage` flow, provide meaningful alt text, and account for loading, placeholder, and fallback behavior.
- Avoid modifying generated/design-tool files without understanding their source of truth. Preserve Pinegrow-friendly structure and named component patterns.

## Scope and validation

- Keep homepage work in `app/pages/index.vue` and its page components by default. If shared files change, verify every affected route and state and explain why the change is shared.
- Use the actual scripts in `package.json` as the command authority. `npm run lint` auto-fixes and formats; use targeted `npx eslint --no-fix ...` and `npx prettier --check ...` for read-only checks. The available Lighthouse script is `npm run lighthouse`.
- For meaningful changes, run the relevant checks from the README: lint/format, `npm run build`, and `npm run generate` when static output is affected. Smoke-test affected routes, responsive breakpoints, keyboard/accessibility states, and both color modes.
- Do not declare completion with a known build, prerender, accessibility, or visual failure. Fix it or report the exact stage, impact, and limitation.
