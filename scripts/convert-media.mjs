import sharp from "sharp";
import { copyFileSync, existsSync, mkdirSync } from "fs";

mkdirSync("public/media", { recursive: true });
mkdirSync("media", { recursive: true });

const isotipoSrc = existsSync("media/isotipo.png")
  ? "media/isotipo.png"
  : existsSync("media/isotipo.webp")
    ? "media/isotipo.webp"
    : null;

const heroSrc = existsSync("media/herosection.png")
  ? "media/herosection.png"
  : existsSync("media/herosection.webp")
    ? "media/herosection.webp"
    : null;

if (!isotipoSrc && !heroSrc) {
  console.error(
    "No source images found in media/. Place isotipo.png and/or herosection.png there, then re-run.",
  );
  process.exit(1);
}

if (isotipoSrc) {
  await sharp(isotipoSrc)
    .webp({ quality: 92, effort: 6 })
    .toFile("public/media/isotipo.webp");
  await sharp(isotipoSrc).resize(32, 32).png().toFile("public/favicon-32.png");
  await sharp(isotipoSrc).resize(16, 16).png().toFile("public/favicon-16.png");
  await sharp(isotipoSrc).resize(48, 48).png().toFile("src/app/icon.png");
  await sharp(isotipoSrc).resize(180, 180).png().toFile("src/app/apple-icon.png");
  await sharp(isotipoSrc).resize(32, 32).png().toFile("public/favicon.ico");
  copyFileSync("public/media/isotipo.webp", "public/favicon.webp");
  copyFileSync("src/app/apple-icon.png", "public/apple-icon.png");
  copyFileSync("src/app/icon.png", "public/icon.png");
  console.log("isotipo → public/media/isotipo.webp + favicons");
}

if (heroSrc) {
  const stamp = Date.now();
  const out = `public/media/herosection-${stamp}.webp`;
  await sharp(heroSrc).webp({ quality: 85, effort: 6 }).toFile(out);
  await sharp(heroSrc)
    .webp({ quality: 85, effort: 6 })
    .toFile("public/media/herosection.webp");
  console.log(`hero → public/media/herosection.webp and ${out}`);
  console.log(
    `Update brandAssets.hero in src/design-system/brand/logo.tsx to "/media/herosection-${stamp}.webp" if cache persists.`,
  );
}

console.log("done");
