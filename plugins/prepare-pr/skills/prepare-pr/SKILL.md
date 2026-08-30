---
name: prepare-pr
description: Inspect the current branch and Git changes, then prepare a concise, professional pull request description covering what changed, why, key implementation decisions, validation, and before/after differences.
---

# Prepare PR

Prepare a pull request description from the repository state. This skill is read-only: do not edit files, commit changes, push branches, open a pull request, or claim validation that was not performed.

## Inspect

1. Identify the current branch with `git branch --show-current`.
2. Check the working tree with `git status --short`.
3. Review both unstaged and staged changes with `git diff` and `git diff --cached`, including their stat summaries.
4. If a base branch is known from the task or repository context, inspect the committed range from that base to `HEAD`; otherwise use recent history and the available working-tree diffs without inventing a base.
5. Read the changed files and nearby tests, documentation, configuration, and shared components needed to understand intent and project conventions.
6. Record only validation that is evidenced by the current task context or by commands you run. Treat missing, failing, or skipped checks as such.

If there are no relevant changes, say that clearly instead of fabricating a description.

## Write

Return only a polished PR description using this structure:

```md
## Summary

- What changed.

## Why

- The problem, goal, or user value behind the change.

## Key implementation decisions

- Important technical or design choices and their rationale.

## Validation

- Checks that passed, failed, or were not run.

## Before / after

- Before: relevant existing behavior or limitation.
- After: resulting behavior or improvement.
```

Keep it specific to the inspected changes, concise enough for a pull request, and honest about uncertainty. Mention notable risks or follow-up work only when the diffs support them.
