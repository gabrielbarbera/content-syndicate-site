# Public Assets

This folder contains static assets that are served directly by the web server.

## File Structure

### Root Files
- `favicon.svg` - Website favicon (SVG format recommended)
- `favicon.ico` - Legacy favicon fallback
- `robots.txt` - Search engine crawler instructions
- `sitemap.xml` - Sitemap for SEO

### Images Folder
- `logo.png` - Main company logo
- `logo.svg` - Scalable vector logo
- `og-image.jpg` - Open Graph image for social sharing (1200x630px recommended)

### Icons Folder
- `icon-192.png` - PWA icon (192x192)
- `icon-512.png` - PWA icon (512x512)

## Current Placeholders

This folder currently contains placeholder files. Replace them with your actual assets before deploying to production.

## Guidelines

- **Favicon**: Use SVG for crisp rendering, provide ICO as fallback
- **Open Graph Image**: Use 1200x630px JPG/PNG for optimal social sharing
- **Logo**: Provide both PNG and SVG versions for flexibility
- **Icons**: Use PNG for PWA icons

## Deployment Note

Files in this folder are copied to the root of your build output during the build process.
