"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Phone, ArrowRight, ChevronDown } from "lucide-react";
import { PRIMARY_NAV_LINKS, SERVICES_MENU, ABOUT_MENU } from "@/lib/constants/nav";
import { SERVICE_AREAS, getAreaHref } from "@/data/serviceAreas";
import { PhoneLink } from "./PhoneLink";
import { BrandLogo } from "./BrandLogo";
import { useMobileMenu } from "./MobileMenuContext";

export function MobileMenu() {
  const { isOpen, setOpen } = useMobileMenu();
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const [areasExpanded, setAreasExpanded] = useState(false);
  const [aboutExpanded, setAboutExpanded] = useState(false);

  function close() {
    setOpen(false);
  }

  // Lock body scroll while the menu is open so the page behind can't scroll.
  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className="lg:hidden flex items-center justify-center w-11 h-11 -mr-1.5 text-current"
      >
        <Menu className="w-6 h-6" aria-hidden />
      </button>

      {isOpen && (
        // Solid full-screen overlay — this IS the menu background, not a backdrop over page content.
        <div className="fixed inset-0 z-[9999] lg:hidden bg-white">
          <div className="relative z-[10000] min-h-dvh flex flex-col bg-white">
            {/* Header row: logo + close */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-primary/10 bg-white shrink-0">
              <BrandLogo size={48} />
              <button
                type="button"
                onClick={close}
                aria-label="Close menu"
                className="flex items-center justify-center w-11 h-11 -mr-1.5 text-text-secondary hover:text-text-primary transition-colors"
              >
                <X className="w-6 h-6" aria-hidden />
              </button>
            </div>

            {/* Scrollable nav */}
            <div className="flex-1 overflow-y-auto px-5 py-6 space-y-2 bg-white">
              <Link
                href="/"
                onClick={close}
                className="flex items-center min-h-[44px] px-3.5 py-2.5 rounded-xl text-base font-semibold text-text-primary hover:bg-primary-light transition-colors"
              >
                Home
              </Link>

              {/* Services collapsible */}
              <button
                type="button"
                onClick={() => setServicesExpanded((v) => !v)}
                className="w-full flex items-center justify-between min-h-[44px] px-3.5 py-2.5 rounded-xl text-base font-semibold text-text-primary hover:bg-primary-light transition-colors"
                aria-expanded={servicesExpanded}
              >
                Services
                <ChevronDown className={`w-4.5 h-4.5 text-text-secondary transition-transform ${servicesExpanded ? "rotate-180" : ""}`} aria-hidden />
              </button>
              {servicesExpanded && (
                <div className="pl-3 space-y-1">
                  {SERVICES_MENU.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={close}
                      className="flex items-center min-h-[44px] px-3.5 py-2 rounded-lg text-sm text-text-secondary hover:bg-primary-light hover:text-primary-dark transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}

              {/* Service Areas collapsible */}
              <button
                type="button"
                onClick={() => setAreasExpanded((v) => !v)}
                className="w-full flex items-center justify-between min-h-[44px] px-3.5 py-2.5 rounded-xl text-base font-semibold text-text-primary hover:bg-primary-light transition-colors"
                aria-expanded={areasExpanded}
              >
                Service Areas
                <ChevronDown className={`w-4.5 h-4.5 text-text-secondary transition-transform ${areasExpanded ? "rotate-180" : ""}`} aria-hidden />
              </button>
              {areasExpanded && (
                <div className="pl-3 space-y-1 max-h-56 overflow-y-auto">
                  {SERVICE_AREAS.map((area) => (
                    <Link
                      key={area.slug}
                      href={getAreaHref(area)}
                      onClick={close}
                      className="flex items-center min-h-[44px] px-3.5 py-2 rounded-lg text-sm text-text-secondary hover:bg-primary-light hover:text-primary-dark transition-colors"
                    >
                      {area.isPrimaryMarket ? `${area.name} (Main Service Area)` : area.name}
                    </Link>
                  ))}
                  <Link
                    href="/service-areas"
                    onClick={close}
                    className="flex items-center min-h-[44px] px-3.5 py-2 rounded-lg text-sm font-semibold text-cta hover:bg-primary-light transition-colors"
                  >
                    View All Service Areas →
                  </Link>
                </div>
              )}

              {/* About collapsible */}
              <button
                type="button"
                onClick={() => setAboutExpanded((v) => !v)}
                className="w-full flex items-center justify-between min-h-[44px] px-3.5 py-2.5 rounded-xl text-base font-semibold text-text-primary hover:bg-primary-light transition-colors"
                aria-expanded={aboutExpanded}
              >
                About
                <ChevronDown className={`w-4.5 h-4.5 text-text-secondary transition-transform ${aboutExpanded ? "rotate-180" : ""}`} aria-hidden />
              </button>
              {aboutExpanded && (
                <div className="pl-3 space-y-1">
                  {ABOUT_MENU.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={close}
                      className="flex items-center min-h-[44px] px-3.5 py-2 rounded-lg text-sm text-text-secondary hover:bg-primary-light hover:text-primary-dark transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}

              <div className="h-px bg-primary/10 my-3" />

              {PRIMARY_NAV_LINKS.filter((l) => l.href !== "/").map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  className="flex items-center min-h-[44px] px-3.5 py-2.5 rounded-xl text-base font-semibold text-text-primary hover:bg-primary-light transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA footer */}
            <div className="p-5 border-t border-primary/10 bg-white space-y-2.5 shrink-0">
              <PhoneLink
                className="btn btn-primary w-full min-h-[48px]"
                aria-label="Call Organic Mattress Cleaning now"
              >
                <Phone className="w-4 h-4" aria-hidden />
                Call Now
              </PhoneLink>
              <Link
                href="/contact"
                onClick={close}
                className="btn btn-outline w-full min-h-[48px]"
              >
                Get a Free Quote
                <ArrowRight className="w-4 h-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
