"use client";
interface HeroGradientBlobProps {
  title?: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}
export default function HeroGradientBlob({
  title = 'Gallery',
  subtitle,
  primaryCta,
  secondaryCta,
}: Partial<HeroGradientBlobProps>) {
  return (
    <section className="bg-gradient-to-r from-[#FEFAE0] via-[#f3e2bd] to-[#DDA15E] px-4 py-20 md:px-6">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="font-serif text-4xl text-[#722F37] md:text-5xl">{title}</h1>
        {subtitle && <p className="mt-4 text-[#722F37]/90">{subtitle}</p>}
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
                className="border border-[#722F37]/50 text-[#722F37] rounded-lg px-6 py-3 font-medium hover:bg-[#f3e2bd]/70 transition"
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
