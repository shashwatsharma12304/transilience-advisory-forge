import { TitlePage } from "@/components/TitlePage";
import { SimplifiedOverview } from "@/components/SimplifiedOverview";
import { SimplifiedVulnerabilities } from "@/components/SimplifiedVulnerabilities";
import { SimplifiedImpact } from "@/components/SimplifiedImpact";
import { SimplifiedMitigations } from "@/components/SimplifiedMitigations";
import { SimplifiedReferences } from "@/components/SimplifiedReferences";
import { Footer } from "@/components/Footer";
import { simplifiedAdvisoryData } from "@/data/simplifiedSampleData";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Title Page */}
      <TitlePage data={simplifiedAdvisoryData} />
      
      {/* Page Break */}
      <div className="page-break" />
      
      {/* Report Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Overview */}
        <SimplifiedOverview overview={simplifiedAdvisoryData.overview.overview} />
        
        {/* Vulnerabilities */}
        <SimplifiedVulnerabilities items={simplifiedAdvisoryData.vulnerabilities.items} />
        
        {/* Impact Assessment */}
        <SimplifiedImpact items={simplifiedAdvisoryData.impact.items} />
        
        {/* Mitigations */}
        <SimplifiedMitigations items={simplifiedAdvisoryData.mitigations.items} />
        
        {/* References */}
        <SimplifiedReferences references={simplifiedAdvisoryData.references.references} />
        
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Index;