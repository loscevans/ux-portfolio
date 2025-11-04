import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import designSystemImage from "@/assets/design-system-mobile.png";
import tokenSystemImage from "@/assets/token-system.png";

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
              <Badge variant="secondary" className="rounded-full">Design System</Badge>
              <Badge variant="secondary" className="rounded-full">Enterprise</Badge>
              <Badge variant="secondary" className="rounded-full">System Thinking</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Claro Pay Design System
            </h1>
            <p className="text-xl text-muted-foreground">
              Building a unified foundation for scalable, consistent product experiences
            </p>
          </div>

          {/* Hero Image */}
          <img 
            src={designSystemImage} 
            alt="Claro Pay Design System Mobile"
            className="w-full h-auto rounded-2xl mb-16 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.18)] transition-shadow duration-300"
          />

          {/* Overview */}
          <section className="mb-16 space-y-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold mb-2 text-foreground">Role</h3>
                <p className="text-muted-foreground">Lead Product Designer</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-foreground">Timeline</h3>
                <p className="text-muted-foreground">8 months (2024)</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-foreground">Team</h3>
                <p className="text-muted-foreground">5 Designers, 8 Developers, Product & Marketing</p>
              </div>
            </div>
          </section>

          {/* Context */}
          <section className="mb-16 space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Project Overview</h2>
            <p className="text-muted-foreground leading-relaxed">
              Claro Pay's rapid growth led to design fragmentation across 12+ product squads. Each team 
              created their own components, resulting in inconsistent user experiences, duplicated efforts, 
              and slow delivery times. The challenge was to audit the entire ecosystem and create a unified 
              Design System that would serve as the foundation for all future product development while 
              respecting team-specific needs.
            </p>
          </section>

          {/* Audit Process */}
          <section className="mb-16 space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Audit Process</h2>
            <p className="text-muted-foreground leading-relaxed">
              We conducted a comprehensive audit across all product teams to understand the current state:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span>Cataloged 200+ components across 12 squad repositories</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span>Mapped visual patterns, identifying 47 button variations for similar functions</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span>Interviewed designers and developers from each team to understand their needs</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span>Created a visual inventory showcasing inconsistencies and duplication</span>
              </li>
            </ul>
          </section>

          {/* Building Blocks Strategy */}
          <section className="mb-16 space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Building Blocks Strategy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We developed a strategic framework to categorize components based on their usage:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-secondary rounded-xl">
                <h3 className="font-semibold mb-2 text-foreground">Foundation Layer</h3>
                <p className="text-muted-foreground">
                  Core primitives (colors, typography, spacing) shared across all teams
                </p>
              </div>
              <div className="p-6 bg-secondary rounded-xl">
                <h3 className="font-semibold mb-2 text-foreground">Common Components</h3>
                <p className="text-muted-foreground">
                  85% reusable components (buttons, inputs, cards) used company-wide
                </p>
              </div>
              <div className="p-6 bg-secondary rounded-xl">
                <h3 className="font-semibold mb-2 text-foreground">Squad-Specific Blocks</h3>
                <p className="text-muted-foreground">
                  Specialized components unique to specific product areas
                </p>
              </div>
              <div className="p-6 bg-secondary rounded-xl">
                <h3 className="font-semibold mb-2 text-foreground">Composition Patterns</h3>
                <p className="text-muted-foreground">
                  Guidelines for combining blocks to create consistent interfaces
                </p>
              </div>
            </div>
          </section>

          {/* Foundation & Tokens */}
          <section className="mb-16 space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Foundation & Tokens</h2>
            <p className="text-muted-foreground leading-relaxed">
              Following Material Design 3 principles, we established a robust token system:
            </p>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-6 py-2">
                <h3 className="font-semibold mb-1 text-foreground">Primitive Tokens</h3>
                <p className="text-muted-foreground">
                  Base values (colors, sizes, shadows) that serve as the foundation
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6 py-2">
                <h3 className="font-semibold mb-1 text-foreground">Semantic Tokens</h3>
                <p className="text-muted-foreground">
                  Contextual values (primary, error, success) that reference primitives
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6 py-2">
                <h3 className="font-semibold mb-1 text-foreground">Component Tokens</h3>
                <p className="text-muted-foreground">
                  Specific properties for each component ensuring consistency
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6 py-2">
                <h3 className="font-semibold mb-1 text-foreground">Dark Mode Support</h3>
                <p className="text-muted-foreground">
                  Complete theme system with automatic light/dark mode switching
                </p>
              </div>
            </div>
            
            {/* Token System Visual */}
            <div className="mt-8">
              <img 
                src={tokenSystemImage} 
                alt="Token System Architecture"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </section>

          {/* Collaboration & Alignment */}
          <section className="mb-16 space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Collaboration & Alignment</h2>
            <p className="text-muted-foreground leading-relaxed">
              Success required extensive cross-functional alignment across the organization:
            </p>
            <div className="space-y-6 mt-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-foreground">Squad Workshops</h3>
                  <p className="text-muted-foreground">24 co-creation sessions with product teams to define needs and priorities</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-foreground">Developer Partnership</h3>
                  <p className="text-muted-foreground">Weekly syncs with engineering to ensure technical feasibility and adoption</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-foreground">Design Governance</h3>
                  <p className="text-muted-foreground">Established review processes and contribution guidelines for scalability</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-foreground">Marketing Alignment</h3>
                  <p className="text-muted-foreground">Coordinated with brand team to ensure consistency across touchpoints</p>
                </div>
              </div>
            </div>
          </section>

          {/* Adoption Metrics */}
          <section className="mb-16 space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Adoption Metrics</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The Design System achieved significant measurable impact across the organization:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center p-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl">
                <div className="text-4xl font-bold text-primary mb-2">85%</div>
                <p className="text-muted-foreground">Component reuse across teams</p>
              </div>
              <div className="text-center p-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl">
                <div className="text-4xl font-bold text-primary mb-2">70%</div>
                <p className="text-muted-foreground">Reduction in design handoff inconsistencies</p>
              </div>
              <div className="text-center p-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl">
                <div className="text-4xl font-bold text-primary mb-2">+40%</div>
                <p className="text-muted-foreground">Faster interface creation time</p>
              </div>
              <div className="text-center p-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl">
                <div className="text-4xl font-bold text-primary mb-2">12+</div>
                <p className="text-muted-foreground">Squads adopted company-wide</p>
              </div>
            </div>
          </section>

          {/* Outcome */}
          <section className="mb-16 space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Outcome</h2>
            <p className="text-muted-foreground leading-relaxed">
              The Claro Pay Design System transformed how teams work, establishing a shared language 
              between design and development. The system reduced duplication, accelerated delivery, 
              and ensured consistent experiences across all touchpoints. Most importantly, it empowered 
              teams to focus on solving user problems rather than reinventing basic components. The 
              collaborative approach and strategic thinking established a foundation for sustainable, 
              scalable growth as the organization continues to evolve.
            </p>
          </section>

          {/* Next Project */}
          <div className="pt-12 border-t border-border">
            <Link 
              to="/case-study/claro-internet-banking" 
              className="inline-flex items-center gap-2 text-primary hover:gap-4 transition-all font-medium"
            >
              Next: Claro Internet Banking Platform
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border mt-20">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2024 UX Portfolio. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="https://www.linkedin.com/in/pdvscl/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CaseStudyHealthcare;
