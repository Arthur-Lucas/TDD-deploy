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

function listPictures(hotelName) {
  return new Promise((resolve, reject) => {
    // Lit le fichier 'pictures.json' de manière asynchrone
    fs.readFile("./pictures.json")
      .then((data) => {
        var ParsedJSON = JSON.parse(data);

        // Récupère les images de l'hôtel spécifié à partir des données JSON
        resolve(ParsedJSON[hotelName][0].pictures);
      })
      .catch((error) => {
        reject(0);
      });
  });
}

module.exports = { listHotels, listPictures };

functions.http("hotelGET", async (req, res) => {
  const pathName = req.path;
  switch (pathName) {
    case "/":
    case "/hotelList":
      try {
        const hotels = await listHotels();
        if (hotels === 0) {
          throw new Error("Failed to load hotels");
        }
        const hotelNames = Object.values(hotels).join("; ");
        const htmlResponse = `<p style="text-align: center; font-family: poppins;">${hotelNames}</p>`;
        res.status(200).send(htmlResponse);
      } catch (error) {
        res.status(500).send("An error occurred while fetching hotel data");
      }
      break;
    case "/picturesHotel":
      try {
        const pictures = await listPictures("hotel1");
        if (pictures === 0) {
          throw new Error("Failed to load hotels");
        }
        const hotelNames = Object.values(pictures).join("; ");
        const htmlResponse = `<p style="text-align: center; font-family: poppins;">Pictures : ${hotelNames}</p>`;
        res.status(200).send(htmlResponse);
      } catch (error) {
        res.status(500).send("An error occurred while fetching hotel data");
      }
    case "/healt":
      res.status(204).send("Healt page");
      break;
    default:
      res
        .status(404)
        .send(
          "<h1><b>404 - Not Found</b></h1><br> <h2>Please, check the URL</h2>"
        );
      break;
  }
});

// functions.http("hotelTEST", async (req, res) => {
//   try {
//     const hotels = await listHotels();
//     if (hotels === 0) {
//       throw new Error("Failed to load hotels");
//     }
//     const hotelNames = Object.values(hotels).join(", ");
//     const htmlResponse = `${hotelNames}`;
//     res.send(htmlResponse);
//   } catch (error) {
//     res.status(500).send("An error occurred while fetching hotel data");
//   }
// });

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
