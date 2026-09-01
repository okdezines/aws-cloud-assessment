"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className="relative z-50 border-b border-slate-200 bg-white/90">
            <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
                {/* Logo */}
                <Link
                    href="/"
                    onClick={closeMenu}
                    className="text-2xl font-bold tracking-tight text-slate-900"
                >
                    OHK<span className="text-yellow-400">.</span>
                </Link>

                {/* Desktop navigation */}
                <div className="hidden items-center gap-10 md:flex">
                    <Link
                        href="/"
                        className="text-sm font-medium text-blue-600"
                    >
                        Home
                    </Link>

                    <Link
                        href="/report"
                        className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
                    >
                        Report
                    </Link>

                    <Link
                        href="/profile"
                        className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
                    >
                        Profile
                    </Link>
                </div>

                {/* Desktop GitHub button */}
                <a
                    href="https://github.com/okdezines/aws-cloud-assessment"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 md:block"
                >
                    GitHub ↗
                </a>

                {/* Mobile hamburger button */}
                <button
                    type="button"
                    onClick={() => setMenuOpen((prev) => !prev)}
                    aria-label={
                        menuOpen ? "Close navigation menu" : "Open navigation menu"
                    }
                    aria-expanded={menuOpen}
                    aria-controls="mobile-menu"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-xl text-slate-800 transition hover:bg-slate-50 md:hidden"
                >
                    {menuOpen ? "×" : "☰"}
                </button>
            </nav>

            {/* Mobile navigation */}
            {menuOpen && (
                <div
                    id="mobile-menu"
                    className="absolute left-0 right-0 top-full border-t border-slate-200 bg-white shadow-lg md:hidden"
                >
                    <div className="mx-auto flex max-w-7xl flex-col px-6 py-4">
                        <Link
                            href="/"
                            onClick={closeMenu}
                            className="border-b border-slate-100 py-4 text-sm font-medium text-blue-600"
                        >
                            Home
                        </Link>

                        <Link
                            href="/report"
                            onClick={closeMenu}
                            className="border-b border-slate-100 py-4 text-sm font-medium text-slate-700 transition hover:text-blue-600"
                        >
                            Report
                        </Link>

                        <Link
                            href="/profile"
                            onClick={closeMenu}
                            className="border-b border-slate-100 py-4 text-sm font-medium text-slate-700 transition hover:text-blue-600"
                        >
                            Profile
                        </Link>

                        <a
                            href="https://github.com/okdezines/aws-cloud-assessment"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={closeMenu}
                            className="mt-4 rounded-lg bg-blue-600 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-700"
                        >
                            GitHub ↗
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}