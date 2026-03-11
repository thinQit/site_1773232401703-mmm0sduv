"use client";

export const dynamic = 'force-dynamic';
import AceternityHeroAurora from "@/components/AceternityHeroAurora";
import MenuTabs from "@/components/MenuTabs";
import ReservationCtaPanel from "@/components/ReservationCtaPanel";
import ChefStorySplit from "@/components/ChefStorySplit";
import PhotoGalleryGrid from "@/components/PhotoGalleryGrid";
import TestimonialsMarquee from "@/components/TestimonialsMarquee";
import LocationMapSection from "@/components/LocationMapSection";
import ScrollReveal from "@/components/ScrollReveal";

export default function HomePage() {
  return (
    <main className="pt-20">
      <div className="animate-fade-in-up">
        <AceternityHeroAurora
          headline="Portland ramen, made the slow way."
          subheadline="Tonkotsu, miso, and shoyu ramen with handmade noodles—served in a warm, wood-and-paper dining room built for lingering."
          primaryCta={{ label: "Reserve a seat", href: "/reservations" }}
          secondaryCta={{ label: "View the menu", href: "/menu" }}
          backgroundImageUrl="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577700/site-images/hero-backgrounds/13551578.jpg"
        />
      </div>
      <ScrollReveal><MenuTabs /></ScrollReveal>
      <ScrollReveal><ReservationCtaPanel /></ScrollReveal>
      <ScrollReveal><ChefStorySplit /></ScrollReveal>
      <ScrollReveal><PhotoGalleryGrid /></ScrollReveal>
      <ScrollReveal><TestimonialsMarquee /></ScrollReveal>
      <ScrollReveal><LocationMapSection /></ScrollReveal>
    </main>
  );
}
