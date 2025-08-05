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
      <div className="space-y-8">
        {items.map((mitigation, index) => (
          <div key={index} className="space-y-4">
            <div className="flex items-center space-x-3">
              <Shield className="h-5 w-5 text-success flex-shrink-0" />
              <h3 className="text-lg font-semibold text-foreground">
                {mitigation.cve || `Mitigation ${index + 1}`}
              </h3>
            </div>
            <div className="space-y-3 pl-8">
              {mitigation.mitigation_steps.map((step, stepIndex) => (
                <div key={stepIndex} className="flex items-start space-x-3">
                  <CheckCircle className="h-4 w-4 text-success mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>
            {index < items.length - 1 && <hr className="border-border mt-6" />}
          </div>
        ))}
      </div>
    </section>
  );
}