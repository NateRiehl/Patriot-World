
( function(){
	angular.module('Patriot')
	.controller('PostController', ['$scope', '$http', '$state', function($scope, $http, $state){
		if($state.params.id != undefined){
			$http.get('api/posts/post?id='+$state.params.id).then(function(res){
          	$scope.post = res.data;          
        	});
		}

			$scope.createNewPost = function(){
			
			$scope.post.author = JSON.parse(localStorage.getItem('User-Data')).id; //Add user's id
			$http.post('api/posts/create', $scope.post).success(function(response){
				$state.go('home');
			}).error(function(err){
				console.log(err);
			})
		}

		$scope.createComment = function(id){
			var request = {
				comment : $scope.comment,
				id : id
			}
			$http.post('api/posts/createComment', request).then(function(data){
				$scope.post.comments.push({body: $scope.comment});
			},function(data){
				
			})
		}

		$scope.reply = function(postId, commentId, replyText){
			var request = {
				reply : replyText,
				commentId : commentId,
				postId : postId
			}
			$http.post('api/posts/createReply', request).success(function(response){
			}).error(function(err){
				console.log(err);
			})
		}
	}]);
}());