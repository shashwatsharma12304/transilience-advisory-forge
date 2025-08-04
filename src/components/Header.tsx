import { Logo } from "@/components/Logo";
import { Badge } from "@/components/ui/badge";
import { GlassCard } from "@/components/ui/glass-card";

interface HeaderProps {
  advisoryId: string;
  title: string;
  status: string;
  classification?: string;
}

export const Header = ({ advisoryId, title, status, classification }: HeaderProps) => {
  const getStatusVariant = (status: string) => {
    switch (status.toLowerCase()) {
      case "published": return "success-gradient";
      case "draft": return "warning-gradient";
      case "deprecated": return "danger-gradient";
      default: return "brand-gradient";
    }
  };

  return (
    <GlassCard className="p-6 mb-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <Logo size="lg" />
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Transilience.ai
            </h1>
            <p className="text-muted-foreground">Product Advisory Report</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Badge className={`${getStatusVariant(status)} text-white border-0 px-3 py-1`}>
            {status}
          </Badge>
          {classification && (
            <Badge variant="outline" className="border-glass-border">
              {classification}
            </Badge>
          )}
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="text-sm text-muted-foreground">Advisory ID: {advisoryId}</div>
        <h2 className="text-xl font-semibold text-foreground">{title}</h2>
      </div>
    </GlassCard>
  );
};