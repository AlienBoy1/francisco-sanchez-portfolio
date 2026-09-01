import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const logoPath =
  "C:/Users/Hoppe/OneDrive/Documentos/HTL WorkSpace/htlsopsadmin/public/htl_operations_logo.png";
const emblemPath =
  "C:/Users/Hoppe/OneDrive/Documentos/HTL WorkSpace/htlsopsadmin/public/icon-emblem.png";
const outDir = "public/media/projects/htl-operations";
fs.mkdirSync(outDir, { recursive: true });

const width = 1600;
const height = 1000;

const logoBuf = await sharp(logoPath)
  .resize({ width: 380, withoutEnlargement: true })
  .png()
  .toBuffer();
const emblemBuf = await sharp(emblemPath)
  .resize({ width: 88, withoutEnlargement: true })
  .png()
  .toBuffer();

const coverSvg =
  Buffer.from(`<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0B1B3A"/>
      <stop offset="45%" stop-color="#123056"/>
      <stop offset="100%" stop-color="#1D4ED8"/>
    </linearGradient>
    <linearGradient id="panel" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#F8FAFC"/>
      <stop offset="100%" stop-color="#E2E8F0"/>
    </linearGradient>
    <linearGradient id="sidebar" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0F172A"/>
      <stop offset="100%" stop-color="#1E293B"/>
    </linearGradient>
  </defs>

  <rect width="100%" height="100%" fill="url(#bg)"/>
  <circle cx="1320" cy="180" r="220" fill="#60A5FA" fill-opacity="0.22"/>
  <circle cx="220" cy="860" r="180" fill="#34D399" fill-opacity="0.16"/>

  <rect x="56" y="64" width="1488" height="872" rx="22" fill="url(#panel)" stroke="#FFFFFF" stroke-opacity="0.55"/>
  <rect x="56" y="64" width="1488" height="70" rx="22" fill="#0F172A"/>
  <rect x="56" y="110" width="1488" height="24" fill="#0F172A"/>

  <circle cx="96" cy="99" r="8" fill="#F87171"/>
  <circle cx="122" cy="99" r="8" fill="#FBBF24"/>
  <circle cx="148" cy="99" r="8" fill="#34D399"/>
  <text x="188" y="106" fill="#E2E8F0" font-family="Segoe UI, Arial, sans-serif" font-size="20" font-weight="600">HTL Operations</text>
  <text x="1288" y="106" fill="#93C5FD" font-family="Consolas, monospace" font-size="16">ops · live</text>

  <rect x="56" y="134" width="280" height="802" fill="url(#sidebar)"/>
  <text x="92" y="190" fill="#94A3B8" font-family="Segoe UI, Arial, sans-serif" font-size="13" letter-spacing="2.5">WORKSPACE</text>
  <rect x="88" y="214" width="216" height="40" rx="10" fill="#2563EB"/>
  <text x="108" y="240" fill="#FFFFFF" font-family="Segoe UI, Arial, sans-serif" font-size="16" font-weight="600">Dashboard</text>
  <text x="108" y="296" fill="#CBD5E1" font-family="Segoe UI, Arial, sans-serif" font-size="16">My Tasks</text>
  <text x="108" y="344" fill="#CBD5E1" font-family="Segoe UI, Arial, sans-serif" font-size="16">SOP Workflows</text>
  <text x="108" y="392" fill="#CBD5E1" font-family="Segoe UI, Arial, sans-serif" font-size="16">Quality · SGC</text>
  <text x="108" y="440" fill="#CBD5E1" font-family="Segoe UI, Arial, sans-serif" font-size="16">Admin</text>

  <rect x="380" y="176" width="360" height="150" rx="16" fill="#FFFFFF" stroke="#BBF7D0" stroke-width="2"/>
  <text x="408" y="224" fill="#64748B" font-family="Segoe UI, Arial, sans-serif" font-size="15" letter-spacing="1.5">ON TRACK</text>
  <text x="408" y="286" fill="#059669" font-family="Segoe UI, Arial, sans-serif" font-size="52" font-weight="700">128</text>
  <text x="540" y="286" fill="#64748B" font-family="Segoe UI, Arial, sans-serif" font-size="18">SLA green</text>

  <rect x="764" y="176" width="360" height="150" rx="16" fill="#FFFFFF" stroke="#FDE68A" stroke-width="2"/>
  <text x="792" y="224" fill="#64748B" font-family="Segoe UI, Arial, sans-serif" font-size="15" letter-spacing="1.5">AT RISK</text>
  <text x="792" y="286" fill="#D97706" font-family="Segoe UI, Arial, sans-serif" font-size="52" font-weight="700">24</text>
  <text x="910" y="286" fill="#64748B" font-family="Segoe UI, Arial, sans-serif" font-size="18">SLA yellow</text>

  <rect x="1148" y="176" width="348" height="150" rx="16" fill="#FFFFFF" stroke="#FECACA" stroke-width="2"/>
  <text x="1176" y="224" fill="#64748B" font-family="Segoe UI, Arial, sans-serif" font-size="15" letter-spacing="1.5">OVERDUE</text>
  <text x="1176" y="286" fill="#DC2626" font-family="Segoe UI, Arial, sans-serif" font-size="52" font-weight="700">7</text>
  <text x="1268" y="286" fill="#64748B" font-family="Segoe UI, Arial, sans-serif" font-size="18">SLA red</text>

  <rect x="380" y="356" width="1116" height="520" rx="16" fill="#FFFFFF" stroke="#CBD5E1"/>
  <text x="416" y="416" fill="#0F172A" font-family="Segoe UI, Arial, sans-serif" font-size="30" font-weight="700">Operational control</text>
  <text x="416" y="456" fill="#475569" font-family="Segoe UI, Arial, sans-serif" font-size="18">SOP execution · business-hours SLA · assignment inbox</text>
  <rect x="416" y="484" width="280" height="4" rx="2" fill="#2563EB"/>

  <rect x="416" y="520" width="500" height="84" rx="12" fill="#F8FAFC" stroke="#E2E8F0"/>
  <circle cx="456" cy="562" r="9" fill="#10B981"/>
  <text x="484" y="556" fill="#0F172A" font-family="Segoe UI, Arial, sans-serif" font-size="17" font-weight="600">SOP2 · Requisition #1042</text>
  <text x="484" y="584" fill="#64748B" font-family="Segoe UI, Arial, sans-serif" font-size="14">Due in 4h 20m · assignee notified</text>

  <rect x="948" y="520" width="508" height="84" rx="12" fill="#F8FAFC" stroke="#E2E8F0"/>
  <circle cx="988" cy="562" r="9" fill="#F59E0B"/>
  <text x="1016" y="556" fill="#0F172A" font-family="Segoe UI, Arial, sans-serif" font-size="17" font-weight="600">SOP6 · Project stage review</text>
  <text x="1016" y="584" fill="#64748B" font-family="Segoe UI, Arial, sans-serif" font-size="14">Yellow threshold · supervisor queue</text>

  <rect x="416" y="628" width="500" height="84" rx="12" fill="#F8FAFC" stroke="#E2E8F0"/>
  <circle cx="456" cy="670" r="9" fill="#10B981"/>
  <text x="484" y="664" fill="#0F172A" font-family="Segoe UI, Arial, sans-serif" font-size="17" font-weight="600">SOP1 · Quote package</text>
  <text x="484" y="692" fill="#64748B" font-family="Segoe UI, Arial, sans-serif" font-size="14">On track · export ready</text>

  <rect x="948" y="628" width="508" height="84" rx="12" fill="#F8FAFC" stroke="#E2E8F0"/>
  <circle cx="988" cy="670" r="9" fill="#EF4444"/>
  <text x="1016" y="664" fill="#0F172A" font-family="Segoe UI, Arial, sans-serif" font-size="17" font-weight="600">SOP10 · Design dual timer</text>
  <text x="1016" y="692" fill="#64748B" font-family="Segoe UI, Arial, sans-serif" font-size="14">Outside SLA · escalation path</text>

  <text x="416" y="780" fill="#2563EB" font-family="Consolas, monospace" font-size="16">Vite · React · Supabase · PWA</text>
  <text x="416" y="820" fill="#64748B" font-family="Segoe UI, Arial, sans-serif" font-size="14" letter-spacing="3">ENTERPRISE OPERATIONS</text>
</svg>`);

await sharp(coverSvg)
  .composite([
    { input: emblemBuf, left: 108, top: 820 },
    { input: logoBuf, left: 1120, top: 760 },
  ])
  .webp({ quality: 90 })
  .toFile(path.join(outDir, "cover.webp"));

console.log(
  "wrote",
  path.join(outDir, "cover.webp"),
  fs.statSync(path.join(outDir, "cover.webp")).size,
);
