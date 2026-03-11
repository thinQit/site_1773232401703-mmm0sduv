import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Playfair_Display, Lato } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-heading" });
const lato = Lato({ subsets: ["latin"], weight: ["300", "400", "700"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Kumo Ramen | Handmade Noodles & Tonkotsu in Portland, OR",
  description:
    "Authentic Japanese ramen in Portland, Oregon. Tonkotsu, miso, and shoyu ramen with handmade noodles, cozy counter seating, and traditional decor. Reserve a seat or walk in.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lato.variable} font-body bg-background text-foreground`}>
        <Navbar
          logo="Kumo Ramen"
          navItems={[
            { label: "Home", href: "/" },
            { label: "Menu", href: "/menu" },
            { label: "Reservations", href: "/reservations" },
            { label: "About", href: "/about" },
            { label: "Gallery", href: "/gallery" },
            { label: "Contact", href: "/contact" },
          ]}
          ctaLabel="Reserve"
          ctaHref="/reservations"
        />
        {children}
        <Footer
          brand="Kumo Ramen"
          description="Handmade noodles and slow-simmered broths in the heart of Portland."
          columns={[
            {
              title: "Visit",
              links: [
                { label: "1123 SE Division St, Portland, OR", href: "https://maps.google.com/?q=1123+SE+Division+St,+Portland,+OR+97202" },
                { label: "(503) 555-0188", href: "tel:+15035550188" },
                { label: "hello@kumoramen.com", href: "mailto:hello@kumoramen.com" },
              ],
            },
            {
              title: "Hours",
              links: [
                { label: "Mon–Thu: 11:30am – 9pm", href: "/" },
                { label: "Fri–Sat: 11:30am – 10pm", href: "/" },
                { label: "Sun: 12pm – 8pm", href: "/" },
              ],
            },
            {
              title: "Explore",
              links: [
                { label: "Menu", href: "/menu" },
                { label: "Reservations", href: "/reservations" },
                { label: "Gift Cards", href: "/" },
              ],
            },
          ]}
        />
      </body>
    </html>
  );
}
