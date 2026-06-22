import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  subheading?: string;
  heading: string;
  description?: string;
  id?: string;
  className?: string;
  layout?: "centered" | "stacked";
}

export function SectionHeading({
  subheading,
  heading,
  description,
  id,
  className,
  layout = "centered",
}: SectionHeadingProps) {
  const centered = layout === "centered";
  return (
    <div className={cn(centered && "max-w-2xl mx-auto text-center", className)}>
      {subheading && (
        <p
          className={cn(
            "inline-flex items-center gap-1.5 text-xs font-bold text-cta tracking-widest uppercase mb-3",
            centered && "justify-center"
          )}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-leaf inline-block" aria-hidden />
          {subheading}
        </p>
      )}
      <h2 id={id} className="text-3xl sm:text-4xl font-bold text-text-primary leading-tight">
        {heading}
      </h2>
      {description && (
        <p className="mt-4 text-text-secondary text-base sm:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
