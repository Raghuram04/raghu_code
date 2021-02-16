var quiz = angular.module('quizApp', ['ngRoute']);

quiz.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/', {
        templateUrl: 'view/quizhomepage.html',
        controller: 'quizHomeController'
    })
    .when('/login',{
    	  templateUrl: 'view/quizloginpage.html',
          controller: 'quizHomeController'
    })
     .when('/category',{
    	  templateUrl: 'view/ListOfTopics.html',
          controller: 'quizHomeController'
    })
     .when('/Politics/:questionNumber',{
    	  templateUrl: 'view/Politics.html',
          controller: 'politicsController'
    })
     .when('/Sports/:questionNumber',{
    	  templateUrl: 'view/Sports.html',
          controller: 'sportsController'
    })
     .when('/Science/:questionNumber',{
    	  templateUrl: 'view/Science.html',
          controller: 'scienceController'
    })
     .when('/General/:questionNumber',{
    	  templateUrl: 'view/General.html',
          controller: 'generalController'
    })
   ;	
}]);

quiz.controller('politicsController',function($scope,$http,$routeParams){
	$scope.filename =  "politics"+$routeParams.questionNumber;
	$http.get("http://localhost:8080/AngularTutorial/response/politics/"+$scope.filename+".json")
    .success(function(response) {    	
    	$scope.no = response.no;
    	$scope.question = response.question;
    	$scope.options = response.options;   
    });
	
});

quiz.controller('sportsController',function($scope,$http,$routeParams){
	$scope.filename =  "sports"+$routeParams.questionNumber;
	$http.get("http://localhost:8080/AngularTutorial/response/sports/"+$scope.filename+".json")
    .success(function(response) {    	
    	$scope.no = response.no;
    	$scope.question = response.question;
    	$scope.options = response.options;   
    });
	
});

quiz.controller('scienceController',function($scope,$http,$routeParams){
	$scope.filename =  "science"+$routeParams.questionNumber;
	$http.get("http://localhost:8080/AngularTutorial/response/science/"+$scope.filename+".json")
    .success(function(response) {    	
    	$scope.no = response.no;
    	$scope.question = response.question;
    	$scope.options = response.options;   
    });
	
});

quiz.controller('generalController',function($scope,$http,$routeParams){
	$scope.filename =  "general"+$routeParams.questionNumber;
	$http.get("http://localhost:8080/AngularTutorial/response/general/"+$scope.filename+".json")
    .success(function(response) {    	
    	$scope.no = response.no;
    	$scope.question = response.question;
    	$scope.options = response.options;   
    });
	
});