import type { Metadata, Viewport } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { ReactNode } from "react";
import "./globals.css";
import { SiteChrome } from "@/components/site-chrome";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Dev Mendes | Sites de alta conversão",
    template: "%s | Dev Mendes",
  },
  description: siteConfig.description,
  keywords: [
    "criação de sites",
    "landing page",
    "desenvolvimento web",
    "site profissional",
    "landing page para WhatsApp",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Transforme cliques em clientes | Dev Mendes",
    description: siteConfig.description,
    images: [{ url: "/img/demo.png", width: 1888, height: 816, alt: "Dev Mendes — desenvolvimento web" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Transforme cliques em clientes | Dev Mendes",
    description: siteConfig.description,
    images: ["/img/demo.png"],
  },
  icons: { icon: "/img/favicon3.png" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050914",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    areaServed: "BR",
    priceRange: "Landing pages a partir de R$ 497,00",
    telephone: "+55 31 98734-0462",
    taxID: siteConfig.cnpj,
  };

  return (
    <html lang="pt-BR" className="dark scroll-smooth bg-white" suppressHydrationWarning>
      <body className={`${GeistSans.variable} ${GeistMono.variable} overflow-x-hidden bg-white font-[family-name:var(--font-geist-sans)] text-slate-950 antialiased transition-colors dark:bg-[#050914] dark:text-slate-100`}>
        <a
          href="#conteudo"
          className="fixed left-4 top-[-5rem] z-[100] rounded-lg bg-white px-4 py-2 text-sm font-bold text-slate-950 focus:top-4"
        >
          Pular para o conteúdo
        </a>
        <SiteChrome>{children}</SiteChrome>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
        />
      </body>
    </html>
  );
}
