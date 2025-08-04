import { GlassCard } from "@/components/ui/glass-card";
import { ExternalLink, FileText, Link2 } from "lucide-react";

interface Reference {
  ref_id: string;
  citation: string;
  url?: string;
}

interface ReferencesProps {
  references: Reference[];
  additionalReferences?: string[];
}

export const References = ({ references, additionalReferences }: ReferencesProps) => {
  return (
    <div className="space-y-6">
      <GlassCard className="p-6">
        <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
          <FileText className="w-5 h-5 text-primary" />
          References
        </h3>
        
        <div className="space-y-4">
          {references.map((ref, index) => (
            <div key={index} className="flex gap-3">
              <span className="font-mono text-sm text-primary min-w-[2.5rem]">
                {ref.ref_id}
              </span>
              <div className="flex-1">
                <p className="text-sm text-foreground mb-1">{ref.citation}</p>
                {ref.url && (
                  <a 
                    href={ref.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-primary hover:text-primary/80 flex items-center gap-1"
                  >
                    <ExternalLink className="w-3 h-3" />
                    {ref.url}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </GlassCard>

      {additionalReferences && additionalReferences.length > 0 && (
        <GlassCard className="p-6">
          <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
            <Link2 className="w-5 h-5 text-primary" />
            Additional References
          </h3>
          
          <div className="space-y-2">
            {additionalReferences.map((url, index) => (
              <div key={index} className="flex items-center gap-2">
                <ExternalLink className="w-3 h-3 text-primary flex-shrink-0" />
                <a 
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs text-primary hover:text-primary/80 break-all"
                >
                  {url}
                </a>
              </div>
            ))}
          </div>
        </GlassCard>
      )}
    </div>
  );
};