import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { Shield, AlertTriangle, Calendar } from "lucide-react";

interface ComplianceImpactData {
  standard: string;
  status: string;
  gaps?: string;
  remediation_deadline?: string;
  reasoning?: string;
}

interface ComplianceImpactProps {
  compliance: ComplianceImpactData[];
}

export const ComplianceImpact = ({ compliance }: ComplianceImpactProps) => {
  const getStatusColor = (status: string) => {
    if (status.toLowerCase().includes("compliant") && !status.toLowerCase().includes("non")) {
      return "default";
    }
    return "destructive";
  };

  return (
    <div className="space-y-4">
      {compliance.map((item, index) => (
        <GlassCard key={index} className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              {item.standard} Compliance
            </h3>
            <Badge variant={getStatusColor(item.status)}>
              {item.status}
            </Badge>
          </div>

          <div className="space-y-4">
            {item.gaps && (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-4 h-4 text-amber-500" />
                  <span className="font-medium text-sm">Compliance Gaps</span>
                </div>
                <p className="text-sm text-muted-foreground pl-6">
                  {item.gaps}
                </p>
              </div>
            )}

            {item.remediation_deadline && (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-destructive" />
                  <span className="font-medium text-sm">Remediation Deadline</span>
                </div>
                <p className="text-sm text-muted-foreground pl-6">
                  {new Date(item.remediation_deadline).toLocaleDateString()}
                </p>
              </div>
            )}

            {item.reasoning && (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="font-medium text-sm">Reasoning</span>
                </div>
                <p className="text-sm text-muted-foreground pl-6">
                  {item.reasoning}
                </p>
              </div>
            )}
          </div>
        </GlassCard>
      ))}
    </div>
  );
};