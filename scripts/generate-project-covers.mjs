/**
 * Generates professional portfolio covers/galleries from public brand assets only.
 * No screenshots of confidential operational data.
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const W = 1600;
const H = 1000;

async function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

async function toWebp(src, dest, width = 1600) {
  await ensureDir(path.dirname(dest));
  await sharp(src)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 86 })
    .toFile(dest);
  console.log("ok", dest, fs.statSync(dest).size);
}

async function composeCover({
  outDir,
  bgStops,
  accent,
  eyebrow,
  title,
  subtitle,
  stack,
  logoPath,
  logoWidth = 360,
  galleryTitle,
  galleryBody,
}) {
  await ensureDir(outDir);

  let logoBuf = null;
  let lw = 0;
  let lh = 0;
  if (logoPath && fs.existsSync(logoPath)) {
    logoBuf = await sharp(logoPath)
      .resize({ width: logoWidth, withoutEnlargement: true })
      .png()
      .toBuffer();
    const meta = await sharp(logoBuf).metadata();
    lw = meta.width ?? logoWidth;
    lh = meta.height ?? Math.round(logoWidth / 3);
  }

  const coverSvg =
    Buffer.from(`<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${bgStops[0]}"/>
      <stop offset="55%" stop-color="${bgStops[1]}"/>
      <stop offset="100%" stop-color="${bgStops[2]}"/>
    </linearGradient>
    <linearGradient id="panel" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.96"/>
      <stop offset="100%" stop-color="#F1F5F9" stop-opacity="0.96"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bg)"/>
  <circle cx="1380" cy="160" r="240" fill="${accent}" fill-opacity="0.22"/>
  <circle cx="180" cy="860" r="200" fill="#FFFFFF" fill-opacity="0.08"/>
  <rect x="64" y="72" width="1472" height="856" rx="24" fill="url(#panel)"/>
  <rect x="64" y="72" width="12" height="856" fill="${accent}"/>
  <text x="120" y="160" fill="#64748B" font-family="Segoe UI, Arial, sans-serif" font-size="20" letter-spacing="4">${eyebrow}</text>
  <text x="120" y="250" fill="#0F172A" font-family="Segoe UI, Arial, sans-serif" font-size="64" font-weight="700">${title}</text>
  <text x="120" y="310" fill="#334155" font-family="Segoe UI, Arial, sans-serif" font-size="26">${subtitle}</text>
  <rect x="120" y="350" width="320" height="5" rx="2" fill="${accent}"/>
  <text x="120" y="430" fill="#2563EB" font-family="Consolas, monospace" font-size="20">${stack}</text>
  <text x="120" y="880" fill="#64748B" font-family="Segoe UI, Arial, sans-serif" font-size="16" letter-spacing="3">FRANCISCO SÁNCHEZ · SELECTED WORK</text>
</svg>`);

  const composites = [];
  if (logoBuf) {
    composites.push({
      input: logoBuf,
      left: Math.max(120, W - lw - 140),
      top: Math.max(120, H - lh - 160),
    });
  }

  await sharp(coverSvg)
    .composite(composites)
    .webp({ quality: 90 })
    .toFile(path.join(outDir, "cover.webp"));
  console.log("cover", path.join(outDir, "cover.webp"));

  const gallerySvg =
    Buffer.from(`<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${bgStops[0]}"/>
      <stop offset="100%" stop-color="${bgStops[2]}"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bg)"/>
  <rect x="96" y="120" width="${W - 192}" height="${H - 240}" rx="20" fill="#0B1224" fill-opacity="0.55" stroke="${accent}" stroke-opacity="0.4"/>
  <text x="148" y="240" fill="#94A3B8" font-family="Segoe UI, Arial, sans-serif" font-size="20" letter-spacing="4">PRODUCT SURFACE</text>
  <text x="148" y="320" fill="#F8FAFC" font-family="Segoe UI, Arial, sans-serif" font-size="52" font-weight="700">${galleryTitle}</text>
  <text x="148" y="390" fill="#CBD5E1" font-family="Segoe UI, Arial, sans-serif" font-size="24">${galleryBody}</text>
  <text x="148" y="480" fill="${accent}" font-family="Consolas, monospace" font-size="20">${stack}</text>
</svg>`);

  const gComposites = [];
  if (logoBuf) {
    gComposites.push({
      input: logoBuf,
      left: Math.max(120, W - lw - 160),
      top: Math.max(200, H - lh - 200),
    });
  }
  await sharp(gallerySvg)
    .composite(gComposites)
    .webp({ quality: 88 })
    .toFile(path.join(outDir, "gallery-1.webp"));
  console.log("gallery-1", path.join(outDir, "gallery-1.webp"));
}

// --- Qyntra / Capital refresh from source photos ---
const qyntraSrc =
  "C:/Users/Hoppe/OneDrive/Documentos/PersonalDocuments/webaltusgym1/client/public";
const capitalSrc =
  "C:/Users/Hoppe/OneDrive/Documentos/PersonalDocuments/capital-gang-clothing/public";

await ensureDir("public/media/projects/qyntra-gym");
for (const [src, name] of [
  ["landing/hero-gym.webp", "cover.webp"],
  ["landing/hero-gym.jpg", "cover.webp"],
  ["landing/community.webp", "gallery-1.webp"],
  ["landing/community.jpg", "gallery-1.webp"],
  ["landing/train.webp", "gallery-2.webp"],
  ["landing/train.jpg", "gallery-2.webp"],
  ["landing/app-device.webp", "gallery-3.webp"],
  ["landing/app-device.jpg", "gallery-3.webp"],
  ["pwa-512x512.png", "gallery-4.webp"],
]) {
  const full = path.join(qyntraSrc, src);
  if (
    fs.existsSync(full) &&
    !fs.existsSync(path.join("public/media/projects/qyntra-gym", name))
  ) {
    await toWebp(full, path.join("public/media/projects/qyntra-gym", name));
  } else if (fs.existsSync(full) && name === "cover.webp") {
    await toWebp(full, path.join("public/media/projects/qyntra-gym", name));
  }
}
// Always refresh qyntra cover from best available
for (const candidate of ["landing/hero-gym.webp", "landing/hero-gym.jpg"]) {
  const full = path.join(qyntraSrc, candidate);
  if (fs.existsSync(full)) {
    await toWebp(full, "public/media/projects/qyntra-gym/cover.webp");
    break;
  }
}
for (const [src, name] of [
  ["landing/community.webp", "gallery-1.webp"],
  ["landing/community.jpg", "gallery-1.webp"],
  ["landing/train.webp", "gallery-2.webp"],
  ["landing/train.jpg", "gallery-2.webp"],
  ["landing/app-device.webp", "gallery and skip"],
]) {
  if (name.includes("skip")) continue;
  const full = path.join(qyntraSrc, src);
  if (fs.existsSync(full))
    await toWebp(full, path.join("public/media/projects/qyntra-gym", name));
}
for (const candidate of [
  "landing/app-device.webp",
  "landing/app-device.jpg",
  "pwa-512x512.png",
]) {
  const full = path.join(qyntraSrc, candidate);
  if (fs.existsSync(full)) {
    await toWebp(full, "public/media/projects/qyntra-gym/gallery-3.webp");
    break;
  }
}
if (fs.existsSync(path.join(qyntraSrc, "pwa-512x512.png"))) {
  await toWebp(
    path.join(qyntraSrc, "pwa-512x512.png"),
    "public/media/projects/qyntra-gym/gallery-4.webp",
    800,
  );
}

await ensureDir("public/media/projects/capital-gang");
for (const [src, name] of [
  ["landing/hero-urban.jpg", "cover.webp"],
  ["landing/lookbook-streetwear.jpg", "gallery-1.webp"],
  ["landing/lookbook-mural.jpg", "gallery-2.webp"],
  ["brand/logo-principal.png", "gallery-3.webp"],
  ["brand/isotipo.png", "gallery-4.webp"],
]) {
  const full = path.join(capitalSrc, src);
  if (fs.existsSync(full))
    await toWebp(full, path.join("public/media/projects/capital-gang", name));
}

// --- HTL Smart Sales ---
const smartLogo =
  "C:/Users/Hoppe/OneDrive/Documentos/HTL WorkSpace/HTL Smart Sales App/android/app/src/main/assets/public/assets/logo_htl_smartsales.svg";
const smartIcon =
  "C:/Users/Hoppe/OneDrive/Documentos/HTL WorkSpace/HTL Smart Sales App/android/app/src/main/assets/public/icons/icon-512.png";
await composeCover({
  outDir: "public/media/projects/htl-smart-sales",
  bgStops: ["#0a0e17", "#111827", "#1e3a5f"],
  accent: "#38BDF8",
  eyebrow: "FIELD SALES · PWA + NATIVE",
  title: "HTL Smart Sales",
  subtitle: "Field trajectories, live monitoring, and route planning across Mexico",
  stack: "Capacitor · Leaflet · Supabase · PWA",
  logoPath: fs.existsSync(smartLogo) ? smartLogo : smartIcon,
  logoWidth: 420,
  galleryTitle: "HTL Smart Sales",
  galleryBody: "Field operations platform for trajectories, tasks, and team visibility",
});
if (fs.existsSync(smartIcon)) {
  await toWebp(smartIcon, "public/media/projects/htl-smart-sales/gallery-2.webp", 900);
}
const smartMark =
  "C:/Users/Hoppe/OneDrive/Documentos/HTL WorkSpace/HTL Smart Sales App/android/app/src/main/assets/public/assets/Logo_and_icon_app.svg";
if (fs.existsSync(smartMark)) {
  await toWebp(smartMark, "public/media/projects/htl-smart-sales/gallery-3.webp", 900);
}

// --- HTL Quotates ---
const quotatesIcon =
  "C:/Users/Hoppe/OneDrive/Documentos/HTL WorkSpace/htl-quotates-app/frontend/dist/frontend/browser/icons/icon-512x512.png";
const quotatesFav =
  "C:/Users/Hoppe/OneDrive/Documentos/HTL WorkSpace/htl-quotates-app/frontend/dist/frontend/browser/favicon.svg";
await composeCover({
  outDir: "public/media/projects/htl-quotates",
  bgStops: ["#0f172a", "#14532d", "#84d41f"],
  accent: "#84d41f",
  eyebrow: "COMMERCIAL QUOTING · PWA",
  title: "HTL Quotates",
  subtitle: "Bilingual quoting, catalogs, partners, and commercial operations",
  stack: "Angular · Express · Supabase · PWA",
  logoPath: fs.existsSync(quotatesIcon) ? quotatesIcon : quotatesFav,
  logoWidth: 280,
  galleryTitle: "HTL Quotates",
  galleryBody: "Quote lifecycle with catalogs, partners, logistics, and admin controls",
});
if (fs.existsSync(quotatesIcon)) {
  await toWebp(quotatesIcon, "public/media/projects/htl-quotates/gallery-2.webp", 900);
}
if (fs.existsSync(quotatesFav)) {
  await toWebp(quotatesFav, "public/media/projects/htl-quotates/gallery-3.webp", 800);
}

// --- HTL Route Service ---
const sakbeLogo =
  "C:/Users/Hoppe/OneDrive/Documentos/HTL WorkSpace/HTL_Route_Service/docs/Ruteo/img/Logo_transp_sakbe.png";
await composeCover({
  outDir: "public/media/projects/htl-route-service",
  bgStops: ["#052e16", "#0f766e", "#134e4a"],
  accent: "#2dd4bf",
  eyebrow: "ROUTING PLATFORM · MEXICO",
  title: "HTL Route Service",
  subtitle: "Mexico road routing capabilities powering field trajectory planning",
  stack: "FastAPI · OpenLayers · INEGI · Maps",
  logoPath: sakbeLogo,
  logoWidth: 360,
  galleryTitle: "HTL Route Service",
  galleryBody: "Routing and map services aligned with national road network data",
});
if (fs.existsSync(sakbeLogo)) {
  await toWebp(sakbeLogo, "public/media/projects/htl-route-service/gallery-2.webp", 900);
}
const punto =
  "C:/Users/Hoppe/OneDrive/Documentos/HTL WorkSpace/HTL_Route_Service/docs/Ruteo/img/punto.png";
if (fs.existsSync(punto)) {
  await toWebp(punto, "public/media/projects/htl-route-service/gallery-3.webp", 600);
}

// --- HTL StopWatch ---
await composeCover({
  outDir: "public/media/projects/htl-stopwatch",
  bgStops: ["#1c1917", "#292524", "#b45309"],
  accent: "#f59e0b",
  eyebrow: "OPERATIONAL TIMING · PWA",
  title: "HTL StopWatch",
  subtitle: "Installable timing workflows with structured PDF export for operations",
  stack: "Vite · PWA · PDF · TypeScript",
  logoPath: null,
  galleryTitle: "HTL StopWatch",
  galleryBody: "Timing and report export tooling for operational control",
});

// Also copy HTL Operations brand assets into gallery if needed
const opsLogo =
  "C:/Users/Hoppe/OneDrive/Documentos/HTL WorkSpace/htlsopsadmin/public/htl_operations_logo.png";
const opsIcon =
  "C:/Users/Hoppe/OneDrive/Documentos/HTL WorkSpace/htlsopsadmin/public/icon-512.png";
if (fs.existsSync(opsLogo)) {
  await toWebp(opsLogo, "public/media/projects/htl-operations/gallery-2.webp", 1000);
}
if (fs.existsSync(opsIcon)) {
  await toWebp(opsIcon, "public/media/projects/htl-operations/gallery-3.webp", 800);
}

console.log("All project covers generated.");
