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

function row(label: string, value: string | null | undefined): string {
  if (!value) return "";
  return `<tr>
    <td style="padding:6px 14px 6px 0;color:#6b7280;font-size:14px;white-space:nowrap;vertical-align:top;font-weight:600;">${label}</td>
    <td style="padding:6px 0;color:#111827;font-size:14px;">${value}</td>
  </tr>`;
}

export async function sendLeadEmail(payload: LeadEmailPayload): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.LEADS_TO_EMAIL;
  const fromEmail = process.env.LEADS_FROM_EMAIL;

  console.log("[sendLeadEmail] env check — RESEND_API_KEY:", !!apiKey, "LEADS_TO_EMAIL:", !!toEmail, "LEADS_FROM_EMAIL:", !!fromEmail);

  if (!apiKey || !toEmail || !fromEmail) {
    console.warn("[sendLeadEmail] missing env vars — skipping email send");
    return;
  }

  const resend = new Resend(apiKey);
  const fullName = payload.lastName ? `${payload.firstName} ${payload.lastName}` : payload.firstName;

  const submittedAt = new Date().toLocaleString("en-US", {
    timeZone: "America/Los_Angeles",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const html = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f9fafb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <div style="max-width:560px;margin:32px auto;background:#ffffff;border-radius:8px;border:1px solid #e5e7eb;overflow:hidden;">
    <div style="background:#2d7a4f;padding:20px 28px;">
      <p style="margin:0;color:#ffffff;font-size:11px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;">${SITE_NAME}</p>
      <h1 style="margin:4px 0 0;color:#ffffff;font-size:22px;font-weight:700;">New Website Lead</h1>
    </div>
    <div style="padding:28px;">
      <table style="border-collapse:collapse;width:100%;">
        ${row("Name", fullName)}
        ${row("Phone", payload.phone)}
        ${row("Email", payload.email)}
        ${row("City", payload.propertyCity)}
        ${row("Address", payload.address)}
        ${row("Service", payload.serviceInterest)}
        ${row("Message", payload.notes)}
        ${row("Page URL", payload.sourcePageUrl)}
        ${row("Lead Source", payload.source)}
        ${row("Submitted", submittedAt)}
      </table>
    </div>
  </div>
</body>
</html>`;

  console.log("[sendLeadEmail] sending to:", toEmail, "from:", fromEmail);

  const { error } = await resend.emails.send({
    from: fromEmail,
    to: toEmail,
    replyTo: payload.email || undefined,
    subject: `New Website Lead - Organic Mattress Cleaning — ${fullName}`,
    html,
  });

  if (error) {
    console.error("[sendLeadEmail] Resend error:", JSON.stringify(error));
    throw new Error(`Resend send failed: ${JSON.stringify(error)}`);
  }

  console.log("[sendLeadEmail] sent successfully");
}
