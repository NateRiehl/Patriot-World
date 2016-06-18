
( function(){
	angular.module('Patriot')
	.controller('PostController', ['$scope', '$http', '$state', function($scope, $http, $state){
		if($state.params.id != undefined){
			$http.get('api/posts/post?id='+$state.params.id).then(function(res){
          	$scope.post = res.data;          
        	});
		}
		var test = localStorage.getItem('User-Data');
		console.log(JSON.parse(test).id);
			$scope.createNewPost = function(){
			
			$scope.post.author = JSON.parse(localStorage.getItem('User-Data')).id; //Add user's id
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