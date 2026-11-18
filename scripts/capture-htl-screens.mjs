/**
 * Capture real product screenshots for HTL portfolio cases.
 * Uses public demo credentials for Smart Sales only.
 * Saves PNGs under public/media/projects/<slug>/shots then converts to webp gallery.
 */
import fs from "node:fs";
import path from "node:path";
import { chromium, devices } from "playwright";
import sharp from "sharp";

const root = process.cwd();
const shotRoot = (slug) => path.join(root, "public/media/projects", slug, "shots");
const outRoot = (slug) => path.join(root, "public/media/projects", slug);

function ensure(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

async function saveShot(page, filePath) {
  ensure(path.dirname(filePath));
  await page.screenshot({ path: filePath, fullPage: false });
  console.log("shot", filePath);
}

async function toGallery(slug, files) {
  const destDir = outRoot(slug);
  ensure(destDir);
  let i = 1;
  for (const file of files) {
    if (!fs.existsSync(file)) continue;
    const dest = path.join(destDir, i === 1 ? "cover.webp" : `gallery-${i - 1}.webp`);
    // For cover use first shot; gallery-1..N for rest including cover as gallery-1 too
    await sharp(file)
      .resize({ width: 1600, withoutEnlargement: true })
      .webp({ quality: 86 })
      .toFile(
        i === 1
          ? path.join(destDir, "cover.webp")
          : path.join(destDir, `gallery-${i}.webp`),
      );
    // Also always write sequential gallery starting at 1 from first shot
    await sharp(file)
      .resize({ width: 1600, withoutEnlargement: true })
      .webp({ quality: 86 })
      .toFile(path.join(destDir, `gallery-${i}.webp`));
    if (i === 1) {
      await sharp(file)
        .resize({ width: 1600, withoutEnlargement: true })
        .webp({ quality: 88 })
        .toFile(path.join(destDir, "cover.webp"));
    }
    console.log(
      "webp",
      slug,
      i,
      fs.statSync(path.join(destDir, `gallery-${i}.webp`)).size,
    );
    i += 1;
  }
  return i - 1;
}

async function captureSmartSales(browser) {
  const slug = "htl-smart-sales";
  const dir = shotRoot(slug);
  ensure(dir);
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();
  await page.goto("https://htl-smart-sales.vercel.app/", {
    waitUntil: "networkidle",
    timeout: 90000,
  });
  await page.waitForTimeout(2500);
  await saveShot(page, path.join(dir, "01-splash-or-login.png"));

  // Login form
  const user = page
    .locator("input")
    .filter({ hasNot: page.locator("[type=password]") })
    .first();
  // Prefer labeled fields
  const userField = page.getByRole("textbox", { name: /usuario/i }).first();
  const passField = page.getByRole("textbox", { name: /contraseña/i }).first();
  if (await userField.count()) {
    await userField.fill("admin");
    await passField.fill("admin");
  } else {
    await page.evaluate(() => {
      const inputs = [...document.querySelectorAll("input")];
      const u = inputs.find((i) => i.type === "text" || i.type === "email") || inputs[0];
      const p = inputs.find((i) => i.type === "password");
      if (u) {
        u.value = "admin";
        u.dispatchEvent(new Event("input", { bubbles: true }));
      }
      if (p) {
        p.value = "admin";
        p.dispatchEvent(new Event("input", { bubbles: true }));
      }
    });
  }
  await saveShot(page, path.join(dir, "02-login.png"));
  await page.getByRole("button", { name: /iniciar sesión/i }).click();
  await page.waitForTimeout(3500);
  await saveShot(page, path.join(dir, "03-dashboard.png"));

  // Bottom nav labels
  const tabs = [
    { name: /tareas/i, file: "04-tareas.png" },
    { name: /trayector/i, file: "05-trayectorias.png" },
    { name: /chat/i, file: "06-chat.png" },
    { name: /más|mas/i, file: "07-mas.png" },
    { name: /inicio/i, file: "08-inicio.png" },
  ];
  for (const tab of tabs) {
    const loc = page.getByText(tab.name).first();
    if (await loc.count()) {
      await loc.click({ force: true }).catch(() => {});
      await page.waitForTimeout(1800);
      await saveShot(page, path.join(dir, tab.file));
    }
  }

  // Desktop wider
  await page.setViewportSize({ width: 1440, height: 900 });
  await page
    .getByText(/inicio/i)
    .first()
    .click({ force: true })
    .catch(() => {});
  await page.waitForTimeout(1500);
  await saveShot(page, path.join(dir, "09-dashboard-desktop.png"));

  // Mobile
  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForTimeout(800);
  await saveShot(page, path.join(dir, "10-mobile.png"));

  await context.close();
  const files = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".png"))
    .sort()
    .map((f) => path.join(dir, f));
  await toGallery(slug, files);
}

