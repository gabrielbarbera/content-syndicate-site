import { motion } from "motion/react";
import { ExternalLink, Calendar, MapPin } from "lucide-react";
import { format } from "date-fns";
import type { PressRelease } from "../../types/newsroom";

interface NewsCardProps {
  release: PressRelease;
}

export function NewsCard({ release }: NewsCardProps) {
  const pubDate = new Date(release.pubDate);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-white/[0.07] bg-[#0d1420] transition-all duration-500 hover:border-accent/30 hover:shadow-[0_8px_40px_-12px_rgba(155,198,33,0.12)]"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative flex flex-1 flex-col p-6 lg:p-7">
        <div className="mb-5 flex items-center gap-3 text-[0.6875rem] text-gray-500">
          <div className="flex items-center gap-1.5">
            <Calendar size={11} className="text-accent/60" />
            <time dateTime={release.pubDate} className="font-medium tracking-wide">
              {format(pubDate, "d MMM yyyy")}
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
        </div>

        <h3 className="mb-3 line-clamp-2 text-[0.9375rem] font-semibold leading-snug text-white/90 group-hover:text-white transition-colors duration-300 font-display">
          {release.title}
        </h3>

        <p className="mb-6 flex-1 line-clamp-3 text-[0.8125rem] text-gray-500 leading-relaxed [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)]">
          {release.description}
        </p>

        <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/[0.05]">
          {release.organization && (
            <span className="text-[0.625rem] font-bold uppercase tracking-[0.15em] text-accent/70">
              {release.organization}
            </span>
          )}
          <a
            href={release.link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-10"
            aria-label={`Read more about ${release.title}`}
          />
          <div className="ml-auto inline-flex items-center gap-1.5 text-[0.8125rem] font-semibold text-accent/80 transition-all duration-300 group-hover:text-accent group-hover:gap-2.5">
            <span>Read</span>
            <ExternalLink size={13} />
          </div>
        </div>
      </div>
    </motion.article>
  );
}
