import type { LogEntity, LogSeverityLevel } from "../entities/log.entity.js";

export abstract class LogDataSource {
  abstract saveLog(log: LogEntity): Promise<void>;
  abstract getLogs(severity: LogSeverityLevel): Promise<LogEntity[]>;
}
