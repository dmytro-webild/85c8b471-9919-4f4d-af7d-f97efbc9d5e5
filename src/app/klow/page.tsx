"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import FooterSimple from '@/components/sections/footer/FooterSimple';

export default function KlowPage() {
  return (
    <ThemeProvider 
      defaultButtonVariant="text-stagger" 
      defaultTextAnimation="entrance-slide" 
      borderRadius="rounded" 
      contentWidth="medium" 
      sizing="medium" 
      background="circleGradient" 
      cardStyle="glass-elevated" 
      primaryButtonStyle="gradient" 
      secondaryButtonStyle="glass" 
      headingFontWeight="normal"
    >
      <ReactLenis root>
        <NavbarStyleApple
          navItems={[
            { name: "Home", id: "/" },
            { name: "Products", id: "/products" },
            { name: "FAQ", id: "/faq" },
            { name: "Contact", id: "/contact" },
            { name: "Klow", id: "/klow" },
            { name: "Mots-c", id: "/mots-c" },
            { name: "NAD+", id: "/nad-plus" },
          ]}
          brandName="Peptify"
        />
        <div className="container mx-auto py-24">
          <h1 className="text-4xl font-bold mb-6">Klow</h1>
          <div className="prose max-w-none">
            <p>Details about Klow, its effects on the human body, key benefits, and research-grade usage guidelines.</p>
          </div>
        </div>
        <FooterSimple
          columns={[
            { title: "Company", items: [{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: "FAQ", href: "/faq" }, { label: "Contact", href: "/contact" }] },
            { title: "Compounds", items: [{ label: "Klow", href: "/klow" }, { label: "Mots-c", href: "/mots-c" }, { label: "NAD+", href: "/nad-plus" }] },
            { title: "Legal", items: [{ label: "Privacy Policy", href: "/privacy" }, { label: "Disclaimer", href: "/disclaimer" }, { label: "Terms", href: "/terms" }] },
          ]}
          bottomLeftText="© 2025 Peptify"
          bottomRightText="All rights reserved"
        />
      </ReactLenis>
    </ThemeProvider>
  );
}