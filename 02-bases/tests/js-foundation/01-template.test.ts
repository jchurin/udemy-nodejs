import { emailTemplate } from "../../src/js-foundation/01-template";

describe("Template", () => {
  test("emailTemplate should contain a greeting", () => {
    expect(emailTemplate).toContain("Hi, ");
  });
  test("emailTemplate should contain a variable for the name and for the order number", () => {
    expect(emailTemplate).toMatch(/{{name}}/);
    expect(emailTemplate).toMatch(/{{orderId}}/);
  });
});
