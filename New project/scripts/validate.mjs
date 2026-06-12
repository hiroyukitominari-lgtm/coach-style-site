import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const html = readFileSync(join(root, "index.html"), "utf8");
const localRefs = [...html.matchAll(/(?:src|href)="([^"#][^"]*)"/g)]
  .map((match) => match[1])
  .filter((ref) => !ref.startsWith("http") && !ref.startsWith("mailto:") && !ref.startsWith("tel:"));

const missing = localRefs.filter((ref) => {
  const cleanRef = ref.split("?")[0];
  return !existsSync(join(root, cleanRef));
});

if (missing.length > 0) {
  console.error("Missing local files referenced by index.html:");
  for (const ref of missing) {
    console.error(`- ${ref}`);
  }
  process.exit(1);
}

console.log(`Validated ${localRefs.length} local references.`);
