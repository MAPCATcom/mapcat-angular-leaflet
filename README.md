

How to start?
--------------

This project requires [npm](https://www.npmjs.com/)

1.	Run `npm install` to install dependencies.

2.	Run `npm run build` to build the project.

3.  Open the app at `localhost:3000`.




# -- Work in progress, not ready for use yet. --

# Rendering MapCat maps from an Angular2 application with Leaflet

This is a sample project showing how to render a map in an Angular2 web application. It's using [Leaflet](http://leafletjs.com/) for rendering the tiles served by the MapCat API.

The language of this project is TypeScript and it is built with Webpack.

# Getting started

MapCat provides a couple of commercial services built on the OpenStreetMap database, including serving raster and vector based map tiles, route planning and asset tracking.

## Requirements

* Mac OS X, Windows, or Linux
* Yarn package + Node.js v6.5 or newer
* Text editor or IDE pre-configured with TypeScript/ESlint

## Get the source

For a quick start you can clone this repository:

```shell
$ git clone -o mapcat-angular2-leaflet -b master --single-branch \
      https://github.com/MapCat-Com/mapcat-angular2-leaflet.git MapCat-Sample
$ cd MapCat-Sample
```

## Install project dependencies

```shell
$ yarn install
```

This will install both run-time project dependencies and developer tools listed in package.json file.

## Run in development mode

```shell
$ yarn start
```

This command will start a webpack development server listening to requests at: ```http://localhost:3000/```

## Other tools

For a production build run:

```shell
$ yarn run build
```

The compiled, optimized static files will be put into the `build` folder.

For ESLint run:

```shell
$ yarn run lint
```

## Notice

The project uses exactly the 2.0.10 version of the typescript package as a workaround for this [issue](https://github.com/s-panferov/awesome-typescript-loader/issues/190)

# FAQ

## What are we doing exactly?

This project is a seed project that can help you get started with building leaflet applications on Angular2 using terkepem.hu map layers.

## Type definitions

Leaflet doesn't come bundled as a typed library. In order to be able to use Leaflet with TypeScript, type definitions from @type/leaflet are used as a dependency.



