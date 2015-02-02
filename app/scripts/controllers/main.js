'use strict';

/**
 * @ngdoc function
 * @name animateTalkApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the animateTalkApp
 */
angular.module('animateTalkApp')
  .controller('MainCtrl', function($scope, $window) {
    var $jqWindow = $($window);

    function measure() {
      $scope.windowHeight = $jqWindow.height();
      $scope.windowWidth = $jqWindow.width();
    }

    $jqWindow
      .scroll(function() {
        $scope.$apply(function() {
          $scope.scrollTop = $jqWindow.scrollTop();
        });
      })
      .resize(function() {
        $scope.$apply(function() {
          measure();
        });
      });

    measure();

    $scope.offsets = {};
    
    var candidates = ['Luzi Bernet', 'Colette Gradwohl', 'Réne Zeller', 'Eric Gujer', 'Francesco Benini', 'Felix E. Müller', 'Martin Meyer'];
    $scope.list = [
      'Markus Spillmann',
      'Markus Somm',
      'Réne Zeller'
    ];
    $scope.add = function() {
      candidates.forEach(function(candidate) {
        if($scope.list.indexOf(candidate) === -1) {
          $scope.list.push(candidate);
        }
      });
    };
    $scope.rm = function(candidate) {
      var index = $scope.list.indexOf(candidate);
      if(index !== -1) {
        $scope.list.splice(index, 1);
      }
    };
    $scope.clear = function() {
      $scope.list = [];
    };

    function shuffle(array) {
      var counter = array.length, temp, index;

      // While there are elements in the array
      while (counter > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
      }

      return array;
    }
    $scope.shuffle = function() {
      shuffle($scope.list);
    };
  });
