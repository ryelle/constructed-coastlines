Constructed Coastlines
======================

Generate your own coastline region, complete with its own language for city & territory names! This is a project using [terrain](https://github.com/mewo2/terrain) and [language](https://github.com/mewo2/naming-language) generation originally written by [mewo2](https://github.com/mewo2), but updated slightly for use here. For more info on the terrain & language generation, check out his write up here: [http://mewo2.com/](http://mewo2.com/#unchartedatlas)

![](https://cldup.com/gFtLIGI2dJ.png)

## Run this locally!

If you want to run this yourself, cool! The following will get you set up:

```
git clone --recursive https://github.com/ryelle/constructed-coastlines constructed-coastlines
cd constructed-coastlines
npm install
npm run dev
```

This doesn't run a local server, so you'll need to handle that yourself. I have [http-server](https://www.npmjs.com/package/http-server) installed, so I was able to do this:

`hs -a maps.localhost -p 3000`

Which gave me [http://maps.localhost:3000/](http://maps.localhost:3000/).

## Save your maps

If you want to save anything generated, you can print to PDF, or open the inspector in your browser and copy the generated HTML/SVG code. There isn't currently a build-in way to save your maps.
