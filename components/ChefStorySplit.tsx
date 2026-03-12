export default function ChefStorySplit() {
  return (
    <section className="bg-card py-16">
      <div className="container grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl text-foreground">Chef-crafted bowls, rooted in tradition.</h2>
          <p className="text-sm md:text-base leading-relaxed text-accent">
            We focus on the fundamentals—broth, tare, noodles—then serve it with warmth in a small, lantern-lit room.
          </p>
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
            Our kitchen starts before sunrise, simmering bones and aromatics to build depth and balance. Each bowl is finished by hand, with
            housemade noodles and seasonal toppings that honor the craft.
          </p>
        </div>
        <div className="rounded-2xl border border-border bg-muted/40 p-8 text-sm text-muted-foreground">
          <p className="leading-relaxed">
            "Ramen is patience. It is the attention to every small moment—stirring, tasting, adjusting—that brings harmony to the bowl."
          </p>
          <p className="mt-4 text-xs uppercase tracking-widest text-foreground">Chef Keita</p>
        </div>
      </div>
    </section>
  );
}
