import type { Metadata } from "next";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollRevealWrapper from "./components/ScrollRevealWrapper";

export const metadata: Metadata = {
  title: "Medileo Healthcare - Advancing Science, Empowering Lives",
  description:
    "Medileo Healthcare Pvt. Ltd. — WHO-GMP certified, research-driven pharmaceutical company delivering premium therapeutic formulations across India.",
};

const therapeuticAreas = [
  {
    emoji: "❤️",
    title: "Cardio-Metabolic",
    subtitle: "Hypertension & Vascular Care",
  },
  {
    emoji: "🩸",
    title: "Diabetology",
    subtitle: "Type-2 Diabetes Management",
  },
  {
    emoji: "🧠",
    title: "Neurology",
    subtitle: "Neuropathy & Migraine Care",
  },
  {
    emoji: "🩺",
    title: "Gastroenterology",
    subtitle: "GERD & Dyspepsia Relief",
  },
];

const stats = [
  { value: "50+", label: "Formulations" },
  { value: "WHO", label: "GMP Certified" },
  { value: "100%", label: "Efficacy Tested" },
  { value: "Pan", label: "India Network" },
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* ─── Hero ─── */}
        <section className="hero-gradient relative overflow-hidden text-white pt-20 pb-32">
          <div className="hero-wave" aria-hidden="true" />
          <div className="max-w-[1280px] mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left content */}
              <div className="col-span-1 lg:col-span-7 flex flex-col gap-6">
                <div className="inline-flex items-center gap-2 border border-white/20 rounded-full px-4 py-2 w-max glass-card animate-fade-in-up">
                  <span className="w-2 h-2 rounded-full bg-(--color-status-success)" />
                  <span
                    className="text-white/90 tracking-widest text-xs font-bold uppercase"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    From Vital Care to Total Cure
                  </span>
                </div>

                <h1
                  className="text-white animate-fade-in-up delay-100"
                  style={{
                    fontFamily: "var(--font-manrope)",
                    fontSize: "clamp(32px, 5vw, 56px)",
                    fontWeight: 700,
                    lineHeight: 1.15,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Advancing Science,
                  <br />
                  <span className="text-(--color-secondary-container)">
                    Empowering Lives.
                  </span>
                </h1>

                <p
                  className="text-white/80 max-w-2xl animate-fade-in-up delay-200"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "18px",
                    lineHeight: 1.6,
                  }}
                >
                  Medileo Healthcare Pvt. Ltd. is an innovative, research-driven
                  pharmaceutical corporation dedicated to formulating premium
                  therapeutic drug classes. Our state-of-the-art manufacturing
                  facilities operate strictly under stringent WHO-GMP guidelines,
                  ensuring every batch meets rigorous international quality
                  benchmarks.
                </p>

                <div className="flex flex-wrap gap-4 mt-4 animate-fade-in-up delay-300">
                  <Link
                    href="/products"
                    id="hero-explore-btn"
                    className="bg-white text-(--color-navy-deep) font-bold px-8 py-4 rounded-lg hover:bg-(--color-surface-bright) transition-colors text-center shadow-lg active:scale-95"
                    style={{ fontFamily: "var(--font-jakarta)", fontSize: "14px", fontWeight: 600 }}
                  >
                    Explore Formulations
                  </Link>
                  <Link
                    href="/about"
                    id="hero-profile-btn"
                    className="border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors text-center active:scale-95"
                    style={{ fontFamily: "var(--font-jakarta)", fontSize: "14px", fontWeight: 600 }}
                  >
                    Corporate Profile
                  </Link>
                </div>
              </div>

              {/* Right – HQ Card */}
              <div className="col-span-1 lg:col-span-5 flex justify-end animate-fade-in-up delay-400">
                <div className="glass-card rounded-xl p-8 max-w-md w-full shadow-[0_20px_40px_rgba(0,0,0,0.2)]">
                  <div className="flex items-start gap-4">
                    <div className="bg-(--color-status-success) w-16 h-16 rounded-xl flex items-center justify-center shrink-0">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="white"
                        aria-hidden="true"
                      >
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                    </div>
                    <div>
                      <h3
                        className="text-white mb-2 font-bold uppercase tracking-wide"
                        style={{ fontFamily: "var(--font-manrope)", fontSize: "16px" }}
                      >
                        Global Headquarters
                      </h3>
                      <p className="text-white/80" style={{ fontFamily: "var(--font-inter)", fontSize: "16px", lineHeight: 1.6 }}>
                        Build TR(A), 2nd Floor, Mhada Colony,
                        <br />
                        Mumbai, Maharashtra, India – 400075
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Stats Bar ─── */}
        <section className="-mt-16 relative z-20 px-6">
          <div className="max-w-[1280px] mx-auto bg-white rounded-xl shadow-[0_10px_40px_rgba(0,21,43,0.08)] py-12 px-8 flex flex-wrap justify-between items-center gap-8">
            {stats.map((s, i) => (
              <div key={i} className="flex-1 min-w-[140px] flex flex-col items-center group">
                <div
                  className="text-(--color-navy-deep) font-bold flex items-baseline gap-1 group-hover:scale-105 transition-transform duration-300"
                  style={{ fontFamily: "var(--font-manrope)", fontSize: "48px", lineHeight: 1.2 }}
                >
                  {s.value.replace("+", "").replace("%", "")}
                  {s.value.endsWith("+") && (
                    <span className="text-(--color-status-success)">+</span>
                  )}
                  {s.value.endsWith("%") && (
                    <span className="text-(--color-status-success)">%</span>
                  )}
                </div>
                <div
                  className="text-(--color-on-surface-variant) mt-2 tracking-widest uppercase text-center"
                  style={{ fontFamily: "var(--font-jakarta)", fontSize: "12px", fontWeight: 700 }}
                >
                  {s.label}
                </div>
                {i < stats.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-(--color-surface-variant)" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ─── Therapeutic Focus ─── */}
        <ScrollRevealWrapper>
          <section className="py-20 px-6 max-w-[1280px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 reveal-item">
              <div className="max-w-3xl">
                <h2
                  className="text-(--color-navy-deep) mb-4"
                  style={{
                    fontFamily: "var(--font-manrope)",
                    fontSize: "clamp(28px, 4vw, 40px)",
                    fontWeight: 700,
                  }}
                >
                  Core Therapeutic Focus
                </h2>
                <p className="text-(--color-on-surface-variant)" style={{ fontFamily: "var(--font-inter)", fontSize: "16px", lineHeight: 1.6 }}>
                  Delivering highly effective molecular formulas to critical
                  hospital departments. Each molecule undergoes rigorous
                  multi-stage laboratory checks before reaching pharmacy shelves.
                </p>
              </div>
              <Link
                href="/products"
                id="view-catalog-btn"
                className="inline-flex items-center gap-2 border border-(--color-outline) bg-white px-6 py-3 rounded-full text-(--color-secondary) hover:bg-(--color-surface-bright) transition-colors shrink-0 active:scale-95"
                style={{ fontFamily: "var(--font-jakarta)", fontSize: "14px", fontWeight: 600 }}
              >
                View Full Catalog →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {therapeuticAreas.map((area, i) => (
                <Link
                  key={i}
                  href="/products"
                  className={`bg-white rounded-2xl p-8 shadow-[0_10px_30px_rgba(0,21,43,0.05)] hover:shadow-[0_15px_40px_rgba(0,21,43,0.15)] hover:-translate-y-2 transition-all duration-300 text-center flex flex-col items-center group reveal-item delay-${(i + 1) * 100}`}
                  id={`therapeutic-card-${i}`}
                >
                  <div className="emoji-container group-hover:scale-110 transition-transform duration-300">
                    <span aria-hidden="true">{area.emoji}</span>
                  </div>
                  <h3
                    className="text-(--color-navy-deep) mb-2"
                    style={{ fontFamily: "var(--font-manrope)", fontSize: "24px", fontWeight: 600 }}
                  >
                    {area.title}
                  </h3>
                  <p className="text-(--color-on-surface-variant)" style={{ fontFamily: "var(--font-inter)", fontSize: "14px" }}>
                    {area.subtitle}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        </ScrollRevealWrapper>

        {/* ─── CTA Banner ─── */}
        <section className="bg-(--color-navy-deep) py-20 px-6">
          <div className="max-w-[1280px] mx-auto text-center flex flex-col items-center gap-6">
            <span
              className="bg-(--color-status-success)/20 text-(--color-status-success) px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Institutional Supply & Procurement
            </span>
            <h2
              className="text-white max-w-2xl"
              style={{
                fontFamily: "var(--font-manrope)",
                fontSize: "clamp(24px, 3.5vw, 40px)",
                fontWeight: 700,
                lineHeight: 1.2,
              }}
            >
              Partner with us for premium pharmaceutical solutions
            </h2>
            <p className="text-white/70 max-w-xl" style={{ fontFamily: "var(--font-inter)", fontSize: "16px", lineHeight: 1.6 }}>
              Building a healthier future through high-performance pharmaceutical
              solutions, ethical corporate leadership, and rigorous scientific
              validation protocols.
            </p>
            <Link
              href="/contact"
              id="cta-contact-btn"
              className="bg-(--color-status-success) text-white font-bold px-10 py-4 rounded-lg hover:opacity-90 transition-opacity shadow-lg active:scale-95 mt-2"
              style={{ fontFamily: "var(--font-jakarta)", fontSize: "14px", fontWeight: 600 }}
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
