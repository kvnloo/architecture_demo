import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Layers, Sparkles, FileText } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Layers className="h-6 w-6 text-primary" />
            <span className="text-lg font-semibold">Architecture Universe</span>
          </div>
          <div className="flex items-center space-x-6">
            <Link
              href="/"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/universe/incredibles"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Portfolio
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />

        <div className="container mx-auto px-4 py-24 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="mx-auto" variant="outline">
              <Sparkles className="h-3 w-3 mr-1" />
              AI-Generated Architecture
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Architecture Portfolio{" "}
              <span className="text-primary">Universe</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A collection of architectural portfolios showcasing AI-generated
              visualizations, detailed research, and comprehensive documentation
              across various fictional and real-world architectural projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/universe/incredibles">
                  Explore Portfolio
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Project</h2>
            <p className="text-muted-foreground">
              The Incredibles: Parr Residence - A Mid-Century Modern Masterpiece
            </p>
          </div>

          <Card className="overflow-hidden border-border/50">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-[400px] md:h-auto">
                <Image
                  src="/images/incredibles/three_quarter_exterior_southwest.png"
                  alt="Parr Residence Exterior"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8 flex flex-col justify-center space-y-6">
                <div>
                  <div className="flex gap-2 mb-4">
                    <Badge>Mid-Century Modern</Badge>
                    <Badge variant="secondary">20,000 sq ft</Badge>
                  </div>

                  <h3 className="text-2xl font-bold mb-3">
                    The Parr Residence
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-4">
                    A comprehensive architectural documentation of the iconic
                    mansion from Pixar's <em>Incredibles 2</em>. This portfolio
                    translates the animated design into buildable, high-end
                    residential architecture.
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-sm uppercase tracking-wide text-primary">
                    Key Features
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Hyperbolic paraboloid roof inspired by 1961 Connecticut residence</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Dramatic cliffside integration with cascading waterfall</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Floor-to-ceiling glass curtain walls throughout</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>4.6-acre forested site with panoramic city views</span>
                    </li>
                  </ul>
                </div>

                <Button className="w-full sm:w-auto" asChild>
                  <Link href="/universe/incredibles">
                    View Complete Portfolio
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Separator className="container mx-auto my-16" />

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">About This Project</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Exploring the intersection of architectural design and AI image
              generation to create professional-grade architectural portfolios
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <FileText className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Detailed Research</CardTitle>
                <CardDescription>
                  Comprehensive architectural analysis and material specifications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Each portfolio includes in-depth architectural research,
                  spatial relationships, and detailed design documentation that
                  informs every visualization.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Sparkles className="h-10 w-10 text-primary mb-2" />
                <CardTitle>AI Generation</CardTitle>
                <CardDescription>
                  Powered by Google Gemini 2.5 Flash and Imagen models
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Leveraging cutting-edge AI image generation with specialized
                  prompt engineering techniques for architectural visualization.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Layers className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Complete Documentation</CardTitle>
                <CardDescription>
                  Site plans, elevations, perspectives, and interiors
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Professional portfolio presentation including technical
                  drawings, 3D renderings, and comprehensive visualization suites.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 mt-24">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>Built with research, precision, and AI innovation.</p>
            <p className="mt-2">
              © 2025 Architecture Portfolio Universe. MIT License.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
