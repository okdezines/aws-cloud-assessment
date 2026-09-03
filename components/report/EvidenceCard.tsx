"use client";

import Image from "next/image";
import { ImageIcon, Maximize2, X } from "lucide-react";
import { useEffect, useState } from "react";

type EvidenceCardProps = {
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
    const [isOpen, setIsOpen] = useState(false);

    // Allow Escape key to close the enlarged image
    useEffect(() => {
        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        }

        if (isOpen) {
            document.addEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return (
        <>
            <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                {/* Screenshot */}
                {src ? (
                    <button
                        type="button"
                        onClick={() => setIsOpen(true)}
                        className="group relative block aspect-video w-full cursor-zoom-in overflow-hidden bg-slate-100"
                        aria-label={`Enlarge ${figure}: ${alt}`}
                    >
                        <Image
                            src={src}
                            alt={alt}
                            fill
                            sizes="(max-width: 1024px) 100vw, 800px"
                            className="object-contain transition duration-300 group-hover:scale-[1.02]"
                        />

                        {/* Hover / tap affordance */}
                        <span className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-slate-950/80 px-3 py-2 text-xs font-semibold text-white opacity-100 shadow-lg backdrop-blur-sm transition md:opacity-0 md:group-hover:opacity-100">
                            <Maximize2 className="h-4 w-4" />
                            Enlarge
                        </span>
                    </button>
                ) : (
                    <div className="flex aspect-video items-center justify-center bg-slate-100">
                        <div className="text-center text-slate-400">
                            <ImageIcon className="mx-auto h-8 w-8" />
                            <p className="mt-2 text-sm">Evidence screenshot</p>
                        </div>
                    </div>
                )}

                {/* Caption */}
                <figcaption className="border-t border-slate-200 px-6 py-5">
                    <div className="flex items-center justify-between gap-4">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                            {figure}
                        </p>

                        {src && (
                            <button
                                type="button"
                                onClick={() => setIsOpen(true)}
                                className="flex shrink-0 items-center gap-1.5 text-xs font-semibold text-slate-400 transition hover:text-blue-600"
                            >
                                <Maximize2 className="h-3.5 w-3.5" />
                                View full size
                            </button>
                        )}
                    </div>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                        {caption}
                    </p>
                </figcaption>
            </figure>

            {/* Full-screen lightbox */}
            {src && isOpen && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-sm sm:p-8"
                    role="dialog"
                    aria-modal="true"
                    aria-label={`${figure} enlarged evidence`}
                    onClick={() => setIsOpen(false)}
                >
                    {/* Close button */}
                    <button
                        type="button"
                        onClick={() => setIsOpen(false)}
                        className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-900 shadow-lg transition hover:bg-slate-100 sm:right-8 sm:top-8"
                        aria-label="Close enlarged image"
                    >
                        <X className="h-5 w-5" />
                    </button>

                    {/* Enlarged evidence */}
                    <div
                        className="relative h-[85vh] w-full max-w-7xl"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <Image
                            src={src}
                            alt={alt}
                            fill
                            sizes="100vw"
                            className="object-contain"
                        />
                    </div>

                    {/* Evidence information */}
                    <div className="absolute bottom-4 left-1/2 w-[calc(100%-2rem)] max-w-3xl -translate-x-1/2 rounded-2xl bg-white/95 px-5 py-4 shadow-xl backdrop-blur-md sm:bottom-6 sm:px-6">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                            {figure}
                        </p>

                        <p className="mt-1 line-clamp-2 text-sm leading-6 text-slate-600">
                            {caption}
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}