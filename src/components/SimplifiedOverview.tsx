import { GlassCard } from "@/components/ui/glass-card";

interface OverviewSectionProps {
  overview: string;
}

export function SimplifiedOverview({ overview }: OverviewSectionProps) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-6 text-foreground">Overview</h2>
      <p className="text-muted-foreground leading-relaxed text-base">
        {overview}
      </p>
    </section>
  );
}