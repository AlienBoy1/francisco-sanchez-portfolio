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
  console.log("shot", name, fs.statSync(p).size, page.url());
}

async function dismiss(page) {
  for (let round = 0; round < 4; round++) {
    let clicked = false;
    for (const re of [/saltar/i, /ahora no/i, /cerrar/i, /entendido/i, /omitir/i]) {
      const btn = page.getByRole("button", { name: re });
      const n = await btn.count();
      for (let i = 0; i < Math.min(n, 2); i++) {
        await btn
          .nth(i)
          .click({ force: true })
          .catch(() => {});
        clicked = true;
      }
    }
    if (!clicked) break;
    await page.waitForTimeout(350);
  }
}

async function login(page) {
  await page.goto("https://htlsopsadmin.vercel.app/login", {
    waitUntil: "domcontentloaded",
    timeout: 90000,
  });
  await page.waitForTimeout(1600);
  await dismiss(page);
  await page.locator('input[type="email"], #login-email').first().fill(email);
  await page.locator('input[type="password"]').first().fill(password);
  await page.getByRole("button", { name: /iniciar sesión/i }).click();
  await page.waitForURL((url) => !url.pathname.includes("/login"), { timeout: 25000 });
  await page.waitForTimeout(2800);
  await dismiss(page);
}

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await context.newPage();

await login(page);
await save(page, "80-home.png");

const routes = [
  ["84-sop2", "/sop2-requisiciones"],
  ["85-sop3", "/sop3-control-material"],
  ["86-sop6", "/sop6-ciclo-proyectos"],
  ["87-sop7", "/sop7-fabricacion"],
  ["81-mis-tareas", "/mis-tareas"],
  ["89-graficas", "/graficas-globales"],
  ["83-calidad", "/quality"],
  ["90-perfil", "/perfil-preferencias"],
];

for (const [name, route] of routes) {
  if (page.url().includes("/login")) {
    console.log("re-auth before", route);
    await login(page);
  }
  await page.goto(`https://htlsopsadmin.vercel.app${route}`, {
    waitUntil: "domcontentloaded",
    timeout: 45000,
  });
  await page.waitForTimeout(2000);
  await dismiss(page);
  if (page.url().includes("/login")) {
    console.log("blocked", route);
    await login(page);
    await page.goto(`https://htlsopsadmin.vercel.app${route}`, {
      waitUntil: "domcontentloaded",
      timeout: 45000,
    });
    await page.waitForTimeout(2000);
    await dismiss(page);
  }
  if (!page.url().includes("/login")) {
    await save(page, `${name}.png`);
  } else {
    console.log("skip", route);
  }
}

if (!page.url().includes("/login")) {
  await page.goto("https://htlsopsadmin.vercel.app/", { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(1600);
  await dismiss(page);
  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForTimeout(900);
  await dismiss(page);
  if (!page.url().includes("/login")) await save(page, "91-mobile-home.png");
}

await browser.close();

const preferred = [
  "80-home.png",
  "84-sop2.png",
  "85-sop3.png",
  "86-sop6.png",
  "87-sop7.png",
  "81-mis-tareas.png",
  "89-graficas.png",
  "83-calidad.png",
  "44-calidad.png",
  "90-perfil.png",
  "91-mobile-home.png",
  "60-home.png",
  "41-dashboard.png",
  "40-login-clean.png",
  "02-login-light.png",
];

const selected = [];
for (const name of preferred) {
  const p = path.join(dir, name);
  if (fs.existsSync(p)) selected.push(p);
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
console.log("fast ops gallery", pick.length);
