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
					templateUrl: 'app/home/logged-in-home-view.html',
					controller: 'HomeController'
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
				.state('createPost', {
					url: '/create-post',
					templateUrl: 'app/posts/create-post-view.html',
					controller: 'PostController'	
				})
				.state('my-post', {
					url: '/post?:id',
					templateUrl: 'app/posts/post.html',
					params: {
						id: null
					},
					controller: 'PostController'		
  			})
		})
}());