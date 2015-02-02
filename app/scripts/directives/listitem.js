'use strict';

/**
 * @ngdoc directive
 * @name animateTalkApp.directive:listItem
 * @description
 * # listItem
 */
angular.module('animateTalkApp')
  .directive('listItem', function ($animate) {
    return {
      restrict: 'A',
      scope: {
        index: '='
      },
      link: function postLink($scope, $element) {
        var running;
        $scope.$watch('index', function(index) { // oldIndex
          if(running) {
            $animate.cancel(running);
          }
          running = $animate.addClass($element, 'top-transition', {
            // from: {
            //   top: 0
            // },
            to: {
              top: (index * 46) + 'px'
            }
          });
          console.log(index);
        });
      }
    };
  });
