// src/components/portal/BriefForm.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { ClientBrief, ContentType, Platform, Tone } from "@/types/portal";

const contentTypeOptions: { value: ContentType; label: string; description: string }[] = [
  { value: "video_scripts", label: "Video Scripts & Hooks", description: "TikTok, Reels, Shorts" },
  { value: "ad_copy", label: "Static Ad Copy", description: "Meta & Google Ads" },
  { value: "email_sequence", label: "Email Sequence", description: "5-email nurture flow" },
  { value: "seo_outline", label: "SEO Blog Outline", description: "Keyword-targeted article" },
  { value: "social_captions", label: "Social Captions", description: "Platform-specific captions" },
];

const platformOptions: { value: Platform; label: string }[] = [
  { value: "tiktok", label: "TikTok" },
  { value: "instagram", label: "Instagram" },
  { value: "youtube", label: "YouTube Shorts" },
  { value: "facebook", label: "Facebook" },
  { value: "meta_ads", label: "Meta Ads" },
  { value: "google_ads", label: "Google Ads" },
];

const toneOptions: { value: Tone; label: string; description: string }[] = [
  { value: "punchy", label: "⚡ Punchy", description: "Bold, fast, direct" },
  { value: "educational", label: "🎓 Educational", description: "Informative, trustworthy" },
  { value: "casual", label: "💬 Casual", description: "Friendly, relatable" },
  { value: "professional", label: "💼 Professional", description: "Polished, credible" },
  { value: "funny", label: "😂 Funny", description: "Humour-led, shareable" },
];

const emptyBrief: ClientBrief = {
  businessName: "",
  productOrService: "",
  targetAudience: "",
  uniqueValueProp: "",
  contentTypes: [],
  platforms: [],
  tone: "punchy",
  competitors: "",
  keyMessage: "",
  callToAction: "",
};

