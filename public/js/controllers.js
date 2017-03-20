//controller for the handel the requests

app.controller('userController',[ '$scope','$location','userModel',function($scope,$location,userModel) {

  angular.extend($scope,{
    doLogin:function (loginForm) {

      console.log($scope.login);
         var userObj = {
           email:$scope.login.email,
           password:$scope.login.password
         };

           userModel.doLogin(userObj).then(function() {
             $location.path('/dashboard');
          });

    },
    doLogout:function () {
            userModel.doLogout();
              $location.path('/');

    }
  });
}]);
