import { Linkedin, Mail, Twitter } from "lucide-react";

type ShareButtonsProps = {
  title: string;
  url: string;
};

const shareItems = [
  {
    label: "Share on X",
    icon: Twitter,
    buildUrl: (title: string, url: string) =>
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
  },
  {
    label: "Share on LinkedIn",
    icon: Linkedin,
    buildUrl: (_title: string, url: string) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  },
  {
    label: "Share via email",
    icon: Mail,
    buildUrl: (title: string, url: string) =>
      `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`,
  },
];

export default function ShareButtons({ title, url }: ShareButtonsProps) {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f6c35b]">Share this article</p>
      <div className="mt-4 flex flex-wrap gap-3">
        {shareItems.map((item) => {
          const Icon = item.icon;

          return (
            <a
              key={item.label}
              href={item.buildUrl(title, url)}
              target="_blank"
              rel="noreferrer"
              aria-label={item.label}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-gray-200 transition hover:border-[#f39c12]/30 hover:text-[#f6c35b]"
            >
              <Icon className="h-4 w-4" />
              <span>{item.label}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
