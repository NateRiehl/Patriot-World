
( function(){
	angular.module('Patriot')
	.controller('PostController', ['$scope', '$http', '$state', function($scope, $http, $state){
		console.log($state.params.title);
		$scope.title = $state.params.title;
		$scope.body = $state.params.body;
		$scope.createNewPost = function(){
			$http.post('api/posts/create', $scope.post).success(function(response){
				$state.go('home');
			}).error(function(err){
				console.log(err);
			})
		}
	}]);
}());