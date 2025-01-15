const { Cat, getCat, randomCalls } = require("./asymmetricalMatches");

describe("asymmetrical matchers", () => {
  let mockFn;
  let list;

  beforeAll(() => {
    mockFn = jest.fn();
    list = [1, 2, 4, 5];
  });

  test("map calls its argument with a non-null argument", () => {
    list.map((x) => mockFn(x));

    expect(mockFn).toHaveBeenCalledWith(expect.anything());
  });

  test("random call calls its callback with a class instance", () => {
    const mock = jest.fn();

    getCat(mock);

    expect(mock).toHaveBeenCalledWith(expect.any(Cat));
  });

  test("random calls calls its callback with a number", () => {
    const mock = jest.fn();

    randomCalls(mock);

    expect(mock).toHaveBeenCalledWith(expect.any(Number));
  });

  test("array containing", () => {
    const expected = ["Alice", "Bob", "Rick"];

    expect(["Alice", "Bob", "Rick"]).toEqual(expect.arrayContaining(expected));
  });

  test("Beware of a misunderstanding! A sequence of dice rolls", () => {
    const expected = [1, 2, 3, 4, 5, 6];

    expect([1, 2, 8, 4, 5, 6]).not.toEqual(expect.arrayContaining(expected));
  });

  test("test anything", () => {
    const mock = jest.fn();

    [1, 2, 3, 4].map((x) => mock(x));

    expect(mock).toHaveBeenCalledWith(expect.anything());
  });

  test("testing arrayContaining method", () => {
    expect([1, 2, 4, 5]).toEqual(expect.arrayContaining(list));
  });

  test("compare float in object properties", () => {
    expect({
      title: "sum",
      sum: 0.1 + 0.2,
    }).toEqual({ title: "sum", sum: expect.closeTo(0.3, 5) });
  });

  test("testing objectContaining method", () => {
    const received = {
      id: 100,
      date: new Date(),
    };

    expect(received).toEqual(expect.objectContaining({ id: 100 }));
  });

  test("async objectContaining check", async () => {
    const getUser = async () => {
      return { id: 1, name: "Charlie", email: "charlie@example.com" };
    };

    const user = await getUser();

    expect(user).toEqual(
      expect.objectContaining({ name: "Charlie", email: "charlie@example.com" })
    );
  });

  test("objectContaining allows partial matching", () => {
    const received = { product: "Laptop", price: 1200, discount: 10 };

    expect(received).toEqual(
      expect.objectContaining({ product: "Laptop", price: 1200 })
    );
  });

  test("objectContaining isn't have partial matching", () => {
    const value = { key: 1 };

    expect(value).toEqual(expect.not.objectContaining({ key: 20 }));
  });

  test("stringContaining method", () => {
    const userName = "Roman";

    expect(userName).toEqual(expect.stringContaining("Roman"));
  });

  test("stringContaining is not matching", () => {
    expect.assertions(1);

    const expectedValue = "Roman Chaban";

    expect(expectedValue).toEqual(expect.not.stringContaining("Roman 24"));
  });

  afterAll(() => {
    mockFn = null;
    list = [];
  });
});
