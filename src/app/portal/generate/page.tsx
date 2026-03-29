// src/app/portal/generate/page.tsx
import BriefForm from "@/components/portal/BriefForm";
import Link from "next/link";

export default function GeneratePage() {
  return (
    <main
      className="min-h-screen px-4 py-12"
      style={{ background: "var(--color-neutral-50)" }}
    >
      <div className="max-w-2xl mx-auto">
        {/* Back */}
        <Link
          href="/portal"
          className="inline-flex items-center gap-2 text-sm no-underline mb-8 transition-colors"
          style={{ color: "var(--color-neutral-400)", fontFamily: "var(--font-body)" }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M13 8H3M8 13l-5-5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to Portal
        </Link>

        <div className="mb-8">
          <h1
            className="text-3xl font-800 mb-2"
            style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-heading)" }}
          >
            Create Your Brief
          </h1>
          <p
            className="text-sm"
            style={{ color: "var(--color-neutral-500)", fontFamily: "var(--font-body)" }}
          >
            3 quick steps. The more detail you give, the better the output.
          </p>
        </div>

        <BriefForm />
      </div>
    </main>
  );
}
