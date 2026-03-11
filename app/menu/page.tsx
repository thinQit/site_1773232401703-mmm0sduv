"use client";

export const dynamic = 'force-dynamic';
import HeroSpotlight from "@/components/HeroSpotlight";
import MenuTabs from "@/components/MenuTabs";
import CtaBanner from "@/components/CtaBanner";
import ScrollReveal from "@/components/ScrollReveal";

export default function MenuPage() {
  return (
    <main className="pt-20">
      <div className="animate-fade-in-up">
        <HeroSpotlight
          title="The menu"
          subtitle="Three broths, handmade noodles, and the toppings that make a bowl yours."
          primaryCta={{ label: "Reserve a seat", href: "/reservations" }}
          secondaryCta={{ label: "Call for questions", href: "tel:+15035550188" }}
        />
      </div>
      <ScrollReveal><MenuTabs /></ScrollReveal>
      <ScrollReveal>
        <CtaBanner
          headline="Ready for your bowl?"
          subheadline="Reserve ahead for peak hours, or walk in and grab the next open counter seat."
          primaryCta={{ label: "Reserve", href: "/reservations" }}
          secondaryCta={{ label: "Location & hours", href: "/contact" }}
        />
      </ScrollReveal>
    </main>
  );
}
