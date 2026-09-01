import Link from "next/link";
import {
    CloudUpload,
    Network,
    ShieldCheck,
    TerminalSquare,
    ArrowRight,
} from "lucide-react";

const projectAreas = [
    {
        number: "01",
        title: "Hybrid Storage",
        description:
            "Optimising large file transfers and storage with Amazon S3 advanced features.",
        technologies: ["S3", "Multipart Upload", "MFA Delete"],
        icon: CloudUpload,
        href: "/report#hybrid-storage",
    },
    {
        number: "02",
        title: "Network Monitoring",
        description:
            "Capturing and analysing network traffic using VPC Flow Logs and Amazon Athena.",
        technologies: ["VPC", "Flow Logs", "Athena"],
        icon: Network,
        href: "/report#network-monitoring",
    },
    {
        number: "03",
        title: "Security & Access",
        description:
            "Applying access controls and network security measures across AWS resources.",
        technologies: ["IAM", "NACL", "MFA"],
        icon: ShieldCheck,
        href: "/report#security",
    },
    {
        number: "04",
        title: "Automation",
        description:
            "Using command-line tools and AWS services to create repeatable cloud operations.",
        technologies: ["AWS CLI", "Automation", "Systems Manager"],
        icon: TerminalSquare,
        href: "/report#automation",
    },
];

export default function ProjectOverview() {
    return (
        <section className="bg-slate-50/70 py-24 sm:py-28">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Section heading */}
                <div className="mx-auto mb-14 max-w-2xl text-center">
                    <p className="text-xs font-bold uppercase tracking-[0.28em] text-blue-600">
                        The Project
                    </p>

                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                        Infrastructure in practice.
                    </h2>

                    <p className="mt-5 text-base leading-7 text-slate-600">
                        Applying AWS cloud services to practical infrastructure,
                        monitoring, security and automation scenarios.
                    </p>
                </div>

                {/* Project cards */}
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                    {projectAreas.map((area) => {
                        const Icon = area.icon;

                        return (
                            <Link
                                key={area.title}
                                href={area.href}
                                className="group relative flex min-h-[360px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
                            >
                                {/* Number */}
                                <span className="absolute right-6 top-5 text-5xl font-bold text-slate-100 transition group-hover:text-blue-50">
                                    {area.number}
                                </span>

                                {/* Icon */}
                                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                                    <Icon size={22} strokeWidth={1.8} />
                                </div>

                                {/* Content */}
                                <div className="relative mt-8">
                                    <h3 className="text-xl font-bold tracking-tight text-slate-950">
                                        {area.title}
                                    </h3>

                                    <p className="mt-4 text-sm leading-6 text-slate-600">
                                        {area.description}
                                    </p>
                                </div>

                                {/* Technology labels */}
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {area.technologies.map((technology) => (
                                        <span
                                            key={technology}
                                            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                                        >
                                            {technology}
                                        </span>
                                    ))}
                                </div>

                                {/* Bottom link */}
                                <div className="mt-auto flex items-center gap-2 pt-8 text-sm font-semibold text-blue-600">
                                    Explore
                                    <ArrowRight
                                        size={16}
                                        className="transition-transform duration-300 group-hover:translate-x-1"
                                    />
                                </div>
                            </Link>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}