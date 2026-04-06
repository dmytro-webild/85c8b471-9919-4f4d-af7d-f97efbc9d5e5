"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import LegalSection from '@/components/legal/LegalSection';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import FooterSimple from '@/components/sections/footer/FooterSimple';

export default function PrivacyPolicyPage() {
  return (
    <ThemeProvider defaultButtonVariant="text-stagger" defaultTextAnimation="entrance-slide" borderRadius="rounded" contentWidth="medium" sizing="medium" background="circleGradient" cardStyle="glass-elevated" primaryButtonStyle="gradient" secondaryButtonStyle="glass" headingFontWeight="normal">
      <ReactLenis root>
        <NavbarStyleApple navItems={[{name: "Home", id: "/"}, {name: "Products", id: "/products"}, {name: "FAQ", id: "/faq"}, {name: "Contact", id: "/contact"}]} />
        <div className="pt-32 pb-20">
            <LegalSection 
                layout="page" 
                title="Privacy Policy" 
                sections={[{ heading: "Data Collection", content: { type: "paragraph", text: "We collect minimal data necessary for order fulfillment and scientific communication. Your information is never sold to third parties." } }]} 
            />
        </div>
        <FooterSimple 
          columns={[{ title: "Company", items: [{ label: "Home", href: "/" }] }, { title: "Legal", items: [{ label: "Privacy Policy", href: "/legal/privacy" }, { label: "Disclaimer", href: "/legal/disclaimer" }] }]} 
          bottomLeftText="© 2025 Webild"
          bottomRightText="hello@example.com"
        />
      </ReactLenis>
    </ThemeProvider>
  )
}