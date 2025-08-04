import { Header } from "@/components/Header";
import { ExecutiveSummary } from "@/components/ExecutiveSummary";
import { VulnerabilityCard } from "@/components/VulnerabilityCard";
import { RiskAssessment } from "@/components/RiskAssessment";
import { RemediationTimeline } from "@/components/RemediationTimeline";
import { GlassCard } from "@/components/ui/glass-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { sampleAdvisoryData } from "@/data/sampleData";
import { Calendar, Users, FileText, Shield, TrendingUp, AlertTriangle } from "lucide-react";

const Index = () => {
  const { metadata, vendor, executive_summary, vulnerabilities, risk_assessments, remediations } = sampleAdvisoryData;

  return (
    <div className="min-h-screen bg-background">
      {/* Glassmorphic background pattern */}
      <div className="fixed inset-0 bg-gradient-to-br from-primary/20 via-background to-primary-glow/20 pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)] pointer-events-none" />
      
      <div className="relative z-10 container mx-auto px-4 py-8 max-w-7xl">
        <Header 
          advisoryId={metadata.advisory_id}
          title={metadata.title}
          status={metadata.status}
          classification={metadata.classification}
        />

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="glass-card border-glass-border">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="vulnerabilities" className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              Vulnerabilities
            </TabsTrigger>
            <TabsTrigger value="risk" className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Risk Analysis
            </TabsTrigger>
            <TabsTrigger value="remediation" className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Remediation
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <ExecutiveSummary 
              overview={executive_summary.overview}
              keyMetrics={executive_summary.key_metrics}
              highlights={executive_summary.highlights}
              recommendations={executive_summary.recommendations}
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <GlassCard className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Vendor Information
                </h3>
                <div className="space-y-3">
                  <div>
                    <div className="text-sm text-muted-foreground">Vendor</div>
                    <div className="font-medium">{vendor.vendor_name}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Product</div>
                    <div className="font-medium">{vendor.product_name}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Security Contact</div>
                    <div className="font-medium">{vendor.security_contact}</div>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  Report Details
                </h3>
                <div className="space-y-3">
                  <div>
                    <div className="text-sm text-muted-foreground">Version</div>
                    <div className="font-medium">{metadata.version}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Published</div>
                    <div className="font-medium">{new Date(metadata.publication_date).toLocaleDateString()}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Authors</div>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {metadata.authors.map((author, index) => (
                        <Badge key={index} variant="outline" className="border-glass-border text-xs">
                          {author}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </TabsContent>

          <TabsContent value="vulnerabilities" className="space-y-6">
            {vulnerabilities.map((vuln, index) => (
              <VulnerabilityCard key={index} {...vuln} />
            ))}
          </TabsContent>

          <TabsContent value="risk" className="space-y-6">
            {risk_assessments.map((risk, index) => (
              <RiskAssessment key={index} {...risk} />
            ))}
          </TabsContent>

          <TabsContent value="remediation" className="space-y-6">
            <RemediationTimeline remediations={remediations} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
