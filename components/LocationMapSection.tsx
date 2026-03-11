"use client";
import { Button } from '@/components/ui/button'

export default function LocationMapSection() {
  return (
    <section className="mx-auto grid max-w-7xl gap-8 px-4 py-20 md:grid-cols-2 md:px-6">
      <div>
        <h2 className="font-serif text-3xl text-[#722F37]">Visit Us</h2>
        <p className="mt-3">123 NW Alder St, Portland, OR 97209</p>
        <p className="text-sm text-foreground/70">Near Old Town/Chinatown. Street parking + transit nearby.</p>
        <Button className="mt-6 bg-[#DDA15E] text-black">Get Directions</Button>
      </div>
      <iframe
        title="Map to Kokoro Ramen"
        src="https://www.google.com/maps?q=Portland%20Oregon&output=embed"
        className="h-80 w-full rounded-xl border"
        loading="lazy"
      />
    </section>
  )
}