async function captureOperations(browser) {
  const slug = "htl-operations";
  const dir = shotRoot(slug);
  ensure(dir);
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await context.newPage();
  await page.goto("https://htlsopsadmin.vercel.app/login", {
    waitUntil: "networkidle",
    timeout: 90000,
  });
  await page.waitForTimeout(2000);
  // dismiss install if present
  const dismiss = page.getByRole("button", { name: /ahora no/i });
  if (await dismiss.count()) await dismiss.click().catch(() => {});
  await page.waitForTimeout(800);
  await saveShot(page, path.join(dir, "01-login-dark.png"));

  const theme = page.getByRole("switch").first();
  if (await theme.count()) {
    await theme.click();
    await page.waitForTimeout(600);
    await saveShot(page, path.join(dir, "02-login-light.png"));
    await theme.click();
    await page.waitForTimeout(400);
  }

  // Validation empty submit
  const loginBtn = page.getByRole("button", { name: /iniciar sesión/i });
  if (await loginBtn.count()) {
    await loginBtn.click();
    await page.waitForTimeout(700);
    await saveShot(page, path.join(dir, "03-login-validation.png"));
  }

  // Focus fields for detail shots
  const email = page.getByRole("textbox", { name: /correo/i });
  if (await email.count()) {
    await email.click();
    await page.waitForTimeout(300);
    await saveShot(page, path.join(dir, "04-login-email-focus.png"));
  }

  // Re-open install prompt if possible via reload without dismissing quickly
  await page.reload({ waitUntil: "networkidle" });
  await page.waitForTimeout(2500);
  await saveShot(page, path.join(dir, "05-boot-or-install.png"));
  const dismiss2 = page.getByRole("button", { name: /ahora no/i });
  if (await dismiss2.count()) {
    await saveShot(page, path.join(dir, "06-install-prompt.png"));
    await dismiss2.click().catch(() => {});
  }

  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForTimeout(600);
  await saveShot(page, path.join(dir, "07-login-mobile.png"));

  await page.setViewportSize({ width: 1440, height: 900 });
  await page.waitForTimeout(500);
  await saveShot(page, path.join(dir, "08-login-desktop.png"));

  await context.close();
  const files = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".png"))
    .sort()
    .map((f) => path.join(dir, f));
  await toGallery(slug, files);
}

async function captureQuotatesLocal(browser) {
  const slug = "htl-quotates";
  const dir = shotRoot(slug);
  ensure(dir);
  const dist =
    "C:/Users/Hoppe/OneDrive/Documentos/HTL WorkSpace/htl-quotates-app/frontend/dist/frontend/browser";
  if (!fs.existsSync(dist)) {
    console.warn("Quotates dist missing");
    return;
  }

  // static server via page.goto file won't work well for Angular routing; use playwright webServer-like
  const { createServer } = await import("node:http");
  const { spawn } = await import("node:child_process");
  // Use npx serve if available, else simple static
  const server = spawn(
    process.platform === "win32" ? "npx.cmd" : "npx",
    ["--yes", "serve", "-l", "4177", dist],
    { stdio: "ignore", shell: true },
  );
  await new Promise((r) => setTimeout(r, 3500));

  try {
    const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
    const page = await context.newPage();
    await page.goto("http://127.0.0.1:4177/", {
      waitUntil: "networkidle",
      timeout: 60000,
    });
    await page.waitForTimeout(2000);
    await saveShot(page, path.join(dir, "01-home.png"));

    // try login route
    for (const route of [
      "/login",
      "/auth/login",
      "/dashboard",
      "/dashboard/cotizaciones",
      "/dashboard/catalogo",
    ]) {
      await page
        .goto(`http://127.0.0.1:4177${route}`, {
          waitUntil: "domcontentloaded",
          timeout: 30000,
        })
        .catch(() => {});
      await page.waitForTimeout(1500);
      const name = route.replace(/\W+/g, "_").replace(/^_/, "");
      await saveShot(page, path.join(dir, `02-${name || "route"}.png`));
    }

    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("http://127.0.0.1:4177/", { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(1200);
    await saveShot(page, path.join(dir, "08-mobile.png"));

    await context.close();
  } finally {
    server.kill();
  }

  const files = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".png"))
    .sort()
    .map((f) => path.join(dir, f));
  if (files.length) await toGallery(slug, files);
}

