'use client';

import Container from '@/components/layout/container';
import { Button } from '@/components/ui/button';
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

const experiences = [
    {
        date: "FEB '24 - MAY '24",
        title: 'Full-stack Developer, UI/UX Designer, Motion Graphic Designer',
        company: 'RenewMe',
        badges: [
            'NextJS 14',
            'TypeScript',
            'TailwindCSS',
            'ui/shadcn',
            'Vercel',
            'Figma',
            'Swift UI',
            'After Effects',
            'Premiere Pro',
            'GitHub',
        ],
        url: 'https://www.myrenewme.com/',
        paragraphs: [
            <>
                Developed a high-performance website using <b>NextJS 14</b> to
                showcase the RenewMe mobile app, resulting in faster page loads
                and improved SEO.
            </>,
            <>
                Migrated{' '}
                <a
                    href="https://www.therenewcenter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline"
                >
                    www.therenewcenter.com
                </a>{' '}
                from <b>Wix</b> to <b>NextJS 14</b>, significantly enhancing
                website performance and search engine optimization.
            </>,
            <>
                Designed an intuitive prototype for a meditation iOS tablet
                application using <b>Figma</b>, focusing on delivering a
                seamless user experience for features such as travel tips,
                safety, and meditation exercises. The application is intended
                for placement in hotels.
            </>,
            <>
                Revamped the{' '}
                <a
                    href="https://www.myrenewme.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline"
                >
                    www.myrenewme.com
                </a>{' '}
                website design, improving accessibility and visual appeal to
                create an engaging and aesthetically pleasing user interface.
            </>,
            <>
                Produced a compelling commercial video for the iOS tablet
                application using <b>After Effects</b> and <b>Premiere Pro</b>.
                Utilized <b>Mocha AE's</b> planar tracking capabilities to
                accurately replace the tablet's stock screen with our actual UI
                design created in Figma, resulting in a polished video that
                effectively showcases the application's interface and user
                experience.
            </>,
            <>
                Created a series of contemplative, meditative, and explainer
                videos using <b>After Effects</b> and <b>Premiere Pro</b> to
                support the brand's marketing efforts and content strategy.
            </>,
            <>
                Developed a static front-end test page using <b>SwiftUI</b>,
                demonstrating proficiency in multiple programming languages and
                frameworks.
            </>,
            <>
                Integrated <b>Sanity</b>, a headless CMS, for efficiently
                managing and organizing all RenewMe contents and information on
                the support.myrenewme.com website. Implemented a user-friendly
                search functionality, enabling users to quickly find the
                information they need.
            </>,
        ],
    },
    {
        date: "SEP '23 - JAN '24",
        title: 'Full-stack Developer, UI/UX Designer, Motion Graphic Designer',
        company: 'Constflow',
        badges: [
            'NextJS 14',
            'TypeScript',
            'Aceternity',
            'Server Actions',
            'API Route Handlers',
            'Vercel',
            'CRON Jobs',
            'Vercel',
            'Figma',
            'GitHub',
        ],
        url: 'https://constflow.vercel.app/',
        paragraphs: [
            <>
                Designed the web application using <b>Figma</b>, creating
                intuitive user interfaces and seamless user experiences tailored
                specifically for civil engineering project managers to
                efficiently manage tasks, workflows, and activities.
            </>,
            <>
                Developed a cutting-edge web application using <b>NextJS 13</b>,
                leveraging advanced features such as <b>Server Actions</b>,{' '}
                <b>API Route Handlers</b>, and <b>Vercel CRON Jobs</b> to ensure
                optimal performance and functionality.
            </>,
            <>
                Integrated <b>OpenAI API Embeddings</b> with{' '}
                <b>Supabase Vector</b> to generate real-time, intelligent
                insights (recommendation system) based on project data and
                automatically curated related news articles using CRON Jobs.
                Displayed the generated insights using a real-time streaming{' '}
                <b>GPT-3.5 Turbo</b> to help project managers in decision
                making.
            </>,
            <>
                Implemented a seamless, real-time chat system within the team's
                project environment using <b>Supabase</b> real-time
                functionality. Designed the system to trigger client-side
                updates whenever changes occurred in the database, ensuring
                smooth collaboration and communication among team members.
            </>,
            <>
                Developed a sophisticated team collaboration feature that allows
                teams to invite other teams to collaborate on a single project
                using a unique code. This functionality promotes cross-team
                cooperation and streamlines project management processes.
            </>,
            <>
                Utilized <b>Aceternity</b>, <b>TailwindCSS</b>, and{' '}
                <b>ui/shadcn</b> in the landing page design to incorporate
                modern, trendy animations and achieve a visually appealing look
                that elevates the user experience and creates a lasting first
                impression for visitors.
            </>,
            <>
                Implemented a drag-and-drop <b>KanBan</b> board functionality to
                facilitate efficient task management and workflow optimization
                for project managers and their teams.
            </>,
            <>
                Developed a role-based access control system that allows project
                managers to add team members, create accounts, and assign roles
                such as 'client' or 'project manager'. The system filters access
                based on user roles, limiting actions and page views according
                to the user's assigned role.
            </>,
            <>
                Created a comprehensive dashboard to provide project managers
                with an overview of their team's progress, enabling them to
                track key metrics and make data-driven decisions.
            </>,
            <>
                Implemented a notification system that alerts users of any
                actions taken within their team's project, ensuring that all
                team members stay informed and up-to-date on project
                developments.
            </>,
        ],
    },
    {
        date: "FEB '24 - MAY '24",
        title: 'Full-stack Developer, UI/UX Designer, Logo Designer',
        company: 'SyntechX Labs',
        badges: ['NextJS 14', 'TypeScript', 'Vercel', 'Figma', 'Sanity CMS'],
        url: 'https://www.syntechx.io/',
        paragraphs: [
            <>
                Designed a cutting-edge website for Xpert consulting, empowering
                organizations to harness the full potential of technology
                through innovative software development solutions.
            </>,
            <>
                Utilized NextJS 13, TailwindCSS, Framer Motion, and ui/shadcn to
                create a modern, linear design that delivers a seamless and
                visually appealing user experience.
            </>,
            <>
                Integrated Sanity, a powerful content management system (CMS),
                to streamline the management and publication of blog posts on
                the website. This integration automatically embedded the admin
                panel at the /studio route, eliminating the need for creating a
                separate admin interface and reducing development time.
            </>,
            <>
                Optimized the website's performance and search engine visibility
                using NextJS 13's advanced features and best practices for SEO.
            </>,
        ],
    },
    {
        date: "MAY '23 - AUG '23",
        title: 'Software Engineer Intern, Web Developer',
        company: 'Focus Global Inc',
        badges: [
            'NextJS 14',
            'TypeScript',
            'Vercel',
            'Python',
            'Flask',
            'AWS',
            'JIRA',
            'WordPress',
        ],
        url: 'https://new.boffistudiomanila.com/',
        paragraphs: [
            <>
                Actively contributed to the enhancement of existing e-commerce
                platforms, driving advancements in both front-end and back-end
                capabilities.
            </>,
            <>
                Played a pivotal role in achieving a substantial 5-6 second
                reduction in load time for the revitalized{' '}
                <a
                    href="https://new.boffistudiomanila.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline"
                >
                    Boffi Studio
                </a>{' '}
                website.
            </>,
            <>
                Collaborated on the development of a Siematic KOL platform,
                showcasing world-class products, leveraging cutting-edge web
                technologies: <b>NextJS 13</b>, <b>TypeScript</b>,{' '}
                <b>React Query</b>, <b>ui/shadcn</b>, and <b>Zod</b>.
            </>,
            <>
                Utilized <b>Python</b> and <b>Flask</b> to proficiently handle
                backend tickets, ensuring seamless system operations.
            </>,
            <>
                Implemented cohesive and standardized logging mechanisms across
                various websites, including{' '}
                <a
                    href="https://alifeinfocus.ph/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline"
                >
                    'All Life in Focus'
                </a>
                .
            </>,
            <>
                Leveraged <b>AWS CloudWatch</b> to proactively route system
                anomalies to Slack workspaces using <b>AWS Chatbot</b>, thereby
                accelerating issue detection and resolution.
            </>,
            <>
                Managed WordPress updates for banners, products, and product
                stock management.
            </>,
            <>
                Utilized <b>JIRA</b> for streamlined project management,
                consistently updating progress and assigning task points to
                enhance the software engineering team's visibility into overall
                project velocity.
            </>,
        ],
    },
    {
        date: "AUG '23 - PRESENT",
        title: 'Web Development Lead',
        company: 'Google Developers Students Club (PLM)',
        badges: [
            'Framer Motion',
            'GSAP',
            'NextJS 14',
            'TypeScript',
            'Vercel',
            'Figma',
        ],
        url: 'https://www.gdsc-plm.org/',
        paragraphs: [
            <>
                Developed and designed GDSC website using <b>ReactJS</b> +{' '}
                <b>Framer Motion</b> for animating elements smoothly.
            </>,
            <>
                Spearheaded our collaboration with France (GDSC - EPITA)
                creating a website application connecting students with other
                recommended students that has common interests, courses, and
                availability. Leveraged <b>NextJS 14</b>, <b>server actions</b>,
                and <b>route handlers</b> for quick backend integration.{' '}
                <a
                    href="https://gconnect-client.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline"
                >
                    https://gconnect-client.vercel.app/
                </a>
            </>,
        ],
    },
    {
        date: "NOV '21 - MAY '22",
        title: 'UI/UX Designer, Junior Flutter Developer',
        company: 'PLM - Mobile Application',
        badges: ['Flutter', 'Figma', 'GitHub'],
        url: 'https://play.google.com/store/apps/details?id=icto.plm_app&hl=en&gl=US',
        paragraphs: [
            <>
                Designed and developed a cross-platform mobile app with
                intuitive UI/UX using <b>Flutter</b> that has received 1,000+
                downloads on the Google Play Store.
            </>,
        ],
    },
    {
        date: "FEB '22 - MAY '22",
        title: 'Front-end Website Developer',
        company: 'PLM – Student Health Declaration',
        badges: ['PHP', 'HTML'],
        url: 'https://web4.plm.edu.ph/StudentHealthDeclaration/',
        paragraphs: [
            <>
                Improved user interface for enhanced visual appeal and
                user-friendliness.
            </>,
        ],
    },
    {
        date: "NOV '21 - MAY '22",
        title: 'Front-end Developer – Web Application',
        company: 'Ang Pamantasan',
        badges: [
            'NextJS 12 (Pages Router)',
            'JavaScript',
            'Styled Components',
            'SCSS',
        ],
        url: 'https://www.angpamantasan.org/',
        paragraphs: [
            <>
                Implemented <b>GraphQL</b> for efficient content management,
                retrieval, and dynamic website updates using <b>Contentful</b>.
            </>,
        ],
    },
    {
        date: "NOV '22 - NOV '22",
        title: 'Open-Source DAO Worker',
        company: 'MoonDAO',
        badges: ['Figma'],
        url: 'https://www.moondao.com/',
        paragraphs: [
            <>
                Improved design workflow through Figma file organization,
                structured information architecture, optimized Google Drive
                collaboration and created a design system for consistent and
                cohesive design elements.
            </>,
        ],
    },
    {
        date: "MAY '21 - PRESENT",
        title: 'UI/UX Designer, Motion Graphics Designer',
        company: 'Matrix Co. (Startup Team)',
        badges: ['Figma', 'After Effects', 'Premiere Pro'],
        paragraphs: [
            <>
                Designed user-friendly UI/UX for products like Sellify, created
                a company branding aligned with ethos, and produced a
                promotional video with motion graphics to enhance brand
                visibility and engagement.
            </>,
            <>
                Participated and collaborated and won 1st place in the
                University of the Philippines Diliman – GDSC Solutions Challenge
                2023.
            </>,
        ],
    },
    {
        date: "JAN '23 - JAN '23",
        title: 'Data Scraper/Web Scraper Freelancer',
        badges: ['Python', 'Selenium', 'Scrapy', 'BeautifulSoup'],
        paragraphs: [
            <>
                Received a 5-star rating for delivering high-quality data mining
                and web scraping services using <b>Python</b> libraries,
                developing custom scripts for data extraction and manipulation,
                and maintaining strong communication while ensuring timely
                project completion.
            </>,
        ],
    },
    {
        date: "MAY '20 - AUG '20",
        title: '3D Environment Artist, Unity C# Developer',
        company: 'JujuProdGames',
        badges: ['C#', 'Unity', 'Blender'],
        url: 'https://jujuprodgames.itch.io/dual-robots',
        paragraphs: [
            <>
                Collaborated on Unity project to create 3D environments and
                develop games.
            </>,
        ],
    },
];

