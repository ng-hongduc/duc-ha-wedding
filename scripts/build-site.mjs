import { cp, mkdir, rm, writeFile } from "node:fs/promises";

const outputDirectory = "public";

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });
await Promise.all([
  cp("index.html", `${outputDirectory}/index.html`),
  cp("dist", `${outputDirectory}/dist`, { recursive: true }),
  cp("img", `${outputDirectory}/img`, { recursive: true }),
  writeFile(`${outputDirectory}/.nojekyll`, ""),
]);
