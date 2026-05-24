import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-(--color-navy-deep) text-white w-full mt-auto border-t-4 border-(--color-status-success)">
      <div className="max-w-[1280px] mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left – brand + address */}
        <div className="flex flex-col gap-3">
          <span
            className="font-bold tracking-tight text-white"
            style={{ fontFamily: "var(--font-manrope)", fontSize: "20px" }}
          >
            MEDILEO HEALTHCARE
          </span>
          <p
            className="text-white/60 text-sm leading-relaxed"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Build TR(A), 2nd Floor, Mhada Colony,
            <br />
            Mumbai, Maharashtra, India – 400075
          </p>
          <a
            href="mailto:medileohealthcare@gmail.com"
            className="text-(--color-status-success) text-sm hover:underline"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            medileohealthcare@gmail.com
          </a>
        </div>

        {/* Centre – quick links */}
        <nav
          className="flex flex-wrap justify-center gap-6"
          aria-label="Footer navigation"
        >
          {[
            { label: "Home", href: "/" },
            { label: "About Us", href: "/about" },
            { label: "Products", href: "/products" },
            { label: "Contact", href: "/contact" },
          ].map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="text-white/60 hover:text-(--color-status-success) transition-colors text-sm"
              style={{ fontFamily: "var(--font-jakarta)", fontWeight: 600 }}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Right – badge */}
        <div className="flex flex-col items-center gap-2">
          <span
            className="bg-(--color-status-success) text-white px-4 py-1.5 rounded-full font-bold text-xs tracking-widest uppercase"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            WHO-GMP CERTIFIED
          </span>
          <p
            className="text-white/40 text-xs tracking-widest uppercase text-center"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Designed with Scientific Compliance
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-4 text-center px-6">
        <p
          className="text-white/40 text-xs tracking-widest uppercase"
          style={{ fontFamily: "var(--font-jakarta)" }}
        >
          © {new Date().getFullYear()} Medileo Healthcare Pvt. Ltd. All Global
          Corporate Rights Strictly Reserved.
        </p>
      </div>
    </footer>
  );
}
