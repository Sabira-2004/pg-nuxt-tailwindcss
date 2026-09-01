# AGENTS.md

## Start here

- Read `README.md` before editing. It is the canonical guide for setup, the project stack, commands, and coding style.
- Read `AI_AGENT_REVIEW.md` for repository-specific lessons from previous agent work.
- Inspect current working-tree changes first and preserve unrelated user changes.

## Stack and conventions

- Use Nuxt 3 and Vue single-file components with the Composition API and `<script setup>`. Follow the existing auto-imports, component structure, and `tsconfig` settings.
- Use the existing Pinegrow/Nuxt/Tailwind integration and shared components. Prefer existing buttons, icons, navigation, layouts, links, composables, and helpers before creating replacements.
- Do not add a framework or dependency unless the task requires it; update the relevant package/configuration and documentation when one is added.

## Styling and design system

- Use Tailwind utilities and the palette, fonts, and backgrounds from `themes/pg-tailwindcss/tokens.mjs`. Keep the matching `tokens.cjs` representation in sync, or regenerate both when tokens change.
- Reuse theme tokens instead of introducing repeated or arbitrary raw hex/rgba values. Preserve the class-based dark-mode behavior.
- Keep route-specific styling in page components. When shared layout, navigation, footer, layer components, or tokens change, check every route—including Quick Start and Subscribe—for visual and functional consistency.
- Use the existing image handling (`@nuxt/image` and `useOptimizeImage`) and local/public assets where practical. For remote assets, verify loading, sizing, alt text, and production behavior.

## Validation

- Use the package scripts as the source of truth. Run targeted lint/format checks while iterating and the relevant full checks (`npm run lint`, `npm run build`, and `npm run generate`) before handoff.
- Validate builds with the Node version declared in `netlify.toml` (Node 20.14.0). Report runtime/environment failures separately from source failures.
- For UI changes, check desktop and mobile layouts, key interactions, image loading, basic accessibility, and browser console/hydration warnings in the dev preview.
- Avoid destructive Git commands; never reset, discard, or overwrite unrelated user changes.
