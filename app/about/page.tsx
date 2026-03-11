"use client";

export const dynamic = 'force-dynamic';
import HeroWaves from "@/components/HeroWaves";
import ChefStorySplit from "@/components/ChefStorySplit";
import CtaBanner from "@/components/CtaBanner";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutPage() {
  return (
    <main className="pt-20">
      <div className="animate-fade-in-up">
        <HeroWaves
          title="A Portland ramen shop with Tokyo roots."
          subtitle="We focus on the fundamentals—broth, tare, noodles—then serve it with warmth in a small, lantern-lit room."
          primaryCta={{ label: "View menu", href: "/menu" }}
          secondaryCta={{ label: "Reserve", href: "/reservations" }}
        />
      </div>
      <ScrollReveal><ChefStorySplit /></ScrollReveal>
      <ScrollReveal>
        <CtaBanner
          headline="Come warm up with a bowl."
          subheadline="Whether you’re a tonkotsu loyalist or a shoyu purist, we’ll make it memorable."
          primaryCta={{ label: "Reserve", href: "/reservations" }}
          secondaryCta={{ label: "Location & hours", href: "/contact" }}
        />
      </ScrollReveal>
    </main>
  );
}
