"use client";

import { motion } from "framer-motion";
import { PHONE_HREF, WHATSAPP_HREF } from "@/lib/navigation";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=2400&q=85";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[90vh] flex-col overflow-hidden bg-cocoa-deep text-ivory"
    >
      {/* Image + layered gradients — image breathes on the right */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-[center_38%] opacity-[0.6]"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        aria-hidden
      />
      {/* Gentle flat overlay — just enough for text contrast */}
      <div
        className="absolute inset-0 -z-10 bg-cocoa-deep/25"
        aria-hidden
      />
      {/* Horizontal shaping — deeper on the content side, lighter toward the image */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-cocoa-deep/70 via-cocoa-deep/35 to-cocoa-deep/10"
        aria-hidden
      />
      {/* Vertical vignette — anchor top and bottom */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-cocoa-deep/40 via-transparent to-cocoa-deep/70"
        aria-hidden
      />

      <div className="relative mx-auto flex w-full max-w-[1400px] flex-1 flex-col px-6 pb-16 pt-[148px] md:px-10 md:pb-20 md:pt-[184px]">
        {/* Primary — eyebrow, headline, description */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[960px]"
        >
          <p className="text-[10.5px] uppercase tracking-[0.42em] text-champagne/85">
            Sun City · Est. in wellness
          </p>

          <h1 className="mt-10 font-display text-[clamp(2.6rem,7.2vw,6.2rem)] font-light leading-[1.02] tracking-[-0.03em]">
            A quiet pause,
            <br />
            thoughtfully{" "}
            <span className="serif text-champagne">composed.</span>
          </h1>

          <p className="mt-8 max-w-xl text-[15px] leading-[1.75] text-ivory/70 md:text-[16px]">
            Hyderabad's most considered spa experience — full-body massages,
            deep tissue, aromatherapy and signature rituals, booked in minutes
            with up to 30% off across all services.
          </p>
        </motion.div>

        {/* Editorial pause — pushes the base row to the bottom of the hero */}
        <div className="flex-1" />

        {/* Base — info row + CTAs anchored to the bottom of the composition */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 md:mt-28"
        >
          <div className="grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-12 md:items-end">
            <dl className="grid grid-cols-1 border-t border-ivory/15 pt-6 sm:grid-cols-3 sm:divide-x sm:divide-ivory/15 sm:border-0 sm:pt-0 md:col-span-7">
              <InfoItem label="Open daily" value="09:00 — 22:00" />
              <InfoItem label="Location" value="Sun City · Hyd." pad />
              <InfoItem label="Best for" value="Instant phone bookings" pad />
            </dl>

            <div className="flex flex-wrap items-center gap-4 md:col-span-5 md:justify-end">
              <a href={PHONE_HREF} className="btn-cta">
                Call for a slot
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp !border-ivory/35 !text-ivory hover:!text-cocoa-deep hover:!bg-ivory hover:!border-ivory"
              >
                <span className="wa-dot" /> WhatsApp
              </a>
            </div>
          </div>

          <p className="mt-14 hidden items-center gap-5 text-[11px] uppercase tracking-[0.35em] text-ivory/40 md:flex">
            <span>Scroll</span>
            <span className="h-px flex-1 bg-ivory/15" />
            <span className="index-num">01 / 06</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function InfoItem({
  label,
  value,
  pad,
}: {
  label: string;
  value: string;
  pad?: boolean;
}) {
  return (
    <div className={`${pad ? "sm:pl-5" : ""} sm:pr-5`}>
      <p className="text-[9.5px] uppercase tracking-[0.3em] text-ivory/45">
        {label}
      </p>
      <p className="mt-2 font-display text-sm font-light text-ivory">{value}</p>
    </div>
  );
}
