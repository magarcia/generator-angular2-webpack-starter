'use strict';

var chalk = require('chalk');
var lodash = require('lodash');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var mkdirp = require('mkdirp');
var gitConfig = require('git-config');

function makeGeneratorName(name) {
  return lodash.kebabCase(name);
}

function makeKeywordsArray(string) {
  string = string.split(',');
  var list = lodash.map(string, function (s) {
    return s.trim();
  });
  return list;
}

var licenses = [
  { name: 'Apache 2.0', value: 'Apache-2.0' },
  { name: 'MIT', value: 'MIT' },
  { name: 'Unlicense', value: 'unlicense' },
  { name: 'FreeBSD', value: 'BSD-2-Clause-FreeBSD' },
  { name: 'NewBSD', value: 'BSD-3-Clause' },
  { name: 'Internet Systems Consortium (ISC)', value: 'ISC' },
  { name: 'No License (Copyrighted)', value: 'nolicense' }
];

module.exports = yeoman.generators.Base.extend({
  constructor: function() {
    yeoman.generators.Base.apply(this, arguments);

    // add option to skip install
    this.option('skip-install', {
      desc: 'Skip installation after generate app',
      required: false
    });

  },

  initializing: function () {
    this.props = {};
    this.gitc = gitConfig.sync();
    this.gitc.user = this.gitc.user || {};
  },

  prompting: function() {
    var done = this.async();

    // yeoman greeting
    this.log(yosay(
      'Yo! I\'m here to help build your ' +
      chalk.bold.yellow('Angular2') +
      ' application.'
    ));

    var choices = licenses;

    var prompts = [
      {
        name: 'appname',
        message: 'Your application name',
        default: makeGeneratorName(path.basename(process.cwd())),
        filter: makeGeneratorName,
        validate: function (str) {
          return str.length > 0;
        }
      },
      {
        name: 'description',
        message: 'Description of the application:'
      },
      {
        name: 'keywords',
        message: 'Keywords:',
        default: ''
      },
      {
        name: 'name',
        message: 'What\'s your name:',
        default: this.options.name || this.gitc.user.name,
        when: !this.options.name
      },
      {
        name: 'email',
        message: 'Your email (optional):',
        default: this.options.email || this.gitc.user.email,
        when: !this.options.email
      },
      {
        name: 'website',
        message: 'Your website (optional):',
        default: this.options.website,
        when: !this.options.website
      },
      {
        type: 'list',
        name: 'license',
        message: 'Which license do you want to use?',
        choices: choices
      }
    ];

    this.prompt(prompts, function (props) {
      this.props = lodash.extend(this.props, props);
      this.props.author = this.props.name.trim();
      if (this.props.email) {
        this.props.author += ' <' + this.props.email.trim() + '>';
      }
      done();
    }.bind(this));
  },

  writing: {
    license: function () {
      var filename = this.props.license + '.txt';

      this.fs.copyTpl(
        this.templatePath(path.join('licenses', filename)),
        this.destinationPath('LICENSE'),
        {
          year: this.options.year,
          author: this.props.author
        }
      );
    },
    app: function() {

      var that = this;

      var copy = function (file, options) {
        if(typeof(options) === 'object') {
          that.fs.copyTpl(
            that.templatePath(file),
            that.destinationPath(file.replace(/^_/, '.')),
            options
          );
        } else {
          that.fs.copy(
            that.templatePath(file),
            that.destinationPath(file.replace(/^_/, '.'))
          );
        }
      }

      copy('package.json', {
        appname: this.props.appname,
        author: this.props.author,
        homepage: this.props.website.trim(),
        license: this.props.license,
        description: this.props.description
      });
      var pkg = this.fs.readJSON(this.destinationPath('package.json'), {});
      pkg.keywords = makeKeywordsArray(this.props.keywords) || [];
      this.fs.writeJSON(this.destinationPath('package.json'), pkg);

      copy('_editorconfig');
      copy('_gitignore');
      copy('README.md', {
        appname: this.props.appname,
        description: this.props.description,
        license: this.props.license
      });
      copy('karma.conf.js');
      copy('protractor.conf.js');
      copy('tslint.json');
      copy('tsfmt.json');
      copy('tsconfig.json');
      copy('typings.json');
      copy('typedoc.json');
      copy('spec-bundle.js');
      copy('webpack.config.js', {
        appname: this.props.appname
      });
      copy('webpack.prod.config.js', {
        appname: this.props.appname
      });
      copy('webpack.test.config.js');

      // Source files
      copy('src/main.ts');
      copy('src/vendor.ts');
      copy('src/index.html');

      // App
      copy('src/app/app.ts', {
        appname: this.props.appname,
        name: this.props.name.trim(),
        email: this.props.email
      });
      copy('src/app/app.spec.ts', {
        appname: this.props.appname
      });
      copy('src/app/directives/router-active.ts');

      // App Home
      copy('src/app/home/home.ts');
      copy('src/app/home/home.spec.ts');
      copy('src/app/home/home.html');
      copy('src/app/home/home.css');
      copy('src/app/home/directives/x-large.ts');
      copy('src/app/home/directives/x-large.spec.ts');
      copy('src/app/home/providers/title.ts');
      copy('src/app/home/providers/title.spec.ts');

      // Assets
      copy('src/assets/manifest.json', {
        appname: this.props.appname
      });
      copy('src/assets/humans.txt');
      copy('src/assets/robots.txt');
      copy('src/assets/service-worker.js');
      mkdirp.sync(that.destinationPath('src/assets/css'));
      mkdirp.sync(that.destinationPath('src/assets/img'));
      copy('src/assets/icon/android-icon-144x144.png');
      copy('src/assets/icon/android-icon-192x192.png');
      copy('src/assets/icon/android-icon-36x36.png');
      copy('src/assets/icon/android-icon-48x48.png');
      copy('src/assets/icon/android-icon-72x72.png');
      copy('src/assets/icon/android-icon-96x96.png');
      copy('src/assets/icon/apple-icon-114x114.png');
      copy('src/assets/icon/apple-icon-120x120.png');
      copy('src/assets/icon/apple-icon-144x144.png');
      copy('src/assets/icon/apple-icon-152x152.png');
      copy('src/assets/icon/apple-icon-180x180.png');
      copy('src/assets/icon/apple-icon-57x57.png');
      copy('src/assets/icon/apple-icon-60x60.png');
      copy('src/assets/icon/apple-icon-72x72.png');
      copy('src/assets/icon/apple-icon-76x76.png');
      copy('src/assets/icon/apple-icon-precomposed.png');
      copy('src/assets/icon/apple-icon.png');
      copy('src/assets/icon/browserconfig.xml');
      copy('src/assets/icon/favicon-16x16.png');
      copy('src/assets/icon/favicon-32x32.png');
      copy('src/assets/icon/favicon-96x96.png');
      copy('src/assets/icon/favicon.ico');
      copy('src/assets/icon/ms-icon-144x144.png');
      copy('src/assets/icon/ms-icon-150x150.png');
      copy('src/assets/icon/ms-icon-310x310.png');
      copy('src/assets/icon/ms-icon-70x70.png');

      // Tests
      copy('test/injector.spec.ts');
      copy('test/sanity-test.spec.ts');
      copy('test/app/app.e2e.js', {
        appname: this.props.appname
      });
    }
  },

  install: function() {
    this.installDependencies({
      skipInstall: this.options['skip-install'],
      bower: false,
      callback: function() {
        this.emit('dependenciesInstalled');
      }.bind(this)
    });

    this.on('dependenciesInstalled', function() {
      this.spawnCommand('./node_modules/.bin/webpack').on('close', function() {
        this.log('');
        this.log('');
        this.log('Setup complete, run ' +
          chalk.bold.yellow('npm run server') +
          ' to start serving the application' +
          ' (it\'ll also start watching for any changes you make).');
        this.log('');
      }.bind(this));
    }.bind(this));

  }
});
