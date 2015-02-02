'use strict';

describe('Directive: listItem', function () {

  // load the directive's module
  beforeEach(module('animateTalkApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<list-item></list-item>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the listItem directive');
  }));
});
