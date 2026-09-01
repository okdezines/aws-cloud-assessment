import Image from "next/image";
import { ImageIcon } from "lucide-react";

type EvidenceCardProps = {
    priority?: boolean
    src?: string;
    alt: string;
    figure: string;
    caption: string;
};

export default function EvidenceCard({
    src,
    alt,
    figure,
    caption,
}: EvidenceCardProps) {
    return (
        <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

            {src ? (
                <div className="relative aspect-video bg-slate-100">
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 800px"
                        loading="eager"
                        className="object-contain"
                    />
                </div>
            ) : (
                <div className="flex aspect-video items-center justify-center bg-slate-50">
                    <div className="text-center">
                        <ImageIcon
                            size={30}
                            strokeWidth={1.5}
                            className="mx-auto text-slate-300"
                        />

                        <p className="mt-3 text-xs font-medium text-slate-400">
                            Evidence screenshot
                        </p>
                    </div>
                </div>
            )}

            <figcaption className="border-t border-slate-200 px-5 py-4">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-blue-600">
                    {figure}
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                    {caption}
                </p>
            </figcaption>

        </figure>
    );
}