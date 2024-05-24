'use client';

import Container from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import { experiences } from '@/lib/constants/experience';
import { cn } from '@/lib/utils';
import {
    ChevronDownIcon,
    ChevronUpIcon,
    ExternalLinkIcon,
    GitHubLogoIcon,
    LinkedInLogoIcon,
} from '@radix-ui/react-icons';
import { AnimatePresence, motion } from 'framer-motion';
import { gsap } from 'gsap';
import { Inter } from 'next/font/google';
import { useEffect, useState } from 'react';
import AnimatedCursor from 'react-animated-cursor';

const inter = Inter({ subsets: ['latin'] });

const ExperienceItem = ({ experience }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const variants = {
        hidden: { opacity: 0, height: 0 },
        visible: { opacity: 1, height: 'auto' },
    };

    return (
        <section
            className={cn(
                'group cursor-pointer overflow-y-hidden rounded-2xl border-t-[0.4px] border-white/0 px-4 py-6 font-light transition-all duration-100 ease-in-out hover:border-white/20 hover:bg-[#ffffff08] hover:text-blue-400 hover:shadow-2xl md:-mx-8 md:px-8',
                inter.className,
            )}
        >
            <p className="mb-2 text-xs font-medium text-[#878cab]">
                {experience.date}
            </p>
            <div>
                <div className="flex w-full justify-between">
                    <a
                        className="text-lg"
                        href={experience.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h1 className="mb-2 max-w-[400px]">
                            {experience.title}{' '}
                            <span className="mx-2 font-bold">·</span>{' '}
                            {experience.company}
                        </h1>
                    </a>
                    {/* If no link or url, don't show this */}
                    {experience.url && (
                        <a
                            className="transform text-lg transition-all duration-100 ease-in-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            href={experience.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <ExternalLinkIcon className="inline-block h-5 w-5" />
                        </a>
                    )}
                </div>

                {/* Create badges based on experience.badges */}
                <div className="mb-4 flex max-w-[70%] flex-wrap gap-1">
                    {experience.badges.map((badge, index) => (
                        <span
                            key={index}
                            className="rounded-full bg-[#212630] px-[10px] py-1 text-xs text-[#89bdf6]"
                        >
                            {badge}
                        </span>
                    ))}
                </div>

                {experience.paragraphs.slice(0, 2).map((paragraph, index) => (
                    <p
                        key={index}
                        className="mb-4 text-sm leading-6 text-[#878cab]"
                    >
                        {paragraph}
                    </p>
                ))}
                {!isOpen && experience.paragraphs.length > 2 && (
                    <motion.button
                        className="mt-2 flex items-center text-sm leading-6 text-blue-400"
                        onClick={toggleDropdown}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Show more <ChevronDownIcon className="ml-1 h-4 w-4" />
                    </motion.button>
                )}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={variants}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                            {experience.paragraphs
                                .slice(2)
                                .map((paragraph, index) => (
                                    <p
                                        key={index}
                                        className="mb-4 text-sm leading-6 text-[#878cab]"
                                    >
                                        {paragraph}
                                    </p>
                                ))}
                            <motion.button
                                className="mt-2 flex items-center text-sm leading-6 text-blue-400"
                                onClick={toggleDropdown}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Show less{' '}
                                <ChevronUpIcon className="ml-1 h-4 w-4" />
                            </motion.button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default function Home() {
    useEffect(() => {
        const radialGradient = document.getElementById('radial-gradient');

        const updateRadialGradientPosition = (event) => {
            const mouseX = event.clientX;
            const mouseY = event.clientY;

            gsap.to(radialGradient, {
                duration: 1,
                ease: 'power2.out',
                '--mouse-x': `${mouseX}px`,
                '--mouse-y': `${mouseY}px`,
            });
        };

        document.addEventListener('mousemove', updateRadialGradientPosition);

        return () => {
            document.removeEventListener(
                'mousemove',
                updateRadialGradientPosition,
            );
        };
    }, []);

    return (
        <>
            <div
                id="radial-gradient"
                className="radial-gradient opacity-30"
            ></div>

            <AnimatedCursor
                innerSize={8}
                outerSize={8}
                color="71, 188, 255"
                outerAlpha={0.2}
                innerScale={0.7}
                outerScale={5}
                clickables={[
                    'a',
                    'input[type="text"]',
                    'input[type="email"]',
                    'input[type="number"]',
                    'input[type="submit"]',
                    'input[type="image"]',
                    'label[for]',
                    'select',
                    'textarea',
                    'button',
                    '.link',
                ]}
            />

            <Container className="fixed left-0 z-10 hidden h-full justify-between py-20 text-[#dde8ff] xl:flex xl:flex-col">
                <div>
                    <h1 className="mb-4 text-5xl font-semibold">
                        Adrian Abelarde
                    </h1>
                    <h4
                        className={cn(
                            'mb-4 text-xl font-normal',
                            inter.className,
                        )}
                    >
                        Full-stack Developer
                    </h4>
                    <p
                        className={cn(
                            'mb-20 max-w-lg text-base font-light leading-[28px] text-[#a9a5c8]',
                            inter.className,
                        )}
                    >
                        Passionate full-stack developer with a strong foundation
                        in Computer Science. I love exploring the latest web
                        technologies and leveraging my diverse skill set to
                        build innovative, user-friendly applications.
                    </p>
                </div>

                <ul
                    className={cn(
                        'flex gap-10 text-sm transition-all duration-100 ease-in-out',
                        inter.className,
                    )}
                >
                    <li
                        className="cursor-pointer uppercase tracking-widest underline-offset-8 hover:underline"
                        onClick={() => {
                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth',
                            });
                        }}
                    >
                        About
                    </li>
                    <li
                        className="cursor-pointer uppercase tracking-widest underline-offset-8 hover:underline"
                        onClick={() => {
                            // Go to #experiences smoothly
                            document
                                .getElementById('experiences')
                                .scrollIntoView({
                                    behavior: 'smooth',
                                });
                        }}
                    >
                        Experiences
                    </li>
                </ul>

                <section className="flex items-center gap-6">
                    <a
                        href="https://github.com/drianlarde"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-all duration-100 ease-in-out hover:text-blue-400"
                    >
                        <GitHubLogoIcon className="h-6 w-6" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/drianlarde/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-all duration-100 ease-in-out hover:text-blue-400"
                    >
                        <LinkedInLogoIcon className="h-6 w-6" />
                    </a>
                    <a
                        href="https://twitter.com/drianlarde_main"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-all duration-100 ease-in-out hover:text-blue-400"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1200 1227"
                            fill="none"
                            class="h-5 w-5"
                            aria-hidden="true"
                        >
                            <path
                                d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
                                fill="currentColor"
                            ></path>
                        </svg>
                    </a>
                </section>
            </Container>

            <main className="relative py-20 text-[#dde8ff]">
                <Container className="flex w-full flex-col items-center xl:items-end">
                    <div className="block xl:hidden">
                        <h1 className="mb-4 text-5xl font-semibold">
                            Adrian Abelarde
                        </h1>
                        <h4
                            className={cn(
                                'mb-4 text-xl font-normal',
                                inter.className,
                            )}
                        >
                            Full-stack Developer
                        </h4>
                        <p
                            className={cn(
                                'mb-4 max-w-lg text-base font-light leading-[28px] text-[#c6c3dc]',
                                inter.className,
                            )}
                        >
                            Passionate full-stack developer with a strong
                            foundation in Computer Science. I love exploring the
                            latest web technologies and leveraging my diverse
                            skill set to build innovative, user-friendly
                            applications.
                        </p>
                    </div>

                    <div className="max-w-[500px]">
                        <p
                            id="about"
                            className={cn(
                                'w-full text-base font-light leading-[28px] text-[#878cab]',
                                inter.className,
                            )}
                        >
                            My passion for web development blossomed when I
                            began my Computer Science degree at{' '}
                            <span className="font-medium text-white">
                                <a
                                    href="https://plm.edu.ph/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-blue-400"
                                >
                                    Pamantasan ng Lungsod ng Maynila
                                </a>
                            </span>{' '}
                            in 2020. Since then, I've honed my skills as a
                            full-stack developer, working on diverse projects
                            like{' '}
                            <span className="font-medium text-white">
                                <a
                                    href="https://myrenewme.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-blue-400"
                                >
                                    RenewMe
                                </a>
                            </span>
                            ,{' '}
                            <span className="font-medium text-white">
                                <a
                                    href="https://constflow.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-blue-400"
                                >
                                    Constflow
                                </a>
                            </span>
                            ,{' '}
                            <span className="font-medium text-white">
                                {' '}
                                <a
                                    href="https://www.syntechx.io/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-blue-400"
                                >
                                    SyntechX Labs
                                </a>
                            </span>
                            , and an internship at{' '}
                            <span className="font-medium text-white">
                                <a
                                    href="https://www.focusglobalinc.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-blue-400"
                                >
                                    Focus Global Inc.
                                </a>
                            </span>{' '}
                            I love blending creativity with technical expertise,
                            whether I'm designing UI/UX in Figma, implementing
                            real-time features, or optimizing performance.
                        </p>
                        <br />
                        <p
                            className={cn(
                                'w-full text-base font-light leading-[28px] text-[#878cab]',
                                inter.className,
                            )}
                        >
                            I'm also the Web Development Lead at{' '}
                            <span className="font-medium text-white">
                                <a
                                    href="https://www.gdsc-plm.org/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-blue-400"
                                >
                                    Google Developers Students Club (PLM)
                                </a>
                            </span>
                            . I've collaborated on impactful projects and led a
                            team to victory in the Diliman Solutions Challenge
                            2023.
                        </p>
                        <br />
                        <p
                            className={cn(
                                'mb-4 w-full text-base font-light leading-[28px] text-[#878cab]',
                                inter.className,
                            )}
                        >
                            When I'm not coding, you'll find me exploring design
                            trends, gaming, reading self-help books, cycling or
                            enjoying adventures with loved ones.
                        </p>
                        <Button
                            className={cn(
                                'bg-transparent px-0 underline-offset-8 shadow-transparent hover:bg-transparent hover:underline',
                                inter.className,
                            )}
                        >
                            <a
                                href="https://docs.google.com/document/d/1Xw42vjdDitkOtHc7Bez66W_GAhI30XEykTMJKCVWPGk/edit?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Full Résumé
                            </a>{' '}
                            <ExternalLinkIcon className="ml-2 h-4 w-4" />
                        </Button>

                        {/* Divider */}
                        <div
                            id="experiences"
                            className="my-6 h-0.5 w-full bg-[#2a2e3b]"
                        />

                        {experiences.map((experience, index) => (
                            <ExperienceItem
                                key={index}
                                experience={experience}
                            />
                        ))}
                    </div>
                </Container>
            </main>
        </>
    );
}
