// src/components/Pricing.tsx

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  featured?: boolean;
}

const tiers: PricingTier[] = [
  {
    name: "Starter",
    price: "1,500",
    description: "For businesses just starting their content and marketing journey.",
    features: [
      "20 AI-generated video scripts/month",
      "2 platform content strategy",
      "Monthly performance report",
      "Basic SEO setup",
      "Email support",
    ],
    cta: "Get Started",
  },
  {
    name: "Growth",
    price: "3,500",
    description: "For brands ready to scale with AI-powered content and paid ads.",
    features: [
      "45 AI scripts/month across all platforms",
      "Paid ad creative & copy (Meta + TikTok)",
      "Full SEO & content strategy",
      "Weekly reporting & strategy calls",
      "Competitor analysis",
      "Priority support",
    ],
    cta: "Get Started",
    featured: true,
  },
  {
    name: "Scale",
    price: "7,500",
    description: "Full AI marketing system. Everything, everywhere, all at once.",
    features: [
      "Everything in Growth",
      "Full AI marketing system build",
      "Email automation & CRM setup",
      "Live performance dashboard",
      "Dedicated account manager",
      "Unlimited revisions",
    ],
    cta: "Get Started",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionTag label="Pricing" />
        <h2
          className="text-4xl sm:text-5xl font-800 leading-tight tracking-tight mb-4"
          style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-heading)" }}
        >
          Transparent pricing.
          <br />
          No lock-in contracts.
        </h2>
        <p
          className="text-lg leading-relaxed mb-14 max-w-xl"
          style={{ color: "var(--color-neutral-500)", fontFamily: "var(--font-body)" }}
        >
          Month-to-month. Cancel anytime. We earn your business every single month.
        </p>

        <div className="grid sm:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="rounded-2xl p-9 relative transition-all duration-200"
              style={{
                background: tier.featured ? "var(--color-navy-900)" : "white",
                border: tier.featured
                  ? "1.5px solid var(--color-navy-900)"
                  : "1.5px solid var(--color-neutral-200)",
              }}
            >
              {tier.featured && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-700 uppercase tracking-widest text-white px-4 py-1 rounded-full whitespace-nowrap"
                  style={{
                    background: "var(--color-blue-500)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  Most Popular
                </div>
              )}

              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{
                  color: tier.featured ? "rgba(255,255,255,0.5)" : "var(--color-neutral-400)",
                  fontFamily: "var(--font-body)",
                }}
              >
                {tier.name}
              </p>

              <div className="flex items-baseline gap-1 mb-1">
                <span
                  className="text-xl font-700 mt-1.5"
                  style={{
                    color: tier.featured ? "white" : "var(--color-navy-900)",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  $
                </span>
                <span
                  className="text-5xl font-800 leading-none"
                  style={{
                    color: tier.featured ? "white" : "var(--color-navy-900)",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  {tier.price}
                </span>
                <span
                  className="text-sm"
                  style={{
                    color: tier.featured ? "rgba(255,255,255,0.4)" : "var(--color-neutral-400)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  /mo
                </span>
              </div>

              <p
                className="text-sm leading-relaxed mb-8"
                style={{
                  color: tier.featured ? "rgba(255,255,255,0.5)" : "var(--color-neutral-500)",
                  fontFamily: "var(--font-body)",
                }}
              >
                {tier.description}
              </p>

              <div
                className="h-px mb-8"
                style={{
                  background: tier.featured
                    ? "rgba(255,255,255,0.1)"
                    : "var(--color-neutral-100)",
                }}
              />

              <ul className="flex flex-col gap-3 list-none mb-8">
                {tier.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-sm leading-snug"
                    style={{
                      color: tier.featured ? "rgba(255,255,255,0.7)" : "var(--color-neutral-600)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    <span
                      className="w-4 h-4 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center"
                      style={{
                        background: tier.featured
                          ? "rgba(29,111,255,0.2)"
                          : "var(--color-blue-50)",
                      }}
                    >
                      <svg width="8" height="7" viewBox="0 0 8 7" fill="none">
                        <path
                          d="M1 3.5l2 2 4-4"
                          stroke="var(--color-blue-400)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="block w-full text-center py-3.5 rounded-xl text-sm font-semibold transition-all no-underline"
                style={{
                  background: tier.featured ? "var(--color-blue-500)" : "transparent",
                  color: tier.featured ? "white" : "var(--color-navy-900)",
                  border: tier.featured ? "none" : "1.5px solid var(--color-neutral-200)",
                  fontFamily: "var(--font-body)",
                }}
              >
                {tier.cta}
              </a>
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
