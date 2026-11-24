import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "./globals.css";
import Script from "next/script";

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
  title: "Best Luxury Spa in Suncity, Hyderabad | Up to 30% Off | Souan",
  description:
    "Book a full-body massage, deep tissue or aromatherapy session at Souan Luxury Spa, Suncity. Up to 30% off. Same-day slots. Call 080194 74555.",
  openGraph: {
    title: "Best Luxury Spa in Suncity, Hyderabad | Up to 30% Off | Souan",
    description:
      "Book a full-body massage, deep tissue or aromatherapy session at Souan Luxury Spa, Suncity. Up to 30% off. Same-day slots. Call 080194 74555.",
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
      <body className="bg-cream text-cocoa-deep antialiased">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-11289675218"
          strategy="afterInteractive"
        />
        <Script id="google-ads-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11289675218');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
