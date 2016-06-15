(function(){
	angular.module('Patriot', ['ui.router', 'ngFileUpload'])
		.config(function($stateProvider){
			$stateProvider
				.state('default',{
					url: '',
					templateUrl: 'app/home/home-view.html'	
				})
				.state("home", {
					url: '/home',
					templateUrl: 'app/home/logged-in-home-view.html'
				})
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