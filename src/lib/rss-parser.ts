import { XMLParser } from "fast-xml-parser";
import type { PressRelease, RssFeed } from "../types/newsroom";

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: "",
});

interface RssItem {
  title: string;
  link: string;
  description: string;
  "content:encoded"?: string;
  pubDate: string;
  category:
    | string
    | string[]
    | { "#text"?: string; domain?: string }
    | { "#text"?: string; domain?: string }[];
  guid: string;
  author?: string;
  "dc:contributor"?: string;
  "dc:publisher"?: string;
  "dc:identifier"?: string;
}

interface RssChannel {
  title: string;
  link: string;
  description: string;
  language: string;
  item: RssItem | RssItem[];
}

interface ParsedRss {
  rss: {
    channel: RssChannel;
  };
}

function stripHtml(html: string): string {
  let text = html
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<\/p>/gi, " ")
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#38;/g, "&")
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8211;/g, "–")
    .replace(/&#8212;/g, "—")
    .replace(/&iacute;/g, "í")
    .replace(/\s+/g, " ")
    .trim();

  // Remove GlobeNewswire preamble pattern: "CITY, State, Month DD, YYYY (GLOBE NEWSWIRE) -- "
  text = text.replace(
    /^[A-Z][^,]+,\s*(?:[A-Z][a-z.]?\.\s*)?[A-Z][a-z]+,\s*(?:January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},\s*\d{4}\s*\(GLOBE NEWSWIRE\)\s*--\s*/i,
    ""
  );

  // Remove alternative preamble pattern: "CITY, Month DD, YYYY (GLOBE NEWSWIRE) -- "
  text = text.replace(
    /^[A-Z][^,]+,\s*(?:January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},\s*\d{4}\s*\(GLOBE NEWSWIRE\)\s*--\s*/i,
    ""
  );

  // Remove French preamble pattern: "A City, le Month DD YYYY"
  text = text.replace(
    /^[A-Z]\s*[A-Za-zÀ-ÿ]+,\s*le\s+\d{1,2}\s+(?:janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)\s+\d{4}\s*[–—-]\s*/i,
    ""
  );

  return text.trim();
}

function truncateText(text: string, maxLength: number = 280): string {
  if (text.length <= maxLength) return text;
  const truncated = text.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");
  return truncated.slice(0, lastSpace) + "…";
}

function extractLocation(plainText: string): string | undefined {
  const locationMatch = plainText.match(/^([A-Z][a-zA-Z\s,]+?)(?:\s*[–—•,]|\s{2,})/);
  if (locationMatch && locationMatch[1].trim().length > 2 && locationMatch[1].trim().length < 60) {
    return locationMatch[1].trim();
  }
  return undefined;
}

function normalizeCategories(
  category:
    | string
    | string[]
    | { "#text"?: string; domain?: string }
    | { "#text"?: string; domain?: string }[]
    | undefined
): string[] {
  if (!category) return [];

  // Handle GlobeNewswire format: { "#text": "Category", "domain": "..." }
  const extractText = (cat: unknown): string | undefined => {
    if (typeof cat === "string") return cat;
    if (typeof cat === "object" && cat !== null && "#text" in cat) {
      return (cat as { "#text"?: string })["#text"];
    }
    return undefined;
  };

  if (Array.isArray(category)) {
    const extracted = category.map(extractText).filter(Boolean) as string[];
    return extracted.length > 0 ? extracted : [];
  }

  const text = extractText(category);
  return text ? [text] : [];
}

export function parseRssFeed(xmlString: string): RssFeed {
  try {
    const parsed = parser.parse(xmlString) as ParsedRss;
    const channel = parsed.rss.channel;

    const items = Array.isArray(channel.item) ? channel.item : [channel.item];

    const pressReleases: PressRelease[] = items.map((item): PressRelease => {
      const rawDescription = item.description || "";
      const plainText = stripHtml(rawDescription);
      const location = extractLocation(plainText);
      const categories = normalizeCategories(item.category);
      const organization =
        item["dc:contributor"] || (categories.length > 0 ? categories[0] : undefined);

      return {
        title: item.title,
        link: item.link,
        description: truncateText(plainText),
        content: item["content:encoded"],
        pubDate: item.pubDate,
        category: categories,
        guid: item.guid,
        author: item.author,
        location,
        organization,
      };
    });

    return {
      title: channel.title,
      link: channel.link,
      description: channel.description,
      language: channel.language,
      items: pressReleases,
    };
  } catch (error) {
    console.error("Error parsing RSS feed:", error);
    throw new Error("Failed to parse RSS feed");
  }
}
