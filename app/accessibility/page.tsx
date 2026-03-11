"use client";

export const dynamic = 'force-dynamic';
import HeroSpotlight from "@/components/HeroSpotlight";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AccessibilityPage() {
  return (
    <main className="pt-20">
      <div className="animate-fade-in-up">
        <HeroSpotlight
          title="Accessibility"
          subtitle="We aim to make our website and restaurant welcoming to everyone."
          primaryCta={{ label: "Contact us", href: "/contact" }}
          secondaryCta={{ label: "Location & hours", href: "/contact#hours" }}
        />
      </div>
      <section className="py-20 md:py-28 bg-background animate-fade-in-up">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="p-8 bg-card border-border card-hover">
            <h2 className="text-3xl font-semibold mb-6">Our approach</h2>
            <p className="mb-4 text-muted-foreground">We use semantic HTML, keyboard navigation, strong contrast, and clear alt text.</p>
            <Button asChild className="transition-all duration-200 hover:scale-105"><a href="/reservations">Reserve</a></Button>
          </Card>
        </div>
      </section>
    </main>
  );
}
