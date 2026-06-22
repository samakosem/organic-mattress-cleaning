"use client";

import { useEffect } from "react";
import { useActionState } from "react";
import { useRouter } from "next/navigation";
import { submitLead, type SubmitLeadState } from "@/lib/actions/leads";
import { cn } from "@/lib/utils";
import { Loader2, ArrowRight } from "lucide-react";

const serviceOptions = [
  { value: "", label: "What are you interested in?" },
  { value: "organic_mattress_cleaning", label: "Organic Mattress Cleaning" },
  { value: "mattress_sanitizing", label: "Mattress Sanitizing" },
  { value: "stain_removal", label: "Stain Removal" },
  { value: "dust_mite_cleaning", label: "Dust Mite Cleaning" },
  { value: "urine_odor_removal", label: "Urine & Odor Removal" },
  { value: "allergy_cleaning", label: "Allergy Mattress Cleaning" },
  { value: "baby_mattress_cleaning", label: "Baby Mattress Cleaning" },
  { value: "not_sure", label: "Not sure yet" },
];

interface LeadFormProps {
  variant?: "default" | "contact";
  serviceInterest?: string;
  className?: string;
}

const initialState: SubmitLeadState = { success: false, errors: undefined, message: undefined };

const inputBase =
  "w-full px-3.5 py-2.5 rounded-lg border text-sm text-text-primary placeholder-stone-400 bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition";
const labelBase = "block text-sm font-medium text-text-secondary mb-1";
const errorText = "text-xs text-red-500 mt-1";
const requiredMark = <span className="text-red-400 ml-0.5">*</span>;
const optionalMark = <span className="text-stone-400 font-normal ml-1">(optional)</span>;

export function LeadForm({ variant = "default", serviceInterest, className }: LeadFormProps) {
  const router = useRouter();
  const [state, action, isPending] = useActionState(submitLead, initialState);

  useEffect(() => {
    if (state.success) {
      router.push("/thank-you");
    }
  }, [state.success, router]);

  function fieldError(field: string) {
    return state.errors?.[field]?.[0] ?? null;
  }

  return (
    <form action={action} className={cn("space-y-4", className)} noValidate>
      <input type="hidden" name="sourcePageUrl" value={typeof window !== "undefined" ? window.location.href : ""} />
      {serviceInterest && <input type="hidden" name="serviceInterest" value={serviceInterest} />}

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="lf-firstName" className={labelBase}>
            First name{requiredMark}
          </label>
          <input
            id="lf-firstName"
            name="firstName"
            type="text"
            autoComplete="given-name"
            required
            className={cn(inputBase, fieldError("firstName") ? "border-red-400" : "border-stone-200")}
            placeholder="Jane"
          />
          {fieldError("firstName") && <p className={errorText}>{fieldError("firstName")}</p>}
        </div>
        <div>
          <label htmlFor="lf-lastName" className={labelBase}>
            Last name{requiredMark}
          </label>
          <input
            id="lf-lastName"
            name="lastName"
            type="text"
            autoComplete="family-name"
            required
            className={cn(inputBase, fieldError("lastName") ? "border-red-400" : "border-stone-200")}
            placeholder="Smith"
          />
          {fieldError("lastName") && <p className={errorText}>{fieldError("lastName")}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="lf-email" className={labelBase}>
          Email address{requiredMark}
        </label>
        <input
          id="lf-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className={cn(inputBase, fieldError("email") ? "border-red-400" : "border-stone-200")}
          placeholder="jane@example.com"
        />
        {fieldError("email") && <p className={errorText}>{fieldError("email")}</p>}
      </div>

      <div>
        <label htmlFor="lf-phone" className={labelBase}>
          Phone number{requiredMark}
        </label>
        <input
          id="lf-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          required
          className={cn(inputBase, fieldError("phone") ? "border-red-400" : "border-stone-200")}
          placeholder="(310) 555-0100"
        />
        {fieldError("phone") && <p className={errorText}>{fieldError("phone")}</p>}
      </div>

      {variant !== "contact" && (
        <>
          <div>
            <label htmlFor="lf-city" className={labelBase}>
              Property city{requiredMark}
            </label>
            <input
              id="lf-city"
              name="propertyCity"
              type="text"
              autoComplete="address-level2"
              required
              className={cn(inputBase, fieldError("propertyCity") ? "border-red-400" : "border-stone-200")}
              placeholder="e.g. Santa Monica, Burbank, Venice…"
            />
            {fieldError("propertyCity") && <p className={errorText}>{fieldError("propertyCity")}</p>}
          </div>

          {!serviceInterest && (
            <div>
              <label htmlFor="lf-service" className={labelBase}>
                Service interest{requiredMark}
              </label>
              <select
                id="lf-service"
                name="serviceInterest"
                required
                className={cn(inputBase, "bg-white", fieldError("serviceInterest") ? "border-red-400" : "border-stone-200")}
              >
                {serviceOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              {fieldError("serviceInterest") && <p className={errorText}>{fieldError("serviceInterest")}</p>}
            </div>
          )}
        </>
      )}

      <div>
        <label htmlFor="lf-notes" className={labelBase}>
          {variant === "contact" ? "Your message" : "Notes"}
          {optionalMark}
        </label>
        <textarea
          id="lf-notes"
          name="notes"
          rows={variant === "contact" ? 4 : 3}
          className={cn(inputBase, "border-stone-200 resize-none")}
          placeholder={variant === "contact" ? "How can we help?" : "Mattress size, stains, odor concerns…"}
        />
      </div>

      {state.message && !state.success && (
        <p className="text-sm text-red-500">{state.message}</p>
      )}

      <div className="pt-1">
        <button
          type="submit"
          disabled={isPending}
          className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-cta hover:bg-primary-dark text-white text-sm font-bold transition-all shadow-md shadow-cta/25 hover:shadow-lg hover:shadow-cta/30 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isPending ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              {variant === "contact" ? "Send Message" : "Get My Free Quote"}
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
        <p className="text-xs text-stone-400 text-center mt-2.5 leading-relaxed">
          We&apos;ll follow up shortly to confirm your appointment. No spam.
        </p>
      </div>
    </form>
  );
}
