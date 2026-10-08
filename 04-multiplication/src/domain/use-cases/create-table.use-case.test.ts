import { CreateTable } from "./create-table.use-case";

describe("CreateTable - usecase", () => {
  const createTable = new CreateTable();
  const defaultLimit = 10;

  test("should create table with default values", () => {
    const table = createTable.execute({ base: 2, limit: defaultLimit });
    const rows = table.split("\n");

    expect(createTable).toBeInstanceOf(CreateTable);
    expect(table).toContain("2 x 1 = 2");
    expect(table).toContain("2 x 10 = 20");
    expect(rows.length).toBe(11);
  });

  test("should create table with custom values", () => {
    const options = {
      base: 3,
      limit: 20,
    };
    const table = createTable.execute(options);
    const rows = table.split("\n");

    expect(createTable).toBeInstanceOf(CreateTable);
    expect(table).toContain("3 x 1 = 3");
    expect(table).toContain("3 x 20 = 60");
    expect(rows.length).toBe(options.limit + 1);
  });
});
