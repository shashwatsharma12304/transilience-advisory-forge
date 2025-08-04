import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { Sword, Lock, Shield } from "lucide-react";

interface AttackScenarioData {
  scenario_id: string;
  description: string;
  prerequisites?: string;
  mitigation?: string;
  reasoning?: string;
}

interface AttackScenariosProps {
  scenarios: AttackScenarioData[];
}

export const AttackScenarios = ({ scenarios }: AttackScenariosProps) => {
  return (
    <div className="space-y-4">
      {scenarios.map((scenario, index) => (
        <GlassCard key={index} className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Sword className="w-5 h-5 text-destructive" />
              Attack Scenario
            </h3>
            <Badge variant="outline" className="border-glass-border">
              {scenario.scenario_id}
            </Badge>
          </div>

          <div className="space-y-4">
            <div>
              <span className="font-medium text-sm">Scenario Description</span>
              <p className="text-sm text-muted-foreground mt-1">
                {scenario.description}
              </p>
            </div>

            {scenario.prerequisites && (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Lock className="w-4 h-4 text-amber-500" />
                  <span className="font-medium text-sm">Prerequisites</span>
                </div>
                <p className="text-sm text-muted-foreground pl-6">
                  {scenario.prerequisites}
                </p>
              </div>
            )}

            {scenario.mitigation && (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span className="font-medium text-sm">Mitigation</span>
                </div>
                <p className="text-sm text-muted-foreground pl-6">
                  {scenario.mitigation}
                </p>
              </div>
            )}

            {scenario.reasoning && (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Sword className="w-4 h-4 text-primary" />
                  <span className="font-medium text-sm">Reasoning</span>
                </div>
                <p className="text-sm text-muted-foreground pl-6">
                  {scenario.reasoning}
                </p>
              </div>
            )}
          </div>
        </GlassCard>
      ))}
    </div>
  );
};