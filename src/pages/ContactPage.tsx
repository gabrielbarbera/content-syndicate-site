import { motion } from "motion/react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { PageHeader } from "../components/layout/PageHeader";
import { ContactForm } from "../components/forms/ContactForm";

const CONTACT_INFO = [
  {
    icon: Phone,
    label: "Phone",
    value: "203-450-6033",
    href: "tel:2034506033",
  },
  {
    icon: Mail,
    label: "Email",
    value: "sales@contentsyndicate.net",
    href: "mailto:sales@contentsyndicate.net",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Global Distribution Network",
    href: "#",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="We'd love to hear from you"
        overline="Contact"
        showCta={false}
      />

      <section className="relative overflow-hidden bg-white py-20 lg:py-28 border-b border-zinc-100">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div
          className="absolute inset-0 -z-10 glow-mesh"
          style={{ "--glow-color": "#9BC621" } as React.CSSProperties}
        />

        <div className="container relative z-10 px-6 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block mb-6 text-sm font-bold text-accent uppercase tracking-[0.3em]">
                Get In Touch
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight font-display text-dark mb-6 leading-tight">
                Let's Start a
                <span className="block mt-2 editorial-heading text-accent">Conversation</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-12">
                Have questions about our press release distribution services? We're here to help you
                amplify your message and reach your target audience.
              </p>

              <div className="space-y-6">
                {CONTACT_INFO.map((item, idx) => (
                  <motion.a
                    key={idx}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1, duration: 0.6 }}
                    className="group flex items-center gap-6 p-6 rounded-2xl border border-zinc-200 bg-white/50 backdrop-blur-sm transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-1"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/20 text-accent transition-all duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-dark">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                        {item.label}
                      </p>
                      <p className="text-lg font-semibold text-dark group-hover:text-accent transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="sticky top-[110px] rounded-3xl border border-zinc-200 bg-white p-8 lg:p-12 shadow-2xl shadow-zinc-200/50">
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/20">
                      <Send className="text-accent" size={20} />
                    </div>
                    <h3 className="text-2xl font-bold text-dark">Send Us a Message</h3>
                  </div>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>

                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-dark py-20 lg:py-28">
        <div className="absolute inset-0 grid-pattern-dark opacity-20" />
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 blur-[120px] rounded-full bg-accent/20"
          />
        </div>

        <div className="container relative z-10 px-6 lg:px-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 font-display leading-tight">
              Ready to Amplify Your Message?
            </h3>
            <p className="text-lg text-gray-400 mb-10 leading-relaxed">
              Join thousands of businesses who trust Content Syndicate to distribute their press
              releases globally.
            </p>
            <motion.a
              href="https://admin.contentsyndicate.net/signup"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 rounded-full bg-accent px-10 py-5 font-bold text-dark text-lg shadow-xl shadow-accent/30 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-accent/40"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started Today
              <Send size={20} />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
