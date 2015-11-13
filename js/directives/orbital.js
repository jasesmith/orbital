(function($angular, _){
  'use strict';

  $angular.module('app')
  .directive('orbital', ['$timeout', '$interval', function($timeout, $interval) {
    return {
      restrict: 'E',
      replace: true,

      scope: {
        items: '=?'
      },

      template: '' +
        '<div class="orbital-system">' +
          '<div ng-repeat="item in items" element>' +
            '<div capsule data-title="{{item.priority}}"></div>' +
          '</div>' +
        '</div>' +
      '',

      link: function(scope, element) {

        var mechanics = function(){
          var els = element[0].querySelectorAll('[element]');
          var l = els.length;
          _.each(els, function(el, i){
            var e = l - i;
            var capsule = el.querySelector('[capsule]');
            $angular.element(el).css({animationDuration: (e*Math.E/((scope.items[i].priority+1)/10))+'s', zIndex: i+1}); //_.random(0.3,0.7)
            $angular.element(capsule).css({top: (i*(50/l))+'%'});
          });
        };

        var interval = $interval(function() {
            if(!element[0].querySelectorAll('[element]')) {
                return;
            }
            mechanics();
            $interval.cancel(interval);
        }, 0);

      }
    };
  }]);

})(window.angular, window._);
