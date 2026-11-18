import type { LogDataSource } from "../../domain/datasources/log.datasource.js";
import type {
  LogEntity,
  LogSeverityLevel,
} from "../../domain/entities/log.entity.js";
import { LogRepository } from "../../domain/repositories/log.repository.js";

export class LogRepositoryImpl implements LogRepository {
  constructor(private readonly logDataSource: LogDataSource) {}

  async saveLog(log: LogEntity): Promise<void> {
    this.logDataSource.saveLog(log);
  }
  async getLogs(severity: LogSeverityLevel): Promise<LogEntity[]> {
    return this.logDataSource.getLogs(severity);
  }
}
