import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],
        sitemap: `${
            process.env.NODE_ENV === 'development'
                ? 'localhost:3000'
                : process.env.NEXT_PUBLIC_BASE_URL!
        }/sitemap.xml`,
    };
}
