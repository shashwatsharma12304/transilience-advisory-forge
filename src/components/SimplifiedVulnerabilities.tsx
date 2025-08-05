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
      <div className="space-y-8">
        {items.map((vulnerability, index) => (
          <div key={index} className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <h3 className="text-xl font-semibold text-foreground">
                  {vulnerability.cve || `Vulnerability ${index + 1}`}
                </h3>
                <Badge className={getSeverityColor(vulnerability.vulnerability_severity)}>
                  {vulnerability.vulnerability_severity}
                </Badge>
                {vulnerability.url && (
                  <a
                    href={vulnerability.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-glow transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Vendor:</span> {vulnerability.vulnerable_product.vendor_name}
                </p>
                {vulnerability.vulnerable_product.vendor_product_name && (
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">Product:</span> {vulnerability.vulnerable_product.vendor_product_name}
                  </p>
                )}
                {vulnerability.vulnerable_product.vendor_software_name && (
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">Component:</span> {vulnerability.vulnerable_product.vendor_software_name}
                  </p>
                )}
              </div>

              <div>
                {vulnerability.vulnerable_product.operating_system && (
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">Operating System:</span> {vulnerability.vulnerable_product.operating_system}
                  </p>
                )}
                {vulnerability.vulnerable_product.vendor_advisory_id && (
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">Advisory ID:</span> {vulnerability.vulnerable_product.vendor_advisory_id}
                  </p>
                )}
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Created:</span> {new Date(vulnerability.created_date).toLocaleDateString()}
                </p>
              </div>

              <div>
                <p className="text-muted-foreground mb-2">
                  <span className="font-medium text-foreground">Affected Versions:</span>
                </p>
                <div className="flex flex-wrap gap-1">
                  {vulnerability.vulnerable_product.software_versions_readable.map((version, vIndex) => (
                    <Badge key={vIndex} variant="outline" className="text-xs">
                      {version}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {vulnerability.vulnerable_product.vendor_advisory_title && (
              <div className="pt-3 border-t border-border">
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Advisory Title:</span> {vulnerability.vulnerable_product.vendor_advisory_title}
                </p>
              </div>
            )}
            
            {index < items.length - 1 && <hr className="border-border mt-6" />}
          </div>
        ))}
      </div>
    </section>
  );
}