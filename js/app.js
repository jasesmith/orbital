(function($angular) {
    'use strict';

    $angular.module('app', ['jamfu'])

    .controller('appController', ['$scope', function($scope) {

        $scope.headline = 'Orbital';
        $scope.icon = 'dot-circle-o';

        $scope.group = [
          {
            icon: 'github',
            items: [
              {id: 1, priority: 1},
              {id: 2, priority: 3},
              {id: 3, priority: 1},
              {id: 4, priority: 2},
              {id: 5, priority: 1}
            ]
          },
          {
            icon: 'github-square',
            items: [
              {id: 1, priority: 1},
              {id: 2, priority: 3},
              {id: 3, priority: 2},
              {id: 4, priority: 0}
            ]
          },
          {
            icon: 'github-alt',
            items: [
              {id: 1, priority: 1},
              {id: 2, priority: 3},
              {id: 3, priority: 2}
            ]
          }
        ];

    }]);

})(window.angular);
