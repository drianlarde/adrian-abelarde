import { cn } from '@/lib/utils';
import { Analytics } from '@vercel/analytics/react';
import { Kanit } from 'next/font/google';

import './globals.css';

const kanit = Kanit({
    subsets: ['latin'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
    metadataBase: new URL(
        process.env.NODE_ENV === 'development'
            ? 'localhost:3000'
            : process.env.NEXT_PUBLIC_BASE_URL!,
    ),
    title: 'Adrian Abelarde',
    description:
        'Full-stack Developer, UI/UX Designer, 3D Artist, Motion Designer, and more. Creative front-end developer with a passion for creating beautiful and functional user experiences. I love animations!',
    openGraph: {
        title: 'Adrian Abelarde, Full-stack Developer',
        description:
            'Full-stack Developer, UI/UX Designer, 3D Artist, Motion Designer, and more. Creative front-end developer with a passion for creating beautiful and functional user experiences. I love animations!',
        type: 'website',
        images: [
            `${
                process.env.NODE_ENV === 'development'
                    ? 'localhost:3000'
                    : process.env.NEXT_PUBLIC_BASE_URL!
            }/opengraph-image.png`,
        ],
    },
    twitter: {
        card: 'summary_large_image',
    },
};

export default function RootLayout({ children }: any) {
    return (
        <html lang="en">
            <body className={cn(kanit.className, 'bg-[#181c26]')}>
                {children}
                <Analytics />
            </body>
        </html>
    );
}
