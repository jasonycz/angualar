(function () {
  'use strict';

angular.module('myApp', []).controller('MyController', function($scope, $interpolate) {
	// 设置监听
	$scope.$watch('emailBody', function(bodyr) {
		if(bodyr){
			var template = $interpolate(bodyr);
			$scope.previewText =
			template({to: $scope.to});
		}
	});
});





})();