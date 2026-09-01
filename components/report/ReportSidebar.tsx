import Link from "next/link";
import {
    BookOpen,
    Database,
    Network,
    CheckCircle2,
} from "lucide-react";

const taskOneItems = [
    {
        number: "01",
        label: "Multipart Upload",
        href: "#multipart-upload",
    },
    {
        number: "02",
        label: "Upload Parts",
        href: "#upload-parts",
    },
    {
        number: "03",
        label: "ETags",
        href: "#etags",
    },
    {
        number: "04",
        label: "Complete Upload",
        href: "#complete-upload",
    },
    {
        number: "05",
        label: "MFA Delete",
        href: "#mfa-delete",
    },
];

const taskTwoItems = [
    {
        number: "01",
        label: "Create VPC",
        href: "#vpc",
    },
    {
        number: "02",
        label: "VPC Flow Logs",
        href: "#flow-logs",
    },
    {
        number: "03",
        label: "Athena Analysis",
        href: "#athena",
    },
    {
        number: "04",
        label: "NACL Security",
        href: "#nacl",
    },
];

export default function ReportSidebar() {
    return (
        <aside className="hidden border-r border-slate-200 bg-white lg:block">
            <div className="sticky top-0 max-h-screen overflow-y-auto px-5 py-8">

                {/* Contents */}
                <p className="px-3 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
                    Contents
                </p>

                <Link
                    href="#introduction"
                    className="mt-4 flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-blue-600"
                >
                    <BookOpen size={16} />
                    Introduction
                </Link>

                {/* Task 1 */}
                <div className="mt-8">
                    <div className="flex items-center gap-3 px-3">
                        <Database
                            size={16}
                            className="text-blue-600"
                        />

                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-600">
                                Task 01
                            </p>

                            <p className="mt-1 text-sm font-bold text-slate-900">
                                Amazon S3
                            </p>
                        </div>
                    </div>

                    <div className="mt-4 space-y-1">
                        {taskOneItems.map((item) => (
                            <SidebarItem
                                key={item.href}
                                {...item}
                            />
                        ))}
                    </div>
                </div>

                {/* Task 2 */}
                <div className="mt-9">
                    <div className="flex items-center gap-3 px-3">
                        <Network
                            size={16}
                            className="text-blue-600"
                        />

                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-600">
                                Task 02
                            </p>

                            <p className="mt-1 text-sm font-bold text-slate-900">
                                VPC & Monitoring
                            </p>
                        </div>
                    </div>

                    <div className="mt-4 space-y-1">
                        {taskTwoItems.map((item) => (
                            <SidebarItem
                                key={item.href}
                                {...item}
                            />
                        ))}
                    </div>
                </div>

                {/* Conclusion */}
                <Link
                    href="#conclusion"
                    className="mt-9 flex items-center gap-3 border-t border-slate-200 px-3 pt-7 text-sm font-medium text-slate-600 transition hover:text-blue-600"
                >
                    <CheckCircle2 size={16} />
                    Conclusion
                </Link>

            </div>
        </aside>
    );
}

type SidebarItemProps = {
    number: string;
    label: string;
    href: string;
};

function SidebarItem({
    number,
    label,
    href,
}: SidebarItemProps) {
    return (
        <Link
            href={href}
            className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-500 transition hover:bg-blue-50 hover:text-blue-600"
        >
            <span className="text-[10px] font-bold text-slate-400 group-hover:text-blue-500">
                {number}
            </span>

            <span>{label}</span>
        </Link>
    );
}