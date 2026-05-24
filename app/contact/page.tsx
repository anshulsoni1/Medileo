import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Contact – Corporate Communications",
  description:
    "Get in touch with Medileo Healthcare for institutional supply, procurement inquiries, or corporate communications.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* ─── Hero ─── */}
        <section className="hero-gradient-lr text-white pt-24 pb-48 px-6 relative overflow-hidden">
          <div className="absolute inset-0 dot-grid-bg opacity-10 pointer-events-none" aria-hidden="true" />
          <div className="max-w-[768px] mx-auto text-center relative z-10 flex flex-col items-center gap-4">
            <h1
              className="text-white"
              style={{
                fontFamily: "var(--font-manrope)",
                fontSize: "clamp(32px, 5vw, 56px)",
                fontWeight: 700,
                lineHeight: 1.15,
              }}
            >
              Corporate Communications
            </h1>
            <div className="inline-block border border-(--color-secondary-container)/30 bg-(--color-primary-container)/20 backdrop-blur-sm rounded-full px-6 py-2">
              <span
                className="text-(--color-secondary-container) tracking-widest text-xs font-bold uppercase"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Institutional Supply &amp; Procurement
              </span>
            </div>
            <p
              className="text-white/80 max-w-2xl"
              style={{ fontFamily: "var(--font-inter)", fontSize: "18px", lineHeight: 1.6 }}
            >
              Building a healthier future through high-performance pharmaceutical
              solutions, ethical corporate leadership, and rigorous scientific
              validation protocols.
            </p>
          </div>
        </section>

        {/* ─── Contact Cards Section (overlapping hero) ─── */}
        <section className="px-6 relative -mt-32 pb-20">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              {/* Left – info cards */}
              <div className="md:col-span-5 space-y-6">
                {/* Office Card */}
                <div className="glass-panel rounded-xl p-8 shadow-[0px_10px_30px_rgba(0,21,43,0.05)] border-l-4 border-(--color-navy-deep) hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-12 h-12 bg-(--color-surface-container) rounded-full flex items-center justify-center mb-6 text-xl">
                    🏢
                  </div>
                  <h3
                    className="text-(--color-navy-deep) mb-3 uppercase font-bold"
                    style={{ fontFamily: "var(--font-jakarta)", fontSize: "12px", letterSpacing: "0.1em" }}
                  >
                    Registered Corporate Office
                  </h3>
                  <address
                    className="not-italic text-(--color-on-surface-variant) leading-relaxed"
                    style={{ fontFamily: "var(--font-inter)", fontSize: "16px", lineHeight: 1.6 }}
                  >
                    Medileo Healthcare Pvt. Ltd.
                    <br />
                    Build TR(A), 2nd Floor, Mhada Colony,
                    <br />
                    Mumbai, Maharashtra, India – 400075
                  </address>
                </div>

                {/* Email Card */}
                <div className="glass-panel rounded-xl p-8 shadow-[0px_10px_30px_rgba(0,21,43,0.05)] border-l-4 border-(--color-status-success) hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-12 h-12 bg-(--color-surface-container) rounded-full flex items-center justify-center mb-6 text-xl">
                    ✉️
                  </div>
                  <h3
                    className="text-(--color-navy-deep) mb-3 uppercase font-bold"
                    style={{ fontFamily: "var(--font-jakarta)", fontSize: "12px", letterSpacing: "0.1em" }}
                  >
                    Official Mailroom
                  </h3>
                  <a
                    href="mailto:medileohealthcare@gmail.com"
                    id="contact-email-link"
                    className="text-(--color-status-success) hover:text-(--color-secondary) transition-colors"
                    style={{ fontFamily: "var(--font-manrope)", fontSize: "20px", fontWeight: 600 }}
                  >
                    medileohealthcare@gmail.com
                  </a>
                </div>
              </div>

              {/* Right – Inquiry Form */}
              <div className="md:col-span-7">
                <div className="glass-panel rounded-xl p-8 shadow-[0px_10px_30px_rgba(0,21,43,0.05)] h-full">
                  <h2
                    className="text-(--color-navy-deep) mb-8"
                    style={{ fontFamily: "var(--font-manrope)", fontSize: "32px", fontWeight: 600, lineHeight: 1.3 }}
                  >
                    Send an Inquiry
                  </h2>

                  <form
                    className="space-y-6"
                    action="mailto:medileohealthcare@gmail.com"
                    method="post"
                    encType="text/plain"
                    aria-label="Inquiry form"
                  >
                    <div>
                      <label
                        htmlFor="institution-name"
                        className="block text-(--color-on-surface-variant) mb-2 uppercase font-bold tracking-widest"
                        style={{ fontFamily: "var(--font-jakarta)", fontSize: "12px" }}
                      >
                        Institution Name
                      </label>
                      <input
                        id="institution-name"
                        name="institution"
                        type="text"
                        required
                        className="w-full bg-(--color-surface-container-low) border border-(--color-outline-variant) rounded-lg px-4 py-3 text-(--color-on-surface) focus:outline-none focus:border-(--color-status-success) focus:ring-1 focus:ring-(--color-status-success) transition-colors"
                        style={{ fontFamily: "var(--font-inter)", fontSize: "16px" }}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-(--color-on-surface-variant) mb-2 uppercase font-bold tracking-widest"
                        style={{ fontFamily: "var(--font-jakarta)", fontSize: "12px" }}
                      >
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        className="w-full bg-(--color-surface-container-low) border border-(--color-outline-variant) rounded-lg px-4 py-3 text-(--color-on-surface) focus:outline-none focus:border-(--color-status-success) focus:ring-1 focus:ring-(--color-status-success) transition-colors"
                        style={{ fontFamily: "var(--font-inter)", fontSize: "16px" }}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="inquiry-details"
                        className="block text-(--color-on-surface-variant) mb-2 uppercase font-bold tracking-widest"
                        style={{ fontFamily: "var(--font-jakarta)", fontSize: "12px" }}
                      >
                        Inquiry Details
                      </label>
                      <textarea
                        id="inquiry-details"
                        name="inquiry"
                        rows={4}
                        required
                        className="w-full bg-(--color-surface-container-low) border border-(--color-outline-variant) rounded-lg px-4 py-3 text-(--color-on-surface) focus:outline-none focus:border-(--color-status-success) focus:ring-1 focus:ring-(--color-status-success) transition-colors resize-none"
                        style={{ fontFamily: "var(--font-inter)", fontSize: "16px" }}
                      />
                    </div>

                    <button
                      id="submit-inquiry-btn"
                      type="submit"
                      className="w-full bg-(--color-navy-deep) text-white font-bold py-4 rounded-lg hover:bg-(--color-secondary) transition-colors duration-300 shadow-md active:scale-95"
                      style={{ fontFamily: "var(--font-jakarta)", fontSize: "14px", fontWeight: 600 }}
                    >
                      Submit Secure Inquiry
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Critical Notice ─── */}
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
