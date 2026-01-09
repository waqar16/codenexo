import { SERVICES } from '@/constants/services';

export default function sitemap() {
  const now = new Date();
  return [
    { url: 'https://codenexo.tech', lastModified: now },
    { url: 'https://codenexo.tech/services', lastModified: now },
    ...SERVICES.map(s => ({
      url: `https://codenexo.tech/services/${s.slug}`,
      lastModified: now,
    })),
    { url: 'https://codenexo.tech/about', lastModified: now },
    { url: 'https://codenexo.tech/contact', lastModified: now },
  ];
}
