import { useState, useEffect } from "react";
import type { PressRelease } from "../types/newsroom";
import { fetchRssFeed } from "../lib/api";

interface UseRssFeedResult {
  data: PressRelease[] | null;
  loading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}

export function useRssFeed(): UseRssFeedResult {
  const [data, setData] = useState<PressRelease[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const releases = await fetchRssFeed();
      setData(releases.map((r) => ({ ...r, source: "industry" as const })));
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Failed to fetch feed"));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    loading,
    error,
    refetch: fetchData,
  };
}
