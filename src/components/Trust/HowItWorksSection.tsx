import { HOW_IT_WORKS_STEPS } from "@/constants/company";

type HowItWorksSectionProps = {
  description: string;
};

export default function HowItWorksSection({
  description,
}: HowItWorksSectionProps) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f39c12]">
            How it works
          </p>
          <h2 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl md:text-4xl">
            Clear Delivery Process
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-300 sm:text-lg">
            {description}
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <article
              key={step.title}
              className="rounded-lg border border-white/10 bg-white/5 p-6"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f39c12]">
                Step {index + 1}
              </p>
              <h3 className="mt-4 text-xl font-bold text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-300">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
