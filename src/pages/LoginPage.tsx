import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Eye, EyeOff, ArrowRight, Lock, Mail } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Redirect to admin login with a short delay for UX
    await new Promise((r) => setTimeout(r, 600));
    window.location.href = `https://admin.contentsyndicate.net/login`;
  };

  return (
    <div className="min-h-screen bg-dark flex">
      {/* Left — branding panel */}
      <div className="hidden lg:flex lg:w-1/2 relative flex-col p-16 overflow-hidden">
        <div className="absolute inset-0 grid-pattern-dark opacity-20" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] blur-[140px] rounded-full bg-accent/20"
        />

        <div className="relative z-10 max-w-md">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl font-bold tracking-tighter font-display text-white leading-tight mb-6"
          >
            Your press releases.
            <span className="block mt-1 editorial-heading text-accent">Globally distributed.</span>
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-gray-400 text-lg leading-relaxed"
          >
            Log in to submit releases, track distribution, and manage your account.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="relative z-10 flex items-center gap-8"
        >
          {[
            { value: "200+", label: "Live Releases" },
            { value: "500+", label: "Media Outlets" },
            { value: "10K+", label: "Distributed" },
          ].map((stat, idx) => (
            <div key={idx}>
              <div className="text-2xl font-bold text-accent font-display">{stat.value}</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Right — login form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-16 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          {/* Mobile logo */}
          <div className="lg:hidden mb-10 flex justify-center">
            <Link to="/">
              <img
                src="/images/Contentsyndicate Logo Dark.svg"
                alt="Content Syndicate"
                className="h-8 w-auto"
              />
            </Link>
          </div>

          <h1 className="text-3xl lg:text-4xl font-bold tracking-tight font-display text-dark mb-2">
            Welcome back
          </h1>
          <p className="text-gray-500 mb-10">
            Don't have an account?{" "}
            <a
              href="https://admin.contentsyndicate.net/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-accent hover:underline"
            >
              Create one free
            </a>
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-dark mb-2">
                Email address
              </label>
              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                />
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-zinc-200 bg-zinc-50 text-dark placeholder-gray-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="password" className="block text-sm font-semibold text-dark">
                  Password
                </label>
                <a
                  href="https://admin.contentsyndicate.net/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-accent hover:underline font-medium"
                >
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-11 pr-12 py-3.5 rounded-xl border border-zinc-200 bg-zinc-50 text-dark placeholder-gray-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-dark transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: loading ? 1 : 1.02 }}
              whileTap={{ scale: loading ? 1 : 0.98 }}
              className="w-full flex items-center justify-center gap-3 py-4 px-8 bg-accent text-dark font-bold rounded-xl hover:bg-accent/90 transition-all text-lg mt-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-accent/20"
            >
              {loading ? (
                <span className="animate-pulse">Signing in...</span>
              ) : (
                <>
                  Sign In
                  <ArrowRight size={20} />
                </>
              )}
            </motion.button>
          </form>

          {/* Divider */}
          <div className="my-8 flex items-center gap-4">
            <div className="flex-1 h-px bg-zinc-200" />
            <span className="text-xs text-gray-400 uppercase tracking-wider">or</span>
            <div className="flex-1 h-px bg-zinc-200" />
          </div>

          {/* Submit press release CTA */}
          <Link
            to="/pricing"
            className="w-full flex items-center justify-center gap-3 py-4 px-8 border-2 border-zinc-200 text-dark font-bold rounded-xl hover:border-accent hover:text-accent transition-all text-base group"
          >
            Submit a Press Release
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>

          <p className="mt-8 text-center text-xs text-gray-400">
            By signing in you agree to our{" "}
            <Link to="/terms" className="hover:text-accent underline">
              Terms
            </Link>
            {" & "}
            <Link to="/privacy" className="hover:text-accent underline">
              Privacy Policy
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
