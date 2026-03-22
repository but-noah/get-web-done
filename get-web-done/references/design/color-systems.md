# Color Systems

<!-- Reference file for color system design. Loaded by web-design-system agent. -->
<!-- Max 300 lines. -->

## Why OKLCH Over HSL

HSL lies about perceptual lightness. `hsl(60, 100%, 50%)` (yellow) looks far brighter than `hsl(240, 100%, 50%)` (blue) despite identical lightness values. This makes systematic color generation impossible — you cannot create uniform shade ramps by stepping lightness alone.

OKLCH fixes this. Equal lightness steps produce equal perceived brightness across all hues.

- **Format:** `oklch(lightness chroma hue)` — L: 0-1, C: 0-0.4, H: 0-360
- **Perceptual uniformity:** L=0.6 looks equally bright whether the hue is yellow, blue, or red
- **P3 gamut:** `oklch()` can express colors outside sRGB (vivid accents on capable displays)
- **Reduction case study:** a 900-line color system condensed to 80 lines using OKLCH + `color-mix()`

## Building a Color System

### Step 1: Define Brand Hue

One number drives the entire system:

```css
:root {
  --brand-hue: 250; /* single source of truth */
}
```

### Step 2: Create Semantic Color Tokens

```css
:root {
  --color-primary: oklch(0.6 0.2 var(--brand-hue));
  --color-primary-light: oklch(0.8 0.1 var(--brand-hue));
  --color-primary-dark: oklch(0.4 0.25 var(--brand-hue));
  --color-secondary: oklch(0.55 0.15 calc(var(--brand-hue) + 30));
}
```

### Step 3: Derive Surfaces and Text

Never use pure white or pure black. Brand-tint everything:

```css
:root {
  /* Surfaces — NOT pure white */
  --color-surface: oklch(0.98 0.01 var(--brand-hue));
  --color-surface-elevated: oklch(0.95 0.015 var(--brand-hue));
  --color-surface-sunken: oklch(0.92 0.01 var(--brand-hue));

  /* Text — NOT pure black */
  --color-text: oklch(0.15 0.02 var(--brand-hue));
  --color-text-muted: oklch(0.4 0.02 var(--brand-hue));
  --color-text-inverted: oklch(0.95 0.01 var(--brand-hue));
}
```

### Step 4: Accent Colors via Color Theory

```css
:root {
  /* Complementary — maximum contrast, use sparingly */
  --color-accent: oklch(0.65 0.2 calc(var(--brand-hue) + 180));

  /* Analogous — harmonious, safe for larger areas */
  --color-accent-warm: oklch(0.65 0.15 calc(var(--brand-hue) + 60));
  --color-accent-cool: oklch(0.65 0.15 calc(var(--brand-hue) - 60));
}
```

## Using color-mix() for Derived Colors

Stop manually defining every shade. Derive them mathematically:

```css
:root {
  /* Hover states — darken by mixing with black */
  --color-primary-hover: color-mix(in oklch, var(--color-primary) 85%, black);

  /* Disabled states — desaturate by mixing with surface */
  --color-primary-disabled: color-mix(in oklch, var(--color-primary) 40%, var(--color-surface));

  /* Borders — transparent overlay of text color */
  --color-border: color-mix(in oklch, var(--color-text) 20%, transparent);
  --color-border-subtle: color-mix(in oklch, var(--color-text) 10%, transparent);

  /* Focus rings */
  --color-focus: color-mix(in oklch, var(--color-primary) 60%, transparent);
}
```

## Semantic Naming Convention

Use these exact token names. Never use abstract names like `--blue-500`:

| Category | Tokens |
|----------|--------|
| Brand | `--color-primary`, `--color-secondary` |
| Surfaces | `--color-surface`, `--color-surface-elevated`, `--color-surface-sunken` |
| Text | `--color-text`, `--color-text-muted`, `--color-text-inverted` |
| Borders | `--color-border`, `--color-border-subtle` |
| Feedback | `--color-success`, `--color-warning`, `--color-error`, `--color-info` |
| Interactive | `--color-primary-hover`, `--color-primary-disabled`, `--color-focus` |

## Feedback Colors

```css
:root {
  --color-success: oklch(0.6 0.18 145);
  --color-warning: oklch(0.75 0.15 85);
  --color-error: oklch(0.55 0.22 25);
  --color-info: oklch(0.6 0.15 240);
}
```

## Light/Dark Mode

In OKLCH, dark mode only requires changing lightness. Hue and chroma stay the same:

```css
:root {
  --color-surface: oklch(0.98 0.01 var(--brand-hue));
  --color-surface-elevated: oklch(0.95 0.015 var(--brand-hue));
  --color-text: oklch(0.15 0.02 var(--brand-hue));
  --color-text-muted: oklch(0.4 0.02 var(--brand-hue));
  --color-primary: oklch(0.6 0.2 var(--brand-hue));
  --color-border: color-mix(in oklch, var(--color-text) 20%, transparent);
}

/* System preference */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --color-surface: oklch(0.15 0.015 var(--brand-hue));
    --color-surface-elevated: oklch(0.2 0.02 var(--brand-hue));
    --color-text: oklch(0.9 0.015 var(--brand-hue));
    --color-text-muted: oklch(0.65 0.02 var(--brand-hue));
    --color-primary: oklch(0.7 0.18 var(--brand-hue));
    --color-border: color-mix(in oklch, var(--color-text) 15%, transparent);
  }
}

/* Manual toggle override */
[data-theme="dark"] {
  --color-surface: oklch(0.15 0.015 var(--brand-hue));
  --color-surface-elevated: oklch(0.2 0.02 var(--brand-hue));
  --color-text: oklch(0.9 0.015 var(--brand-hue));
  --color-text-muted: oklch(0.65 0.02 var(--brand-hue));
  --color-primary: oklch(0.7 0.18 var(--brand-hue));
  --color-border: color-mix(in oklch, var(--color-text) 15%, transparent);
}
```

## Critical Rules

1. **Never pure black:** Use `oklch(0.1-0.15, 0.01-0.03, var(--brand-hue))` instead of `#000000`
2. **Never pure white:** Use `oklch(0.97-0.99, 0.005-0.015, var(--brand-hue))` instead of `#ffffff`
3. **Brand-tinted neutrals:** Even grays carry a trace of the brand hue for cohesion
4. **Brand-tinted shadows:** Shadows use the brand hue too:
   ```css
   --shadow-sm: 0 1px 3px oklch(0.2 0.03 var(--brand-hue) / 0.12);
   --shadow-md: 0 4px 12px oklch(0.2 0.03 var(--brand-hue) / 0.15);
   --shadow-lg: 0 8px 30px oklch(0.2 0.03 var(--brand-hue) / 0.2);
   ```
5. **One brand hue:** All colors derive from `--brand-hue`. Changing this one variable re-themes the entire site.

## Contrast Checking

- **WCAG 2.2 AA (current requirement):** 4.5:1 for normal text, 3:1 for large text (18px+ or 14px bold+)
- **APCA (WCAG 3.0 preparation):** Uses Lc values for more nuanced, perceptually accurate contrast
- **Always verify** contrast against both light and dark mode backgrounds
- **Tools:** oklch.com for palette building; browser DevTools has built-in contrast checker
- When using OKLCH, a lightness difference of ~0.4 between text and surface typically meets AA

## Complete Minimal System

```css
:root {
  --brand-hue: 250;

  /* Primary */
  --color-primary: oklch(0.6 0.2 var(--brand-hue));
  --color-primary-hover: color-mix(in oklch, var(--color-primary) 85%, black);
  --color-primary-disabled: color-mix(in oklch, var(--color-primary) 40%, var(--color-surface));

  /* Surfaces */
  --color-surface: oklch(0.98 0.01 var(--brand-hue));
  --color-surface-elevated: oklch(0.95 0.015 var(--brand-hue));
  --color-surface-sunken: oklch(0.92 0.01 var(--brand-hue));

  /* Text */
  --color-text: oklch(0.15 0.02 var(--brand-hue));
  --color-text-muted: oklch(0.4 0.02 var(--brand-hue));
  --color-text-inverted: oklch(0.95 0.01 var(--brand-hue));

  /* Borders */
  --color-border: color-mix(in oklch, var(--color-text) 20%, transparent);
  --color-border-subtle: color-mix(in oklch, var(--color-text) 10%, transparent);

  /* Feedback */
  --color-success: oklch(0.6 0.18 145);
  --color-warning: oklch(0.75 0.15 85);
  --color-error: oklch(0.55 0.22 25);
  --color-info: oklch(0.6 0.15 240);

  /* Shadows */
  --shadow-sm: 0 1px 3px oklch(0.2 0.03 var(--brand-hue) / 0.12);
  --shadow-md: 0 4px 12px oklch(0.2 0.03 var(--brand-hue) / 0.15);
  --shadow-lg: 0 8px 30px oklch(0.2 0.03 var(--brand-hue) / 0.2);

  /* Focus */
  --color-focus: color-mix(in oklch, var(--color-primary) 60%, transparent);
}
```