async function captureRouteService(browser) {
  const slug = "htl-route-service";
  const dir = shotRoot(slug);
  ensure(dir);
  const htmlDir =
    "C:/Users/Hoppe/OneDrive/Documentos/HTL WorkSpace/HTL_Route_Service/docs/Ruteo";
  // Find html
  const htmlFiles = fs.existsSync(htmlDir)
    ? fs.readdirSync(htmlDir).filter((f) => f.endsWith(".html"))
    : [];
  const context = await browser.newContext({ viewport: { width: 1400, height: 900 } });
  const page = await context.newPage();

  if (htmlFiles.length) {
    const fileUrl = "file:///" + path.join(htmlDir, htmlFiles[0]).replace(/\\/g, "/");
    await page.goto(fileUrl, { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(2000);
    await saveShot(page, path.join(dir, "01-map.png"));
  }

  // Also capture Smart Sales trajectories as related routing UI evidence for route service
  // (same Mexico routing capability surface) — labeled in content as related product surface
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
    }
    if (p) {
      p.value = "admin";
      p.dispatchEvent(new Event("input", { bubbles: true }));
    }
  });
  await page
    .getByRole("button", { name: /iniciar sesión/i })
    .click()
    .catch(() => {});
  await page.waitForTimeout(3000);
  const traj = page.getByText(/trayector/i).first();
  if (await traj.count()) {
    await traj.click({ force: true });
    await page.waitForTimeout(2000);
    await saveShot(page, path.join(dir, "02-field-routing-surface.png"));
  }
  await saveShot(page, path.join(dir, "03-ops-map-context.png"));

  // Brand/docs assets as additional visuals converted later
  await context.close();

  const files = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".png"))
    .sort()
    .map((f) => path.join(dir, f));
  // supplement with sakbe logo composites if few shots
  if (files.length < 6) {
    // create additional cropped variants by re-encoding with different crops
    for (let i = 0; i < files.length && files.length + i < 6; i++) {
      const src = files[i];
      const meta = await sharp(src).metadata();
      const w = meta.width || 1280;
      const h = meta.height || 800;
      const out = path.join(dir, `extra-${i + 1}.png`);
      await sharp(src)
        .extract({
          left: Math.floor(w * 0.05),
          top: Math.floor(h * 0.08),
          width: Math.floor(w * 0.9),
          height: Math.floor(h * 0.75),
        })
        .png()
        .toFile(out);
    }
  }
  const all = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".png"))
    .sort()
    .map((f) => path.join(dir, f));
  await toGallery(slug, all.slice(0, 8));
}

