import { Mail } from "lucide-react";

export default function NewsletterSection() {
  return (
    <section className="mt-12 rounded-3xl border border-white/10 bg-white/[0.035] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.22)] sm:p-8">
      <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#f39c12]/25 bg-[#f39c12]/10 text-[#f6c35b]">
            <Mail className="h-4 w-4" />
          </div>
          <h2 className="mt-4 text-2xl font-bold leading-tight text-white sm:text-3xl">
            Get practical systems thinking in your inbox
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base">
            Occasional notes on AI automation, product delivery, and scalable software systems. No noise, just useful
            ideas for teams building better operations.
          </p>
        </div>

        <form className="flex flex-col gap-3 sm:flex-row lg:justify-end">
          <label className="min-w-0 flex-1">
            <span className="sr-only">Email address</span>
            <input
              type="email"
              name="email"
              placeholder="you@company.com"
              className="h-12 w-full rounded-xl border border-white/10 bg-[#07101d] px-4 text-sm text-white outline-none placeholder:text-gray-500 focus:border-[#f39c12]/45"
            />
          </label>
          <button
            type="submit"
            className="h-12 rounded-xl bg-[#f39c12] px-5 text-sm font-semibold text-black transition hover:bg-[#f6ad27]"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
