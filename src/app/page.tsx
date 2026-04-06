"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardOne from '@/components/sections/product/ProductCardOne';

export default function LandingPage() {
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

  <div id="hero" data-section="hero">
      <HeroBillboardGallery
      background={{ variant: "gradient-bars"}}
      title="Precision Peptides for Performance"
      description="Peptify delivers pharmaceutical-grade peptides sourced with the highest standards of purity and efficacy. Elevate your research."
      mediaItems={[
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BzpXIQ8WhJ8WvoMuxtEmg0ewMo/a-futuristic-scientific-laboratory-setti-1775505033478-f138a781.png?_wi=1", imageAlt: "Laboratory vials"},
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BzpXIQ8WhJ8WvoMuxtEmg0ewMo/close-up-shot-of-premium-pharmaceutical--1775505033768-ccc5a7ed.png?_wi=1", imageAlt: "Medical vial"},
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BzpXIQ8WhJ8WvoMuxtEmg0ewMo/abstract-visualization-of-molecules-and--1775505032979-4ed56947.png", imageAlt: "Scientific visualization"},
      ]}
      mediaAnimation="slide-up"
      buttons={[
        { text: "View Catalog", href: "/products" },
      ]}
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="split-actions"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      buttons={[{ text: "Contact for Pricing", href: "/contact" }]}
      products={[
        { id: "1", name: "Tirzepatide", price: "Contact for pricing", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BzpXIQ8WhJ8WvoMuxtEmg0ewMo/medical-vial-of-tirzepatide-in-a-sterile-1775505032194-38e18dca.png?_wi=1", imageAlt: "Tirzepatide Vial" },
        { id: "2", name: "Retatrutide", price: "Contact for pricing", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BzpXIQ8WhJ8WvoMuxtEmg0ewMo/medical-vial-of-retatrutide-in-a-sterile-1775505032674-eda4960c.png?_wi=1", imageAlt: "Retatrutide Vial" },
        { id: "3", name: "BPC + TB 10MG", price: "Contact for pricing", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BzpXIQ8WhJ8WvoMuxtEmg0ewMo/medical-vial-of-bpc-tb-in-a-sterile-envi-1775505031642-de9329a9.png?_wi=1", imageAlt: "BPC+TB Vial" },
      ]}
      title="Our Peptide Collection"
      description="Pharmaceutical grade compounds in high-potency concentrations."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        { id: "1", title: "What are peptides?", content: "Peptides are short chains of amino acids that act as building blocks of proteins and signaling molecules in the body." },
        { id: "2", title: "Are these for human consumption?", content: "No, all products sold by Peptify are for laboratory research purposes only and not for human consumption." },
        { id: "3", title: "How do I store my vials?", content: "Most peptides should be stored in a cool, dry place away from direct sunlight, often in the refrigerator after reconstitution." },
      ]}
      sideTitle="Peptide Research FAQ"
      sideDescription="Frequently asked questions regarding our peptides, purity, and usage standards."
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        { title: "Company", items: [{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: "FAQ", href: "/faq" }, { label: "Contact", href: "/contact" }] },
        { title: "Legal", items: [{ label: "Privacy Policy", href: "#" }, { label: "Disclaimer", href: "#" }] },
      ]}
      bottomLeftText="© 2024 Peptify. For Research Use Only."
      bottomRightText="All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}