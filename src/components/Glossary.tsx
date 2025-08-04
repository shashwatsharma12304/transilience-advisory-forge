import { GlassCard } from "@/components/ui/glass-card";
import { BookOpen } from "lucide-react";

interface GlossaryTerm {
  term: string;
  definition: string;
}

interface GlossaryProps {
  terms: GlossaryTerm[];
}

export const Glossary = ({ terms }: GlossaryProps) => {
  return (
    <GlassCard className="p-6">
      <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
        <BookOpen className="w-5 h-5 text-primary" />
        Glossary
      </h3>
      
      <div className="space-y-4">
        {terms.map((term, index) => (
          <div key={index} className="border-l-2 border-primary/30 pl-4">
            <dt className="font-medium text-foreground mb-1">{term.term}</dt>
            <dd className="text-sm text-muted-foreground">{term.definition}</dd>
          </div>
        ))}
      </div>
    </GlassCard>
  );
};