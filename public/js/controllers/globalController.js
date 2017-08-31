app.controller('globalController',['$scope',function ($scope) {
  $scope.global={};
  $scope.global.nav='template/nav.html'
}]);

app.controller('navController',['$scope','$location','userModel',function ($scope,$location,userModel) {
  angular.extend($scope,{
    doLogout:function () {
      userModel.doLogout();
      $location.path('/');

    },
    user:userModel.getUserObject(),
    navUrl:[{
      link:'Home',
      url:'/dashboard'
    },{link:'Add',
  url:'/add'}]
  });
}]);


//test
