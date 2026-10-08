import { jest } from "@jest/globals";
import { ServerApp } from "./presentation/server-app";

describe("App", () => {
  it("should call ServerApp.run with values", async () => {
    const serverRunMock = jest.fn();
    ServerApp.run = serverRunMock;

    process.argv = [
      "node",
      "app.js",
      "-b",
      "10",
      "-l",
      "20",
      "-s",
      "-n",
      "table-test",
      "-d",
      "outputs/custom-table",
    ];

    await import("./app");

    expect(serverRunMock).toHaveBeenCalledTimes(1);
    expect(serverRunMock).toHaveBeenCalledWith({
      base: 10,
      limit: 20,
      displayTable: true,
      name: "table-test",
      destination: "outputs/custom-table",
    });
  });
});
