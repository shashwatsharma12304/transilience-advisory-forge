import { GlassCard } from "@/components/ui/glass-card";
import { ExternalLink } from "lucide-react";

interface ReferenceItem {
  ref_id: string;
  url: string;
}

interface ReferencesSectionProps {
  references: ReferenceItem[];
}

export function SimplifiedReferences({ references }: ReferencesSectionProps) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-6 text-foreground">References</h2>
      <div className="space-y-3">
        {references.map((reference, index) => (
          <div key={index} className="flex items-center space-x-3">
            <span className="text-sm font-medium text-foreground min-w-[3rem]">
              {reference.ref_id}
            </span>
            <a
              href={reference.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-primary hover:text-primary-glow transition-colors group"
            >
              <span className="text-sm break-all">{reference.url}</span>
              <ExternalLink className="h-4 w-4 opacity-60 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}