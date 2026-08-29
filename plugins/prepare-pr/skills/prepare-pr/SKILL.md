---
name: prepare-pr
description: Inspect the current Git branch and draft a professional pull request description. Use when asked to prepare or write PR copy; do not create, publish, or modify a pull request.
---

# Prepare a pull request description

Inspect the current branch before writing. Read the repository's `AGENTS.md` and `README.md` for local conventions and validation commands. Identify the comparison base from the branch's upstream or the repository's default branch; if it cannot be determined, state the comparison assumption.

Gather evidence from both committed and uncommitted work as applicable:

- branch and working-tree status;
- commits and changed-file summary against the comparison base;
- relevant diffs, configuration changes, and affected behavior;
- validation that is documented in the Git history, change notes, or current-session evidence.

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

Keep each statement specific to observed evidence. Explain meaningful implementation choices and user-facing or operational differences rather than restating file names or raw diffs. Do not claim validation that was not performed; label unavailable checks as `Not run`. Omit sections that have no relevant evidence only when doing so makes the description clearer.

Return the final description ready to paste into a pull request. Do not commit, push, open a pull request, or alter the working tree unless the user explicitly asks.
