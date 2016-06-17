
( function(){
	angular.module('Patriot')
	.controller('PostController', ['$scope', '$http', '$state', function($scope, $http, $state){
			console.log($state.params.id);
		$http.get('api/posts/post?id='+$state.params.id).then(function(res){
          $scope.post = res.data; 
                     
        });

			$scope.createNewPost = function(){
			$http.post('api/posts/create', $scope.post).success(function(response){
				$state.go('home');
			}).error(function(err){
				console.log(err);
			})
		}

		$scope.createComment = function(id){
			console.log('ID is ' + id);
			var request = {
				comment : $scope.comment,
				id : id
			}
			$http.post('api/posts/createComment', request).success(function(response){
			}).error(function(err){
				console.log(err);
			})
		}
	}]);
}());