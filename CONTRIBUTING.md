# Contributing

Thank you for your interest in contributing!

## Before You Start

If you plan to make major changes (especially new features or design changes), please open an issue or discussion before starting work. This helps ensure your effort aligns with the project's direction.

## Submitting Code

Please keep each pull request focused on a single purpose. Avoid mixing unrelated changes in one PR, as this can make reviewing and merging code more difficult.

Please use the [Conventional Commits](https://www.conventionalcommits.org/) format for your commit messages whenever possible. This keeps our history clear and consistent.

Before submitting code, please run the appropriate commands to check for errors and format your code.

```bash
pnpm check
pnpm format
```

## Comments (Giscus)

This project integrates comments via Giscus and wraps it into a reusable component at `src/components/misc/Giscus.astro`.

- Centralized configuration lives in `src/config.ts` as `giscusConfig`. Toggle comments globally via `giscusConfig.enable`.
- The component automatically syncs the theme with the site's light/dark mode by observing `<html class="dark">` and sending `postMessage` to the Giscus iframe.

Usage (already wired in posts page):

```astro
---
import { giscusConfig } from "@/config";
import Giscus from "@components/misc/Giscus.astro";
---
{ giscusConfig.enable && (
  <Giscus
    repo={giscusConfig.repo}
    repoId={giscusConfig.repoId}
    category={giscusConfig.category}
    categoryId={giscusConfig.categoryId}
    mapping={giscusConfig.mapping}
    term={giscusConfig.term}
    strict={giscusConfig.strict}
    reactionsEnabled={giscusConfig.reactionsEnabled}
    emitMetadata={giscusConfig.emitMetadata}
    inputPosition={giscusConfig.inputPosition}
    themeLight={giscusConfig.themeLight}
    themeDark={giscusConfig.themeDark}
    lang={giscusConfig.lang}
    loading={giscusConfig.loading}
  />
)}
```

### CSP

If you enforce a Content-Security-Policy, allow Giscus:

- `script-src`: <https://giscus.app>
- `style-src`: <https://giscus.app>
- `frame-src`: <https://giscus.app>

### Prevent misuse of your comment repo (forks)

In your Giscus-enabled GitHub repository (not this blog repo), add `giscus.json`:

```json
{
  "origins": ["https://your-domain.example"]
}
```

Only approved origins can embed your discussions.
