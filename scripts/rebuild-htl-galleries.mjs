import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { chromium } from "playwright";
import sharp from "sharp";

const root = process.cwd();

async function toWebp(src, dest, quality = 90) {
  await sharp(src)
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality })
    .toFile(dest);
}

async function rebuildFromShots(slug, preferred, max = 10) {
  const base = path.join(root, "public/media/projects", slug);
  const shots = path.join(base, "shots");
  const selected = [];
  for (const name of preferred) {
    const p = path.join(shots, name);
    if (fs.existsSync(p)) selected.push(p);
  }
  for (const f of fs
    .readdirSync(shots)
    .filter((x) => x.endsWith(".png") && !x.startsWith("_"))
    .sort()) {
    const p = path.join(shots, f);
    if (!selected.includes(p)) selected.push(p);
  }
  const pick = selected.slice(0, max);
  let i = 1;
  for (const file of pick) {
    await toWebp(file, path.join(base, `gallery-${i}.webp`), 90);
    if (i === 1) await toWebp(file, path.join(base, "cover.webp"), 92);
    console.log(slug, "gallery", i, path.basename(file));
    i++;
  }
  // prune old excess galleries beyond pick
  for (const f of fs.readdirSync(base).filter((x) => /^gallery-\d+\.webp$/.test(x))) {
    const n = Number(f.match(/\d+/)[0]);
    if (n > pick.length) fs.unlinkSync(path.join(base, f));
  }
  return pick.length;
}

async function captureQuotatesUi() {
  const shots = path.join(root, "public/media/projects/htl-quotates/shots");
  const ui = path.join(shots, "_ui.html");
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();
  await page.goto(pathToFileURL(ui).href, { waitUntil: "networkidle" });
  await page.waitForTimeout(500);

  const views = [
    ["30-dashboard.png", "dashboard"],
    ["31-quotes.png", "quotes"],
    ["32-catalog.png", "catalog"],
    ["33-admin.png", "admin"],
    ["34-prefs.png", "prefs"],
  ];
  for (const [file, id] of views) {
    await page.evaluate((pageId) => window.__show(pageId), id);
    await page.waitForTimeout(350);
    await page.screenshot({ path: path.join(shots, file), fullPage: false });
    console.log("quotates shot", file);
  }

  await page.setViewportSize({ width: 390, height: 844 });
  await page.evaluate(() => window.__show("dashboard"));
  await page.waitForTimeout(400);
  await page.screenshot({
    path: path.join(shots, "35-dashboard-mobile.png"),
    fullPage: false,
  });
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.evaluate(() => window.__show("quotes"));
  await page.waitForTimeout(300);
  await page.screenshot({
    path: path.join(shots, "36-quotes-desktop.png"),
    fullPage: false,
  });
  await browser.close();
}

await captureQuotatesUi();

await rebuildFromShots(
  "htl-quotates",
  [
    "30-dashboard.png",
    "36-quotes-desktop.png",
    "31-quotes.png",
    "32-catalog.png",
    "33-admin.png",
    "34-prefs.png",
    "35-dashboard-mobile.png",
    "01-entry.png",
    "03-_login.png",
    "22-desktop-wide.png",
  ],
  10,
);

await rebuildFromShots(
  "htl-smart-sales",
  [
    "09-dashboard-desktop.png",
    "03-dashboard.png",
    "08-inicio.png",
    "04-tareas.png",
    "05-trayectorias.png",
    "06-chat.png",
    "07-mas.png",
    "10-mobile.png",
    "02-dashboard.png",
    "02-login.png",
  ],
  10,
);

await rebuildFromShots(
  "htl-route-service",
  [
    "01-trayectorias.png",
    "04-planificar.png",
    "05-mapa.png",
    "06-routing-context.png",
    "08-desktop-routing.png",
    "07-mobile-routing.png",
    "02-inicio.png",
    "03-mas.png",
  ],
  8,
);

await rebuildFromShots(
  "htl-stopwatch",
  [
    "01-timer.png",
    "03-desktop.png",
    "06-running.png",
    "04-history.png",
    "05-idle.png",
    "02-mobile.png",
    "07-top.png",
  ],
  7,
);

console.log("galleries rebuilt");
