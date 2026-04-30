import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, Calendar, MapPin, Building, Share2 } from "lucide-react";
import { format } from "date-fns";
import { PageHeader } from "../components/layout/PageHeader";
import { useRssFeed } from "../hooks/useRssFeed";
import SEO from "../components/SEO";
import type { PressRelease } from "../types/newsroom";

export default function PressReleasePage() {
  const { slug } = useParams<{ slug: string }>();
  const { data: releases, loading, error } = useRssFeed();
  const [release, setRelease] = useState<PressRelease | null>(null);

  useEffect(() => {
    if (slug && releases) {
      const found = releases.find((r) => {
        const urlSlug = r.link.split("/").pop()?.split("?").at(0) ?? "";
        return (
          urlSlug === slug ||
          r.title
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^a-z0-9-]/g, "") === slug
        );
      });
      setRelease(found ?? null);
    }
  }, [slug, releases]);

  if (loading) {
    return (
      <>
        <SEO title="Loading..." />
        <PageHeader title="Press Release" />
        <section className="bg-dark py-24">
          <div className="container">
            <div className="animate-pulse h-96 rounded-xl bg-white/[0.02] border border-white/[0.04]" />
          </div>
        </section>
      </>
    );
  }

  if (error || !release) {
    return (
      <>
        <SEO title="Press Release Not Found" />
        <PageHeader title="Press Release" subtitle="Article not found" />
        <section className="bg-dark py-24">
          <div className="container">
            <div className="mx-auto max-w-lg rounded-xl border border-white/[0.07] bg-white/[0.02] p-10 text-center">
              <h3 className="text-lg font-bold text-white font-display mb-2">
                Press Release Not Found
              </h3>
              <p className="text-sm text-gray-700 mb-6">
                This press release may have been removed or the link is incorrect.
              </p>
              <Link
                to="/newsroom"
                className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
              >
                <ArrowLeft size={16} />
                <span>Back to Newsroom</span>
              </Link>
            </div>
          </div>
        </section>
      </>
    );
  }

  const pubDate = new Date(release.pubDate);
  const releaseContent = release.content || "";

  const hasFullContent = releaseContent.length > 100;

  return (
    <>
      <SEO title={release.title} description={release.description} canonical={release.link} />
      <PageHeader title="Press Release" overline="News" />

      <section className="relative overflow-hidden bg-dark py-12 lg:py-16">
        <div className="absolute inset-0 grid-pattern-dark opacity-10" />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-4xl"
          >
            <Link
              to="/newsroom"
              className="mb-8 inline-flex items-center gap-2 text-[0.8125rem] text-gray-600 hover:text-accent transition-colors"
            >
              <ArrowLeft size={14} />
              <span>Back to Newsroom</span>
            </Link>

            <article className="rounded-2xl border border-white/[0.07] bg-[#0d1420] overflow-hidden">
              <header className="p-8 lg:p-12 pb-0">
                <div className="mb-4 flex flex-wrap items-center gap-4 text-[0.6875rem] text-gray-700">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={11} className="text-accent/60" />
                    <time dateTime={release.pubDate} className="font-medium tracking-wide">
                      {format(pubDate, "d MMMM yyyy")}
                    </time>
                  </div>
                  {release.location && (
                    <>
                      <span className="text-white/10">|</span>
                      <div className="flex items-center gap-1">
                        <MapPin size={10} className="text-accent/50" />
                        <span className="tracking-wide">{release.location}</span>
                      </div>
                    </>
                  )}
                  {release.organization && (
                    <>
                      <span className="text-white/10">|</span>
                      <div className="flex items-center gap-1">
                        <Building size={10} className="text-accent/50" />
                        <span className="font-semibold text-accent">{release.organization}</span>
                      </div>
                    </>
                  )}
                </div>

                <h1 className="text-2xl lg:text-3xl font-bold leading-tight text-white font-display">
                  {release.title}
                </h1>
              </header>

              {hasFullContent ? (
                <div className="p-8 lg:p-12 pt-6">
                  <div
                    className="prose-custom"
                    dangerouslySetInnerHTML={{ __html: releaseContent }}
                  />
                </div>
              ) : (
                <div className="p-8 lg:p-12">
                  {release.description && (
                    <p className="text-lg text-gray-400 leading-relaxed mb-6">
                      {release.description}
                    </p>
                  )}

                  <a
                    href={release.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[0.875rem] font-semibold text-accent hover:text-accent/80 transition-colors"
                  >
                    <span>Read Original Release</span>
                    <Share2 size={14} />
                  </a>
                </div>
              )}

              <footer className="p-8 lg:p-12 pt-0 mt-[-2rem]">
                <div className="pt-8 border-t border-white/[0.07] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <a
                    href={release.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[0.875rem] font-semibold text-accent hover:text-accent/80 transition-colors"
                  >
                    <span>View Original Source</span>
                    <Share2 size={14} />
                  </a>

                  <div className="flex flex-wrap items-center gap-3">
                    {release.category?.map((cat) => (
                      <span
                        key={cat}
                        className="text-[0.625rem] font-semibold uppercase tracking-[0.1em] text-gray-600 bg-white/[0.04] px-2 py-1 rounded"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              </footer>
            </article>
          </motion.div>
        </div>
      </section>
    </>
  );
}
