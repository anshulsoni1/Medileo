import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollRevealWrapper from "../components/ScrollRevealWrapper";

export const metadata: Metadata = {
  title: "About Us – Corporate Profile",
  description:
    "Learn about Medileo Healthcare's patient-centric innovation, core values of scientific rigour, absolute integrity, and visionary pharmaceutical pipeline.",
};

const coreValues = [
  {
    emoji: "🔬",
    title: "Scientific Rigour",
    body: "Every brand we bring to market is deeply backed by international clinical research papers, validating both safety parameters and outstanding efficacy profiles. We partner with leading medical institutions to monitor real-world performance.",
  },
  {
    emoji: "🛡️",
    title: "Absolute Integrity",
    body: "Operating with transparent ethical standards to build everlasting bonds with healthcare practitioners. Our manufacturing compliance protocols exceed standard regulatory requirements, guaranteeing maximum purity from sourcing to dispensing.",
  },
  {
    emoji: "🧬",
    title: "Visionary Pipeline",
    body: "Investing constantly into pharmaceutical formulation advances, looking ahead to shape next-generation molecule delivery structures for complicated disorders. Our R&D wing actively develops novel drug delivery systems tailored to improve patient compliance.",
  },
];

const rdPipeline = [
  "Molecular Stability Optimizations",
  "Bio-Equivalence Enhancements",
  "Advanced Controlled-Release Technology",
  "Targeted Therapeutic Pathways",
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="w-full">
        {/* ─── Hero ─── */}
        <section className="relative bg-gradient-to-b from-(--color-navy-deep) to-(--color-teal-vibrant) text-white py-36 overflow-hidden">
          <div className="absolute inset-0 dot-grid-bg opacity-10 pointer-events-none" aria-hidden="true" />
          <div className="max-w-[1280px] mx-auto w-full px-6 relative z-10 flex flex-col items-center justify-center text-center">
            <div className="max-w-4xl mx-auto flex flex-col items-center gap-4 animate-fade-in-up">
              <h1
                className="text-white drop-shadow-md"
                style={{
                  fontFamily: "var(--font-manrope)",
                  fontSize: "clamp(32px, 5vw, 56px)",
                  fontWeight: 700,
                  lineHeight: 1.15,
                }}
              >
                Corporate Profile
              </h1>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2">
                <span
                  className="text-(--color-secondary-fixed) tracking-widest text-xs font-bold uppercase"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Our Vision &amp; Legacy
                </span>
              </div>
              <p className="text-white/75 max-w-xl text-center"
                style={{ fontFamily: "var(--font-inter)", fontSize: "17px", lineHeight: 1.65 }}>
                A science-driven pharmaceutical company built on rigour,
                integrity, and a bold vision for the future of medicine.
              </p>
            </div>
          </div>
        </section>

        {/* ─── Main Content ─── */}
        <section className="bg-(--color-surface-container-low) py-20 relative -mt-24 z-20">
          <div className="max-w-[1280px] mx-auto w-full px-6">
            <div className="bg-white rounded-[32px] shadow-[0px_10px_40px_rgba(10,25,47,0.08)] p-6 md:p-10 lg:p-12">

              {/* Patient-Centric Innovation */}
              <ScrollRevealWrapper>
                <div className="reveal-item mb-24">
                  <div className="text-center max-w-3xl mx-auto mb-10">
                    <h2
                      className="text-(--color-navy-deep) mb-6"
                      style={{ fontFamily: "var(--font-manrope)", fontSize: "32px", fontWeight: 600, lineHeight: 1.3 }}
                    >
                      Patient-Centric Innovation
                    </h2>
                    <p className="text-(--color-on-surface-variant) leading-relaxed" style={{ fontFamily: "var(--font-inter)", fontSize: "16px", lineHeight: 1.6 }}>
                      At Medileo Healthcare Pvt. Ltd., we understand that the future
                      of medicine rests upon meticulous scientific research, absolute
                      purity, and unparalleled stability. We specialise in advanced
                      treatment portfolios spanning Diabetology, Cardiology,
                      Neurology, Gastroenterology, and Cellular Nutrition. Our
                      dedicated team of pharmacologists and quality assurance experts
                      work tirelessly to maintain an unblemished record of safety and
                      efficacy across all product lines.
                    </p>
                  </div>
                  <div className="relative bg-(--color-surface-bright) rounded-xl p-6 md:p-8 text-left border border-(--color-surface-variant) shadow-sm">
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-(--color-status-success) rounded-l-xl" />
                    <p className="text-(--color-on-surface-variant) leading-relaxed pl-4" style={{ fontFamily: "var(--font-inter)", fontSize: "16px", lineHeight: 1.6 }}>
                      By prioritising state-of-the-art manufacturing tech,
                      including{" "}
                      <strong className="text-(--color-navy-deep) font-medium">
                        Next-Gen Micronised Drug Delivery Technology
                      </strong>
                      , we ensure that every capsule and tablet provides optimal
                      therapeutic bio-availability and absolute clinical safety
                      that healthcare providers can trust completely.
                    </p>
                  </div>
                </div>

                {/* Core Values */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-24">
                  {coreValues.map((val, i) => (
                    <div
                      key={i}
                      className={`bg-white rounded-[12px] p-6 md:p-8 border border-(--color-surface-variant) shadow-[0px_8px_24px_rgba(10,25,47,0.04)] hover:shadow-[0px_12px_32px_rgba(0,168,150,0.1)] transition-all duration-300 flex flex-col items-center text-center group reveal-item card-hover delay-${(i + 1) * 100}`}
                      id={`core-value-${i}`}
                    >
                      <div className="w-14 h-14 bg-(--color-surface-container) rounded-full flex items-center justify-center mb-6 group-hover:bg-(--color-secondary)/10 transition-colors duration-300 text-2xl">
                        {val.emoji}
                      </div>
                      <h3
                        className="text-(--color-navy-deep) mb-3"
                        style={{ fontFamily: "var(--font-manrope)", fontSize: "20px", fontWeight: 600 }}
                      >
                        {val.title}
                      </h3>
                      <p className="text-(--color-on-surface-variant)" style={{ fontFamily: "var(--font-inter)", fontSize: "15px", lineHeight: "var(--line-height-relaxed)" }}>
                        {val.body}
                      </p>
                    </div>
                  ))}
                </div>
              </ScrollRevealWrapper>

              {/* Next-Gen Innovation Block */}
              <ScrollRevealWrapper>
                <div className="bg-(--color-navy-deep) rounded-[32px] p-6 md:p-10 lg:p-12 text-white relative overflow-hidden shadow-xl reveal-item">
                  {/* decorative blobs */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-(--color-secondary) opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" aria-hidden="true" />
                  <div className="absolute bottom-0 left-0 w-96 h-96 bg-(--color-teal-vibrant) opacity-5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" aria-hidden="true" />

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 relative z-10">
                    {/* Left */}
                    <div>
                      <div className="inline-block bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
                        <span
                          className="text-[10px] text-(--color-secondary-fixed) tracking-widest uppercase font-bold"
                          style={{ fontFamily: "var(--font-jakarta)" }}
                        >
                          The Future Landscape
                        </span>
                      </div>
                      <h2
                        className="text-white font-bold mb-6 leading-tight"
                        style={{ fontFamily: "var(--font-manrope)", fontSize: "32px", fontWeight: 700 }}
                      >
                        Pioneering Next-Generation Innovation
                      </h2>
                      <p className="text-white/80 mb-6 leading-relaxed" style={{ fontFamily: "var(--font-inter)", fontSize: "16px", lineHeight: 1.6 }}>
                        Medileo Healthcare Pvt. Ltd. is heavily committed to
                        introducing forward-looking therapeutic solutions to fulfil
                        unmet modern healthcare demands. Our long-term corporate
                        vision encompasses setting up specialised research labs
                        focusing on modern bio-equivalent drug modifications and
                        complex multi-layer tablet tracking techniques.
                      </p>
                      <p className="text-white/80 leading-relaxed" style={{ fontFamily: "var(--font-inter)", fontSize: "16px", lineHeight: 1.6 }}>
                        We continually engage with top global clinical researchers
                        to establish robust pharmaceutical platforms, ensuring
                        maximum corporate scaling alongside deep respect for
                        clinical compliance guidelines.
                      </p>
                    </div>

                    {/* Right – R&D Pipeline card */}
                    <div className="flex items-center justify-center">
                      <div className="bg-(--color-primary-container) border border-white/10 rounded-[12px] p-6 md:p-8 w-full shadow-2xl backdrop-blur-sm">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-(--color-status-success) rounded-lg flex items-center justify-center text-2xl shadow-lg">
                            🔬
                          </div>
                          <h4
                            className="font-bold text-white"
                            style={{ fontFamily: "var(--font-manrope)", fontSize: "22px" }}
                          >
                            Medileo R&amp;D Pipeline
                          </h4>
                        </div>
                        <ul className="space-y-3">
                          {rdPipeline.map((item, i) => (
                            <li key={i} className="reveal-item flex items-start gap-3" style={{ transitionDelay: `${i * 80}ms` }}>
                              <span className="w-1.5 h-1.5 rounded-full bg-(--color-secondary-fixed) mt-2.5 flex-shrink-0" />
                              <span className="text-white/90" style={{ fontFamily: "var(--font-inter)", fontSize: "16px" }}>
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollRevealWrapper>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
