import Link from "next/link";
import { MessageCircle, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-linear-to-b from-black via-black to-black/95">

      <div className="mx-auto max-w-7xl px-6 py-20">

        {/* GRID */}
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-5">

          {/* BRAND */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Career Liberia
            </h2>

            <p className="mt-4 max-w-md text-slate-400 leading-relaxed">
              A modern career ecosystem connecting Liberians to jobs,
              internships, scholarships, startups, and opportunity networks.
            </p>

            {/* NEWSLETTER */}
            <div className="mt-6">
              <p className="text-xs uppercase tracking-wider text-slate-500">
                Stay updated
              </p>

              <div className="mt-3 flex overflow-hidden rounded-xl border border-white/10 bg-white/5">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none"
                />

                <button className="px-5 text-sm font-medium text-white bg-red-600 hover:bg-red-500 transition">
                  Join
                </button>
              </div>

              <p className="mt-2 text-xs text-slate-500">
                Get latest opportunity updates. No spam.
              </p>
            </div>

            {/* SOCIAL LINKS */}
            <div className="mt-6 flex items-center gap-3">

              {/* WhatsApp */}
              <Link
                href="https://wa.me/232XXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-green-500/20 hover:border-green-400/40 transition"
              >
                <MessageCircle className="h-5 w-5 text-slate-300 hover:text-green-400 transition" />
              </Link>

              {/* Google (safe replacement) */}
              <Link
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-blue-500/20 hover:border-blue-400/40 transition"
              >
                <Globe className="h-5 w-5 text-slate-300 hover:text-blue-400 transition" />
              </Link>

              {/* Facebook (SVG fallback - safe) */}
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-blue-600/20 hover:border-blue-500/40 transition"
              >
                <svg
                  className="h-5 w-5 text-slate-300 hover:text-blue-500 transition"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2.5V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.3 0-1.7.8-1.7 1.6V12h2.9l-.5 2.9h-2.4v7A10 10 0 0 0 22 12z"/>
                </svg>
              </Link>

            </div>
          </div>

          {/* PLATFORM */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Platform
            </h3>

            <div className="mt-4 space-y-3">
              {[
                ["Jobs", "/jobs"],
                ["Internships", "/internships"],
                ["Scholarships", "/scholarships"],
                ["Startups", "/startups"],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="block text-sm text-slate-400 hover:text-white transition"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Company
            </h3>

            <div className="mt-4 space-y-3">
              {[
                ["About", "/about"],
                ["Contact", "/contact"],
                ["Developer", "/developer"],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="block text-sm text-slate-400 hover:text-white transition"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* RESOURCES */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Resources
            </h3>

            <div className="mt-4 space-y-3">
              {[
                ["CV Builder", "/cv-builder"],
                ["Letter Builder", "/letter-builder"],
                ["Services", "/services"],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="block text-sm text-slate-400 hover:text-white transition"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="my-12 h-px w-full bg-white/10" />

        {/* BOTTOM BAR */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

          <div className="text-sm text-slate-500 leading-relaxed">
            © {new Date().getFullYear()} Career Liberia. All rights reserved.

            <span className="mx-2 text-slate-700">•</span>

            <span className="inline-flex items-center gap-2">
              Built with intent by{" "}
              <Link
                href="https://uniondrop-group.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-red-400 transition font-medium"
              >
                UnionDrop
              </Link>
            </span>
          </div>

          <div className="flex gap-6 text-sm text-slate-500">
            <Link className="hover:text-white transition" href="/privacy">
              Privacy
            </Link>
            <Link className="hover:text-white transition" href="/terms">
              Terms
            </Link>
            <Link className="hover:text-white transition" href="/cookies">
              Cookies
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}