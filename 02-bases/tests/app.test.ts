// A A A

describe("App", () => {
  test("should be 35", () => {
    // 1. Arrange
    const num1 = 10;
    const num2 = 25;

    // 2. Act
    const result = num1 + num2;

    // 3. Assert
    expect(result).toBe(35);
  });
});
