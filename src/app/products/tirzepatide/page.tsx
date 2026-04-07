"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import LegalSection from '@/components/legal/LegalSection';

export default function TirzepatidePage() {
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
          title="Tirzepatide"
          subtitle="Biological Mechanisms & Research Applications"
          sections={[
            { heading: "Biological Mechanism", content: { text: "Tirzepatide acts as a dual agonist for the Glucose-dependent Insulinotropic Polypeptide (GIP) and Glucagon-Like Peptide-1 (GLP-1) receptors. By stimulating these receptors, it influences insulin secretion, glucagon suppression, and gastric emptying, playing a critical role in metabolic pathway studies." } },
            { heading: "Research Value", content: { text: "Widely studied for its impact on metabolic health, Tirzepatide serves as a significant compound for understanding glucose homeostasis and appetite regulation mechanisms in research environments." } }
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