import {
  buildLogger,
  logger as winstonLogger,
} from "../../src/plugins/logger.plugin";

describe("logger", () => {
  test("buildLogger should return an object", async () => {
    const service = "test-service";
    const logger = buildLogger(service);
    expect(typeof logger).toBe("object");
  });
  test("logger contains log method", async () => {
    const service = "test-service";
    const logger = buildLogger(service);
    expect(logger.log).toBeDefined();
    expect(typeof logger.log).toBe("function");
  });
  test("logger contains error method", async () => {
    const service = "test-service";
    const logger = buildLogger(service);
    expect(logger.error).toBeDefined();
    expect(typeof logger.error).toBe("function");
  });
  test("logger.log is called with service and message", async () => {
    const windstonLoggerMock = jest.spyOn(winstonLogger, "log");

    const service = "test-service";
    const msg = "this is a log message";
    const logger = buildLogger(service);

    logger.log(msg);
    expect(windstonLoggerMock).toHaveBeenCalled();
    expect(windstonLoggerMock).toHaveBeenCalledTimes(1);
    expect(windstonLoggerMock).toHaveBeenCalledWith(
      "info",
      expect.objectContaining({
        level: "info",
        message: "this is a log message",
        service: "test-service",
      }),
    );
  });
});
