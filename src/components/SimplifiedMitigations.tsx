import { GlassCard } from "@/components/ui/glass-card";
import { Shield, CheckCircle } from "lucide-react";

interface MitigationItem {
  cve?: string;
  mitigation_steps: string[];
}

interface MitigationsSectionProps {
  items: MitigationItem[];
}

export function SimplifiedMitigations({ items }: MitigationsSectionProps) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-6 text-foreground">Mitigations</h2>
      <div className="space-y-6">
        {items.map((mitigation, index) => (
          <GlassCard key={index} className="p-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Shield className="h-6 w-6 text-success mt-1" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  {mitigation.cve || `Mitigation ${index + 1}`}
                </h3>
                <div className="space-y-3">
                  {mitigation.mitigation_steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground leading-relaxed">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}