( function(){
	angular.module('Patriot')
	.controller('HomeController', ['$scope', '$http', '$state', '$stateParams', function($scope, $http, $state, $stateParams){
		
		$http.get('api/posts').then(function(res){
          $scope.posts = res.data;              
        });

        $scope.upvote = function(post){
        	$http.post('api/posts/upvote', post).success(function(response){

        	}).error(function(err){

        	});
        }
	}]);
}());

