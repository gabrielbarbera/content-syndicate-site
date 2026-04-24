export const config = {
  runtime: "edge",
};

export default async function handler(request: Request) {
  const url = new URL(request.url);
  const hostname = url.hostname;

  // Check if this is a Vercel temporary domain
  const isVercelDomain =
    hostname.includes(".vercel.app") ||
    hostname === "localhost:3000" ||
    hostname.includes(".preview.") ||
    hostname.includes("localhost:");

  const robotsTxt = isVercelDomain
    ? `# robots.txt - Blocking all crawlers on temporary domains
# This is a Vercel preview/temporary domain - DO NOT INDEX
User-agent: *
Disallow: /

# No sitemap for temporary domains
`
    : `# robots.txt - Search Engine Crawler Instructions
# Main production domain - crawlers welcome

# Allow all crawlers
User-agent: *
Allow: /

# Disallow specific paths if needed
# Disallow: /admin/
# Disallow: /api/

# Sitemap location
Sitemap: https://contentsyndicate.net/sitemap.xml

# Crawl delay (optional)
# Crawl-delay: 1
`;

  return new Response(robotsTxt, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=86400, s-maxage=86400", // Cache for 24 hours
    },
  });
}
