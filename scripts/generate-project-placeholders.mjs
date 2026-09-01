/**
 * Generates placeholder cover WebPs for projects until real assets arrive.
 * Run: node scripts/generate-project-placeholders.mjs
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const projects = [
  { slug: "htl-operations", label: "HTL Operations", accent: "#3B82F6" },
  { slug: "altus-gym", label: "Altus Gym", accent: "#60A5FA" },
  { slug: "tunnel-del-tiempo", label: "Tunnel del Tiempo", accent: "#10B981" },
  { slug: "htl-website", label: "HTL Website", accent: "#38BDF8" },
  { slug: "nexora", label: "NEXORA", accent: "#34D399" },
];

const width = 1600;
const height = 1000;

for (const project of projects) {
  const dir = path.join("public", "media", "projects", project.slug);
  fs.mkdirSync(dir, { recursive: true });

  const svg = `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0F172A"/>
      <stop offset="55%" stop-color="#1E293B"/>
      <stop offset="100%" stop-color="${project.accent}"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#g)"/>
  <rect x="64" y="64" width="240" height="4" fill="${project.accent}"/>
  <text x="64" y="160" fill="#E2E8F0" font-family="Segoe UI, Arial, sans-serif" font-size="64" font-weight="600">${project.label}</text>
  <text x="64" y="220" fill="#94A3B8" font-family="Segoe UI, Arial, sans-serif" font-size="28">Product preview · replace with real screenshot</text>
  <rect x="64" y="${height - 180}" width="${width - 128}" height="100" rx="8" fill="#020617" fill-opacity="0.45" stroke="${project.accent}" stroke-opacity="0.5"/>
  <text x="96" y="${height - 118}" fill="#CBD5E1" font-family="Consolas, monospace" font-size="22">/media/projects/${project.slug}/cover.webp</text>
</svg>`;

  const coverPath = path.join(dir, "cover.webp");
  await sharp(Buffer.from(svg)).webp({ quality: 82 }).toFile(coverPath);

  // One gallery placeholder so the detail gallery structure is ready
  const gallerySvg = `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#0F172A"/>
  <rect x="80" y="80" width="${width - 160}" height="${height - 160}" rx="12" fill="#1E293B" stroke="${project.accent}" stroke-opacity="0.4"/>
  <text x="50%" y="50%" text-anchor="middle" fill="#94A3B8" font-family="Segoe UI, Arial, sans-serif" font-size="36">${project.label} · Gallery 1</text>
</svg>`;
  await sharp(Buffer.from(gallerySvg))
    .webp({ quality: 80 })
    .toFile(path.join(dir, "gallery-1.webp"));

  console.log("wrote", project.slug);
}
