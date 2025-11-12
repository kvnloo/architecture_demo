import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Layers } from "lucide-react";

const portfolioSections = [
  {
    title: "Site & Context",
    description: "Comprehensive site analysis showing topography, landscape integration, and environmental context",
    images: [
      {
        src: "/images/incredibles/site_plan_contextual_analysis.png",
        alt: "Site Plan & Contextual Analysis",
        title: "Site Plan",
      },
    ],
  },
  {
    title: "Architectural Plans",
    description: "Technical floor plans for all three levels with detailed spatial organization",
    images: [
      {
        src: "/images/incredibles/main_level_floor_plan.png",
        alt: "Main Level Floor Plan",
        title: "Main Level",
      },
      {
        src: "/images/incredibles/second_level_floor_plan.png",
        alt: "Second Level Floor Plan",
        title: "Second Level",
      },
      {
        src: "/images/incredibles/basement_level_floor_plan.png",
        alt: "Basement Level Floor Plan",
        title: "Basement Level",
      },
    ],
  },
  {
    title: "Exterior Elevations",
    description: "Orthographic projections showing all four facades with material specifications",
    images: [
      {
        src: "/images/incredibles/south_elevation.png",
        alt: "South Elevation",
        title: "South Elevation",
      },
      {
        src: "/images/incredibles/west_elevation.png",
        alt: "West Elevation",
        title: "West Elevation",
      },
      {
        src: "/images/incredibles/north_elevation.png",
        alt: "North Elevation",
        title: "North Elevation",
      },
      {
        src: "/images/incredibles/east_elevation.png",
        alt: "East Elevation",
        title: "East Elevation",
      },
    ],
  },
  {
    title: "Perspective Renderings",
    description: "Photorealistic 3D visualizations capturing the architectural character and site integration",
    images: [
      {
        src: "/images/incredibles/three_quarter_exterior_southwest.png",
        alt: "Southwest Perspective",
        title: "Three-Quarter Southwest View",
      },
      {
        src: "/images/incredibles/aerial_perspective_northwest.png",
        alt: "Aerial Northwest Perspective",
        title: "Aerial View Northwest",
      },
      {
        src: "/images/incredibles/approach_view_access_road.png",
        alt: "Forest Approach View",
        title: "Approach from Access Road",
      },
      {
        src: "/images/incredibles/sunset_view_city_overlook.png",
        alt: "Sunset City Overlook",
        title: "City Overlook at Sunset",
      },
    ],
  },
  {
    title: "Interior Visualizations",
    description: "Spatial renderings showcasing material finishes, furniture, and mid-century modern aesthetic",
    images: [
      {
        src: "/images/incredibles/living_room.png",
        alt: "Sunken Living Room",
        title: "Sunken Living Room",
      },
    ],
  },
  {
    title: "Additional Renders",
    description: "Supplementary views highlighting unique architectural features and atmospheric conditions",
    images: [
      {
        src: "/images/incredibles/aerial_view.png",
        alt: "Aerial View",
        title: "Aerial Perspective",
      },
      {
        src: "/images/incredibles/driveway.png",
        alt: "Driveway Approach",
        title: "Motor Court & Driveway",
      },
      {
        src: "/images/incredibles/exterior.png",
        alt: "Exterior View",
        title: "Exterior Detail",
      },
      {
        src: "/images/incredibles/waterfall_night.png",
        alt: "Waterfall Night View",
        title: "Waterfall at Night",
      },
    ],
  },
];

export default function IncrediblesPortfolio() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Layers className="h-6 w-6 text-primary" />
            <span className="text-lg font-semibold">Architecture Universe</span>
          </div>
          <div className="flex items-center space-x-6">
            <Link
              href="/"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/universe/incredibles"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Portfolio
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 py-16">
          <Button variant="ghost" size="sm" asChild className="mb-8">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>

          <div className="max-w-4xl">
            <div className="flex gap-2 mb-4">
              <Badge>Mid-Century Modern</Badge>
              <Badge variant="secondary">20,000 sq ft</Badge>
              <Badge variant="outline">Pixar • Incredibles 2</Badge>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              The Parr Residence
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              A comprehensive architectural documentation for the Parr Residence,
              a 20,000-square-foot mid-century modern mansion inspired by its
              iconic appearance in <em>Incredibles 2</em>. This project translates
              the animated design into buildable, high-end residential
              architecture with complete documentation from site analysis to
              detailed interior visualizations.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <div className="text-muted-foreground mb-1">Site Area</div>
                <div className="font-semibold">4.6 acres</div>
              </div>
              <div>
                <div className="text-muted-foreground mb-1">Building Area</div>
                <div className="font-semibold">20,000 sq ft</div>
              </div>
              <div>
                <div className="text-muted-foreground mb-1">Levels</div>
                <div className="font-semibold">3 (Main + Upper + Basement)</div>
              </div>
              <div>
                <div className="text-muted-foreground mb-1">Style</div>
                <div className="font-semibold">Mid-Century Modern</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
            <p className="text-muted-foreground leading-relaxed">
              The design is defined by its dramatic hyperbolic paraboloid roof,
              seamless integration with a cliffside waterfall, and an open-plan
              interior that balances family living with superhero readiness. This
              collection of drawings and renderings communicates the complete
              architectural intent for client approval, contractor coordination,
              and design excellence recognition.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 p-6 bg-card rounded-lg border border-border/50">
            <div>
              <h3 className="font-semibold mb-2 text-primary">Key Features</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Hyperbolic paraboloid roof</li>
                <li>• Floor-to-ceiling glass walls</li>
                <li>• Cliffside waterfall integration</li>
                <li>• Natural rock formations</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-primary">Materials</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Smooth troweled concrete</li>
                <li>• Dark-stained white oak</li>
                <li>• Terrazzo flooring</li>
                <li>• Tempered glass curtain walls</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-primary">Setting</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Forested 4.6-acre site</li>
                <li>• 300-foot cliff elevation</li>
                <li>• Panoramic city views</li>
                <li>• Native vegetation screening</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Separator className="container mx-auto my-8" />

      {/* Portfolio Sections */}
      {portfolioSections.map((section, sectionIndex) => (
        <section
          key={sectionIndex}
          className="container mx-auto px-4 py-12"
        >
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-3">{section.title}</h2>
              <p className="text-muted-foreground">{section.description}</p>
            </div>

            <div
              className={`grid gap-6 ${
                section.images.length === 1
                  ? "grid-cols-1"
                  : section.images.length === 2
                  ? "grid-cols-1 md:grid-cols-2"
                  : section.images.length === 3
                  ? "grid-cols-1 md:grid-cols-3"
                  : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
              }`}
            >
              {section.images.map((image, imageIndex) => (
                <Card
                  key={imageIndex}
                  className="overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="relative aspect-[4/3] bg-muted">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-sm">{image.title}</h3>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {sectionIndex < portfolioSections.length - 1 && (
            <Separator className="container mx-auto mt-12" />
          )}
        </section>
      ))}

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-6 p-12 bg-gradient-to-b from-primary/10 to-background rounded-lg border border-primary/20">
          <h2 className="text-3xl font-bold">Ready to explore more?</h2>
          <p className="text-muted-foreground">
            Discover the research and prompt engineering methodology behind these
            architectural visualizations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
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
