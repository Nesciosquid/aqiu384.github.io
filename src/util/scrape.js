var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var personas = require('./js/full_compendium.js');

const getPersonaUrl = (name) => `http://megamitensei.wikia.com/wiki/${name}`;

Object.keys(personas).slice(0,1).forEach(persona => {
  //console.log("Searching for: " + persona);
  persona = 'Hua Po';
  request(getPersonaUrl(persona), (error, response, body) => {
    if (error) {
      console.log("Error: " + error);
    }
    if (response.statusCode !== 200) {
      console.log(`${persona} status code: ${response.statusCode}`);
    } else {
      var $ = cheerio.load(body);
      var thumbnails = $('.thumbimage');
      if (thumbnails && thumbnails.length > 0) {
        try {
          var url = (thumbnails[0].attribs['data-src']);
          var split = url.split("/revision");
          var first = split[0];

        }
      }
      else {
        console.log("No thumb found for: " + persona);
      }
    }
  })
});
