
angular.module('ui.bootstrap.demo', ['ui.bootstrap', 'ngAnimate']).controller('CollapseDemoCtrl', function ($scope) {
  $scope.isNavCollapsed = true;
  $scope.isCollapsed = false;
  $scope.isCollapsedHorizontal = false;
});
