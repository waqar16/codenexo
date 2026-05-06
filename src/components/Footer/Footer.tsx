import Link from "next/link";
import { COMPANY } from "@/constants/company";

const Footer = () => {
  return (
    <footer className="w-full border border-b-0 border-x-0 bg-[#050b17]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-8 text-white">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f39c12]">
              Trusted software and automation partner
            </p>
            <h2 className="mt-3 text-2xl font-extrabold">{COMPANY.name}</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-300 sm:text-base">
              Production-ready automation, AI systems, and custom software for
              teams that need dependable execution.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-gray-400">
                Contact
              </h3>
              <div className="mt-3 space-y-2 text-sm text-gray-200">
                <p>
                  <a href={`mailto:${COMPANY.email}`} className="hover:text-[#f39c12]">
                    {COMPANY.email}
                  </a>
                </p>
                <p>
                  <a href={COMPANY.phoneHref} className="hover:text-[#f39c12]">
                    {COMPANY.phone}
                  </a>
                </p>
                <p>
                  {COMPANY.city}, {COMPANY.country}
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-gray-400">
                Company
              </h3>
              <div className="mt-3 space-y-2 text-sm text-gray-200">
                <p>
                  <Link href="/about" className="hover:text-[#f39c12]">
                    About
                  </Link>
                </p>
                <p>
                  <Link href="/services" className="hover:text-[#f39c12]">
                    Services
                  </Link>
                </p>
                <p>
                  <Link href="/contact" className="hover:text-[#f39c12]">
                    Contact Us
                  </Link>
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-gray-400">
                Legal
              </h3>
              <div className="mt-3 space-y-2 text-sm text-gray-200">
                <p>
                  <Link href="/privacy-policy" className="hover:text-[#f39c12]">
                    Privacy Policy
                  </Link>
                </p>
                <p>
                  <Link href="/terms-of-service" className="hover:text-[#f39c12]">
                    Terms of Service
                  </Link>
                </p>
                <p>
                  <Link href="/contact" className="hover:text-[#f39c12]">
                    Business Contact
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/contact#schedule-call"
            className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:from-blue-700 hover:to-purple-700 hover:shadow-lg"
          >
            Book a Call
          </Link>
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} <span className="font-semibold">{COMPANY.name}</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
