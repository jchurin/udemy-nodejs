import { characters } from "../../src/js-foundation/02-destructuring";

describe("Destructuring", () => {
  test("characters should contain flash and superman", () => {
    expect(characters).toContain("Flash");
    expect(characters).toContain("Superman");
  });
  test("first character is flash and second superman", () => {
    expect(characters[0]).toBe("Flash");
    expect(characters[1]).toBe("Superman");
  });
});
