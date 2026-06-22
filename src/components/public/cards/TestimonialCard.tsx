import { Quote } from "lucide-react";
import type { Testimonial } from "@/types/testimonial";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-primary/12 p-6 flex flex-col gap-4 hover:border-cta/30 hover:shadow-md hover:shadow-primary/10 transition-all duration-200">
      <Quote className="w-6 h-6 text-cta/40 shrink-0" aria-hidden />
      <p className="text-sm text-text-secondary leading-relaxed flex-1">&ldquo;{testimonial.quote}&rdquo;</p>
      <div className="pt-3 border-t border-primary/10">
        <p className="text-sm font-bold text-text-primary">{testimonial.name}</p>
        <p className="text-xs text-text-secondary/70">
          {testimonial.location} &middot; {testimonial.service}
        </p>
      </div>
    </div>
  );
}
