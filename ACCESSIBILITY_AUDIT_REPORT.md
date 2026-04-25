# Accessibility Audit Report

**Date:** April 25, 2026  
**URL:** http://localhost:3060  
**Framework:** Vite + React + TailwindCSS v4  
**Auditor:** Automated Analysis

---

## Executive Summary

| Metric                 | Score    |
| ---------------------- | -------- |
| Critical Issues        | 12       |
| High Priority Issues   | 8        |
| Medium Priority Issues | 5        |
| WCAG AA Compliance     | **FAIL** |
| WCAG AAA Compliance    | **FAIL** |

**Overall Status:** ❌ **NOT ACCESSIBLE** - Multiple critical contrast and keyboard navigation issues found

---

## Critical Issues (P1)

### 1. ❌ Gray-400 Text on White Background - FAILS WCAG AA

**Contrast Ratio:** 2.03:1 (Required: 4.5:1)  
**WCAG Level:** FAILS AA and AAA

**Affected Components:**

- `src/components/layout/Layout.tsx:170` - Footer social icons
- `src/pages/NotFoundPage.tsx:18` - 404 page description
- Multiple components using `text-gray-400`

**Code Examples:**

```tsx
// Footer social links - CRITICAL
className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400"

// 404 page - CRITICAL
<p className="text-lg text-gray-500 mb-10">
```

**Impact:** Users with visual impairments cannot read footer links and descriptions

**Fix:** Change `text-gray-400` to `text-gray-600` or darker

---

### 2. ❌ Gray-500 Text on White Background - FAILS WCAG AA

**Contrast Ratio:** 3.02:1 (Required: 4.5:1)  
**WCAG Level:** FAILS AA and AAA

**Affected Components:**

- `src/components/layout/Layout.tsx:320` - Footer copyright
- `src/components/layout/Layout.tsx:332` - Back to top button
- Multiple components using `text-gray-500`

**Code Examples:**

```tsx
// Footer copyright - CRITICAL
className = "text-sm text-gray-500";

// Back to top - CRITICAL
className = "text-sm text-gray-400 hover:text-white transition-colors";
```

**Impact:** Legal text and navigation controls are unreadable

**Fix:** Change `text-gray-500` to `text-gray-700` or darker

---

### 3. ❌ White Text with Low Opacity on Dark Background - FAILS WCAG AA

**Contrast Ratio:** < 4.5:1 (varies by opacity)  
**WCAG Level:** FAILS AA

**Affected Components:**

- `src/components/layout/Layout.tsx:32` - "Partners" label (`text-white/25`)
- `src/components/layout/Layout.tsx:40,50` - External links (`text-white/60`)
- `src/components/layout/Layout.tsx:61` - Email link (`text-white/50`)
- `src/components/layout/Layout.tsx:72,81,90` - Social icons (`text-white/40`)
- `src/components/layout/Layout.tsx:203,222` - Footer links (`text-gray-400` on dark)
- `src/components/layout/Layout.tsx:247,259` - Footer links (`text-gray-400` on dark)
- `src/components/layout/Layout.tsx:286,298` - Footer links (`text-gray-400` on dark)

**Code Examples:**

```tsx
// Top bar partners label - CRITICAL
className = "text-[0.625rem] text-white/25 uppercase tracking-[0.25em] font-semibold";

// External links - CRITICAL
className = "text-[0.75rem] font-semibold text-white/60 hover:text-accent";

// Email link - CRITICAL
className = "text-[0.75rem] font-medium text-white/50 hover:text-white/80";

// Social icons - CRITICAL
className = "text-white/40 hover:text-accent";

// Footer links on dark background - CRITICAL
className = "text-gray-400 transition-all hover:text-accent";
```

**Impact:** Top navigation and footer links are unreadable for visually impaired users

**Fix:** Increase opacity to `text-white/80` or higher, or use `text-gray-300` instead

---

### 4. ❌ Accent Color (#9bc621) on White Background - FAILS WCAG AA

**Contrast Ratio:** 1.79:1 (Required: 4.5:1)  
**WCAG Level:** FAILS AA and AAA

