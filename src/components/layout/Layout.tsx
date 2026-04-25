import { Outlet, Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Globe, ArrowUpRight, Mail, Facebook, Instagram, Rss, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import CardNav from "../CardNav";
import { CONTENT } from "../../lib/constants";
import RoboMetaTag from "../RoboMetaTag";

const NAV_ITEMS = [
  { label: "Solutions", href: "/solutions" },
  { label: "BeSpoke™", href: "/bespoke" },
  { label: "Newsroom", href: "/newsroom" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact Us", href: "/contact" },
];

const logo = (
  <Link to="/" className="flex items-center">
    <img
      src="/images/Contentsyndicate Logo Light.svg"
      alt="Content Syndicate"
      className="h-8 w-auto"
    />
  </Link>
);

function TopBar() {
  return (
    <div className="py-1.5 px-6 lg:px-20 bg-[#0c1219] border-b border-white/[0.04]">
      <div className="mx-auto max-w-[1400px] flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-[0.625rem] text-white/25 uppercase tracking-[0.25em] font-semibold hidden sm:block">
            Partners
          </span>
          <div className="flex items-center gap-3">
            <a
              href="https://blockchainwire.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[0.75rem] font-semibold text-white/60 hover:text-accent transition-colors duration-200"
            >
              <ExternalLink size={11} />
              BlockchainWire
            </a>
            <span className="text-white/15 text-[0.5rem]">&#9670;</span>
            <a
              href="https://www.cryptobell.live/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[0.75rem] font-semibold text-white/60 hover:text-accent transition-colors duration-200"
            >
              <ExternalLink size={11} />
              CryptoBell.Live
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="mailto:sales@contentsyndicate.net"
            className="hidden sm:flex items-center gap-1.5 text-[0.75rem] font-medium text-white/50 hover:text-white/80 transition-colors duration-200"
          >
            <Mail size={12} />
            sales@contentsyndicate.net
          </a>
          <div className="h-3 w-px bg-white/10 hidden sm:block" />
          <div className="flex items-center gap-2.5">
            <a
              href="https://www.facebook.com/share/1CULekGk3q/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-accent transition-colors duration-200"
              aria-label="Facebook"
            >
              <Facebook size={13} />
            </a>
            <a
              href="https://www.instagram.com/content_syndicate_news/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-accent transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram size={13} />
            </a>
            <a
              href="https://newapi.contentsyndicate.net/feed-rss.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-accent transition-colors duration-200"
              aria-label="RSS Feed"
            >
              <Rss size={13} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/share/1CULekGk3q/", label: "Facebook" },
    {
      icon: Instagram,
      href: "https://www.instagram.com/content_syndicate_news/",
      label: "Instagram",
    },
    { icon: Rss, href: "https://newapi.contentsyndicate.net/feed-rss.xml", label: "RSS Feed" },
    { icon: Mail, href: "mailto:sales@contentsyndicate.net", label: "Email" },
  ];

  return (
    <footer className="relative overflow-hidden bg-dark border-t border-white/5">
      {/* Animated background pattern */}
      <div className="absolute inset-0 grid-pattern-dark opacity-10" />
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-0 right-1/4 w-96 h-96 blur-[120px] rounded-full bg-accent/20"
        />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="mx-auto max-w-[1400px] px-6 lg:px-20 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Brand Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <Link to="/" className="inline-block mb-6">
                <img
                  src="/images/Contentsyndicate Logo Light.svg"
                  alt="Content Syndicate"
                  className="h-10 w-auto"
                />
              </Link>
              <p className="text-base text-gray-400 leading-relaxed mb-8 max-w-sm">
                {CONTENT.about}
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target={social.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 + 0.2 }}
                    whileHover={{ y: -3, scale: 1.1 }}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 transition-all hover:bg-accent hover:text-dark hover:border-accent"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Platform Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-3"
            >
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">
                Platform
              </h4>
              <ul className="space-y-4">
                {[
                  { label: "Solutions", href: "/solutions" },
                  { label: "BeSpoke™", href: "/bespoke" },
                  { label: "Newsroom", href: "/newsroom" },
                  { label: "Pricing", href: "/pricing" },
                  { label: "Editorial Guidelines", href: "/editorial-guidelines" },
                  { label: "About Us", href: "/about" },
                  { label: "Writing Tips", href: "/writing-tips" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      className="group inline-flex items-center gap-2 text-gray-400 transition-all hover:text-accent"
                    >
                      {item.label}
                      <ArrowUpRight
                        size={14}
                        className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                      />
                    </Link>
                  </li>
                ))}
                {[
                  { label: "BlockchainWire", href: "https://blockchainwire.io/" },
                  { label: "CryptoBell.Live", href: "https://www.cryptobell.live/" },
                ].map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 text-gray-400 transition-all hover:text-accent"
                    >
                      {item.label}
                      <Globe size={14} className="opacity-60" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Account Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3"
            >
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">
                Account
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="https://admin.contentsyndicate.net/signin"
                    className="group inline-flex items-center gap-2 text-gray-400 transition-all hover:text-accent"
                  >
                    Log In
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                    />
                  </a>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 text-gray-400 transition-all hover:text-accent"
                  >
                    Contact Us
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                    />
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Privacy Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-3"
            >
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">
                Privacy
              </h4>
              <ul className="space-y-4">
                <li>
                  <Link
                    to="/privacy"
                    className="group inline-flex items-center gap-2 text-gray-400 transition-all hover:text-accent"
                  >
                    Privacy Policy
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="group inline-flex items-center gap-2 text-gray-400 transition-all hover:text-accent"
                  >
                    Terms & Conditions
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                    />
                  </Link>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-20 py-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-sm text-gray-500"
              >
                © {currentYear} {CONTENT.name}. All rights reserved.
              </motion.p>

              <motion.button
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToTop}
                className="group flex items-center gap-2 px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <span>Back to top</span>
                <ArrowUpRight
                  size={16}
                  className="group-hover:rotate-[-45deg] transition-transform duration-300"
                />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <RoboMetaTag />
      <header className="bg-dark relative sticky top-0 z-50">
        <div className="h-[2px] bg-gradient-to-r from-accent/0 via-accent to-accent/0" />
        <TopBar />
        <CardNav
          logo={logo}
          items={NAV_ITEMS}
          onCtaClick={() => (window.location.href = "https://admin.contentsyndicate.net/signup")}
        />
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
