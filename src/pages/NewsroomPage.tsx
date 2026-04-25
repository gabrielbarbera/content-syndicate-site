import { useState, useMemo, useEffect } from "react";
import { motion } from "motion/react";
import { AlertCircle, Newspaper } from "lucide-react";
import { PageHeader } from "../components/layout/PageHeader";
import { NewsCard } from "../components/newsroom/NewsCard";
import { NewsFilters } from "../components/newsroom/NewsFilters";
import { NewsSearchBar } from "../components/newsroom/NewsSearchBar";
import { NewsPagination } from "../components/newsroom/NewsPagination";
import { useRssFeed } from "../hooks/useRssFeed";
import { useDebounce } from "../hooks/useDebounce";
import { filterPressReleases, extractOrganizations } from "../lib/api";
import type { NewsroomFilters, PaginationState } from "../types/newsroom";
import SEO from "../components/SEO";

export default function NewsroomPage() {
  const { data: releases, loading, error } = useRssFeed();
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 300);
  const [filters, setFilters] = useState<NewsroomFilters>({
    search: "",
    organization: "",
    dateRange: "all",
  });
  const [pagination, setPagination] = useState<PaginationState>({
    currentPage: 1,
    itemsPerPage: 9,
    totalPages: 1,
  });

  const sourceFiltered = useMemo(() => {
    if (!releases) return [];
    return releases;
  }, [releases]);

  const organizations = useMemo(() => extractOrganizations(sourceFiltered), [sourceFiltered]);

  const filteredReleases = useMemo(() => {
    const withFilters = { ...filters, search: debouncedSearch };
    return filterPressReleases(sourceFiltered, withFilters);
  }, [sourceFiltered, filters, debouncedSearch]);

  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (filters.organization) count++;
    if (filters.dateRange !== "all") count++;
    return count;
  }, [filters]);

  useEffect(() => {
    setPagination((prev) => ({
      ...prev,
      currentPage: 1,
      totalPages: Math.ceil(filteredReleases.length / prev.itemsPerPage),
    }));
  }, [filteredReleases.length]);

  useEffect(() => {
    setPagination((prev) => ({ ...prev, currentPage: 1 }));
  }, [filteredReleases.length]);

  const paginatedReleases = useMemo(() => {
    const start = (pagination.currentPage - 1) * pagination.itemsPerPage;
    const end = start + pagination.itemsPerPage;
    return filteredReleases.slice(start, end);
  }, [filteredReleases, pagination]);

  useEffect(() => {
    setFilters((prev) => ({ ...prev, search: debouncedSearch }));
  }, [debouncedSearch]);

  if (error) {
    return (
      <>
        <SEO />
        <PageHeader title="Newsroom" subtitle="The Latest Press Releases" overline="Newsroom" />
        <section className="relative overflow-hidden bg-dark py-24">
          <div className="absolute inset-0 grid-pattern-dark opacity-20" />
          <div className="container relative z-10">
            <div className="mx-auto flex max-w-lg flex-col items-center gap-5 rounded-2xl border border-red-500/20 bg-red-500/[0.04] p-10 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-500/10">
                <AlertCircle className="text-red-400" size={28} />
              </div>
              <h3 className="text-lg font-bold text-white font-display">Failed to Load News</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                We couldn't fetch the latest press releases. Please try again later.
              </p>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <SEO />
      <PageHeader
        title="Newsroom"
        subtitle="The latest press releases & industry updates"
        overline="Newsroom"
      />

      <section className="relative border-b border-white/[0.04] bg-dark">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-6">
            {[
              {
                value: releases?.length || 0,
                label: "Press Releases",
              },
              { value: "24/7", label: "Updates" },
              { value: "Global", label: "Reach" },
              { value: "Latest", label: "Industry News" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`text-center ${i >= 2 ? "hidden lg:block" : ""}`}
              >
                <div className="text-2xl lg:text-3xl font-bold text-accent font-display">
                  {stat.value}
                </div>
                <div className="text-[0.625rem] font-semibold text-gray-500 uppercase tracking-[0.15em] mt-0.5">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-dark py-12 lg:py-16">
        <div className="absolute inset-0 grid-pattern-dark opacity-10" />

        <div className="container relative z-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr] lg:gap-10">
            <aside className="lg:sticky lg:top-[110px] lg:h-fit">
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-5"
              >
                <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
                  <div className="mb-3 flex items-center gap-2">
                    <Newspaper className="text-accent/60" size={14} />
                    <h3 className="text-[0.8125rem] font-semibold text-white/80 uppercase tracking-[0.1em]">
                      Search
                    </h3>
                  </div>
                  <NewsSearchBar value={search} onChange={setSearch} placeholder="Search news..." />
                </div>

                <NewsFilters
                  filters={filters}
                  onFiltersChange={setFilters}
                  organizations={organizations}
                  activeFilterCount={activeFilterCount}
                />
              </motion.div>
            </aside>

            <div className="min-w-0">
              {loading ? (
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {[...Array(9)].map((_, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.04 }}
                      className="h-64 rounded-xl bg-white/[0.02] animate-pulse border border-white/[0.04]"
                    />
                  ))}
                </div>
              ) : filteredReleases.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-14 text-center"
                >
                  <Newspaper className="mx-auto mb-4 text-gray-700" size={36} />
                  <p className="text-[0.9375rem] text-gray-400 font-medium mb-1">
                    No Results Found
                  </p>
                  <p className="text-[0.8125rem] text-gray-600">
                    Try adjusting your filters or search query
                  </p>
                </motion.div>
              ) : (
                <>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mb-5 flex items-center justify-between"
                  >
                    <p className="text-[0.75rem] text-gray-500">
                      <span className="text-white/60 font-medium">{filteredReleases.length}</span>{" "}
                      {filteredReleases.length === 1 ? "article" : "articles"}
                    </p>
                  </motion.div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {paginatedReleases.map((release, idx) => (
                      <motion.div
                        key={release.guid}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.06, duration: 0.4 }}
                      >
                        <NewsCard release={release} />
                      </motion.div>
                    ))}
                  </div>

                  {pagination.totalPages > 1 && (
                    <NewsPagination
                      pagination={pagination}
                      onPageChange={(page) =>
                        setPagination((prev) => ({ ...prev, currentPage: page }))
                      }
                      totalItems={filteredReleases.length}
                    />
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
