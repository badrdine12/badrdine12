import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "TechStore - Votre Boutique High-Tech",
  description: "Découvrez notre sélection d'ordinateurs, composants PC, périphériques et accessoires informatiques",
  keywords: ["ordinateur", "pc", "gaming", "composants", "périphériques", "high-tech"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
