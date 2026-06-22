"use client";

import { useActionState } from "react";
import { Loader2, ArrowRight, Phone } from "lucide-react";
import { submitLead, type SubmitLeadState } from "@/lib/actions/leads";
import { PhoneLink } from "@/components/public/layout/PhoneLink";
import { SERVICES } from "@/data/services";
import { cn } from "@/lib/utils";

const initialState: SubmitLeadState = { success: false, errors: undefined, message: undefined };

const fieldBase =
  "w-full px-3.5 py-2.5 rounded-xl border text-sm text-text-primary placeholder-text-secondary/50 bg-white/80 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition min-h-[44px]";
const labelBase = "block text-xs font-semibold text-text-primary/80 mb-1";
const errorText = "text-xs text-red-600 mt-1";

interface CompactHeroLeadFormProps {
  source?: string;
  className?: string;
  /** Preselects the Service dropdown — used on service pages to default to that service. */
  defaultServiceSlug?: string;
  /** Unique per render so field ids never collide when the form appears more than once on a page (desktop + mobile slots). */
  idPrefix?: string;
}

export function CompactHeroLeadForm({
  source = "homepage-hero-glass-form",
  className,
  defaultServiceSlug = "",
  idPrefix = "hero",
}: CompactHeroLeadFormProps) {
  const [state, action, isPending] = useActionState(submitLead, initialState);

  function fieldError(field: string) {
    return state.errors?.[field]?.[0] ?? null;
  }

  function id(field: string) {
    return `${idPrefix}-${field}`;
  }

  if (state.success) {
    return (
      <div
        className={cn(
          "rounded-3xl border border-white/60 bg-white/70 backdrop-blur-xl shadow-xl p-6 text-center",
          className
        )}
      >
        <p className="text-base font-bold text-text-primary mb-1.5">Request received</p>
        <p className="text-sm text-text-secondary leading-relaxed">
          Thank you. We&apos;ll follow up shortly to confirm your appointment.
        </p>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative rounded-3xl border border-white/60 bg-white/70 backdrop-blur-xl shadow-xl shadow-primary/10 overflow-hidden",
        className
      )}
    >
      {/* Subtle green top accent */}
      <div
        aria-hidden
        className="absolute top-0 inset-x-0 h-1"
        style={{ background: "linear-gradient(90deg, var(--color-leaf-green), var(--color-cta-green))" }}
      />

      <div className="p-5 sm:p-6">
        <div className="inline-flex items-center gap-1.5 mb-3">
          <span className="relative flex h-1.5 w-1.5" aria-hidden>
            <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-cta opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cta" />
          </span>
          <span className="text-[11px] font-bold text-primary-dark uppercase tracking-wide">
            24/7 Dispatch Available Now
          </span>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-text-primary leading-tight mb-1.5">
          Get a Fast Free Quote
        </h2>
        <p className="text-xs text-text-secondary mb-5">24/7 dispatch • Eco-friendly cleaning • Los Angeles</p>

        <form action={action} className="space-y-3" noValidate>
          <input type="hidden" name="source" value={source} />
          <input
            type="hidden"
            name="sourcePageUrl"
            value={typeof window !== "undefined" ? window.location.href : ""}
          />

          <div>
            <label htmlFor={id("firstName")} className={labelBase}>
              First name
            </label>
            <input
              id={id("firstName")}
              name="firstName"
              type="text"
              autoComplete="given-name"
              required
              aria-required="true"
              placeholder="Jane"
              className={cn(fieldBase, fieldError("firstName") ? "border-red-400" : "border-white/70")}
            />
            {fieldError("firstName") && <p className={errorText}>{fieldError("firstName")}</p>}
          </div>

          <div>
            <label htmlFor={id("phone")} className={labelBase}>
              Phone number
            </label>
            <input
              id={id("phone")}
              name="phone"
              type="tel"
              autoComplete="tel"
              required
              aria-required="true"
              placeholder="(310) 555-0100"
              className={cn(fieldBase, fieldError("phone") ? "border-red-400" : "border-white/70")}
            />
            {fieldError("phone") && <p className={errorText}>{fieldError("phone")}</p>}
          </div>

          <div>
            <label htmlFor={id("service")} className={labelBase}>
              Service
            </label>
            <select
              id={id("service")}
              name="serviceInterest"
              aria-label="Service interest"
              className={cn(fieldBase, "bg-white/80", "border-white/70")}
              defaultValue={defaultServiceSlug}
            >
              <option value="">What do you need?</option>
              {SERVICES.map((s) => (
                <option key={s.slug} value={s.slug}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor={id("address")} className={labelBase}>
              Address
            </label>
            <input
              id={id("address")}
              name="address"
              type="text"
              autoComplete="street-address"
              placeholder="Property address"
              className={cn(fieldBase, "border-white/70")}
            />
            <p className="text-[11px] text-text-secondary/70 mt-1">
              Enter the service address so we can confirm availability.
            </p>
          </div>

          <div>
            <label htmlFor={id("notes")} className={labelBase}>
              What happened? <span className="text-text-secondary/50 font-normal">(optional)</span>
            </label>
            <textarea
              id={id("notes")}
              name="notes"
              rows={2}
              placeholder="Stain, odor, general cleaning…"
              className={cn(fieldBase, "resize-none border-white/70")}
            />
          </div>

          {state.message && !state.success && <p className="text-sm text-red-600">{state.message}</p>}

          <button
            type="submit"
            disabled={isPending}
            className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-cta hover:bg-primary-dark text-white text-sm font-bold transition-all shadow-md shadow-cta/25 hover:shadow-lg hover:shadow-cta/30 disabled:opacity-60 disabled:cursor-not-allowed min-h-[44px]"
          >
            {isPending ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" aria-hidden />
                Sending…
              </>
            ) : (
              <>
                Request My Free Quote
                <ArrowRight className="w-4 h-4" aria-hidden />
              </>
            )}
          </button>

          <PhoneLink
            className="flex items-center justify-center gap-1.5 text-xs font-semibold text-text-secondary hover:text-primary-dark transition-colors pt-1 min-h-[44px]"
            aria-label="Call Organic Mattress Cleaning now at (800) 735-1242"
          >
            <Phone className="w-3.5 h-3.5" aria-hidden />
            Need help now? Call (800) 735-1242
          </PhoneLink>
        </form>
      </div>
    </div>
  );
}
