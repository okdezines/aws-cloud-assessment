import { Quote } from "lucide-react";

export default function ProjectStatement() {
    return (
        <section className="relative overflow-hidden bg-white py-24">
            {/* Decorative background glow */}
            <div
                aria-hidden="true"
                className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-sky-100 blur-3xl"
            />

            <div
                aria-hidden="true"
                className="absolute -bottom-32 right-10 h-72 w-72 rounded-full bg-yellow-100/70 blur-3xl"
            />

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                <div className="relative overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-sky-50 via-white to-yellow-50 px-8 py-14 shadow-sm sm:px-12 lg:px-16 lg:py-16">

                    <Quote
                        size={38}
                        strokeWidth={1.5}
                        className="text-yellow-400"
                    />

                    <blockquote className="mt-7 max-w-4xl text-2xl font-semibold leading-relaxed tracking-tight text-slate-900 sm:text-3xl">
                        This assessment demonstrates practical cloud engineering skills
                        across storage, networking, monitoring, security and automation
                        using AWS.
                    </blockquote>

                    <div className="mt-8 flex items-center gap-3">
                        <div className="h-px w-10 bg-blue-500" />

                        <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
                            AWS Cloud Infrastructure Assessment
                        </p>
                    </div>

                    {/* Decorative sun */}
                    <div
                        aria-hidden="true"
                        className="absolute -bottom-12 right-12 hidden h-32 w-32 rounded-full bg-gradient-to-b from-yellow-200 to-yellow-400 opacity-70 md:block"
                    />
                </div>
            </div>
        </section>
    );
}