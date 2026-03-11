"use client";
import { Button } from '@/components/ui/button'

interface ReservationCtaPanelProps {
  title?: string
}

export default function ReservationCtaPanel({
  title = 'Reserve Your Ramen Night',
}: Partial<ReservationCtaPanelProps>) {
  return (
    <section className="rounded-xl border border-[#DDA15E]/50 bg-[#722F37] p-8 text-[#FEFAE0]">
      <h2 className="font-serif text-3xl">{title}</h2>
      <p className="mt-3 text-sm text-[#FEFAE0]/85">Parties of 1–6 accepted online. 90-minute seating on weekends.</p>
      <Button className="mt-6 bg-[#DDA15E] text-black hover:bg-[#c98a43]">Book Now</Button>
    </section>
  )
}
