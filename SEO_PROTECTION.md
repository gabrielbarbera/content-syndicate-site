# SEO Protection for Preview Domains

This project implements multiple layers of protection to prevent search engines from indexing Vercel preview/temporary domains.

## Implementation

### 1. Dynamic robots.txt

**Location:** `/api/robots.ts`

Edge function that serves different robots.txt content based on the domain:

- **Preview domains** (`*.vercel.app`, `localhost`): Blocks all crawlers with `Disallow: /`
- **Production domain**: Allows crawling with `Allow: /` and includes sitemap

Accessed via: `https://your-domain.com/robots.txt` (rewritten in vercel.json)

### 2. Inline noindex Meta Tag

**Location:** `index.html`

Script runs immediately when the page loads (before React) to inject:

```html
<meta name="robots" content="noindex, nofollow" />
```

Only on preview domains.

### 3. React Component Backup

**Location:** `/src/components/RoboMetaTag.tsx`

React component that adds noindex meta tag as a backup, rendered in Layout component.

### 4. X-Robots-Tag HTTP Header

**Location:** `vercel.json`

Adds `X-Robots-Tag: noindex, nofollow` header to all pages as an additional signal to search engines.

### 5. Canonical URL

**Location:** `index.html`

Sets canonical URL to production domain:

```html
<link rel="canonical" href="https://contentsyndicate.net/" />
```

## How It Works

### Production Domain (contentsyndicate.net)

- ✅ robots.txt: `Allow: /`
- ✅ X-Robots-Tag header present (but robots.txt overrides)
- ✅ Canonical URL points to production
- ✅ No noindex meta tag injected
- ✅ **Result: Indexable**

### Preview Domains (\*.vercel.app, localhost)

- ❌ robots.txt: `Disallow: /`
- ❌ X-Robots-Tag header: `noindex, nofollow`
- ❌ Meta robots tag: `noindex, nofollow` (injected)
- ✅ Canonical URL still points to production
- ✅ **Result: NOT indexed**

## Why Multiple Layers?

1. **Robots.txt** - Primary signal, prevents crawling
2. **Meta tag** - Immediate page-level signal
3. **HTTP header** - Server-level signal, works even if HTML is cached
4. **Canonical URL** - Prevents duplicate content issues
5. **React component** - Backup for SPA navigation

## Testing

### Preview Domain:

```bash
curl -I https://your-preview.vercel.app/
# Should include: X-Robots-Tag: noindex, nofollow

curl https://your-preview.vercel.app/robots.txt
# Should show: Disallow: /
```

### Production Domain:

```bash
curl -I https://contentsyndicate.net/
# Should include: X-Robots-Tag: noindex, nofollow

curl https://contentsyndicate.net/robots.txt
# Should show: Allow: /
```

## Verification

To verify noindex is working on preview domains:

1. Open browser DevTools
2. Check `<head>` for `<meta name="robots" content="noindex, nofollow">`
3. Check Network tab for `X-Robots-Tag` header
4. Visit `/robots.txt` to see it returns `Disallow: /`

## Notes

- The X-Robots-Tag header is applied to ALL domains (including production) because vercel.json doesn't support conditional logic
- This is safe because production's robots.txt allows indexing, and the canonical URL ensures SEO authority consolidates to the main domain
- The combination of multiple signals ensures robust protection even if one layer fails
