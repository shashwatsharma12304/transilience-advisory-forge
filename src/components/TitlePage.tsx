import { Badge } from "@/components/ui/badge";
import { GlassCard } from "@/components/ui/glass-card";
import { Logo } from "@/components/Logo";
import { Clock } from "lucide-react";

interface TitlePageProps {
  data: {
    metadata: {
      report_id: string;
      title: string;
      publication_date: string;
    };
  };
}

export const TitlePage = ({ data }: TitlePageProps) => {
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
              {data.metadata.title}
            </h1>
          </div>
        </div>

        {/* Bottom Information */}
        <div className="space-y-6">
          {/* Report Details */}
          <div className="flex justify-center gap-6">
            <GlassCard className="px-6 py-4 bg-white/10 border-white/20">
              <div className="text-center">
                <div className="text-sm text-white/70 mb-1">REPORT ID</div>
                <div className="text-white font-mono text-sm">{data.metadata.report_id}</div>
              </div>
            </GlassCard>
            
            <GlassCard className="px-6 py-4 bg-white/10 border-white/20">
              <div className="text-center">
                <div className="text-sm text-white/70 mb-1">PUBLISHED</div>
                <div className="text-white font-medium text-sm">
                  {new Date(data.metadata.publication_date).toLocaleDateString()}
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
};