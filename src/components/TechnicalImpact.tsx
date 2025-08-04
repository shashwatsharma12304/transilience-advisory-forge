import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { Activity, Zap, Target } from "lucide-react";

interface TechnicalImpactData {
  vulnerability_id?: string;
  functional_impact: string;
  performance_impact?: string;
  exploitation_details?: string;
}

interface TechnicalImpactProps {
  impacts: TechnicalImpactData[];
}

export const TechnicalImpact = ({ impacts }: TechnicalImpactProps) => {
  return (
    <div className="space-y-4">
      {impacts.map((impact, index) => (
        <GlassCard key={index} className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Activity className="w-5 h-5 text-primary" />
              Technical Impact Analysis
            </h3>
            {impact.vulnerability_id && (
              <Badge variant="outline" className="border-glass-border">
                {impact.vulnerability_id}
              </Badge>
            )}
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-4 h-4 text-primary" />
                <span className="font-medium text-sm">Functional Impact</span>
              </div>
              <p className="text-sm text-muted-foreground pl-6">
                {impact.functional_impact}
              </p>
            </div>

            {impact.performance_impact && (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-4 h-4 text-amber-500" />
                  <span className="font-medium text-sm">Performance Impact</span>
                </div>
                <p className="text-sm text-muted-foreground pl-6">
                  {impact.performance_impact}
                </p>
              </div>
            )}

            {impact.exploitation_details && (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Activity className="w-4 h-4 text-destructive" />
                  <span className="font-medium text-sm">Exploitation Details</span>
                </div>
                <p className="text-sm text-muted-foreground pl-6">
                  {impact.exploitation_details}
                </p>
              </div>
            )}
          </div>
        </GlassCard>
      ))}
    </div>
  );
};