const fs = require("fs/promises");
const functions = require('@google-cloud/functions-framework');

function listHotels() {
  //   return 3;
  return new Promise((resolve, reject) => {
    fs.readFile("./hotels.json")
      .then((data) => {
        resolve(JSON.parse(data));
      })
      .catch((error) => {
        reject(0); // Reject the promise if there's an error
      });
  });
}

functions.http('helloGET', (req, res) => {
  res.send('Hello World!');
});

module.exports = listHotels;
