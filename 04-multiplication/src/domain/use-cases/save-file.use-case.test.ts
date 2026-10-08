import { jest } from "@jest/globals";
import fs from "node:fs";
import { SaveFile } from "./save-file.use-case";

describe("SaveFile - usecase", () => {
  const saveFile = new SaveFile();

  afterEach(() => {
    // cleanup
    const dirExists = fs.existsSync("outputs");
    if (dirExists) fs.rmSync("outputs", { recursive: true });
  });

  test("should save file with default values", () => {
    const filePath = "outputs/table.txt";
    const options = {
      fileContent: "Test file content",
    };

    const result = saveFile.execute(options);
    const fileExists = fs.existsSync(filePath);
    const fileContent = fs.readFileSync(filePath, {
      encoding: "utf-8",
    });

    expect(result).toBeTruthy();
    expect(fileExists).toBeTruthy();
    expect(fileContent).toBe(options.fileContent);
  });

  test("should save file with custom values", () => {
    const filePath = "outputs/custom/custom-test.txt";
    const options = {
      fileContent: "Test file content",
      filePath: "outputs/custom",
      fileName: "custom-test",
    };

    const result = saveFile.execute(options);
    const fileExists = fs.existsSync(filePath);
    const fileContent = fs.readFileSync(filePath, {
      encoding: "utf-8",
    });

    expect(result).toBeTruthy();
    expect(fileExists).toBeTruthy();
    expect(fileContent).toBe(options.fileContent);
  });

  test("should return false if directory could not be created", () => {
    const saveFile = new SaveFile();
    const options = {
      fileContent: "Test file content",
    };
    const mkdirSpy = jest.spyOn(fs, "mkdirSync").mockImplementation(() => {
      throw new Error("This is a custom error msg from testing - jest 1");
    });

    const result = saveFile.execute(options);

    expect(result).toBeFalsy();

    mkdirSpy.mockRestore();
  });

  test("should return false if file could not be created", () => {
    const saveFile = new SaveFile();
    const options = {
      fileContent: "Test file content",
    };
    const writeFileSpy = jest
      .spyOn(fs, "writeFileSync")
      .mockImplementation(() => {
        throw new Error("This is a custom error msg from testing - jest 2");
      });

    const result = saveFile.execute(options);

    expect(result).toBeFalsy();

    writeFileSpy.mockRestore();
  });
});
