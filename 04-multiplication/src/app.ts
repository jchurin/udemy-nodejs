import { writeFile } from "./app.old.js";
import { yarg } from "./config/plugins/args.plugin.js";
import { ServerApp } from "./presentation/server-app.js";

(async () => {
  await main();
})();

async function main() {
  const { b: base, l: limit, s: displayTable, n: name, d: destination } = yarg;
  ServerApp.run({ base, limit, displayTable, name, destination });
}
