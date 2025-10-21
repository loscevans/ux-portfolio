import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudyHealthcare = () => {
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
              <Badge variant="secondary" className="rounded-full">Dashboard</Badge>
              <Badge variant="secondary" className="rounded-full">Healthcare</Badge>
              <Badge variant="secondary" className="rounded-full">Data Visualization</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Healthcare Dashboard Platform
            </h1>
            <p className="text-xl text-muted-foreground">
              Empowering medical professionals with intuitive patient data management
            </p>
          </div>

          {/* Hero Image */}
          <div className="w-full h-96 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-16" />

          {/* Overview */}
          <section className="mb-16 space-y-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold mb-2 text-foreground">Role</h3>
                <p className="text-muted-foreground">Senior UX Designer</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-foreground">Timeline</h3>
                <p className="text-muted-foreground">4 months (2024)</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-foreground">Team</h3>
                <p className="text-muted-foreground">3 Designers, 5 Developers, 2 Medical Advisors</p>
              </div>
            </div>
          </section>

          {/* Context */}
          <section className="mb-16 space-y-4">
            <h2 className="text-3xl font-bold text-foreground">The Challenge</h2>
            <p className="text-muted-foreground leading-relaxed">
              A healthcare provider needed a comprehensive dashboard for doctors and nurses to manage 
              patient data, track vital signs, view medical history, and coordinate care. The existing 
              system was outdated, difficult to navigate, and led to inefficiencies that impacted patient care.
            </p>
          </section>

          {/* Research */}
          <section className="mb-16 space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Research & Discovery</h2>
            <p className="text-muted-foreground leading-relaxed">
              We immersed ourselves in the healthcare environment to understand real workflows:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span>Shadowed 12 medical professionals during their shifts</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span>Conducted contextual inquiries in hospital settings</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span>Analyzed incident reports related to information access issues</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span>Mapped existing workflows and pain points with stakeholders</span>
              </li>
            </ul>
          </section>

          {/* Key Insights */}
          <section className="mb-16 space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Key Insights</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-secondary rounded-xl">
                <h3 className="font-semibold mb-2 text-foreground">Information Overload</h3>
                <p className="text-muted-foreground">
                  Doctors struggled to find critical information quickly among excessive data
                </p>
              </div>
              <div className="p-6 bg-secondary rounded-xl">
                <h3 className="font-semibold mb-2 text-foreground">Time Pressure</h3>
                <p className="text-muted-foreground">
                  Medical staff had only seconds to access patient data during emergencies
                </p>
              </div>
              <div className="p-6 bg-secondary rounded-xl">
                <h3 className="font-semibold mb-2 text-foreground">Context Switching</h3>
                <p className="text-muted-foreground">
                  Moving between multiple systems disrupted workflow and caused errors
                </p>
              </div>
              <div className="p-6 bg-secondary rounded-xl">
                <h3 className="font-semibold mb-2 text-foreground">Accessibility Issues</h3>
                <p className="text-muted-foreground">
                  Poor contrast and small text were problematic in various lighting conditions
                </p>
              </div>
            </div>
          </section>

          {/* Solution */}
          <section className="mb-16 space-y-6">
            <h2 className="text-3xl font-bold text-foreground">The Solution</h2>
            <p className="text-muted-foreground leading-relaxed">
              We designed a unified dashboard that prioritizes critical information and adapts to different user needs:
            </p>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-6 py-2">
                <h3 className="font-semibold mb-1 text-foreground">Information Hierarchy</h3>
                <p className="text-muted-foreground">
                  Surfaced vital signs and alerts prominently with customizable views by role
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6 py-2">
                <h3 className="font-semibold mb-1 text-foreground">Quick Actions</h3>
                <p className="text-muted-foreground">
                  Implemented one-click access to frequently performed tasks
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6 py-2">
                <h3 className="font-semibold mb-1 text-foreground">Visual Data Representation</h3>
                <p className="text-muted-foreground">
                  Created intuitive charts showing trends in patient vitals over time
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6 py-2">
                <h3 className="font-semibold mb-1 text-foreground">Alert System</h3>
                <p className="text-muted-foreground">
                  Designed color-coded, context-aware alerts that don't overwhelm users
                </p>
              </div>
            </div>
          </section>

          {/* Design Process */}
          <section className="mb-16 space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Design Process</h2>
            <p className="text-muted-foreground leading-relaxed">
              Due to the critical nature of healthcare applications, we followed a rigorous iterative process:
            </p>
            <div className="space-y-6 mt-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-foreground">Low-fidelity wireframes</h3>
                  <p className="text-muted-foreground">Rapid sketching sessions with medical staff</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-foreground">Interactive prototypes</h3>
                  <p className="text-muted-foreground">High-fidelity mockups tested in simulated scenarios</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-foreground">Usability testing</h3>
                  <p className="text-muted-foreground">Testing with 20+ medical professionals across 3 rounds</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-foreground">Pilot program</h3>
                  <p className="text-muted-foreground">Two-week trial in one hospital unit before full rollout</p>
                </div>
              </div>
            </div>
          </section>

          {/* Results */}
          <section className="mb-16 space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Results & Impact</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-8 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl">
                <div className="text-4xl font-bold text-primary mb-2">42%</div>
                <p className="text-muted-foreground">Faster information retrieval</p>
              </div>
              <div className="text-center p-8 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl">
                <div className="text-4xl font-bold text-primary mb-2">68%</div>
                <p className="text-muted-foreground">Reduction in navigation errors</p>
              </div>
              <div className="text-center p-8 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl">
                <div className="text-4xl font-bold text-primary mb-2">94%</div>
                <p className="text-muted-foreground">Staff satisfaction rate</p>
              </div>
            </div>
          </section>

          {/* Learnings */}
          <section className="mb-16 space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Key Learnings</h2>
            <p className="text-muted-foreground leading-relaxed">
              Designing for healthcare requires deep empathy and understanding of life-critical contexts. 
              The importance of accessibility, clarity, and speed cannot be overstated when seconds matter 
              for patient outcomes. Close collaboration with domain experts and iterative testing were 
              essential to creating a truly effective solution.
            </p>
          </section>

          {/* Next Project */}
          <div className="pt-12 border-t border-border">
            <Link 
              to="/case-study/ecommerce" 
              className="inline-flex items-center gap-2 text-primary hover:gap-4 transition-all font-medium"
            >
              Next: E-commerce Mobile App Redesign
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyHealthcare;
