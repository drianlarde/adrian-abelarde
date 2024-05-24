import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    return [
        {
            url: `${
                process.env.NODE_ENV === 'development'
                    ? 'localhost:3000'
                    : process.env.NEXT_PUBLIC_BASE_URL!
            }/`,
        },
    ];
}
