"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import FooterSimple from '@/components/sections/footer/FooterSimple';

export default function TirzepatidePage() {
  return (
    <ThemeProvider>
      <ReactLenis root>
        <NavbarStyleApple navItems={[{name: 'Home', id: '/'}, {name: 'Products', id: '/products'}]} brandName="Peptify" />
        <main className="container mx-auto px-6 py-24">
          <h1 className="text-4xl font-bold mb-6">Tirzepatide</h1>
          <p className="text-lg mb-8">High-purity Tirzepatide for metabolic and physiological research.</p>
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc pl-6 mb-8">
            <li>Supports metabolic pathways</li>
            <li>High potency formulation</li>
            <li>HPLC verified purity</li>
          </ul>
          <h2 className="text-2xl font-semibold mb-4">Recommended Uses</h2>
          <p className="mb-8">For exclusive use in controlled laboratory research environments.</p>
        </main>
        <FooterSimple columns={[]} bottomLeftText="© 2024 Peptify. For Research Use Only." />
      </ReactLenis>
    </ThemeProvider>
  );
}