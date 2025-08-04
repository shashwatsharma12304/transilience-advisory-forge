import { GlassCard } from "@/components/ui/glass-card";
import { Heart } from "lucide-react";

interface Acknowledgement {
  name: string;
  contribution: string;
}

interface AcknowledgementsProps {
  acknowledgements: Acknowledgement[];
}

export const Acknowledgements = ({ acknowledgements }: AcknowledgementsProps) => {
  return (
    <GlassCard className="p-6">
      <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
        <Heart className="w-5 h-5 text-primary" />
        Acknowledgements
      </h3>
      
      <div className="space-y-4">
        {acknowledgements.map((ack, index) => (
          <div key={index} className="border-l-2 border-primary/30 pl-4">
            <div className="font-medium text-foreground mb-1">{ack.name}</div>
            <div className="text-sm text-muted-foreground">{ack.contribution}</div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
};