export default function BriefForm() {
  const router = useRouter();
  const [brief, setBrief] = useState<ClientBrief>(emptyBrief);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [step, setStep] = useState(1);

  const toggleContentType = (type: ContentType) => {
    setBrief((prev) => ({
      ...prev,
      contentTypes: prev.contentTypes.includes(type)
        ? prev.contentTypes.filter((t) => t !== type)
        : [...prev.contentTypes, type],
    }));
  };

  const togglePlatform = (platform: Platform) => {
    setBrief((prev) => ({
      ...prev,
      platforms: prev.platforms.includes(platform)
        ? prev.platforms.filter((p) => p !== platform)
        : [...prev.platforms, platform],
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(brief),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Generation failed");
      }

      // Store in sessionStorage and redirect to results
      sessionStorage.setItem("generatedContent", JSON.stringify(data));
      router.push("/portal/results");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setLoading(false);
    }
  };

  const isStep1Valid =
    brief.businessName && brief.productOrService && brief.targetAudience && brief.uniqueValueProp;
  const isStep2Valid = brief.contentTypes.length > 0 && brief.platforms.length > 0;
  const isStep3Valid = brief.tone;

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress */}
      <div className="flex items-center gap-3 mb-10">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center gap-3 flex-1">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-700 flex-shrink-0 transition-all"
              style={{
                fontFamily: "var(--font-heading)",
                background: s <= step ? "var(--color-navy-900)" : "var(--color-neutral-100)",
                color: s <= step ? "white" : "var(--color-neutral-400)",
              }}
            >
              {s}
            </div>
            <span
              className="text-sm font-medium hidden sm:block"
              style={{
                color: s <= step ? "var(--color-navy-900)" : "var(--color-neutral-400)",
                fontFamily: "var(--font-body)",
              }}
            >
              {s === 1 ? "Your Business" : s === 2 ? "Content Types" : "Tone & Details"}
            </span>
            {s < 3 && (
              <div
                className="flex-1 h-px hidden sm:block"
                style={{ background: s < step ? "var(--color-navy-900)" : "var(--color-neutral-200)" }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step 1 — Business Info */}
      {step === 1 && (
        <div className="flex flex-col gap-5">
          <StepHeading
            title="Tell us about your business"
            subtitle="The more specific you are, the better the output."
          />
          <FormGroup label="Business Name *">
            <input
              className="portal-input"
              placeholder="e.g. NoseFlow"
              value={brief.businessName}
              onChange={(e) => setBrief({ ...brief, businessName: e.target.value })}
            />
          </FormGroup>
          <FormGroup label="Product or Service *">
            <textarea
              className="portal-input"
              rows={2}
              placeholder="e.g. Medical-grade silicone nasal dilators that improve airflow, sleep, and athletic performance"
              value={brief.productOrService}
              onChange={(e) => setBrief({ ...brief, productOrService: e.target.value })}
            />
          </FormGroup>
          <FormGroup label="Target Audience *">
            <input
              className="portal-input"
              placeholder="e.g. Australian adults 25-45 who snore, mouth breathe, or care about sleep quality"
              value={brief.targetAudience}
              onChange={(e) => setBrief({ ...brief, targetAudience: e.target.value })}
            />
          </FormGroup>
          <FormGroup label="Unique Value Proposition *">
            <textarea
              className="portal-input"
              rows={2}
              placeholder="e.g. Unlike nasal strips that fall off at 2am, NoseFlow sits inside your nose and stays all night — reusable, drug-free, and clinically more effective"
              value={brief.uniqueValueProp}
              onChange={(e) => setBrief({ ...brief, uniqueValueProp: e.target.value })}
            />
          </FormGroup>
          <FormGroup label="Main Competitors (optional)">
            <input
              className="portal-input"
              placeholder="e.g. Breathe Right strips, Mute nasal dilators"
              value={brief.competitors}
              onChange={(e) => setBrief({ ...brief, competitors: e.target.value })}
            />
          </FormGroup>

          <NextButton
            onClick={() => setStep(2)}
            disabled={!isStep1Valid}
            label="Next: Content Types"
          />
        </div>
      )}

      {/* Step 2 — Content Types & Platforms */}
      {step === 2 && (
        <div className="flex flex-col gap-6">
          <StepHeading
            title="What do you want to generate?"
            subtitle="Select all content types and platforms you need."
          />

          <FormGroup label="Content Types *">
            <div className="grid grid-cols-1 gap-3">
              {contentTypeOptions.map((opt) => {
                const selected = brief.contentTypes.includes(opt.value);
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => toggleContentType(opt.value)}
                    className="flex items-start gap-4 p-4 rounded-xl text-left transition-all"
                    style={{
                      background: selected ? "var(--color-blue-50)" : "var(--color-neutral-50)",
                      border: selected
                        ? "1.5px solid var(--color-blue-400)"
                        : "1.5px solid var(--color-neutral-200)",
                    }}
                  >
                    <div
                      className="w-5 h-5 rounded flex-shrink-0 mt-0.5 flex items-center justify-center"
                      style={{
                        background: selected ? "var(--color-blue-500)" : "white",
                        border: selected
                          ? "1.5px solid var(--color-blue-500)"
                          : "1.5px solid var(--color-neutral-300)",
                      }}
                    >
                      {selected && (
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path d="M1 4l2.5 2.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-600" style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-body)" }}>
                        {opt.label}
                      </p>
                      <p className="text-xs mt-0.5" style={{ color: "var(--color-neutral-400)", fontFamily: "var(--font-body)" }}>
                        {opt.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </FormGroup>

          <FormGroup label="Platforms *">
            <div className="flex flex-wrap gap-2">
              {platformOptions.map((opt) => {
                const selected = brief.platforms.includes(opt.value);
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => togglePlatform(opt.value)}
                    className="px-4 py-2 rounded-full text-sm font-600 transition-all"
                    style={{
                      background: selected ? "var(--color-navy-900)" : "var(--color-neutral-100)",
                      color: selected ? "white" : "var(--color-neutral-600)",
                      border: selected
                        ? "1.5px solid var(--color-navy-900)"
                        : "1.5px solid var(--color-neutral-200)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </FormGroup>

          <div className="flex gap-3">
            <BackButton onClick={() => setStep(1)} />
            <NextButton
              onClick={() => setStep(3)}
              disabled={!isStep2Valid}
              label="Next: Tone & Details"
            />
          </div>
        </div>
      )}

      {/* Step 3 — Tone & Final Details */}
      {step === 3 && (
        <div className="flex flex-col gap-6">
          <StepHeading
            title="Almost there"
            subtitle="Set the tone and any final details."
          />

          <FormGroup label="Tone *">
            <div className="grid grid-cols-1 gap-2">
              {toneOptions.map((opt) => {
                const selected = brief.tone === opt.value;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setBrief({ ...brief, tone: opt.value })}
                    className="flex items-center gap-4 px-4 py-3 rounded-xl text-left transition-all"
                    style={{
                      background: selected ? "var(--color-blue-50)" : "var(--color-neutral-50)",
                      border: selected
                        ? "1.5px solid var(--color-blue-400)"
                        : "1.5px solid var(--color-neutral-200)",
                    }}
                  >
                    <div
                      className="w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center"
                      style={{
                        border: selected
                          ? "4px solid var(--color-blue-500)"
                          : "1.5px solid var(--color-neutral-300)",
                        background: "white",
                      }}
                    />
                    <div>
                      <span className="text-sm font-600" style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-body)" }}>
                        {opt.label}
                      </span>
                      <span className="text-xs ml-2" style={{ color: "var(--color-neutral-400)", fontFamily: "var(--font-body)" }}>
                        {opt.description}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </FormGroup>

          <FormGroup label="Key Message (optional)">
            <input
              className="portal-input"
              placeholder="e.g. Stop mouth breathing. Start sleeping better."
              value={brief.keyMessage}
              onChange={(e) => setBrief({ ...brief, keyMessage: e.target.value })}
            />
          </FormGroup>

          <FormGroup label="Call to Action (optional)">
            <input
              className="portal-input"
              placeholder="e.g. Shop now — free shipping over $25"
              value={brief.callToAction}
              onChange={(e) => setBrief({ ...brief, callToAction: e.target.value })}
            />
          </FormGroup>

          {error && (
            <div
              className="px-4 py-3 rounded-xl text-sm"
              style={{
                background: "#fff1f2",
                border: "1px solid #fecdd3",
                color: "#be123c",
                fontFamily: "var(--font-body)",
              }}
            >
              {error}
            </div>
          )}

          <div className="flex gap-3">
            <BackButton onClick={() => setStep(2)} />
            <button
              type="button"
              onClick={handleSubmit}
              disabled={loading || !isStep3Valid}
              className="flex-1 py-4 rounded-xl text-white text-sm font-600 transition-all flex items-center justify-center gap-2"
              style={{
                background: loading ? "var(--color-neutral-300)" : "var(--color-navy-900)",
                fontFamily: "var(--font-body)",
                cursor: loading ? "not-allowed" : "pointer",
              }}
            >
              {loading ? (
                <>
                  <Spinner />
                  Generating your content...
                </>
              ) : (
                "Generate Content →"
              )}
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        :global(.portal-input) {
          width: 100%;
          font-family: var(--font-body);
          font-size: 14px;
          color: var(--color-neutral-800);
          background: var(--color-neutral-50);
          border: 1.5px solid var(--color-neutral-200);
          border-radius: 10px;
          padding: 12px 16px;
          transition: all 0.2s;
          outline: none;
          resize: vertical;
        }
        :global(.portal-input:focus) {
          border-color: var(--color-blue-500);
          background: white;
          box-shadow: 0 0 0 3px rgba(31, 143, 205, 0.08);
        }
      `}</style>
    </div>
  );
}

function StepHeading({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="mb-2">
      <h2
        className="text-2xl font-700 mb-1"
        style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-heading)" }}
      >
        {title}
      </h2>
      <p className="text-sm" style={{ color: "var(--color-neutral-500)", fontFamily: "var(--font-body)" }}>
        {subtitle}
      </p>
    </div>
  );
}

function FormGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <label
        className="text-sm font-600"
        style={{ color: "var(--color-neutral-700)", fontFamily: "var(--font-body)" }}
      >
        {label}
      </label>
      {children}
    </div>
  );
}

function NextButton({ onClick, disabled, label }: { onClick: () => void; disabled: boolean; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="flex-1 py-3.5 rounded-xl text-sm font-600 transition-all"
      style={{
        background: disabled ? "var(--color-neutral-200)" : "var(--color-navy-900)",
        color: disabled ? "var(--color-neutral-400)" : "white",
        fontFamily: "var(--font-body)",
        cursor: disabled ? "not-allowed" : "pointer",
      }}
    >
      {label}
    </button>
  );
}

function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="px-6 py-3.5 rounded-xl text-sm font-600 transition-all"
      style={{
        background: "var(--color-neutral-100)",
        color: "var(--color-neutral-600)",
        border: "1.5px solid var(--color-neutral-200)",
        fontFamily: "var(--font-body)",
      }}
    >
      ← Back
    </button>
  );
}

function Spinner() {
  return (
    <svg
      className="animate-spin"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="3" strokeOpacity="0.3" />
      <path d="M12 2a10 10 0 0 1 10 10" stroke="white" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
