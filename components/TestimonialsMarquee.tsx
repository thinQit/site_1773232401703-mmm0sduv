"use client";
interface TestimonialsMarqueeProps {
  items?: string[]
}
export default function TestimonialsMarquee({
  items = [
    '“Best tonkotsu in Portland.”',
    '“Noodles have perfect bite.”',
    '“Cozy date-night ramen spot.”',
  ],
}: Partial<TestimonialsMarqueeProps>) {
  return (
    <section className="overflow-hidden bg-[#FEFAE0] py-10">
      <div className="animate-marquee whitespace-nowrap text-[#722F37]">
        {items.map((t, i) => (
          <span key={i} className="mx-8 inline-block font-serif text-xl">{t}</span>
        ))}
      </div>
    </section>
  )
}
