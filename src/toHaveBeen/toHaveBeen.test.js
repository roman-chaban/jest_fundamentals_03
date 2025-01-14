const {
  can,
  shouldReturnGreetMessage,
  drinkEach,
  myBeverages,
} = require("./toHaveBeen");

describe("toBe testing", () => {
  let someResult;

  beforeAll(() => {
    someResult = 0.1 + 0.2;
  });

  test("can fields testing", () => {
    expect(can.ounces).toBe(12);
    expect(Object.is(can.ounces, 12)).toBe(true);
  });

  test("can field name should return pamplemousse", () => {
    expect(can.name).toBe("pamplemousse");
  });

  test("should return some of result 0.3", () => {
    expect(someResult).toBeCloseTo(0.3);
  });
});

describe("should return callback message", () => {
  test("should return Hello world!", () => {
    const greetMessage = jest.fn();

    shouldReturnGreetMessage(greetMessage, "Hello world!");

    expect(greetMessage).toHaveBeenCalled();
    expect(greetMessage).toHaveBeenCalledTimes(1);
    expect(greetMessage).toHaveBeenCalledWith("Hello world!");
  });

  test("should return Hello world!", () => {
    const greetMessage = jest.fn();

    shouldReturnGreetMessage(greetMessage, "Goodbye world!");

    expect(greetMessage).not.toHaveBeenCalled();
  });

  test("should called times 2", () => {
    const drink = jest.fn();
    drinkEach(drink, ["first", "second"]);

    expect(drink).toHaveBeenCalledTimes(1);
    expect(drink).toHaveBeenCalledWith(["first", "second"]);
    expect(drink).toHaveBeenNthCalledWith(1, ["first", "second"]);
  });

  test("function should be called with specific arguments", () => {
    const mockFunction = jest.fn();

    mockFunction("apple", 5);
    mockFunction("banana", 10);

    expect(mockFunction).toHaveBeenCalledWith("apple", 5);
    expect(mockFunction).toHaveBeenCalledWith("banana", 10);

    expect(mockFunction).toHaveBeenLastCalledWith("banana", 10);

    expect(mockFunction).toHaveBeenNthCalledWith(1, "apple", 5);
  });

  test("mock function should return true", () => {
    const testFn = jest.fn(() => true);

    testFn();
    testFn();

    expect(testFn).toHaveReturned();
    expect(testFn).toHaveReturnedTimes(2);
  });

  test("drink returns Beer", () => {
    const beverage = { name: "Beer" };

    const drink = jest.fn(() => beverage.name);

    drink();

    expect(drink).toHaveReturnedWith("Beer");
  });

  test("test toHaveLastReturnedWith", () => {
    const beverage = { name: "test 1" };
    const beverageSecond = { name: "test 2" };

    const testFn = jest.fn((beverage) => beverage.name);

    testFn(beverage);
    testFn(beverageSecond);

    expect(testFn).toHaveLastReturnedWith("test 2");

    expect(testFn).toHaveNthReturnedWith(1, "test 1");
    expect(testFn).toHaveNthReturnedWith(2, "test 2");
  });

  test("Testing toHaveLength method", () => {
    expect([1, 2, 3]).toHaveLength(3);
    expect("hello").toHaveLength(5);
    expect("").not.toHaveLength(1);
  });

  test("testing toHaveProperty", () => {
    const houseForSale = {
      bath: true,
      bedrooms: 4,
      kitchen: {
        amenities: ["oven", "stove", "washer"],
        area: 20,
        wallColor: "white",
        "nice.oven": true,
      },
      livingRoom: {
        amenities: [
          {
            couch: [
              ["large", { dimensions: [20, 20] }],
              ["small", { dimensions: [10, 10] }],
            ],
          },
        ],
      },
      "ceiling.height": 2,
    };

    expect(houseForSale).toHaveProperty("bath");
    expect(houseForSale).toHaveProperty("bedrooms", 4);

    expect(houseForSale).not.toHaveProperty("pool");

    expect(houseForSale).toHaveProperty("kitchen.amenities", [
      "oven",
      "stove",
      "washer",
    ]);

    expect(houseForSale).toHaveProperty(
      "livingRoom.amenities[0].couch[0][1].dimensions[1]"
    );

    expect(houseForSale).toHaveProperty(["ceiling.height"], 2);
  });

  test("adding works sanely with decimals", () => {
    expect(0.1 + 0.2).toBeCloseTo(0.3, 5);
    expect(0.1 + 0.2).toBeCloseTo(0.3, 2);
  });

  test("function should return define value", () => {
    expect(shouldReturnGreetMessage).toBeDefined();
  });

  test("should return toBeFalsy", () => {
    expect(0).toBeFalsy();
    expect("").toBeFalsy();
    expect(undefined).toBeFalsy();
    expect(null).toBeFalsy();
    expect(NaN).toBeFalsy();
    expect(false).toBeFalsy();
  });
});

describe("toBeGreater test methods", () => {
  let value;

  beforeAll(() => {
    value = 10;
  });

  test("should return greater than 10", () => {
    expect(value).toBeGreaterThan(9);
    expect(value).toBeGreaterThanOrEqual(10);
    expect(value).toBeLessThan(20);
    expect(value).toBeLessThanOrEqual(20);
  });

  test("toBeInstanceOf test cases", () => {
    class Test {}

    expect(() => {}).toBeInstanceOf(Function);
    expect(new Test()).toBeInstanceOf(Test);
  });

  test("toBeNull testing", () => {
    let someNull = null;

    expect(someNull).toBeNull();
    expect(someNull).not.toBeTruthy();
  });

  test("my beverage", () => {
    const beverages = [{ data: 10 }, { data: 20 }];
    expect(myBeverages(beverages)).toContainEqual({ data: 10 });
  });

  test("toEqual", () => {
    const can1 = {
      flavor: "grapefruit",
      ounces: 12,
    };
    const can2 = {
      flavor: "grapefruit",
      ounces: 12,
    };

    expect(can1).toEqual(can2);
  });
});
