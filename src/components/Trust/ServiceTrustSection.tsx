import { TRUST_BULLETS } from "@/constants/company";

type ServiceTrustSectionProps = {
  description: string;
};

export default function ServiceTrustSection({
  description,
}: ServiceTrustSectionProps) {
  return (
    <section className="border-y border-white/10 bg-[#071127] py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f39c12]">
              Trust and delivery
            </p>
            <h2 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl md:text-4xl">
              Why Businesses Work With Us
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg">
              {description}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {TRUST_BULLETS.map((item) => (
              <article
                key={item}
                className="rounded-lg border border-white/10 bg-white/5 p-5"
              >
                <div className="inline-flex size-10 items-center justify-center rounded-lg bg-[#f39c12] text-base font-black text-black">
                  +
                </div>
                <p className="mt-4 text-sm font-medium leading-relaxed text-white sm:text-base">
                  {item}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
