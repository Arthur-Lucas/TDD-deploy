const { listHotels, listPictures } = require("./index");

test("ListHotelsExactCountOK", async () => {
  const result = await listHotels();
  expect(result).toEqual({
    hotel1: "aaaaaaaaaaa",
    hotel2: "bbbbbbbbb",
    hotel3: "ccccccccccc",
  });
});

test("ListPicturesExactHotelOK", async () => {
  const hotelName = "hotel1";
  // Appelle la fonction 'listPictures' avec le nom de l'hôtel et attend sa résolution
  const result = await listPictures(hotelName);
  // Utilise une instruction switch pour déterminer quelles images sont attendues en fonction du nom de l'hôtel
  switch (hotelName) {
    case "hotel1":
      expect(result).toEqual({
        photo1: "EEEEEEEEEEE.png",
        photo2: "DDDDDDDDDDD.png",
      });
      break;
    case "hotel2":
      expect(result).toEqual({
        photo1: "FFFFFFFFFFF.png",
        photo2: "GGGGGGGGGGG.png",
      });
      break;
    case "hotel3":
      expect(result).toEqual({
        photo1: "HHHHHHHHHHHH.png",
        photo2: "IIIIIIIIIIIIIIIIIIIIIIIIIIIIIII.png",
      });
      break;
  }
});
