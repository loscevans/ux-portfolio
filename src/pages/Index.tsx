import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const projects = [
    {
      id: 1,
      title: "Claro Internet Banking Platform",
      description: "B2B SaaS solution for internal Treasury operations and QR Code payment management",
      tags: ["B2B SaaS", "Enterprise", "Financial Platform"],
      image: "bg-gradient-to-br from-blue-600 to-cyan-600",
      link: "/case-study/ecommerce"
    },
    {
      id: 2,
      title: "Claro Pay Design System",
      description: "Building a unified foundation for scalable, consistent product experiences",
      tags: ["Design System", "Enterprise", "System Thinking"],
      image: "bg-gradient-to-br from-purple-500 to-pink-500",
      link: "/case-study/healthcare"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-6">
            <Badge variant="secondary" className="rounded-full px-4 py-1">
              UX Designer & Researcher
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              Crafting meaningful digital experiences
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              I'm a UX designer passionate about solving complex problems through research, 
              empathy, and thoughtful design. Based in São Paulo, Brazil.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-12 text-foreground">Selected Work</h2>
          
          <div className="grid gap-8">
            {projects.map((project) => (
              <Link key={project.id} to={project.link}>
                <Card className="overflow-hidden border-border hover:border-primary transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-5 gap-0">
                      <div className={`${project.image} h-64 md:h-auto md:col-span-2 relative`}>
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                      </div>
                      <div className="p-8 md:col-span-3 flex flex-col justify-center">
                        <div className="space-y-4">
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                              <Badge key={tag} variant="outline" className="rounded-full">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {project.description}
                          </p>
                          <div className="flex items-center gap-2 text-primary font-medium pt-2">
                            View case study <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border mt-20">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2024 UX Portfolio. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                LinkedIn
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Dribbble
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Behance
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
