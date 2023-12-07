import { MetadataRoute } from 'next'
 
// hàm robots cho phép tất cả con bot trên internet đào dữ liệu, và nói rằng file nào được đào và file nao được đào.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*', // cho phép đào tất cả dữ liệu
      allow: '/', // cho phép tất cả các đường link
    //   disallow: '/private/', // đường link k muốn bot đào dữ liệu
    },
    sitemap: 'https://share-video-youtube.vercel.app/list-video/sitemap.xml', //sitemap là đường dẫn đến tệp sitemap.xml của trang web
  }
}