// Validates the structured data (JSON-LD) in every built page, against schema.org and Google's
// rich-result rules, offline, plus the fields this site promises for each type (REQUIRED) and no ratings.
// Exits 1 on any error or warning. Run after the build: npm run schema
// The schema.org vocabulary is a pinned copy (scripts/vendor/, downloaded 18 Oct 2026 from
// https://schema.org/version/latest/schemaorg-all-https.jsonld), so the check doesn't depend on the network.
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import Validator from "@adobe/structured-data-validator";
import WebAutoExtractor from "@marbec/web-auto-extractor";

const OUT = "out";
const schema = JSON.parse(readFileSync("scripts/vendor/schemaorg-all-https.jsonld", "utf8"));

function htmlFiles(dir) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) return name === "_next" ? [] : htmlFiles(path);
    return name.endsWith(".html") ? [path] : [];
  });
}

// What each type must carry here, as dotted paths (an array value: every item).
const REQUIRED = {
  Organization: ["name", "url", "logo.url", "email"],
  SoftwareApplication: ["name", "operatingSystem", "applicationCategory", "offers.price", "offers.priceCurrency"],
  FAQPage: ["mainEntity.name", "mainEntity.acceptedAnswer.text"],
  Article: ["headline", "author.name", "datePublished", "dateModified", "image"],
};
const DATE = /^\d{4}-\d{2}-\d{2}$/;

function values(item, path) {
  let vals = [item];
  for (const key of path.split(".")) vals = vals.flatMap((v) => (v == null ? [] : Array.isArray(v[key]) ? v[key] : [v[key]]));
  return vals;
}

function ownChecks(item) {
  const problems = [];
  for (const path of REQUIRED[item["@type"]] ?? []) {
    const vals = values(item, path);
    if (!vals.length || vals.some((v) => v === undefined || v === "")) problems.push(`${item["@type"]} needs ${path}`);
  }
  for (const key of ["datePublished", "dateModified"]) {
    if (item[key] !== undefined && !DATE.test(item[key])) problems.push(`${item["@type"]} ${key} is not a date: ${item[key]}`);
  }
  if (/"(aggregateRating|review|ratingValue|reviewCount)"/.test(JSON.stringify(item))) problems.push(`${item["@type"]} has a rating or review`);
  return problems;
}

let errors = 0;
for (const file of htmlFiles(OUT)) {
  const html = readFileSync(file, "utf8");
  const data = new WebAutoExtractor({ addLocation: true, embedSource: ["rdfa", "microdata"] }).parse(html);
  const issues = await new Validator(schema).validate(data);
  for (const i of issues) {
    console.log(`${file}: ${i.severity} ${i.issueMessage}`);
    errors++;
  }
  const items = Object.values(data.jsonld).flat();
  for (const problem of items.flatMap(ownChecks)) {
    console.log(`${file}: ERROR ${problem}`);
    errors++;
  }
  console.log(`${file}: ${items.map((i) => i["@type"]).join(", ") || "no structured data"}`);
}
console.log(errors ? `${errors} structured data errors` : "Structured data valid");
if (errors) process.exit(1);
