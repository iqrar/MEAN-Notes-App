angular.module('CtrlNotes',[])
 .controller('Note', function($http,$scope,$location) {
    /* get notes */
	$http.get('/notes').success(function(data){
	}).error(function(){
       console.log('error');
	});
    $scope.note = {};

	/* create notes */
    $scope.createNote = function(){
         $http.post('/notes', $scope.note).success(function(data){
            $location.path('/home');
	      }).error(function(){
             console.log('error');
	      });
	  };

 });