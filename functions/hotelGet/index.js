const fs = require("fs/promises");
const functions = require('@google-cloud/functions-framework');

functions.http('helloGET', (req, res) => {
  fs.readFile("./hotels.json")
    .then((data) => {
      const hotels = JSON.parse(data);
      const hotelNames = Object.values(hotels);
      res.send(JSON.stringify(hotelNames));
    })
    .catch((error) => {
      console.error("Une erreur s'est produite lors de la lecture du fichier :", error);
      res.status(500).send("Une erreur s'est produite lors de la lecture du fichier.");
    });
});
