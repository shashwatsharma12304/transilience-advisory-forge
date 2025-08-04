import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, AlertCircle, Users, FileText } from "lucide-react";

interface RiskAssessmentProps {
  vulnerability_id?: string;
  likelihood: string;
  impact: string;
  risk_score?: number;
  rationale?: string;
  reasoning?: string;
  threat_actors?: string[];
}

export const RiskAssessment = ({ 
  vulnerability_id, 
  likelihood, 
  impact, 
  risk_score, 
  rationale, 
  reasoning,
  threat_actors 
}: RiskAssessmentProps) => {
  const getRiskLevel = (likelihood: string, impact: string) => {
    const likelihoodScore = { low: 1, medium: 2, high: 3 }[likelihood.toLowerCase()] || 1;
    const impactScore = { low: 1, medium: 2, high: 3 }[impact.toLowerCase()] || 1;
    const total = likelihoodScore * impactScore;
    
    if (total >= 6) return { level: "Critical", color: "danger-gradient", progress: 90 };
    if (total >= 4) return { level: "High", color: "warning-gradient", progress: 70 };
    if (total >= 2) return { level: "Medium", color: "bg-yellow-500", progress: 50 };
    return { level: "Low", color: "success-gradient", progress: 30 };
  };

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case "critical": return "danger-gradient";
      case "high": return "warning-gradient";
      case "medium": return "bg-yellow-500";
      case "low": return "success-gradient";
      default: return "bg-muted";
    }
  };

  const riskData = getRiskLevel(likelihood, impact);

  return (
    <GlassCard className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-primary" />
          Risk Assessment
        </h4>
        {vulnerability_id && (
          <Badge variant="outline" className="border-glass-border text-xs">
            {vulnerability_id}
          </Badge>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="text-center">
          <div className="text-sm text-muted-foreground mb-2">Likelihood</div>
          <Badge className={`${getLevelColor(likelihood)} text-white border-0 px-4 py-2`}>
            {likelihood}
          </Badge>
        </div>
        
        <div className="text-center">
          <div className="text-sm text-muted-foreground mb-2">Impact</div>
          <Badge className={`${getLevelColor(impact)} text-white border-0 px-4 py-2`}>
            {impact}
          </Badge>
        </div>
        
        <div className="text-center">
          <div className="text-sm text-muted-foreground mb-2">Overall Risk</div>
          <Badge className={`${riskData.color} text-white border-0 px-4 py-2`}>
            {riskData.level}
          </Badge>
        </div>
      </div>

      {risk_score && (
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Risk Score</span>
            <span className="text-foreground font-medium">{risk_score}/10</span>
          </div>
          <Progress value={risk_score * 10} className="h-2" />
        </div>
      )}

      {threat_actors && threat_actors.length > 0 && (
        <div className="space-y-3">
          <h5 className="font-medium text-foreground flex items-center gap-2">
            <Users className="w-4 h-4" />
            Known Threat Actors
          </h5>
          <div className="flex flex-wrap gap-2">
            {threat_actors.map((actor, index) => (
              <Badge key={index} variant="outline" className="border-destructive text-destructive">
                {actor}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {rationale && (
        <div className="space-y-2">
          <h5 className="font-medium text-foreground flex items-center gap-2">
            <AlertCircle className="w-4 h-4" />
            Rationale
          </h5>
          <p className="text-sm text-muted-foreground leading-relaxed pl-6">{rationale}</p>
        </div>
      )}

      {reasoning && (
        <div className="space-y-2">
          <h5 className="font-medium text-foreground flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Analysis
          </h5>
          <p className="text-sm text-muted-foreground leading-relaxed pl-6">{reasoning}</p>
        </div>
      )}
    </GlassCard>
  );
};