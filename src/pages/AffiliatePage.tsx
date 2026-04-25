import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { Send, Users, DollarSign, TrendingUp, CheckCircle2 } from "lucide-react";
import { PageHeader } from "../components/layout/PageHeader";

const BENEFITS = [
  {
    icon: DollarSign,
    title: "Competitive Commissions",
    description: "Earn generous commissions on every client you refer who submits a press release.",
  },
  {
    icon: Users,
    title: "Grow Together",
    description: "Join a network of professionals helping clients amplify their voice globally.",
  },
  {
    icon: TrendingUp,
    title: "Real-Time Tracking",
    description: "Monitor your referrals and earnings with transparent, real-time reporting.",
  },
];

export default function AffiliatePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    audienceSize: "",
    promotionPlan: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission delay
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      <PageHeader
        title="Affiliate Program"
        subtitle="Partner with Content Syndicate and earn by connecting clients with global distribution"
        overline="Affiliate"
      />

      {/* Benefits */}
      <section className="relative overflow-hidden bg-dark py-20 lg:py-24">
        <div className="absolute inset-0 grid-pattern-dark opacity-20" />
        <div className="mx-auto max-w-[1400px] px-6 lg:px-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BENEFITS.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center hover:border-accent/40 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="mb-5 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/20 text-accent group-hover:bg-accent group-hover:text-dark transition-all duration-300">
                  <benefit.icon size={28} />
                </div>
                <h3 className="mb-3 text-xl font-bold text-white group-hover:text-accent transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-200 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="relative overflow-hidden bg-white py-24 lg:py-32">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div
          className="absolute inset-0 -z-10 glow-mesh"
          style={{ "--glow-color": "#9BC621" } as React.CSSProperties}
        />

        <div className="mx-auto max-w-[1400px] px-6 lg:px-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: copy */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block mb-6 text-sm font-bold text-accent uppercase tracking-[0.3em]">
                Apply Now
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight font-display text-dark mb-6 leading-tight">
                Start Earning With
                <span className="block mt-2 editorial-heading text-accent">Content Syndicate</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Fill out the form and our affiliate team will review your application and get back
                to you within 2 business days.
              </p>

              <div className="space-y-4">
                {[
                  "Refer clients and earn commissions on every distribution",
                  "Marketing materials and referral links provided",
                  "Monthly payouts with no minimum threshold",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-accent flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {submitted ? (
                <div className="rounded-3xl border border-accent/30 bg-accent/5 p-12 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-accent/20"
                  >
                    <CheckCircle2 size={40} className="text-accent" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-dark mb-3">Application Received!</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Thank you for applying. Our affiliate team will review your application and
                    reach out within 2 business days.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-3xl border border-zinc-200 bg-white p-8 lg:p-10 shadow-xl space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-dark mb-2">
                        Full Name <span className="text-accent">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-dark placeholder-gray-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-dark mb-2">
                        Email Address <span className="text-accent">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="jane@example.com"
                        className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-dark placeholder-gray-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-dark mb-2">
                      Website or Social Profile
                    </label>
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="https://yourwebsite.com or @yourhandle"
                      className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-dark placeholder-gray-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-dark mb-2">
                      Audience Size
                    </label>
                    <select
                      name="audienceSize"
                      value={formData.audienceSize}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-dark focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                    >
                      <option value="">Select an option</option>
                      <option value="under1k">Under 1,000</option>
                      <option value="1k-10k">1,000 – 10,000</option>
                      <option value="10k-50k">10,000 – 50,000</option>
                      <option value="50k-100k">50,000 – 100,000</option>
                      <option value="over100k">Over 100,000</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-dark mb-2">
                      How do you plan to promote Content Syndicate?{" "}
                      <span className="text-accent">*</span>
                    </label>
                    <textarea
                      name="promotionPlan"
                      required
                      value={formData.promotionPlan}
                      onChange={handleChange}
                      rows={3}
                      placeholder="e.g., Email newsletter, social media posts, blog content, podcast mentions..."
                      className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-dark placeholder-gray-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-dark mb-2">
                      Additional Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Tell us anything else that might help us review your application..."
                      className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-dark placeholder-gray-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: loading ? 1 : 1.02 }}
                    whileTap={{ scale: loading ? 1 : 0.98 }}
                    className="w-full flex items-center justify-center gap-3 py-4 px-8 bg-accent text-dark font-bold rounded-xl hover:bg-accent/90 transition-all text-lg disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <span className="animate-pulse">Submitting...</span>
                    ) : (
                      <>
                        Submit Application
                        <Send size={20} />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
