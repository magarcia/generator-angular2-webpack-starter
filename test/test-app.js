'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('when angular2 webpack starter generator generates', function() {

  before(function(done) {
    helpers.run(path.join(__dirname, '../app'))
      .inDir(path.join(os.tmpdir(), './foo'))
      .withPrompts({
        appname: 'Angular2',
        description: 'Lorem ipsum',
        keywords: 'Angular2, TypeScript',
        name: 'Rick',
        email: 'foo@example.com',
        website: 'http://example.com',
        license: 'MIT'
      })
      // always skip install in tests
      .withOptions({
        'skip-install': true,
      })
      .on('end', done);
  });

  it('should create the required static files', function() {
    assert.file([
      'package.json',
      '.editorconfig',
      '.gitignore',
      'README.md',
      'karma.conf.js',
      'protractor.conf.js',
      'tslint.json',
      'tsfmt.json',
      'tsconfig.json',
      'typings.json',
      'typedoc.json',
      'spec-bundle.js',
      'webpack.config.js',
      'webpack.prod.config.js',
      'webpack.test.config.js',
      'src/main.ts',
      'src/vendor.ts',
      'src/index.html',
      'src/app/app.ts',
      'src/app/app.spec.ts',
      'src/app/directives/router-active.ts',
      'src/app/home/home.ts',
      'src/app/home/home.spec.ts',
      'src/app/home/home.html',
      'src/app/home/home.css',
      'src/app/home/directives/x-large.ts',
      'src/app/home/directives/x-large.spec.ts',
      'src/app/home/providers/title.ts',
      'src/app/home/providers/title.spec.ts',
      'src/assets/humans.txt',
      'src/assets/robots.txt',
      'src/assets/service-worker.js',
      'src/assets/icon/android-icon-144x144.png',
      'src/assets/icon/android-icon-192x192.png',
      'src/assets/icon/android-icon-36x36.png',
      'src/assets/icon/android-icon-48x48.png',
      'src/assets/icon/android-icon-72x72.png',
      'src/assets/icon/android-icon-96x96.png',
      'src/assets/icon/apple-icon-114x114.png',
      'src/assets/icon/apple-icon-120x120.png',
      'src/assets/icon/apple-icon-144x144.png',
      'src/assets/icon/apple-icon-152x152.png',
      'src/assets/icon/apple-icon-180x180.png',
      'src/assets/icon/apple-icon-57x57.png',
      'src/assets/icon/apple-icon-60x60.png',
      'src/assets/icon/apple-icon-72x72.png',
      'src/assets/icon/apple-icon-76x76.png',
      'src/assets/icon/apple-icon-precomposed.png',
      'src/assets/icon/apple-icon.png',
      'src/assets/icon/browserconfig.xml',
      'src/assets/icon/favicon-16x16.png',
      'src/assets/icon/favicon-32x32.png',
      'src/assets/icon/favicon-96x96.png',
      'src/assets/icon/favicon.ico',
      'src/assets/icon/ms-icon-144x144.png',
      'src/assets/icon/ms-icon-150x150.png',
      'src/assets/icon/ms-icon-310x310.png',
      'src/assets/icon/ms-icon-70x70.png',
      'test/injector.spec.ts',
      'test/sanity-test.spec.ts',
      'test/app/app.e2e.js',
    ]);
  });

  it('updates package.json file with appname', function () {
    assert.fileContent('package.json', '"name": "Angular2"');
  });

  it('updates package.json file with author', function () {
    assert.fileContent('package.json', '"author": "Rick <foo@example.com>"');
  });

  it('updates package.json file with description', function () {
    assert.fileContent('package.json', '"description": "Lorem ipsum"');
  });

  it('updates package.json file with homepage', function () {
    assert.fileContent('package.json', '"homepage": "http://example.com"');
  });

  it('updates package.json file with license', function () {
    assert.fileContent('package.json', '"license": "MIT"');
  });

  it('updates webpack.config.js file with appname', function () {
    assert.fileContent('webpack.config.js', "title: 'Angular2'");
  });

  it('updates webpack.prod.config.js file with appname', function () {
    assert.fileContent('webpack.prod.config.js', "title: 'Angular2'");
  });

  it('updates src/assets/manifest.json file with appname', function () {
    assert.fileContent('src/assets/manifest.json', '"name": "Angular2"');
  });

  it('updates src/app/app.ts file with appname', function () {
    assert.fileContent('src/app/app.ts', "name = 'Angular2'");
  });

  it('updates src/app/app.spec.ts file with appname', function () {
    assert.fileContent('src/app/app.spec.ts', "expect(app.name).toEqual('Angular2');");
  });

  it('updates test/app/app.e2e.js file with appname', function () {
    assert.fileContent('test/app/app.e2e.js', "var result  = 'Angular2';");
  });

});
