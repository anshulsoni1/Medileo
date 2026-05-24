import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Therapeutic Portfolio – Formulations & Pipeline",
  description:
    "Browse Medileo Healthcare's full therapeutic portfolio covering Diabetology, Cardiology, Neurology, Gastroenterology and more.",
};

const products = [
  {
    category: "Diabetic Neuropathy",
    name: "BENFOSUN",
    composition:
      "Benfotiamine 150 Mg + Methylcobalamin IP 1500 Mcg + Alpha Lipoic Acid",
    description:
      "Advanced neuro-protective formula to repair myelin sheath damage.",
  },
  {
    category: "Advanced Cellular Nutrition",
    name: "LEOTOTAL",
    composition:
      "Extracts Of Ginkgo, Ginseng, Green Tea And Grape Seed | Omega-3",
    description:
      "Synergistic premium cell vitaliser targeting systemic inflammation.",
  },
  {
    category: "GERD, Dyspepsia, Gastritis",
    name: "WIN-DSR",
    composition:
      "Rabeprazole Sodium IP 20 Mg (EC) + Domperidone IP 30 Mg (SR)",
    description:
      "Provides dual-action rapid symptomatic relief via instant and sustained release.",
  },
  {
    category: "Neuropathy, Neuralgia",
    name: "NEX-MNT",
    composition:
      "Pregabalin IP 75 Mg (SR) + Nortriptyline Hydrochloride IP 10 Mg",
    description:
      "Multi-mechanism neuro-modulator that suppresses excessive pain transmission.",
  },
  {
    category: "Vitamin Deficiency (Sugar Free)",
    name: "D3 XING",
    composition: "Cholecalciferol (Vitamin D3) 60000 IU In Nano Droplet",
    description:
      "Advanced Nano Droplet design ensures maximum systemic bio-absorption.",
  },
  {
    category: "Type-2 Diabetes Management",
    name: "Gemileo-M1/M2",
    composition:
      "Metformin Hydrochloride IP 500 Mg + Glimepiride IP 1 Mg / 2 Mg",
    description:
      "Gold-standard rational clinical combination for stable plasma glucose.",
  },
  {
    category: "Migraine Prophylaxis",
    name: "BETAROOT PLUS",
    composition:
      "Flunarizine Dihydrochloride IP 10 Mg + Propranolol HCl IP 40 Mg (SR)",
    description:
      "Synchronised dual pathway blocker to reduce severe migraine attacks.",
  },
  {
    category: "Hypertension Management",
    name: "Leosart Series",
    composition: "Telmisartan combinations (CC, CL, AM)",
    description:
      "Engineered with premium Micronised Technology for smooth pressure drops.",
  },
  {
    category: "Low-Back Pain & Bone Density",
    name: "MEDCIUM / XT",
    composition: "Calcium Citrate 1000mg + D3 200IU + Mg + Zinc",
    description:
      "Safely controls harmful hyperhomocysteinaemia risk while restoring bone density.",
  },
];

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main>
        {/* ─── Hero ─── */}
        <section className="hero-gradient-products text-white pt-24 pb-32 px-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 dot-grid-bg opacity-10 pointer-events-none" aria-hidden="true" />
          <div className="max-w-[1280px] mx-auto relative z-10">
            <h1
              className="text-white mb-4"
              style={{
                fontFamily: "var(--font-manrope)",
                fontSize: "clamp(36px, 6vw, 64px)",
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
              }}
            >
              Therapeutic Portfolio
            </h1>
            <div className="inline-block border border-white/30 rounded-full px-6 py-2 text-sm font-bold tracking-widest uppercase bg-white/10 backdrop-blur-sm">
              <span style={{ fontFamily: "var(--font-jakarta)" }}>
                Formulations &amp; Pipeline
              </span>
            </div>
          </div>
        </section>

        {/* ─── Search Bar ─── */}
        <section className="max-w-[1280px] mx-auto px-6 -mt-16 relative z-20 mb-16">
          <div className="bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,21,43,0.05)] p-6 md:p-8 flex items-center justify-center">
            <div className="w-full max-w-3xl relative">
              <input
                id="product-search"
                type="text"
                placeholder="Search formulations, indications, or compositions…"
                className="w-full bg-(--color-surface-container-low) border border-(--color-surface-variant) rounded-xl py-4 pl-5 pr-12 text-(--color-on-surface) focus:outline-none focus:ring-2 focus:ring-(--color-status-success) focus:border-transparent transition-all placeholder:text-(--color-outline)/70 shadow-inner"
                style={{ fontFamily: "var(--font-inter)", fontSize: "16px" }}
              />
              <span
                className="absolute right-4 top-1/2 -translate-y-1/2 text-(--color-outline)"
                aria-hidden="true"
              >
                🔍
              </span>
            </div>
          </div>
        </section>

        {/* ─── Products Grid ─── */}
        <section className="max-w-[1280px] mx-auto px-6 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((p, i) => (
              <article
                key={i}
                id={`product-${p.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                className="bg-white rounded-2xl p-8 shadow-[0_10px_30px_rgba(0,21,43,0.05)] border border-(--color-surface-variant) hover:shadow-[0_15px_40px_rgba(0,21,43,0.12)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
              >
                {/* watermark */}
                <div
                  className="absolute top-6 right-6 opacity-10 text-6xl font-serif italic pointer-events-none group-hover:opacity-20 transition-opacity select-none"
                  aria-hidden="true"
                >
                  Rx
                </div>

                <div
                  className="text-(--color-status-success) mb-3 font-bold tracking-widest uppercase"
                  style={{ fontFamily: "var(--font-jakarta)", fontSize: "12px" }}
                >
                  {p.category}
                </div>

                <h2
                  className="text-(--color-navy-deep) mb-6"
                  style={{ fontFamily: "var(--font-manrope)", fontSize: "24px", fontWeight: 600 }}
                >
                  {p.name}
                </h2>

                <div className="bg-(--color-surface-container-low) rounded-lg p-4 mb-6 border-l-4 border-(--color-navy-deep)">
                  <p
                    className="text-(--color-on-surface) font-semibold leading-snug"
                    style={{ fontFamily: "var(--font-inter)", fontSize: "14px" }}
                  >
                    {p.composition}
                  </p>
                </div>

                <p
                  className="text-(--color-on-surface-variant) leading-relaxed"
                  style={{ fontFamily: "var(--font-inter)", fontSize: "15px", lineHeight: 1.6 }}
                >
                  {p.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* ─── Disclaimer ─── */}
        <section className="px-6 pb-20">
          <div className="max-w-4xl mx-auto bg-(--color-surface-container-lowest) border border-(--color-outline-variant) border-dashed rounded-xl p-8 text-center shadow-sm">
            <h3
              className="text-(--color-error) mb-4 tracking-widest uppercase font-bold"
              style={{ fontFamily: "var(--font-jakarta)", fontSize: "12px" }}
            >
              Critical Notice for All Visitors
            </h3>
            <p className="text-(--color-on-surface-variant) leading-relaxed" style={{ fontFamily: "var(--font-inter)", fontSize: "16px", lineHeight: 1.6 }}>
              The primary data listed on this domain regarding clinical molecules
              or descriptive chemical layouts is organised exclusively for
              educational reference. It is strictly meant{" "}
              <strong className="text-(--color-on-surface)">
                For the Use of a Registered Medical Practitioner or a Hospital
                or a Laboratory Only
              </strong>
              . It should under no circumstance be utilised to execute home
              self-treatment or substitute official specialist medical guidance.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
