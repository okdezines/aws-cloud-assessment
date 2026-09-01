import Link from "next/link";
import { Code2, UserRound, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-white">
            <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">

                <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">

                    {/* Brand */}
                    <div>
                        <Link
                            href="/"
                            className="text-2xl font-bold tracking-tight text-slate-950"
                        >
                            OK<span className="text-yellow-400">.</span>
                        </Link>

                        <p className="mt-4 max-w-xs text-sm leading-6 text-slate-500">
                            AWS cloud infrastructure assessment built with Next.js,
                            TypeScript and Tailwind CSS.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                            Navigation
                        </p>

                        <div className="mt-5 flex flex-col gap-3">
                            <Link
                                href="/"
                                className="text-sm text-slate-600 transition hover:text-blue-600"
                            >
                                Home
                            </Link>

                            <Link
                                href="/report"
                                className="text-sm text-slate-600 transition hover:text-blue-600"
                            >
                                Report
                            </Link>

                            <Link
                                href="/profile"
                                className="text-sm text-slate-600 transition hover:text-blue-600"
                            >
                                Profile
                            </Link>
                        </div>
                    </div>

                    {/* Project */}
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                            Project
                        </p>

                        <div className="mt-5 space-y-3 text-sm text-slate-600">
                            <p>AWS Cloud Infrastructure Assessment</p>
                            <p>Cloud Engineering</p>
                            <p>2026</p>
                        </div>
                    </div>

                    {/* Connect */}
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                            Connect
                        </p>

                        <div className="mt-5 flex flex-col gap-4">
                            <a
                                href="#"
                                className="flex items-center gap-3 text-sm text-slate-600 transition hover:text-blue-600"
                            >
                                <Code2 size={17} />
                                GitHub Repository
                            </a>

                            <a
                                href="#"
                                className="flex items-center gap-3 text-sm text-slate-600 transition hover:text-blue-600"
                            >
                                <UserRound size={17} />
                                LinkedIn Profile
                            </a>

                            <a
                                href="#"
                                className="flex items-center gap-3 text-sm text-slate-600 transition hover:text-blue-600"
                            >
                                <Mail size={17} />
                                Email
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-14 flex flex-col gap-4 border-t border-slate-200 pt-7 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
                    <p>© 2026. AWS Cloud Infrastructure Assessment.</p>

                    <p>Designed & built with Next.js.</p>
                </div>

            </div>
        </footer>
    );
}