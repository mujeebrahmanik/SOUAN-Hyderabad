import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Souan Luxury Spa — Sun City, Hyderabad",
  description:
    "An oasis of tranquillity in Sun City, Hyderabad. Souan Luxury Spa offers a curated selection of opulent treatments that blend ancient traditions with contemporary techniques.",
  openGraph: {
    title: "Souan Luxury Spa — Sun City, Hyderabad",
    description:
      "Tranquility. Tradition. Transformation. Discover a sanctuary of wellness at Souan Luxury Spa, Sun City.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${roboto.variable}`}>
      <body className="bg-cream text-cocoa-deep antialiased">{children}</body>
    </html>
  );
}
