"use client";
import { TextGenerateEffect } from '@/components/ui/text/text-generate-effect';

interface HeroSpotlightProps {
  title?: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export default function HeroSpotlight({
  title = 'Our Story & Craft',
  subtitle = 'A focused look into our broth, noodles, and hospitality philosophy.',
  primaryCta,
  secondaryCta,
}: Partial<HeroSpotlightProps>) {
  return (
    <section className="bg-[#722F37] px-4 py-20 text-[#FEFAE0] md:px-6">
      <div className="mx-auto max-w-4xl text-center">
        <TextGenerateEffect words={title} className="font-serif text-4xl md:text-5xl" />
        <p className="mt-4 text-[#FEFAE0]/85">{subtitle}</p>
        {(primaryCta || secondaryCta) && (
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row justify-center">
            {primaryCta && (
              <a
                className="bg-[#DDA15E] text-[#1B1B1B] rounded-lg px-6 py-3 font-medium hover:bg-[#e2bb7c] transition"
                href={primaryCta.href}
              >
                {primaryCta.label}
              </a>
            )}
            {secondaryCta && (
              <a
                className="border border-[#FEFAE0]/70 text-[#FEFAE0] rounded-lg px-6 py-3 font-medium hover:bg-[#91515a]/30 transition"
                href={secondaryCta.href}
              >
                {secondaryCta.label}
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
