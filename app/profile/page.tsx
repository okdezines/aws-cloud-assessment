import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
    ArrowRight,
    BookOpen,
    BriefcaseBusiness,
    Cloud,
    Code2,
    GraduationCap,
    // MapPin,
    ServerCog,
} from "lucide-react";

export default function ProfilePage() {
    return (
        <main className="min-h-screen bg-white text-slate-900">
            <Navbar />

            {/* HERO */}
            <section className="border-b border-slate-200 bg-gradient-to-b from-blue-50/70 via-white to-white">
                <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[1fr_360px] lg:px-14 lg:py-28">
                    <div className="max-w-3xl">
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
                            Profile · OHK
                        </p>

                        <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                            Omphalus Kua
                        </h1>

                        <p className="mt-5 text-xl font-medium text-slate-600 sm:text-2xl">
                            Cloud Engineering Student
                            <span className="text-blue-600"> · </span>
                            Aspiring DevOps Engineer
                        </p>

                        <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600">
                            Building practical skills across cloud infrastructure,
                            automation, networking, security and modern software
                            development, with a focus on turning technical knowledge into
                            real-world solutions.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                                AWS
                            </span>

                            <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                                Cloud Engineering
                            </span>

                            <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                                DevOps
                            </span>

                            <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                                React / Next.js
                            </span>
                        </div>
                    </div>

                    {/* OHK Identity Card */}
                    <div className="flex items-center justify-center lg:justify-end">
                        <div className="relative flex aspect-square w-full max-w-[320px] items-center justify-center overflow-hidden rounded-[2rem] border border-blue-100 bg-blue-600 shadow-xl shadow-blue-900/10">
                            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-yellow-300/90" />
                            <div className="absolute -bottom-20 -left-16 h-56 w-56 rounded-full border-[30px] border-white/10" />

                            <div className="relative text-center text-white">
                                <p className="text-6xl font-black tracking-[-0.08em] sm:text-7xl">
                                    OHK.
                                </p>

                                <p className="mt-4 text-xs font-bold uppercase tracking-[0.3em] text-blue-100">
                                    Cloud · Code · Build
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ABOUT */}
            <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-14">
                <div className="grid gap-12 lg:grid-cols-[220px_1fr]">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
                            01 · About
                        </p>

                        <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950">
                            My journey
                        </h2>
                    </div>

                    <div className="max-w-3xl">
                        <p className="text-lg leading-9 text-slate-700">
                            I am currently studying toward a Diploma in Cloud Engineering —
                            Level 7 at Yoobee College of Creative Innovation, developing
                            practical skills in cloud infrastructure, AWS, networking,
                            security and automation.
                        </p>

                        <p className="mt-6 text-base leading-8 text-slate-600">
                            My background combines creative technology, web development and
                            several years working in the construction industry. Returning to
                            technology has given me a strong interest in connecting software
                            development with reliable cloud infrastructure and DevOps
                            practices.
                        </p>

                        <p className="mt-6 text-base leading-8 text-slate-600">
                            My goal is to continue developing as a cloud and DevOps
                            practitioner by building practical projects that demonstrate
                            both technical implementation and an understanding of why cloud
                            systems are designed the way they are.
                        </p>
                    </div>
                </div>
            </section>

            {/* BACKGROUND */}
            <section className="border-y border-slate-200 bg-slate-50">
                <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-14">
                    <div className="grid gap-12 lg:grid-cols-[220px_1fr]">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
                                02 · Background
                            </p>

                            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950">
                                Experience & education
                            </h2>
                        </div>

                        <div className="grid gap-5 md:grid-cols-2">
                            <ProfileCard
                                icon={<GraduationCap className="h-5 w-5" />}
                                eyebrow="Current Study"
                                title="Diploma in Cloud Engineering — Level 7"
                                description="Yoobee College of Creative Innovation · 2026"
                            />

                            <ProfileCard
                                icon={<BookOpen className="h-5 w-5" />}
                                eyebrow="Web Development"
                                title="Full-Stack Web Development"
                                description="Dev Academy Wellington · 2019"
                            />

                            <ProfileCard
                                icon={<Code2 className="h-5 w-5" />}
                                eyebrow="Creative Technology"
                                title="Bachelor of Creative Technologies"
                                description="WelTec · 2014"
                            />

                            <ProfileCard
                                icon={<BriefcaseBusiness className="h-5 w-5" />}
                                eyebrow="Industry Experience"
                                title="Construction"
                                description="Five years of practical experience in the construction industry before returning to technology."
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* CURRENT FOCUS */}
            <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-14">
                <div className="grid gap-12 lg:grid-cols-[220px_1fr]">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
                            03 · Focus
                        </p>

                        <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950">
                            What I&apos;m building
                        </h2>
                    </div>

                    <div className="grid gap-5 md:grid-cols-3">
                        <FocusCard
                            icon={<Cloud className="h-6 w-6" />}
                            title="Cloud Infrastructure"
                            description="Building practical knowledge of AWS compute, storage, networking, monitoring and security."
                        />

                        <FocusCard
                            icon={<ServerCog className="h-6 w-6" />}
                            title="DevOps & Automation"
                            description="Learning how automation, infrastructure practices and operational tooling improve reliable delivery."
                        />

                        <FocusCard
                            icon={<Code2 className="h-6 w-6" />}
                            title="Software Development"
                            description="Continuing to develop with React, Next.js and modern web technologies alongside cloud engineering."
                        />
                    </div>
                </div>
            </section>

            {/* ASSESSMENT */}
            <section className="mx-auto max-w-7xl px-6 pb-24 sm:px-10 lg:px-14">
                <div className="overflow-hidden rounded-3xl bg-slate-950 text-white">
                    <div className="grid gap-10 px-7 py-10 sm:px-10 lg:grid-cols-[1fr_auto] lg:items-center lg:px-12 lg:py-12">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-300">
                                Current Project
                            </p>

                            <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
                                AWS Cloud Infrastructure Assessment
                            </h2>

                            <p className="mt-4 max-w-2xl leading-7 text-slate-300">
                                A practical technical report demonstrating cloud storage,
                                security, networking, monitoring and automation using Amazon
                                Web Services.
                            </p>
                        </div>

                        <Link
                            href="/report"
                            className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-blue-50"
                        >
                            View report
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

function ProfileCard({
    icon,
    eyebrow,
    title,
    description,
}: {
    icon: React.ReactNode;
    eyebrow: string;
    title: string;
    description: string;
}) {
    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                {icon}
            </div>

            <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                {eyebrow}
            </p>

            <h3 className="mt-2 text-lg font-bold text-slate-950">{title}</h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
        </div>
    );
}

function FocusCard({
    icon,
    title,
    description,
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
}) {
    return (
        <div className="rounded-2xl border border-slate-200 p-6">
            <div className="text-blue-600">{icon}</div>

            <h3 className="mt-5 text-lg font-bold text-slate-950">{title}</h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
        </div>
    );
}