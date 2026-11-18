import fs from "node:fs";
import path from "node:path";
import { chromium } from "playwright";
import sharp from "sharp";

const root = process.cwd();
const dir = path.join(root, "public/media/projects/htl-operations/shots");
const dest = path.join(root, "public/media/projects/htl-operations");
fs.mkdirSync(dir, { recursive: true });

const email = process.env.HTL_OPS_DEMO_EMAIL;
const password = process.env.HTL_OPS_DEMO_PASSWORD;
if (!email || !password) {
  console.error("Set HTL_OPS_DEMO_EMAIL and HTL_OPS_DEMO_PASSWORD for capture.");
  process.exit(1);
}

async function save(page, name) {
  const p = path.join(dir, name);
  await page.screenshot({ path: p, fullPage: false });
  console.log("shot", path.basename(p), fs.statSync(p).size);
}

async function dismissOverlays(page) {
  for (const re of [/ahora no/i, /cerrar/i, /omitir/i, /skip/i]) {
    const btn = page.getByRole("button", { name: re });
    const count = await btn.count();
    for (let i = 0; i < count; i++) {
      await btn
        .nth(i)
        .click({ force: true })
        .catch(() => {});
    }
  }
  await page
    .locator('button[aria-label*="Cerrar"], button[aria-label*="Close"]')
    .first()
    .click({ force: true })
    .catch(() => {});
}

async function fillLogin(page) {
  const emailInput = page
    .locator('input[type="email"], input[name="email"], #login-email')
    .first();
  const passInput = page.locator('input[type="password"]').first();
  await emailInput.click();
  await emailInput.fill("");
  await emailInput.pressSequentially(email, { delay: 12 });
  await passInput.click();
  await passInput.fill("");
  await passInput.pressSequentially(password, { delay: 12 });
  await page.getByRole("button", { name: /iniciar sesión/i }).click();
}

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await context.newPage();

await page.goto("https://htlsopsadmin.vercel.app/login", {
  waitUntil: "domcontentloaded",
  timeout: 90000,
});
await page.waitForTimeout(2200);
await dismissOverlays(page);
await page.waitForTimeout(600);
await save(page, "40-login-clean.png");

await fillLogin(page);
await page.waitForTimeout(7000);
await dismissOverlays(page);
await page.waitForTimeout(1200);

if (page.url().includes("/login")) {
  console.error("Login failed — still on /login");
  await save(page, "40-login-failed.png");
  await browser.close();
  process.exit(1);
}

await save(page, "41-dashboard.png");

const targets = [
  ["42-tareas", /mis tareas|tareas/i],
  ["43-notificaciones", /notif/i],
  ["44-calidad", /calidad|sgc|quality/i],
  ["45-sop1", /sop\s*1|cotizaci/i],
  ["46-sop2", /sop\s*2|requisic/i],
  ["47-sop5", /sop\s*5|soporte/i],
  ["48-sop6", /sop\s*6|proyecto/i],
  ["49-admin", /administr|usuarios|ajustes|settings/i],
  ["50-perfil", /perfil|preferenc/i],
];

for (const [name, re] of targets) {
  const link = page.getByRole("link", { name: re }).first();
  const text = page.getByText(re).first();
  if (await link.count()) {
    await link.click({ force: true }).catch(() => {});
  } else if (await text.count()) {
    await text.click({ force: true }).catch(() => {});
  } else {
    console.log("skip nav", name);
    continue;
  }
  await page.waitForTimeout(2400);
  await dismissOverlays(page);
  await save(page, `${name}.png`);
}

// Return home for desktop wide shot
await page.goto("https://htlsopsadmin.vercel.app/", {
  waitUntil: "domcontentloaded",
  timeout: 60000,
});
await page.waitForTimeout(2500);
await dismissOverlays(page);
await save(page, "51-dashboard-desktop.png");

await page.setViewportSize({ width: 390, height: 844 });
await page.waitForTimeout(1200);
await dismissOverlays(page);
await save(page, "52-dashboard-mobile.png");

await page.setViewportSize({ width: 1440, height: 900 });
await page.waitForTimeout(800);
await save(page, "53-dashboard-wide.png");

await browser.close();

const preferredOrder = [
  "41-dashboard.png",
  "51-dashboard-desktop.png",
  "53-dashboard-wide.png",
  "42-tareas.png",
  "43-notificaciones.png",
  "44-calidad.png",
  "45-sop1.png",
  "46-sop2.png",
  "47-sop5.png",
  "48-sop6.png",
  "49-admin.png",
  "50-perfil.png",
  "52-dashboard-mobile.png",
  "40-login-clean.png",
];

const selected = [];
for (const name of preferredOrder) {
  const p = path.join(dir, name);
  if (fs.existsSync(p)) selected.push(p);
}
for (const f of fs
  .readdirSync(dir)
  .filter((x) => x.endsWith(".png") && !x.includes("failed"))
  .sort()) {
  const p = path.join(dir, f);
  if (!selected.includes(p)) selected.push(p);
}

const pick = selected.slice(0, 12);
let i = 1;
for (const file of pick) {
  await sharp(file)
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 90 })
    .toFile(path.join(dest, `gallery-${i}.webp`));
  if (i === 1) {
    await sharp(file)
      .resize({ width: 1600, withoutEnlargement: true })
      .webp({ quality: 92 })
      .toFile(path.join(dest, "cover.webp"));
  }
  console.log("gallery", i, path.basename(file));
  i++;
}
console.log("ops cover/gallery rebuilt", pick.length);
