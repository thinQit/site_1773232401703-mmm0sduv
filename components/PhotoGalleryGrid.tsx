'use client'
import { useState } from 'react'
import Image from 'next/image'

interface PhotoGalleryGridProps {
  images?: { src: string; alt: string }[]
}

export default function PhotoGalleryGrid({
  images = [
    { src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577052/site-images/restaurant/12538355.jpg', alt: 'Ramen bowl' },
    { src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577086/site-images/restaurant/10148453.jpg', alt: 'Counter seating' },
    { src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577092/site-images/restaurant/12387876.jpg', alt: 'Small plates' },
  ],
}: Partial<PhotoGalleryGridProps>) {
  const [active, setActive] = useState(0)
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
      <div className="grid gap-4 md:grid-cols-3">
        {images.map((img, i) => (
          <button key={img.src} onClick={() => setActive(i)} className="overflow-hidden rounded-xl">
            <Image src={img.src} alt={img.alt} width={1200} height={800} unoptimized className="h-64 w-full object-cover" />
          </button>
        ))}
      </div>
      <div className="mt-4 rounded-xl border p-3 text-sm">Selected: {images[active]?.alt}</div>
    </section>
  )
}
