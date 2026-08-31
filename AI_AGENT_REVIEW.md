# AI Agent Review

## Scope

This review covers the homepage redesign in the latest commit and the repository conventions described by `README.md`, `AGENTS.md`, `nuxt.config.ts`, `tailwind.config.ts`, and the Pinegrow theme tokens. The repository already contains an `AGENTS.md`; no changes were made to it.

## Findings

1. **A homepage request expanded into a global theme change.** The redesign changed `themes/pg-tailwindcss/tokens.mjs` and its CommonJS mirror even though the requested surface was the homepage. Those tokens are consumed by the whole app, so Quick Start, Subscribe, error states, shared navigation, and both color modes could change unintentionally.

   **Durable rule:** Keep route work scoped to the requested page. Treat token, layout, shared-layer, and metadata changes as coordinated work that requires an explicit reason and a review of every affected route and theme mode.

2. **Theme-token synchronization needs an explicit workflow.** `tailwind.config.ts` imports `tokens.mjs`, while `tokens.cjs` is a companion file used by the Pinegrow workflow. Editing both by hand without a parity check can leave the runtime, visual editor, and generated styles out of sync.

   **Durable rule:** Use `tokens.mjs` as the source of truth, update companion token files only when required by the project tooling, and verify that the two files agree before finishing. Use only configured Tailwind palettes in components; do not add one-off color values.

3. **Validation was narrower than the README’s project workflow.** The redesign passed targeted formatting/lint checks and local browser checks, but the documented production commands still failed during Nuxt Nitro prerender initialization with the cache-driver / `Unexpected token 'default'` error. A clean baseline build and generate run had not been captured before the redesign, making it harder to prove that this failure was pre-existing.

   **Durable rule:** Before edits, record clean status and baseline behavior for the relevant checks. After edits, run the README commands (`npm run lint`, `npm run build`, and `npm run generate` when applicable), and report failures with whether they reproduce on the baseline.

4. **Cross-route visual verification was incomplete for a shared palette change.** Desktop/mobile homepage checks and a Quick Start sanity check were performed, but Subscribe, error states, shared navigation, and both light/dark modes were not all reviewed after the token change.

   **Durable rule:** When shared styles or tokens change, use a route matrix covering Home, Quick Start, Subscribe, error states, desktop/mobile widths, and light/dark mode. A homepage-only change still needs regression checks for any shared component it touches.

5. **The implementation did follow most established project conventions.** It stayed within Nuxt/Vue, used `<script setup>`, Tailwind utilities, `BaseButton`, `BaseIcon`, `useOptimizeImage`, and UnoCSS `i-` icons, added no dependencies, and preserved the existing external image configuration and links. These conventions should remain explicit so future agents do not replace them with ad hoc UI or a competing icon/image approach.

6. **Product copy should remain source-backed.** The redesign used Vue Designer’s official messaging around Vite projects, Nuxt/meta-framework support, live data, component trees, component libraries, standard `.vue` files, and no lock-in. That is appropriate, but durable instructions should require official product documentation for marketing claims and preserve existing metadata, accessibility text, link targets, and external-link behavior unless the request explicitly changes them.

## Recommended agent rules

- Read `README.md`, `AGENTS.md`, `nuxt.config.ts`, `tailwind.config.ts`, the theme tokens, and all files in the requested route before editing.
- Prefer existing components, composables, configured Tailwind palettes, and UnoCSS icons; do not add dependencies or arbitrary colors without explicit scope.
- Keep changes route-scoped by default. If shared tokens or components are changed, review all affected routes and color modes.
- Preserve image handling, metadata, accessibility labels, links, and external-link behavior unless explicitly asked to change them.
- Capture baseline status/checks before edits, run the README validation commands after edits, and distinguish pre-existing failures from regressions.
- Verify UI at desktop and mobile widths and inspect the actual rendered page, not only the source diff.
