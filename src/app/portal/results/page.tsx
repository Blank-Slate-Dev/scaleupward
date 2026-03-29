// src/app/portal/results/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ResultsPanel from "@/components/portal/ResultsPanel";
import type { GeneratedContent } from "@/types/portal";

export default function ResultsPage() {
  const router = useRouter();
  const [content, setContent] = useState<GeneratedContent | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("generatedContent");
    if (!stored) {
      router.push("/portal/generate");
      return;
    }
    try {
      setContent(JSON.parse(stored));
    } catch {
      router.push("/portal/generate");
    }
  }, [router]);

  if (!content) {
    return (
      <main
        className="min-h-screen flex items-center justify-center"
        style={{ background: "var(--color-neutral-50)" }}
      >
        <div className="flex flex-col items-center gap-4">
          <Spinner />
          <p
            className="text-sm"
            style={{ color: "var(--color-neutral-400)", fontFamily: "var(--font-body)" }}
          >
            Loading your content...
          </p>
        </div>
      </main>
    );
  }

  return (
    <main
      className="min-h-screen px-4 py-12"
      style={{ background: "var(--color-neutral-50)" }}
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-8 flex-wrap">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: "var(--color-blue-500)" }}
              />
              <p
                className="text-xs font-700 uppercase tracking-widest"
                style={{ color: "var(--color-blue-500)", fontFamily: "var(--font-body)" }}
              >
                Content Ready
              </p>
            </div>
            <h1
              className="text-3xl font-800"
              style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-heading)" }}
            >
              Your Content is Ready
            </h1>
            <p
              className="text-sm mt-1"
              style={{ color: "var(--color-neutral-400)", fontFamily: "var(--font-body)" }}
            >
              Generated for {content.brief.businessName} ·{" "}
              {new Date(content.generatedAt).toLocaleDateString("en-AU", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </p>
          </div>

          <Link
            href="/portal/generate"
            className="inline-flex items-center gap-2 text-sm font-600 px-5 py-2.5 rounded-xl no-underline transition-all"
            style={{
              background: "var(--color-navy-900)",
              color: "white",
              fontFamily: "var(--font-body)",
            }}
          >
            Generate Again
          </Link>
        </div>

        <ResultsPanel content={content} />

        <div className="mt-10 text-center">
          <Link
            href="/portal"
            className="text-sm no-underline"
            style={{ color: "var(--color-neutral-400)", fontFamily: "var(--font-body)" }}
          >
            ← Back to Portal
          </Link>
        </div>
      </div>
    </main>
  );
}

function Spinner() {
  return (
    <svg className="animate-spin" width="32" height="32" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="var(--color-neutral-200)" strokeWidth="3" />
      <path d="M12 2a10 10 0 0 1 10 10" stroke="var(--color-navy-900)" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
