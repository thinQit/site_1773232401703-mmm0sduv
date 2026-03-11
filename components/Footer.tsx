"use client";

import Link from 'next/link'

interface FooterLink {
  label: string
  href: string
}

interface FooterColumn {
  title: string
  links: FooterLink[]
}

interface FooterProps {
  brand: string
  description: string
  columns: FooterColumn[]
  copyright: string
}

export default function Footer({
  brand = 'Kumo Ramen',
  description = 'Handmade noodles and slow-simmered broths in the heart of Portland.',
  columns = [],
  copyright = '© 2026 Kumo Ramen. All rights reserved.',
}: Partial<FooterProps>) {
  return (
    <footer className="border-t border-border bg-muted mt-20 text-foreground">
      <div className="mx-auto max-w-7xl grid gap-8 px-4 py-12 md:grid-cols-4 md:px-6">
        <div>
          <h4 className="font-serif text-lg text-primary">{brand}</h4>
          <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <h5 className="font-semibold text-primary mb-2">{col.title}</h5>
            <ul className="space-y-1 text-sm">
              {col.links.map((link) =>
                link.href.startsWith('/') ? (
                  <li key={link.label}>
                    <Link href={link.href} className="transition-colors hover:text-primary">
                      {link.label}
                    </Link>
                  </li>
                ) : (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="transition-colors hover:text-primary"
                      target={
                        link.href.startsWith('http') || link.href.startsWith('mailto:') || link.href.startsWith('tel:')
                          ? '_blank'
                          : undefined
                      }
                      rel={
                        link.href.startsWith('http') ? 'noopener noreferrer' : undefined
                      }
                    >
                      {link.label}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        ))}
        {/* Legal links column */}
        <div>
          <h5 className="font-semibold text-primary mb-2">Legal</h5>
          <ul className="space-y-1 text-sm">
            <li>
              <Link href="/privacy" className="transition-colors hover:text-primary">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/accessibility" className="transition-colors hover:text-primary">
                Accessibility
              </Link>
            </li>
          </ul>
          <p className="mt-3 text-xs text-muted-foreground">{copyright}</p>
        </div>
      </div>
    </footer>
  )
}
