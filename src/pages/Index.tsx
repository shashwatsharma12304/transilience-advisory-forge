import { TitlePage } from "@/components/TitlePage";
import { Header } from "@/components/Header";
import { ExecutiveSummary } from "@/components/ExecutiveSummary";
import { VulnerabilityCard } from "@/components/VulnerabilityCard";
import { RiskAssessment } from "@/components/RiskAssessment";
import { RemediationTimeline } from "@/components/RemediationTimeline";
import { AffectedComponents } from "@/components/AffectedComponents";
import { TechnicalImpact } from "@/components/TechnicalImpact";
import { DeploymentGuidance } from "@/components/DeploymentGuidance";
import { ComplianceImpact } from "@/components/ComplianceImpact";
import { AttackScenarios } from "@/components/AttackScenarios";
import { Glossary } from "@/components/Glossary";
import { Acknowledgements } from "@/components/Acknowledgements";
import { References } from "@/components/References";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { sampleAdvisoryData } from "@/data/sampleData";
import { Calendar, Users } from "lucide-react";

const Index = () => {
  const { 
    metadata, 
    vendor, 
    executive_summary, 
    affected_components,
    vulnerabilities, 
    risk_assessments, 
    technical_impacts,
    remediations,
    deployment_guidance,
    compliance,
    attack_scenarios,
    glossary,
    acknowledgements,
    references,
    additional_references
  } = sampleAdvisoryData;

  return (
    <div className="min-h-screen">
      {/* Title Page */}
      <TitlePage 
        advisoryId={metadata.advisory_id}
        title={metadata.title}
        description={metadata.description}
        createdDate={new Date(metadata.publication_date).toLocaleDateString()}
        threatActors={["ShinyHunters (suspected)", "Scattered Spider (industry-wide trend, also suspected)"]}
        classification={metadata.classification}
      />

      {/* Report Content */}
      <div className="bg-background">
        {/* Background pattern */}
        <div className="fixed inset-0 bg-gradient-to-br from-primary/20 via-background to-primary-glow/20 pointer-events-none" />
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)] pointer-events-none" />
        
        <div className="relative z-10 container mx-auto px-4 py-8 max-w-7xl space-y-8">
          <Header 
            advisoryId={metadata.advisory_id}
            title={metadata.title}
            status={metadata.status}
            classification={metadata.classification}
          />

          {/* Executive Summary Section */}
          <section className="space-y-6">
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
          </section>

          {/* Affected Components Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Affected Components</h2>
            <AffectedComponents components={affected_components} />
          </section>

          {/* Vulnerabilities Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Vulnerabilities</h2>
            {vulnerabilities.map((vuln, index) => (
              <VulnerabilityCard key={index} {...vuln} />
            ))}
          </section>

          {/* Risk Analysis Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Risk Analysis</h2>
            {risk_assessments.map((risk, index) => (
              <RiskAssessment key={index} {...risk} />
            ))}
          </section>

          {/* Technical Impact Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Technical Impact Analysis</h2>
            <TechnicalImpact impacts={technical_impacts} />
          </section>

          {/* Remediation Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Remediation Timeline</h2>
            <RemediationTimeline remediations={remediations} />
          </section>

          {/* Deployment Guidance Section */}
          {deployment_guidance && (
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Deployment Guidance</h2>
              <DeploymentGuidance guidance={deployment_guidance} />
            </section>
          )}

          {/* Compliance Impact Section */}
          {compliance && compliance.length > 0 && (
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Compliance Impact</h2>
              <ComplianceImpact compliance={compliance} />
            </section>
          )}

          {/* Attack Scenarios Section */}
          {attack_scenarios && attack_scenarios.length > 0 && (
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Attack Scenarios</h2>
              <AttackScenarios scenarios={attack_scenarios} />
            </section>
          )}

          {/* Glossary Section */}
          {glossary && glossary.length > 0 && (
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Glossary</h2>
              <Glossary terms={glossary} />
            </section>
          )}

          {/* Acknowledgements Section */}
          {acknowledgements && acknowledgements.length > 0 && (
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Acknowledgements</h2>
              <Acknowledgements acknowledgements={acknowledgements} />
            </section>
          )}

          {/* References Section - Always at the end */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">References</h2>
            <References references={references} additionalReferences={additional_references} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Index;
