import { SERVICES } from '@/constants/services';
import { COMPANY } from '@/constants/company';
import { getAllPosts } from '@/lib/blog';

export default function sitemap() {
  const now = new Date();
  const blogPosts = getAllPosts();

  return [
    { url: COMPANY.website, lastModified: now },
    { url: `${COMPANY.website}/services`, lastModified: now },
    ...SERVICES.map(s => ({
      url: `${COMPANY.website}/services/${s.slug}`,
      lastModified: now,
    })),
    {
      url: `${COMPANY.website}/services/real-estate-leads-automation`,
      lastModified: now,
    },
    { url: `${COMPANY.website}/about`, lastModified: now },
    { url: `${COMPANY.website}/contact`, lastModified: now },
    { url: `${COMPANY.website}/blog`, lastModified: now },
    ...blogPosts.map((post) => ({
      url: `${COMPANY.website}${post.url}`,
      lastModified: new Date(post.updatedAt ?? post.date),
    })),
  ];
}
