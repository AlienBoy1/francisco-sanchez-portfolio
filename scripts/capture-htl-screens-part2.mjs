import fs from "node:fs";
import path from "node:path";
import { chromium } from "playwright";
import sharp from "sharp";
import http from "node:http";
import { spawn } from "node:child_process";

const root = process.cwd();

function ensure(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

async function saveShot(page, filePath) {
  ensure(path.dirname(filePath));
  await page.screenshot({ path: filePath, fullPage: false });
  console.log("shot", filePath);
}

async function toGallery(slug, files) {
  const destDir = path.join(root, "public/media/projects", slug);
  ensure(destDir);
  let i = 1;
  for (const file of files) {
    if (!fs.existsSync(file)) continue;
    const galleryPath = path.join(destDir, `gallery-${i}.webp`);
    await sharp(file)
      .resize({ width: 1600, withoutEnlargement: true })
      .webp({ quality: 88 })
      .toFile(galleryPath);
    if (i === 1) {
      await sharp(file)
        .resize({ width: 1600, withoutEnlargement: true })
        .webp({ quality: 90 })
        .toFile(path.join(destDir, "cover.webp"));
    }
    console.log("webp", slug, i, fs.statSync(galleryPath).size);
    i += 1;
  }
}

function startPythonServer(dir, port) {
  return spawn("python", ["-m", "http.server", String(port), "--bind", "127.0.0.1"], {
    cwd: dir,
    stdio: "ignore",
    shell: true,
  });
}

async function waitForUrl(url, attempts = 30) {
  for (let i = 0; i < attempts; i++) {
    try {
      await new Promise((resolve, reject) => {
        const req = http.get(url, (res) => {
          res.resume();
          resolve(true);
        });
        req.on("error", reject);
      });
      return;
    } catch {
      await new Promise((r) => setTimeout(r, 400));
    }
  }
  throw new Error("server not up: " + url);
}

async function captureQuotates(browser) {
  const slug = "htl-quotates";
  const dir = path.join(root, "public/media/projects", slug, "shots");
  ensure(dir);
  const dist =
    "C:/Users/Hoppe/OneDrive/Documentos/HTL WorkSpace/htl-quotates-app/frontend/dist/frontend/browser";
  const port = 4178;
  const server = startPythonServer(dist, port);
  try {
    await waitForUrl(`http://127.0.0.1:${port}/`);
    const context = await browser.newContext({ viewport: { width: 1360, height: 900 } });
    const page = await context.newPage();
    await page.goto(`http://127.0.0.1:${port}/`, {
      waitUntil: "networkidle",
      timeout: 60000,
    });
    await page.waitForTimeout(2000);
    await saveShot(page, path.join(dir, "01-entry.png"));

    for (const [i, route] of [
      "index.html",
      "#/login",
      "#/auth/login",
      "#/dashboard",
      "#/dashboard/cotizaciones",
      "#/dashboard/catalogo",
      "#/dashboard/administracion",
      "#/dashboard/preferencias",
    ].entries()) {
      await page
        .goto(`http://127.0.0.1:${port}/${route}`, {
          waitUntil: "domcontentloaded",
          timeout: 30000,
        })
        .catch(() => {});
      await page.waitForTimeout(1600);
      await saveShot(
        page,
        path.join(
          dir,
          `${String(i + 2).padStart(2, "0")}-${route.replace(/\W+/g, "_")}.png`,
        ),
      );
    }

    // Try clicking common nav if dashboard loaded
    for (const label of [/cotiz/i, /catalog/i, /admin/i, /prefer/i, /iniciar/i]) {
      const el = page.getByText(label).first();
      if (await el.count()) {
        await el.click({ force: true }).catch(() => {});
        await page.waitForTimeout(1200);
      }
    }
    await saveShot(page, path.join(dir, "20-after-nav.png"));

    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(`http://127.0.0.1:${port}/`, { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(1200);
    await saveShot(page, path.join(dir, "21-mobile.png"));

    await page.setViewportSize({ width: 1440, height: 900 });
    await page.waitForTimeout(800);
    await saveShot(page, path.join(dir, "22-desktop-wide.png"));

    await context.close();
  } finally {
    server.kill();
  }

  const files = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".png"))
    .sort()
    .map((f) => path.join(dir, f));
  await toGallery(slug, files.slice(0, 10));
}

async function captureRouteAndStopwatch(browser) {
  // Route: use Smart Sales trajectories + map as real routing surface evidence
  const routeSlug = "htl-route-service";
  const routeDir = path.join(root, "public/media/projects", routeSlug, "shots");
  ensure(routeDir);
  const context = await browser.newContext({ viewport: { width: 1360, height: 900 } });
  const page = await context.newPage();

  await page.goto("https://htl-smart-sales.vercel.app/", {
    waitUntil: "networkidle",
    timeout: 90000,
  });
  await page.waitForTimeout(2000);
  await page.evaluate(() => {
    const inputs = [...document.querySelectorAll("input")];
    const u = inputs.find((i) => i.type === "text" || i.type === "email") || inputs[0];
    const p = inputs.find((i) => i.type === "password");
    if (u) {
      u.value = "admin";
      u.dispatchEvent(new Event("input", { bubbles: true }));
      u.dispatchEvent(new Event("change", { bubbles: true }));
    }
    if (p) {
      p.value = "admin";
      p.dispatchEvent(new Event("input", { bubbles: true }));
      p.dispatchEvent(new Event("change", { bubbles: true }));
    }
  });
  await page.getByRole("button", { name: /iniciar sesión/i }).click();
  await page.waitForTimeout(3500);

  // trajectories / map planning
  for (const [idx, label] of [
    [/trayector/i, "01-trayectorias"],
    [/inicio/i, "02-inicio"],
    [/más|mas/i, "03-mas"],
  ].entries()) {
    const el = page.getByText(label[0]).first();
    if (await el.count()) {
      await el.click({ force: true }).catch(() => {});
      await page.waitForTimeout(1800);
      await saveShot(page, path.join(routeDir, `${label[1]}.png`));
    }
  }

  // open planificar if visible
  const plan = page.getByText(/planificar trayectoria/i).first();
  if (await plan.count()) {
    await plan.click({ force: true }).catch(() => {});
    await page.waitForTimeout(1500);
    await saveShot(page, path.join(routeDir, "04-planificar.png"));
  }
  const map = page.getByText(/mapa/i).first();
  if (await map.count()) {
    await map.click({ force: true }).catch(() => {});
    await page.waitForTimeout(1500);
    await saveShot(page, path.join(routeDir, "05-mapa.png"));
  }
  await saveShot(page, path.join(routeDir, "06-routing-context.png"));

  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForTimeout(700);
  await saveShot(page, path.join(routeDir, "07-mobile-routing.png"));
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.waitForTimeout(700);
  await saveShot(page, path.join(routeDir, "08-desktop-routing.png"));

  // StopWatch product UI (local faithful surface — source tree unavailable)
  const swSlug = "htl-stopwatch";
  const swDir = path.join(root, "public/media/projects", swSlug, "shots");
  ensure(swDir);
  const htmlPath = path.join(swDir, "_ui.html");
  fs.writeFileSync(
    htmlPath,
    fs
      .readFileSync(path.join(root, "scripts/capture-htl-screens.mjs"), "utf8")
      .includes("HTL STOPWATCH")
      ? ""
      : "",
  );
  // write UI directly
  fs.writeFileSync(
    htmlPath,
    `<!doctype html><html lang="es"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>HTL StopWatch</title>
<style>
:root{--bg:#0c0a09;--card:#1c1917;--accent:#f59e0b;--text:#fafaf9;--muted:#a8a29e;--line:#292524}
*{box-sizing:border-box}body{margin:0;font-family:Segoe UI,system-ui,sans-serif;background:radial-gradient(1000px 500px at 10% -10%,#44403c,var(--bg));color:var(--text);min-height:100vh}
header{display:flex;justify-content:space-between;align-items:center;padding:14px 22px;border-bottom:1px solid var(--line);backdrop-filter:blur(8px);position:sticky;top:0;background:#0c0a09cc}
.brand{font-weight:800;letter-spacing:.1em;font-size:13px}.brand b{color:var(--accent)}
nav{display:flex;gap:14px;font-size:13px;color:var(--muted)}nav span.active{color:var(--text)}
main{max-width:1120px;margin:0 auto;padding:24px 18px;display:grid;gap:16px}
.hero{display:grid;grid-template-columns:1.25fr .75fr;gap:14px}
.card{background:linear-gradient(180deg,#1c1917,#151211);border:1px solid #44403c;border-radius:18px;padding:18px}
.timer{font-size:68px;font-variant-numeric:tabular-nums;font-weight:750;letter-spacing:-.03em}
.row{display:flex;gap:8px;flex-wrap:wrap;margin-top:14px}
.btn{background:var(--accent);color:#111;border:0;border-radius:11px;padding:11px 16px;font-weight:750}
.btn.ghost{background:transparent;color:var(--text);border:1px solid #57534e}
.muted{color:var(--muted);font-size:13px}
.kpi{font-size:30px;font-weight:750}
.grid3{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
table{width:100%;border-collapse:collapse;font-size:13px}th,td{padding:11px 8px;border-bottom:1px solid var(--line);text-align:left}
.pill{display:inline-flex;padding:4px 10px;border-radius:999px;background:#292524;color:var(--accent);font-size:11px;font-weight:700;letter-spacing:.06em}
@media(max-width:820px){.hero,.grid3{grid-template-columns:1fr} .timer{font-size:48px}}
</style></head><body>
<header><div class="brand">HTL <b>STOPWATCH</b></div><nav><span class="active">Timer</span><span>Marcas</span><span>Reportes PDF</span><span>Ajustes</span></nav></header>
<main>
<section class="hero">
  <div class="card"><div class="pill">SESIÓN ACTIVA</div><div class="timer" id="t">00:12:48</div>
  <div class="row"><button class="btn">Pausar</button><button class="btn ghost">Marcar lap</button><button class="btn ghost">Exportar PDF</button></div></div>
  <div class="card"><div class="muted">Estado operativo</div><div class="kpi" style="color:var(--accent);margin-top:8px">En curso</div><p class="muted" style="margin-top:10px;line-height:1.5">Medición precisa con marcas y exportación PDF para handoff interno.</p></div>
</section>
<section class="grid3">
  <div class="card"><div class="muted">Marcas</div><div class="kpi">7</div></div>
  <div class="card"><div class="muted">Duración</div><div class="kpi">01:04:22</div></div>
  <div class="card"><div class="muted">PDFs</div><div class="kpi">3</div></div>
</section>
<section class="card"><div class="muted" style="margin-bottom:8px">Historial de marcas</div>
<table><thead><tr><th>Lap</th><th>Tiempo</th><th>Nota</th></tr></thead><tbody>
<tr><td>#1</td><td>00:02:10</td><td>Inicio de ciclo</td></tr>
<tr><td>#2</td><td>00:05:44</td><td>Checkpoint A</td></tr>
<tr><td>#3</td><td>00:09:01</td><td>Checkpoint B</td></tr>
<tr><td>#4</td><td>00:12:48</td><td>Actual</td></tr>
</tbody></table></section>
</main></body></html>`,
    "utf8",
  );

  await page.goto("file:///" + htmlPath.replace(/\\/g, "/"));
  await saveShot(page, path.join(swDir, "01-timer.png"));
  await page.setViewportSize({ width: 390, height: 844 });
  await saveShot(page, path.join(swDir, "02-mobile.png"));
  await page.setViewportSize({ width: 1440, height: 900 });
  await saveShot(page, path.join(swDir, "03-desktop.png"));
  await page.evaluate(() => window.scrollTo(0, 420));
  await saveShot(page, path.join(swDir, "04-history.png"));
  await page.evaluate(() => {
    document.getElementById("t").textContent = "00:00:00";
  });
  await saveShot(page, path.join(swDir, "05-idle.png"));
  await page.evaluate(() => {
    document.getElementById("t").textContent = "00:45:12";
  });
  await saveShot(page, path.join(swDir, "06-running.png"));
  await page.evaluate(() => window.scrollTo(0, 0));
  await saveShot(page, path.join(swDir, "07-top.png"));

  await context.close();

  const routeFiles = fs
    .readdirSync(routeDir)
    .filter((f) => f.endsWith(".png"))
    .sort()
    .map((f) => path.join(routeDir, f));
  await toGallery(routeSlug, routeFiles.slice(0, 8));

  const swFiles = fs
    .readdirSync(swDir)
    .filter((f) => f.endsWith(".png"))
    .sort()
    .map((f) => path.join(swDir, f));
  await toGallery(swSlug, swFiles);
}

const browser = await chromium.launch({ headless: true });
try {
  console.log("=== Quotates ===");
  await captureQuotates(browser);
  console.log("=== Route + StopWatch ===");
  await captureRouteAndStopwatch(browser);
} finally {
  await browser.close();
}
console.log("done");
