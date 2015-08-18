Not much to see here ¯\\_(ツ)_/¯

This is the repo for the Wallop's documentation website.

If you're after wallop's documentation, check out **[wallop repo](https://github.com/peduarte/wallop)**

## About the site
This site is built with webpack and react.<br>
It uses [mdhtmljson](https://github.com/peduarte/mdhtmljson) to take a raw markdown file (in this case, I use the [README.md](https://raw.githubusercontent.com/peduarte/wallop/master/README.md) from wallops's repo) and return HTML.<br>
The reason for this, is so all the latest documentation is on the correct repo, and this just feeds off of it, making my life much easier.

## Get it running
```
npm install
```

## Run client
```
npm run dev
```
Client available on: **http://localhost:3000**<br>

## Update docs
```
npm run mdhtmljson
```
