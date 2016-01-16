# Generator Angular2 Webpack Starter

[![Build Status](https://travis-ci.org/magarcia/generator-angular2-webpack-starter.svg?branch=master)](https://travis-ci.org/magarcia/generator-angular2-webpack-starter)  [![Gratipay Team](https://img.shields.io/gratipay/user/magarcia.svg)](https://gratipay.com/~magarcia/)  [![Code Climate](https://img.shields.io/codeclimate/github/magarcia/generator-angular2-webpack-starter.svg)]()

A [Yeoman](http://yeoman.io) Generator to aid in bootstrapping an Angular2 application based on [Angular 2 Starter](https://angularclass.github.io/angular2-webpack-starter/)

### Getting Started

Install both [Yeoman](http://yeoman.io) and this generator globally.

```bash
npm install -g yo generator-angular2-webpack-starter
```

In your desired project folder run the generator.

```bash
yogenerator-angular2-webpack-starter
```

You'll be prompted to start the server once the generator has finished.

You'll then be able to access the application at `http://localhost:3000`.

### Generated Structure

The structure generated is;

```
angular2-webpack-starter/
 ├──src/                       * our source files that will be compiled to javascript
 |   ├──main.ts                * our entry file for our browser environment
 │   │
 |   ├──index.html             * Index.html: where we generate our index page
 │   │
 |   ├──vendor.ts              * our vendor file
 │   │
 │   ├──app/                   * WebApp: folder
 │   │   ├──app.spec.ts        * a simple test of components in app.ts
 │   │   └──app.ts             * App.ts: a simple version of our App component components
 │   │
 │   └──assets/                * static assets are served here
 │       ├──icon/              * our list of icons from www.favicon-generator.org
 │       ├──service-worker.js  * ignore this. Web App service worker that's not complete yet
 │       ├──robots.txt         * for search engines to crawl your website
 │       └──human.txt          * for humans to know who the developers are
 │
 ├──test/                      * this is our global unit tests and end-to-end tests
 │
 ├──spec-bundle.js             * ignore this magic that sets up our angular 2 testing environment
 ├──karma.config.js            * karma config for our unit tests
 ├──protractor.config.js       * protractor config for our end-to-end tests
 │
 ├──tsconfig.json              * config that webpack uses for typescript
 ├──typings.json               * our typings manager
 ├──package.json               * what npm uses to manage it's dependencies
 │
 ├──webpack.config.js          * our development webpack config
 ├──webpack.test.config.js     * our testing webpack config
 └──webpack.prod.config.js     * our production webpack config
```

### Developing

All contributions are more than welcome, no matter how large or small.

Clone the repository and `cd` into it

`git clone git@github.com:magarcia/generator-angular2-webpack-starter.git && cd generator-angular2-webpack-starter`

Install the project dependencies

`npm install`

Link the package to use the version you're working on

`npm link`

Run the tests to ensure no failures

`npm test`

Submit a pull request with your changes

### License

Released under the MIT license: [opensource.org/licenses/MIT](http://opensource.org/licenses/MIT)
