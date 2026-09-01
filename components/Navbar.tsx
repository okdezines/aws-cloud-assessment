import Link from "next/link";

export default function Navbar() {
    return (
        <header className="border-b border-slate-200 bg-white/90">
            <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

                {/* Logo */}
                <Link
                    href="/"
                    className="text-2xl font-bold tracking-tight text-slate-900"
                >
                    OK<span className="text-yellow-400">.</span>
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

                {/* GitHub button */}
                <a
                    href="#"
                    className="hidden rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 md:block"
                >
                    GitHub ↗
                </a>

                {/* Mobile menu button */}
                <button
                    type="button"
                    aria-label="Open navigation menu"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-xl text-slate-800 md:hidden"
                >
                    ☰
                </button>

            </nav>
        </header>
    );
}