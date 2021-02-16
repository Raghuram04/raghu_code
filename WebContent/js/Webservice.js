var filterctrl = angular.module('myAppService',[]).controller('serviceController',function($scope,$http){
	$http.get("http://www.w3schools.com/angular/customers.php")
    .success(function(response) {$scope.names = response.records;});
});