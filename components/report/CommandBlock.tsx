import { Terminal } from "lucide-react";

type CommandBlockProps = {
    title?: string;
    command: string;
    explanation?: string;
};

export default function CommandBlock({
    title = "Commands Used",
    command,
    explanation,
}: CommandBlockProps) {
    return (
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
                <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                        <Terminal size={16} />
                    </div>

                    <p className="text-sm font-bold text-slate-900">
                        {title}
                    </p>
                </div>

                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                    AWS CLI
                </span>
            </div>

            {/* Terminal */}
            <div className="overflow-x-auto bg-slate-950 p-5 sm:p-6">
                <pre className="min-w-max text-sm leading-7 text-slate-200">
                    <code>{command}</code>
                </pre>
            </div>

            {/* Explanation */}
            {explanation && (
                <div className="border-t border-slate-200 bg-slate-50 px-5 py-4">
                    <p className="text-sm leading-6 text-slate-600">
                        {explanation}
                    </p>
                </div>
            )}

        </div>
    );
}