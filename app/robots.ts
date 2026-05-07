import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Chặn bot vào các trang không muốn index (nếu có)
    },
    sitemap: 'https://luyenthi.giaoducsaigon.edu.vn/sitemap.xml', // Thay bằng tên miền thực tế
  }
}