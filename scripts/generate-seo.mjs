// scripts/generate-seo.mjs
import fs from "fs";
import path from "path";

const SITE_URL = "https://www.bizimcati.com.tr";

// List all your main routes (used for sitemap)
const routes = [
  "/",
  "/hakkimizda",
  "/galeri",
  "/iletisim",
  "/bbq",
  "/kirdugunu",
  "/sirketorganizasyonu",
  "/dogumgunu",
  "/mezuniyet",
  "/seminer",
];

const distDir = path.resolve("dist"); // or "out" if that's your build folder
if (!fs.existsSync(distDir)) {
  console.error("❌ Build folder not found:", distDir);
  process.exit(1);
}

// ========================
// 1. Generate sitemap.xml
// ========================
const lastmod = new Date().toISOString().split("T")[0];
const sitemapBody = routes
  .map(
    (r) => `
  <url>
    <loc>${SITE_URL}${r}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${r === "/" ? "1.0" : "0.8"}</priority>
  </url>`
  )
  .join("");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapBody}
</urlset>
`;
fs.writeFileSync(path.join(distDir, "sitemap.xml"), sitemap.trim() + "\n");

// ========================
// 2. Generate robots.txt
// ========================
const robots = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
fs.writeFileSync(path.join(distDir, "robots.txt"), robots);

// ========================
// 3. Generate .htaccess
// ========================
const htaccess = `RewriteEngine On

# Redirect /index.html to /
RewriteCond %{THE_REQUEST} \\s/+(index\\.html?|index\\.php)[\\s?] [NC]
RewriteRule ^index\\.html?$ / [R=301,L]

# Serve existing files and folders normally
RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]

# SPA fallback - send all other routes to index.html
RewriteRule . /index.html [L]
`;
fs.writeFileSync(path.join(distDir, ".htaccess"), htaccess);

console.log("✅ sitemap.xml, robots.txt, and .htaccess generated.");
