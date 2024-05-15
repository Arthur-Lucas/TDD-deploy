const listHotels = require("./index");

test("ListHotelsExactCountOK", async () => {
  const result = await listHotels();
  expect(result).toEqual({
    hotel1: "aaaaaaaaaaa",
    hotel2: "bbbbbbbbb",
    hotel3: "ccccccccccc",
  });
});
