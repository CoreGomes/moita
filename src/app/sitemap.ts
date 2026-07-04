import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site-config'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/chaleAOrigem`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]
}
