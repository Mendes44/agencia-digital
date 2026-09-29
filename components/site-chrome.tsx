"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Footer } from "@/components/footer";
import { FloatingWhatsapp } from "@/components/floating-whatsapp";
import { Header } from "@/components/header";

export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isCampaignLandingPage = pathname === "/criacao-de-sites";

  if (isCampaignLandingPage) return children;

  return (
    <>
      <Header />
      {children}
      <Footer />
      <FloatingWhatsapp />
    </>
  );
}
