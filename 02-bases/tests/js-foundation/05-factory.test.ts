import { buildMakePerson } from "../../src/js-foundation/05-factory";

describe("Factory", () => {
  const getAgeMock = () => 35;
  const getUUIDMock = () => "1234";

  test("buildMakePerson should return a function", () => {
    const makePerson = buildMakePerson({
      getAge: getAgeMock,
      getId: getUUIDMock,
    });
    expect(typeof makePerson).toBe("function");
  });

  test("makePerson should return a Person", () => {
    const makePerson = buildMakePerson({
      getAge: getAgeMock,
      getId: getUUIDMock,
    });
    const johnDoe = makePerson({ name: "John Doe", birthdate: "1995-03-03" });
    expect(johnDoe).toEqual({
      id: "1234",
      name: "John Doe",
      age: 35,
      birthdate: "1995-03-03",
    });
  });
});
