import { Resend } from "resend";
import { SITE_NAME } from "@/lib/constants/business";

export interface LeadEmailPayload {
  firstName: string;
  lastName?: string;
  email?: string;
  phone: string;
  propertyCity?: string;
  address?: string;
  serviceInterest?: string;
  notes?: string;
  sourcePageUrl?: string;
  source?: string;
}

export async function sendLeadEmail(payload: LeadEmailPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.LEAD_NOTIFICATION_EMAIL;

  if (!apiKey || !toEmail) {
    console.warn("[sendLeadEmail] RESEND_API_KEY or LEAD_NOTIFICATION_EMAIL not set — skipping email send");
    return { skipped: true };
  }

  const resend = new Resend(apiKey);

  const fullName = payload.lastName ? `${payload.firstName} ${payload.lastName}` : payload.firstName;

  const rows = [
    ["Name", fullName],
    payload.email ? ["Email", payload.email] : null,
    ["Phone", payload.phone],
    payload.propertyCity ? ["Property city", payload.propertyCity] : null,
    payload.address ? ["Address", payload.address] : null,
    payload.serviceInterest ? ["Service interest", payload.serviceInterest] : null,
    payload.notes ? ["Notes", payload.notes] : null,
    payload.source ? ["Lead source", payload.source] : null,
    payload.sourcePageUrl ? ["Source page", payload.sourcePageUrl] : null,
  ].filter(Boolean) as [string, string][];

  const html = `
    <h2>New lead: ${SITE_NAME}</h2>
    <table cellpadding="6" style="border-collapse:collapse">
      ${rows.map(([label, value]) => `<tr><td><strong>${label}</strong></td><td>${value}</td></tr>`).join("")}
    </table>
  `;

  return resend.emails.send({
    from: `${SITE_NAME} <leads@organicmattresscleaning.com>`,
    to: toEmail,
    subject: `New lead: ${fullName}`,
    html,
  });
}
