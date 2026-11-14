"use client";

import { Navigation, Phone } from "lucide-react";
import Reveal from "./Reveal";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/navigation";

const ADDRESS =
  "Vantage Line Mall, 4th Floor, Sai Baba Nagar, Bandlaguda Jagir, Peeramcheru, Hyderabad, Telangana 500091";
const MAPS_DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  "Souan Luxury Spa Sun City, " + ADDRESS,
)}`;
const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  "Souan Luxury Spa Sun City, " + ADDRESS,
)}&output=embed`;

const STEPS = [
  {
    k: "Arrive",
    d: "Easy ground-floor entry and lift access to the 4th floor, Vantage Line Mall.",
  },
  {
    k: "Settle",
    d: "A warm welcome and a quiet moment to breathe before your therapist meets you.",
  },
  {
    k: "Choose",
    d: "A short consultation to align the ritual to what your body needs today.",
  },
  {
    k: "Unwind",
    d: "From deep tissue to aromatherapy and jacuzzi — your chosen session, uninterrupted.",
  },
];

export default function Location() {
  return (
    <section id="visit" className="relative bg-cream">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        {/* Top header — intentionally narrow, centered-left */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <p className="eyebrow">05 / Visit us</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.4rem)] font-light leading-[1.02] tracking-[-0.02em]">
                Conveniently placed,
                <br />
                <span className="serif text-burgundy">
                  quietly out of reach.
                </span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.12} className="md:col-span-5 md:col-start-8 md:self-end">
            <p className="text-[14.5px] leading-relaxed text-cocoa-deep/70">
              Centrally located in Sun City with easy access from across
              Hyderabad — a city spa with the feel of a quiet retreat.
            </p>
          </Reveal>
        </div>

        {/* Map-dominant layout: larger map + inset sidebar that reads together */}
        <Reveal delay={0.1}>
          <div className="relative mt-16 grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-0">
            <div className="relative md:col-span-7 lg:col-span-8">
              <iframe
                title="Souan Luxury Spa — Sun City location"
                src={MAPS_EMBED}
                className="h-[420px] w-full grayscale md:h-[540px] lg:h-[580px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <aside className="relative bg-cocoa-deep p-8 text-ivory md:col-span-5 md:-ml-10 md:mt-20 md:self-start md:p-10 lg:col-span-4 lg:-ml-14 lg:mt-24">
              <p className="eyebrow !text-champagne !opacity-80">
                Souan — Sun City
              </p>
              <h3 className="mt-4 font-display text-[1.45rem] font-light leading-[1.2] lg:text-[1.6rem]">
                Vantage Line Mall,
                <br />
                4th Floor.
              </h3>
              <p className="mt-4 max-w-[36ch] text-[13.5px] leading-[1.7] text-ivory/70">
                Sai Baba Nagar, Bandlaguda Jagir, Peeramcheru, Hyderabad,
                Telangana 500091.
              </p>

              <dl className="mt-8 space-y-4 border-t border-ivory/15 pt-6 text-[13px]">
                <div className="flex items-baseline justify-between gap-6">
                  <dt className="text-ivory/50">Open</dt>
                  <dd className="font-display text-ivory">
                    09:00 — 22:00 daily
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-6">
                  <dt className="text-ivory/50">Phone</dt>
                  <dd>
                    <a
                      href={PHONE_HREF}
                      className="font-display text-ivory hover:text-champagne"
                    >
                      {PHONE_DISPLAY}
                    </a>
                  </dd>
                </div>
              </dl>

              <div className="mt-8 flex flex-col gap-3">
                <a
                  href={MAPS_DIRECTIONS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta w-full"
                >
                  <Navigation size={14} /> Directions
                </a>
                <a
                  href={PHONE_HREF}
                  className="btn-whatsapp !border-ivory/30 w-full !text-ivory hover:!bg-ivory hover:!text-cocoa-deep hover:!border-ivory"
                >
                  <Phone size={14} /> Call to reserve
                </a>
              </div>
            </aside>
          </div>
        </Reveal>

        {/* Steps — horizontal editorial strip, not a stacked card list */}
        {/* <div className="mt-24 border-t border-cocoa-deep/15 pt-14">
          <div className="mb-10 flex items-end justify-between gap-6">
            <Reveal>
              <h3 className="max-w-md font-display text-[1.4rem] font-light leading-snug tracking-[-0.01em] md:text-[1.7rem]">
                Your visit, in four quiet{" "}
                <span className="serif text-burgundy">movements.</span>
              </h3>
            </Reveal>
            <Reveal delay={0.08}>
              <span className="hidden font-display text-[11px] uppercase tracking-[0.3em] text-cocoa-deep/45 md:inline">
                01 · 02 · 03 · 04
              </span>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <Reveal key={s.k} delay={i * 0.06}>
                <div className="border-t border-cocoa-deep/15 pt-4">
                  <p className="index-num text-[10.5px] text-cocoa-deep/40">
                    0{i + 1}
                  </p>
                  <p className="mt-3 font-display text-[1.05rem] font-normal text-cocoa-deep">
                    {s.k}
                  </p>
                  <p className="mt-2 text-[13px] leading-relaxed text-cocoa-deep/65">
                    {s.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
