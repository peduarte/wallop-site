Not much to see here ¯\\_(ツ)_/¯

This is the repo for the Wallop's documentation website.

If you're after Wallop Slider's documentation, check out **[Wallop.js repo](https://github.com/WallopSlider/Wallop.js)**

## About the site
This site is built with webpack and react. It uses an express server to retrieve the readme file from the Wallop.js repo and then render it on the page.

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
- `ghUrl` – This will create a file called `readme.json` in `/clients/data/`
Example: `http://localhost:8080/api/ghUrl=?https://github.com/WallopSlider/Wallop.js`

## Run client
```
npm run dev
```
Client available on: **http://localhost:3000**<br>

