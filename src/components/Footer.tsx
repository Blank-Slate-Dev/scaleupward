// src/components/Footer.tsx
"use client";

const footerLinks = {
  Services: [
    { label: "Short-Form Video", href: "#services" },
    { label: "Paid Ad Creative", href: "#services" },
    { label: "SEO & Content", href: "#services" },
    { label: "Full AI System", href: "#services" },
  ],
  Company: [
    { label: "Case Studies", href: "#cases" },
    { label: "How It Works", href: "#process" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer
      className="px-4 sm:px-6 lg:px-8 pt-16 pb-8"
      style={{ background: "var(--color-navy-900)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Top grid */}
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 pb-12"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
        >
          {/* Brand */}
          <div className="lg:col-span-2">
            <div
              className="text-xl font-800 text-white mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Scale<span style={{ color: "var(--color-blue-400)" }}>Upward</span>
            </div>
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-body)" }}
            >
              AI-powered marketing for businesses that are serious about growth.
              We build the systems. You reap the results.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <p
                className="text-xs font-700 uppercase tracking-widest text-white mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {heading}
              </p>
              <ul className="flex flex-col gap-2.5 list-none">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="footer-link text-sm no-underline transition-colors"
                      style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-body)" }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p
            className="text-xs"
            style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-body)" }}
          >
            © {new Date().getFullYear()} ScaleUpward. All rights reserved.
            Australian owned &amp; operated.
          </p>
          <p
            className="text-xs"
            style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-body)" }}
          >
            hello@scaleupward.com
          </p>
        </div>
      </div>
    </footer>
  );
}
