// Sample data structure matching the simplified SectionedAdvisoryReport model
export const simplifiedAdvisoryData = {
  metadata: {
    report_id: "PA-2025-001",
    title: "Critical Authentication Bypass in Web Framework Components",
    publication_date: "2025-01-15T10:00:00Z"
  },
  
  overview: {
    overview: "A comprehensive security assessment has identified three critical vulnerabilities in the AuthGuard Framework that could allow attackers to bypass authentication mechanisms and gain unauthorized access to protected resources. These vulnerabilities affect multiple versions and require immediate attention. Two critical vulnerabilities with CVSS scores above 9.0 have been discovered, allowing authentication bypass affecting all user sessions with no authentication required for exploitation. Patches are available for all supported versions, and active exploitation has been detected in the wild."
  },
  
  vulnerabilities: {
    items: [
      {
        cve: "CVE-2025-0001",
        created_date: "2025-01-10T09:15:00Z",
        vulnerable_product: {
          vendor_name: "SecureWeb Technologies",
          vendor_advisory_title: "Critical Authentication Bypass in AuthGuard Framework",
          vendor_product_name: "AuthGuard Framework",
          vendor_software_name: "Authentication Middleware",
          operating_system: "Cross-platform",
          vendor_advisory_id: "SWTECH-2025-001",
          software_versions_readable: ["v2.1.0", "v2.1.1", "v2.2.0", "v2.2.1"]
        },
        vulnerability_severity: "Critical",
        url: "https://nvd.nist.gov/vuln/detail/CVE-2025-0001"
      },
      {
        cve: "CVE-2025-0002",
        created_date: "2025-01-11T14:22:00Z",
        vulnerable_product: {
          vendor_name: "SecureWeb Technologies",
          vendor_advisory_title: "Session Fixation in Session Manager",
          vendor_product_name: "AuthGuard Framework",
          vendor_software_name: "Session Manager",
          operating_system: "Cross-platform",
          vendor_advisory_id: "SWTECH-2025-002",
          software_versions_readable: ["v1.8.0", "v1.8.1", "v1.9.0"]
        },
        vulnerability_severity: "High",
        url: "https://nvd.nist.gov/vuln/detail/CVE-2025-0002"
      },
      {
        cve: "CVE-2025-0003",
        created_date: "2025-01-12T11:45:00Z",
        vulnerable_product: {
          vendor_name: "SecureWeb Technologies",
          vendor_advisory_title: "API Rate Limiting Bypass in Gateway Component",
          vendor_product_name: "AuthGuard Framework",
          vendor_software_name: "API Gateway",
          operating_system: "Cross-platform",
          vendor_advisory_id: "SWTECH-2025-003",
          software_versions_readable: ["v3.0.0", "v3.0.1", "v3.1.0"]
        },
        vulnerability_severity: "High",
        url: "https://nvd.nist.gov/vuln/detail/CVE-2025-0003"
      }
    ]
  },
  
  impact: {
    items: [
      {
        cve: "CVE-2025-0001",
        impact_description: "Complete authentication bypass allowing unauthorized access to all protected endpoints and administrative functions. This vulnerability enables attackers to manipulate JWT tokens and gain full system access without any credentials. The impact affects confidentiality, integrity, and availability of all protected resources, potentially leading to complete system compromise."
      },
      {
        cve: "CVE-2025-0002",
        impact_description: "Session hijacking leading to impersonation of legitimate users and unauthorized account access. Attackers can perform session fixation attacks to take over user sessions after successful authentication. This results in unauthorized access to user accounts and sensitive data, compromising user privacy and system integrity."
      },
      {
        cve: "CVE-2025-0003",
        impact_description: "API service degradation and potential complete denial of service for legitimate users. The rate limiting bypass allows attackers to overwhelm backend services with high-volume requests, causing severe performance degradation, possible service outage, and increased resource consumption affecting system availability."
      }
    ]
  },
  
  mitigations: {
    items: [
      {
        cve: "CVE-2025-0001",
        mitigation_steps: [
          "Apply security patch v2.2.2 immediately to all production systems",
          "Implement additional monitoring for authentication anomalies and suspicious JWT tokens",
          "Review and rotate all API keys and session tokens",
          "Enable enhanced logging for security auditing and token validation failures",
          "Implement additional JWT signature validation checks as a temporary measure"
        ]
      },
      {
        cve: "CVE-2025-0002",
        mitigation_steps: [
          "Update to patched version v1.9.1 that implements proper session ID regeneration",
          "Configure mandatory session regeneration upon authentication",
          "Implement user behavior monitoring for unusual session patterns",
          "Conduct regular access reviews and session audits",
          "Enable session timeout and automatic logout for idle sessions"
        ]
      },
      {
        cve: "CVE-2025-0003",
        mitigation_steps: [
          "Apply patch v3.1.1 for comprehensive rate limiting protection",
          "Configure API Gateway with updated rate limiting rules immediately",
          "Enable header normalization to prevent bypass techniques",
          "Implement additional DDoS protection and traffic monitoring",
          "Set up automated alerts for unusual traffic patterns and volume spikes"
        ]
      }
    ]
  },
  
  references: {
    references: [
      {
        ref_id: "[1]",
        url: "https://owasp.org/Top10/A07_2021-Identification_and_Authentication_Failures/"
      },
      {
        ref_id: "[2]",
        url: "https://tools.ietf.org/html/rfc7519"
      },
      {
        ref_id: "[3]",
        url: "https://pages.nist.gov/800-63-3/sp800-63b.html"
      },
      {
        ref_id: "[4]",
        url: "https://github.com/security-research/cve-2025-0001-poc"
      },
      {
        ref_id: "[5]",
        url: "https://nvd.nist.gov/vuln/detail/CVE-2025-0001"
      },
      {
        ref_id: "[6]",
        url: "https://nvd.nist.gov/vuln/detail/CVE-2025-0002"
      },
      {
        ref_id: "[7]",
        url: "https://nvd.nist.gov/vuln/detail/CVE-2025-0003"
      },
      {
        ref_id: "[8]",
        url: "https://secureweb.tech/security-advisories/"
      }
    ]
  }
};