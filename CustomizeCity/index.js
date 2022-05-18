const states = require("./dummyData/states.json");
const cities = require("./dummyData/cities.json");

const customizeData = [];

states.forEach((state) => {
    customizeData.push({
      state: state.name,
      stateCode: state.isoCode,
      city: [],
    });
});

cities.forEach((city) => {
  customizeData.forEach((data) => {
    if (city.stateCode == data.stateCode) {
      data.city.push(city.name);
    }
  });
});

//console.log(customizeData);

  // write to js file
const fs = require("fs");

fs.writeFile(
  "customizeCities.json",
  JSON.stringify(customizeData),
  (err) => {
    if (err) {
      console.error(err);
      return;
    }
    //file written successfully
  }
);

