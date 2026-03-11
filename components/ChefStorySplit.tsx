"use client";

import Image from 'next/image'

export default function ChefStorySplit() {
  return (
    <section className="mx-auto grid max-w-7xl gap-8 px-4 py-20 md:grid-cols-2 md:px-6">
      <Image
        src="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1771577710/site-images/hero-backgrounds/12981879.jpg"
        alt="Chef portrait"
        width={800}
        height={600}
        className="rounded-xl object-cover"
      />
      <div>
        <h2 className="font-serif text-3xl text-[#722F37]">Chef Haruto’s Story</h2>
        <p className="mt-4 text-foreground/80">
          Trained in Fukuoka and Sapporo styles, Chef Haruto blends deep tonkotsu craft with Portland seasonality.
        </p>
        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm">
          <li>House-made noodles daily</li>
          <li>Slow-simmered broths</li>
          <li>Local produce and Japanese imports</li>
        </ul>
      </div>
    </section>
  )
}
