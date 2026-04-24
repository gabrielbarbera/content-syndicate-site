# SEO Protection for Preview Domains

This project implements multiple layers of protection to prevent search engines from indexing Vercel preview/temporary domains.

## Implementation

### 1. Static robots.txt (Production Configuration)

**Location:** `/public/robots.txt`

Serves production configuration that allows indexing:

- **All domains**: Serves same file with `Allow: /`
- **Preview domains**: Protected by additional layers (see below)
- **Production domain**: Fully indexable

**Note:** Vite static sites cannot serve dynamic robots.txt. Instead, we rely on HTTP headers and meta tags for preview domain protection.

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
- ✅ X-Robots-Tag header: `noindex, nofollow` (robots.txt overrides this)
- ✅ Canonical URL points to production
- ✅ No noindex meta tag injected
- ✅ **Result: Indexable** (robots.txt takes precedence)

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
# Should include: X-Robots-Tag: noindex, nofollow (overridden by robots.txt)

curl https://contentsyndicate.net/robots.txt
# Should show: Allow: /

# Check page source - should NOT have meta robots tag
```

## Verification

To verify noindex is working on preview domains:

1. Open browser DevTools
2. Check `<head>` for `<meta name="robots" content="noindex, nofollow">`
3. Check Network tab for `X-Robots-Tag` header
4. Visit `/robots.txt` to see it returns `Disallow: /`

## Important Notes

### Vite Static Sites vs. Edge Functions

- **Vite projects** cannot use Edge Functions for dynamic content like robots.txt
- **Static robots.txt** serves same content to all domains
- **robots.txt takes precedence** over X-Robots-Tag headers in search engine algorithms

### How Production Gets Indexed Despite X-Robots-Tag

1. **robots.txt with `Allow: /`** - This is the PRIMARY signal for crawlers
2. **robots.txt overrides X-Robots-Tag** - Search engines prioritize robots.txt
3. **No noindex meta tag** - Only injected on preview domains
4. **Proper canonical URL** - Consolidates authority to production

### Why Multiple Layers Still Matter

- **Meta tag**: Immediate signal for browsers and some crawlers
- **HTTP header**: Works even if HTML is cached by CDNs
- **React component**: Backup for SPA navigation
- **Canonical URL**: Prevents duplicate content issues

### Testing Checklist

- [ ] Preview domain has meta robots tag (DevTools Elements tab)
- [ ] Preview domain has X-Robots-Tag header (DevTools Network tab)
- [ ] Production domain allows crawling in robots.txt
- [ ] Production domain does NOT have meta robots tag
- [ ] Canonical URL points to production domain on all pages
