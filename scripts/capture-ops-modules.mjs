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
  for (const re of [/ahora no/i, /cerrar/i, /omitir/i, /skip/i, /entendido/i]) {
    const btn = page.getByRole("button", { name: re });
    const count = await btn.count();
    for (let i = 0; i < Math.min(count, 3); i++) {
      await btn
        .nth(i)
        .click({ force: true })
        .catch(() => {});
    }
  }
}

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await context.newPage();

await page.goto("https://htlsopsadmin.vercel.app/login", {
  waitUntil: "domcontentloaded",
  timeout: 90000,
});
await page.waitForTimeout(2000);
await dismissOverlays(page);

const emailInput = page.locator('input[type="email"], #login-email').first();
const passInput = page.locator('input[type="password"]').first();
await emailInput.click();
await emailInput.fill("");
await emailInput.pressSequentially(email, { delay: 10 });
await passInput.click();
await passInput.fill("");
await passInput.pressSequentially(password, { delay: 10 });
await page.getByRole("button", { name: /iniciar sesión/i }).click();
await page.waitForTimeout(7000);
await dismissOverlays(page);

if (page.url().includes("/login")) {
  console.error("auth failed");
  await browser.close();
  process.exit(1);
}

await save(page, "60-home.png");

// Open hamburger / sidebar if present
const menu = page
  .locator('button[aria-label*="menú" i], button[aria-label*="menu" i], button')
  .filter({ has: page.locator("svg") })
  .first();
await page
  .locator("header button")
  .first()
  .click({ force: true })
  .catch(() => {});
await page.waitForTimeout(800);

const sideLabels = [
  ["61-mis-tareas", /mis tareas/i],
  ["62-notificaciones", /notificaciones/i],
  ["63-calidad", /calidad|sgc/i],
  ["64-ajustes", /ajustes|settings|configuración/i],
];
for (const [name, re] of sideLabels) {
  const el = page.getByText(re).first();
  if (await el.count()) {
    await el.click({ force: true }).catch(() => {});
    await page.waitForTimeout(2200);
    await dismissOverlays(page);
    await save(page, `${name}.png`);
    // back home
    await page.goto("https://htlsopsadmin.vercel.app/", {
      waitUntil: "domcontentloaded",
    });
    await page.waitForTimeout(2000);
    await dismissOverlays(page);
    await page
      .locator("header button")
      .first()
      .click({ force: true })
      .catch(() => {});
    await page.waitForTimeout(600);
  }
}

// Click SOP module titles on dashboard
await page.goto("https://htlsopsadmin.vercel.app/", { waitUntil: "domcontentloaded" });
await page.waitForTimeout(2500);
await dismissOverlays(page);
await save(page, "65-dashboard.png");

const sopClicks = [
  ["66-sop1", /SOP\s*1|Cotizaciones/i],
  ["67-sop2", /SOP\s*2|Requisiciones/i],
  ["68-sop3", /SOP\s*3|materiales/i],
  ["69-sop5", /SOP\s*5|Soporte/i],
  ["70-sop6", /SOP\s*6|proyecto/i],
];

for (const [name, re] of sopClicks) {
  await page.goto("https://htlsopsadmin.vercel.app/", { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(2000);
  await dismissOverlays(page);
  const card = page.getByText(re).first();
  if (!(await card.count())) {
    console.log("missing sop", name);
    continue;
  }
  await card.click({ force: true }).catch(() => {});
  await page.waitForTimeout(2500);
  await dismissOverlays(page);
  await save(page, `${name}.png`);
}

// Quality hub already good; capture charts button area
await page
  .goto("https://htlsopsadmin.vercel.app/quality", {
    waitUntil: "domcontentloaded",
    timeout: 60000,
  })
  .catch(() => {});
await page.waitForTimeout(2500);
await dismissOverlays(page);
await save(page, "71-quality-route.png");

await page.setViewportSize({ width: 390, height: 844 });
await page.goto("https://htlsopsadmin.vercel.app/", { waitUntil: "domcontentloaded" });
await page.waitForTimeout(2200);
await dismissOverlays(page);
await save(page, "72-mobile-home.png");

await browser.close();

const preferredOrder = [
  "65-dashboard.png",
  "60-home.png",
  "66-sop1.png",
  "67-sop2.png",
  "68-sop3.png",
  "61-mis-tareas.png",
  "71-quality-route.png",
  "63-calidad.png",
  "69-sop5.png",
  "70-sop6.png",
  "62-notificaciones.png",
  "72-mobile-home.png",
  "64-ajustes.png",
  "40-login-clean.png",
  "44-calidad.png",
  "52-dashboard-mobile.png",
];

const selected = [];
for (const name of preferredOrder) {
  const p = path.join(dir, name);
  if (fs.existsSync(p)) selected.push(p);
}
for (const f of fs
  .readdirSync(dir)
  .filter((x) => x.endsWith(".png"))
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
for (const f of fs.readdirSync(dest).filter((x) => /^gallery-\d+\.webp$/.test(x))) {
  const n = Number(f.match(/\d+/)[0]);
  if (n > pick.length) fs.unlinkSync(path.join(dest, f));
}
console.log("ops modules gallery rebuilt", pick.length);
