import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize, sep } from "node:path";

const root = join(process.cwd(), "dist");
const port = Number(process.env.PORT) || 8080;
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".ico": "image/x-icon",
  ".json": "application/json",
  ".woff2": "font/woff2",
};

createServer(async (req, res) => {
  try {
    const url = decodeURIComponent(new URL(req.url ?? "/", "http://x").pathname);
    let file = normalize(join(root, url));
    if (file !== root && !file.startsWith(root + sep)) throw new Error("outside root");
    const info = await stat(file).catch(() => null);
    if (info?.isDirectory()) file = join(file, "index.html");
    else if (!info) file = join(root, "index.html");
    const body = await readFile(file);
    const ext = extname(file);
    res.writeHead(200, {
      "Content-Type": types[ext] ?? "application/octet-stream",
      "Cache-Control": url.startsWith("/assets/") ? "public, max-age=31536000, immutable" : "no-cache",
    });
    res.end(body);
  } catch {
    res.writeHead(400).end("Bad request");
  }
}).listen(port, () => console.log(`serving dist/ on :${port}`));
