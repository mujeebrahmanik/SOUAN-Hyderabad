"use client";

export default function Footer() {
  return (
    <footer className="bg-cocoa-deep text-ivory/70">
      <div className="mx-auto max-w-[1400px] px-5 py-6 md:px-8">
        <div className="flex flex-col items-center justify-between gap-2 text-center text-[12px] md:flex-row md:text-left">
          <p>
            © {new Date().getFullYear()} Souan Luxury Spa — Sun City, Hyderabad.
            All rights reserved.
          </p>
          <p className="font-display uppercase tracking-[0.25em] text-champagne/80">
            Luxury Spa in Hyderabad
          </p>
        </div>
      </div>
    </footer>
  );
}
