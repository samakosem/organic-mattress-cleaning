"use client";

import { useState, type FormEvent } from "react";
import { MapPin, Phone, Search } from "lucide-react";
import { PhoneLink } from "@/components/public/layout/PhoneLink";
import { SERVICE_AREAS } from "@/data/serviceAreas";

interface CheckResult {
  matched: boolean;
  cityName?: string;
}

function checkServiceArea(query: string): CheckResult {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return { matched: false };

  const match = SERVICE_AREAS.find(
    (area) => area.name.toLowerCase().includes(normalized) || normalized.includes(area.name.toLowerCase())
  );

  return match ? { matched: true, cityName: match.name } : { matched: false };
}

/**
 * City/ZIP-style lookup against our known service area list. Not a live
 * dispatch or GPS feature — just a friendly way to confirm coverage and
 * push toward a call.
 */
export function ServiceAreaChecker() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<CheckResult | null>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setResult(checkServiceArea(query));
  }

  return (
    <div className="rounded-3xl bg-white border border-primary/15 shadow-sm p-6 sm:p-8">
      <div className="flex items-center gap-2.5 mb-4">
        <div className="w-9 h-9 rounded-xl bg-primary-light flex items-center justify-center shrink-0">
          <MapPin className="w-4.5 h-4.5 text-cta" aria-hidden />
        </div>
        <h3 className="text-lg font-bold text-text-primary">Check Your Service Area</h3>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5 mb-4">
        <label htmlFor="area-check-input" className="sr-only">
          Enter your city or ZIP code
        </label>
        <input
          id="area-check-input"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter your city or ZIP code"
          className="flex-1 px-3.5 py-2.5 rounded-lg border border-stone-200 text-sm text-text-primary placeholder-stone-400 bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
        />
        <button type="submit" className="btn btn-primary justify-center">
          <Search className="w-4 h-4" aria-hidden />
          Check Availability
        </button>
      </form>

      {result && (
        <div className="rounded-xl bg-primary-light p-4 mb-2">
          {result.matched ? (
            <p className="text-sm text-primary-dark leading-relaxed">
              Mobile mattress cleaning is available in <strong>{result.cityName}</strong>. Call now to check the
              fastest opening.
            </p>
          ) : (
            <p className="text-sm text-primary-dark leading-relaxed">
              We may still be able to help. Call now and we&apos;ll confirm availability.
            </p>
          )}
        </div>
      )}

      <PhoneLink
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-cta hover:text-primary-dark transition-colors"
        aria-label="Call Organic Mattress Cleaning now"
      >
        <Phone className="w-3.5 h-3.5" aria-hidden />
        Call Now
      </PhoneLink>
    </div>
  );
}
