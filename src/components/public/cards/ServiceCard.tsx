import Link from "next/link";
import { ArrowRight, Leaf, Sparkles, Droplets, ShieldCheck, Wind, Baby } from "lucide-react";
import type { ServiceIconName } from "@/types/content";

const ICON_MAP: Record<ServiceIconName, typeof Leaf> = {
  leaf: Leaf,
  sparkles: Sparkles,
  droplets: Droplets,
  "shield-check": ShieldCheck,
  wind: Wind,
  baby: Baby,
};

interface ServiceCardProps {
  name: string;
  fullPath: string;
  shortDescription: string;
  iconName: ServiceIconName;
  index?: number;
}

export function ServiceCard({ name, fullPath, shortDescription, iconName, index }: ServiceCardProps) {
  const Icon = ICON_MAP[iconName] ?? Leaf;
  return (
    <Link
      href={fullPath}
      className="group relative bg-white rounded-2xl border border-primary/12 p-7 hover:border-cta/35 hover:shadow-xl hover:shadow-primary/[0.12] hover:-translate-y-1 transition-all duration-250 flex flex-col overflow-hidden"
    >
      {/* Top accent bar — appears on hover */}
      <span
        aria-hidden
        className="absolute top-0 left-0 right-0 h-1 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
        style={{ background: "linear-gradient(90deg, var(--color-leaf-green), var(--color-cta-green))" }}
      />

      <div className="flex items-start justify-between">
        <div className="w-12 h-12 rounded-xl bg-primary-light ring-1 ring-primary/15 flex items-center justify-center shrink-0 group-hover:bg-cta/10 group-hover:ring-cta/25 transition-colors duration-200">
          <Icon className="w-5.5 h-5.5 text-primary-dark group-hover:text-cta transition-colors duration-200" aria-hidden />
        </div>
        {typeof index === "number" && (
          <span className="text-xs font-bold text-primary/20 tabular-nums" aria-hidden>
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
      </div>

      <div className="pt-6 flex flex-col flex-1">
        <h3 className="text-base font-bold text-text-primary mb-2 group-hover:text-primary-dark leading-snug">
          {name}
        </h3>
        <p className="text-sm text-text-secondary leading-relaxed mb-5 flex-1">{shortDescription}</p>
        <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-cta">
          Learn more
          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-cta/10 group-hover:bg-cta group-hover:text-white transition-colors duration-200">
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </div>
      </div>
    </Link>
  );
}
