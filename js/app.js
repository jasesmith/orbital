(function($angular) {
    'use strict';

    $angular.module('app', ['jamfu'])

    .controller('appController', ['$scope', function($scope) {

        $scope.headline = 'Orbital';
        $scope.icon = 'dot-circle-o';

        $scope.items = [
          {id: 1, priority: 1},
          {id: 2, priority: 3},
          {id: 3, priority: 1},
          {id: 4, priority: 2},
          {id: 5, priority: 1}
        ];

        $scope.items2 = [
          {id: 1, priority: 1},
          {id: 2, priority: 2},
          {id: 3, priority: 0}
        ];

    }]);

})(window.angular);
