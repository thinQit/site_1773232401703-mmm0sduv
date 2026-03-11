"use client";
import { Button } from '@/components/ui/button';

interface HeroBeamsProps {
  title?: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export default function HeroBeams({
  title = 'Get in Touch',
  subtitle,
  primaryCta,
  secondaryCta,
}: Partial<HeroBeamsProps>) {
  return (
    <section className="bg-[#606C38] px-4 py-20 text-[#FEFAE0] md:px-6">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="font-serif text-4xl md:text-5xl">{title}</h1>
        {subtitle && <p className="mt-4">{subtitle}</p>}
        {(primaryCta || secondaryCta) && (
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row justify-center">
            {primaryCta && (
              <Button asChild className="bg-[#DDA15E] text-black rounded-lg px-6 py-3 font-medium hover:bg-[#e2bb7c] transition">
                <a href={primaryCta.href}>{primaryCta.label}</a>
              </Button>
            )}
            {secondaryCta && (
              <Button asChild variant="outline" className="border-[#FEFAE0]/60 text-[#FEFAE0] rounded-lg px-6 py-3 font-medium hover:bg-[#fff]/5 transition">
                <a href={secondaryCta.href}>{secondaryCta.label}</a>
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
