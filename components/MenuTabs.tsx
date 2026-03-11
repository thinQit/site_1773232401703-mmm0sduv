"use client";
import { useState } from 'react'
import { cn } from '@/lib/utils'

interface MenuTabsProps {
  categories?: string[]
  onChange?: (category: string) => void
}

export default function MenuTabs({
  categories = ['Ramen', 'Small Plates', 'Add-ons', 'Drinks'],
  onChange = () => undefined,
}: Partial<MenuTabsProps>) {
  const [active, setActive] = useState(categories[0] || 'Ramen')
  return (
    <div className="flex flex-wrap gap-2 border-b border-[color:var(--border)]">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => {
            setActive(cat)
            onChange(cat)
          }}
          className={cn('relative px-4 py-3 text-sm', active === cat ? 'text-[#722F37]' : 'text-foreground/70')}
        >
          {cat}
          {active === cat && <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#DDA15E]" />}
        </button>
      ))}
    </div>
  )
}
