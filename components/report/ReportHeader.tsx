import { BookOpen, Terminal, Images } from "lucide-react";

export default function ReportHeader() {
    return (
        <section className="border-b border-slate-200 bg-white">
            <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">

                {/* Label */}
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
                    AWS Cloud Infrastructure Assessment
                </p>

                <div className="mt-5 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">

                    {/* Title */}
                    <div>
                        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                            Technical Assessment Report
                        </h1>

                        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
                            Practical implementation and analysis of AWS cloud storage,
                            networking, monitoring, security and automation solutions.
                        </p>
                    </div>

                    {/* Report stats */}
                    <div className="grid grid-cols-3 gap-3">
                        <StatCard
                            icon={BookOpen}
                            value="02"
                            label="Core Tasks"
                        />

                        <StatCard
                            icon={Terminal}
                            value="AWS"
                            label="Platform"
                        />

                        <StatCard
                            icon={Images}
                            value="2026"
                            label="Assessment"
                        />
                    </div>
                </div>

                {/* Progress */}
                <div className="mt-10 max-w-3xl">
                    <div className="mb-3 flex items-center justify-between">
                        <p className="text-xs font-semibold text-slate-600">
                            Report progress
                        </p>

                        <p className="text-xs font-semibold text-blue-600">
                            Overview
                        </p>
                    </div>

                    <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
                        <div className="h-full w-[8%] rounded-full bg-gradient-to-r from-blue-600 to-yellow-400" />
                    </div>
                </div>

            </div>
        </section>
    );
}

type StatCardProps = {
    icon: React.ElementType;
    value: string;
    label: string;
};

function StatCard({
    icon: Icon,
    value,
    label,
}: StatCardProps) {
    return (
        <div className="min-w-[100px] rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm">
            <Icon
                size={17}
                strokeWidth={1.7}
                className="mx-auto text-blue-600"
            />

            <p className="mt-2 text-lg font-bold text-slate-950">
                {value}
            </p>

            <p className="mt-1 text-[11px] text-slate-500">
                {label}
            </p>
        </div>
    );
}