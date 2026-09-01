import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative overflow-hidden">
            {/* Soft sunrise background */}
            <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-white to-sky-100"
            />

            {/* Sunrise glow */}
            <div
                aria-hidden="true"
                className="absolute right-[8%] top-[22%] -z-10 h-72 w-72 rounded-full bg-yellow-200/40 blur-3xl"
            />

            <div className="mx-auto grid min-h-[720px] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:px-8">

                {/* Hero copy */}
                <div className="relative z-10">
                    <p className="mb-6 text-xs font-bold uppercase tracking-[0.28em] text-blue-600 sm:text-sm">
                        Cloud Engineering · AWS
                    </p>

                    <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
                        Building secure,
                        <br />
                        resilient{" "}
                        <span className="text-blue-600">
                            cloud
                            <br />
                            infrastructure.
                        </span>
                    </h1>

                    <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
                        A practical AWS cloud infrastructure assessment exploring hybrid
                        storage, networking, monitoring, automation and security.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <Link
                            href="/report"
                            className="rounded-lg bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md"
                        >
                            Explore the report →
                        </Link>

                        <Link
                            href="/profile"
                            className="rounded-lg border border-slate-300 bg-white/80 px-6 py-3.5 font-semibold text-slate-700 backdrop-blur transition duration-300 hover:border-blue-300 hover:text-blue-600"
                        >
                            About this project
                        </Link>
                    </div>
                </div>

                {/* Sunrise artwork */}
                <div className="relative hidden h-[440px] lg:block">

                    {/* Sun */}
                    <div className="absolute left-1/2 top-24 h-32 w-32 -translate-x-1/2 rounded-full bg-gradient-to-b from-yellow-200 to-yellow-400 shadow-[0_0_80px_rgba(250,204,21,0.30)]" />

                    {/* Ocean layers */}
                    <div className="absolute bottom-24 left-0 h-28 w-full rounded-[50%] bg-sky-100/90" />

                    <div className="absolute bottom-16 left-[-5%] h-24 w-[110%] rounded-[50%] bg-blue-200/60" />

                    <div className="absolute bottom-8 left-[-10%] h-20 w-[120%] rounded-[50%] bg-sky-300/50" />

                    <div className="absolute bottom-0 left-[-5%] h-20 w-[110%] rounded-[50%] bg-blue-400/30" />

                    {/* Horizon */}
                    <div className="absolute bottom-32 left-1/2 h-px w-[80%] -translate-x-1/2 bg-blue-300/60" />

                    <p className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
                        Cloud · Infrastructure · Automation
                    </p>
                </div>

            </div>
        </section>
    );
}