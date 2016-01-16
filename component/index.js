'use strict';
var yeoman = require('yeoman-generator');
var lodash = require('lodash');
var path = require('path');

module.exports = yeoman.generators.NamedBase.extend({
  constructor: function() {
    yeoman.generators.NamedBase.apply(this, arguments);
  },

  writing: function () {
    var that = this;

    this.camelName = lodash.camelCase(this.name);
    this.kebabName = lodash.kebabCase(this.name);
    this.componentName = lodash.capitalize(this.camelName);

    var copy = function (file, options) {
      var origin = that.templatePath(file);
      var destination = that.destinationPath(
        path.join('src', 'app', that.kebabName, file.replace(/component/, that.kebabName))
      );

      if(typeof(options) === 'object') {
        that.fs.copyTpl(origin, destination, options);
      } else {
        that.fs.copy(origin, destination);

      }
    }

    copy('component.html');
    copy('component.css');
    copy('component.ts');
    copy('component.spec.ts');
  }

});