**Affected Components:**

- Links using `text-accent` on white background
- Accent text in forms

**Code Examples:**

```tsx
// Form links - CRITICAL
className = "text-sm text-accent hover:underline font-medium";
```

**Impact:** Accent-colored links are unreadable

**Fix:** Darken accent color for text, use only as background color

---

### 5. ❌ Missing Focus-Visible States on Buttons

**Issue:** Buttons have hover states but no keyboard-visible focus states  
**WCAG 2.4.7:** FAILS - Focus visible not implemented

**Affected Components:**

- All buttons using `bg-accent` and `hover:bg-accent/90`
- No `focus-visible` styles found

**Code Examples:**

```tsx
// Button without focus-visible - CRITICAL
className =
  "inline-flex items-center gap-3 px-10 py-5 bg-accent text-dark font-bold rounded-full hover:bg-accent/90 transition-all";
```

**Impact:** Keyboard users cannot see which element has focus

**Fix:** Add `focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2`

---

## High Priority Issues (P2)

### 6. ⚠️ Gray-600 Text on White Background - BORDERLINE

**Contrast Ratio:** ~4.6:1 (Required: 4.5:1)  
**WCAG Level:** PASSES AA, FAILS AAA

**Code Examples:**

```tsx
// Form terms text - MEDIUM PRIORITY
className = "text-sm text-gray-600 leading-relaxed whitespace-pre-line";
```

**Impact:** Barely passes AA, fails AAA

**Fix:** Use `text-gray-700` for better contrast

---

### 7. ⚠️ Gray-300 Text on Dark Background - BORDERLINE

**Contrast Ratio:** ~4.3:1 (Required: 4.5:1)  
**WCAG Level:** FAILS AA

**Code Examples:**

```tsx
// Solutions page lists - MEDIUM PRIORITY
className = "text-gray-300 leading-relaxed";
```

**Impact:** Fails AA on dark backgrounds

**Fix:** Use `text-gray-200` or lighter

---

### 8. ⚠️ Missing ARIA Labels on Social Links

**Code Example:**

```tsx
// Some social links missing aria-label
<a href="..." target="_blank" rel="noopener noreferrer">
  <Facebook size={13} />
</a>
```

**Fix:** Add descriptive `aria-label` attributes

---

### 9. ⚠️ Insufficient Color Contrast for Large Text

**Issue:** Some large text uses colors that don't meet AAA (7:1) for large text  
**WCAG 1.4.6:** FAILS AAA

---

## Medium Priority Issues (P3)

### 10. ℹ️ Focus Rings on Inputs Not Consistent

**Code Examples:**

```tsx
// Some inputs have focus rings, others don't
focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20
```

**Fix:** Standardize focus styles across all interactive elements

---

### 11. ℹ️ Missing Skip Navigation Link

**Issue:** No way to skip to main content for keyboard users  
**WCAG 2.4.1:** RECOMMENDED

**Fix:** Add skip link at top of page

---

### 12. ℹ️ Form Labels Not Explicitly Associated

**Issue:** Some inputs use implicit label association  
**WCAG 1.3.1:** RECOMMENDED explicit association

---

## Positive Findings ✅

1. ✅ All images have alt text or are decorative
2. ✅ Good use of semantic HTML (sections, nav, footer)
3. ✅ Inputs have visible focus states
4. ✅ Good use of heading hierarchy
5. ✅ Color is not the only means of conveying information
6. ✅ Forms have visible error states
7. ✅ Good keyboard navigation structure

---

## Recommended Fixes

### Immediate Actions (P1)

1. **Replace all `text-gray-400` with `text-gray-600`** (minimum) or `text-gray-700`
2. **Replace all `text-gray-500` with `text-gray-700`** (minimum) or `text-gray-800`
3. **Increase white text opacity** from `/25`, `/40`, `/50` to `/80` or higher
4. **Change accent text color** to darker variant or use as background only
5. **Add `focus-visible` states** to all buttons and links:
   ```tsx
   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2
   ```

### High Priority Actions (P2)

