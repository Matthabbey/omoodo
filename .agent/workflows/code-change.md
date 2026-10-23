# Code change workflow

Use this workflow for every implementation task, including features,
refactoring, and maintenance. Follow the root [`AGENTS.md`](../../AGENTS.md)
throughout.

## 1. Discover

- Read relevant repository guidance and inspect the current worktree before
  editing. Preserve existing user changes.
- Identify the owning feature or module, nearby implementation patterns,
  related tests, and relevant project configuration.
- Search for existing components, hooks, types, utilities, constants, and API
  clients before introducing new ones.
- Confirm that any referenced documentation, scripts, and file-size limits
  exist before treating them as requirements.
- Keep every authored or modified source file, including tests, at 200
  physical lines or fewer; blank lines count. Generated, vendored, and lock
  files are excluded. Divide implementations along clear responsibility
  boundaries; do not pad, minify, or arbitrarily fragment code to meet the
  limit.

## 2. Implement

- Make the smallest cohesive change that fully addresses the task.
- Keep responsibilities and state in their established owners; avoid parallel
  sources of truth.
- Place type declarations and named feature/configuration constants in the
  established `types/` and `constants/` folders or dedicated files, following
  the existing feature organization rather than defining them in component or
  route implementation files.
- Do not use `any` in TypeScript, including implicit `any`. Prefer precise
  types, generics, and validated `unknown` values.
- Preserve public interfaces and unrelated behavior unless the task requires a
  change.
- Add or update focused tests for changed behavior when the project has
  appropriate test infrastructure.
- Update directly related documentation when behavior or usage changes.

## 3. Verify and hand off

- Run the most relevant focused tests and checks available in the project.
- Run additional required checks documented by the repository when relevant.
- Inspect the diff for correctness, scope, formatting, and accidental changes.
- Check changed source files against the 200-line limit and verify that new or
  changed TypeScript does not introduce `any`.
- Report changed areas, checks actually run and their results, and any known
  gaps. Do not claim unrun checks.
