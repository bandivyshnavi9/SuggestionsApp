app.controller("CommentControllers", ['$scope', 'suggestions','$routeParams',
 function($scope, suggestions, $routeParams){
 $scope.value = $routeParams.id;
 $scope.index = -1;
 angular.forEach(suggestions.posts, function(value, index){
 	if(value.title === $scope.value){
 		$scope.index = index;
 		return;
 	}
 });
$scope.post = suggestions.posts[$scope.index];
$scope.AddComment = function(){
	if(!$scope.new_comment || $scope.new_comment === '')
	{
		return;
	}
	$scope.post.comments.push($scope.new_comment);
	$scope.new_comment ="";
};
}]);