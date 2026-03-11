"use client";
interface HeroLampProps {
  title?: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}
export default function HeroLamp({
  title = 'Reserve Your Seat',
  subtitle = 'Lantern-warm evenings, steaming bowls, and a table ready for you.',
  primaryCta,
  secondaryCta,
}: Partial<HeroLampProps>) {
  return (
    <section className="bg-gradient-to-b from-[#722F37] to-[#3b1a1f] px-4 py-20 text-[#FEFAE0] md:px-6">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="font-serif text-4xl md:text-5xl">{title}</h1>
        <p className="mt-4">{subtitle}</p>
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
                className="border border-[#FEFAE0]/70 text-[#FEFAE0] rounded-lg px-6 py-3 font-medium hover:bg-[#91515a]/40 transition"
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
