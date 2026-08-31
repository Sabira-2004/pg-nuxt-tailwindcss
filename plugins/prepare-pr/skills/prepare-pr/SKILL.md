---
name: prepare-pr
description: Inspect the current Git branch and its staged, unstaged, and untracked changes, then draft a professional pull request description. Use when asked to prepare or write PR copy; do not create, publish, or modify a pull request.
---

# Prepare a pull request description

Do not modify the working tree. Read the repository's `AGENTS.md` and `README.md`, then inspect relevant package scripts, configuration, and changed files for local conventions and validation expectations.

## Gather evidence

1. Record the current branch and `git status --short`.
2. Determine the comparison base in this order: the branch upstream, the repository's default remote branch, then the nearest usable parent commit. If no base can be established, state the assumption explicitly.
3. Inspect committed branch work against that base with the commit list, changed-file summary, and diff. Also inspect `git diff --cached`, `git diff`, and standard untracked files so staged, unstaged, and new work are all represented.
4. Read the relevant implementation and documentation rather than relying on commit messages alone. Note important design, dependency, compatibility, or scope decisions.
5. Collect validation only from observable evidence such as commands run in the current session, repository scripts, CI results, or documented change notes. Do not claim a check was run when it was not.

Draft the description in this structure:

```markdown
## What changed

- ...

## Why

- ...

## Implementation notes

- ...

## Validation

- ...

## Before / after

- **Before:** ...
- **After:** ...
```

Make before/after statements from the actual base and current files or behavior: describe the previous state, the resulting state, and the user-visible or operational difference. For new work, state that the capability was absent before. Keep every statement specific to observed evidence, explain meaningful implementation choices and outcomes rather than restating file names or raw diffs, and label unavailable validation as `Not run`.

Return the final description ready to paste into a pull request. Do not commit, push, open a pull request, or alter the working tree unless the user explicitly asks.
