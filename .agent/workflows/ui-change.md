# UI change workflow

Use this for changes to pages, components, styles, charts, forms, icons, and
other user-facing interfaces. Follow the root [`AGENTS.md`](../../AGENTS.md)
and the [`omoodo-theme-standards` skill](../skills/omoodo-theme-standards/SKILL.md).

1. Read any existing theme or design-system documentation that applies to the
   changed area. Verify referenced paths exist.
2. Search for shared UI components and nearby feature patterns before creating
   or styling a new component.
3. Follow the Omoodo theme and UI structure in
   [`app_scheme_images/`](../../app_scheme_images/) and the
   [`omoodo-theme-standards` skill](../skills/omoodo-theme-standards/SKILL.md).
   Use the existing design tokens, semantic variants, and shared components;
   do not introduce literal colors, arbitrary color values, or an independent
   visual system.
4. Handle relevant loading, empty, error, success, disabled, and
   authorization states consistently with the surrounding product.
5. Check keyboard interaction, accessible names and labels, focus behavior,
   contrast, responsive layout, and text wrapping.
6. Keep each authored or modified UI source file, including UI tests, at 200
   physical lines or fewer; blank lines count. Split components along meaningful
   responsibility boundaries.
7. Run theme audit or theme check scripts only if they are defined by the
   project. Run theme checks after changing theme tokens or theme
   configuration.
8. Run the focused UI tests and the other verification required by the
   repository.
