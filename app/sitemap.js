import { BLOG_POSTS } from '@/lib/constants';

const URL = 'https://www.mksiteverona.com';

export default function sitemap() {
    const routes = [
        '',
        '/servizi',
        '/prezzi',
        '/blog',
        '/faq',
        '/contatti',
        '/privacy',
        '/termini',
        '/cookie',
        '/disclaimer',
    ].map((route) => ({
        url: `${URL}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
    }));

    const blogRoutes = BLOG_POSTS.map((post) => ({
        url: `${URL}/blog/${post.slug}`,
        lastModified: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()).toISOString(), // Use current date or parse post date if format allows
        changeFrequency: 'monthly',
        priority: 0.7,
    }));

    return [...routes, ...blogRoutes];
}
