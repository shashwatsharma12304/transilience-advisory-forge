import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, AlertTriangle, Shield, Clock } from "lucide-react";

interface SummaryMetric {
  label: string;
  value: any;
  unit?: string;
}

interface ExecutiveSummaryProps {
  overview: string;
  keyMetrics: SummaryMetric[];
  highlights: string[];
  recommendations?: string[];
}

export const ExecutiveSummary = ({ overview, keyMetrics, highlights, recommendations }: ExecutiveSummaryProps) => {
  const getMetricIcon = (label: string) => {
    const lower = label.toLowerCase();
    if (lower.includes('vulnerabilit')) return AlertTriangle;
    if (lower.includes('risk') || lower.includes('cvss')) return TrendingUp;
    if (lower.includes('fix') || lower.includes('patch')) return Shield;
    if (lower.includes('time') || lower.includes('date')) return Clock;
    return TrendingUp;
  };

  const getMetricColor = (label: string, value: any) => {
    const lower = label.toLowerCase();
    if (lower.includes('risk') || lower.includes('cvss')) {
      const numValue = typeof value === 'string' ? parseFloat(value) : value;
      if (numValue >= 7) return "danger-gradient";
      if (numValue >= 4) return "warning-gradient";
      return "success-gradient";
    }
    return "brand-gradient";
  };

  return (
    <div className="space-y-6">
      <GlassCard className="p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full brand-gradient"></div>
          Executive Summary
        </h3>
        <p className="text-muted-foreground leading-relaxed">{overview}</p>
      </GlassCard>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {keyMetrics.map((metric, index) => {
          const IconComponent = getMetricIcon(metric.label);
          const colorClass = getMetricColor(metric.label, metric.value);
          
          return (
            <GlassCard key={index} className="p-4 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center justify-between mb-2">
                <IconComponent className="w-5 h-5 text-primary" />
                <Badge className={`${colorClass} text-white border-0 text-xs`}>
                  {metric.value}{metric.unit || ''}
                </Badge>
              </div>
              <div className="text-sm text-muted-foreground">{metric.label}</div>
            </GlassCard>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GlassCard className="p-6">
          <h4 className="font-semibold mb-4 text-foreground">Key Highlights</h4>
          <ul className="space-y-2">
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                {highlight}
              </li>
            ))}
          </ul>
        </GlassCard>

        {recommendations && recommendations.length > 0 && (
          <GlassCard className="p-6">
            <h4 className="font-semibold mb-4 text-foreground">Recommendations</h4>
            <ul className="space-y-2">
              {recommendations.map((rec, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0"></div>
                  {rec}
                </li>
              ))}
            </ul>
          </GlassCard>
        )}
      </div>
    </div>
  );
};