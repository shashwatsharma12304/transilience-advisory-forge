// Sample data structure matching the Pydantic model
export const sampleAdvisoryData = {
  metadata: {
    advisory_id: "PA-2025-001",
    title: "Critical Authentication Bypass in Web Framework Components",
    description: "Multiple vulnerabilities discovered in authentication middleware allowing unauthorized access to protected resources.",
    version: "1.2.0",
    status: "Published",
    publication_date: "2025-01-15T10:00:00Z",
    last_modified: "2025-01-15T14:30:00Z",
    authors: ["Security Research Team", "Dr. Sarah Chen", "Marcus Rodriguez"],
    revisions: [
      {
        revision_id: "rev-001",
        date: "2025-01-15T10:00:00Z",
        author: "Security Research Team",
        changes: "Initial publication with 3 critical vulnerabilities identified"
      },
      {
        revision_id: "rev-002", 
        date: "2025-01-15T14:30:00Z",
        author: "Dr. Sarah Chen",
        changes: "Updated CVSS scores and added additional mitigation strategies"
      }
    ],
    classification: "TLP:WHITE",
    change_control: "CHG-2025-0115-001"
  },
  
  vendor: {
    vendor_name: "SecureWeb Technologies",
    product_name: "AuthGuard Framework",
    vendor_website: "https://secureweb.tech",
    security_contact: "security@secureweb.tech",
    support_contact: "support@secureweb.tech"
  },
  
  executive_summary: {
    overview: "A comprehensive security assessment has identified three critical vulnerabilities in the AuthGuard Framework that could allow attackers to bypass authentication mechanisms and gain unauthorized access to protected resources. These vulnerabilities affect multiple versions and require immediate attention.",
    key_metrics: [
      { label: "Total Vulnerabilities", value: 3, unit: "" },
      { label: "Critical Severity", value: 2, unit: "" },
      { label: "High Severity", value: 1, unit: "" },
      { label: "Max CVSS Score", value: 9.1, unit: "" },
      { label: "Affected Versions", value: "12+", unit: "" },
      { label: "Time to Patch", value: "24", unit: "hours" }
    ],
    highlights: [
      "Two critical vulnerabilities with CVSS scores above 9.0",
      "Authentication bypass affecting all user sessions",
      "No authentication required for exploitation",
      "Patches available for all supported versions",
      "Active exploitation detected in the wild",
      "Backwards compatible fixes minimize deployment impact"
    ],
    recommendations: [
      "Apply security patches immediately to all production systems",
      "Implement additional monitoring for authentication anomalies", 
      "Review and rotate all API keys and session tokens",
      "Enable additional logging for security auditing"
    ]
  },
  
  affected_components: [
    {
      component_name: "Authentication Middleware",
      affected_versions: ["v2.1.0", "v2.1.1", "v2.2.0", "v2.2.1"],
      unaffected_versions: ["v2.2.2", "v2.3.0"]
    },
    {
      component_name: "Session Manager",
      affected_versions: ["v1.8.0", "v1.8.1", "v1.9.0"],
      unaffected_versions: ["v1.9.1", "v2.0.0"]
    },
    {
      component_name: "API Gateway",
      affected_versions: ["v3.0.0", "v3.0.1", "v3.1.0"],
      unaffected_versions: ["v3.1.1"]
    }
  ],
  
  vulnerabilities: [
    {
      cve_id: "CVE-2025-0001",
      summary: "Authentication Bypass via JWT Token Manipulation",
      description: "A critical vulnerability in the JWT token validation logic allows attackers to bypass authentication by manipulating token headers. The validation function fails to properly verify the token signature when specific malformed headers are present, leading to unauthorized access to protected endpoints.",
      discovery_date: "2025-01-10T09:15:00Z",
      reporter: "External Security Researcher - John Smith",
      cvss_v3: {
        vector: "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:C/A:H/I:H/C:H",
        baseScore: 9.1,
        severity: "Critical"
      },
      attack_vector: "Remote attackers can send specially crafted HTTP requests with malformed JWT tokens to bypass authentication checks and gain administrative access to the application.",
      impact_scope: "Complete authentication bypass affecting confidentiality, integrity, and availability of all protected resources.",
      proof_of_concept: "https://github.com/security-research/cve-2025-0001-poc",
      affected_components: [
        {
          component_name: "Authentication Middleware",
          affected_versions: ["v2.1.0", "v2.1.1", "v2.2.0", "v2.2.1"],
          unaffected_versions: ["v2.2.2"]
        }
      ]
    },
    {
      cve_id: "CVE-2025-0002", 
      summary: "Session Fixation in Session Manager Component",
      description: "The session manager fails to regenerate session IDs upon successful authentication, allowing attackers to perform session fixation attacks. This vulnerability can be exploited to hijack user sessions and impersonate legitimate users.",
      discovery_date: "2025-01-11T14:22:00Z",
      reporter: "Internal Security Audit Team",
      cvss_v3: {
        vector: "CVSS:3.1/AV:N/AC:H/PR:N/UI:R/S:U/A:H/I:H/C:H",
        baseScore: 7.8,
        severity: "High"
      },
      attack_vector: "Attackers can trick users into visiting malicious websites that set a known session ID, then hijack the session after the user authenticates.",
      impact_scope: "Session hijacking leading to unauthorized access to user accounts and sensitive data.",
      affected_components: [
        {
          component_name: "Session Manager",
          affected_versions: ["v1.8.0", "v1.8.1", "v1.9.0"],
          unaffected_versions: ["v1.9.1"]
        }
      ]
    },
    {
      cve_id: "CVE-2025-0003",
      summary: "API Rate Limiting Bypass in Gateway Component", 
      description: "A flaw in the API Gateway's rate limiting implementation allows attackers to bypass rate limits by manipulating HTTP headers. This can lead to denial of service attacks and resource exhaustion.",
      discovery_date: "2025-01-12T11:45:00Z",
      reporter: "Bug Bounty Program - Alice Johnson",
      cvss_v3: {
        vector: "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/A:H/I:N/C:N",
        baseScore: 7.5,
        severity: "High"
      },
      attack_vector: "Attackers can send high volumes of requests with specially crafted headers to overwhelm the API endpoints and cause service disruption.",
      impact_scope: "Denial of service attacks affecting application availability and performance.",
      affected_components: [
        {
          component_name: "API Gateway",
          affected_versions: ["v3.0.0", "v3.0.1", "v3.1.0"],
          unaffected_versions: ["v3.1.1"]
        }
      ]
    }
  ],
  
  risk_assessments: [
    {
      vulnerability_id: "CVE-2025-0001",
      likelihood: "High",
      impact: "Critical", 
      risk_score: 9.1,
      rationale: "This vulnerability is easily exploitable with no authentication required and provides complete system access.",
      reasoning: "Given the network-accessible attack vector, low complexity, and critical impact on all security aspects, this represents the highest risk priority.",
      threat_actors: ["APT Groups", "Script Kiddies", "Cybercriminals"]
    },
    {
      vulnerability_id: "CVE-2025-0002",
      likelihood: "Medium",
      impact: "High",
      risk_score: 7.8,
      rationale: "Requires user interaction but can lead to complete account takeover when successfully exploited.",
      reasoning: "Social engineering attacks are common, making this vulnerability likely to be exploited despite requiring user interaction.",
      threat_actors: ["Cybercriminals", "State-sponsored groups"]
    },
    {
      vulnerability_id: "CVE-2025-0003", 
      likelihood: "High",
      impact: "Medium",
      risk_score: 7.5,
      rationale: "Easy to exploit and can cause significant service disruption, but limited to availability impact.",
      reasoning: "DoS attacks are frequently used for disruption and extortion, making exploitation highly likely.",
      threat_actors: ["DDoS-for-hire services", "Hacktivists", "Competitors"]
    }
  ],
  
  remediations: [
    {
      vulnerability_id: "CVE-2025-0001",
      remediation_type: "Patch",
      description: "Apply the security patch that implements proper JWT signature validation and header sanitization. The patch includes enhanced token verification logic and improved error handling.",
      released_in_version: "v2.2.2",
      release_date: "2025-01-14T16:00:00Z",
      documentation_url: "https://secureweb.tech/security-updates/jwt-patch-guide",
      reasoning: "The patch addresses the root cause by implementing cryptographically secure token validation with proper header parsing and signature verification."
    },
    {
      vulnerability_id: "CVE-2025-0002",
      remediation_type: "Patch",
      description: "Update to the patched version that implements proper session ID regeneration upon authentication and includes additional session security measures.",
      released_in_version: "v1.9.1",
      release_date: "2025-01-13T12:00:00Z", 
      documentation_url: "https://secureweb.tech/security-updates/session-security-guide",
      reasoning: "The fix implements industry-standard session management practices including session ID regeneration and enhanced session validation."
    },
    {
      vulnerability_id: "CVE-2025-0003",
      remediation_type: "Configuration",
      description: "Configure the API Gateway with updated rate limiting rules and enable header normalization. Also apply the patch for comprehensive protection.",
      released_in_version: "v3.1.1",
      release_date: "2025-01-15T08:00:00Z",
      documentation_url: "https://secureweb.tech/security-updates/gateway-config-guide",
      reasoning: "The solution combines configuration changes for immediate protection with a code fix for long-term security."
    }
  ],

  technical_impacts: [
    {
      vulnerability_id: "CVE-2025-0001",
      functional_impact: "Complete authentication bypass allowing unauthorized access to all protected endpoints and administrative functions.",
      performance_impact: "Minimal performance impact during exploitation, but potential for resource exhaustion under sustained attack.",
      exploitation_details: "Attacker crafts malformed JWT token with specific header combinations, sends HTTP requests to protected endpoints."
    },
    {
      vulnerability_id: "CVE-2025-0002", 
      functional_impact: "Session hijacking leading to impersonation of legitimate users and unauthorized account access.",
      performance_impact: "No direct performance impact, but increased session management overhead during attack.",
      exploitation_details: "Requires social engineering to trick users into visiting attacker-controlled websites that set session cookies."
    },
    {
      vulnerability_id: "CVE-2025-0003",
      functional_impact: "API service degradation and potential complete denial of service for legitimate users.",
      performance_impact: "Severe performance degradation, possible service outage, increased resource consumption.",
      exploitation_details: "High-volume requests with manipulated headers bypass rate limiting, overwhelming backend services."
    }
  ],

  deployment_guidance: {
    environment_requirements: "Deployment requires system restart and configuration file updates. Ensure backup procedures are in place.",
    rollback_plan: "Keep previous version artifacts available. Use blue-green deployment strategy. Automated rollback scripts provided in documentation.",
    testing_procedures: "1. Verify JWT validation in test environment 2. Test session management flows 3. Validate rate limiting effectiveness 4. Performance regression testing"
  },

  distribution: [
    {
      format: "PDF",
      url: "https://security.transilience.ai/advisories/PA-2025-001.pdf"
    },
    {
      format: "HTML", 
      url: "https://security.transilience.ai/advisories/PA-2025-001.html"
    },
    {
      format: "JSON",
      url: "https://security.transilience.ai/advisories/PA-2025-001.json"
    }
  ],

  stakeholder_notifications: [
    {
      audience: "System Administrators",
      method: "Email Alert",
      date: "2025-01-15T10:30:00Z",
      message_template: "Critical security advisory PA-2025-001 published. Immediate action required for AuthGuard Framework installations."
    },
    {
      audience: "Security Teams",
      method: "Security Portal",
      date: "2025-01-15T10:00:00Z",
      message_template: "New critical vulnerabilities identified. Review attached technical details and coordinate patching efforts."
    },
    {
      audience: "End Users",
      method: "In-App Notification",
      date: "2025-01-16T09:00:00Z", 
      message_template: "System maintenance scheduled. Enhanced security measures being implemented."
    }
  ],

  compliance: [
    {
      standard: "PCI DSS",
      status: "Non-compliant until patched",
      gaps: "Authentication bypass violates PCI DSS requirement 8.2 for unique user identification and authentication.",
      remediation_deadline: "2025-01-22T23:59:59Z",
      reasoning: "Financial data processing systems must maintain PCI compliance. 7-day remediation window required."
    },
    {
      standard: "SOC 2 Type II",
      status: "Control deficiency identified",
      gaps: "Session management vulnerabilities impact availability and security commitments.",
      remediation_deadline: "2025-01-29T23:59:59Z",
      reasoning: "Annual audit cycle requires documented remediation before next assessment period."
    }
  ],

  attack_scenarios: [
    {
      scenario_id: "AS-001",
      description: "External attacker discovers JWT bypass vulnerability through automated scanning, crafts exploit to gain administrative access, exfiltrates sensitive customer data.",
      prerequisites: "Network connectivity to target application, knowledge of JWT implementation flaw.",
      mitigation: "Apply security patches immediately, implement additional monitoring for suspicious JWT tokens, enable request logging.",
      reasoning: "Most likely attack vector given the ease of exploitation and high-value target data."
    },
    {
      scenario_id: "AS-002", 
      description: "Insider threat leverages session fixation vulnerability to maintain persistent access after credential rotation or termination.",
      prerequisites: "Initial legitimate access to the application, social engineering capabilities.",
      mitigation: "Mandatory session regeneration, user behavior monitoring, regular access reviews.",
      reasoning: "Insider threats often go undetected longer and can cause significant damage."
    }
  ],

  glossary: [
    {
      term: "JWT",
      definition: "JSON Web Token - A compact, URL-safe means of representing claims to be transferred between two parties."
    },
    {
      term: "CVSS", 
      definition: "Common Vulnerability Scoring System - Industry standard for assessing the severity of security vulnerabilities."
    },
    {
      term: "Session Fixation",
      definition: "Attack technique where an attacker fixes a user's session ID before the user logs in, then hijacks the session after authentication."
    },
    {
      term: "Rate Limiting",
      definition: "Technique to control the rate at which users can make requests to an API or service."
    }
  ],

  appendix: [
    {
      title: "Technical Implementation Details",
      content: "Detailed code analysis showing the specific lines of code affected by each vulnerability, including before and after code samples for the security patches."
    },
    {
      title: "Testing Methodology", 
      content: "Comprehensive description of the security testing approach used to identify these vulnerabilities, including tools, techniques, and validation procedures."
    }
  ],

  acknowledgements: [
    {
      name: "John Smith",
      contribution: "External security researcher who responsibly disclosed CVE-2025-0001 through our bug bounty program."
    },
    {
      name: "Alice Johnson",
      contribution: "Bug bounty participant who identified and reported the API rate limiting bypass vulnerability."
    },
    {
      name: "Internal Security Audit Team",
      contribution: "Thorough security assessment and identification of session management vulnerabilities."
    }
  ],

  references: [
    {
      ref_id: "[1]",
      citation: "OWASP Top 10 2021 - A07: Identification and Authentication Failures",
      url: "https://owasp.org/Top10/A07_2021-Identification_and_Authentication_Failures/"
    },
    {
      ref_id: "[2]", 
      citation: "RFC 7519 - JSON Web Token (JWT)",
      url: "https://tools.ietf.org/html/rfc7519"
    },
    {
      ref_id: "[3]",
      citation: "NIST SP 800-63B - Authentication and Lifecycle Management",
      url: "https://pages.nist.gov/800-63-3/sp800-63b.html"
    },
    {
      ref_id: "[4]",
      citation: "CVE-2025-0001 Proof of Concept Repository", 
      url: "https://github.com/security-research/cve-2025-0001-poc"
    }
  ],

  reasoning: [
    {
      context: "Risk Assessment Methodology",
      explanation: "Risk scores calculated using CVSS base scores combined with likelihood assessment based on attack complexity, required privileges, and known threat actor capabilities."
    },
    {
      context: "Remediation Prioritization",
      explanation: "Critical vulnerabilities addressed first based on CVSS score above 9.0 and confirmed exploitation in the wild. High severity items follow based on business impact assessment."
    }
  ],

  additional_references: [
    "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2025-0001",
    "https://nvd.nist.gov/vuln/detail/CVE-2025-0001", 
    "https://secureweb.tech/security-advisories/",
    "https://www.first.org/cvss/calculator/3.1"
  ]
};