/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 * app.js
 */
var app = angular.module("myApp", ["ngRoute","ngCookies"]);


app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {
    $routeProvider

        .when("/", {
            templateUrl : "template/login.html",
            controller: "userController"
        })
        .when("/logout", {
            templateUrl : "template/logout.html",
            controller: "userController",
            authenticated:true

        })
        .when("/dashboard", {
            templateUrl : "template/dashboard.html",
            controller: "userController",
            authenticated:true
        })
        .when("/add", {
            templateUrl : "template/add.html",
            controller: "userController",
            authenticated:true
        }).otherwise('/');
}]);



app.run(["$rootScope","$location",'userModel',
function ($rootScope,$location,userModel) {

  $rootScope.$on("$routeChangeStart",function (event,next,current) {

     console.log(userModel.getAuthStatus());
       //console.log(current);
    if(next.$$route.authenticated){
      if(!userModel.getAuthStatus()){
          console.log('test');
        $location.path('/');
      }
    }
    if (next.$$route.originalPath == '/') {
        console.log('login page');
        if(userModel.getAuthStatus()){

          $location.path(current.$$route.originalPath);
        }

    }

  });

}]);
