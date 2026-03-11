"use client";

export const dynamic = 'force-dynamic';
import HeroGradientBlob from "@/components/HeroGradientBlob";
import PhotoGalleryGrid from "@/components/PhotoGalleryGrid";
import CtaBanner from "@/components/CtaBanner";
import ScrollReveal from "@/components/ScrollReveal";

export default function GalleryPage() {
  return (
    <main className="pt-20">
      <div className="animate-fade-in-up">
        <HeroGradientBlob
          title="The room, the bowls, the details."
          subtitle="A quick look at our counter seats, traditional decor, and the ramen that brings everyone in."
          primaryCta={{ label: "Reserve", href: "/reservations" }}
          secondaryCta={{ label: "Menu", href: "/menu" }}
        />
      </div>
      <ScrollReveal><PhotoGalleryGrid /></ScrollReveal>
      <ScrollReveal>
        <CtaBanner
          headline="See it in person—best enjoyed hot."
          subheadline="Drop in for lunch, or reserve for a cozy dinner bowl."
          primaryCta={{ label: "Reserve a seat", href: "/reservations" }}
          secondaryCta={{ label: "Hours & location", href: "/contact" }}
        />
      </ScrollReveal>
    </main>
  );
}
