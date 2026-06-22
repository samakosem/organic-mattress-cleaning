import Link from "next/link";
import { Phone, MapPin, ArrowRight, Leaf, ShieldCheck, Clock } from "lucide-react";
import { PhoneLink } from "./PhoneLink";
import { BrandLogo } from "./BrandLogo";
import { SERVICES_MENU } from "@/lib/constants/nav";
import {
  SITE_NAME,
  BUSINESS_FULL_ADDRESS,
  BUSINESS_HOURS_DISPLAY,
  GOOGLE_MAPS_URL,
  SOCIAL_URLS,
} from "@/lib/constants/business";
import { SERVICE_AREAS, getAreaHref } from "@/data/serviceAreas";

const getStarted = [
  { name: "Get a Free Quote", href: "/contact" },
  { name: "Contact Us", href: "/contact" },
];

const company = [
  { name: "About Us", href: "/about" },
  { name: "Our Organic Products", href: "/organic-cleaning-products" },
  { name: "Before & After Gallery", href: "/gallery" },
  { name: "Pricing", href: "/pricing" },
  { name: "Reviews", href: "/reviews" },
  { name: "Blog", href: "/blog" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

const featuredCities = SERVICE_AREAS.slice(0, 5).map((area) => ({
  name: area.isPrimaryMarket ? `${area.name} (Main Service Area)` : area.name,
  href: getAreaHref(area),
}));

const helpfulGuides = [
  { name: "Mattress Stain Guide", href: "/mattress-stain-guide" },
  { name: "Mattress Material Cleaning Guide", href: "/mattress-material-cleaning-guide" },
  { name: "Mattress Cleaning After-Care", href: "/after-care" },
  { name: "Professional vs DIY Mattress Cleaning", href: "/professional-vs-diy-mattress-cleaning" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white/80 relative">
      {/* Top eco accent line */}
      <div
        className="h-1 w-full"
        style={{ background: "linear-gradient(90deg, var(--color-leaf-green) 0%, var(--color-organic-green) 50%, var(--color-water-blue) 100%)" }}
        aria-hidden
      />
      {/* CTA strip */}
      <div className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-8 sm:py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div>
            <p className="text-xs font-semibold text-leaf tracking-widest uppercase mb-1">
              Ready for a fresher mattress?
            </p>
            <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
              Book your organic mattress cleaning today
            </h3>
            <p className="text-white/60 text-sm mt-1">
              Free quote · Non-toxic process · Available 24/7
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 w-full sm:w-auto justify-center px-6 py-4 rounded-xl bg-cta hover:bg-primary-dark text-white font-bold text-sm transition-colors min-h-[52px] shadow-lg shadow-black/20"
            >
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <PhoneLink
              className="inline-flex items-center gap-2 w-full sm:w-auto justify-center px-6 py-4 rounded-xl border border-white/20 hover:border-white/40 text-white/85 hover:text-white font-semibold text-sm transition-colors min-h-[52px]"
              aria-label="Call Organic Mattress Cleaning now"
            >
              <Phone className="w-4 h-4 shrink-0" />
              Call Now
            </PhoneLink>
          </div>
        </div>
      </div>

      {/* Main body */}
      <div className="max-w-6xl mx-auto px-5 sm:px-6 py-12 sm:py-14">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 mb-10 sm:mb-12">
          {/* Brand column */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-2">
            <div className="mb-5">
              <BrandLogo onDark size={56} />
            </div>

            <p className="text-sm leading-relaxed text-white/65 mb-5 max-w-xs">
              Eco-friendly, non-toxic mattress cleaning serving Los Angeles. Family-safe and
              pet-safe deep cleaning that leaves your mattress fresh and sanitized.
            </p>

            <div className="flex flex-wrap gap-x-4 gap-y-1.5 mb-5">
              <div className="flex items-center gap-1.5 text-xs text-white/70">
                <Leaf className="w-3.5 h-3.5 text-leaf shrink-0" />
                Eco-Friendly &amp; Non-Toxic
              </div>
              <div className="flex items-center gap-1.5 text-xs text-white/70">
                <ShieldCheck className="w-3.5 h-3.5 text-leaf shrink-0" />
                Family &amp; Pet Safe
              </div>
              <div className="flex items-center gap-1.5 text-xs text-white/70">
                <Clock className="w-3.5 h-3.5 text-leaf shrink-0" />
                {BUSINESS_HOURS_DISPLAY}
              </div>
            </div>

            <div className="space-y-2.5 mb-5">
              <div className="flex items-center gap-2.5 text-sm">
                <Phone className="w-3.5 h-3.5 text-white/40 shrink-0" />
                <PhoneLink className="text-white/80 hover:text-white transition-colors" aria-label="Call Organic Mattress Cleaning" />
              </div>
              <div className="flex items-start gap-2.5 text-sm">
                <MapPin className="w-3.5 h-3.5 text-white/40 shrink-0 mt-0.5" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-white/80">{BUSINESS_FULL_ADDRESS}</span>
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-leaf hover:text-leaf/80 transition-colors"
                  >
                    View on Google Maps →
                  </a>
                </div>
              </div>
            </div>

            <a
              href={SOCIAL_URLS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/15 flex items-center justify-center text-white/70 hover:text-white transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden>
                <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.883v2.27h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
              </svg>
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {SERVICES_MENU.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-white/65 hover:text-white transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              {company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/65 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Started + Cities */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-4">
              Get Started
            </h3>
            <ul className="space-y-2.5 mb-6">
              {getStarted.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-white/65 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-3 mt-6">
              Areas Served
            </h3>
            <ul className="space-y-2">
              {featuredCities.map((loc) => (
                <li key={loc.href}>
                  <Link href={loc.href} className="text-sm text-white/65 hover:text-white transition-colors">
                    {loc.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/service-areas" className="text-sm text-leaf hover:text-leaf/80 transition-colors font-medium">
                  View all areas →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Helpful Guides */}
        <div className="border-t border-white/10 pt-8 sm:pt-10 mb-10 sm:mb-12">
          <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Helpful Guides</h3>
          <div className="flex flex-wrap gap-x-6 gap-y-2.5">
            {helpfulGuides.map((guide) => (
              <Link key={guide.href} href={guide.href} className="text-sm text-white/65 hover:text-white transition-colors">
                {guide.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/45 text-center sm:text-left">
          <span>
            © {year} {SITE_NAME}. All rights reserved.
          </span>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-white/70 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white/70 transition-colors">
              Terms
            </Link>
            <span>
              Built with Love by{" "}
              <a href="https://Bigbrandify.com" target="_blank" rel="noopener noreferrer" className="text-leaf hover:text-leaf/80 transition-colors">
                BigBrandify
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
