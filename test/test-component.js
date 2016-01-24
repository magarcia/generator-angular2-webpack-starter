'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('when angular2 webpack starter component subgenerator generates', function() {

  before(function(done) {
    helpers.run(path.join(__dirname, '../component'))
      .inTmpDir()
      .withArguments('angular-component')
      .on('end', done);
  });


  it('should create the required static files', function() {
    assert.file([
      'src/app/angular-component/angular-component.html',
      'src/app/angular-component/angular-component.css',
      'src/app/angular-component/angular-component.ts',
      'src/app/angular-component/angular-component.spec.ts',
    ]);
  });

  it('updates src/app/angular-component/angular-component.ts file with correct selector', function () {
    assert.fileContent('src/app/angular-component/angular-component.ts', "selector: 'angular-component',  // <angular-component></angular-component>");
  });

  it('updates src/app/angular-component/angular-component.ts file with correct css', function () {
    assert.fileContent('src/app/angular-component/angular-component.ts', "require('./angular-component.css')");
  });

  it('updates src/app/angular-component/angular-component.ts file with correct template', function () {
    assert.fileContent('src/app/angular-component/angular-component.ts', "require('./angular-component.html')");
  });

  it('updates src/app/angular-component/angular-component.ts file with class name', function () {
    assert.fileContent('src/app/angular-component/angular-component.ts', "export class AngularComponent");
  });

  it('updates src/app/angular-component/angular-component.ts file with console.log', function () {
    assert.fileContent('src/app/angular-component/angular-component.ts', "hello angular-component component");
  });

  it('updates src/app/angular-component/angular-component.html', function () {
    assert.fileContent('src/app/angular-component/angular-component.html', "Your angular-component Component");
  });

  it('updates src/app/angular-component/angular-component.spec.ts file with import', function () {
    assert.fileContent('src/app/angular-component/angular-component.spec.ts', "import {AngularComponent} from './angular-component';");
  });

  it('updates src/app/angular-component/angular-component.spec.ts file with describe', function () {
    assert.fileContent('src/app/angular-component/angular-component.spec.ts', "describe('AngularComponent', () => {");
  });

  it('updates src/app/angular-component/angular-component.spec.ts file with inject', function () {
    assert.fileContent('src/app/angular-component/angular-component.spec.ts', "inject([AngularComponent], (angularComponent) => {");
  });

  it('updates src/app/angular-component/angular-component.spec.ts file with expect', function () {
    assert.fileContent('src/app/angular-component/angular-component.spec.ts', "expect(!!angularComponent.http).toEqual(true);");
  });

  it('updates src/app/angular-component/angular-component.spec.ts file with ngOnInit', function () {
    assert.fileContent('src/app/angular-component/angular-component.spec.ts', "angularComponent.ngOnInit();");
  });
});
