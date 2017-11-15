app.controller("HomeControllers", [
	'$scope','suggestions',
	 function($scope, suggestions){
	$scope.savedposts = suggestions.posts;
	$scope.addSuggestion = function(){
		if(!$scope.title || $scope.title === ""){
			return;
		}
		$scope.savedposts.push({
			title: $scope.title,
			upvotes: 0,
		});
		$scope.title = '';
	};
	$scope.upVote = function(post){
		post.upvotes += 1;
	};
}]);