"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
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
                { name: "Contact", id: "/contact" }
            ]}
            brandName="Peptify"
        />
        
        <div className="pt-32 pb-20">
            <ProductCardFour
            animationType="slide-up"
            textboxLayout="default"
            gridVariant="one-large-right-three-stacked-left"
            useInvertedBackground={false}
            title="Full Research Catalog"
            description="Complete list of pharmaceutical-grade research compounds."
            buttons={[{ text: "Contact for Pricing", href: "/contact" }]}
            products={[
                { id: "t1", name: "Tirzepatide 10mg", price: "Contact for pricing", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BzpXIQ8WhJ8WvoMuxtEmg0ewMo/medical-vial-of-tirzepatide-in-a-sterile-1775505032194-38e18dca.png?_wi=2", variant: "10mg" },
                { id: "t2", name: "Tirzepatide 20mg", price: "Contact for pricing", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BzpXIQ8WhJ8WvoMuxtEmg0ewMo/medical-vial-of-tirzepatide-in-a-sterile-1775505032194-38e18dca.png?_wi=2", variant: "20mg" },
                { id: "t3", name: "Tirzepatide 30mg", price: "Contact for pricing", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BzpXIQ8WhJ8WvoMuxtEmg0ewMo/medical-vial-of-tirzepatide-in-a-sterile-1775505032194-38e18dca.png?_wi=2", variant: "30mg" },
                { id: "r1", name: "Retatrutide 10mg", price: "Contact for pricing", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BzpXIQ8WhJ8WvoMuxtEmg0ewMo/medical-vial-of-retatrutide-in-a-sterile-1775505032674-eda4960c.png?_wi=2", variant: "10mg" },
                { id: "r2", name: "Retatrutide 20mg", price: "Contact for pricing", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BzpXIQ8WhJ8WvoMuxtEmg0ewMo/medical-vial-of-retatrutide-in-a-sterile-1775505032674-eda4960c.png?_wi=2", variant: "20mg" },
                { id: "r3", name: "Retatrutide 30mg", price: "Contact for pricing", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BzpXIQ8WhJ8WvoMuxtEmg0ewMo/medical-vial-of-retatrutide-in-a-sterile-1775505032674-eda4960c.png?_wi=2", variant: "30mg" },
                { id: "bpc", name: "BPC+TB 10MG", price: "Contact for pricing", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BzpXIQ8WhJ8WvoMuxtEmg0ewMo/medical-vial-of-bpc-tb-in-a-sterile-envi-1775505031642-de9329a9.png?_wi=1", variant: "10mg" },
                { id: "klow", name: "KLOW 80MG", price: "Contact for pricing", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BzpXIQ8WhJ8WvoMuxtEmg0ewMo/medical-vial-of-nad-500mg-in-a-sterile-e-1775505033201-78ee626f.png?_wi=1", variant: "80mg" },
                { id: "mots", name: "MOTS-C 10mg", price: "Contact for pricing", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BzpXIQ8WhJ8WvoMuxtEmg0ewMo/medical-vial-of-mots-c-in-a-sterile-envi-1775505033701-d7599eb5.png", variant: "10mg" },
                { id: "nad", name: "NAD+ 500mg", price: "Contact for pricing", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BzpXIQ8WhJ8WvoMuxtEmg0ewMo/medical-vial-of-nad-500mg-in-a-sterile-e-1775505033201-78ee626f.png?_wi=2", variant: "500mg" },
            ]}
            />
        </div>

        <FooterSimple
            columns={[
                { title: "Company", items: [{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: "FAQ", href: "/faq" }, { label: "Contact", href: "/contact" }] },
                { title: "Legal", items: [{ label: "Privacy", href: "#" }] },
            ]}
            bottomLeftText="© 2024 Peptify. For Research Use Only."
            bottomRightText="All rights reserved."
        />
      </ReactLenis>
    </ThemeProvider>
  );
}