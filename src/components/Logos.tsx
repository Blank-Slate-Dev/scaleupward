// src/components/Logos.tsx

const categories = [
  "E-Commerce",
  "Health & Wellness",
  "SaaS",
  "Local Services",
  "Fashion",
  "Food & Bev",
];

export default function Logos() {
  return (
    <section
      className="py-12 px-4 sm:px-6 lg:px-8"
      style={{
        background: "var(--color-neutral-50)",
        borderTop: "1px solid var(--color-neutral-200)",
        borderBottom: "1px solid var(--color-neutral-200)",
      }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-7"
          style={{ color: "var(--color-neutral-400)", fontFamily: "var(--font-body)" }}
        >
          Trusted by brands across every category
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {categories.map((cat) => (
            <span
              key={cat}
              className="text-base font-700"
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--color-neutral-300)",
                letterSpacing: "-0.01em",
              }}
            >
              {cat}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
