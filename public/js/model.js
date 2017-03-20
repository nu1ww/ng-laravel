

// Factory for work with backend

app.factory('userModel', ['$http','$cookies',function($http,$cookies){
   var userModel={};

   userModel.doLogin = function (userObj) {

    return   $http({
           method: 'POST',
           url: baseUrl+'auth',
           headers: {
               'Content-Type': 'application/json'
           },
           data: { email: userObj.email,
               password: userObj.password}
       }).success(function (response) {

          $cookies.put('auth',JSON.stringify(response));
          console.log(response);

       }).error(function (data,status,header) {
           console.log(data,status,header);
           //alert(data);
       });
   };

   userModel.getAuthStatus=function () {

     var status=$cookies.get('auth');
     if(status){
       return true;
     }else {
        return false;
     }

   };

   userModel.getUserObject=function () {

      var userObj=angular.fromJson($cookies.get('auth'));
      return userObj;

   };

   userModel.doLogout=function () {
    // alert('dddd');
       $cookies.remove('auth');
   };

   return userModel;

}]);
