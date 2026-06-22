"use server";

import { z } from "zod";
import { sendLeadEmail } from "@/lib/email/sendLeadEmail";

const leadSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().optional(),
  email: z.string().email("Enter a valid email address").optional().or(z.literal("")),
  phone: z.string().min(7, "Enter a valid phone number"),
  propertyCity: z.string().optional(),
  address: z.string().optional(),
  serviceInterest: z.string().optional(),
  notes: z.string().optional(),
  sourcePageUrl: z.string().optional(),
  source: z.string().optional(),
});

export interface SubmitLeadState {
  success: boolean;
  errors?: Record<string, string[]>;
  message?: string;
}

export async function submitLead(_prev: SubmitLeadState, formData: FormData): Promise<SubmitLeadState> {
  const raw = {
    firstName: formData.get("firstName")?.toString() ?? "",
    lastName: formData.get("lastName")?.toString() || undefined,
    email: formData.get("email")?.toString() ?? "",
    phone: formData.get("phone")?.toString() ?? "",
    propertyCity: formData.get("propertyCity")?.toString() || undefined,
    address: formData.get("address")?.toString() || undefined,
    serviceInterest: formData.get("serviceInterest")?.toString() || undefined,
    notes: formData.get("notes")?.toString() || undefined,
    sourcePageUrl: formData.get("sourcePageUrl")?.toString() || undefined,
    source: formData.get("source")?.toString() || undefined,
  };

  const parsed = leadSchema.safeParse(raw);
  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  try {
    await sendLeadEmail(parsed.data);
  } catch (err) {
    console.error("[submitLead] sendLeadEmail failed:", err);
    return {
      success: false,
      message: "Something went wrong sending your request. Please call us directly.",
    };
  }

  return {
    success: true,
    message: "Thank you. We will follow up shortly to confirm your appointment.",
  };
}
