// src/components/Hero.tsx
"use client";

import { motion } from "framer-motion";

const metrics = [
  { label: "Revenue", value: "$48.2k", change: "↑ 127%", positive: true },
  { label: "ROAS", value: "6.4x", change: "↑ 43%", positive: true },
  { label: "CAC", value: "$12.40", change: "↓ 38%", positive: false },
];

const bars = [35, 48, 42, 60, 55, 72, 88];
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
      {/* Grid background */}
      <div
        className="absolute inset-0 bg-grid opacity-40 pointer-events-none"
        style={{
          maskImage: "radial-gradient(ellipse at 65% 40%, black 30%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at 65% 40%, black 30%, transparent 70%)",
        }}
      />

      {/* Blue glow */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(29,111,255,0.07) 0%, transparent 70%)",
          transform: "translate(200px, -100px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6"
              style={{
                background: "var(--color-blue-50)",
                border: "1px solid var(--color-blue-100)",
                color: "var(--color-blue-500)",
                fontFamily: "var(--font-body)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse-dot" />
              AI-Powered Marketing Agency
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-800 leading-[1.06] tracking-tight mb-6"
              style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-heading)" }}
            >
              Marketing that{" "}
              <span style={{ color: "var(--color-blue-500)" }}>scales</span>{" "}
              with{" "}
              <span className="relative inline-block">
                intelligence.
                <span
                  className="absolute bottom-1 left-0 right-0 h-1 rounded-sm"
                  style={{ background: "var(--color-blue-200)" }}
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg leading-relaxed mb-10 max-w-lg"
              style={{ color: "var(--color-neutral-500)", fontFamily: "var(--font-body)" }}
            >
              We use cutting-edge AI to build marketing systems that generate
              content, run campaigns, and grow revenue — on autopilot. More
              output. Less overhead. Better results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 items-center"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-white text-sm font-semibold px-7 py-4 rounded-xl transition-all hover:-translate-y-0.5 no-underline"
                style={{
                  background: "var(--color-navy-900)",
                  fontFamily: "var(--font-body)",
                  boxShadow: "0 4px 20px rgba(10,22,40,0.15)",
                }}
              >
                Start Growing
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M8 3l5 5-5 5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#cases"
                className="inline-flex items-center gap-2 text-sm font-medium no-underline transition-colors"
                style={{ color: "var(--color-neutral-500)", fontFamily: "var(--font-body)" }}
              >
                See Results
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Right — Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden lg:block relative"
          >
            {/* Float card top */}
            <div
              className="absolute -top-6 -right-8 z-10 rounded-2xl px-4 py-3 animate-float"
              style={{
                background: "white",
                border: "1px solid var(--color-neutral-200)",
                boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
              }}
            >
              <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--color-neutral-400)", fontFamily: "var(--font-body)" }}>
                This Month
              </p>
              <p className="text-xl font-800" style={{ fontFamily: "var(--font-heading)", color: "var(--color-navy-900)" }}>
                +284%
              </p>
              <p className="text-xs font-semibold" style={{ color: "var(--color-green-500)" }}>
                ↑ Organic reach
              </p>
            </div>

            {/* Dashboard card */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: "white",
                border: "1px solid var(--color-neutral-200)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
              }}
            >
              {/* Header */}
              <div
                className="flex items-center justify-between px-5 py-4"
                style={{ borderBottom: "1px solid var(--color-neutral-100)" }}
              >
                <span
                  className="text-sm font-700"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--color-navy-900)" }}
                >
                  Campaign Performance
                </span>
                <span
                  className="text-xs px-3 py-1 rounded-lg"
                  style={{
                    background: "var(--color-neutral-100)",
                    color: "var(--color-neutral-400)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  Last 30 days
                </span>
              </div>

              {/* Metrics */}
              <div
                className="grid grid-cols-3"
                style={{ gap: "1px", background: "var(--color-neutral-100)" }}
              >
                {metrics.map((m) => (
                  <div key={m.label} className="bg-white px-5 py-4">
                    <p
                      className="text-xs uppercase tracking-widest mb-1"
                      style={{ color: "var(--color-neutral-400)", fontFamily: "var(--font-body)" }}
                    >
                      {m.label}
                    </p>
                    <p
                      className="text-2xl font-800"
                      style={{ fontFamily: "var(--font-heading)", color: "var(--color-navy-900)" }}
                    >
                      {m.value}
                    </p>
                    <p
                      className="text-xs font-semibold mt-0.5"
                      style={{ color: m.positive ? "var(--color-green-500)" : "var(--color-green-500)", fontFamily: "var(--font-body)" }}
                    >
                      {m.change}
                    </p>
                  </div>
                ))}
              </div>

              {/* Chart */}
              <div className="px-5 py-5">
                <div className="flex items-end gap-2 h-20 mb-2">
                  {bars.map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t transition-colors"
                      style={{
                        height: `${h}%`,
                        background: i === bars.length - 1
                          ? "var(--color-blue-500)"
                          : "var(--color-blue-100)",
                      }}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  {days.map((d) => (
                    <div
                      key={d}
                      className="flex-1 text-center text-xs"
                      style={{ color: "var(--color-neutral-400)", fontFamily: "var(--font-body)" }}
                    >
                      {d}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Float card bottom */}
            <div
              className="absolute -bottom-4 -left-8 z-10 rounded-2xl px-4 py-3 animate-float-delayed"
              style={{
                background: "white",
                border: "1px solid var(--color-neutral-200)",
                boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
              }}
            >
              <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--color-neutral-400)", fontFamily: "var(--font-body)" }}>
                Videos Published
              </p>
              <p className="text-xl font-800" style={{ fontFamily: "var(--font-heading)", color: "var(--color-navy-900)" }}>
                47
              </p>
              <p className="text-xs font-semibold" style={{ color: "var(--color-green-500)" }}>
                ↑ 3.2M views total
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
