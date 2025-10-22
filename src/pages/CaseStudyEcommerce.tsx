import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudyEcommerce = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to work
          </Link>

          {/* Hero */}
          <div className="space-y-6 mb-16">
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="rounded-full">B2B SaaS</Badge>
              <Badge variant="secondary" className="rounded-full">Enterprise</Badge>
              <Badge variant="secondary" className="rounded-full">Financial Platform</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Claro Internet Banking Platform
            </h1>
            <p className="text-xl text-muted-foreground">
              Internal banking system for Treasury operations and QR Code payment management
            </p>
          </div>

          {/* Hero Image */}
          <div className="w-full h-96 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl mb-16" />

          {/* Overview */}
          <section className="mb-16 space-y-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold mb-2 text-foreground">Role</h3>
                <p className="text-muted-foreground">Lead UX/UI Designer</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-foreground">Timeline</h3>
                <p className="text-muted-foreground">6 months (2024)</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-foreground">Team</h3>
                <p className="text-muted-foreground">2 UX Designers, 5 Developers, 1 Product Manager</p>
              </div>
            </div>
          </section>

          {/* Context */}
          <section className="mb-16 space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Project Overview</h2>
            <p className="text-muted-foreground leading-relaxed">
              Claro's Treasury, Compliance, and Finance departments needed a centralized platform to manage and track all company QR Code payments. Previously, teams relied on fragmented spreadsheets and external banking tools, leading to operational inefficiencies, compliance risks, and limited visibility into payment flows.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The challenge was to design an internal Internet Banking system that would consolidate payment tracking, enable secure user management, and provide real-time insights while meeting strict security and compliance requirements for an enterprise financial environment.
            </p>
          </section>

          {/* Users & Roles */}
          <section className="mb-16 space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Users & Roles</h2>
            <p className="text-muted-foreground leading-relaxed">
              The platform serves multiple internal stakeholders with distinct needs:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-secondary rounded-xl">
                <h3 className="font-semibold mb-2 text-foreground">Treasury Team</h3>
                <p className="text-muted-foreground">
                  Primary users who initiate, approve, and track QR Code payments across departments
                </p>
              </div>
              <div className="p-6 bg-secondary rounded-xl">
                <h3 className="font-semibold mb-2 text-foreground">Compliance Officers</h3>
                <p className="text-muted-foreground">
                  Monitor transactions for regulatory adherence and audit trails
                </p>
              </div>
              <div className="p-6 bg-secondary rounded-xl">
                <h3 className="font-semibold mb-2 text-foreground">Finance Team</h3>
                <p className="text-muted-foreground">
                  Review financial reports, reconcile payments, and manage budgets
                </p>
              </div>
              <div className="p-6 bg-secondary rounded-xl">
                <h3 className="font-semibold mb-2 text-foreground">Master Users</h3>
                <p className="text-muted-foreground">
                  Admin-level access to create users, assign permissions, and configure system settings
                </p>
              </div>
            </div>
          </section>

          {/* Master User Functionality */}
          <section className="mb-16 space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Master User Functionality</h2>
            <p className="text-muted-foreground leading-relaxed">
              A critical requirement was enabling internal user self-management without IT dependency:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span>Create and provision new internal users with customized access levels</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span>Define granular permissions by department, payment type, and approval thresholds</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span>Audit user activity and maintain compliance logs for security reviews</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span>Quickly revoke access or modify roles when team members change departments</span>
              </li>
            </ul>
          </section>

          {/* UX Approach */}
          <section className="mb-16 space-y-6">
            <h2 className="text-3xl font-bold text-foreground">UX Approach</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our research and design process focused on understanding enterprise workflows:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span>Conducted 12 stakeholder interviews across Treasury, Compliance, and Finance</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span>Mapped existing payment workflows and identified bottlenecks</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span>Created user personas for each role with specific pain points and goals</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span>Developed user flows for critical paths: payment initiation, approval chains, reporting</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span>Iterated on wireframes through multiple rounds of user testing and feedback</span>
              </li>
            </ul>
          </section>

          {/* UI Design */}
          <section className="mb-16 space-y-6">
            <h2 className="text-3xl font-bold text-foreground">UI Design</h2>
            <p className="text-muted-foreground leading-relaxed">
              The interface prioritizes clarity, security, and operational efficiency for financial operations:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-secondary rounded-xl">
                <h3 className="font-semibold mb-2 text-foreground">Dashboard Overview</h3>
                <p className="text-muted-foreground">
                  Real-time payment status, pending approvals, and transaction summaries at a glance
                </p>
              </div>
              <div className="p-6 bg-secondary rounded-xl">
                <h3 className="font-semibold mb-2 text-foreground">Security-First Design</h3>
                <p className="text-muted-foreground">
                  Multi-factor authentication, session timeouts, and visible security indicators
                </p>
              </div>
              <div className="p-6 bg-secondary rounded-xl">
                <h3 className="font-semibold mb-2 text-foreground">Approval Workflows</h3>
                <p className="text-muted-foreground">
                  Clear visual hierarchy for multi-level approval chains with status tracking
                </p>
              </div>
              <div className="p-6 bg-secondary rounded-xl">
                <h3 className="font-semibold mb-2 text-foreground">Data Visualization</h3>
                <p className="text-muted-foreground">
                  Comprehensive charts and reports for financial analysis and compliance audits
                </p>
              </div>
            </div>
          </section>

          {/* Key Features */}
          <section className="mb-16 space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Key Features Delivered</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-6 py-2">
                <h3 className="font-semibold mb-1 text-foreground">Centralized Payment Management</h3>
                <p className="text-muted-foreground">
                  Single platform to initiate, track, and reconcile all QR Code payments across departments
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6 py-2">
                <h3 className="font-semibold mb-1 text-foreground">Role-Based Access Control</h3>
                <p className="text-muted-foreground">
                  Granular permissions system aligned with organizational hierarchy and compliance needs
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6 py-2">
                <h3 className="font-semibold mb-1 text-foreground">Automated Approval Workflows</h3>
                <p className="text-muted-foreground">
                  Configurable multi-level approval chains with notifications and escalation paths
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6 py-2">
                <h3 className="font-semibold mb-1 text-foreground">Comprehensive Audit Trails</h3>
                <p className="text-muted-foreground">
                  Complete transaction history with timestamps, user actions, and compliance reporting
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6 py-2">
                <h3 className="font-semibold mb-1 text-foreground">Self-Service User Management</h3>
                <p className="text-muted-foreground">
                  Master users can independently create and manage internal accounts without IT involvement
                </p>
              </div>
            </div>
          </section>

          {/* Results */}
          <section className="mb-16 space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Impact & Results</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-8 bg-gradient-to-br from-blue-600/10 to-cyan-600/10 rounded-xl">
                <div className="text-4xl font-bold text-primary mb-2">70%</div>
                <p className="text-muted-foreground">Reduction in payment processing time</p>
              </div>
              <div className="text-center p-8 bg-gradient-to-br from-blue-600/10 to-cyan-600/10 rounded-xl">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <p className="text-muted-foreground">Compliance audit trail coverage</p>
              </div>
              <div className="text-center p-8 bg-gradient-to-br from-blue-600/10 to-cyan-600/10 rounded-xl">
                <div className="text-4xl font-bold text-primary mb-2">85%</div>
                <p className="text-muted-foreground">User satisfaction from internal teams</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed pt-4">
              The platform successfully eliminated manual spreadsheet workflows, reduced operational errors by 60%, and provided Treasury teams with real-time visibility into company-wide QR Code payments. Master users reported significant time savings in onboarding new team members, and Compliance officers praised the comprehensive audit capabilities.
            </p>
          </section>

          {/* Learnings */}
          <section className="mb-16 space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Key Learnings</h2>
            <p className="text-muted-foreground leading-relaxed">
              Designing for enterprise B2B SaaS requires deep understanding of complex organizational workflows and security requirements. This project emphasized the importance of balancing robust functionality with intuitive interfaces—users needed powerful permission controls without overwhelming complexity.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Close collaboration with stakeholders from Treasury, Compliance, and Finance was essential to validate assumptions and iterate on solutions that met diverse departmental needs. The self-service user management feature proved particularly valuable, demonstrating how thoughtful UX can reduce IT dependency and empower internal teams.
            </p>
          </section>

          {/* Next Project */}
          <div className="pt-12 border-t border-border">
            <Link 
              to="/case-study/healthcare" 
              className="inline-flex items-center gap-2 text-primary hover:gap-4 transition-all font-medium"
            >
              Next: Healthcare Dashboard Platform
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyEcommerce;
