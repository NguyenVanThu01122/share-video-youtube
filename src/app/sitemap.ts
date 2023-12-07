import { MetadataRoute } from 'next'
 
// hàm sitemap nói cho bot biết page nào ưu tiên, page nào kém ưu tiên hơn
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://share-video-youtube.vercel.app/list-video',
      lastModified: new Date(),
      changeFrequency: 'yearly',// độ thay đổi website
      priority: 1, //độ ưu tiên website
    },
    {
      url: 'https://share-video-youtube.vercel.app/login',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
        url: 'https://share-video-youtube.vercel.app/register',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
      },
    
  ]
}