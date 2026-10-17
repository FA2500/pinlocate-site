// Serves out/ the way GitHub Pages does: /dir → /dir/ (301), /dir/ → dir/index.html,
// anything missing → 404.html with status 404. For the e2e tests and Lighthouse.
import { createServer } from "node:http";
import { gzipSync } from "node:zlib";
import { existsSync, readFileSync, statSync } from "node:fs";
import { extname, join, normalize } from "node:path";

const ROOT = "out";
const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".png": "image/png",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".webmanifest": "application/manifest+json",
};

export function serve(port = Number(process.env.PORT) || 4173) {
  const server = createServer((req, res) => {
    const url = new URL(req.url, "http://localhost");
    const path = normalize(decodeURIComponent(url.pathname)).replace(/^(\.\.[/\\])+/, "");
    let file = join(ROOT, path);
    if (existsSync(file) && statSync(file).isDirectory()) {
      if (!url.pathname.endsWith("/")) {
        res.writeHead(301, { Location: url.pathname + "/" + url.search });
        return res.end();
      }
      file = join(file, "index.html");
    }
    const found = existsSync(file) && statSync(file).isFile();
    let body = readFileSync(found ? file : join(ROOT, "404.html"));
    const type = TYPES[found ? extname(file) : ".html"] ?? "application/octet-stream";
    const headers = { "Content-Type": type };
    // Pages compresses text responses too.
    if (/text|json|xml|manifest/.test(type) && /gzip/.test(req.headers["accept-encoding"] ?? "")) {
      body = gzipSync(body);
      headers["Content-Encoding"] = "gzip";
    }
    res.writeHead(found ? 200 : 404, headers);
    res.end(body);
  });
  return new Promise((resolve) => server.listen(port, "127.0.0.1", () => resolve(server)));
}

if (process.argv[1]?.endsWith("serve.mjs")) {
  const server = await serve();
  console.log(`Serving out/ on http://127.0.0.1:${server.address().port}`);
}
