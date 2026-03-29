// src/components/CaseStudies.tsx
"use client";

interface CaseMetric {
  label: string;
  value: string;
  sub: string;
}

interface CaseStudy {
  tag: string;
  title: string;
  description: string;
  metrics: CaseMetric[];
  industry: string;
  featured?: boolean;
}

const cases: CaseStudy[] = [
  {
    tag: "Health & Wellness — E-Commerce",
    title: "NoseFlow",
    description:
      "A medical-grade silicone nasal dilator brand targeting sleep, snoring, and athletic performance. We built their entire content and marketing system from zero — scripts, organic video strategy, and paid ad creative — taking them from launch to consistent monthly revenue.",
    metrics: [
      { label: "Revenue Growth", value: "$0→$18k", sub: "First 90 days" },
      { label: "Video Views", value: "2.4M", sub: "Organic only" },
      { label: "Scripts Written", value: "45+", sub: "AI-generated" },
      { label: "ROAS (Paid)", value: "5.8x", sub: "Month 3" },
    ],
    industry: "Health · Australia",
    featured: true,
  },
  {
    tag: "Local Services",
    title: "Tradie Growth Co.",
    description:
      "A Melbourne-based trades network. Built a short-form content system and Google ad campaigns targeting local homeowners.",
    metrics: [
      { label: "Leads / Month", value: "+340%", sub: "vs. prior agency" },
      { label: "Cost Per Lead", value: "$14.20", sub: "↓ from $67" },
    ],
    industry: "Home Services · Melbourne",
  },
  {
    tag: "Fashion & Apparel",
    title: "Matching Minis",
    description:
      "Family sleepwear brand targeting mums. Full TikTok and Instagram Reels strategy using emotional storytelling content.",
    metrics: [
      { label: "Revenue / Month", value: "$22k", sub: "Month 4" },
      { label: "Followers Gained", value: "18.4k", sub: "In 60 days" },
    ],
    industry: "Fashion · Australia-wide",
  },
  {
    tag: "SaaS",
    title: "EdgeMaxxer",
    description:
      "Sports arbitrage platform. Built content and SEO strategy targeting bettors searching for edge.",
    metrics: [
      { label: "Subscribers", value: "+820", sub: "In 90 days" },
      { label: "MRR", value: "$14.8k", sub: "From organic" },
    ],
    industry: "SaaS · Sports Tech",
  },
];

export default function CaseStudies() {
  const featured = cases.find((c) => c.featured);
  const rest = cases.filter((c) => !c.featured);

  return (
    <section
      id="cases"
      className="py-24 px-4 sm:px-6 lg:px-8"
      style={{ background: "var(--color-neutral-50)" }}
    >
      <div className="max-w-7xl mx-auto">
        <SectionTag label="Case Studies" />
        <h2
          className="text-4xl sm:text-5xl font-800 leading-tight tracking-tight mb-4"
          style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-heading)" }}
        >
          Results speak
          <br />
          louder than decks.
        </h2>
        <p
          className="text-lg leading-relaxed mb-14 max-w-xl"
          style={{ color: "var(--color-neutral-500)", fontFamily: "var(--font-body)" }}
        >
          Real brands. Real numbers. No vanity metrics.
        </p>

        {/* Featured case */}
        {featured && (
          <div
            className="rounded-2xl overflow-hidden mb-6"
            style={{
              background: "white",
              border: "1.5px solid var(--color-neutral-200)",
            }}
          >
            <div className="grid lg:grid-cols-2">
              {/* Left */}
              <div
                className="p-9"
                style={{ borderBottom: "1px solid var(--color-neutral-100)" }}
              >
                <span
                  className="inline-flex items-center gap-1.5 text-xs font-700 uppercase tracking-widest px-3 py-1 rounded-full mb-4"
                  style={{
                    background: "#fffbeb",
                    border: "1px solid #fde68a",
                    color: "#d97706",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  ⭐ Flagship Case Study
                </span>
                <span
                  className="block text-xs font-700 uppercase tracking-widest px-3 py-1 rounded-full mb-4 w-fit"
                  style={{
                    background: "var(--color-blue-50)",
                    border: "1px solid var(--color-blue-100)",
                    color: "var(--color-blue-500)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {featured.tag}
                </span>
                <h3
                  className="text-2xl font-700 mb-3"
                  style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-heading)" }}
                >
                  {featured.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-neutral-500)", fontFamily: "var(--font-body)" }}
                >
                  {featured.description}
                </p>
              </div>

              {/* Right — metrics */}
              <div
                className="grid grid-cols-2 p-9 gap-8 content-center"
                style={{ borderLeft: "1px solid var(--color-neutral-100)" }}
              >
                {featured.metrics.map((m) => (
                  <div key={m.label}>
                    <p
                      className="text-xs uppercase tracking-widest mb-1"
                      style={{ color: "var(--color-neutral-400)", fontFamily: "var(--font-body)" }}
                    >
                      {m.label}
                    </p>
                    <p
                      className="text-3xl font-800"
                      style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-heading)" }}
                    >
                      {m.value}
                    </p>
                    <p
                      className="text-xs font-semibold mt-0.5"
                      style={{ color: "var(--color-green-500)", fontFamily: "var(--font-body)" }}
                    >
                      {m.sub}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Rest */}
        <div className="grid sm:grid-cols-3 gap-6">
          {rest.map((c) => (
            <div
              key={c.title}
              className="case-card-hover rounded-2xl overflow-hidden transition-all duration-200"
              style={{
                background: "white",
                border: "1.5px solid var(--color-neutral-200)",
              }}
            >
              <div
                className="p-7"
                style={{ borderBottom: "1px solid var(--color-neutral-100)" }}
              >
                <span
                  className="inline-block text-xs font-700 uppercase tracking-widest px-2.5 py-1 rounded-full mb-4"
                  style={{
                    background: "var(--color-blue-50)",
                    border: "1px solid var(--color-blue-100)",
                    color: "var(--color-blue-500)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {c.tag}
                </span>
                <h3
                  className="text-xl font-700 mb-2"
                  style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-heading)" }}
                >
                  {c.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-neutral-500)", fontFamily: "var(--font-body)" }}
                >
                  {c.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 p-7">
                {c.metrics.map((m) => (
                  <div key={m.label}>
                    <p
                      className="text-xs uppercase tracking-widest mb-1"
                      style={{ color: "var(--color-neutral-400)", fontFamily: "var(--font-body)" }}
                    >
                      {m.label}
                    </p>
                    <p
                      className="text-2xl font-800"
                      style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-heading)" }}
                    >
                      {m.value}
                    </p>
                    <p
                      className="text-xs font-semibold"
                      style={{ color: "var(--color-green-500)", fontFamily: "var(--font-body)" }}
                    >
                      {m.sub}
                    </p>
                  </div>
                ))}
              </div>

              <div
                className="px-7 py-4"
                style={{ borderTop: "1px solid var(--color-neutral-100)" }}
              >
                <span
                  className="text-xs"
                  style={{ color: "var(--color-neutral-400)", fontFamily: "var(--font-body)" }}
                >
                  {c.industry}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionTag({ label }: { label: string }) {
  return (
    <div
      className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-4"
      style={{ color: "var(--color-blue-500)", fontFamily: "var(--font-body)" }}
    >
      <span
        className="w-5 h-0.5 rounded-sm"
        style={{ background: "var(--color-blue-500)" }}
      />
      {label}
    </div>
  );
}
