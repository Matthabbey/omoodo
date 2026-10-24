# Shared agent guidance

`/AGENTS.md` is the repository-wide entry point and mandatory policy for every
agent. This directory contains the canonical, reusable instructions referenced
by that policy.

## Structure

```text
.agent/
├── README.md
├── skills/
│   ├── nextjs-standards/
│   │   └── SKILL.md
│   └── omoodo-theme-standards/
│       └── SKILL.md
└── workflows/
    ├── bug-fix.md
    ├── code-change.md
    └── ui-change.md
```

- `skills/` contains focused standards for a specific area, including Next.js
  engineering and the Omoodo frontend theme based on the visual references in
  `app_scheme_images/`.
- `workflows/` contains short, repeatable checklists for common kinds of work.
- Keep repository-wide policy in the root `AGENTS.md`; avoid duplicating it in
  skills, workflows, or tool-specific agent files.

## Component architecture

- `src/components/ui/` contains canonical, theme-compliant base UI primitives
  (`Button`, `Badge`, `Input`, `Select`, `index.ts`).
- `src/lib/utils.ts` provides the shared `cn` class utility.
- All new components, feature sections, and page updates must consume base
  primitives from `src/components/ui/` rather than introducing ad-hoc button
  variants or unstyled native form elements.

## How to maintain this guidance

- Update the canonical document when a standard changes; update its links and
  related workflows in the same change.
- Keep instructions actionable, concise, and independent of a specific agent
  vendor or tool.
- Reference project documents, scripts, and paths only when they exist, and
  state when a check is conditional.
- Add new skills or workflows only for reusable guidance. Index them in the
  root `AGENTS.md` so all agents can discover when they apply.
- If a tool requires its own agent file, use it only as a thin adapter that
  points to `/AGENTS.md` and the relevant shared guidance.
