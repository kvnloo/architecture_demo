import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Architecture Portfolio Universe | AI-Generated Architectural Visualizations",
  description: "A collection of architectural portfolios showcasing AI-generated visualizations, detailed research, and comprehensive documentation across various fictional and real-world architectural projects.",
  keywords: ["architecture", "AI", "portfolio", "visualization", "mid-century modern", "Incredibles"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={cn("antialiased font-sans")}>
        {children}
      </body>
    </html>
  );
}
