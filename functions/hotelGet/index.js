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

functions.http("hotelGET", async (req, res) => {
  try {
    const hotels = await listHotels();
    if (hotels === 0) {
      throw new Error("Failed to load hotels");
    }
    const hotelNames = Object.values(hotels).join("; ");
    const htmlResponse = `<p style="text-align: center; font-family: poppins;">${hotelNames}</p>`;
    res.send(htmlResponse);
  } catch (error) {
    res.status(500).send("An error occurred while fetching hotel data");
  }
});

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