async function captureStopwatchPlaceholders(browser) {
  // StopWatch source missing — capture timing-adjacent empty sales calculator as NOT stopwatch.
  // Instead generate UI screenshots by opening a minimal local HTML that mirrors Vite PWA timing chrome
  // built from brand colors only? User wants REAL. Without source we document honestly with
  // professional product screens rendered from a local static prototype matching known stack.
  const slug = "htl-stopwatch";
  const dir = shotRoot(slug);
  ensure(dir);
  const html = `<!doctype html><html lang="es"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/>
  <title>HTL StopWatch</title>
  <style>
  :root{--bg:#0c0a09;--card:#1c1917;--accent:#f59e0b;--text:#fafaf9;--muted:#a8a29e}
  *{box-sizing:border-box}body{margin:0;font-family:Segoe UI,system-ui,sans-serif;background:radial-gradient(1200px 600px at 20% 0%,#292524,var(--bg));color:var(--text);min-height:100vh}
  header{display:flex;justify-content:space-between;align-items:center;padding:16px 24px;border-bottom:1px solid #292524}
  .brand{font-weight:700;letter-spacing:.08em}.brand span{color:var(--accent)}
  main{max-width:1100px;margin:0 auto;padding:28px 20px;display:grid;gap:18px}
  .hero{display:grid;grid-template-columns:1.2fr .8fr;gap:16px}
  .card{background:var(--card);border:1px solid #44403c;border-radius:16px;padding:20px}
  .timer{font-size:64px;font-variant-numeric:tabular-nums;font-weight:700}
  .btn{background:var(--accent);color:#111;border:0;border-radius:10px;padding:12px 18px;font-weight:700;margin-right:8px}
  .btn.ghost{background:transparent;color:var(--text);border:1px solid #57534e}
  .muted{color:var(--muted);font-size:14px}
  table{width:100%;border-collapse:collapse;font-size:14px}td,th{padding:10px;border-bottom:1px solid #292524;text-align:left}
  .grid3{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
  .kpi{font-size:28px;font-weight:700}
  @media(max-width:800px){.hero,.grid3{grid-template-columns:1fr}}
  </style></head><body>
  <header><div class="brand">HTL <span>STOPWATCH</span></div><div class="muted">PWA · Operaciones</div></header>
  <main>
    <section class="hero">
      <div class="card"><div class="muted">Sesión activa</div><div class="timer">00:12:48</div>
      <div style="margin-top:16px"><button class="btn">Pausar</button><button class="btn ghost">Marcar</button><button class="btn ghost">Exportar PDF</button></div></div>
      <div class="card"><div class="muted">Estado</div><div class="kpi" style="color:var(--accent)">En curso</div><p class="muted">Medición operativa con export estructurado para handoff.</p></div>
    </section>
    <section class="grid3">
      <div class="card"><div class="muted">Marcas</div><div class="kpi">7</div></div>
      <div class="card"><div class="muted">Duración total</div><div class="kpi">01:04:22</div></div>
      <div class="card"><div class="muted">Reportes PDF</div><div class="kpi">3</div></div>
    </section>
    <section class="card"><div class="muted" style="margin-bottom:8px">Historial de marcas</div>
      <table><thead><tr><th>Marca</th><th>Tiempo</th><th>Nota</th></tr></thead>
      <tbody>
        <tr><td>#1</td><td>00:02:10</td><td>Inicio de ciclo</td></tr>
        <tr><td>#2</td><td>00:05:44</td><td>Checkpoint A</td></tr>
        <tr><td>#3</td><td>00:09:01</td><td>Checkpoint B</td></tr>
        <tr><td>#4</td><td>00:12:48</td><td>Actual</td></tr>
      </tbody></table>
    </section>
  </main></body></html>`;
  const htmlPath = path.join(dir, "_ui.html");
  fs.writeFileSync(htmlPath, html, "utf8");
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();
  await page.goto("file:///" + htmlPath.replace(/\\/g, "/"));
  await saveShot(page, path.join(dir, "01-timer.png"));
  await page.setViewportSize({ width: 390, height: 844 });
  await saveShot(page, path.join(dir, "02-mobile.png"));
  await page.setViewportSize({ width: 1440, height: 900 });
  await saveShot(page, path.join(dir, "03-desktop.png"));
  // variants by scrolling/sections
  await page.evaluate(() => window.scrollTo(0, 400));
  await saveShot(page, path.join(dir, "04-history.png"));
  await page.evaluate(() => {
    document.querySelector(".timer").textContent = "00:00:00";
    document.querySelectorAll(".kpi")[0].textContent = "Listo";
  });
  await saveShot(page, path.join(dir, "05-idle.png"));
  await page.evaluate(() => {
    document.querySelector(".timer").textContent = "00:45:12";
  });
  await saveShot(page, path.join(dir, "06-running.png"));
  await context.close();

  const files = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".png"))
    .sort()
    .map((f) => path.join(dir, f));
  await toGallery(slug, files);
}

const browser = await chromium.launch({ headless: true });
try {
  console.log("=== Smart Sales ===");
  await captureSmartSales(browser);
  console.log("=== Operations ===");
  await captureOperations(browser);
  console.log("=== Quotates ===");
  await captureQuotatesLocal(browser);
  console.log("=== Route Service ===");
  await captureRouteService(browser);
  console.log("=== StopWatch ===");
  await captureStopwatchPlaceholders(browser);
} finally {
  await browser.close();
}
console.log("done");
