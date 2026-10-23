---
name: omoodo-theme-standards
description: Apply when designing or implementing any Omoodo frontend feature or interface, using the app scheme images as the visual reference.
---

# Omoodo theme standards

These standards are shared across agents. The root [`AGENTS.md`](../../../AGENTS.md)
sets the repository-wide requirements; the
[`UI change workflow`](../../workflows/ui-change.md) covers discovery and
verification.

## Visual source of truth

Treat [`app_scheme_images/`](../../../app_scheme_images/) as the visual reference
for new and changed product UI. Review the relevant images before implementation:

- `colours.png` defines the palette direction and tonal families.
- `typography.png` defines the type scale and typographic character.
- `icon.png` shows the available icon style and breadth.
- `image_1.png`, `image_2.png`, and `image_3.png` show example marketing,
  onboarding, and signed-in application layouts.

The images are design references, not a mandate to copy their sample content,
brand marks, or every screen literally. Build Omoodo features using their
shared visual language and the existing product architecture.

## Omoodo visual language

### Color

- Use the palette shown in `colours.png`: a vivid cyan/blue as the primary
  brand/action family, a fresh green accent, deep teal for strong contrast,
  pale cyan/blue for soft surfaces, and a restrained black/gray neutral scale
  for text, borders, and secondary content.
- Assign colors by semantic role, not by arbitrary preference: primary actions
  and links use the primary family; positive highlights and selected accents
  may use green; deep teal supports high-emphasis panels; pale tints separate
  surfaces without competing with content.
- Establish or reuse semantic theme tokens for those roles. Use the project's
  token mechanism rather than hard-coded hex/RGB/HSL values, arbitrary color
  utilities, raw palette classes, inline colors, or isolated `dark:` overrides.
- Reserve gradients for expressive promotional moments where they fit the
  references; do not make gradients the default surface treatment.
- Check text, icon, and control contrast against the actual token pair. Never
  use a palette swatch as text color without verifying readable contrast.

### Typography

- Follow the scale and weights shown in `typography.png`: clear, confident
  display headings; readable medium-weight section titles; and calm, legible
  body and supporting text.
- The reference identifies Outfit. Reuse Outfit if it is already loaded by the
  app; do not add or download a font solely on assumption. If the app uses a
  different established font, retain it unless the task explicitly includes a
  typography migration.
- Keep heading hierarchy, line-height, and text measure consistent. Use
  sentence case for product UI, concise labels, and readable line lengths.
  Avoid using oversized display type for dense dashboard content.

### Shape, spacing, and surfaces

- Favor spacious layouts, generous section separation, and a consistent spacing
  scale rather than dense decoration.
- Use softly rounded cards, image frames, search/filter controls, and pill
  buttons/tags, following the references. Reuse shared radius and spacing
  tokens; do not invent a new radius for each component.
- Keep app content on clean white or pale neutral/cyan surfaces. Use borders,
  subtle tonal separation, and restrained elevation to define hierarchy;
  avoid heavy shadows and nested card-on-card layers.
- Keep content alignment and column gaps consistent. On smaller screens,
  collapse multi-column layouts in a clear reading order without horizontal
  overflow.

### Icons and imagery

- Follow `icon.png` and existing app icons: use a consistent, simple line-icon
  family with aligned stroke weight and optical size.
- Prefer the project's existing icon package and shared icon wrappers. Do not
  mix emoji, unrelated icon packs, and custom glyphs as UI icons.
- Use imagery intentionally and consistently. Preserve a useful aspect ratio
  and focal point; use existing image assets where appropriate and do not
  distort people or product imagery.
- Keep Omoodo identity in new UI. Do not carry over the reference images'
  example brand name, logo, or placeholder copy.

## Reusable feature patterns

Use these as starting patterns, adapting them to the feature's user and task:

- **Marketing or discovery landing:** use a concise headline and supporting
  copy, one clear primary action, and a relevant image or illustration.
  Arrange text and imagery side by side on wide screens and stack them on
  narrow screens.
- **Search and browse:** present the search/filter controls as one coherent
  group, keep the main submit action visually prominent, and show results in
  consistent cards with scannable metadata and clear click targets.
- **Dashboard:** use stable, understandable navigation; prioritize the
  page-specific task; and group related actions or summaries. Avoid turning
  every item into a competing brightly colored tile.
- **Forms and onboarding:** use persistent labels, clear input affordances,
  logical grouping, visible selected states, concise validation, and one
  prominent forward action. Keep progress and recovery paths visible when
  relevant.
- **Cards and tags:** make the information hierarchy obvious, keep repeated
  cards aligned, and use tags for compact secondary metadata—not as substitutes
  for headings or status text.
- **Actions:** use filled primary buttons for the main action, secondary or
  outlined treatments for supporting actions, and text buttons for low-emphasis
  actions. Button labels should describe the result.

These are visual patterns only. Follow the feature's actual data model,
permissions, navigation, loading, error, empty, success, and disabled behavior.

## Component and implementation rules

- Before coding, inspect the reference images, the existing theme tokens, shared
  UI components, nearby feature implementations, and any project-specific
  design documentation.
- Reuse existing components and supported variants. If a needed token or
  primitive is missing, extend the canonical theme/component system in its
  established location; do not create a parallel theme or local design system.
- Keep styling in the project's established styling mechanism. Avoid inline
  visual styles and one-off component variants that duplicate shared behavior.
- Do not copy a screenshot wholesale or introduce unrelated layout changes
  while implementing a feature.
- Preserve accessibility and responsive behavior: semantic structure,
  keyboard operation, visible focus, accessible names and labels, adequate
  contrast, and touch-friendly controls.
- Implement relevant loading, empty, error, success, selected, disabled, and
  permission states with the same visual language.

## Documentation and checks

- Update the shared theme or component documentation when introducing a
  reusable pattern or changing a token.
- Run focused UI tests and the applicable checks required by the root
  [`AGENTS.md`](../../../AGENTS.md). Run theme audit/check scripts when the
  project defines them; confirm commands before use.
- In the handoff, note which reference patterns informed the feature and
  disclose any intentional visual deviation.
