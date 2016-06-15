
( function(){
	angular.module('Patriot')
	.controller('PostController', ['$scope', '$http', '$state', function($scope, $http, $state){
		
		$scope.createNewPost = function(){
			$http.post('api/posts/create', $scope.post).success(function(response){

			}).error(function(err){
				console.log(err);
			})
		}
	}]);
}());