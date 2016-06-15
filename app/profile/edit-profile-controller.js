(function(){
	angular.module('Patriot')
	.controller('EditProfileController', ['Upload', '$scope', '$state', '$http', function(Upload
		,$scope, $state, $http){

			$scope.user = JSON.parse(localStorage['User-Data']) || undefined;
			console.log($scope.user);
			$scope.$watch(function(){
				return $scope.file
			}, function(){
				$scope.upload($scope.file)
			});

			$scope.upload = function(file){
				if(file){
					Upload.upload({
						url: 'api/profile/editPhoto',
						method: 'POST',
						data: {userId : $scope.user.id},
						file: file
					}).progress(function(event){
						console.log('firing');
					}).success(function(data){

					}).error(function(err){
						console.log(err);
					});
				}
			}

			$scope.updateUsername = function(){
				var request = {
					userId: $scope.user.id,
					username: $scope.user.username
				} 
				$http.post('api/profile/updateUsername', request).success(function(){
					console.log('success');
				}).error(function(err){
					console.log(err);
				});
			}
			$scope.updateBio = function(){
				var request = {
					userId: $scope.user.id,
					bio: $scope.user.bio
				} 
				$http.post('api/profile/updateBio', request).success(function(){
					console.log('success');
				}).error(function(err){
					console.log(err);
				});
			}
	}]);
}());