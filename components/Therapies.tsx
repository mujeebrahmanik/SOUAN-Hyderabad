"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { popularTherapies } from "@/lib/treatments";
import { PHONE_HREF } from "@/lib/navigation";

export default function Therapies() {
  return (
    <section id="therapies" className="relative bg-cream">
      <div className="mx-auto max-w-[1320px] px-6 py-24 md:px-10 md:py-32">
        {/* Section header */}
        <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal>
              <p className="eyebrow">03 / Popular therapies</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 max-w-[18ch] font-display text-[clamp(2rem,4.2vw,3.4rem)] font-light leading-[1.05] tracking-[-0.02em]">
                Hyderabad's full range of massage therapies —{" "}
                <span className="serif text-burgundy">under one roof.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.14} className="md:col-span-4 md:col-start-9">
            <p className="text-[14px] leading-relaxed text-cocoa-deep/65">
              Six of our most-booked rituals. Every treatment is available at up
              to 30% off, with same-day slots open across the week.
            </p>
          </Reveal>
        </div>

        {/* Clean 3-col grid: 1 / 2 / 3 */}
        <div className="mt-20 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-20">
          {popularTherapies.map((t, i) => (
            <Reveal key={t.slug} delay={(i % 3) * 0.06}>
              <article className="group">
                <a href={PHONE_HREF} className="block">
                  <div className="relative aspect-[4/5] w-full overflow-hidden">
                    <Image
                      src={t.image}
                      alt={t.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-[1.035]"
                    />
                  </div>
                </a>

                <div className="mt-6 flex items-start justify-between gap-5">
                  <div>
                    <p className="index-num text-[10.5px] text-cocoa-deep/35">
                      0{i + 1}
                    </p>
                    <h3 className="mt-2 font-display text-[1.25rem] font-normal leading-tight text-cocoa-deep">
                      {t.title}
                    </h3>
                    <p className="mt-2 max-w-[34ch] text-[13px] leading-relaxed text-cocoa-deep/60">
                      {t.description}
                    </p>
                  </div>
                  <a
                    href={PHONE_HREF}
                    aria-label={`Enquire about ${t.title}`}
                    className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center border border-cocoa-deep/15 text-cocoa-deep/60 transition-colors duration-500 hover:border-burgundy hover:bg-burgundy hover:text-ivory"
                  >
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Single footer CTA row */}
        <Reveal>
          <div className="mt-24 flex flex-col items-start justify-between gap-6 border-t border-cocoa-deep/15 pt-10 md:flex-row md:items-center">
            <p className="max-w-md text-[14px] leading-relaxed text-cocoa-deep/65">
              Prefer to talk it through? Our front-desk team will help you
              choose the right ritual for how your body feels today.
            </p>
            <div className="flex items-center gap-8">
              <a href={PHONE_HREF} className="btn-cta">
                Call for availability
              </a>
              <a href="#visit" className="btn-ghost">
                Visit us
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
