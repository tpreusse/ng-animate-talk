'use strict';

/**
 * @ngdoc directive
 * @name animateTalkApp.directive:topOffset
 * @description
 * # topOffset
 */
angular.module('animateTalkApp')
  .directive('offset', function () {
    return {
      restrict: 'A',
      scope: {
        offset: '=offset'
      },
      link: function postLink($scope, $element) {
        $scope.offset = function() {
          return $element.offset();
        };
      }
    };
  });
