// src/components/Contact.tsx
"use client";

import { useState } from "react";
import { Clock, CheckCircle, Star } from "lucide-react";

const contactPoints = [
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "First content live within 7 days of onboarding.",
  },
  {
    icon: CheckCircle,
    title: "No Lock-In Contracts",
    description: "Month-to-month. We earn your business every month.",
  },
  {
    icon: Star,
    title: "Results Guaranteed",
    description: "No measurable progress in 30 days? You don't pay.",
  },
];

const budgets = [
  "Under $1,000/mo",
  "$1,000 – $3,000/mo",
  "$3,000 – $10,000/mo",
  "$10,000+/mo",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8"
      style={{ background: "var(--color-neutral-50)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left */}
          <div>
            <SectionTag label="Get In Touch" />
            <h2
              className="text-4xl sm:text-5xl font-800 leading-tight tracking-tight mb-5"
              style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-heading)" }}
            >
              Ready to scale
              <br />
              your business?
            </h2>
            <p
              className="text-lg leading-relaxed mb-12"
              style={{ color: "var(--color-neutral-500)", fontFamily: "var(--font-body)" }}
            >
              Tell us about your brand and where you want to go. We&apos;ll come back
              within 24 hours with a clear plan — no jargon, no fluff, just a
              path to growth.
            </p>

            <div className="flex flex-col gap-6">
              {contactPoints.map((point) => {
                const Icon = point.icon;
                return (
                  <div key={point.title} className="flex items-start gap-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "var(--color-blue-50)",
                        color: "var(--color-blue-500)",
                      }}
                    >
                      <Icon size={18} />
                    </div>
                    <div>
                      <h4
                        className="text-sm font-700 mb-0.5"
                        style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-heading)" }}
                      >
                        {point.title}
                      </h4>
                      <p
                        className="text-sm"
                        style={{ color: "var(--color-neutral-500)", fontFamily: "var(--font-body)" }}
                      >
                        {point.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right — Form */}
          <div
            className="rounded-3xl p-10"
            style={{
              background: "white",
              border: "1.5px solid var(--color-neutral-200)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.04)",
            }}
          >
            {submitted ? (
              <div className="text-center py-12">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ background: "var(--color-blue-50)" }}
                >
                  <CheckCircle size={28} style={{ color: "var(--color-blue-500)" }} />
                </div>
                <h3
                  className="text-2xl font-700 mb-3"
                  style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-heading)" }}
                >
                  Request Received!
                </h3>
                <p
                  className="text-sm"
                  style={{ color: "var(--color-neutral-500)", fontFamily: "var(--font-body)" }}
                >
                  We&apos;ll be in touch within 24 hours with a clear plan for your business.
                </p>
              </div>
            ) : (
              <>
                <h3
                  className="text-xl font-700 mb-7"
                  style={{ color: "var(--color-navy-900)", fontFamily: "var(--font-heading)" }}
                >
                  Book a Free Strategy Call
                </h3>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <FormGroup label="First Name">
                      <input
                        type="text"
                        className="form-input"
                        placeholder="Alex"
                        required
                      />
                    </FormGroup>
                    <FormGroup label="Last Name">
                      <input
                        type="text"
                        className="form-input"
                        placeholder="Johnson"
                        required
                      />
                    </FormGroup>
                  </div>

                  <FormGroup label="Email">
                    <input
                      type="email"
                      className="form-input"
                      placeholder="alex@yourbrand.com"
                      required
                    />
                  </FormGroup>

                  <FormGroup label="Business Name">
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Your Brand Co."
                      required
                    />
                  </FormGroup>

                  <FormGroup label="Monthly Marketing Budget">
                    <select className="form-input" required>
                      <option value="">Select a range...</option>
                      {budgets.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </FormGroup>

                  <FormGroup label="Tell us about your business">
                    <textarea
                      className="form-input"
                      placeholder="What do you sell, who's your audience, and what's your biggest marketing challenge right now?"
                      rows={4}
                      style={{ resize: "vertical" }}
                      required
                    />
                  </FormGroup>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl text-white text-sm font-semibold transition-all hover:-translate-y-0.5 mt-2"
                    style={{
                      background: "var(--color-navy-900)",
                      fontFamily: "var(--font-body)",
                      boxShadow: "0 4px 20px rgba(10,22,40,0.15)",
                    }}
                  >
                    Book My Free Strategy Call →
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .form-input {
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
        }
        .form-input:focus {
          border-color: var(--color-blue-500);
          background: white;
          box-shadow: 0 0 0 3px rgba(29, 111, 255, 0.08);
        }
      `}</style>
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

function FormGroup({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
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
