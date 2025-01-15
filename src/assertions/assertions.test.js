const { sumOfNumbers, getUsersFromServerDataBase } = require("./assertions");

describe("assertions testing", () => {
  test("should return users from server", async () => {
    expect.assertions(1);

    const users = await getUsersFromServerDataBase(
      "https://jsonplaceholder.typicode.com/users"
    );

    expect(users).toEqual([
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
          street: "Kulas Light",
          suite: "Apt. 556",
          city: "Gwenborough",
          zipcode: "92998-3874",
          geo: {
            lat: "-37.3159",
            lng: "81.1496",
          },
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
          name: "Romaguera-Crona",
          catchPhrase: "Multi-layered client-server neural-net",
          bs: "harness real-time e-markets",
        },
      },
    ]);
  });

  test("should return sum of two numbers", () => {
    expect.hasAssertions();

    expect(sumOfNumbers).toBe(199);
  });
});
