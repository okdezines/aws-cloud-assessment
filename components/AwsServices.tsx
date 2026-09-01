import {
    Database,
    Server,
    Network,
    Search,
    ShieldCheck,
    Activity,
} from "lucide-react";

const services = [
    {
        name: "Amazon S3",
        shortName: "S3",
        description: "Object Storage",
        icon: Database,
    },
    {
        name: "Amazon EC2",
        shortName: "EC2",
        description: "Compute",
        icon: Server,
    },
    {
        name: "Amazon VPC",
        shortName: "VPC",
        description: "Networking",
        icon: Network,
    },
    {
        name: "Amazon Athena",
        shortName: "Athena",
        description: "Log Analysis",
        icon: Search,
    },
    {
        name: "AWS IAM",
        shortName: "IAM",
        description: "Access Control",
        icon: ShieldCheck,
    },
    {
        name: "Amazon CloudWatch",
        shortName: "CloudWatch",
        description: "Monitoring",
        icon: Activity,
    },
];

export default function AwsServices() {
    return (
        <section className="relative bg-white">
            <div className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">

                <div className="mb-8 flex items-end justify-between">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
                            Technologies
                        </p>

                        <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950">
                            AWS services used
                        </h2>
                    </div>

                    <p className="hidden max-w-sm text-right text-sm leading-6 text-slate-500 md:block">
                        Core AWS services used throughout the cloud infrastructure
                        assessment.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
                    {services.map((service) => {
                        const Icon = service.icon;

                        return (
                            <div
                                key={service.name}
                                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
                            >
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                                    <Icon size={21} strokeWidth={1.8} />
                                </div>

                                <h3 className="mt-5 font-bold text-slate-900">
                                    {service.shortName}
                                </h3>

                                <p className="mt-1 text-xs text-slate-500">
                                    {service.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}