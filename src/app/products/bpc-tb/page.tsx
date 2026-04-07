"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import MediaAbout from '@/components/sections/about/MediaAbout';

export default function BpcTbPage() {
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
        <div id="nav" data-section="nav">
          <NavbarStyleApple
            navItems={[
              { name: "Home", id: "/" },
              { name: "Products", id: "/products" },
              { name: "FAQ", id: "/faq" },
              { name: "Contact", id: "/contact" },
            ]}
            brandName="Peptify"
          />
        </div>

        <div id="bpc-info" data-section="bpc-info">
          <MediaAbout
            title="BPC-157 & TB-500: Advanced Biological Research"
            description="BPC-157 is a pentadecapeptide derived from human gastric juice, widely studied for its potent tissue-healing and cytoprotective properties. When combined with TB-500 (Thymosin Beta-4), a synthetic fraction of a protein found in many body tissues, this complex represents a powerful synergy in regenerative research. These peptides are primarily researched for their ability to promote cellular migration, accelerate healing in connective tissues, and modulate inflammatory responses, making them focal points in current metabolic and orthopedic studies."
            imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BzpXIQ8WhJ8WvoMuxtEmg0ewMo/medical-vial-of-bpc-tb-in-a-sterile-envi-1775505031642-de9329a9.png?_wi=1"
            useInvertedBackground={false}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterSimple
            columns={[
              { title: "Company", items: [{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: "FAQ", href: "/faq" }, { label: "Contact", href: "/contact" }] },
              { title: "Legal", items: [{ label: "Privacy Policy", href: "/privacy" }, { label: "Disclaimer", href: "/disclaimer" }, { label: "Terms", href: "/terms" }] },
            ]}
            bottomLeftText="© 2024 Peptify. For Research Use Only."
            bottomRightText="All rights reserved."
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
