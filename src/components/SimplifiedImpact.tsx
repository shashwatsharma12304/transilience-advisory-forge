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
          <div key={index} className="space-y-3">
            <div className="flex items-center space-x-3">
              <AlertTriangle className="h-5 w-5 text-warning flex-shrink-0" />
              <h3 className="text-lg font-semibold text-foreground">
                {impact.cve || `Impact ${index + 1}`}
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed pl-8">
              {impact.impact_description}
            </p>
            {index < items.length - 1 && <hr className="border-border mt-6" />}
          </div>
        ))}
      </div>
    </section>
  );
}