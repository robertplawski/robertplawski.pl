'use server'
import { headers } from "next/headers";

export async function sendWebhookMessage(
  content: string,
  username: string = "user",
  title: string = "Webhook event"
) {
  const headersList = await headers();

  const userAgent = headersList.get("user-agent") ?? "unknown";

  const ipAddress = headersList.get("cf-connecting-ip") ??               // Cloudflare specific
    headersList.get("x-forwarded-for")?.split(",")[0] ?? // Standard proxy
    headersList.get("x-real-ip") ??                      // Nginx/Other proxies
    "127.0.0.1";

  await fetch(process.env.DISCORD_WEBHOOK_URL!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      embeds: [
        {
          title,
          color: 0x5865F2,
          fields: [
            { name: "Content", value: content },
            {
              name: "IP Address",
              value: `\`${ipAddress}\``,
              inline: true,
            },
            {
              name: "User Agent",
              value: userAgent.slice(0, 1024), // Discord limit
              inline: false,
            },
          ],
          footer: {
            text: "Website webhook",
          },
          timestamp: new Date().toISOString(),
        },
      ],
    }),
  });
}
