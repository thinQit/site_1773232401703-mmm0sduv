"use client";
interface HeroWavesProps {
  title?: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}
export default function HeroWaves({
  title = 'About Kokoro',
  subtitle = 'Inspired by regional ramen traditions and Portland’s love for craft food.',
  primaryCta,
  secondaryCta,
}: Partial<HeroWavesProps>) {
  return (
    <section className="bg-[#FEFAE0] px-4 py-20 md:px-6">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="font-serif text-4xl text-[#722F37] md:text-5xl">{title}</h1>
        <p className="mt-4 text-foreground/80">{subtitle}</p>
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
                className="border border-[#722F37]/50 text-[#722F37] rounded-lg px-6 py-3 font-medium hover:bg-[#f3e2bd]/60 transition"
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
