import { getAge } from "../../src/plugins";

describe("get-age adapter", () => {
  test("getAge should return a number", () => {
    const birthdate = "1995-03-03";
    const age = getAge(birthdate);

    expect(typeof age).toBe("number");
  });
  test("getAge should return the person's age", () => {
    const birthdate = "1995-03-03";
    const age = getAge(birthdate);

    const currentYear = new Date().getFullYear();
    const birthdateYear = new Date(birthdate).getFullYear();

    expect(age).toBe(currentYear - birthdateYear);
  });
  // test only to override the method with spyOn
  test("getAge shoudl return 0 years", () => {
    const spy = jest.spyOn(Date.prototype, "getFullYear").mockReturnValue(2000);
    const birthdate = "1995-03-03";
    const age = getAge(birthdate);
    expect(age).toBe(0);
    expect(spy).toHaveBeenCalledTimes(2);
  });
});
