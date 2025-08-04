import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Download, Settings, Wrench, ExternalLink } from "lucide-react";

interface RemediationProps {
  vulnerability_id?: string;
  remediation_type: string;
  description: string;
  released_in_version?: string;
  release_date?: string;
  documentation_url?: string;
  reasoning?: string;
}

export const RemediationTimeline = ({ remediations }: { remediations: RemediationProps[] }) => {
  const getTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case "patch": return CheckCircle;
      case "workaround": return Wrench;
      case "configuration": return Settings;
      default: return Clock;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case "patch": return "success-gradient";
      case "workaround": return "warning-gradient";
      case "configuration": return "brand-gradient";
      default: return "bg-muted";
    }
  };

  const sortedRemediations = remediations.sort((a, b) => {
    if (!a.release_date) return 1;
    if (!b.release_date) return -1;
    return new Date(a.release_date).getTime() - new Date(b.release_date).getTime();
  });

  return (
    <GlassCard className="p-6">
      <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full success-gradient"></div>
        Remediation Timeline
      </h3>
      
      <div className="space-y-6">
        {sortedRemediations.map((remediation, index) => {
          const IconComponent = getTypeIcon(remediation.remediation_type);
          const typeColor = getTypeColor(remediation.remediation_type);
          
          return (
            <div key={index} className="relative">
              {index < sortedRemediations.length - 1 && (
                <div className="absolute left-6 top-12 w-0.5 h-full bg-gradient-to-b from-primary to-transparent opacity-30"></div>
              )}
              
              <div className="flex gap-4">
                <div className={`w-12 h-12 rounded-full ${typeColor} flex items-center justify-center flex-shrink-0`}>
                  <IconComponent className="w-5 h-5 text-white" />
                </div>
                
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-3 flex-wrap">
                    <Badge className={`${typeColor} text-white border-0`}>
                      {remediation.remediation_type}
                    </Badge>
                    {remediation.vulnerability_id && (
                      <Badge variant="outline" className="border-glass-border text-xs">
                        {remediation.vulnerability_id}
                      </Badge>
                    )}
                    {remediation.release_date && (
                      <div className="text-sm text-muted-foreground">
                        {new Date(remediation.release_date).toLocaleDateString()}
                      </div>
                    )}
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {remediation.description}
                  </p>
                  
                  {remediation.released_in_version && (
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-muted-foreground">Available in version:</span>
                      <Badge variant="outline" className="border-success text-success">
                        {remediation.released_in_version}
                      </Badge>
                    </div>
                  )}
                  
                  {remediation.reasoning && (
                    <div className="p-3 rounded-lg bg-white/5 border border-glass-border">
                      <div className="text-sm font-medium text-foreground mb-1">Technical Reasoning</div>
                      <p className="text-xs text-muted-foreground">{remediation.reasoning}</p>
                    </div>
                  )}
                  
                  {remediation.documentation_url && (
                    <Button variant="outline" size="sm" className="border-glass-border hover:bg-white/10">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Documentation
                    </Button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </GlassCard>
  );
};