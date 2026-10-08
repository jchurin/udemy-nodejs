import { jest } from "@jest/globals";
import { ServerApp } from "./server-app";
import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

describe("Server App", () => {
  const options = {
    base: 2,
    limit: 10,
    displayTable: false,
    destination: "outputs/test-destination",
    name: "test-filename",
  };

  it("should create ServerApp instance", () => {
    const serverApp = new ServerApp();

    expect(serverApp).toBeInstanceOf(ServerApp);
    expect(typeof ServerApp.run).toBe("function");
  });

  test("should run ServerApp with default options", () => {
    const logSpy = jest.spyOn(console, "log");
    const createTableSpy = jest.spyOn(CreateTable.prototype as any, "execute");
    const saveFileSpy = jest.spyOn(SaveFile.prototype as any, "execute");

    ServerApp.run(options);

    expect(logSpy).toHaveBeenCalledTimes(3);
    expect(logSpy).toHaveBeenCalledWith("Server running...");
    expect(logSpy).toHaveBeenCalledWith("File created");
    expect(logSpy).toHaveBeenLastCalledWith("Server finished");

    expect(createTableSpy).toHaveBeenCalledTimes(1);
    expect(createTableSpy).toHaveBeenCalledWith({
      base: options.base,
      limit: options.limit,
    });

    expect(saveFileSpy).toHaveBeenCalledTimes(1);
    expect(saveFileSpy).toHaveBeenCalledWith({
      fileContent: expect.any(String),
      filePath: options.destination,
      fileName: options.name,
    });
  });

  test("should run with custom values mocked", () => {
    const mockedTable = "Mocked table content";

    const logMock = jest.fn();
    const createTableMock = jest.fn().mockReturnValue(mockedTable);
    const saveFileMock = jest.fn();

    console.log = logMock;
    CreateTable.prototype.execute = createTableMock;
    SaveFile.prototype.execute = saveFileMock;

    ServerApp.run(options);

    expect(logMock).toHaveBeenCalledTimes(3);
    expect(logMock).toHaveBeenCalledWith("Server running...");
    expect(logMock).toHaveBeenCalledWith("File NOT created");
    expect(logMock).toHaveBeenLastCalledWith("Server finished");

    expect(createTableMock).toHaveBeenCalledTimes(1);
    expect(createTableMock).toHaveBeenCalledWith({
      base: options.base,
      limit: options.limit,
    });

    expect(saveFileMock).toHaveBeenCalledTimes(1);
    expect(saveFileMock).toHaveBeenCalledWith({
      fileContent: mockedTable,
      filePath: options.destination,
      fileName: options.name,
    });
  });
});
