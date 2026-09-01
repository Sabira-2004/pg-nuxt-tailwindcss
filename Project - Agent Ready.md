## Project - Agent Ready

### AI-assisted development exercise

**Use Codex with Luna Max throughout.** The goal is to learn how prompts, repository context, durable instructions, reusable skills, Git, and validation improve AI-assisted development.

1. **Commit 1 — Redesign the homepage**

   Start with the existing project and ask Codex to redesign the homepage. Don't give it extra technical guardrails beyond what already exists in the repository.

   **Prompt:**

   > Redesign the homepage to give it a modern, polished and professional look.
   > Keep the existing purpose and general content of the page, but improve its layout, visual hierarchy, typography, spacing and overall user experience.
   > Review the existing project before making changes and implement the redesign directly.
   > Add a real vue designer image in hero section. Use this image for hero section - [https://pinegrow.com/wp-content/uploads/image-120.png](https://pinegrow.com/wp-content/uploads/image-120.png)
   > Give the app refresh set of colours and use documentation from vuedesigner.com

   Review both the visual result and the generated code.

   **Commit:** `Redesign homepage with AI`

2. **Commit 2 — Identify areas for improvement**

   Now ask Codex to critically review what it just produced.

   **Prompt:**

   > Review the homepage implementation you just created and the repository as a whole.
   >
   > Identify issues that could have been prevented if this repository had an `AGENTS.md` containing durable instructions for AI coding agents.
   >
   > Pay particular attention to whether you followed the documented tech stack, existing project conventions, styling approach, component patterns, dependencies and validation practices.
   >
   > Create a concise document called `AI_AGENT_REVIEW.md` containing your findings and recommended durable rules. Do not create `AGENTS.md` yet.
   >
   > Then undo the homepage redesign so the homepage is restored to its original state. Keep the findings document.
   > Ensure you use tailwind theme palettes and all pages are in sync with design. Readme file has all valuable information.

   **Commit:** `Document AI development improvements`

3. **Commit 3 — Agentize the project**

   Turn the lessons from the experiment into durable repository instructions.

   **Prompt:**

   > Create an `AGENTS.md` for this repository.
   >
   > Use the findings from the previous review `AI_AGENT_REVIEW.md`, the README, package configuration and existing codebase to determine the appropriate durable instructions.
   >
   > Keep the rules concise and repository-wide. Do not duplicate the README unnecessarily; reference existing documentation where appropriate.
   >
   > The goal is to help future coding agents consistently follow this project's intended stack, conventions and quality expectations.

   Review `AGENTS.md` yourself. In particular, make sure things such as **Tailwind over unnecessary vanilla CSS** and the actual Nuxt/Vue conventions are now unambiguous.

   **Commit:** `Add AGENTS.md project guidance`

4. **Commit 4 — Redesign the homepage again**

   Now repeat the experiment. **Use exactly the same redesign prompt as Commit 1. Do not improve it.**

   **Prompt:**

   > Redesign the homepage to give it a modern, polished and professional look.
   > Keep the existing purpose and general content of the page, but improve its layout, visual hierarchy, typography, spacing and overall user experience.
   > Review the existing project before making changes and implement the redesign directly.
   > Add a real vue designer image in hero section. Use this image for hero section - [https://pinegrow.com/wp-content/uploads/image-120.png](https://pinegrow.com/wp-content/uploads/image-120.png)
   > Give the app refresh set of colours and use documentation from vuedesigner.com

   Then ask Codex to validate its work:

   **Validation prompt:**

   > Review your implementation against `AGENTS.md`, the repository documentation and existing project conventions.
   >
   > Run the appropriate project validation.
   >
   > Also compare this implementation with the issues documented after the first homepage redesign. Report which earlier problems were avoided, which remain, and whether `AGENTS.md` influenced the implementation as intended.
   >
   > Fix any issues you identify before finishing.

   **Commit:** `Redesign homepage with agent guidance`

5. **Commit 5 — Add an Agent Plugin**

   Follow the [Agent Plugins specification](https://agent-plugins.org/?utm_source=chatgpt.com) and add a small plugin containing a reusable **`prepare-pr` skill**.

   **Prompt:**

   > Follow the Agent Plugins specification at agent-plugins.org and add a simple plugin to this repository.
   >
   > Add a reusable `prepare-pr` skill that can inspect the current branch and its Git changes and prepare a professional pull request description.
   >
   > The PR description should cover:
   >
   > - what changed
   > - why it changed
   > - important implementation decisions
   > - validation performed
   > - relevant before/after differences
   >
   > Keep the plugin and skill small and focused. Do not add unrelated capabilities.

   **Commit:** `Add PR preparation agent plugin`

6. **Create the PR**

   Finally, use the `prepare-pr` skill created in Commit 4.

   **Prompt:**

   > Use the `prepare-pr` skill to prepare a pull request for these changes.
   >
   > The PR should clearly tell the story of:
   > original repository → first AI redesign → problems identified → repository agentization → second AI redesign → validation.
   >
   > Highlight the before/after differences and explain how making the repository agent-ready improved the AI-assisted development process.
