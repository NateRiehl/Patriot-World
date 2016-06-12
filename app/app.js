(function(){
	angular.module('Patriot', ['ui.router', 'ngFileUpload'])
		.config(function($stateProvider){
			$stateProvider
				.state("signup", {
					url: '/signup',
					templateUrl: 'app/signup/signup.html',
					controller: 'SignupController'
				})
				.state("editProfile", {
					url: '/edit-profile',
					templateUrl: 'app/profile/edit-profile-view.html',
					controller: 'EditProfileController'
				})		
		})
}());