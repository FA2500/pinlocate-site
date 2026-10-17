// After `next build`: give every page a Content-Security-Policy <meta> that allows
// only this site's own files plus the exact inline scripts Next wrote into that page
// (by sha256 hash), so scripts never need 'unsafe-inline'. Also drops the extra
// copies of the 404 page that Next exports as routes.
import { createHash } from "node:crypto";
import { readdirSync, readFileSync, rmSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUT = "out";

export function inlineScripts(html) {
  const scripts = [];
  for (const m of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
    const [, attrs, body] = m;
    if (/\bsrc\s*=/i.test(attrs)) continue;
    // Data blocks (JSON-LD) never run, so CSP doesn't apply to them.
    const type = /\btype\s*=\s*["']?([^"'\s>]+)/i.exec(attrs)?.[1]?.toLowerCase();
    if (type && !["text/javascript", "module", "application/javascript"].includes(type)) continue;
    scripts.push(body);
  }
  return scripts;
}

export function policy(html) {
  const hashes = [...new Set(inlineScripts(html).map((s) => `'sha256-${createHash("sha256").update(s, "utf8").digest("base64")}'`))];
  return [
    "default-src 'none'",
    ["script-src 'self'", ...hashes].join(" "),
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self'",
    "font-src 'self'",
    "connect-src 'self'",
    "manifest-src 'self'",
    "base-uri 'none'",
    "form-action 'none'",
  ].join("; ");
}

function htmlFiles(dir) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) return name === "_next" ? [] : htmlFiles(path);
    return name.endsWith(".html") ? [path] : [];
  });
}

if (process.argv[1] && import.meta.url.endsWith(process.argv[1].split("/").pop())) {
  for (const dir of ["404", "_not-found"]) rmSync(join(OUT, dir), { recursive: true, force: true });
  const files = htmlFiles(OUT);
  for (const file of files) {
    let html = readFileSync(file, "utf8");
    if (html.includes('http-equiv="Content-Security-Policy"')) throw new Error(`${file} already has a CSP`);
    if (/\son[a-z]+\s*=/i.test(html.replace(/<script\b[\s\S]*?<\/script>/gi, ""))) throw new Error(`${file} has an inline event handler`);
    const charset = '<meta charSet="utf-8"/>';
    if (!html.includes(charset)) throw new Error(`${file}: no charset meta to place the CSP after`);
    // Right after the charset, before any script, so it covers all of them.
    html = html.replace(charset, `${charset}<meta http-equiv="Content-Security-Policy" content="${policy(html)}"/>`);
    writeFileSync(file, html);
  }
  console.log(`CSP added to ${files.length} pages`);
}
