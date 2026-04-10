/// <reference types="vite/client" />
import { parseRssFeed } from "./rss-parser";
import { getCached, setCached } from "./cache";
import type { PressRelease, NewsroomFilters } from "../types/newsroom";
import { subDays, subHours, isWithinInterval } from "date-fns";

// Use relative path in dev (proxied by Vite), full URL in production
const RSS_FEED_URL = import.meta.env.DEV
  ? "/industry-feed"
  : "https://www.globenewswire.com/RssFeed/subjectcode/72-Press%20Releases/feedTitle/GlobeNewswire%20-%20Press%20Releases";
const CACHE_KEY = "rss-feed";

export async function fetchRssFeed(): Promise<PressRelease[]> {
  const cached = getCached<PressRelease[]>(CACHE_KEY);

  if (cached) {
    return cached;
  }

  try {
    const response = await fetch(RSS_FEED_URL);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const xmlText = await response.text();
    const feed = parseRssFeed(xmlText);

    setCached(CACHE_KEY, feed.items);

    return feed.items;
  } catch (error) {
    console.error("Error fetching RSS feed:", error);
    throw new Error("Failed to fetch RSS feed");
  }
}

export function filterPressReleases(
  releases: PressRelease[],
  filters: NewsroomFilters
): PressRelease[] {
  let filtered = [...releases];

  if (filters.search) {
    const searchLower = filters.search.toLowerCase();
    filtered = filtered.filter(
      (release) =>
        release.title.toLowerCase().includes(searchLower) ||
        release.description.toLowerCase().includes(searchLower)
    );
  }

  if (filters.organization) {
    filtered = filtered.filter(
      (release) =>
        release.organization &&
        release.organization.toLowerCase() === filters.organization.toLowerCase()
    );
  }

  if (filters.dateRange !== "all") {
    const now = new Date();
    let startDate: Date;

    switch (filters.dateRange) {
      case "24h":
        startDate = subHours(now, 24);
        break;
      case "week":
        startDate = subDays(now, 7);
        break;
      case "month":
        startDate = subDays(now, 30);
        break;
      case "custom":
        if (filters.customDateStart && filters.customDateEnd) {
          filtered = filtered.filter((release) => {
            const pubDate = new Date(release.pubDate);
            return isWithinInterval(pubDate, {
              start: filters.customDateStart!,
              end: filters.customDateEnd!,
            });
          });
          return filtered;
        }
        return filtered;
      default:
        return filtered;
    }

    filtered = filtered.filter((release) => {
      const pubDate = new Date(release.pubDate);
      return pubDate >= startDate;
    });
  }

  return filtered;
}

export function searchPressReleases(releases: PressRelease[], query: string): PressRelease[] {
  if (!query.trim()) {
    return releases;
  }

  const searchLower = query.toLowerCase();
  return releases.filter(
    (release) =>
      release.title.toLowerCase().includes(searchLower) ||
      release.description.toLowerCase().includes(searchLower) ||
      release.category.some((cat) => cat.toLowerCase().includes(searchLower))
  );
}

export function extractOrganizations(releases: PressRelease[]): string[] {
  const orgSet = new Set<string>();

  releases.forEach((release) => {
    if (release.organization) {
      orgSet.add(release.organization);
    }
  });

  return Array.from(orgSet).sort();
}
