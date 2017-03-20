

// Factory for work with backend

app.factory('userModel', ['$http','$cookies',function($http,$cookies){
   var userModel={};

   userModel.doLogin = function (userObj) {

     alert('ok');

    return   $http({
           method: 'POST',
           url: baseUrl+'auth',
           headers: {
               'Content-Type': 'application/json'
           },
           data: { email: userObj.email,
               password: userObj.password}
       }).success(function (response) {
          $cookies.put('auth',response);
           console.log(response);

       }).error(function (data,status,header) {
           console.log(data,status,header);
           alert(data);
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

   userModel.doLogout=function () {
    // alert('dddd');
       $cookies.remove('auth');
   };

   return userModel;

}]);
