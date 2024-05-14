const listHotels = require("./hotels");

test("must list 1 hotel or more", async () => {
  const result = await listHotels();
  console.log(result);
  expect(result).toEqual({
    hotel1: "aaaaaaaaaaa",
    hotel2: "bbbbbbbbb",
    hotel3: "ccccccccccc",
  });
});
