"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import LegalSection from '@/components/legal/LegalSection';

export default function DisclaimerPage() {
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
          <LegalSection 
            layout="page"
            title="Disclaimer"
            sections={[
                { heading: "Research Use Only", content: [{ type: "paragraph", text: "All products provided by Peptify are for laboratory research use only. They are not intended for human consumption or for use in any veterinary applications." }] },
                { heading: "No Liability", content: [{ type: "paragraph", text: "Peptify assumes no responsibility for the misuse of these products. Users are responsible for ensuring compliance with all local laws and research safety protocols." }] },
                { heading: "Qualification", content: [{ type: "paragraph", text: "By purchasing our products, you confirm that you are a qualified researcher or working within a professional laboratory environment." }] }
            ]}
          />
        </div>
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