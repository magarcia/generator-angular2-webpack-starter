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

    this.props = {};

    this.props.name = this.name;
    this.props.camelName = lodash.camelCase(this.name);
    this.props.kebabName = lodash.kebabCase(this.name);
    this.props.componentName = lodash.capitalize(this.props.camelName);

    var copy = function (file, options) {
      var origin = that.templatePath(file);
      var destination = that.destinationPath(
        path.join('src', 'app', that.props.kebabName, file.replace(/component/, that.props.kebabName))
      );

      if(typeof(options) === 'object') {
        that.fs.copyTpl(origin, destination, options);
      } else {
        that.fs.copy(origin, destination);

      }
    }

    copy('component.html', this.props);
    copy('component.css', this.props);
    copy('component.ts', this.props);
    copy('component.spec.ts', this.props);
  }

});
