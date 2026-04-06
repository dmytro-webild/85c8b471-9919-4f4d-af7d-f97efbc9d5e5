"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import LegalSection from '@/components/legal/LegalSection';

export default function TermsPage() {
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
            title="Terms and Conditions"
            sections={[
                { heading: "Acceptance of Terms", content: [{ type: "paragraph", text: "By accessing this website, you agree to comply with these terms of use. If you do not agree with any part, please discontinue use immediately." }] },
                { heading: "Ordering", content: [{ type: "paragraph", text: "Orders are subject to verification and availability. We reserve the right to refuse service if research legitimacy cannot be established." }] },
                { heading: "Intellectual Property", content: [{ type: "paragraph", text: "All content, graphics, and research summaries remain the property of Peptify and may not be reproduced without written consent." }] }
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