"use client";

import Image from 'next/image'
import { AuroraBackground } from '@/components/ui/backgrounds/aurora-background'
import { Button } from '@/components/ui/button'

interface AceternityHeroAuroraProps {
  headline: string
  subheadline?: string
  primaryCta: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  backgroundImageUrl?: string
}

export default function AceternityHeroAurora({
  headline = "Portland ramen, made the slow way.",
  subheadline = "Tonkotsu, miso, and shoyu ramen with handmade noodles—served in a warm, wood-and-paper dining room built for lingering.",
  primaryCta = { label: "Reserve a seat", href: "/reservations" },
  secondaryCta = { label: "View the menu", href: "/menu" },
  backgroundImageUrl = "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1771576909/site-images/corporate/1181638.jpg",
}: Partial<AceternityHeroAuroraProps>) {
  return (
    <AuroraBackground className="relative bg-[#722F37] !overflow-visible">
      <section className="relative mx-auto grid min-h-[78vh] max-w-7xl items-center gap-8 px-4 py-20 md:grid-cols-2 md:px-6">
        <div>
          <h1 className="font-serif text-5xl md:text-7xl text-accent mb-2">{headline}</h1>
          {subheadline && (
            <p className="mt-4 max-w-xl text-lg md:text-2xl text-primary-foreground/85">{subheadline}</p>
          )}
          <div className="mt-8 flex gap-3 flex-wrap">
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/80 rounded-lg px-6 py-3 font-medium text-lg">
              <a href={primaryCta.href}>{primaryCta.label}</a>
            </Button>
            {secondaryCta && (
              <Button asChild variant="outline" className="border-accent/70 text-accent px-6 py-3 font-medium text-lg rounded-lg">
                <a href={secondaryCta.href}>{secondaryCta.label}</a>
              </Button>
            )}
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <Image
            src={backgroundImageUrl}
            alt="Steaming bowl of signature ramen with handmade noodles and toppings"
            width={700}
            height={500}
            className="rounded-xl object-cover shadow-2xl border border-card"
            priority
          />
        </div>
      </section>
    </AuroraBackground>
  )
}
