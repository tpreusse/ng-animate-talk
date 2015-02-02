'use strict';

describe('Directive: topOffset', function () {

  // load the directive's module
  beforeEach(module('animateTalkApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<top-offset></top-offset>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the topOffset directive');
  }));
});
