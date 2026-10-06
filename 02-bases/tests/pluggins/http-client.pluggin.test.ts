import { httpClient } from "../../src/plugins";

describe("http-client", () => {
  test("httpClient.get should return data", async () => {
    const data = await httpClient.get(
      "https://jsonplaceholder.typicode.com/todos/1",
    );
    expect(typeof data).toBe("object");
    expect(data).toEqual({
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: expect.any(Boolean),
    });
  });
  test("httpClient should have POST, PUT and DELETE methods", async () => {
    expect(httpClient.get).toBeDefined();
    expect(typeof httpClient.get).toBe("function");
    expect(httpClient.post).toBeDefined();
    expect(typeof httpClient.post).toBe("function");
    expect(httpClient.put).toBeDefined();
    expect(typeof httpClient.put).toBe("function");
    expect(httpClient.delete).toBeDefined();
    expect(typeof httpClient.delete).toBe("function");
  });
});
