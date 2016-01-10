app.controller('mainController',['$scope', function($scope){
  $scope.framework = ' Im angular js';
  $scope.intro = 'This part of angular we create the necessary variables and functions to the page';
  $scope.total = 0;
  $scope.angularImage = 'img/angularjs-logo.png';
  $scope.list = [
    {
  	  name: 'AngularJs',
  	  whatIs: 'Im a javascript framework',
      syntax: 'Directives and Expressiones',
  	  number: 9
    },
    {
      name: 'Directives',
   	  whatIs: 'AngularJs extends (hereda) HTML attributes with Directives',
   	  syntax: 'ng-something="" ',
      number: 11
    },
    {
      name: 'Expressions',
   	  whatIs: 'Binds data to HTML with Expressions',
      syntax: '{{}}',
   	  number: 7
    }
  ];

  $scope.plus = function(){
    $scope.total += $scope.list[1].number;
  };  
 
}]);