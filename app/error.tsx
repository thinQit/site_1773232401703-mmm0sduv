"use client"

import { Button } from "@/components/ui/button"

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-4">
      <h2 className="text-3xl font-semibold mb-3">Something went wrong</h2>
      <p className="text-muted-foreground mb-6">Please try again.</p>
      <Button onClick={() => reset()} className="transition-all duration-200 hover:scale-105">
        Try again
      </Button>
    </div>
  )
}
