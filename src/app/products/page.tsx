"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import FooterSimple from '@/components/sections/footer/FooterSimple';

export default function ProductsPage() {
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
            ]}
            brandName="Peptify"
        />
        
        <div className="pt-32 pb-20">
            <ProductCardOne
            animationType="slide-up"
            textboxLayout="default"
            gridVariant="four-items-2x2-equal-grid"
            useInvertedBackground={false}
            title="Standard Product Catalog"
            description="Browse our comprehensive list of pharmaceutical-grade research peptides, optimized for easy e-store browsing."
            products={[
                { id: "1", name: "Tirzepatide", price: "Inquire", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BzpXIQ8WhJ8WvoMuxtEmg0ewMo/medical-vial-of-tirzepatide-in-a-sterile-1775505032194-38e18dca.png?_wi=2" },
                { id: "2", name: "Retatrutide", price: "Inquire", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BzpXIQ8WhJ8WvoMuxtEmg0ewMo/medical-vial-of-retatrutide-in-a-sterile-1775505032674-eda4960c.png?_wi=2" },
                { id: "3", name: "BPC + TB 10MG", price: "Inquire", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BzpXIQ8WhJ8WvoMuxtEmg0ewMo/medical-vial-of-bpc-tb-in-a-sterile-envi-1775505031642-de9329a9.png?_wi=2" },
                { id: "4", name: "KLOW 80MG", price: "Inquire", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BzpXIQ8WhJ8WvoMuxtEmg0ewMo/medical-vial-of-klow-80mg-in-a-sterile-e-1775505032645-950fd706.png?_wi=2" },
            ]}
            />
        </div>

        <FooterSimple
            columns={[
                { title: "Company", items: [{ label: "Home", href: "/" }] },
                { title: "Legal", items: [{ label: "Privacy", href: "#" }] },
            ]}
            bottomLeftText="© 2024 Peptify. For Research Use Only."
            bottomRightText="All rights reserved."
        />
      </ReactLenis>
    </ThemeProvider>
  );
}
