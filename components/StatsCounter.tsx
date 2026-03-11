"use client";
import { cn } from "@/lib/utils";

interface Stat {
  value: string;
  label: string;
}

interface StatsCounterProps {
  stats: Stat[];
  bgColor?: string;
}

export default function StatsCounter({
  stats = [
    { value: "12+", label: "Signature Dishes" },
    { value: "4.9★", label: "Guest Rating" },
    { value: "18K", label: "Happy Diners" },
    { value: "7", label: "Days Open" },
  ],
  bgColor = "bg-primary text-primary-foreground",
}: Partial<StatsCounterProps>) {
  const colClass =
    stats.length <= 1
      ? "grid-cols-1"
      : stats.length === 2
      ? "grid-cols-2"
      : stats.length === 3
      ? "grid-cols-2 md:grid-cols-3"
      : "grid-cols-2 md:grid-cols-4";

  return (
    <section className={cn("py-20 md:py-28", bgColor)}>
      <div className="container mx-auto max-w-7xl px-4">
        <div className="animate-fade-in-up">
          <div className={cn("grid gap-8 text-center", colClass)}>
            {stats.map(function (stat, i) {
              return (
                <div key={i} className="card-hover rounded-xl border border-border/20 bg-background/10 p-6 backdrop-blur-sm">
                  <p className="text-4xl font-bold md:text-5xl">{stat.value}</p>
                  <p className="mt-2 text-sm uppercase tracking-wider text-primary-foreground/80">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