const inter = Inter({ subsets: ['latin'] });

const ExperienceItem = ({ experience }: any) => {
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
                    {experience.badges.map((badge: any, index: any) => (
                        <span
                            key={index}
                            className="rounded-full bg-[#212630] px-[10px] py-1 text-xs text-[#89bdf6]"
                        >
                            {badge}
                        </span>
                    ))}
                </div>

                {experience.paragraphs
                    .slice(0, 2)
                    .map((paragraph: any, index: any) => (
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
                                .map((paragraph: any, index: any) => (
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
        const radialGradient = document.querySelector('.radial-gradient');

        const updateRadialGradientPosition = (event: any) => {
            const mouseX = event.clientX;
            const mouseY = event.clientY;

            gsap.to(radialGradient, {
                duration: 1,
                ease: 'power2.out',
                '--mouse-x': `${mouseX}px`,
                '--mouse-y': `${mouseY}px`,
                opacity: 1,
            });
        };

        const removeRadialGradient = () => {
            gsap.to(radialGradient, {
                duration: 0.5,
                ease: 'power2.out',
                opacity: 0,
            });
        };

        document.addEventListener('mousemove', updateRadialGradientPosition);
        document.addEventListener('mouseleave', removeRadialGradient);

        return () => {
            document.removeEventListener(
                'mousemove',
                updateRadialGradientPosition,
            );
            document.removeEventListener('mouseleave', removeRadialGradient);
        };
    }, []);

    return (
        <>
            <div className="radial-gradient fixed top-0 left-0 w-full h-full pointer-events-none -z-10 opacity-10"></div>

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
                            const experiencesElement =
                                document.getElementById('experiences');
                            if (experiencesElement) {
                                experiencesElement.scrollIntoView({
                                    behavior: 'smooth',
                                });
                            }
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
                            className="h-5 w-5"
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
