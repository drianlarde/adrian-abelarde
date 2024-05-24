import { cn } from '@/lib/utils';

export default function Container({ children, className }) {
    return (
        <section
            className={cn(
                'px-8 sm:px-12 md:px-14 lg:px-24 xl:px-44 2xl:px-16',
                className,
            )}
        >
            {children}
        </section>
    );
}
