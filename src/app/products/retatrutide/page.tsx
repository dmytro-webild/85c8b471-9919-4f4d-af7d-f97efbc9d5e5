"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import LegalSection from '@/components/legal/LegalSection';

export default function RetatrutidePage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="mediumLarge"
        sizing="mediumLarge"
        background="blurBottom"
        cardStyle="solid"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="layered"
        headingFontWeight="light"
    >
      <ReactLenis root>
        <NavbarStyleApple
          navItems={[
            { name: "Home", id: "/" },
            { name: "Products", id: "/products" },
            { name: "FAQ", id: "/faq" },
            { name: "Contact", id: "/contact" },
          ]}
          brandName="Peptify"
        />
        <LegalSection
          layout="page"
          title="Retatrutide"
          subtitle="Biological Mechanisms & Research Applications"
          sections={[
            { heading: "Biological Mechanism", content: { type: "paragraph", text: "Retatrutide acts as a triple agonist, targeting GIP, GLP-1, and glucagon receptors. This triple-action approach allows researchers to observe more complex metabolic regulation, focusing on signaling pathways that govern energy balance and lipid metabolism." } },
            { heading: "Research Value", content: { type: "paragraph", text: "As a novel research compound, Retatrutide is being utilized to investigate advanced metabolic pathways and the synergistic effects of multi-receptor agonism on cellular response." } }
          ]}
        />
        <FooterSimple
          columns={[
            { title: "Company", items: [{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: "FAQ", href: "/faq" }, { label: "Contact", href: "/contact" }] },
            { title: "Legal", items: [{ label: "Privacy Policy", href: "/privacy" }, { label: "Disclaimer", href: "/disclaimer" }, { label: "Terms", href: "/terms" }] },
          ]}
          bottomLeftText="© 2024 Peptify. For Research Use Only."
          bottomRightText="All rights reserved."
        />
      </ReactLenis>
    </ThemeProvider>
  );
}