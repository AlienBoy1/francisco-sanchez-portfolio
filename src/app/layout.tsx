import { Syne, Source_Sans_3, IBM_Plex_Mono } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { getLocale } from "next-intl/server";
import { getPersonJsonLd } from "@/infrastructure/seo/json-ld";
import "./globals.css";

const display = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const body = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex",
  display: "swap",
});

const themeInitScript = `(function(){try{var t=localStorage.getItem("theme");var d=window.matchMedia("(prefers-color-scheme: dark)").matches;var r=t==="light"?"light":t==="dark"?"dark":(d?"dark":"light");var e=document.documentElement;e.classList.remove("light","dark");e.classList.add(r);e.style.colorScheme=r;}catch(e){}})();`;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const jsonLd = getPersonJsonLd();

  return (
    <html
      lang={locale}
      className={`${display.variable} ${body.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body className="flex min-h-dvh flex-col">
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
