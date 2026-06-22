"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { PRIMARY_NAV_LINKS, SERVICES_MENU, ABOUT_MENU } from "@/lib/constants/nav";
import { SERVICE_AREAS, getAreaHref } from "@/data/serviceAreas";
import { cn } from "@/lib/utils";

export function DesktopNav() {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const linkClass = (active: boolean) =>
    cn(
      "text-sm font-medium transition-colors text-text-secondary hover:text-text-primary whitespace-nowrap",
      active && "text-primary-dark"
    );

  return (
    <nav className="hidden lg:flex items-center gap-4 xl:gap-7 shrink-0">
      <Link href="/" className={cn(linkClass(pathname === "/"), "whitespace-nowrap")}>
        Home
      </Link>

      {/* Services dropdown */}
      <div
        className="relative"
        onMouseEnter={() => setServicesOpen(true)}
        onMouseLeave={() => setServicesOpen(false)}
      >
        <button
          type="button"
          className={cn(linkClass(pathname.includes("mattress-cleaning") || SERVICES_MENU.some((s) => s.href === pathname)), "inline-flex items-center gap-1 whitespace-nowrap")}
        >
          Services
          <ChevronDown className="w-3.5 h-3.5" aria-hidden />
        </button>
        {servicesOpen && (
          <div className="absolute top-full left-0 pt-2 w-64 z-10">
            <div className="bg-white rounded-2xl border border-primary/15 shadow-lg shadow-primary/10 p-2">
              {SERVICES_MENU.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3.5 py-2.5 rounded-xl text-sm text-text-secondary hover:bg-primary-light hover:text-primary-dark transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Service Areas dropdown */}
      <div
        className="relative"
        onMouseEnter={() => setAreasOpen(true)}
        onMouseLeave={() => setAreasOpen(false)}
      >
        <button
          type="button"
          className={cn(linkClass(pathname.startsWith("/service-areas")), "inline-flex items-center gap-1 whitespace-nowrap")}
        >
          Service Areas
          <ChevronDown className="w-3.5 h-3.5" aria-hidden />
        </button>
        {areasOpen && (
          <div className="absolute top-full right-0 pt-2 w-72 z-10">
            <div className="bg-white rounded-2xl border border-primary/15 shadow-lg shadow-primary/10 p-2 max-h-96 overflow-y-auto">
              <div className="grid grid-cols-2 gap-0.5">
                {SERVICE_AREAS.map((area) => (
                  <Link
                    key={area.slug}
                    href={getAreaHref(area)}
                    className="block px-3 py-2 rounded-lg text-sm text-text-secondary hover:bg-primary-light hover:text-primary-dark transition-colors"
                  >
                    {area.isPrimaryMarket ? `${area.name} (Main Service Area)` : area.name}
                  </Link>
                ))}
              </div>
              <div className="border-t border-primary/10 mt-1 pt-1">
                <Link
                  href="/service-areas"
                  className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-cta hover:bg-primary-light transition-colors"
                >
                  View All Service Areas →
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {PRIMARY_NAV_LINKS.filter((l) => l.href === "/pricing").map((link) => (
        <Link key={link.href} href={link.href} className={linkClass(pathname === link.href)}>
          {link.name}
        </Link>
      ))}

      {/* About dropdown */}
      <div
        className="relative"
        onMouseEnter={() => setAboutOpen(true)}
        onMouseLeave={() => setAboutOpen(false)}
      >
        <button
          type="button"
          className={cn(linkClass(ABOUT_MENU.some((a) => a.href === pathname)), "inline-flex items-center gap-1 whitespace-nowrap")}
        >
          About
          <ChevronDown className="w-3.5 h-3.5" aria-hidden />
        </button>
        {aboutOpen && (
          <div className="absolute top-full left-0 pt-2 w-56 z-10">
            <div className="bg-white rounded-2xl border border-primary/15 shadow-lg shadow-primary/10 p-2">
              {ABOUT_MENU.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3.5 py-2.5 rounded-xl text-sm text-text-secondary hover:bg-primary-light hover:text-primary-dark transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {PRIMARY_NAV_LINKS.filter((l) => l.href !== "/" && l.href !== "/pricing").map((link) => (
        <Link key={link.href} href={link.href} className={linkClass(pathname === link.href)}>
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
