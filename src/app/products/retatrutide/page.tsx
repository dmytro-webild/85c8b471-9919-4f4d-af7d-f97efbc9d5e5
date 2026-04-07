"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import FooterSimple from '@/components/sections/footer/FooterSimple';

export default function RetatrutidePage() {
  return (
    <ThemeProvider>
      <ReactLenis root>
        <NavbarStyleApple navItems={[{name: 'Home', id: '/'}, {name: 'Products', id: '/products'}]} brandName="Peptify" />
        <main className="container mx-auto px-6 py-24">
          <h1 className="text-4xl font-bold mb-6">Retatrutide</h1>
          <p className="text-lg mb-8">Advanced agonist compound for research applications.</p>
          <h2 className="text-2xl font-semibold mb-4">Key Results</h2>
          <ul className="list-disc pl-6 mb-8">
            <li>Stabilized molecular structure</li>
            <li>Consistent batch performance</li>
            <li>Pharmaceutical grade precision</li>
          </ul>
        </main>
        <FooterSimple columns={[]} bottomLeftText="© 2024 Peptify. For Research Use Only." />
      </ReactLenis>
    </ThemeProvider>
  );
}