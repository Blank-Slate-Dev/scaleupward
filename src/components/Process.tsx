// src/components/Process.tsx

const steps = [
  {
    num: "01",
    title: "Discovery Call",
    description:
      "We learn your brand, audience, competitors, and goals. 45 minutes. No fluff.",
  },
  {
    num: "02",
    title: "Strategy Build",
    description:
      "We map your content angles, ad strategy, and 90-day growth roadmap using AI research tools.",
  },
  {
    num: "03",
    title: "Launch & Test",
    description:
      "Content goes live. We test hooks, angles, and formats — rapidly iterating on what the data shows.",
  },
  {
    num: "04",
    title: "Scale & Report",
    description:
      "We double down on winners, cut losers, and send you weekly reports on exactly what's working.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ background: "var(--color-navy-900)" }}
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-dark pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Tag */}
        <div
          className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-4"
          style={{ color: "var(--color-blue-400)", fontFamily: "var(--font-body)" }}
        >
          <span
            className="w-5 h-0.5 rounded-sm"
            style={{ background: "var(--color-blue-400)" }}
          />
          How It Works
        </div>

        <h2
          className="text-4xl sm:text-5xl font-800 leading-tight tracking-tight mb-4 text-white"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          From brief to results
          <br />
          in four steps.
        </h2>
        <p
          className="text-lg leading-relaxed mb-16 max-w-lg"
          style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-body)" }}
        >
          We move fast. Most clients see their first content live within 7 days
          of onboarding.
        </p>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line — desktop only */}
          <div
            className="absolute hidden lg:block top-7 left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] h-px"
            style={{
              background:
                "linear-gradient(90deg, var(--color-blue-500) 0%, rgba(29,111,255,0.15) 100%)",
            }}
          />

          {steps.map((step) => (
            <div key={step.num} className="text-center relative z-10">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5 text-lg font-800"
                style={{
                  background: "var(--color-navy-800)",
                  border: "2px solid var(--color-blue-500)",
                  color: "var(--color-blue-400)",
                  fontFamily: "var(--font-heading)",
                }}
              >
                {step.num}
              </div>
              <h4
                className="text-base font-700 text-white mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {step.title}
              </h4>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-body)" }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
