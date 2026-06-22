"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { DesktopNav } from "./DesktopNav";
import { MobileMenu } from "./MobileMenu";
import { BrandLogo } from "./BrandLogo";
import { PhoneLink } from "./PhoneLink";
import { BUSINESS_PHONE } from "@/lib/constants/business";
import { cn } from "@/lib/utils";

export function HeaderClient() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm",
        scrolled ? "border-b border-primary/10 shadow-sm" : "border-b border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 h-16 flex items-center justify-between">
        <BrandLogo />
        <DesktopNav />
        <div className="flex items-center gap-2 lg:gap-3 shrink-0">
          <PhoneLink
            className="hidden lg:inline-flex xl:hidden items-center justify-center w-9 h-9 rounded-full bg-primary-light text-primary-dark hover:bg-cta/10 hover:text-cta transition-colors"
            aria-label={`Call ${BUSINESS_PHONE}`}
          >
            <Phone className="w-4 h-4" aria-hidden />
          </PhoneLink>
          <PhoneLink
            className="hidden xl:inline-flex items-center gap-2 px-3 py-2 rounded-full bg-primary-light text-sm font-bold text-primary-dark hover:bg-cta/10 hover:text-cta transition-colors"
            aria-label={`Call ${BUSINESS_PHONE}`}
          >
            <Phone className="w-4 h-4" aria-hidden />
            {BUSINESS_PHONE}
          </PhoneLink>
          <Link href="/contact" className="hidden sm:inline-flex btn btn-primary btn-sm">
            Get a Free Quote
          </Link>
          <div className="text-text-primary">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
