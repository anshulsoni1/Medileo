import type { Metadata } from "next";
import { Manrope, Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Medileo Healthcare - Advancing Science, Empowering Lives",
    template: "%s | Medileo Healthcare",
  },
  description:
    "Medileo Healthcare Pvt. Ltd. is an innovative, research-driven pharmaceutical corporation dedicated to formulating premium therapeutic drug classes. WHO-GMP certified.",
  keywords: [
    "Medileo Healthcare",
    "pharmaceutical",
    "WHO-GMP certified",
    "drug formulations",
    "diabetes",
    "cardiology",
    "neurology",
  ],
  metadataBase: new URL("https://medileo.in"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} ${plusJakartaSans.variable} scroll-smooth overflow-x-hidden`}
    >
      <body className="min-h-screen flex flex-col bg-(--color-background) text-(--color-on-surface) antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
