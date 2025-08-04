import { GlassCard } from "@/components/ui/glass-card";
import { Settings, RotateCcw, TestTube } from "lucide-react";

interface DeploymentGuidanceData {
  environment_requirements?: string;
  rollback_plan?: string;
  testing_procedures?: string;
}

interface DeploymentGuidanceProps {
  guidance: DeploymentGuidanceData;
}

export const DeploymentGuidance = ({ guidance }: DeploymentGuidanceProps) => {
  return (
    <GlassCard className="p-6">
      <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
        <Settings className="w-5 h-5 text-primary" />
        Deployment Guidance
      </h3>

      <div className="space-y-6">
        {guidance.environment_requirements && (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Settings className="w-4 h-4 text-primary" />
              <span className="font-medium">Environment Requirements</span>
            </div>
            <p className="text-sm text-muted-foreground pl-6">
              {guidance.environment_requirements}
            </p>
          </div>
        )}

        {guidance.rollback_plan && (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <RotateCcw className="w-4 h-4 text-amber-500" />
              <span className="font-medium">Rollback Plan</span>
            </div>
            <p className="text-sm text-muted-foreground pl-6">
              {guidance.rollback_plan}
            </p>
          </div>
        )}

        {guidance.testing_procedures && (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <TestTube className="w-4 h-4 text-green-500" />
              <span className="font-medium">Testing Procedures</span>
            </div>
            <p className="text-sm text-muted-foreground pl-6">
              {guidance.testing_procedures}
            </p>
          </div>
        )}
      </div>
    </GlassCard>
  );
};