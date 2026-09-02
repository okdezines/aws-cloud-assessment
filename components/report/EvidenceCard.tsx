import Image from "next/image";
import { ImageIcon } from "lucide-react";

type EvidenceCardProps = {
    src?: string;
    alt: string;
    figure: string;
    caption: string;
    priority?: boolean;
};

export default function EvidenceCard({
    src,
    alt,
    figure,
    caption,
    priority = false,
}: EvidenceCardProps) {
    const basePath =
        process.env.NODE_ENV === "production"
            ? "/aws-cloud-assessment"
            : "";

    const imageSrc = src ? `${basePath}${src}` : "";

    return (
        <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="relative aspect-video bg-slate-100">
                {src ? (
                    <Image
                        src={imageSrc}
                        alt={alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 800px"
                        priority={priority}
                        className="object-contain"
                    />
                ) : (
                    <div className="flex h-full items-center justify-center">
                        <div className="text-center text-slate-400">
                            <ImageIcon className="mx-auto h-8 w-8" />

                            <p className="mt-3 text-sm font-medium">
                                Evidence screenshot
                            </p>
                        </div>
                    </div>
                )}
            </div>

            <figcaption className="border-t border-slate-200 px-6 py-5">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                    {figure}
                </p>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                    {caption}
                </p>
            </figcaption>
        </figure>
    );
}