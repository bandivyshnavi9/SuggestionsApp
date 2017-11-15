var app = angular.module("SuggestionBox", ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
	$locationProvider.html5Mode(true).hashPrefix('!');
	 $routeProvider.when('/suggestion',{
		controller: 'HomeControllers',
		templateUrl: 'views/home.html'
	}).when('/suggestion/:id', {
		controller: 'CommentControllers',
		templateUrl: 'views/singlesuggestion.html'
	}).otherwise({
		redirectTo :'/suggestion'
	});
});
