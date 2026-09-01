import { Lightbulb } from "lucide-react";

type LearningCardProps = {
    children: React.ReactNode;
};

export default function LearningCard({
    children,
}: LearningCardProps) {
    return (
        <div className="rounded-2xl border border-yellow-200 bg-gradient-to-br from-yellow-50 to-white p-6 sm:p-7">
            <div className="flex gap-4">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-100 text-yellow-600">
                    <Lightbulb size={19} />
                </div>

                <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-700">
                        What I Learned
                    </p>

                    <div className="mt-3 text-sm leading-7 text-slate-700">
                        {children}
                    </div>
                </div>

            </div>
        </div>
    );
}