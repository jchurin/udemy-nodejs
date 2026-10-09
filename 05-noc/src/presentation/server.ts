import { CheckService } from "../domain/use-cases/checks/check-service.js";
import { CronService } from "./cron/cron-service.js";

export class Server {
  public static start() {
    console.log("Server started...");
    const checkService = new CheckService(
      () => console.log("CheckService success callback executed."),
      (error) => console.error("CheckService error callback executed:", error),
    );
    CronService.createJob("*/5 * * * * *", () => {
      checkService.execute("https://google.com");
      //   checkService.execute("http://localhost:3000");
    });
  }
}
