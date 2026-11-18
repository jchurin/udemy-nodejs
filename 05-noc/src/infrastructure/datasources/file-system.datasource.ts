import fs from "fs";
import { LogDataSource } from "../../domain/datasources/log.datasource.js";
import {
  LogEntity,
  LogSeverityLevel,
} from "../../domain/entities/log.entity.js";

export class FileSystemDataSource implements LogDataSource {
  private readonly logsPath = "logs";
  private readonly allLogsPath = `${this.logsPath}/logs-all.log`;
  private readonly lowLogsPath = `${this.logsPath}/logs-low.log`;
  private readonly mediumLogsPath = `${this.logsPath}/logs-medium.log`;
  private readonly highLogsPath = `${this.logsPath}/logs-high.log`;

  constructor() {
    this.createLogFiles();
  }

  private createLogFiles = () => {
    if (!fs.existsSync(this.logsPath)) {
      fs.mkdirSync(this.logsPath, { recursive: true });

      [
        this.allLogsPath,
        this.lowLogsPath,
        this.mediumLogsPath,
        this.highLogsPath,
      ].forEach((path) => {
        if (!fs.existsSync(path)) {
          fs.writeFileSync(path, "");
        }
      });
    }
  };

  async saveLog(newLog: LogEntity): Promise<void> {
    const logEntry = `${JSON.stringify(newLog)}\n`;

    fs.appendFileSync(this.allLogsPath, logEntry);

    if (newLog.level === LogSeverityLevel.low) {
      fs.appendFileSync(this.lowLogsPath, logEntry);
    } else if (newLog.level === LogSeverityLevel.medium) {
      fs.appendFileSync(this.mediumLogsPath, logEntry);
    } else if (newLog.level === LogSeverityLevel.high) {
      fs.appendFileSync(this.highLogsPath, logEntry);
    }
  }

  private readLogsFromFile(filePath: string): LogEntity[] {
    if (!fs.existsSync(filePath)) {
      throw new Error(`Log file at ${filePath} does not exist.`);
    }

    const fileContent = fs.readFileSync(filePath, "utf-8");
    const logEntries = fileContent.trim().split("\n");

    return logEntries.map(LogEntity.fromJSON);
  }

  async getLogs(severity: LogSeverityLevel): Promise<LogEntity[]> {
    switch (severity) {
      case LogSeverityLevel.low:
        return this.readLogsFromFile(this.lowLogsPath);
      case LogSeverityLevel.medium:
        return this.readLogsFromFile(this.mediumLogsPath);
      case LogSeverityLevel.high:
        return this.readLogsFromFile(this.highLogsPath);
      default:
        throw new Error(`Invalid log severity level: ${severity}`);
    }
  }
}
