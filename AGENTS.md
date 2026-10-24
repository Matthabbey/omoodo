# Agent operating standards

These standards apply to every agent working in this repository. Read this file
before making changes, then use the relevant shared guidance under `.agent/`.

## Principles

- Understand the existing code, conventions, and working-tree changes before
  editing. Preserve user work and unrelated changes.
- Make the smallest cohesive change that fully solves the requested problem.
  Avoid speculative features and unrelated refactors.
- Search for existing components, utilities, types, and patterns before adding
  new ones. Keep each behavior and piece of state under one clear owner.
- Keep every authored or modified source-code file, including tests, at 200
  physical lines or fewer (blank lines count; generated, vendored, and lock
  files are excluded). Split larger files by responsibility rather than
  compressing code or making arbitrary fragments. If a task changes an
  over-limit legacy file, leave the changed code organized within the limit;
  avoid unrelated refactors solely to reduce untouched legacy files.
- Never use TypeScript `any`, explicitly or implicitly. Use accurate types,
  generics, or `unknown` with validation and narrowing at untrusted boundaries.
- Put type declarations in the established `types/` folder or a dedicated
  `types` file, not in component or route implementation files. Put named
  feature constants and shared configuration constants in the established
  `constants/` folder or a dedicated `constants` file. Follow existing
  feature-level organization and avoid duplicating definitions.
- Preserve existing contracts and behavior unless the request explicitly
  requires a change.
- Surface errors clearly. Do not hide failures behind broad catches, silent
  fallbacks, or success-shaped responses.
- Keep documentation and tests aligned with behavior changes.
- Do not add secrets, credentials, or sensitive user data to the repository.

## Required workflow

1. Read the relevant project instructions and inspect the files and nearby
   patterns involved in the task. Check that referenced documents and scripts
   actually exist before relying on them.
2. For code changes, follow
   [`.agent/workflows/code-change.md`](.agent/workflows/code-change.md).
3. For bug fixes, follow
   [`.agent/workflows/bug-fix.md`](.agent/workflows/bug-fix.md) as well.
4. For UI changes, read
   [`.agent/skills/omoodo-theme-standards/SKILL.md`](.agent/skills/omoodo-theme-standards/SKILL.md)
   and follow [`.agent/workflows/ui-change.md`](.agent/workflows/ui-change.md).
5. For Next.js implementation or review tasks, also read
   [`.agent/skills/nextjs-standards/SKILL.md`](.agent/skills/nextjs-standards/SKILL.md).
6. Use the repository's established package manager, test runner, formatter,
   linter, and build commands. Choose focused checks first; do not claim checks
   that were not run.
7. Review the final diff for scope, consistency, and accidental changes.
8. Report what changed, the checks run and their results, and any remaining
   limitations.

## UI and theme requirements

- Use [`app_scheme_images/`](app_scheme_images/) as Omoodo's visual reference.
  For UI work, read
  [`.agent/skills/omoodo-theme-standards/SKILL.md`](.agent/skills/omoodo-theme-standards/SKILL.md)
  before designing or implementing the feature.
- Every UI implementation must follow Omoodo's documented theme and UI
  structure. Reuse the established tokens, components, and feature patterns;
  do not invent a separate visual system or bypass the reference guidance.
- Centralize all reusable base UI primitives in `src/components/ui/` (e.g.
  `Button`, `Badge`, `Input`, `Select`, `index.ts`). All updates and new
  components must consume these canonical base primitives rather than
  introducing ad-hoc buttons, raw unstyled inputs, or native select elements.
- Treat the established design system as the source of truth for colors,
  typography, spacing, radii, elevation, and component states.
- Prefer semantic theme tokens and shared UI components over literal values,
  one-off styling, or duplicated component behavior.
- Do not introduce raw color values, arbitrary color utilities, or inline
  colors. Do not bypass the project's theme or dark-mode conventions.
- If a needed token or component does not exist, follow the project's
  established extension pattern in `src/components/ui/` or `globals.css` and
  keep the addition reusable. Do not invent parallel theme systems.
- Keep visual behavior accessible and responsive; account for keyboard use,
  focus, labels, contrast, and relevant loading, empty, error, disabled, and
  success states.

## Scope and conflicts

The user's explicit task determines the requested outcome; these standards
govern how to deliver it. When repository instructions conflict or a required
design decision is unclear, resolve it using the project's documented
conventions where possible, otherwise ask before making a consequential
assumption.
