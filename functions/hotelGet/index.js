// Importe le module 'fs' pour travailler avec le système de fichiers de manière asynchrone
const fs = require("fs/promises");
const functions = require("@google-cloud/functions-framework");
function listHotels() {
  return new Promise((resolve, reject) => {
    fs.readFile("./hotels.json")
      .then((data) => {
        resolve(JSON.parse(data));
      })
      .catch((error) => {
        reject(0); //
      });
  });
}

module.exports = listHotels;

functions.http("helloGET", (req, res) => {
  const hotels = listHotels();
  const hotelNames = Object.values(hotels).join("; ");
  const htmlResponse = `<p style="text-align: center; font-family :poppins;">${hotelNames}</p>`;
  res.send(htmlResponse);
  // fs.readFile("./hotels.json")
  //   .then((data) => {
  //     const hotels = JSON.parse(data);
  //     const hotelNames = Object.values(hotels).join('; ');
  //     const htmlResponse = `<p style="text-align: center; font-family :poppins;">${hotelNames}</p>`;
  //     res.send(htmlResponse);
  //   })
  //   .catch((error) => {
  //     console.error("Une erreur s'est produite lors de la lecture du fichier :", error);
  //     res.status(500).send("Une erreur s'est produite lors de la lecture du fichier.");
  //   });
});
