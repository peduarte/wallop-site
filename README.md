Not much to see here ¯\\_(ツ)_/¯

This is the repo for the Wallop's documentation website.

If you're after Wallop Slider's documentation, check out **[Wallop.js repo](https://github.com/WallopSlider/Wallop.js)**

## About the site
This site is built with webpack and react.<br>
It uses a simple Express app to take a raw markdown file (in this case, I use the README.md from Wallop.js repo) and return HTML.<br>
The reason for this, is so all the latest documentation is on the correct repo, and this just feeds off of it, making my life much easier.

## Get it running
```
npm install
```

### Run server
```
npm run server
```
Server available on: **http://localhost:8080**<br>

### API
- `mdUrl` – This will create a file called `readme.json` in `/clients/data/`
Example: `http://localhost:8080/api/mdUrl=?https://raw.githubusercontent.com/WallopSlider/Wallop.js/master/README.md`
> **Note** you will need to run this with a valid mdUrl to create the readme.json

## Run client
```
npm run dev
```
Client available on: **http://localhost:3000**<br>

