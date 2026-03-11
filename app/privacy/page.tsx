"use client";

export const dynamic = 'force-dynamic';
import HeroSpotlight from "@/components/HeroSpotlight";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PrivacyPage() {
  return (
    <main className="pt-20">
      <div className="animate-fade-in-up">
        <HeroSpotlight
          title="Privacy policy"
          subtitle="A simple policy: we collect only what we need to respond to you and handle reservation requests."
          primaryCta={{ label: "Contact", href: "/contact" }}
          secondaryCta={{ label: "Home", href: "/" }}
        />
      </div>
      <section className="py-20 md:py-28 bg-muted animate-fade-in-up">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="p-8 bg-card border-border card-hover">
            <h2 className="text-3xl font-semibold mb-6">What we collect</h2>
            <p className="mb-4 text-muted-foreground">When you submit forms, we collect only details needed to respond.</p>
            <Button asChild className="transition-all duration-200 hover:scale-105"><a href="/contact">Contact us</a></Button>
          </Card>
        </div>
      </section>
    </main>
  );
}
