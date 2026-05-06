type SocialProofBandProps = {
  text: string;
};

export default function SocialProofBand({ text }: SocialProofBandProps) {
  return (
    <section className="py-6">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-lg border border-white/10 bg-white/5 px-6 py-5 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f39c12]">
            Built for operations that need to move
          </p>
          <p className="mt-3 text-base leading-relaxed text-gray-200 sm:text-lg">
            {text}
          </p>
        </div>
      </div>
    </section>
  );
}
