"use client";
import { Card } from '@/components/ui/card'

interface MenuItemCardProps {
  name?: string
  description?: string
  price?: string
  tags?: string[]
  spiceLevel?: number
}

export default function MenuItemCard({
  name = 'Tonkotsu Classic',
  description = '16-hour pork bone broth, chashu, ajitama, kikurage, scallion.',
  price = '$18',
  tags = ['Signature', 'Handmade Noodles'],
  spiceLevel = 0,
}: Partial<MenuItemCardProps>) {
  return (
    <Card className="rounded-xl border p-5">
      <div className="flex items-start justify-between">
        <h3 className="font-serif text-xl text-[#722F37]">{name}</h3>
        <span className="font-semibold text-[#606C38]">{price}</span>
      </div>
      <p className="mt-2 text-sm text-foreground/80">{description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="rounded-full bg-[#FEFAE0] px-2 py-1 text-xs">{tag}</span>
        ))}
      </div>
      {spiceLevel > 0 && <p className="mt-3 text-xs text-[#722F37]">Spice: {'🌶️'.repeat(spiceLevel)}</p>}
    </Card>
  )
}
