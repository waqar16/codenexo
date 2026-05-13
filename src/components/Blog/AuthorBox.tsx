import Image from "next/image";

export default function AuthorBox() {
  return (
    <section className="mt-12 rounded-3xl border border-white/10 bg-white/[0.035] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.2)] sm:p-8">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-[#f39c12]/25 bg-white/[0.04]">
          <Image
            src="/mubashir.jpg"
            alt="Mubashir Babar"
            fill
            sizes="80px"
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f6c35b]">Author</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Mubashir Babar</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base">
            Founder of CodeNexo, specializing in AI automation, custom software systems, and scalable business
            platforms for teams that need practical execution.
          </p>
        </div>
      </div>
    </section>
  );
}
