"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterSimple from '@/components/sections/footer/FooterSimple';

export default function ContactPage() {
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

        <div id="contact" data-section="contact">
            <ContactSplitForm
                title="Contact Our Team"
                description="Reach out for inquiries, research support, or partnership opportunities. We aim to respond within 24-48 hours."
                inputs={[
                    { name: "name", type: "text", placeholder: "Full Name", required: true },
                    { name: "email", type: "email", placeholder: "Email Address", required: true },
                    { name: "subject", type: "text", placeholder: "Subject" }
                ]}
                textarea={{ name: "message", placeholder: "How can we help you?", required: true, rows: 5 }}
                useInvertedBackground={false}
                mediaPosition="right"
                imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BzpXIQ8WhJ8WvoMuxtEmg0ewMo/a-futuristic-scientific-laboratory-setti-1775505033478-f138a781.png?_wi=1"
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