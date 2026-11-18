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

async function captureOpsUi() {
  const shots = path.join(root, "public/media/projects/htl-operations/shots");
  const ui = path.join(shots, "_ui.html");
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(pathToFileURL(ui).href, { waitUntil: "networkidle" });
  const views = [
    ["92-ui-home.png", "home"],
    ["93-ui-sop2.png", "sop2"],
    ["94-ui-sop6.png", "sop6"],
    ["95-ui-tasks.png", "tasks"],
    ["96-ui-quality.png", "quality"],
    ["97-ui-charts.png", "charts"],
  ];
  for (const [file, id] of views) {
    await page.evaluate((pageId) => window.__show(pageId), id);
    await page.waitForTimeout(250);
    await page.screenshot({ path: path.join(shots, file), fullPage: false });
    console.log("ops ui", file);
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.evaluate(() => window.__show("home"));
  await page.waitForTimeout(250);
  await page.screenshot({
    path: path.join(shots, "98-ui-mobile.png"),
    fullPage: false,
  });
  await browser.close();
}

async function rebuild(slug, preferred, max) {
  const base = path.join(root, "public/media/projects", slug);
  const shots = path.join(base, "shots");
  const selected = [];
  for (const name of preferred) {
    const p = path.join(shots, name);
    if (fs.existsSync(p)) selected.push(p);
  }
  const pick = selected.slice(0, max);
  let i = 1;
  for (const file of pick) {
    await toWebp(file, path.join(base, `gallery-${i}.webp`), 90);
    if (i === 1) await toWebp(file, path.join(base, "cover.webp"), 92);
    console.log(slug, i, path.basename(file));
    i++;
  }
  for (const f of fs.readdirSync(base).filter((x) => /^gallery-\d+\.webp$/.test(x))) {
    const n = Number(f.match(/\d+/)[0]);
    if (n > pick.length) fs.unlinkSync(path.join(base, f));
  }
}

await captureOpsUi();

await rebuild(
  "htl-operations",
  [
    "60-home.png",
    "41-dashboard.png",
    "61-mis-tareas.png",
    "44-calidad.png",
    "93-ui-sop2.png",
    "94-ui-sop6.png",
    "96-ui-quality.png",
    "97-ui-charts.png",
    "98-ui-mobile.png",
    "40-login-clean.png",
    "02-login-light.png",
    "07-login-mobile.png",
  ],
  12,
);

await rebuild(
  "htl-smart-sales",
  [
    "03-dashboard.png",
    "08-inicio.png",
    "09-dashboard-desktop.png",
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

await rebuild(
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

await rebuild(
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

await rebuild(
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

console.log("finalized");
