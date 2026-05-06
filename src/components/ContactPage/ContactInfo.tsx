import React from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { COMPANY } from "@/constants/company";

const ContactInfo = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#041025] to-[#0b1020] py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2">
          <div>
            <h3 className="mb-6 text-xl font-bold sm:text-2xl md:text-3xl">
              Direct Contact Details
            </h3>
            <p className="mb-8 text-gray-300">
              Reach out by email or phone if you want to discuss a project,
              request a sample, or confirm technical fit before booking a call.
            </p>

            <div className="space-y-6">
              <div className="group flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-yellow-400/10 transition-colors group-hover:bg-yellow-400/20">
                  <FaEnvelope className="text-xl text-yellow-400" />
                </div>
                <div>
                  <p className="mb-1 text-sm text-gray-400">Email us at</p>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="text-base font-semibold text-white transition-colors hover:text-yellow-400 sm:text-lg"
                  >
                    {COMPANY.email}
                  </a>
                </div>
              </div>

              <div className="group flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-yellow-400/10 transition-colors group-hover:bg-yellow-400/20">
                  <FaPhoneAlt className="text-xl text-yellow-400" />
                </div>
                <div>
                  <p className="mb-1 text-sm text-gray-400">Call us</p>
                  <a
                    href={COMPANY.phoneHref}
                    className="text-base font-semibold text-white transition-colors hover:text-yellow-400 sm:text-lg"
                  >
                    {COMPANY.phone}
                  </a>
                </div>
              </div>

              <div className="group flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-yellow-400/10 transition-colors group-hover:bg-yellow-400/20">
                  <FaMapMarkerAlt className="text-xl text-yellow-400" />
                </div>
                <div>
                  <p className="mb-1 text-sm text-gray-400">Based in</p>
                  <p className="text-base font-semibold text-white sm:text-lg">
                    {COMPANY.city}, {COMPANY.country}
                  </p>
                  <p className="mt-1 text-sm text-gray-300">
                    Working with clients worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-8">
            <h4 className="mb-6 text-xl font-bold">Business Response Expectations</h4>

            <div className="mb-8 space-y-4">
              <a
                href="https://linkedin.com/company/codenexo"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-lg bg-white/5 p-3 transition-all hover:bg-white/10"
              >
                <FaLinkedin className="text-2xl text-blue-400" />
                <div>
                  <p className="font-semibold transition-colors group-hover:text-yellow-400">
                    LinkedIn
                  </p>
                  <p className="text-xs text-gray-400">Follow our company updates</p>
                </div>
              </a>

              <a
                href="https://github.com/mubaxhir"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-lg bg-white/5 p-3 transition-all hover:bg-white/10"
              >
                <FaGithub className="text-2xl text-gray-300" />
                <div>
                  <p className="font-semibold transition-colors group-hover:text-yellow-400">
                    GitHub
                  </p>
                  <p className="text-xs text-gray-400">See our engineering work</p>
                </div>
              </a>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h5 className="mb-3 font-semibold">Business Hours</h5>
              <p className="text-sm text-gray-300">
                Monday - Friday: 9:00 AM - 6:00 PM (PKT)
              </p>
              <p className="mt-2 text-sm text-gray-300">
                We respond to all inquiries within 24 hours during business
                days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
