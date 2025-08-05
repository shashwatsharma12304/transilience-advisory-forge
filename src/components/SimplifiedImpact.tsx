import { GlassCard } from "@/components/ui/glass-card";
import { AlertTriangle } from "lucide-react";

interface ImpactItem {
  cve?: string;
  impact_description: string;
}

interface ImpactSectionProps {
  items: ImpactItem[];
}

export function SimplifiedImpact({ items }: ImpactSectionProps) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-6 text-foreground">Impact Assessment</h2>
      <div className="space-y-6">
        {items.map((impact, index) => (
          <GlassCard key={index} className="p-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <AlertTriangle className="h-6 w-6 text-warning mt-1" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {impact.cve || `Impact ${index + 1}`}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {impact.impact_description}
                </p>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}