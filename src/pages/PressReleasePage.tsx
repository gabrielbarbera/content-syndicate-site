import { format } from "date-fns";
import { ArrowLeft, Building, Calendar, MapPin, Newspaper } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PageHeader } from "../components/layout/PageHeader";
import SEO from "../components/SEO";
import { useRssFeed } from "../hooks/useRssFeed";
import type { PressRelease } from "../types/newsroom";

function hasHtmlTags(content: string): boolean {
  return /<\/?[a-z][\s\S]*>/i.test(content);
}

function renderPlainTextContent(content: string) {
  return content
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
    .map((paragraph) => <p key={paragraph}>{paragraph}</p>);
}

function moveMediaBeforeText(content: string): string {
  if (typeof window === "undefined") return content;

  const doc = new DOMParser().parseFromString(content, "text/html");
  const media = Array.from(doc.body.querySelectorAll("img, video, iframe"));

  if (media.length === 0) {
    return content;
  }

  const mediaHtml = media
    .map((element) => {
      const wrapper = element.closest("figure, picture, p, div");
      const html = wrapper?.outerHTML || element.outerHTML;

      if (wrapper && wrapper.textContent?.trim() === "") {
        wrapper.remove();
      } else {
        element.remove();
      }

      return html;
    })
    .join("");

  return `${mediaHtml}${doc.body.innerHTML}`;
}

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
  const releaseContent = release.content || release.description || "";
  const isHtmlContent = hasHtmlTags(releaseContent);
  const formattedHtmlContent = isHtmlContent ? moveMediaBeforeText(releaseContent) : "";
  const sourceLabel = release.organization || release.category?.[0] || "Content Syndicate";

  return (
    <>
      <SEO title={release.title} description={release.description} canonical={release.link} />

      <section className="relative overflow-hidden bg-[#0b111b] py-10 lg:py-14">
        <div className="absolute inset-0 grid-pattern-dark opacity-[0.08]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-5xl"
          >
            <Link
              to="/newsroom"
              className="mb-8 inline-flex items-center gap-2 text-[0.8125rem] font-semibold text-white/45 transition-colors hover:text-accent"
            >
              <ArrowLeft size={14} />
              <span>Back to Newsroom</span>
            </Link>

            <article className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#0f1724]/95 shadow-[0_24px_90px_-48px_rgba(0,0,0,0.9)]">
              <header className="border-b border-white/[0.07] px-6 py-8 sm:px-8 lg:px-14 lg:py-12">
                <div className="mb-7 flex flex-wrap items-center gap-3 text-[0.6875rem] font-bold uppercase tracking-[0.14em]">
                  <span className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/[0.08] px-3 py-1.5 text-accent">
                    <Newspaper size={12} />
                    <span>News</span>
                  </span>
                  <span className="text-white/20">/</span>
                  <span className="text-white/45">{sourceLabel}</span>
                </div>

                <h1 className="max-w-4xl text-3xl font-bold leading-[1.08] tracking-tight text-white font-display sm:text-4xl lg:text-5xl">
                  {release.title}
                </h1>

                <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-white/[0.07] pt-5 text-[0.8125rem] text-white/55">
                  <time dateTime={release.pubDate} className="inline-flex items-center gap-2">
                    <Calendar size={14} className="text-accent/70" />
                    <span>{format(pubDate, "d MMMM yyyy")}</span>
                  </time>

                  <div className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />

                  <div className="inline-flex items-center gap-2">
                    <Building size={14} className="text-accent/70" />
                    <span>{sourceLabel}</span>
                  </div>

                  {release.location && (
                    <>
                      <div className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />
                      <div className="inline-flex items-center gap-2">
                        <MapPin size={14} className="text-accent/70" />
                        <span>{release.location}</span>
                      </div>
                    </>
                  )}
                </div>
              </header>

              <div className="mx-auto max-w-[720px] px-6 py-8 sm:px-8 lg:px-0 lg:py-12">
                {isHtmlContent ? (
                  <div
                    className="prose-custom"
                    dangerouslySetInnerHTML={{ __html: formattedHtmlContent }}
                  />
                ) : (
                  <div className="prose-custom">{renderPlainTextContent(releaseContent)}</div>
                )}
              </div>
            </article>
          </motion.div>
        </div>
      </section>
    </>
  );
}
