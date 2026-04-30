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
            className="mx-auto max-w-3xl"
          >
            <Link
              to="/newsroom"
              className="mb-8 inline-flex items-center gap-2 text-[0.8125rem] text-gray-600 hover:text-accent transition-colors"
            >
              <ArrowLeft size={14} />
              <span>Back to Newsroom</span>
            </Link>

            <article className="rounded-2xl border border-white/[0.07] bg-[#0d1420] p-8 lg:p-12">
              <header className="mb-8">
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

              {release.description && (
                <p className="mb-8 text-lg text-gray-400 leading-relaxed">{release.description}</p>
              )}

              {release.content && (
                <div
                  className="space-y-6 text-[0.9375rem] text-gray-400 leading-relaxed
                    [&_h2]:text-white [&_h2]:font-bold [&_h2]:text-xl [&_h2]:mt-10 [&_h2]:mb-4
                    [&_h3]:text-white [&_h3]:font-semibold [&_h3]:text-lg [&_h3]:mt-8 [&_h3]:mb-3
                    [&_h4]:text-white [&_h4]:font-medium [&_h4]:text-base [&_h4]:mt-6 [&_h4]:mb-2
                    [&_p]:mb-5 [&_p]:text-gray-400
                    [&_a]:text-accent [&_a:hover:text-accent/80 [&_a]:underline [&_a]:underline-offset-2
                    [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6 [&_ul]:space-y-2
                    [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-6 [&_ol]:space-y-2
                    [&_li]:pl-2
                    [&_blockquote]:border-l-2 [&_blockquote]:border-accent/50 [&_blockquote]:pl-5 [&_blockquote]:py-1 [&_blockquote]:italic [&_blockquote]:text-gray-500
                    [&_strong]:text-white [&_strong]:font-semibold
                    [&_em]:text-gray-300
                    [&_code]:bg-white/[0.06] [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-accent [&_code]:font-mono [&_code]:text-sm
                    [&_pre]:bg-black/30 [&_pre]:p-5 [&_pre]:rounded-lg [&_pre]:overflow-x-auto [&_pre]:mb-6
                    [&_pre_code]:text-gray-300 [&_pre_code]:font-mono [&_pre_code]:text-sm
                    [&_hr]:border-white/[0.1] [&_hr]:my-8
                    [&_table]:w-full [&_table]:mb-6 [&_table]:border-collapse
                    [&_th]:text-left [&_th]:text-white [&_th]:font-semibold [&_th]:p-3 [&_th]:bg-white/[0.04] [&_th]:border [&_th]:border-white/[0.1]
                    [&_td]:p-3 [&_td]:border [&_td]:border-white/[0.1]
                    [&_tr:nth-child(even)_td]:bg-white/[0.02]]"
                  dangerouslySetInnerHTML={{ __html: release.content }}
                />
              )}

              <footer className="mt-10 pt-8 border-t border-white/[0.07] flex items-center justify-between">
                <a
                  href={release.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[0.875rem] font-semibold text-accent hover:text-accent/80 transition-colors"
                >
                  <span>Read Original Release</span>
                  <Share2 size={14} />
                </a>

                <div className="flex items-center gap-3">
                  {release.category?.map((cat) => (
                    <span
                      key={cat}
                      className="text-[0.625rem] font-semibold uppercase tracking-[0.1em] text-gray-600 bg-white/[0.04] px-2 py-1 rounded"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </footer>
            </article>
          </motion.div>
        </div>
      </section>
    </>
  );
}
