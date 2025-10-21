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
              <Badge variant="secondary" className="rounded-full">Mobile</Badge>
              <Badge variant="secondary" className="rounded-full">E-commerce</Badge>
              <Badge variant="secondary" className="rounded-full">User Research</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              E-commerce Mobile App Redesign
            </h1>
            <p className="text-xl text-muted-foreground">
              Reducing cart abandonment by 35% through improved checkout experience
            </p>
          </div>

          {/* Hero Image */}
          <div className="w-full h-96 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-16" />

          {/* Overview */}
          <section className="mb-16 space-y-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold mb-2 text-foreground">Role</h3>
                <p className="text-muted-foreground">Lead UX Designer</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-foreground">Timeline</h3>
                <p className="text-muted-foreground">3 months (2024)</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-foreground">Team</h3>
                <p className="text-muted-foreground">2 Designers, 3 Developers</p>
              </div>
            </div>
          </section>

          {/* Context */}
          <section className="mb-16 space-y-4">
            <h2 className="text-3xl font-bold text-foreground">The Challenge</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our e-commerce client was experiencing a 65% cart abandonment rate on their mobile app. 
              Users were dropping off during the checkout process, leading to significant revenue loss. 
              The checkout flow was cluttered, required too many steps, and lacked clear progress indicators.
            </p>
          </section>

          {/* Research */}
          <section className="mb-16 space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Research & Discovery</h2>
            <p className="text-muted-foreground leading-relaxed">
              We conducted comprehensive user research including:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span>15 user interviews with customers who abandoned their carts</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span>Analytics analysis revealing major drop-off points</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span>Competitive analysis of top-performing e-commerce apps</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span>Usability testing of the existing checkout flow</span>
              </li>
            </ul>
          </section>

          {/* Key Insights */}
          <section className="mb-16 space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Key Insights</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-secondary rounded-xl">
                <h3 className="font-semibold mb-2 text-foreground">Too Many Steps</h3>
                <p className="text-muted-foreground">
                  The checkout required 7 separate screens, causing user fatigue
                </p>
              </div>
              <div className="p-6 bg-secondary rounded-xl">
                <h3 className="font-semibold mb-2 text-foreground">Lack of Trust</h3>
                <p className="text-muted-foreground">
                  Users felt uncertain about security and didn't see trust indicators
                </p>
              </div>
              <div className="p-6 bg-secondary rounded-xl">
                <h3 className="font-semibold mb-2 text-foreground">Hidden Costs</h3>
                <p className="text-muted-foreground">
                  Shipping costs appeared too late, surprising users at the end
                </p>
              </div>
              <div className="p-6 bg-secondary rounded-xl">
                <h3 className="font-semibold mb-2 text-foreground">Poor Error Handling</h3>
                <p className="text-muted-foreground">
                  Error messages were unclear and didn't help users fix issues
                </p>
              </div>
            </div>
          </section>

          {/* Solution */}
          <section className="mb-16 space-y-6">
            <h2 className="text-3xl font-bold text-foreground">The Solution</h2>
            <p className="text-muted-foreground leading-relaxed">
              We redesigned the checkout flow with these key improvements:
            </p>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-6 py-2">
                <h3 className="font-semibold mb-1 text-foreground">Streamlined Flow</h3>
                <p className="text-muted-foreground">
                  Reduced from 7 screens to 3, combining related information intelligently
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6 py-2">
                <h3 className="font-semibold mb-1 text-foreground">Progress Indicator</h3>
                <p className="text-muted-foreground">
                  Clear visual progress bar showing users exactly where they are
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6 py-2">
                <h3 className="font-semibold mb-1 text-foreground">Upfront Pricing</h3>
                <p className="text-muted-foreground">
                  All costs visible from the start with live cost calculator
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6 py-2">
                <h3 className="font-semibold mb-1 text-foreground">Guest Checkout</h3>
                <p className="text-muted-foreground">
                  Added option to checkout without creating an account
                </p>
              </div>
            </div>
          </section>

          {/* Results */}
          <section className="mb-16 space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Results & Impact</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl">
                <div className="text-4xl font-bold text-primary mb-2">35%</div>
                <p className="text-muted-foreground">Reduction in cart abandonment</p>
              </div>
              <div className="text-center p-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl">
                <div className="text-4xl font-bold text-primary mb-2">2.3x</div>
                <p className="text-muted-foreground">Increase in conversion rate</p>
              </div>
              <div className="text-center p-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl">
                <div className="text-4xl font-bold text-primary mb-2">4.5/5</div>
                <p className="text-muted-foreground">User satisfaction score</p>
              </div>
            </div>
          </section>

          {/* Learnings */}
          <section className="mb-16 space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Key Learnings</h2>
            <p className="text-muted-foreground leading-relaxed">
              This project reinforced the importance of user research in uncovering pain points. 
              Small friction points compound quickly in critical flows like checkout. By focusing 
              on reducing cognitive load and building trust, we achieved significant business impact 
              while improving the user experience.
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
