# Cloudflare cache strategy for Horas y Sueldo

This document describes Cache Rules (recommended) aligned with Cloudflare function-style expressions. Expressions use **named functions** (for example `ends_with`, `starts_with`) combined with **`and` / `or` / `not`** and explicit **parentheses** for grouping—per Cloudflare’s current expression language (see syntax guide comparing legacy operator chaining vs function form).

---

## Why parentheses are required

The parser evaluates boolean logic strictly. Expressions like `(A or B or C)` make grouping explicit instead of relying on implicit precedence (`A or B and C` is ambiguous). Always wrap each sub-condition:

```text
(ends_with(http.request.uri.path, ".html")) or (http.request.uri.path eq "/") or (ends_with(http.request.uri.path, "/"))
```

For combined rules inside a larger policy, similarly wrap fragments: `(RULE1_FRAGMENT)`.

---

## Why regex is avoided here

Wildcards and regex are powerful but tend to hide mistakes and are harder to audit than simple `starts_with`, `ends_with`, and equality checks against `http.request.uri.path`. Prefer function predicates for deterministic edge caching and easier review across environments.

---

## RULE 1 — Cache HTML pages

**Expression:**

```text
(ends_with(http.request.uri.path, ".html")) or (http.request.uri.path eq "/") or (ends_with(http.request.uri.path, "/"))
```

**Behavior:**

- Cache eligible  
- Edge TTL: 1 month  

**Notes:** Some frameworks do not expose `.html` in the public path; evaluate against your deployed URL shapes. The trailing-slash case matches typical directory-style routes and homepage-like paths ending in `/`.

---

## RULE 2 — Bypass APIs

**Expression:**

```text
(starts_with(http.request.uri.path, "/api/"))
```

**Behavior:**

- Bypass cache  

---

## RULE 3 — Bypass admin

**Expression:**

```text
(starts_with(http.request.uri.path, "/admin/"))
```

**Behavior:**

- Bypass cache  

---

## Ordering and interaction

Configure **bypass** rules (RULE 2 and RULE 3) with **higher priority** than the broad cache rule (RULE 1) so API and admin paths never receive the long edge TTL intended for mostly static HTML.

After deployment, validate with `CF-Cache-Status` response headers on representative URLs and confirm `sitemap.xml` and `robots.txt` behave as expected under the same path rules.
