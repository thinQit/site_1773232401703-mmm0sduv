'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export interface NavbarProps {
  logo: string
  navItems: { label: string; href: string }[]
  ctaLabel: string
  ctaHref: string
}

export default function Navbar({
  logo = 'Kumo Ramen',
  navItems = [
    { label: 'Home', href: '/' },
    { label: 'Menu', href: '/menu' },
    { label: 'Reservations', href: '/reservations' },
    { label: 'About', href: '/about' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' },
  ],
  ctaLabel = 'Reserve',
  ctaHref = '/reservations',
}: Partial<NavbarProps>) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className="font-serif text-xl font-bold text-primary transition-colors hover:text-accent"
        >
          {logo}
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <Button
            asChild
            className="bg-accent text-accent-foreground hover:bg-accent/80 shadow-none rounded-lg font-medium px-6 py-2"
          >
            <Link href={ctaHref}>{ctaLabel}</Link>
          </Button>
        </div>
        <button
          className="md:hidden text-primary"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          type="button"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      <div
        className={cn(
          'md:hidden overflow-hidden transition-all duration-300',
          open ? 'max-h-96' : 'max-h-0'
        )}
      >
        <div className="space-y-2 border-t border-border bg-background px-4 py-3">
          {navItems.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block py-2 text-foreground transition-colors hover:text-primary"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button
            asChild
            className="w-full bg-accent text-accent-foreground hover:bg-accent/80 shadow-none rounded-lg font-medium px-6 py-2"
          >
            <Link href={ctaHref} onClick={() => setOpen(false)}>
              {ctaLabel}
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
