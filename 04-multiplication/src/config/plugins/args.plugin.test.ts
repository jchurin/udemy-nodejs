import { jest } from "@jest/globals";

const runCommand = async (args: string[]) => {
  process.argv = [...process.argv.slice(0, 2), ...args];
  const { yarg } = await import("./args.plugin");
  return yarg;
};

describe("Args - plugin", () => {
  const originalArgv = process.argv;

  beforeEach(() => {
    process.argv = originalArgv;
    jest.resetModules();
  });

  test("should return default values", async () => {
    const argv = await runCommand(["-b", "5"]);

    expect(argv).toEqual(
      expect.objectContaining({
        b: 5,
        l: 10,
        s: false,
        n: "multiplication-table",
        d: "outputs",
      }),
    );
  });

  test("should return config with custom values", async () => {
    const argv = await runCommand([
      "-b",
      "7",
      "-l",
      "14",
      "-s",
      "-n",
      "table-test",
      "-d",
      "outputs/custom-table",
    ]);

    expect(argv).toEqual(
      expect.objectContaining({
        b: 7,
        l: 14,
        s: true,
        n: "table-test",
        d: "outputs/custom-table",
      }),
    );
  });
});
