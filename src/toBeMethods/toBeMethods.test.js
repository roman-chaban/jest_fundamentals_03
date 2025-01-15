const {
  sum,
  fetchNewFlavorIdea,
  bloop,
  checkToBeTruthy,
  getAllFlavors,
  houseForSale,
  desiredHouse,
  getDataFromDataBase,
} = require("./toBeMethods");

describe("toBe methods testing", () => {
  let mockVariable;
  let mockFn;
  let incorrectVariable;

  beforeAll(() => {
    mockVariable = 20;
    mockFn = jest.fn((data) => data);
  });

  beforeEach(() => {});

  test("toBeCloseTo test case", () => {
    expect(sum).toBeCloseTo(0.3, 5);
  });

  test("test fetchFlavorIdea function", () => {
    expect(fetchNewFlavorIdea({ current: "Current" })).toBeDefined();
  });

  test("should return non falsy value", () => {

    expect.assertions(6);

    expect(0).toBeFalsy();
    expect("").toBeFalsy();
    expect(null).toBeFalsy();
    expect(undefined).toBeFalsy();
    expect(false).toBeFalsy();
    expect(NaN).toBeFalsy();
  });

  test("should return greater than 20", () => {
    expect(mockVariable).toBeGreaterThan(10); // > 10
    expect(mockVariable).toBeGreaterThanOrEqual(10); // >= 10
  });

  test("should return less than 20", () => {
    expect(mockVariable).toBeLessThan(21); // > 20
    expect(mockVariable).toBeLessThanOrEqual(100); // >= 20
  });

  test("should return instance of class", () => {
    expect(() => {}).toBeInstanceOf(Function);
  });

  test("function should return null", () => {
    expect(bloop()).toBeNull();
  });

  test("function should return true", () => {
    expect(checkToBeTruthy()).toBeTruthy();

    expect("Hello").toBeTruthy();
  });

  test("should return undefined", () => {
    expect(incorrectVariable).toBeUndefined();
  });

  test("should return NaN or not", () => {
    expect.assertions(2);

    expect(NaN).toBeNaN();

    expect(1).not.toBeNaN();
  });

  test("should return element from flavours", () => {
    expect.hasAssertions();

    expect(getAllFlavors(["lemon"])).toContain("lemon");
  });

  test("should return data structure", () => {
    let mockFn = jest.fn((data) => data);

    const inputData = [{ id: 1, name: "Roman", isEmployee: true }];
    const result = mockFn(inputData);

    expect(result).toContainEqual({ id: 1, name: "Roman", isEmployee: true });
  });

  test("should return output string", () => {
    expect.assertions(3);

    expect(fetchNewFlavorIdea({ current: "grapefruit" })).toMatch(
      /grapefruit/i
    );

    expect(fetchNewFlavorIdea({ current: "grapefruit" })).toMatch(
      new RegExp("grapefruit")
    );

    expect("hello").toMatch(/el/i);
  });

  test("should compare objects", () => {
    expect(houseForSale).toMatchObject(desiredHouse);

    expect(houseForSale).toMatchSnapshot(desiredHouse);
  });

  expect(houseForSale).toMatchInlineSnapshot(
    desiredHouse,
    `
{
  "bath": true,
  "bedrooms": 4,
  "kitchen": {
    "amenities": [
      "oven",
      "stove",
      "washer",
    ],
    "area": 20,
    "wallColor": StringMatching /white\\|yellow/,
  },
}
`
  );

  test("should compare strictEqual", () => {
    const structure = [{ a: 1, b: undefined }];

    expect(structure).toStrictEqual([{ a: 1, b: undefined }]);
  });

  test("should return data base error message", async () => {
    getDataFromDataBase().then((data) => {
      return expect(data).toThrow(new Error("This data base is empty"));
    });

    getDataFromDataBase().then((data) => {
      return expect(data)
        .toThrow(new Error("This data base is empty"))
        .rejects.toThrowErrorMatchingSnapshot();
    });

    getDataFromDataBase().then((data) => {
      return expect(data)
        .toThrow(new Error("This data base is empty"))
        .rejects.toThrowErrorMatchingInlineSnapshot();
    });
  });

  afterAll(() => {});

  afterEach(() => {});
});
