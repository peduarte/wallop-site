var express = require('express');
var cors = require('cors');
var fs = require('fs');
var request = require('request');
var marked = require('marked');
var argv = require('yargs').argv;

var OUTPUT_PATH = 'client/src/data/';

function scrapeReadme(mdUrl, callback) {
  request(mdUrl, function (error, response, html) {
    if (!error && response.statusCode == 200) {
      var parsedResult = {
      	html: marked(response.body)
      };

      fs.writeFile(OUTPUT_PATH + 'readme.json', JSON.stringify(parsedResult, null, 4), function(err){
				if (err) { return console.log(err); }
	      console.log('Your file is ready – ' + OUTPUT_PATH + 'readme.json');
      });
    }
  });
}


if (argv.url) {
	scrapeReadme(argv.url);
} else {
	console.log('You must pass a url via the --url flag');
}
