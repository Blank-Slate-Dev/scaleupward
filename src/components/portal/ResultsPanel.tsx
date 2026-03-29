// src/components/portal/ResultsPanel.tsx
"use client";

import { useState } from "react";
import type { GeneratedContent } from "@/types/portal";

export default function ResultsPanel({ content }: { content: GeneratedContent }) {
  const tabs = [
    content.scripts && { id: "scripts", label: "📹 Video Scripts", count: content.scripts.length },
    content.adCopy && { id: "adCopy", label: "📣 Ad Copy", count: content.adCopy.length },
    content.emails && { id: "emails", label: "📧 Email Sequence", count: content.emails.length },
    content.seoOutline && { id: "seo", label: "🔍 SEO Outline", count: 1 },
    content.captions && { id: "captions", label: "💬 Captions", count: content.captions.length },
  ].filter(Boolean) as { id: string; label: string; count: number }[];

  const [activeTab, setActiveTab] = useState(tabs[0]?.id ?? "scripts");

  return (
    <div>
      {/* Brief summary */}
      <div
        className="rounded-2xl p-6 mb-8"
        style={{
          background: "var(--color-neutral-50)",
          border: "1px solid var(--color-neutral-200)",
        }}
      >
        <p className="text-xs font-700 uppercase tracking-widest mb-3" style={{ color: "var(--color-neutral-400)", fontFamily: "var(--font-body)" }}>
          Generated for
        </p>
        <div className="flex flex-wrap gap-3">
          <Chip>{content.brief.businessName}</Chip>
          <Chip>{content.brief.tone} tone</Chip>
          {content.brief.platforms.map((p) => <Chip key={p}>{p}</Chip>)}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className="px-4 py-2 rounded-full text-sm font-600 transition-all"
            style={{
              background: activeTab === tab.id ? "var(--color-navy-900)" : "var(--color-neutral-100)",
              color: activeTab === tab.id ? "white" : "var(--color-neutral-600)",
              fontFamily: "var(--font-body)",
            }}
          >
            {tab.label}
            <span
              className="ml-2 text-xs px-1.5 py-0.5 rounded-full"
              style={{
                background: activeTab === tab.id ? "rgba(255,255,255,0.2)" : "var(--color-neutral-200)",
                color: activeTab === tab.id ? "white" : "var(--color-neutral-500)",
              }}
            >
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* Tab content */}
      {activeTab === "scripts" && content.scripts && (
        <div className="flex flex-col gap-4">
          {content.scripts.map((script, i) => (
            <ContentCard
              key={i}
              title={script.title}
              badges={[script.platform, script.duration]}
              onCopy={() => `HOOK:\n"${script.hook}"\n\nSCRIPT:\n${script.body}\n\nCTA:\n${script.cta}`}
            >
              <Field label="Hook" value={`"${script.hook}"`} highlight />
              <Field label="Script" value={script.body} />
              <Field label="CTA" value={script.cta} cta />
            </ContentCard>
          ))}
        </div>
      )}

      {activeTab === "adCopy" && content.adCopy && (
        <div className="flex flex-col gap-4">
          {content.adCopy.map((ad, i) => (
            <ContentCard
              key={i}
              title={`${ad.platform} Ad`}
              badges={[ad.platform, ad.cta]}
              onCopy={() => `HEADLINE:\n${ad.headline}\n\nPRIMARY TEXT:\n${ad.primaryText}\n\nDESCRIPTION:\n${ad.description}\n\nCTA: ${ad.cta}`}
            >
              <Field label="Headline" value={ad.headline} highlight />
              <Field label="Primary Text" value={ad.primaryText} />
              <Field label="Description" value={ad.description} />
              <Field label="CTA" value={ad.cta} cta />
            </ContentCard>
          ))}
        </div>
      )}

      {activeTab === "emails" && content.emails && (
        <div className="flex flex-col gap-4">
          {content.emails
            .sort((a, b) => a.sequencePosition - b.sequencePosition)
            .map((email, i) => (
              <ContentCard
                key={i}
                title={`Email ${email.sequencePosition}: ${email.purpose}`}
                badges={[`Email ${email.sequencePosition} of 5`]}
                onCopy={() => `SUBJECT: ${email.subject}\nPREVIEW: ${email.preview}\n\n${email.body}\n\nCTA: ${email.cta}`}
              >
                <Field label="Subject Line" value={email.subject} highlight />
                <Field label="Preview Text" value={email.preview} />
                <Field label="Body" value={email.body} />
                <Field label="CTA" value={email.cta} cta />
              </ContentCard>
            ))}
        </div>
      )}

      {activeTab === "seo" && content.seoOutline && (
        <ContentCard
          title={content.seoOutline.title}
          badges={[content.seoOutline.targetKeyword, content.seoOutline.wordCount]}
          onCopy={() => {
            const sections = content.seoOutline!.sections
              .map((s) => `## ${s.heading}\n${s.notes}`)
              .join("\n\n");
            return `TITLE: ${content.seoOutline!.title}\nMETA: ${content.seoOutline!.metaDescription}\nKEYWORD: ${content.seoOutline!.targetKeyword}\n\n${sections}`;
          }}
        >
          <Field label="Meta Description" value={content.seoOutline.metaDescription} />
          <Field label="Target Keyword" value={content.seoOutline.targetKeyword} highlight />
          <div>
            <p className="text-xs font-700 uppercase tracking-widest mb-3" style={{ color: "var(--color-neutral-400)", fontFamily: "var(--font-body)" }}>
              Article Sections
            </p>
            <div className="flex flex-col gap-2">
              {content.seoOutline.sections.map((section, i) => (
                <div
                  key={i}
                  className="rounded-xl p-4"
                  style={{ background: "var(--color-neutral-50)", border: "1px solid var(--color-neutral-200)" }}
                >
                  <p className="text-sm font-600 mb-1" style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-body)" }}>
                    {section.heading}
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--color-neutral-500)", fontFamily: "var(--font-body)" }}>
                    {section.notes}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ContentCard>
      )}

      {activeTab === "captions" && content.captions && (
        <div className="flex flex-col gap-4">
          {content.captions.map((caption, i) => (
            <ContentCard
              key={i}
              title={`${caption.platform} Caption`}
              badges={[caption.platform, caption.bestPostTime]}
              onCopy={() => `${caption.caption}\n\n${caption.hashtags.join(" ")}`}
            >
              <Field label="Caption" value={caption.caption} />
              <div>
                <p className="text-xs font-700 uppercase tracking-widest mb-2" style={{ color: "var(--color-neutral-400)", fontFamily: "var(--font-body)" }}>
                  Hashtags
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {caption.hashtags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full"
                      style={{
                        background: "var(--color-blue-50)",
                        color: "var(--color-blue-600)",
                        border: "1px solid var(--color-blue-100)",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <Field label="Best Post Time" value={caption.bestPostTime} cta />
            </ContentCard>
          ))}
        </div>
      )}
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="text-xs font-600 px-3 py-1.5 rounded-full"
      style={{
        background: "white",
        border: "1px solid var(--color-neutral-200)",
        color: "var(--color-neutral-600)",
        fontFamily: "var(--font-body)",
      }}
    >
      {children}
    </span>
  );
}

function Field({
  label,
  value,
  highlight,
  cta,
}: {
  label: string;
  value: string;
  highlight?: boolean;
  cta?: boolean;
}) {
  return (
    <div>
      <p
        className="text-xs font-700 uppercase tracking-widest mb-1.5"
        style={{ color: "var(--color-neutral-400)", fontFamily: "var(--font-body)" }}
      >
        {label}
      </p>
      <p
        className={`text-sm leading-relaxed ${highlight ? "font-600" : ""}`}
        style={{
          color: cta
            ? "var(--color-blue-600)"
            : highlight
            ? "var(--color-navy-900)"
            : "var(--color-neutral-600)",
          fontFamily: "var(--font-body)",
          background: cta ? "var(--color-blue-50)" : highlight ? "transparent" : "transparent",
          padding: cta ? "10px 14px" : "0",
          borderRadius: cta ? "10px" : "0",
          border: cta ? "1px solid var(--color-blue-100)" : "none",
        }}
      >
        {value}
      </p>
    </div>
  );
}

function ContentCard({
  title,
  badges,
  children,
  onCopy,
}: {
  title: string;
  badges: string[];
  children: React.ReactNode;
  onCopy: () => string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(onCopy());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        background: "white",
        border: "1.5px solid var(--color-neutral-200)",
      }}
    >
      <div
        className="flex items-center justify-between px-6 py-4"
        style={{ borderBottom: "1px solid var(--color-neutral-100)" }}
      >
        <div className="flex items-center gap-3 flex-wrap">
          <span
            className="text-sm font-700"
            style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-heading)" }}
          >
            {title}
          </span>
          {badges.map((b) => (
            <span
              key={b}
              className="text-xs font-600 px-2.5 py-1 rounded-full"
              style={{
                background: "var(--color-neutral-100)",
                color: "var(--color-neutral-500)",
                fontFamily: "var(--font-body)",
              }}
            >
              {b}
            </span>
          ))}
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="text-xs font-600 px-3 py-1.5 rounded-lg transition-all flex-shrink-0"
          style={{
            background: copied ? "var(--color-blue-50)" : "var(--color-neutral-100)",
            color: copied ? "var(--color-blue-600)" : "var(--color-neutral-500)",
            border: copied ? "1px solid var(--color-blue-100)" : "1px solid var(--color-neutral-200)",
            fontFamily: "var(--font-body)",
          }}
        >
          {copied ? "✓ Copied" : "Copy"}
        </button>
      </div>
      <div className="px-6 py-5 flex flex-col gap-5">{children}</div>
    </div>
  );
}
