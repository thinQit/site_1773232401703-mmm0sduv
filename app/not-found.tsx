"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-4">
      <h1 className="text-5xl font-bold mb-3">404</h1>
      <p className="text-muted-foreground mb-6">We couldn’t find that page.</p>
      <Button asChild className="transition-all duration-200 hover:scale-105">
        <Link href="/">Back to home</Link>
      </Button>
    </div>
  );
}
