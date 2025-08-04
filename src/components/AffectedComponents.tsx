import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { Package, CheckCircle, XCircle } from "lucide-react";

interface AffectedComponent {
  component_name: string;
  affected_versions: string[];
  unaffected_versions?: string[];
}

interface AffectedComponentsProps {
  components: AffectedComponent[];
}

export const AffectedComponents = ({ components }: AffectedComponentsProps) => {
  return (
    <GlassCard className="p-6">
      <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
        <Package className="w-5 h-5 text-primary" />
        Affected Components
      </h3>
      <div className="space-y-6">
        {components.map((component, index) => (
          <div key={index} className="border-l-2 border-primary/30 pl-4">
            <h4 className="font-medium text-foreground mb-3">{component.component_name}</h4>
            
            <div className="space-y-3">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <XCircle className="w-4 h-4 text-destructive" />
                  <span className="text-sm text-muted-foreground">Affected Versions</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {component.affected_versions.map((version, vIndex) => (
                    <Badge key={vIndex} variant="destructive" className="text-xs">
                      {version}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {component.unaffected_versions && component.unaffected_versions.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-muted-foreground">Unaffected Versions</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {component.unaffected_versions.map((version, vIndex) => (
                      <Badge key={vIndex} variant="outline" className="border-green-500/50 text-green-500 text-xs">
                        {version}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
};