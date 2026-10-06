import { getId } from "../../src/plugins";

describe("get-id adapter", () => {
  test("getId should return a string", () => {
    const id = getId();
    expect(typeof id).toBe("string");
  });
  test("getId should have 36 chars", () => {
    const id = getId();
    expect(id.length).toBe(36);
  });
  test("getId should return different values", () => {
    const id1 = getId();
    const id2 = getId();
    expect(id1).not.toBe(id2);
  });
});
