import { envConfig } from "./config/plugins/env.plugin.js";
import { Server } from "./presentation/server.js";

(async () => {
  main();
})();

function main() {
  Server.start();
  console.log({ email: envConfig.port });
}
