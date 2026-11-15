import type { MetadataRoute } from 'next'
import { SITE_URL } from './lib/site'
import { getArticles } from './lib/insights'

// Public pages only; /styleguide is an internal proposal and stays out.
const PAGES: { path: string; priority: number }[] = [
  { path: '/', priority: 1 },
  { path: '/services', priority: 0.9 },
  { path: '/about', priority: 0.7 },
  { path: '/insights', priority: 0.7 },
  { path: '/contact', priority: 0.8 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  const pages: MetadataRoute.Sitemap = PAGES.map(({ path, priority }) => ({
    url: `${SITE_URL}${path === '/' ? '' : path}`,
    lastModified,
    changeFrequency: 'monthly',
    priority,
  }))
  const articles: MetadataRoute.Sitemap = getArticles().map((a) => ({
    url: `${SITE_URL}/insights/${a.slug}`,
    lastModified: new Date(`${a.date}T00:00:00Z`),
    changeFrequency: 'yearly',
    priority: 0.6,
  }))
  return [...pages, ...articles]
}
