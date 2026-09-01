type ReportSectionProps = {
    label: string;
    title?: string;
    children: React.ReactNode;
};

export default function ReportSection({
    label,
    title,
    children,
}: ReportSectionProps) {
    return (
        <section className="border-t border-slate-200 py-10 first:border-t-0">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
                {label}
            </p>

            {title && (
                <h3 className="mt-3 text-xl font-bold tracking-tight text-slate-950">
                    {title}
                </h3>
            )}

            <div className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
                {children}
            </div>
        </section>
    );
}