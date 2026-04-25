import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { getSEOConfig } from "../lib/seoConfig";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  robots?: string;
  noindex?: boolean;
}

export default function SEO({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  robots,
  noindex,
}: SEOProps) {
  const location = useLocation();
  const config = getSEOConfig(location.pathname);

  const seoTitle = title || config.title;
  const seoDescription = description || config.description;
  const seoKeywords = keywords || config.keywords;
  const seoCanonical = canonical || config.canonical;
  const seoOgImage = ogImage || config.ogImage;
  const seoRobots = robots || config.robots || (noindex ? "noindex, nofollow" : "index, follow");

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="title" content={seoTitle} />
      <meta name="description" content={seoDescription} />
      {seoKeywords && <meta name="keywords" content={seoKeywords} />}

      {/* Canonical URL */}
      <link rel="canonical" href={seoCanonical} />

      {/* Robots */}
      <meta name="robots" content={seoRobots} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seoCanonical} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Content Syndicate" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={seoCanonical} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoOgImage} />
      <meta name="twitter:site" content="@ContentSyndicate" />
      <meta name="twitter:creator" content="@ContentSyndicate" />
    </Helmet>
  );
}
