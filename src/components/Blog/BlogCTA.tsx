import Link from "next/link";
import { ArrowRight, CalendarCheck } from "lucide-react";

type BlogCTAProps = {
  compact?: boolean;
};

export default function BlogCTA({ compact = false }: BlogCTAProps) {
  return (
    <aside className="my-12 overflow-hidden rounded-3xl border border-[#f39c12]/20 bg-[linear-gradient(135deg,rgba(243,156,18,0.16),rgba(255,255,255,0.045)_34%,rgba(5,12,24,0.92))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] sm:p-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f6c35b]">
            Build with CodeNexo
          </p>
          <h2 className={`${compact ? "mt-3 text-2xl" : "mt-4 text-3xl"} font-bold leading-tight text-white`}>
            Need help implementing automation or AI solutions for your business?
          </h2>
          <p className="mt-4 text-sm leading-7 text-gray-300 sm:text-base">
            We help teams turn manual workflows, product ideas, and integration bottlenecks into reliable software
            systems that are ready for real operations.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
          <Link
            href="/contact#schedule-call"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#f39c12] px-5 text-sm font-semibold text-black transition hover:bg-[#f6ad27]"
          >
            <CalendarCheck className="h-4 w-4" />
            Book Free Consultation
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/[0.04] px-5 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/[0.07]"
          >
            Contact CodeNexo
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </aside>
  );
}
