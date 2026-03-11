"use client";

export const dynamic = 'force-dynamic';
import HeroBeams from "@/components/HeroBeams";
import ContactForm from "@/components/ContactForm";
import LocationMapSection from "@/components/LocationMapSection";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
  return (
    <main className="pt-20">
      <div className="animate-fade-in-up">
        <HeroBeams
          title="Contact & hours"
          subtitle="Questions about allergens, reservations, or private buyouts? Reach out—we’re happy to help."
          primaryCta={{ label: "Email us", href: "mailto:hello@kumoramen.com" }}
          secondaryCta={{ label: "Call (503) 555-0188", href: "tel:+15035550188" }}
        />
      </div>
      <ScrollReveal><ContactForm /></ScrollReveal>
      <ScrollReveal><LocationMapSection /></ScrollReveal>
    </main>
  );
}
