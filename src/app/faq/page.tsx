"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import FooterSimple from '@/components/sections/footer/FooterSimple';

export default function FaqPage() {
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
                { name: "Contact", id: "/contact" }
            ]}
            brandName="Peptify"
        />
        <div className="pt-32 pb-20">
          <FaqSplitText
            sideTitle="Peptide Research FAQ"
            sideDescription="Common questions regarding research peptides, purity, and handling standards."
            faqsAnimation="blur-reveal"
            useInvertedBackground={false}
            faqs={[
              { id: "1", title: "What are research peptides?", content: "Peptides are short chains of amino acids. Our research peptides are high-purity compounds intended strictly for laboratory and research use." },
              { id: "2", title: "Are these products for human use?", content: "No. All products sold by Peptify are for laboratory research and forensic use only. They are not intended for human consumption or therapeutic use." },
              { id: "3", title: "How should I store my peptides?", content: "Most lyophilized peptides should be kept at -20°C for long-term storage, or 2-8°C for short-term. Avoid moisture and direct sunlight." },
              { id: "4", title: "What is the meaning of purity in peptides?", content: "Purity refers to the percentage of the peptide that is the intended sequence compared to impurities. We ensure high-performance liquid chromatography verification." },
              { id: "5", title: "How are peptides reconstituted?", content: "Reconstitution typically involves using sterile bacteriostatic water or saline, depending on the research protocol requirements." },
              { id: "6", title: "Are your peptides third-party tested?", content: "Yes, all our peptides undergo rigorous third-party analytical testing to ensure the quality and purity promised to our research clients." },
              { id: "7", title: "What is lyophilization?", content: "Lyophilization, or freeze-drying, is a process used to preserve peptide stability by removing water from the frozen product under vacuum." },
              { id: "8", title: "What if my vial appears empty?", content: "Peptides often form a thin, nearly invisible film at the bottom of the vial after the lyophilization process; this is normal and not a sign of an empty vial." },
              { id: "9", title: "Can I travel with these vials?", content: "Regulations vary, but research chemicals should always be labeled properly with accompanying analytical documentation for all transport." },
              { id: "10", title: "How do I request a bulk quote?", content: "For large-scale research needs, please reach out through our contact page with your specific requirements and quantities." }
            ]}
          />
        </div>
        <FooterSimple
            columns={[
                { title: "Company", items: [{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: "Contact", href: "/contact" }] },
                { title: "Legal", items: [{ label: "Privacy", href: "#" }] },
            ]}
            bottomLeftText="© 2024 Peptify. For Research Use Only."
            bottomRightText="All rights reserved."
        />
      </ReactLenis>
    </ThemeProvider>
  );
}