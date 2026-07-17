"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { MdCheck, MdContentCopy, MdDownload, MdRefresh } from "react-icons/md";

type ReadmePreviewData = {
    github: {
        username: string;
    };
    about: {
        about: string;
    };
    socials: Record<string, string>;
    skills: {
        selected: string[];
        badges: string[];
        markdown: string;
    };
    generatedMarkdown?: string;
};

function FilePage() {
    const [readmeData, setReadmeData] = useState<ReadmePreviewData | null>(null);
    const [isHydrated, setIsHydrated] = useState(false);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") {
            return;
        }

        const savedReadmeData = sessionStorage.getItem("readmeData");

        if (!savedReadmeData) {
            setReadmeData(null);
            setIsHydrated(true);
            return;
        }

        try {
            setReadmeData(JSON.parse(savedReadmeData) as ReadmePreviewData);
        } catch {
            sessionStorage.removeItem("readmeData");
            setReadmeData(null);
        } finally {
            setIsHydrated(true);
        }
    }, []);

    if (!isHydrated) {
        return null;
    }

    const markdown = readmeData?.generatedMarkdown || "";

    function handleCopy() {
        navigator.clipboard.writeText(markdown).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    }

    function handleDownload() {
        const blob = new Blob([markdown], { type: "text/markdown" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "README.md";
        a.click();
        URL.revokeObjectURL(url);
    }

    return (
        <main className="min-h-screen bg-gradient-to-b from-emerald-950 via-slate-900 to-slate-950 px-6 py-16 text-emerald-100">
            <section className="mx-auto w-full max-w-4xl">
                {!readmeData ? (
                    <div className="rounded-md border border-emerald-200/40 p-6">
                        <p className="text-lg font-semibold">No saved README inputs found.</p>
                        <p className="mt-2 text-slate-300">
                            Fill out the create form and press Generate README to preview the saved data here.
                        </p>
                        <Link
                            href="/Create"
                            className="mt-4 inline-block rounded-md border border-emerald-200 px-4 py-2 font-semibold text-emerald-100 transition hover:bg-emerald-200 hover:text-slate-950"
                        >
                            Create New
                        </Link>
                    </div>
                ) : (
                    <div className="space-y-8">
                        {/* Header */}
                        <div className="text-center">
                            <h1 className="text-3xl font-bold text-emerald-300">
                                Your Awesome Profile is ready !
                            </h1>

                            {/* Action buttons */}
                            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                                <button
                                    onClick={handleCopy}
                                    className="inline-flex items-center gap-2 rounded-md border border-emerald-400 px-5 py-2 font-semibold text-emerald-200 transition hover:bg-emerald-400 hover:text-slate-950"
                                >
                                    {copied ? (
                                        <>
                                            <MdCheck className="h-5 w-5" />
                                            Copied
                                        </>
                                    ) : (
                                        <>
                                            <MdContentCopy className="h-5 w-5" />
                                            Copy Code
                                        </>
                                    )}
                                </button>
                                <button
                                    onClick={handleDownload}
                                    className="inline-flex items-center gap-2 rounded-md border border-emerald-400 px-5 py-2 font-semibold text-emerald-200 transition hover:bg-emerald-400 hover:text-slate-950"
                                >
                                    <MdDownload className="h-5 w-5" />
                                    Download Markdown File
                                </button>
                                <Link
                                    href="/Create"
                                    className="inline-flex items-center gap-2 rounded-md border border-emerald-400 px-5 py-2 font-semibold text-emerald-200 transition hover:bg-emerald-400 hover:text-slate-950"
                                >
                                    <MdRefresh className="h-5 w-5" />
                                    Create New
                                </Link>
                            </div>
                        </div>

                        {/* PREVIEW label */}
                        <div className="text-center">
                            <span className="inline-block rounded bg-emerald-900/60 px-4 py-1 text-sm font-bold uppercase tracking-wider text-emerald-300">
                                Preview
                            </span>
                        </div>

                        {/* README code block */}
                        <section className="rounded-md border border-emerald-200/30 bg-slate-950 p-6">
                            <pre className="overflow-x-auto whitespace-pre-wrap text-sm text-emerald-100">
                                <code>{markdown}</code>
                            </pre>
                        </section>
                    </div>
                )}
            </section>
        </main>
    );
}

export default FilePage;
