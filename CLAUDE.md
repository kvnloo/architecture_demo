# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is an **architectural portfolio and prompt engineering repository** focused on AI-generated architectural visualizations. The primary project showcases the Parr Residence from Pixar's *Incredibles 2* - a 20,000-square-foot mid-century modern mansion with a hyperbolic paraboloid roof.

**This is NOT a traditional software project.** There is no code to build, compile, or test. Instead, this repository contains:
- Comprehensive architectural research documents
- Specialized AI image generation prompts
- Generated architectural visualizations (images)
- Portfolio documentation in Markdown

## Repository Structure

```
architecture_demo/
├── universe/
│   ├── incredibles/           # Main Incredibles 2 mansion project
│   │   ├── images/            # Generated architectural visualizations
│   │   ├── research/          # Research documents and prompts
│   │   │   ├── incredibles_2_mansion_deep_research.md
│   │   │   └── prompts.md
│   │   └── portfolio.md       # Complete architectural portfolio presentation
│   └── past/                  # Archive of past architectural projects
├── generated_images/          # Output directory for new renders
└── LICENSE

```

## Understanding the Project Structure

### The "Universe" Concept
The `universe/` directory contains different architectural worlds:
- **incredibles/** - Mid-century modern mansion from Incredibles 2
- **past/** - Historical architectural projects and references

Each universe contains research, prompts, and generated images specific to that architectural concept.

### Key Documents

**universe/incredibles/research/incredibles_2_mansion_deep_research.md**
- Comprehensive architectural analysis of the Incredibles 2 mansion
- Research on Google's "Nano Banana" (Gemini 2.5 Flash Image) AI model
- Prompt engineering best practices for 2025
- Material specifications, lighting guidance, and technical details

**universe/incredibles/research/prompts.md**
- Detailed prompt suite for generating architectural portfolio images
- Organized by drawing type: site plans, floor plans, elevations, perspectives, interiors
- Professional architectural notation and rendering specifications

**universe/incredibles/portfolio.md**
- Complete architectural portfolio presentation
- Links to generated images organized by category
- Table of contents for all visualization types

## Working with This Repository

### Adding New Architectural Projects

When creating a new architectural project:

1. **Create a new universe directory**: `universe/[project_name]/`
2. **Structure should include**:
   - `images/` - Generated visualizations
   - `research/` - Architectural research and analysis
   - `research/prompts.md` - Image generation prompts
   - `portfolio.md` - Portfolio presentation document

3. **Generated images should be saved to**: `generated_images/` (for new work) or `universe/[project_name]/images/` (for project-specific organization)

### Image Organization Conventions

- **Floor plans**: `[level]_level_floor_plan.png` (e.g., `main_level_floor_plan.png`)
- **Elevations**: `[direction]_elevation.png` (e.g., `south_elevation.png`)
- **Perspectives**: Descriptive names like `three_quarter_exterior_southwest.png`, `aerial_perspective_northwest.png`
- **Interiors**: Room-based names like `living_room.png`, `kitchen.png`
- **Site plans**: `site_plan_contextual_analysis.png`

### Prompt Engineering Principles

When working with or creating architectural visualization prompts:

1. **Use hierarchical structure** (from most to least important):
   - Subject/building type
   - Architectural style and materials
   - Distinctive features
   - Setting and context
   - Lighting and atmosphere
   - Camera specifications
   - Technical quality parameters

2. **Favor narrative descriptions** over keyword lists
3. **Specify exact materials**: "smooth troweled concrete" not "realistic materials"
4. **Include negative prompts** to exclude unwanted elements
5. **Use professional camera specs**: Canon EOS 5D Mark IV, 35-50mm focal length, f/8 aperture

### Key Architectural Terminology

The Incredibles mansion is defined by:
- **Hyperbolic paraboloid roof** - Saddle-shaped concrete shell structure
- **Floor-to-ceiling glass curtain walls** - Extensive glazing with wood frames
- **Terrazzo flooring** - Polished aggregate with embedded stones
- **Mid-century modern aesthetic** - 1960s retro-futuristic design
- **Site integration** - Natural rock formations penetrating interior walls

## AI Image Generation Context

### Recommended Tools (as of 2025)

- **Google Gemini 2.5 Flash Image ("Nano Banana")** - Primary recommendation for speed/cost/quality balance
- **Imagen 3/4** - For deterministic generation with seed control
- **Access via**: Google AI Studio (aistudio.google.com), Gemini API, or Vertex AI

### Typical Workflow

1. Research architectural subject thoroughly
2. Draft specialized prompts organized by view type (plans, elevations, perspectives)
3. Generate initial variations in Google AI Studio
4. Refine prompts iteratively based on output quality
5. Save images to appropriate directory with descriptive naming
6. Update portfolio.md with new images and descriptions

## File Naming and Path Conventions

- **Use underscores** for multi-word names: `floor_plan.png` not `floor-plan.png`
- **Use descriptive paths**: `universe/incredibles/images/` not just `images/`
- **Reference images in markdown** using relative paths: `generated_images/[name].png`

## Documentation Standards

Portfolio and research documents should:
- Use clear hierarchical markdown headings
- Include comprehensive architectural details (dimensions, materials, spatial relationships)
- Reference source material and research (Pixar production design, real architectural precedents)
- Organize content by professional architectural documentation categories
- Maintain consistent formatting and terminology

## License

This project is licensed under the MIT License - see LICENSE file for details.
