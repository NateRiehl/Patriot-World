( function(){
	angular.module('Patriot')
	.controller('HomeController', ['$scope', '$http', '$state', function($scope, $http, $state){
		
		$http.get('api/posts').then(function(res){
          $scope.posts = res.data;              
        });
		
	}]);
}());

