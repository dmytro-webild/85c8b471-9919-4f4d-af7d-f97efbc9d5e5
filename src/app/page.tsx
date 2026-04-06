"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';

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
        {
          name: "Home",          id: "hero"},
        {
          name: "Products",          id: "products"},
        {
          name: "FAQ",          id: "faq"},
      ]}
      brandName="Peptify"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardGallery
      background={{
        variant: "gradient-bars"}}
      title="Precision Peptides for Performance"
      description="Peptify delivers pharmaceutical-grade peptides sourced with the highest standards of purity and efficacy. Elevate your research."
      mediaItems={[
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BzpXIQ8WhJ8WvoMuxtEmg0ewMo/a-futuristic-scientific-laboratory-setti-1775505033478-f138a781.png?_wi=1",          imageAlt: "Laboratory vials"},
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BzpXIQ8WhJ8WvoMuxtEmg0ewMo/close-up-shot-of-premium-pharmaceutical--1775505033768-ccc5a7ed.png?_wi=1",          imageAlt: "Medical vial"},
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BzpXIQ8WhJ8WvoMuxtEmg0ewMo/abstract-visualization-of-molecules-and--1775505032979-4ed56947.png",          imageAlt: "Scientific visualization"},
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BzpXIQ8WhJ8WvoMuxtEmg0ewMo/a-futuristic-scientific-laboratory-setti-1775505033478-f138a781.png?_wi=2",          imageAlt: "Laboratory vials"},
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BzpXIQ8WhJ8WvoMuxtEmg0ewMo/close-up-shot-of-premium-pharmaceutical--1775505033768-ccc5a7ed.png?_wi=2",          imageAlt: "Medical vial"},
      ]}
      mediaAnimation="slide-up"
      buttons={[
        {
          text: "View Catalog",          href: "#products"},
      ]}
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="split-actions"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      buttons={[
        {
            text: "Inquire for Pricing",            href: "mailto:inquiries@peptify.com"
        }
      ]}
      products={[
        {
          id: "1",          name: "Tirzepatide",          price: "Contact for pricing",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BzpXIQ8WhJ8WvoMuxtEmg0ewMo/medical-vial-of-tirzepatide-in-a-sterile-1775505032194-38e18dca.png",          imageAlt: "Tirzepatide Vial"},
        {
          id: "2",          name: "Retatrutide",          price: "Contact for pricing",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BzpXIQ8WhJ8WvoMuxtEmg0ewMo/medical-vial-of-retatrutide-in-a-sterile-1775505032674-eda4960c.png",          imageAlt: "Retatrutide Vial"},
        {
          id: "3",          name: "BPC + TB 10MG",          price: "Contact for pricing",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BzpXIQ8WhJ8WvoMuxtEmg0ewMo/medical-vial-of-bpc-tb-in-a-sterile-envi-1775505031642-de9329a9.png",          imageAlt: "BPC+TB Vial"},
        {
          id: "4",          name: "KLOW 80MG",          price: "Contact for pricing",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BzpXIQ8WhJ8WvoMuxtEmg0ewMo/medical-vial-of-klow-80mg-in-a-sterile-e-1775505032645-950fd706.png",          imageAlt: "KLOW Vial"},
        {
          id: "5",          name: "MOTS-C 10MG",          price: "Contact for pricing",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BzpXIQ8WhJ8WvoMuxtEmg0ewMo/medical-vial-of-mots-c-in-a-sterile-envi-1775505033701-d7599eb5.png",          imageAlt: "MOTS-C Vial"},
        {
          id: "6",          name: "NAD+ 500MG",          price: "Contact for pricing",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BzpXIQ8WhJ8WvoMuxtEmg0ewMo/medical-vial-of-nad-500mg-in-a-sterile-e-1775505033201-78ee626f.png",          imageAlt: "NAD+ Vial"},
      ]}
      title="Our Peptide Collection"
      description="Pharmaceutical grade compounds in high-potency concentrations."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",          title: "What are peptides?",          content: "Peptides are short chains of amino acids that act as building blocks of proteins and signaling molecules in the body."},
        {
          id: "2",          title: "Are these for human consumption?",          content: "No, all products sold by Peptify are for laboratory research purposes only and not for human consumption."},
        {
          id: "3",          title: "How do I store my vials?",          content: "Most peptides should be stored in a cool, dry place away from direct sunlight, often in the refrigerator after reconstitution."},
        {
          id: "4",          title: "How do you ensure purity?",          content: "We utilize third-party laboratory testing to ensure all products meet our high purity and potency standards."},
        {
          id: "5",          title: "What is reconstitution?",          content: "Reconstitution is the process of mixing lyophilized powder with a solvent like bacteriostatic water for research use."},
      ]}
      sideTitle="Peptide Research FAQ"
      sideDescription="Frequently asked questions regarding our peptides, purity, and usage standards."
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="metric" data-section="metric">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="Quality Assured"
      tag="Reliability"
      metricsAnimation="slide-up"
      metrics={[
        {
          id: "m1",          value: "99.9%",          description: "Average purity"},
        {
          id: "m2",          value: "24h",          description: "Support response"},
        {
          id: "m3",          value: "500+",          description: "Research labs"},
        {
          id: "m4",          value: "3rd Party",          description: "Verified tested"},
        {
          id: "m5",          value: "Global",          description: "Shipping reach"},
      ]}
    />
  </div>

  <div id="socialProof" data-section="socialProof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      title="Trusted by Researchers"
      description="Leading laboratories rely on Peptify for consistent, reliable chemical compounds."
      names={[
        "Bioscience Labs",        "Genomic Research",        "Peptide Dynamics",        "Clinical Studies",        "Advanced Proteomics"]}
      tag="Partners"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Company",          items: [
            {
              label: "About Us",              href: "#"},
            {
              label: "Shipping Policy",              href: "#"},
            {
              label: "Terms of Service",              href: "#"},
          ],
        },
        {
          title: "Legal",          items: [
            {
              label: "Privacy Policy",              href: "#"},
            {
              label: "Disclaimer",              href: "#"},
          ],
        },
      ]}
      bottomLeftText="© 2024 Peptify. For Research Use Only."
      bottomRightText="All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}