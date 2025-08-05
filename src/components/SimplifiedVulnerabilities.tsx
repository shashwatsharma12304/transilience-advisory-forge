import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface VulnerableProduct {
  vendor_name: string;
  vendor_advisory_title?: string;
  vendor_product_name?: string;
  vendor_software_name?: string;
  operating_system?: string;
  vendor_advisory_id?: string;
  software_versions_readable: string[];
}

interface VulnerabilityItem {
  cve?: string;
  created_date: string;
  vulnerable_product: VulnerableProduct;
  vulnerability_severity: string;
  url?: string;
}

interface VulnerabilitiesSectionProps {
  items: VulnerabilityItem[];
}

export function SimplifiedVulnerabilities({ items }: VulnerabilitiesSectionProps) {
  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'critical':
        return 'bg-destructive text-destructive-foreground';
      case 'high':
        return 'bg-warning text-warning-foreground';
      case 'medium':
        return 'bg-accent text-accent-foreground';
      case 'low':
        return 'bg-muted text-muted-foreground';
      default:
        return 'bg-secondary text-secondary-foreground';
    }
  };

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-6 text-foreground">Vulnerabilities</h2>
      <div className="space-y-6">
        {items.map((vulnerability, index) => (
          <GlassCard key={index} className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {vulnerability.cve || `Vulnerability ${index + 1}`}
                </h3>
                <Badge className={getSeverityColor(vulnerability.vulnerability_severity)}>
                  {vulnerability.vulnerability_severity}
                </Badge>
              </div>
              {vulnerability.url && (
                <a
                  href={vulnerability.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-glow transition-colors"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2">Product Information</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p><span className="font-medium">Vendor:</span> {vulnerability.vulnerable_product.vendor_name}</p>
                  {vulnerability.vulnerable_product.vendor_product_name && (
                    <p><span className="font-medium">Product:</span> {vulnerability.vulnerable_product.vendor_product_name}</p>
                  )}
                  {vulnerability.vulnerable_product.vendor_software_name && (
                    <p><span className="font-medium">Component:</span> {vulnerability.vulnerable_product.vendor_software_name}</p>
                  )}
                  {vulnerability.vulnerable_product.operating_system && (
                    <p><span className="font-medium">Platform:</span> {vulnerability.vulnerable_product.operating_system}</p>
                  )}
                  {vulnerability.vulnerable_product.vendor_advisory_id && (
                    <p><span className="font-medium">Advisory ID:</span> {vulnerability.vulnerable_product.vendor_advisory_id}</p>
                  )}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2">Affected Versions</h4>
                <div className="flex flex-wrap gap-2">
                  {vulnerability.vulnerable_product.software_versions_readable.map((version, vIndex) => (
                    <Badge key={vIndex} variant="outline" className="text-xs">
                      {version}
                    </Badge>
                  ))}
                </div>
                
                <div className="mt-4">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Created:</span> {new Date(vulnerability.created_date).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>

            {vulnerability.vulnerable_product.vendor_advisory_title && (
              <div className="mt-4 pt-4 border-t border-border">
                <h4 className="text-sm font-semibold text-foreground mb-2">Advisory Title</h4>
                <p className="text-sm text-muted-foreground">{vulnerability.vulnerable_product.vendor_advisory_title}</p>
              </div>
            )}
          </GlassCard>
        ))}
      </div>
    </section>
  );
}