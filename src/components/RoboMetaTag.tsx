import { useEffect } from "react";

/**
 * RoboMetaTag - Conditionally adds noindex meta tag on preview domains
 * Prevents search engines from indexing Vercel preview deployments
 */
export default function RoboMetaTag() {
  useEffect(() => {
    const hostname = window.location.hostname;
    const isPreviewDomain =
      hostname.includes(".vercel.app") ||
      hostname.includes(".preview.") ||
      hostname === "localhost:3000" ||
      hostname.startsWith("localhost:");

    if (
      isPreviewDomain &&
      !document.querySelector('meta[name="robots"][content="noindex, nofollow"]')
    ) {
      const meta = document.createElement("meta");
      meta.name = "robots";
      meta.content = "noindex, nofollow";
      document.head.appendChild(meta);

      return () => {
        meta.remove();
      };
    }
  }, []);

  return null;
}