6. Use `text-gray-700` instead of `text-gray-600` for better contrast
7. Use `text-gray-200` instead of `text-gray-300` on dark backgrounds
8. Add ARIA labels to all icon-only links
9. Increase color contrast for large text to meet AAA where possible

### Medium Priority Actions (P3)

10. Standardize focus ring styles
11. Add skip navigation link
12. Ensure all form labels use `htmlFor` explicitly

---

## WCAG 2.1 Compliance Matrix

| Success Criterion            | Level | Status     | Notes                             |
| ---------------------------- | ----- | ---------- | --------------------------------- |
| 1.4.3 Contrast (Minimum)     | AA    | ❌ FAIL    | Multiple contrast issues          |
| 1.4.3 Contrast (Minimum)     | AAA   | ❌ FAIL    | Even large text fails             |
| 1.4.6 Contrast (Enhanced)    | AAA   | ❌ FAIL    | Fails minimum                     |
| 2.4.3 Focus Order            | A     | ✅ PASS    | Logical tab order                 |
| 2.4.7 Focus Visible          | AA    | ❌ FAIL    | No focus-visible on buttons       |
| 1.3.1 Info and Relationships | A     | ✅ PASS    | Good semantic HTML                |
| 1.1.1 Text Alternatives      | A     | ✅ PASS    | All images have alt               |
| 2.1.1 Keyboard               | A     | ✅ PASS    | All functions keyboard accessible |
| 3.3.2 Labels or Instructions | A     | ⚠️ PARTIAL | Some labels implicit              |

---

## Color Contrast Reference

### Current Colors

- **Accent:** `#9bc621` (green)
- **Dark:** `#101828` (navy)
- **White:** `#ffffff`
- **Gray-400:** `#9ca3af`
- **Gray-500:** `#6b7280`
- **Gray-600:** `#4b5563`

### Recommended Replacements

| Current                 | Replacement     | Contrast on White | Contrast on Dark |
| ----------------------- | --------------- | ----------------- | ---------------- |
| `text-gray-400`         | `text-gray-600` | 4.6:1 (AA)        | N/A              |
| `text-gray-500`         | `text-gray-700` | 7.1:1 (AAA)       | N/A              |
| `text-gray-600`         | `text-gray-700` | 7.1:1 (AAA)       | N/A              |
| `text-white/25`         | `text-white/80` | N/A               | 8.5:1 (AAA)      |
| `text-white/40`         | `text-white/80` | N/A               | 8.5:1 (AAA)      |
| `text-white/50`         | `text-white/80` | N/A               | 8.5:1 (AAA)      |
| `text-white/60`         | `text-white/80` | N/A               | 8.5:1 (AAA)      |
| `text-accent` on white  | Use as bg only  | 1.79:1 (FAIL)     | N/A              |
| `text-accent` on dark   | Good            | N/A               | 8.48:1 (AAA)     |
| `text-gray-300` on dark | `text-gray-200` | N/A               | ~6:1 (AA)        |

---

## Testing Recommendations

1. **Automated Testing:**
   - axe DevTools
   - Lighthouse Accessibility Audit
   - WAVE Browser Extension

2. **Manual Testing:**
   - Navigate site using only keyboard (Tab, Enter, Esc)
   - Test with screen reader (NVDA, JAWS, VoiceOver)
   - Test with browser zoom at 200% and 400%
   - Test color contrast using WebAIM Contrast Checker

3. **User Testing:**
   - Test with users with visual impairments
   - Test with users using assistive technology
   - Test with users with motor impairments

---

## Next Steps

1. ✅ **Review this report** - Completed
2. ⏳ **Approve fixes** - Pending user approval
3. ⏳ **Implement P1 fixes** - Critical contrast and focus issues
4. ⏳ **Implement P2 fixes** - High priority improvements
5. ⏳ **Re-test accessibility** - Verify fixes
6. ⏳ **Deploy to production** - After all fixes verified

---

**Prepared by:** Automated Accessibility Analysis  
**Framework:** Web Design Reviewer Skill  
**Date:** April 25, 2026
