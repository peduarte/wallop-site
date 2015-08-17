var express = require('express');
var cors = require('cors');
var app = express();
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');

var PORT = process.env.PORT || 8080;
var OUTPUT_PATH = 'client/src/data/';

app.use(cors());

function scrapeReadme(ghUrl, callback) {
  request(ghUrl, function (error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);
      var parsedResult = {
      	html: $('#readme .entry-content').html()
      };

      fs.writeFile(OUTPUT_PATH + 'readme.json', JSON.stringify(parsedResult, null, 4), function(err){
				if (err) { return console.log(err); }
	      return callback();
      });
    }
  });
}

app.get('/', function(req, res) {
	res.send('Nothing to see here ¯\\_(ツ)_/¯');
});

app.get('/api/readme', function(req, res) {
	console.log('req.query.ghUrl -> ', req.query.ghUrl);
  if (req.query.ghUrl) {
    scrapeReadme(req.query.ghUrl, function(data) {
    	console.log('File successfully written!');
      res.send('File successfully written!')
    });
  }
});


app.listen(PORT);
console.log('Listening at localhost:' + PORT);
