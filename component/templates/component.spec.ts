import {
it,
inject,
injectAsync,
describe,
beforeEachProviders,
TestComponentBuilder
} from 'angular2/testing';

import {Component, provide} from 'angular2/core';
import {BaseRequestOptions, Http} from 'angular2/http';
import {MockBackend} from 'angular2/http/testing';

// Load the implementations that should be tested
import {<%= componentName %>} from './<%= kebabName %>';

describe('<%= componentName %>', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEachProviders(() => [
    <%= componentName %>,
    BaseRequestOptions,
    MockBackend,
    provide(Http, {
      useFactory: function(backend, defaultOptions) {
        return new Http(backend, defaultOptions);
      },
      deps: [MockBackend, BaseRequestOptions]
    })
  ]);

  it('should have a http', inject([<%= componentName %>], (<%= camelName %>) => {
    expect(!!<%= camelName %>.http).toEqual(true);
  }));

  it('should log ngOnInit', inject([<%= componentName %>], (<%= camelName %>) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    <%= camelName %>.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));

});
