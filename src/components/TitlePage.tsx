import { Badge } from "@/components/ui/badge";
import { GlassCard } from "@/components/ui/glass-card";
import { Logo } from "@/components/Logo";
import { Clock } from "lucide-react";

interface TitlePageProps {
  advisoryId: string;
  title: string;
  description: string;
  createdDate: string;
  threatActors?: string[];
  classification?: string;
}

export const TitlePage = ({ 
  advisoryId, 
  title, 
  description, 
  createdDate,
  threatActors = [],
  classification 
}: TitlePageProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary/90 to-primary-glow relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.05),transparent_50%)]" />
      
      <div className="relative z-10 container mx-auto px-8 py-12 min-h-screen flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-4">
            <Logo size="lg" />
            <div className="text-white">
              <h1 className="text-2xl font-bold">Transilience</h1>
            </div>
          </div>
          
          <Badge className="bg-white/20 text-white border-white/30 px-6 py-2 text-sm font-semibold">
            SECURITY ADVISORY
          </Badge>
        </div>

        {/* Central Content */}
        <div className="flex-1 flex flex-col justify-center items-center text-center space-y-8">
          {/* Clock Icon */}
          <div className="w-24 h-24 rounded-full border-4 border-yellow-400 flex items-center justify-center bg-yellow-400/10">
            <Clock className="w-12 h-12 text-yellow-400" />
          </div>

          {/* Main Title */}
          <div className="space-y-4 max-w-4xl">
            <h1 className="text-6xl font-bold text-white leading-tight">
              {title}
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
              {description}
            </p>
          </div>
        </div>

        {/* Bottom Information */}
        <div className="space-y-6">
          {/* Report Details */}
          <div className="flex justify-center gap-6">
            <GlassCard className="px-6 py-4 bg-white/10 border-white/20">
              <div className="text-center">
                <div className="text-sm text-white/70 mb-1">REPORT ID</div>
                <div className="text-white font-mono text-sm">{advisoryId}</div>
              </div>
            </GlassCard>
            
            <GlassCard className="px-6 py-4 bg-white/10 border-white/20">
              <div className="text-center">
                <div className="text-sm text-white/70 mb-1">CREATED</div>
                <div className="text-white font-medium text-sm">{createdDate}</div>
              </div>
            </GlassCard>
          </div>

          {/* Threat Actor */}
          {threatActors.length > 0 && (
            <GlassCard className="p-4 bg-white/10 border-white/20 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-sm text-white/70 mb-2">THREAT ACTOR</div>
                <div className="text-white text-sm">
                  {threatActors.join(", ")}
                </div>
              </div>
            </GlassCard>
          )}

          {/* Classification */}
          {classification && (
            <div className="flex justify-center">
              <GlassCard className="px-6 py-3 bg-white/10 border-white/20">
                <div className="text-center">
                  <div className="text-xs text-white/70 mb-1">CLASSIFICATION</div>
                  <div className="text-yellow-400 font-semibold">{classification}</div>
                </div>
              </GlassCard>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};