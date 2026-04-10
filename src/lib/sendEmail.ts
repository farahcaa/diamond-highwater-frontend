/**
 * Sends a contractor lead email via the backend.
 *
 * Usage:
 *   await sendEmail({
 *     name: "Isaac",
 *     email: "",
 *     phone: "123-456-7890",
 *     address: "Indiana",
 *     message: "Company: Apex Roofing | Area: Indianapolis",
 *   });
 */
export async function sendEmail({
  name,
  email = "",
  phone,
  address,
  message,
  apiUrl = (import.meta as any).env.VITE_EMAIL_API_URL ??
    "https://util-api.chris-farah.com/api/email/send",
  clientId = "farahmarketing",
  clientSecret = "farahmarketing",
}: {
  name: string;
  email?: string;
  phone: string;
  address: string;
  message: string;
  apiUrl?: string;
  clientId?: string;
  clientSecret?: string;
}) {
  const payload = {
    clientId,
    clientSecret,
    subject: `New contractor lead from ${name || "Unknown"} — ${address}`,
    bodyText: `
New contractor lead from Farah Marketing website

Name: ${name}
Phone: ${phone}
Service Area: ${address}

${message}
    `.trim(),
    bodyHtml: `
      <h2>New contractor lead from Farah Marketing website</h2>
      <p><strong>Name:</strong> ${name || "N/A"}</p>
      <p><strong>Phone:</strong> ${phone || "N/A"}</p>
      <p><strong>Service Area:</strong> ${address || "N/A"}</p>
      <p><strong>Details:</strong></p>
      <p>${(message || "").replace(/\n/g, "<br/>")}</p>
    `,
  };

  try {
    const res = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      return { status: "error", message: `Failed: ${res.status} ${text}` };
    }

    const data = await res.json().catch(() => ({}));
    return { status: "ok", message: data?.status ?? "Email sent" };
  } catch (err: any) {
    return { status: "error", message: err?.message ?? "Unknown error" };
  }
}
