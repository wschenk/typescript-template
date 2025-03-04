import { complete } from "./src/complete.js";
import { run } from "cmd-ts";

async function main() {
  await run(complete, process.argv.slice(2));
}

main().catch(console.error);
