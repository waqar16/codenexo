"use client";

import React from "react";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { COMPANY } from "@/constants/company";

// Brand-approved SVG for WhatsApp
const WhatsAppIcon = () => (
  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.03-5.116-2.905-6.994C16.255 1.87 13.78 1.837 11.13 1.837c-5.437 0-9.861 4.418-9.865 9.862 0 1.77.46 3.5 1.332 5.03L1.6 21.054l4.582-1.203c.17.094.341.187.513.275zm10.957-7.68c-.3-.15-1.772-.875-2.046-.975-.275-.1-.475-.15-.675.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-1.205-.6-2.012-1.105-2.818-2.49-.22-.38.22-.353.63-1.17.075-.15.038-.282-.018-.393-.056-.113-.506-1.217-.693-1.666-.182-.438-.364-.378-.506-.385-.13-.006-.28-.008-.43-.008-.15 0-.394.056-.6.282-.206.225-.788.77-1.012 1.257-.225.487-.394.975-.487 1.2-.562 1.35.487 2.7.937 3.3.037.05.075.094.112.138 2.012 2.962 4.125 3.862 6.187 4.575.487.168.956.125 1.312.075.394-.056 1.772-.725 2.022-1.425.25-.7.25-1.3.175-1.425-.075-.125-.275-.2-.575-.35z" />
  </svg>
);

export default function MobileCtaBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden h-[60px] bg-[#0c1122]/90 backdrop-blur-md border-t border-white/10 px-4 py-2.5 flex items-center justify-between gap-3 shadow-[0_-4px_24px_rgba(0,0,0,0.5)]">
      {/* Book Call Button */}
      <Link
        href="/contact#schedule-call"
        className="flex-1 h-[40px] rounded-xl bg-[#f39c12] hover:bg-[#f5a623] active:bg-[#d8840b] text-black font-bold text-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-lg shadow-[#f39c12]/10"
      >
        <Calendar className="h-4 w-4" />
        <span>Book Call</span>
      </Link>

      {/* WhatsApp Button */}
      <a
        href={COMPANY.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 h-[40px] rounded-xl bg-[#25D366] hover:bg-[#20ba56] active:bg-[#1a9a47] text-white font-bold text-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-lg shadow-[#25D366]/10"
      >
        <WhatsAppIcon />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
