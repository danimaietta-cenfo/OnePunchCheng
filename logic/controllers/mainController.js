app.controller('mainController',['$scope', function($scope){
  $scope.framework = ' Im angular js';
  $scope.intro = 'This part of angular we create the necessary variables and functions to the page';
  $scope.total = 0;
  $scope.list = [
    {
  	  name: 'AngularJs',
  	  whatIs: 'Im a javascript framework',
  	  number: 9
    },
    {
      name: 'Directives',
   	  whatIs: 'AngularJs extends (hereda) HTML attributes with Directives',
   	  number: 11
    },
    {
      name: 'Expressions',
   	  whatIs: 'Binds data to HTML with Expressions',
   	  number: 7
    }
  ];

  $scope.plus = function(index){
    $scope.total += $scope.list[index].number;
  };  
 
}]);