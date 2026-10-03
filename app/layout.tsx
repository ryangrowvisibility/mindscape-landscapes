import type { Metadata } from "next";
import { Merriweather, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const merriweather = Merriweather({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["700", "900"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mindscape Landscapes | Landscaping & Lawn Care in Oakville, Mississauga & Milton",
  description:
    "Registered and insured landscaper in Oakville. Weekly lawn care, seasonal clean-ups, garden reshaping and sod, backyard installs and interlock repair. 5.0 from 30 Google reviews. Call Peter at (647) 984-3031.",
  openGraph: {
    title: "Mindscape Landscapes | Oakville Landscaping & Lawn Care",
    description:
      "Honest, detail-driven landscaping for Oakville, Mississauga and Milton. 5.0 stars from 30 Google reviews. Call (647) 984-3031.",
    type: "website",
    locale: "en_CA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-CA" className={`${merriweather.variable} ${sourceSans.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
