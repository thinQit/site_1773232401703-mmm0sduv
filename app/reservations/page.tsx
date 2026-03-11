"use client";

export const dynamic = 'force-dynamic';
import HeroLamp from "@/components/HeroLamp";
import ReservationForm from "@/components/ReservationForm";
import CtaBanner from "@/components/CtaBanner";
import ScrollReveal from "@/components/ScrollReveal";

export default function ReservationsPage() {
  return (
    <main className="pt-20">
      <div className="animate-fade-in-up">
        <HeroLamp
          title="Reserve your seat at the counter."
          subtitle="Book a time, tell us your party size, and we’ll have a warm table ready."
          primaryCta={{ label: "Request a reservation", href: "#reservation-form" }}
          secondaryCta={{ label: "Call (503) 555-0188", href: "tel:+15035550188" }}
        />
      </div>
      <ScrollReveal><ReservationForm /></ScrollReveal>
      <ScrollReveal>
        <CtaBanner
          headline="Prefer to walk in?"
          subheadline="Stop by—counter seats turn over quickly, especially before 6pm."
          primaryCta={{ label: "Get directions", href: "https://maps.google.com/?q=1123+SE+Division+St,+Portland,+OR+97202" }}
          secondaryCta={{ label: "Menu", href: "/menu" }}
        />
      </ScrollReveal>
    </main>
  );
}
