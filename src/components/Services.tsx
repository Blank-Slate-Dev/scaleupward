// src/components/Services.tsx
"use client";

import { Monitor, Layers, Search, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

const services: Service[] = [
  {
    icon: Monitor,
    title: "Short-Form Video & Scripts",
    description:
      "AI-generated scripts, hooks, and content strategies built for TikTok, Reels, Shorts, and Facebook. We write the scripts, brief the shoots, and optimise what works.",
    features: [
      "30+ scripts per month, per brand",
      "Hook testing & performance tracking",
      "Platform-specific optimisation",
      "Competitor angle analysis",
    ],
  },
  {
    icon: Layers,
    title: "Paid Ad Creative & Copy",
    description:
      "High-converting ad creative built with AI — from ideation to copywriting to creative briefs. We test fast, kill what doesn't work, and scale what does.",
    features: [
      "Meta, TikTok & Google ad copy",
      "Multi-variant creative testing",
      "Landing page copy optimisation",
      "Weekly performance reporting",
    ],
  },
  {
    icon: Search,
    title: "SEO & Content Marketing",
    description:
      "AI-powered content strategies that build long-term organic traffic. Keyword clusters, blog architecture, and on-page SEO — done systematically and at scale.",
    features: [
      "Keyword research & content mapping",
      "AI-assisted article production",
      "Technical SEO audits",
      "Monthly traffic reporting",
    ],
  },
  {
    icon: Zap,
    title: "Full AI Marketing System",
    description:
      "We build your entire marketing infrastructure — content pipelines, ad systems, email flows, and reporting dashboards — all powered by AI and running around the clock.",
    features: [
      "End-to-end marketing automation",
      "Custom AI content pipelines",
      "CRM & email sequence setup",
      "Live performance dashboard",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionTag label="What We Do" />
        <h2
          className="text-4xl sm:text-5xl font-800 leading-tight tracking-tight mb-4"
          style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-heading)" }}
        >
          AI-powered services
          <br />
          that actually convert.
        </h2>
        <p
          className="text-lg leading-relaxed mb-14 max-w-xl"
          style={{ color: "var(--color-neutral-500)", fontFamily: "var(--font-body)" }}
        >
          We combine AI tools, proven frameworks, and human strategy to build
          marketing systems that compound over time.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="service-card group rounded-2xl p-9 cursor-default"
                style={{
                  background: "var(--color-neutral-50)",
                  border: "1.5px solid var(--color-neutral-200)",
                  transition: "all 0.25s",
                }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                  style={{
                    background: "var(--color-blue-50)",
                    color: "var(--color-blue-500)",
                  }}
                >
                  <Icon size={22} />
                </div>

                <h3
                  className="text-xl font-700 mb-3"
                  style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-heading)" }}
                >
                  {service.title}
                </h3>

                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: "var(--color-neutral-500)", fontFamily: "var(--font-body)" }}
                >
                  {service.description}
                </p>

                <ul className="flex flex-col gap-2 list-none">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2.5 text-sm font-medium"
                      style={{ color: "var(--color-neutral-600)", fontFamily: "var(--font-body)" }}
                    >
                      <CheckCircle />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
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

function CheckCircle() {
  return (
    <span
      className="w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center"
      style={{ background: "var(--color-blue-50)", border: "1.5px solid var(--color-blue-100)" }}
    >
      <svg width="8" height="7" viewBox="0 0 8 7" fill="none">
        <path
          d="M1 3.5l2 2 4-4"
          stroke="var(--color-blue-500)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
