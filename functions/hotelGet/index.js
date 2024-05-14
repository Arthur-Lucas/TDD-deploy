const fs = require("fs/promises");
const functions = require('@google-cloud/functions-framework');

function listHotels() {
  //   return 3;
  return new Promise((resolve, reject) => {
    
  });
}

functions.http('helloGET', (req, res) => {
  fs.readFile("./hotels.json")
      .then((data) => {
        res.send(JSON.stringify(JSON.parse(data)));
      })
      .catch((error) => {
        reject(0); 
      });
});

