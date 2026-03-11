"use client";
import { Button } from '@/components/ui/button'

interface CtaBannerProps {
  headline?: string
  subheadline?: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}

export default function CtaBanner({
  headline = 'Ready for a Bowl Tonight?',
  subheadline = '',
  primaryCta = { label: 'Reserve', href: '/reservations' },
  secondaryCta = { label: 'View Menu', href: '/menu' },
}: Partial<CtaBannerProps>) {
  return (
    <div className="rounded-xl border border-[#DDA15E]/70 bg-[#f5ecd2] p-6">
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <h3 className="font-serif text-2xl text-[#722F37]">{headline}</h3>
        <div className="flex gap-3">
          <Button asChild className="bg-[#722F37] text-[#FEFAE0] hover:bg-[#91515a] rounded-lg px-6 py-3 font-medium">
            <a href={primaryCta.href}>{primaryCta.label}</a>
          </Button>
          <Button asChild variant="outline" className="border-[#722F37]/40 text-[#722F37] px-6 py-3 font-medium">
            <a href={secondaryCta.href}>{secondaryCta.label}</a>
          </Button>
        </div>
      </div>
      {subheadline && <p className="mt-2 text-[#722F37]/80">{subheadline}</p>}
    </div>
  )
}
